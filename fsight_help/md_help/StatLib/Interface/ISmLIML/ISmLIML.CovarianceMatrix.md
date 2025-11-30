# ISmLIML.CovarianceMatrix

ISmLIML.CovarianceMatrix
-


# ISmLIML.CovarianceMatrix


## Синтаксис


CovarianceMatrix: Array;


## Описание


Свойство CovarianceMatrix возвращает
 значения ковариационной матрицы.


## Комментарии


Необходимо использовать массив значений типа Double.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    LIML: SmLIML;

	    can, fra, ger, ita, jpn: Array[15] Of Double;

	    x: ISlSerie;

	    CoefInt: IIntercept;

	    ModelCoef: ICoefficients;

	    i, j, res, FittedLength, ForecastValue, ConfidenceLevel: Integer;

	    str: String;

	    d0: Double;

	Begin

	    LIML := New SmLIML.Create;

	    // задаем значения переменных

	    can[00] := 6209; fra[00] := 4110; ger[00] := 3415; ita[00] := 2822; jpn[00] := 1475;

	    can[01] := 6385; fra[01] := 4280; ger[01] := 3673; ita[01] := 3023; jpn[01] := 1649;

	    can[02] := 6752; fra[02] := 4459; ger[02] := 4013; ita[02] := 3131; jpn[02] := 1787;

	    can[03] := 6837; fra[03] := 4545; ger[03] := 4278; ita[03] := 3351; jpn[03] := 1884;

	    can[04] := 6495; fra[04] := 4664; ger[04] := 4577; ita[04] := 3463; jpn[04] := 1972;

	    can[05] := 6907; fra[05] := 4861; ger[05] := 5135; ita[05] := 3686; jpn[05] := 2108;

	    can[06] := 7349; fra[06] := 5195; ger[06] := 5388; ita[06] := 3815; jpn[06] := 2249;

	    can[07] := 7213; fra[07] := 5389; ger[07] := 5610; ita[07] := 3960; jpn[07] := 2394;

	    can[08] := 7061; fra[08] := Double.Nan; ger[08] := 5787; ita[08] := 4119; jpn[08] := 2505;

	    can[09] := 7180; fra[09] := 5610; ger[09] := 6181; ita[09] := 4351; jpn[09] := 2714;

	    can[10] := Double.Nan; fra[10] := 5948; ger[10] := 6633; ita[10] := 4641; jpn[10] := Double.Nan;

	    can[11] := Double.Nan; fra[11] := 6218; ger[11] := 6910; ita[11] := 5008; jpn[11] := Double.Nan;

	    can[12] := Double.Nan; fra[12] := 6521; ger[12] := 7146; ita[12] := 5305; jpn[12] := Double.Nan;

	    can[13] := 7722; fra[13] := 6788; ger[13] := 7248; ita[13] := 5611; jpn[13] := Double.Nan;

	    can[14] := 8088; fra[14] := 7222; ger[14] := 7689; ita[14] := 5693; jpn[14] := 4486;


    // период идентификации

    LIML.ModelPeriod.FirstPoint := 1;

    LIML.ModelPeriod.LastPoint := 10;

    // прогнозирование

    LIML.Forecast.LastPoint := 15;

    // исходный ряд

    LIML.Explained.Value := can;

    // объясняющие ряды

    LIML.Explanatories.Clear;

    x := LIML.Explanatories.Add;

    x.Value := fra;

    x := LIML.Explanatories.Add;

    x.Value := ger;

    // константа в регрессорах

    LIML.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    // инструментальные ряды

    LIML.Instrumental.Clear;

    x := LIML.Instrumental.Add;

    x.Value := ita;

    x := LIML.Instrumental.Add;

    x.Value := jpn;


    // константа в инструментальных переменных

    LIML.UseConstantAsInstrument := True;

    // использование метода оценки K-class

    LIML.UseKClass := True;

    // параметр K для метода K-class

    LIML.KClass := 0.01;

    // метод обработки пропусков

    LIML.MissingData.Method := MissingDataMethod.Casewise;

    // расчет модели

    res := LIML.Execute;

    CoefInt := LIML.ModelCoefficients.Intercept;

    ModelCoef := LIML.ModelCoefficients.Coefficients;

    FittedLength := LIML.Fitted.Length;

    ForecastValue := LIML.Forecast.Value.Length;

    Debug.WriteLine(LIML.Errors);

    For i := 0 To LIML.WarningsCount - 1 Do

        Debug.WriteLine(LIML.Warnings[i]);

    End For;


    Debug.WriteLine("===Оценки коэффициентов модели===");

    If CoefInt.Mode > 0 Then

        Debug.WriteLine("Оценки константы");

        Debug.Indent;

        Debug.WriteLine(CoefInt.Estimate.ToString + " " +

            CoefInt.StandardError.ToString + " " +

            CoefInt.TStatistic.ToString + " " +

            CoefInt.Probability.ToString);

        Debug.Unindent;

    End If;

    If ModelCoef.Estimate.Length > 0 Then

        Debug.WriteLine("Оценки коэффициентов");

        Debug.Indent;

        Debug.WriteLine("Оцененные значения коэффициентов: ");

        For i := 0 To ModelCoef.Estimate.Length - 1 Do

                Debug.WriteLine(ModelCoef.Estimate[i].ToString + " "

                + ModelCoef.StandardError[i].ToString + " "

                + ModelCoef.TStatistic[i].ToString + " "

                + ModelCoef.Probability[i].ToString);

        End For;

        Debug.Unindent;

    End If;

    Debug.WriteLine("Статистические характеристики регрессии");

    Debug.Indent;

    Debug.WriteLine("Коэффициент детерминации: " + LIML.SummaryStatistics.R2.ToString);

    Debug.WriteLine("Скорректированный коэффициент детерминации: " + LIML.SummaryStatistics.AdjR2.ToString);

    Debug.WriteLine("Стандартная ошибка регрессии: " + LIML.SummaryStatistics.SE.ToString);

    Debug.WriteLine("Сумма квадратов остатков: " + LIML.SummaryStatistics.SSR.ToString);

    Debug.WriteLine("Статистика Дарбина-Уотсона: " + LIML.SummaryStatistics.DW.ToString);

    Debug.Unindent;


    Debug.WriteLine("Ковариационная матрица");

    For i := 0 To LIML.CovarianceMatrix.GetUpperBound(2) Do

        str := "";

        For j := 0 To LIML.CovarianceMatrix.GetUpperBound(1) Do

            str := str + "  " + (LIML.CovarianceMatrix[j, i] As Double).ToString;

        End For;

        Debug.WriteLine(str);

    End For;

    Debug.WriteLine("Модельный ряд");

    Debug.Indent;

    For i := 0 To FittedLength - 1 Do

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(LIML.Fitted[i]);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Ряд остатков");

    Debug.Indent;

    For i := 0 To LIML.Residuals.Length - 1 Do

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(LIML.Residuals[i]);

    End For;

    Debug.Unindent;


    Debug.WriteLine("Результаты прогнозирования");

    Debug.Indent;

    For i := FittedLength To ForecastValue - 1 Do

        d0 := LIML.Forecast.Value[i];

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(d0);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Верхняя доверительная граница:");

    ConfidenceLevel := LIML.Forecast.UpperConfidenceLevel.Length;

    Debug.Indent;

    For i := FittedLength To ConfidenceLevel - 1 Do

        d0 := LIML.Forecast.UpperConfidenceLevel[i];

        Debug.WriteLine(i.ToString + " " + d0.ToString);

    End For;


    Debug.Unindent;

    Debug.WriteLine("Нижняя доверительная граница");

    ConfidenceLevel := LIML.Forecast.LowerConfidenceLevel.Length;

    Debug.Indent;

    For i := FittedLength To ConfidenceLevel - 1 Do

        d0 := LIML.Forecast.LowerConfidenceLevel[i];

        Debug.WriteLine(i.ToString + " " + d0.ToString);

    End For;

    Debug.Unindent;

End Sub UserProc;


В результате выполнения примера будут заданы следующие настройки:


	- период идентификации;


	- параметры прогнозирования;


	- параметр K для метода K-class.


В окно консоли будут выведены оценки коэффициентов, их характеристики
 и ряд остатков вспомогательной регрессии, ковариационная матрица и результаты
 прогнозирования.


См. также:


[ISmLIML](ISmLIML.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
