# ISmCointegratingRegression.AdditionalRegressors

ISmCointegratingRegression.AdditionalRegressors
-


# ISmCointegratingRegression.AdditionalRegressors


## Синтаксис


AdditionalRegressors: [ISlSeries](../ISlSeries/ISlSeries.htm);


## Описание


Свойство AdditionalRegressors
 возвращает дополнительные регрессоры.


## Комментарии


Если выбран метод DOLS, то дополнительные регрессоры игнорируются.


Для получения коинтегрирующих и детерминированных регрессоров используйте
 свойства [ISmCointegratingRegression.CointegratingRegressors](ISmCointegratingRegression.CointegratingRegressors.htm)
 и [ISmCointegratingRegression.DeterministicRegressors](ISmCointegratingRegression.DeterministicRegressors.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    CointReg: SmCointegratingRegression;

	    x: ISlSerie;

	    can, fra, ger, ita, jpn, uk, us: Array[20] Of Double;

	    ar: Array Of Double;

	    i, j, res, FirstPoint, LastPoint: Integer;

	    str: String;

	Begin

	    CointReg := New SmCointegratingRegression.Create;


    // значения переменных

    can[00] := 6209; fra[00] := 4110; ger[00] := 3415; ita[00] := 2822; jpn[00] := 1475; uk[00] := 5320; us[00] := 8680;

    can[01] := 6385; fra[01] := 4280; ger[01] := 3673; ita[01] := 3023; jpn[01] := 1649; uk[01] := 5484; us[01] := 9132;

    can[02] := 6752; fra[02] := 4459; ger[02] := 4013; ita[02] := 3131; jpn[02] := 1787; uk[02] := 5517; us[02] := 9213;

    can[03] := 6837; fra[03] := 4545; ger[03] := 4278; ita[03] := 3351; jpn[03] := 1884; uk[03] := 5791; us[03] := 9450;

    can[04] := 6495; fra[04] := 4664; ger[04] := 4577; ita[04] := 3463; jpn[04] := 1972; uk[04] := 5971; us[04] := 9177;

    can[05] := 6907; fra[05] := 4861; ger[05] := 5135; ita[05] := 3686; jpn[05] := 2108; uk[05] := 6158; us[05] := 9756;

    can[06] := 7349; fra[06] := 5195; ger[06] := 5388; ita[06] := 3815; jpn[06] := 2249; uk[06] := 6238; us[06] := 9756;

    can[07] := 7213; fra[07] := 5389; ger[07] := 5610; ita[07] := 3960; jpn[07] := 2394; uk[07] := 6322; us[07] := 9724;

    can[08] := 7061; fra[08] := Double.Nan; ger[08] := 5787; ita[08] := 4119; jpn[08] := 2505; uk[08] := 6340; us[08] := 9476;

    can[09] := 7180; fra[09] := 5610; ger[09] := 6181; ita[09] := 4351; jpn[09] := 2714; uk[09] := 6569; us[09] := 9913;

    can[10] := Double.Nan; fra[10] := 5948; ger[10] := 6633; ita[10] := 4641; jpn[10] := Double.Nan; uk[10] := 6813; us[10] := 9974;

    can[11] := Double.Nan; fra[11] := 6218; ger[11] := 6910; ita[11] := 5008; jpn[11] := Double.Nan; uk[11] := 6974; us[11] := 10046;

    can[12] := Double.Nan; fra[12] := 6521; ger[12] := 7146; ita[12] := 5305; jpn[12] := Double.Nan; uk[12] := 6994; us[12] := 10467;

    can[13] := 7722; fra[13] := 6788; ger[13] := 7248; ita[13] := 5611; jpn[13] := 4008; uk[13] := 7220; us[13] := 10740;

    can[14] := 8088; fra[14] := 7222; ger[14] := 7689; ita[14] := 5693; jpn[14] := 4486; uk[14] := 7570; us[14] := 11157;

    can[15] := 8516; fra[15] := 7486; ger[15] := 8046; ita[15] := 5804; jpn[15] := 4663; uk[15] := 7686; us[15] := 11738;

    can[16] := 8941; fra[16] := 7832; ger[16] := 8143; ita[16] := 6121; jpn[16] := 5115; uk[16] := 7811; us[16] := 12274;

    can[17] := 9064; fra[17] := 8153; ger[17] := 8064; ita[17] := 6546; jpn[17] := 5655; uk[17] := 8012; us[17] := 12450;

    can[18] := 9380; fra[18] := 8468; ger[18] := 8556; ita[18] := 6918; jpn[18] := 6358; uk[18] := 8265; us[18] := 12874;

    can[19] := 9746; fra[19] := 9054; ger[19] := 9177; ita[19] := 7349; jpn[19] := 6995; uk[19] := 8326; us[19] := 13135;


    // период идентификации

    CointReg.ModelPeriod.FirstPoint := 1;

    CointReg.ModelPeriod.LastPoint := 15;

    // начальная и последняя
 точка прогноза

    CointReg.Forecast.FirstPoint := 15;

    CointReg.Forecast.LastPoint := 20;

    // исходный ряд

    CointReg.Explained.Value := can;

    // коинтегрирующие регрессоры

    CointReg.CointegratingRegressors.Clear;

    x := CointReg.CointegratingRegressors.Add;

    x.Value := fra;

    x := CointReg.CointegratingRegressors.Add;

    x.Value := jpn;

    // детерминированные регрессоры

    x := CointReg.DeterministicRegressors.Add;

    x.Value := ger;

    x := CointReg.DeterministicRegressors.Add;

    x.Value := uk;

    // дополнительные регрессоры

    CointReg.AdditionalRegressors.Clear;

    x := CointReg.AdditionalRegressors.Add;

    x.Value := ita;

    x := CointReg.AdditionalRegressors.Add;

    x.Value := us;

    // спецификация тренда

    CointReg.TrendSpecification := TrendSpecificationType.ConstLinear;

    // метод оценивания

    CointReg.EstimationMethod := CREstimationMethodType.FMOLS;

    // использование конечных разностей

    CointReg.UseDifferencedData := True;

    // метод обработки пропусков

    CointReg.MissingData.Method := MissingDataMethod.Casewise;

    // учет при расчете доверительных границ, что коэффициенты найдены приблизительно

    CointReg.Forecast.CoefUncertaintyInSECalc := True;


    // расчет модели и вывод результатов

    res := CointReg.Execute;

    Debug.WriteLine(CointReg.Errors);

    FirstPoint := CointReg.Forecast.FirstPoint;

    LastPoint := CointReg.Forecast.LastPoint;

    For i := 0 To CointReg.WarningsCount - 1 Do

        Debug.WriteLine(CointReg.Warnings[i]);

    End For;

    Debug.WriteLine("Коинтегрирующие коэффициенты модели: ");

    Debug.Indent;

    For i := 0 To CointReg.CointegratingCoefficients.Estimate.Length - 1 Do

        Debug.WriteLine(CointReg.CointegratingCoefficients.Estimate[i].ToString + " " +

            CointReg.CointegratingCoefficients.StandardError[i].ToString + " " +

            CointReg.CointegratingCoefficients.TStatistic[i].ToString + " " +

            CointReg.CointegratingCoefficients.Probability[i].ToString);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Детерминированные коэффициенты модели:");

    Debug.Indent;

    For i := 0 To CointReg.DeterministicCoefficients.Estimate.Length - 1 Do

        Debug.WriteLine(CointReg.DeterministicCoefficients.Estimate[i].ToString + " " +

            CointReg.DeterministicCoefficients.StandardError[i].ToString + " " +

            CointReg.DeterministicCoefficients.TStatistic[i].ToString + " " +

            CointReg.DeterministicCoefficients.Probability[i].ToString);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Характеристики модели");

    Debug.Indent;

    Debug.WriteLine("Коэффициент детерминации: " + CointReg.SummaryStatistics.R2.ToString);

    Debug.WriteLine("Скорректированный коэффициент детерминации: " + CointReg.SummaryStatistics.AdjR2.ToString);

    Debug.WriteLine("Стандартная ошибка регрессии: " + CointReg.SummaryStatistics.SE.ToString);

    Debug.WriteLine("Сумма квадратов остатков: " + CointReg.SummaryStatistics.SSR.ToString);

    Debug.WriteLine("Статистика Дарбина-Уотсона: " + CointReg.SummaryStatistics.DW.ToString);

    Debug.Unindent;


    Debug.WriteLine("Ковариационная матрица: ");

    Debug.Indent;

    For i := 0 To CointReg.CovarianceMatrix.GetUpperBound(1) Do

    str := "";

        For j := 0 To CointReg.CovarianceMatrix.GetUpperBound(2) Do

            str := str + (CointReg.CovarianceMatrix[i, j] As Double).ToString + "  ";

        End For;

        Debug.WriteLine(str);

    End For;

    Debug.Unindent;

    ar := CointReg.Explained.Value;

    ar[0] := Double.Nan;

    Debug.WriteLine("Стандартное отклонение: " + Statistics.StDev(ar).ToString);

    Debug.WriteLine("Модельный ряд");

    Debug.Indent;

    For i := 0 To CointReg.Fitted.Length - 1 Do

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(CointReg.Fitted[i]);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Ряд остатков");

    Debug.Indent;

    For i := 0 To CointReg.Residuals.Length - 1 Do

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(CointReg.Residuals[i]);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Прогнозный ряд");

    Debug.Indent;

    For i := FirstPoint To LastPoint - 1 Do

        Debug.WriteLine(i.ToString + " " + CointReg.Forecast.Value[i].ToString);

    End For;

    Debug.Unindent;


    Debug.WriteLine("Верхняя доверительная граница:");

    Debug.Indent;

    For i := FirstPoint To LastPoint - 1 Do

        Debug.WriteLine(i.ToString + " " + CointReg.Forecast.UpperConfidenceLevel[i].ToString);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Нижняя доверительная граница:");

    Debug.Indent;

    For i := FirstPoint To LastPoint - 1 Do

        Debug.WriteLine(i.ToString + " " + CointReg.Forecast.LowerConfidenceLevel[i].ToString);

    End For;

    Debug.Unindent;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены коинтегрирующие
 и детерминированные коэффициенты модели, характеристики модели, ковариационная
 матрица, стандартное отклонение, модельный ряд, ряд остатков, прогнозный
 ряд и верхняя и нижняя доверительные границы.


См. также:


[ISmCointegratingRegression](ISmCointegratingRegression.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
