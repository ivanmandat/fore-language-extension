# IMsNonLinearRegressionTransform.OptimizationMethod

IMsNonLinearRegressionTransform.OptimizationMethod
-


# IMsNonLinearRegressionTransform.OptimizationMethod


## Синтаксис


OptimizationMethod: [NLSOptimizationMethod](StatLib.chm::/Enums/NLSOptimizationMethod.htm);


## Описание


Свойство OptimizationMethod
 определяет используемый метод оптимизации.


## Комментарии


По умолчанию используется метод Левенберга-Марквардта, то есть OptimizationMethod = NLSOptimizationMethod.LevenbergMarquardt.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего модель с идентификатором
 «MODEL_NONLINEAR», рассчитываемую методом «Нелинейная
 регрессия (оценка нелинейным МНК)».


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    MsKey: Integer;

	    Model: IMsModel;

	    Transform: IMsFormulaTransform;

	    NonLinear: IMsNonLinearRegressionTransform;

	    InitAprox: Array Of Double;

	    i: Double;

	    Calc: IMsModelCalculation;

	    OutputVar: IMsFormulaTransformVariable;

	    Coord: IMsFormulaTransformCoord;

	    CoefData: Array Of Double;

	    Coef: Array Of String;

	    j: Integer;

	    ConstCoeff: ISlConstCoefficients;

	    MCalc: IMsMethodCalculation;

	    Result: IMsFormulaTerm;

	    ResultData: Array Of Double;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем ключ контейнера моделирования

	    MsKey := mb.GetObjectKeyById("MS");

	    // Получаем модель

	    Model := mb.ItemByIdNamespace("MODEL_NONLINEAR", MsKey).Edit As IMsModel;

	    // Получаем параметры модели

	    Transform := Model.Transform;

	    // Получаем параметры метода расчета

	    NonLinear := Transform.FormulaItem(0).Method As IMsNonLinearRegressionTransform;

	    // Задаем значимость доверительных границ

	    NonLinear.ConfidenceLevel := 0.90;

	    // Добавляем новый коэффициент в уравнение модели

	    NonLinear.Expression.AsString := "(" + NonLinear.Expression.AsString + ") * A1";

	    // Получаем массив начальных приближений

	    InitAprox := NonLinear.InitApproximation;

	    // Задаем новые значения начальных приближений

	    For Each i In InitAprox Do

	        i := i + 0.01;

	    End For;

	    // Не используем начальные значения по умолчанию

	    NonLinear.UseDefaultInitValues := False;

	    // Задаем максимальное число итераций,

	    // за которое будет производиться расчет оптимальных значений коэффициентов

	    NonLinear.MaxIteration := 600;

	    // Задаем метод обработки пропусков

	    NonLinear.MissingData.Method := MissingDataMethod.LinTrend;

	    // Задаем метод оптимизации

	    NonLinear.OptimizationMethod := NLSOptimizationMethod.QuasiNewton;

	    // Задаем точность расчета

	    NonLinear.Tolerance := 0.0002;

	    // Используем аналитические производные

	    NonLinear.UseDerivatives := True;

	    // Создаем настройки для расчета модели

	    Calc := Model.CreateCalculation;

	    // Задаем периоды расчета

	    Calc.Period.IdentificationStartDate := DateTime.Parse("01.01.1990");

	    Calc.Period.IdentificationEndDate := DateTime.Parse("01.01.2010");

	    Calc.Period.ForecastStartDate := DateTime.Parse("01.01.2011");

	    Calc.Period.ForecastEndDate := DateTime.Parse("01.01.2017");

	    // Получаем моделируемую переменную

	    OutputVar := Transform.Outputs.Item(0);

	    // Получаем параметры моделируемой переменной, необходимые для расчёта модели

	    Coord := Transform.CreateCoord(OutputVar);

	    // Идентифицируем коэффициенты модели

	    NonLinear.Identify(Calc As IMsMethodCalculation, Coord);

	    // Получаем идентифицированные коэффициенты

	    CoefData := NonLinear.CoefficientsData(Coord);

	    // Если коэффициенты не сохранены, то сохраняем их

	    If Not NonLinear.IsCoefficientsSaved(Coord) Then

	        NonLinear.CoefficientsData(Coord) := CoefData;

	    End If;

	    // Получаем наименования коэффициентов

	    Coef := NonLinear.Coefficients;

	    // Выводим наименования, значения и статистические характеристики коэффициентов в окно консоли

	    Debug.WriteLine("Значения и стандартная ошибка коэффициентов");

	    For j := 0 To CoefData.Length - 1 Do

	        // Выводим наименование, значение коэффициента

	        Debug.Write("    " + Coef[j] + ": " + CoefData[j].ToString);

	        // Получаем статистические характеристики коэффициента

	        ConstCoeff := NonLinear.StatCoefficients(Coord, Coef[j]);

	        // Выводим стандартную ошибку коэффициента

	        Debug.WriteLine("; " + ConstCoeff.StandardError.ToString);

	    End For;

	    // Получаем моделируемый
	 ряд

	    Result := NonLinear.Result;

	    // Создаем параметры расчета метода

	    MCalc := Transform.CreateCalculation;

	    // Задаем периоды расчета

	    MCalc.Period.IdentificationStartDate := DateTime.Parse("01.01.1990");

	    MCalc.Period.IdentificationEndDate := DateTime.Parse("01.01.2010");

	    MCalc.Period.ForecastStartDate := DateTime.Parse("01.01.2011");

	    MCalc.Period.ForecastEndDate := DateTime.Parse("01.01.2017");

	    // Получаем значения моделируемого
	 ряда

	    ResultData := Result.Serie(MCalc);

	    // Выводим значения моделируемого
	 ряда в окно консоли

	    Debug.WriteLine("Значения моделируемого
	 ряда");

	    For Each i In ResultData Do

	        Debug.WriteLine("    " + i.ToString);

	    End For;

	    // Сохраняем изменения в модели

	    (Model As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут изменены параметры модели, в окно
 консоли будут выведены: значения и стандартная ошибка коэффициентов модели,
 а также моделируемый ряд.


См. также:


[IMsNonLinearRegressionTransform](IMsNonLinearRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
