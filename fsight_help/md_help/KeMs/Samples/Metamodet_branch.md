# Копирование выражения для условия расчета метамодели

Копирование выражения для условия расчета метамодели
-


# Копирование выражения для условия расчета метамодели


## Описание


Рассмотрим копирование выражения для условия расчета из одной метамодели
 в другую метамодель.


## Требования


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего метамодели с идентификаторами
 METAMODEL, METAMODEL_DEST и модели с идентификаторами MODEL_DEFAULT, MODEL.
 Модели основаны на данных из базы данных временных рядов, содержащей обязательный
 атрибут, являющийся ссылкой на справочник НСИ с идентификатором DICT_COUNTRY.
 Данный справочник содержится в репозитории НСИ с идентификатором MDM_REPO.
 Метамодель METAMODEL_DEST должна содержать условие расчета.


Добавьте ссылки на системные сборки: Dal, Metabase, Ms.


## Пример


	Sub UserProc;

	Var

	    mb: IMetabase;

	    MsKey: Integer;

	    pMetaModelSrc, pMetaModelDest: IMsMetaModel;

	    param: IMsModelParam;

	    params: IMsModelParams;

	    branchScr, branchDest: IMsCalculationChainBranch;

	    cas, casDest: IMsBranchCase;

	    pCondExpr, pCondExprDest: IMsBranchConditionExpression;

	    expr, exprDest: IExpression;

	    CalcChain: IMsCalculationChainEntries;

	    CalcEntry: IMsCalculationChainEntry;

	    i, k, n: Integer;

	    CondDest: IMsBranchCondition;

	    gen: IMsTransformStringGenerator;

	    s: String;

	Begin

	    mb := MetabaseClass.Active;

	    // Получаем контейнер моделирования

	    MsKey := mb.GetObjectKeyById("MS");

	    // Получаем метамодель

	    pMetaModelSrc := mb.ItemByIdNamespace("METAMODEL", MsKey).Edit As IMsMetaModel;

	    // Создаем параметр в метамодели

	    params := pMetaModelSrc.Params;

	    params.Clear;

	    param := params.Add;

	    param.Hidden := True;

	    param.LinkedObject := mb.ItemByIdNamespace("DIC_COUNTRY", mb.GetObjectKeyById("MDM_REPO")).Bind;

	    param.DataType := DbDataType.String;

	    // Очищаем цепочку расчета метамодели

	    pMetaModelSrc.CalculationChain.Clear;

	    // Добавляем условие в цепочку расчета метамодели

	    branchScr := pMetaModelSrc.CalculationChain.AddBranch("Условие");

	    // Задаем параметр условия

	    branchScr.Parameter := param;

	    // Создаем ветку условия

	    cas := branchScr.CaseList.Add;

	    // Задаем модель, которая будет рассчитываться, если не выполнилась ни одна из веток условия

	    branchScr.DefaultContents.AddModel(mb.ItemByIdNamespace("MODEL_DEFAULT", MsKey).Bind As IMsModel);

	    // Задаем модель, которая рассчитывается при выполнении условия

	    cas.Contents.AddModel(mb.ItemByIdNamespace("MODEL", MsKey).Bind As IMsModel);

	    // Задаем условие расчета ветки

	    pCondExpr := cas.Conditions.Add(MsBranchConditionType.Expression) As IMsBranchConditionExpression;

	    expr := pCondExpr.Expression;

	    expr.AsString := "{" + param.Id + "}=" + """" + "Мир" + """";

	    If expr.ErrorInfo <> Null

	        Then

	            // Если в выражении есть ошибка, то выводим её в окно консоли

	            Debug.WriteLine(expr.ErrorInfo.ErrorMessage);

	        Else

	            // Сохраняем изменения  в метамодели

	            (pMetaModelSrc As IMetabaseObject).Save;

	            // Получаем метамодель, в которую будем копировать выражение для расчета условия

	            pMetaModelDest := mb.ItemByIdNamespace("METAMODEL_DEST", MsKey).Edit As IMsMetaModel;

	            // Создаем параметр в метамодели

	            params := pMetaModelSrc.Params;

	            params.Clear;

	            param := params.Add;

	            param.Hidden := True;

	            param.LinkedObject := mb.ItemByIdNamespace("DIC_COUNTRY", mb.GetObjectKeyById("MDM_REPO")).Bind;

	            param.DataType := DbDataType.String;

	            // Получаем цепочку расчета метамодели

	            CalcChain := pMetaModelDest.CalculationChain;

	            For i := 0 To CalcChain.Count - 1 Do

	                CalcEntry := CalcChain.Item(i);

	                // Получаем условия из цепочки расчета

	                If CalcEntry.Type = MsCalculationChainEntryType.Branch Then

	                    branchDest := CalcEntry As IMsCalculationChainBranch;

	                    // Перебираем ветки условия

	                    For k := 0 To branchDest.CaseList.Count - 1 do

	                        casDest := branchDest.CaseList.Item(k);

	                        // Отбираем условные ветки

	                        For n := 0 To casDest.Conditions.Count - 1 Do

	                            CondDest := casDest.Conditions.Item(n);

	                            // Копируем выражение условия из одной ветки в другую

	                            If CondDest.Type = MsBranchConditionType.Expression Then

	                                pCondExprDest := CondDest As IMsBranchConditionExpression;

	                                gen := pCondExpr.Transform.CreateStringGenerator;

	                                s := gen.Execute;

	                                s := String.Remove(s, 0, 3);

	                                exprDest := pCondExprDest.Expression;

	                                exprDest.AsString := s;

	                                If exprDest.ErrorInfo <> Null Then

	                                    // Если в выражении есть ошибка, то выводим её в окно консоли

	                                    Debug.WriteLine("Выражение условия содержит ошибку: " + exprDest.ErrorInfo.ErrorMessage);

	                                    Else

	                                        // Сохраняем изменения в метамодели

	                                        (pMetaModelDest As IMetabaseObject).Save;

	                                End If;

	                            End If;

	                        End For;

	                    End For;

	                End If;

	            End For;

	    End If;

	End Sub UserProc;


См. также:


[Примеры](KeMs_Sample.htm) | [IMsBranchCondition](../Interface/IMsBranchCondition/IMsBranchCondition.htm)
 | [IMsMetaModel](../Interface/IMsMetaModel/IMsMetaModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
