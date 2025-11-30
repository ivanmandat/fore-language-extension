# ISmPhillipsOuliarisTest.Explained

ISmPhillipsOuliarisTest.Explained
-


# ISmPhillipsOuliarisTest.Explained


## Синтаксис


Explained: [ISlSerie](../ISlSerie/ISlSerie.htm);


## Описание


Свойство Explained возвращает
 объясняемый ряд.


## Комментарии


Число наблюдений в объясняемом ряде должно быть не меньше числа оцениваемых
 параметров.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    po: SmPhillipsOuliarisTest;

	    can, fra, ger: Array[43] Of Double;

	    kernel: Array[2] Of Double;

	    res, i: Integer;

	    d: Integer = 2;

	Begin

	    po := New SmPhillipsOuliarisTest.Create;

	    // Значения переменных:

	    can[00] := 6209;    can[01] := 6385;    can[02] := 6752;    can[03] := 6837;

	    can[04] := 6495;    can[05] := 6907;    can[06] := 7349;    can[07] := 7213;

	    can[08] := 7061;    can[09] := 7180;    can[10] := 7132;    can[11] := Double.Nan;

	    can[12] := 7473;    can[13] := 7722;    can[14] := 8088;    can[15] := Double.Nan;

	    can[16] := 8941;    can[17] := 9064;    can[18] := 9380;    can[19] := 9746;

	    can[20] := 9907;    can[21] := 10333;   can[22] := 10863;   can[23] := Double.Nan;

	    can[24] := 12242;   can[25] := 12227;   can[26] := 12910;   can[27] := 13049;

	    can[28] := 13384;   can[29] := 14036;   can[30] := 14242;   can[31] := 14704;

	    can[32] := 13802;   can[33] := 14197;   can[34] := 15010;   can[35] := 15589;

	    fra[00] := 4110;    fra[01] := 4280;    fra[02] := 4459;    fra[03] := 4545;

	    fra[04] := 4664;    fra[05] := 4861;    fra[06] := 5195;    fra[07] := 5389;

	    fra[08] := 5463;    fra[09] := 5610;    fra[10] := 5948;    fra[11] := 6218;

	    fra[12] := 6521;    fra[13] := 6788;    fra[14] := 7222;    fra[15] := 7486;

	    fra[16] := 7832;    fra[17] := 8153;    fra[18] := 8468;    fra[19] := 9054;

	    fra[20] := 9499;    fra[21] := 9866;    fra[22] := 10217;   fra[23] := 10763;

	    fra[24] := 10683;   fra[25] := 10494;   fra[26] := 10938;   fra[27] := 11198;

	    fra[28] := 11546;   fra[29] := 11865;   fra[30] := 11781;   fra[31] := 11681;

	    fra[32] := 11903;   fra[33] := 11900;   fra[34] := 11986;   fra[35] := 12206;

	    ger[00] := 3415;    ger[01] := 3673;    ger[02] := 4013;    ger[03] := 4278;

	    ger[04] := 4577;    ger[05] := 5135;    ger[06] := 5388;    ger[07] := 5610;

	    ger[08] := 5787;    ger[09] := 6181;    ger[10] := 6633;    ger[11] := 6910;

	    ger[12] := 7146;    ger[13] := 7248;    ger[14] := 7689;    ger[15] := 8046;

	    ger[16] := 8143;    ger[17] := 8064;    ger[18] := 8556;    ger[19] := 9177;

	    ger[20] := 9705;    ger[21] := 9923;    ger[22] := 10268;   ger[23] := 10681;

	    ger[24] := 10448;   ger[25] := 10366;   ger[26] := 10958;   ger[27] := 11292;

	    ger[28] := 11726;   ger[29] := 12172;   ger[30] := 12058;   ger[31] := 11804;

	    ger[32] := 11682;   ger[33] := 12001;   ger[34] := 12300;   ger[35] := 12535;


    // Период идентификации:

    po.ModelPeriod.FirstPoint := 1;

    po.ModelPeriod.LastPoint := 35;

    // Объясняемый ряд:

    po.Explained.Value := can;

    // Коинтегрирующие регрессоры:

    po.CointegratingRegressors.Clear;

    po.CointegratingRegressors.Add.Value := fra;

    // Детерминированные регрессоры:

    po.DeterministicRegressors.Clear;

    po.DeterministicRegressors.Add.Value := ger;

    // Обработка пропусков:

    po.MissingData.Method := MissingDataMethod.Casewise;

    // Спецификация тренда:

    po.TrendSpecification := TrendSpecificationType.LinearNone;


    // Настройки для долгосрочной ковариации:

    po.HACOptions.LRCLagSpecification := LRCLagSpecificationType.AutoAIC;

    po.HACOptions.NumberOfLags := 1;

    po.HACOptions.LRCKernel := LRCKernelType.UserSpecified;

    kernel[0] := 1; kernel[1] := 2;

    po.HACOptions.KernelVector := kernel;

    po.HACOptions.LRCBandwidthMethod := LRCBandwidthMethodType.UserSpecified;

    po.HACOptions.BandwidthValue := 1.00;

    // Расчет модели:

    res := po.Execute;

    Debug.WriteLine(po.Errors);

    For i := 0 To po.WarningsCount-1 Do

        Debug.WriteLine(po.Warnings[i]);

    End For;

    Debug.WriteLine("=== Тестовые статистики ===");

    Debug.Indent;

    Debug.WriteLine("Tau "+po.TauStat.Statistic.ToString + " " + po.TauStat.Probability.ToString);

    Debug.WriteLine("Z "+po.ZStat.Statistic.ToString + " " + po.ZStat.Probability.ToString);

    Debug.Unindent;

    Debug.WriteLine("=== Оценки коэффициентов модели ===");

    Debug.Indent;


    For i := 0 To po.ModelCoefficients.Estimate.Length-1 Do

        Debug.WriteLine(po.ModelCoefficients.Estimate[i].ToString + " "

            + po.ModelCoefficients.StandardError[i].ToString + " "

            + po.ModelCoefficients.TStatistic[i].ToString + " "

            + po.ModelCoefficients.Probability[i].ToString);

    End For;

    Debug.Unindent;

    Debug.WriteLine("=== Характеристики вспомогательной регрессии ===");

    Debug.Indent;

    Debug.WriteLine("Коэффициент детерминации: " + po.SummaryStatistics.R2.ToString);

    Debug.WriteLine("Скорректированный коэффициент детерминации: " + po.SummaryStatistics.AdjR2.ToString);

    Debug.WriteLine("Стандартная ошибка регрессии: " + po.SummaryStatistics.SE.ToString);

    Debug.WriteLine("Статистика Дарбина-Уотсона: " + po.SummaryStatistics.DW.ToString);

    Debug.Unindent;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены:


	- значения тестовых статистик;


	- оценки коэффициентов модели;


	- характеристики вспомогательной регрессии.


См. также:


[ISmPhillipsOuliarisTest](ISmPhillipsOuliarisTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
