# IMsBinaryRegressionTransform.StatCoefficients

IMsBinaryRegressionTransform.StatCoefficients
-


# IMsBinaryRegressionTransform.StatCoefficients


## Синтаксис


StatCoefficients(Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
 [IModelCoefficients](StatLib.chm::/Interface/IModelCoefficients/IModelCoefficients.htm);


## Параметры


Coord. Срез моделируемой переменной,
 для которого осуществляется расчёт.


## Описание


Свойство StatCoefficients
 возвращает значения статистических характеристик, рассчитанных для коэффициентов
 идентифицированного уравнения.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В контейнере содержится модель
 с идентификатором BINREG, использующая для расчёта метод бинарной регрессии.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Model: IMsModel;

	    Trans: IMsFormulaTransform;

	    VarTrans: IMsFormulaTransformVariable;

	    Tree: IMsFormulaTransformSlicesTree;

	    Slice: IMsFormulaTransformSlice;

	    Selector: IMsFormulaTransformSelector;

	    Formula: IMsFormula;

	    Binary: IMsBinaryRegressionTransform;

	    Calc: IMsModelCalculation;

	    Coord: IMsFormulaTransformCoord;

	    Coef: IModelCoefficients;

	    Estim: Array Of Double;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("BinReg",MB.ItemById("CONT_MODEL").Key).Edit;

	    Model := MObj As IMsModel;

	    Trans := Model.Transform;

	    VarTrans := Trans.Outputs.Item(0);

	    Tree := VarTrans.SlicesTree(VarTrans);

	    Slice := Tree.CreateSlice(1);

	    Selector := Model.Transform.CreateSelector;

	    Selector.Slice := Slice;

	    Formula := Model.Transform.Transform(Selector);

	    Binary := Formula.Method As IMsBinaryRegressionTransform;

	    // Определяем значимость
	 доверительных границ

	    Binary.ConfidenceLevel:= 0.9;

	    // Определяем метод обработки
	 пропусков

	    Binary.MissingData.Method:= MissingDataMethod.SampleAverage;

	    Calc := Model.CreateCalculation;

	    Calc.Period.IdentificationStartDate:= DateTime.ComposeDay(2000, 01, 01);

	    Calc.Period.IdentificationEndDate:= DateTime.ComposeDay(2007, 12, 31);

	    Calc.Period.ForecastStartDate:= DateTime.ComposeDay(2007, 01, 01);

	    Calc.Period.ForecastEndDate:= DateTime.ComposeDay(2010, 12, 31);

	    Coord := Trans.CreateCoord(VarTrans);

	    // Идентификация нового
	 уравнения

	    Binary.Identify(Calc As IMsMethodCalculation, Coord);

	    // Получаем значения
	 статистических характеристик

	    Coef := Binary.StatCoefficients(Coord);

	    // Массив оцененных значений
	 коэффициентов модели

	    Estim := Coef.Coefficients.Estimate;

	    // Выводим массив в консоль

	    For i := 0 To Estim.Length - 1 Do

	    Debug.WriteLine(Estim[i]);

	    End For;

	    MObj.Save;

	End Sub UserProc;


В результате выполнения примера будут изменены некоторые параметры модели.
 После идентификации уравнения массив оценённых коэффициентов модели будет
 выведен в окно консоли.


См. также:


[IMsBinaryRegressionTransform](IMsBinaryRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
