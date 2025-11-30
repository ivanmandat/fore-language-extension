# IMsBandpassFilterTransform.Explained

IMsBandpassFilterTransform.Explained
-


# IMsBandpassFilterTransform.Explained


## Синтаксис


Explained: [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm);


## Описание


Свойство Explained возвращает
 моделируемый ряд.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере создана модель
 с идентификатором MODEL_1. Данная модель использует для расчёта фильтр
 Бакстера-Кинга.


Добавьте ссылки на системные сборки: Metabase, Ms.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Model: IMsModel;

	    Trans: IMsFormulaTransform;

	    TransVar: IMsFormulaTransformVariable;

	    Tree: IMsFormulaTransformSlicesTree;

	    Slice: IMsFormulaTransformSlice;

	    Selector: IMsFormulaTransformSelector;

	    Formula: IMsFormula;

	    Bandpass: IMsBandpassFilterTransform;

	    Calc: IMsModelCalculation;

	    Period, MPeriod: IMsModelPeriod;

	    a: Array Of Double;

	    i: Integer;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем модель

	    MObj := MB.ItemByIdNamespace("MODEL_1", MB.ItemById("KONT_MODEL").Key).Bind;

	    Model := MObj As IMsModel;

	    // Получаем параметры модели

	    Trans := Model.Transform;

	    TransVar := Trans.Outputs.Item(0);

	    Tree := TransVar.SlicesTree(TransVar);

	    Slice := Tree.CreateSlice(1);

	    Selector := Trans.CreateSelector;

	    Selector.Slice := Slice;

	    // Настраиваем параметры расчёта

	    Formula := Trans.Transform(Selector);

	    Bandpass := Formula.Method As IMsBandpassFilterTransform;

	    Calc := Model.CreateCalculation;

	    MPeriod := Model.Transform.Period;

	    Period := Calc.Period;

	    Period.IdentificationStartDate := MPeriod.IdentificationStartDate;

	    Period.IdentificationEndDate := MPeriod.IdentificationEndDate;

	    Period.ForecastStartDate := MPeriod.ForecastStartDate;

	    Period.ForecastEndDate := MPeriod.ForecastEndDate;

	    a := Bandpass.Explained.Serie(Calc As IMsMethodCalculation);

	    For i := 0 To a.Length - 1 Do

	        Debug.WriteLine(a[i]);

	    End For;

	End Sub UserProc;


В результате выполнения примера в консоль среды разработки будут выведены
 данные моделируемого ряда.


См. также:


[IMsBandpassFilterTransform](IMsBandpassFilterTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
