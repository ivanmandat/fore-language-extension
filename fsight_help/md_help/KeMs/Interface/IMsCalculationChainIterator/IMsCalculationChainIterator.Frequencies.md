# IMsCalculationChainIterator.Frequencies

IMsCalculationChainIterator.Frequencies
-


# IMsCalculationChainIterator.Frequencies


## Синтаксис


		Frequencies: [DimCalendarLevelSet](KeDims.chm::/Enums/DimCalendarLevelSet.htm);


## Описание


Свойство Frequencies определяет
 календарную динамику итераций.


## Комментарии


Не допускается одновременное использование свойств Frequencies
 и [IMsCalculationChainIterator.UseDates](IMsCalculationChainIterator.UseDates.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего метамодель с идентификатором
 METAMODEL_ITERATOR и модель с идентификатором MODEL_ITERATOR.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    MetaModel: IMsMetaModel;

		    Param: IMsModelParam;

		    CalcChain: IMsCalculationChainEntries;

		    Iterator: IMsCalculationChainIterator;

		    Model: IMsModel;

		    Formula: IMsFormula;

		    Expr: IExpression;

		Begin

		    // Получаем текущий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получаем метамодель

		    MetaModel := mb.ItemByIdNamespace("METAMODEL_ITERATOR", MsKey).Edit As IMsMetaModel;

		    // Очищаем коллекцию параметров метамодели

		    MetaModel.Params.Clear;

		    // Добавляем параметр, который будет отвечать за расчет цикла

		    Param := MetaModel.Params.Add;

		    Param.DefaultValue := 0;

		    Param.Id := "THRESHOLD";

		    Param.Name := "Порог";

		    // Получаем и очищаем цепочку расчета метамодели

		    CalcChain := MetaModel.CalculationChain;

		    CalcChain.Clear;

		    // Создаем цикл в цепочке расчета метамодели

		    Iterator := CalcChain.AddIterator("Цикл");

		    // Задаем условия выполнения цикла

		    Iterator.PostCondition := True;

		    Iterator.MaxIterations := 600;

		    Expr := Iterator.Expression;

		    Expr.AsString := "{THRESHOLD}<5";

		    // Получаем модель

		    Model := mb.ItemByIdNamespace("MODEL_ITERATOR", MsKey).Edit As IMsModel;

		    // Сбрасываем динамику расчета модели

		    Formula := Model.Transform.FormulaItem(0);

		    Formula.Level := DimCalendarLevel.Root;

		    // Сохраняем изменения в модели

		    (Model As IMetabaseObject).Save;

		    // Добавляем данную модель в цикл

		    Iterator.Contents.AddModel(model);

		    // Указываем, что цикл будет производить итерацию по динамике

		    Iterator.Frequencies := DimCalendarLevelSet.Year Or DimCalendarLevelSet.Quarter;

		    // Задаем шаг дат для итераций с помощью параметра

		    Iterator.StepParam := "STEP";

		    // Сохраняем изменения

		    (MetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для цикла будет задана динамика расчёта.


См. также:


[IMsCalculationChainIterator](IMsCalculationChainIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
