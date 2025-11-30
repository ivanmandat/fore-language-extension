# IMsNonLinearRegressionTransform.StatCoefficientsByIndex

IMsNonLinearRegressionTransform.StatCoefficientsByIndex
-


# IMsNonLinearRegressionTransform.StatCoefficientsByIndex


## Синтаксис


StatCoefficientsByIndex(Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm);

                        Index:
 Integer): [ISlConstCoefficients](StatLib.chm::/Interface/ISlConstCoefficients/ISlConstCoefficients.htm);


## Параметры


Coord. Срез моделируемой переменной,
 для которого осуществляется расчет;


Index. Индекс коэффициента.


## Описание


Свойство StatCoefficientsByIndex
 возвращает значения статистических характеристик, рассчитанных для коэффициентов
 идентифицированного уравнения модели, по индексу коэффициента.


## Комментарии


Для получения массива коэффициентов используйте свойство [IMsNonLinearRegressionTransform.Coefficients](IMsNonLinearRegressionTransform.Coefficients.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель с идентификатором
 MODEL_NONLINEAR, рассчитываемую методом «Нелинейная
 регрессия (оценка нелинейным МНК)».


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


			Sub UserProc;

Var

    mb: IMetabase;

    MsKey: Integer;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    NonLinear: IMsNonLinearRegressionTransform;

    Calc: IMsModelCalculation;

    OutputVar: IMsFormulaTransformVariable;

    Coord: IMsFormulaTransformCoord;

    CoefData: Array Of Double;

    Coef: Array Of String;

    j: Integer;

    ConstCoeff: ISlConstCoefficients;

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

    // Получаем наименования коэффициентов

    Coef := NonLinear.Coefficients;

    // Выводим наименования, значения и статистические характеристики коэффициентов в окно консоли

    Debug.WriteLine("Значения и стандартная ошибка коэффициентов");

    For j := 0 To CoefData.Length - 1 Do

        // Выводим наименование, значение коэффициента

        Debug.Write("    " + Coef[j] + ": " + CoefData[j].ToString);

        // Получаем статистические характеристики коэффициента

        ConstCoeff := NonLinear.StatCoefficientsByIndex(Coord, j);

        // Выводим стандартную ошибку коэффициента

        Debug.WriteLine("; " + ConstCoeff.StandardError.ToString);

    End For;

    // Сохраняем изменения в модели

    (Model As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будут изменены параметры модели, в окно
 консоли будут выведены: значения и стандартная ошибка коэффициентов модели.


См. также:


[IMsNonLinearRegressionTransform](IMsNonLinearRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
