# IMsBranchConditionExpression.Expression

IMsBranchConditionExpression.Expression
-


# IMsBranchConditionExpression.Expression


## Синтаксис


		Expression: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Expression возвращает
 выражение для расчёта условия.


## Комментарии


Для корректной работы условия выражение после расчёта должно давать
 результат логического типа.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, в котором содержатся модели с идентификаторами
 MODEL_BRANCH_EXPR_F, MODEL_BRANCH_EXPR_S, DEFAULT_MODEL и метамодель с
 идентификатором METAMODEL_BRANCH_EXPR.


Добавьте ссылки на системные сборки: Dal, Dimensions, Metabase, Ms, Xml.


					Sub UserProc;

		Var

		    pMetabase: IMetabase;

		    pMSKey: Integer;

		    pMeta: IMsMetaModel;

		    Params: IMsModelParams;

		    Param: IMsModelParam;

		    pBranch, pBranchCopy: IMsCalculationChainBranch;

		    pModel_a, pModel_b: IMsModel;

		    pCase, pCaseCopy: IMsBranchCase;

		    pCond, pCondCopy: IMsBranchConditionExpression;

		    XmlDoc: IXmlDomDocument3;

		    el: IXmlDomElement;

		Begin

		    pMetabase := MetabaseClass.Active;

		    //Получаем ключ контейнера моделирования

		    pMSKey := pMetabase.GetObjectKeyById("MS");

		    // Получаем метамодель

		    pMeta := pMetabase.ItemByIdNamespace("METAMODEL_BRANCH_EXPR", pMSKey).Edit As IMsMetaModel;

		    // Получаем коллекцию параметров метамодели

		    Params := pMeta.Params;

		    // Очищаем коллекцию параметров

		    Params.Clear;

		    // Добавляем новый целочисленный параметр

		    Param := Params.Add;

		    Param.Id := "INDICATOR_PARAM";

		    Param.Name := "INDICATOR_PARAM";

		    Param.DataType := DbDataType.Integer;

		    // Очищаем цепочку расчёта метамодели

		    pMeta.CalculationChain.Clear;

		    // Создаем условие расчёта метамодели

		    pBranch := pMeta.CalculationChain.AddBranch("Условие расчёта");

		    // Задаем календарную динамику условия

		    pBranch.Level := DimCalendarLevel.Year;

		    // Получаем модель «DEFAULT_MODEL»

		    pModel_a := pMetabase.ItemByIdNamespace("DEFAULT_MODEL", pMSKey).Bind As IMsModel;

		    // Добавляем модель в условие

		    pBranch.DefaultContents.AddModel(pModel_a);

		    // Получаем модель «MODEL_BRANCH_EXPR_F»

		    pModel_b := pMetabase.ItemByIdNamespace("MODEL_BRANCH_EXPR_F", pMSKey).Bind As IMsModel;

		    // Создаем новую ветку условия

		    pCase := pBranch.CaseList.Add;

		    // Добавляем модель «USER_MODEL» в новую ветку

		    pCase.Contents.AddModel(pModel_b);

		    // Создаем условие расчёта ветки

		    pCond := pCase.Conditions.Add(MsBranchConditionType.Expression) As IMsBranchConditionExpression;

		    pCond.Expression.AsString := "{INDICATOR_PARAM[t]} = 3";

		    // Сохраняем параметры ветки условия в XML-файл

		    XmlDoc := New FreeThreadedDOMDocument60.Create;

		    el := XmlDoc.createElement("Root");

		    XmlDoc.appendChild(el);

		    pCond.SaveToXml(el);

		    XmlDoc.save("C:\ConditionExpr.xml");

		    // Создаем новое условие расчёта метамодели

		    pBranchCopy := pMeta.CalculationChain.AddBranch("Копия условия расчёта");

		    // Создаем новую ветку условия

		    pCaseCopy := pBranchCopy.CaseList.Add;

		    // Создаем условие расчёта ветки

		    pCondCopy := pCaseCopy.Conditions.Add(MsBranchConditionType.Expression) As IMsBranchConditionExpression;

		    // Загружаем условия из XML-файла

		    XmlDoc := New FreeThreadedDOMDocument60.Create;

		    XmlDoc.load("C:\ConditionExpr.xml");

		    el := XmlDoc.selectSingleNode("Root") As IXmlDomElement;

		    pCondCopy.LoadFromXml(el);

		    // Получаем модель «MODEL_BRANCH_EXPR_S»

		    pModel_b := pMetabase.ItemByIdNamespace("MODEL_BRANCH_EXPR_S", pMSKey).Bind As IMsModel;

		    pCaseCopy.Contents.AddModel(pModel_b);

		    // Изменяем условие расчета ветки

		    pCondCopy.Expression.AsString := "{INDICATOR_PARAM[t]} = 4";

		    // Сохраняем метамодель

		    (pMeta As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в метамодель будет добавлено условие
 расчёта: если значение параметра метамодели равно трём, то рассчитывается
 модель MODEL_BRANCH_EXPR_F, если нет - то модель DEFAULT_MODEL. Затем
 будет добавлено новое условие расчёта, являющееся копией первого. Скопированное
 условие будет изменено: если значение параметра метамодели равно четырём,
 то рассчитывается модель MODEL_BRANCH_EXPR_S, если нет - то модель DEFAULT_MODEL.


См. также:


[IMsBranchConditionExpression](IMsBranchConditionExpression.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
