# ISmCointegratingRegression.LagLeadMethod

ISmCointegratingRegression.LagLeadMethod
-


# ISmCointegratingRegression.LagLeadMethod


## Синтаксис


LagLeadMethod: [LagLeadMethodType](../../Enums/LagLeadMethodType.htm);


## Описание


Свойство LagLeadMethod определяет
 тип оценки коинтеграционной регрессии методом DOLS.


## Комментарии


Если LagLeadMethod = LagLeadMethodType.Fixed, то для
 метода DOLS должны быть заданы: [количество
 лагов](ISmCointegratingRegression.Lags.htm) и [количество
 опережений](ISmCointegratingRegression.Leads.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    CointReg: SmCointegratingRegression;

    x: ISlSerie;

    can, fra, ger, ita: Array[20] Of Double;

    i, res: Integer;

Begin

    CointReg := New SmCointegratingRegression.Create;

    // Значения переменных:

    can[00] := 6209 ;   fra[00] := 4110 ;  ger[00] := 3415 ;  ita[00] := 2822;

    can[01] := 6385 ;   fra[01] := 4280 ;  ger[01] := 3673 ;  ita[01] := 3023;

    can[02] := 6752 ;   fra[02] := 4459 ;  ger[02] := 4013 ;  ita[02] := 3131;

    can[03] := 6837 ;   fra[03] := 4545 ;  ger[03] := 4278 ;  ita[03] := 3351;

    can[04] := 6495 ;   fra[04] := 4664 ;  ger[04] := 4577 ;  ita[04] := 3463;

    can[05] := 6907 ;   fra[05] := 4861 ;  ger[05] := 5135 ;  ita[05] := 3686;

    can[06] := 7349 ;   fra[06] := 5195 ;  ger[06] := 5388 ;  ita[06] := 3815;

    can[07] := 7213 ;   fra[07] := 5389 ;  ger[07] := 5610 ;  ita[07] := 3960;

    can[08] := 7061 ;   fra[08] := 5463 ;  ger[08] := 5787 ;  ita[08] := 4119;

    can[09] := 7180 ;   fra[09] := 5610 ;  ger[09] := 6181 ;  ita[09] := 4351;

    can[10] := 7132 ;   fra[10] := 5948 ;  ger[10] := 6633 ;  ita[10] := 4641;

    can[11] := 7137 ;   fra[11] := 6218 ;  ger[11] := 6910 ;  ita[11] := 5008;

    can[12] := 7473 ;   fra[12] := 6521 ;  ger[12] := 7146 ;  ita[12] := 5305;

    can[13] := 7722 ;   fra[13] := 6788 ;  ger[13] := 7248 ;  ita[13] := 5611;

    can[14] := 8088 ;   fra[14] := 7222 ;  ger[14] := 7689 ;  ita[14] := 5693;

    can[15] := 8516 ;   fra[15] := 7486 ;  ger[15] := 8046 ;  ita[15] := 5804;

    can[16] := 8941 ;   fra[16] := 7832 ;  ger[16] := 8143 ;  ita[16] := 6121;

    can[17] := 9064 ;   fra[17] := 8153 ;  ger[17] := 8064 ;  ita[17] := 6546;

    can[18] := 9380 ;   fra[18] := 8468 ;  ger[18] := 8556 ;  ita[18] := 6918;

    can[19] := 9746 ;   fra[19] := 9054 ;  ger[19] := 9177 ;  ita[19] := 7349;

    // Период идентификации:

    CointReg.ModelPeriod.FirstPoint := 1;

    CointReg.ModelPeriod.LastPoint := 20;

    // Прогноз:

    CointReg.Forecast.LastPoint := 20;

    // Исходный ряд:

    CointReg.Explained.Value := can;

    // Коинтегрирующие регрессоры:

    CointReg.CointegratingRegressors.Clear;

    x := CointReg.CointegratingRegressors.Add;

    x.Value := fra;

    // Детерминированные регрессоры:

    x := CointReg.DeterministicRegressors.Add;

    x.Value := ger;

    // Дополнительные регрессоры:

    CointReg.AdditionalRegressors.Clear;

    x := CointReg.AdditionalRegressors.Add;

    x.Value := ita;

    // Спецификация тренда:

    CointReg.TrendSpecification := TrendSpecificationType.ConstLinear;

    // Метод оценивания:

    CointReg.EstimationMethod := CREstimationMethodType.DOLS;

    // Тип оценки коинтеграционной регрессии:

    CointReg.LagLeadMethod:=LagLeadMethodType.Fixed;

    // Количество лагов для метода DOLS:

    CointReg.Lags := 1;

    // Количество опережений для метода DOLS:

    CointReg.Leads := 1;

    // Учет при расчете доверительных границ, что коэффициенты найдены приблизительно:

    CointReg.Forecast.CoefUncertaintyInSECalc := True;

    // Расчет модели:

    res := CointReg.Execute;

    Debug.WriteLine(CointReg.Errors);

    For i := 0 To CointReg.WarningsCount - 1 Do

        Debug.WriteLine(CointReg.Warnings[i]);

    End For;

    Debug.WriteLine("=== Коинтегрирующие коэффициенты модели ===");

    Debug.Indent;

    For i := 0 To CointReg.CointegratingCoefficients.Estimate.Length - 1 Do

        Debug.WriteLine(CointReg.CointegratingCoefficients.Estimate[i].ToString + " " +

            CointReg.CointegratingCoefficients.StandardError[i].ToString + " " +

            CointReg.CointegratingCoefficients.TStatistic[i].ToString + " " +

            CointReg.CointegratingCoefficients.Probability[i].ToString);

    End For;

    Debug.Unindent;

    Debug.WriteLine("=== Детерминированные коэффициенты модели ===");

    Debug.Indent;

    For i := 0 To CointReg.DeterministicCoefficients.Estimate.Length - 1 Do

        Debug.WriteLine(CointReg.DeterministicCoefficients.Estimate[i].ToString + " " +

            CointReg.DeterministicCoefficients.StandardError[i].ToString + " " +

            CointReg.DeterministicCoefficients.TStatistic[i].ToString + " " +

            CointReg.DeterministicCoefficients.Probability[i].ToString);

    End For;

    Debug.Unindent;

    Debug.WriteLine("=== Характеристики модели ===");

    Debug.Indent;

    Debug.WriteLine("Коэффициент детерминации: " + CointReg.SummaryStatistics.R2.ToString);

    Debug.WriteLine("Скорректированный коэффициент детерминации: " + CointReg.SummaryStatistics.AdjR2.ToString);

    Debug.WriteLine("Стандартная ошибка регрессии: " + CointReg.SummaryStatistics.SE.ToString);

    Debug.WriteLine("Статистика Дарбина-Уотсона: " + CointReg.SummaryStatistics.DW.ToString);

    Debug.Unindent;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены:


	- коинтегрирующие коэффициенты модели;


	- детерминированные коэффициенты модели;


	- характеристики модели.


См. также:


[ISmCointegratingRegression](ISmCointegratingRegression.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
