# IMsBranchConditionExpression.Transform

IMsBranchConditionExpression.Transform
-


# IMsBranchConditionExpression.Transform


## Синтаксис


		Transform: [IMsFormulaTransform](../IMsFormulaTransform/IMsFormulaTransform.htm);


## Описание


Свойство Transform возвращает
 параметры настройки сложного условия расчёта.


## Комментарии


По умолчанию параметры содержат одну формулу с годовой динамикой. Для
 её получения используйте свойство [IMsFormulaTransform.FormulaItem](../IMsFormulaTransform/IMsFormulaTransform.FormulaItem.htm).
 После формирования формулы она будет автоматически разобрана и установлена
 в свойство [IMsBranchConditionExpression.Expression](IMsBranchConditionExpression.Expression.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE, в котором содержатся модели
 с идентификаторами USER_MODEL, DEFAULT_MODEL и метамодель с идентификатором
 USER_META_MODEL. Метамодель должна содержать целочисленный параметр с
 наименованием «indicator_param».


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


					Sub UserTransformation;

		Var

		    pMetabase: IMetabase;

		    pMSKey: Integer;

		    pMeta: IMsMetaModel;

		    pBranch: IMsCalculationChainBranch;

		    pModel_a, pModel_b: IMsModel;

		    pCase: IMsBranchCase;

		    pCond: IMsBranchConditionExpression;

		    pTransf: IMsFormulaTransform;

		    pMethod: IMsDeterministicTransform;

		Begin

		    pMetabase := MetabaseClass.Active;

		    //Получаем ключ контейнера моделирования

		    pMSKey := pMetabase.GetObjectKeyById("MODEL_SPACE");

		    // Получаем метамодель

		    pMeta := pMetabase.ItemByIdNamespace("USER_META_MODEL", pMSKey).Edit As IMsMetaModel;

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

		    // Получаем модель «USER_MODEL»

		    pModel_b := pMetabase.ItemByIdNamespace("USER_MODEL", pMSKey).Bind As IMsModel;

		    // Создаем новую ветку условия

		    pCase := pBranch.CaseList.Add;

		    // Добавляем модель «USER_MODEL» в новую ветку

		    pCase.Contents.AddModel(pModel_b);

		    // Создаем условие расчёта ветки

		    pCond := pCase.Conditions.Add(MsBranchConditionType.Expression) As IMsBranchConditionExpression;

		    pTransf := pCond.Transform;

		    pMethod := pTransf.FormulaItem(0).Method As IMsDeterministicTransform;

		    pMethod.Expression.AsString := "{indicator_param[t]} = 3";

		    // Сохраняем метамодель

		    (pMeta As IMetabaseObject).Save;

		End Sub UserTransformation;


В результате выполнения примера в метамодель будет добавлено условие
 расчёта: значение параметра метамодели должно быть равно трём. При расчёте
 задачи трансформации будет проверяться условие: если оно выполняется,
 то рассчитывается модель USER_MODEL, если не выполняется - модель DEFAULT_MODEL.


См. также:


[IMsBranchConditionExpression](IMsBranchConditionExpression.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
