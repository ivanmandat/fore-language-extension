# ISmTramoSeats.D

ISmTramoSeats.D
-


# ISmTramoSeats.D


## Синтаксис


D: Integer;


## Описание


Свойство D определяет порядок
 несезонного дифференцирования.


## Комментарии


Свойство актуально, если [ISmTramoSeats.ArimaOrderSearch](ISmTramoSeats.ArimaOrderSearch.htm)
 = ArimaOrderSearchType.FixOrder или [ISmTramoSeats.ArimaOrderSearch](ISmTramoSeats.ArimaOrderSearch.htm)
 = ArimaOrderSearchType.FixOnlyDiff.


## Пример


Для выполнения примера добавьте ссылки на системные сборки: IO, MathFin,
 Stat.


	Sub UserProc;

	Var

	    tramoseats: Smtramoseats;

	    Exogenous: ISlTramoseatsExogenousVar;

	    outlier: ISlTramoseatsoutlier;

	    y1, y2, y3, y4, y5: Array[88] Of Double;

	    i, j, res: Integer;

	    TextW: ITextWriter;

	Begin

	    tramoseats := New SmTramoSeats.Create;

	    // Значения объясняемого ряда

	    y1[0] := 284; y2[0] := 8848; y3[0] := 2289; y4[0] := 102631; y5[0] := Double.Nan;

	    y1[1] := 277; y2[1] := 9295; y3[1] := 2609; y4[1] := 18544; y5[1] := Double.Nan;

	    y1[2] := 338; y2[2] := 11186; y3[2] := 2980; y4[2] := 106224; y5[2] := Double.Nan;

	    y1[3] := 363; y2[3] := 12779; y3[3] := 2812; y4[3] := 24535; y5[3] := Double.Nan;

	    y1[4] := 376; y2[4] := 11616; y3[4] := 2388; y4[4] := 21075; y5[4] := Double.Nan;

	    y1[5] := 388; y2[5] := 15562; y3[5] := 2611; y4[5] := 39003; y5[5] := Double.Nan;

	    y1[6] := 407; y2[6] := 16066; y3[6] := 2978; y4[6] := 32491; y5[6] := Double.Nan;

	    y1[7] := 427; y2[7] := 17710; y3[7] := 2878; y4[7] := 44452; y5[7] := Double.Nan;

	    y1[8] := 368; y2[8] := 15128; y3[8] := 2649; y4[8] := 56451; y5[8] := Double.Nan;

	    y1[9] := 356; y2[9] := 13462; y3[9] := 2593; y4[9] := 90862; y5[9] := Double.Nan;

	    y1[10] := 353; y2[10] := 12491; y3[10] := 3179; y4[10] := 38121; y5[10] := Double.Nan;


	    y1[11] := 375; y2[11] := 12831; y3[11] := 3952; y4[11] := 77742; y5[11] := Double.Nan;

	    y1[12] := 248; y2[12] := 9339; y3[12] := 2337; y4[12] := 36902; y5[12] := Double.Nan;

	    y1[13] := 263; y2[13] := 10371; y3[13] := 2762; y4[13] := 25610; y5[13] := Double.Nan;

	    y1[14] := 322; y2[14] := 12407; y3[14] := 2925; y4[14] := 27922; y5[14] := Double.Nan;

	    y1[15] := 396; y2[15] := 14298; y3[15] := 3097; y4[15] := 39487; y5[15] := Double.Nan;

	    y1[16] := 412; y2[16] := 13608; y3[16] := 2542; y4[16] := 76457; y5[16] := Double.Nan;

	    y1[17] := 451; y2[17] := 17711; y3[17] := 2817; y4[17] := 31606; y5[17] := Double.Nan;

	    y1[18] := 457; y2[18] := 18655; y3[18] := 2328; y4[18] := 35912; y5[18] := Double.Nan;

	    y1[19] := 457; y2[19] := 19595; y3[19] := 2238; y4[19] := 64197; y5[19] := Double.Nan;

	    y1[20] := 463; y2[20] := 18635; y3[20] := 2485; y4[20] := 107044; y5[20] := Double.Nan;


	    y1[21] := 443; y2[21] := 16713; y3[21] := 2717; y4[21] := 95684; y5[21] := Double.Nan;

	    y1[22] := 411; y2[22] := 15445; y3[22] := 2883; y4[22] := 142230; y5[22] := Double.Nan;

	    y1[23] := 398; y2[23] := 16312; y3[23] := 4291; y4[23] := 40052; y5[23] := Double.Nan;

	    y1[24] := 335; y2[24] := 12749; y3[24] := 2439; y4[24] := 18983; y5[24] := Double.Nan;

	    y1[25] := 321; y2[25] := 12726; y3[25] := 2738; y4[25] := 23073; y5[25] := Double.Nan;

	    y1[26] := 393; y2[26] := 15567; y3[26] := 3090; y4[26] := 34649; y5[26] := Double.Nan;

	    y1[27] := 418; y2[27] := 17243; y3[27] := 3281; y4[27] := 33317; y5[27] := Double.Nan;

	    y1[28] := 431; y2[28] := 19476; y3[28] := 3033; y4[28] := 43210; y5[28] := Double.Nan;

	    y1[29] := 499; y2[29] := 26609; y3[29] := 3119; y4[29] := 28677; y5[29] := Double.Nan;

	    y1[30] := 583; y2[30] := 30729; y3[30] := 3010; y4[30] := 30726; y5[30] := 30526;


	    y1[31] := 578; y2[31] := 32499; y3[31] := 3316; y4[31] := 63466; y5[31] := 29581;

	    y1[32] := 497; y2[32] := 27643; y3[32] := 3561; y4[32] := 65972; y5[32] := 26438;

	    y1[33] := 519; y2[33] := 25719; y3[33] := 3705; y4[33] := 38057; y5[33] := 26205;

	    y1[34] := 528; y2[34] := 24747; y3[34] := 3882; y4[34] := 79856; y5[34] := 27813;

	    y1[35] := 508; y2[35] := 24326; y3[35] := 5889; y4[35] := 76159; y5[35] := 26783;

	    y1[36] := 422; y2[36] := 20028; y3[36] := 3552; y4[36] := 46362; y5[36] := 22751;

	    y1[37] := 439; y2[37] := 20958; y3[37] := 4128; y4[37] := 29959; y5[37] := 22778;

	    y1[38] := 494; y2[38] := 24256; y3[38] := 4411; y4[38] := 63076; y5[38] := 25517;

	    y1[39] := 539; y2[39] := 27562; y3[39] := 4439; y4[39] := 112477; y5[39] := 30785;

	    y1[40] := 559; y2[40] := 31426; y3[40] := 4129; y4[40] := 81840; y5[40] := 30410;


	    y1[41] := 603; y2[41] := 37484; y3[41] := 3567; y4[41] := 83570; y5[41] := 34308;

	    y1[42] := 627; y2[42] := 38919; y3[42] := 3693; y4[42] := 33149; y5[42] := 33260;

	    y1[43] := 612; y2[43] := 42043; y3[43] := 3527; y4[43] := 37269; y5[43] := 33946;

	    y1[44] := 548; y2[44] := 33591; y3[44] := 3745; y4[44] := 110764; y5[44] := 28734;

	    y1[45] := 480; y2[45] := 24743; y3[45] := 4419; y4[45] := 100404; y5[45] := 25817;

	    y1[46] := 385; y2[46] := 20882; y3[46] := 4592; y4[46] := 119069; y5[46] := 22049;

	    y1[47] := 428; y2[47] := 18833; y3[47] := 5969; y4[47] := 194537; y5[47] := 22302;

	    y1[48] := 307; y2[48] := 15756; y3[48] := 3365; y4[48] := 38098; y5[48] := 17396;

	    y1[49] := 273; y2[49] := 14006; y3[49] := 3825; y4[49] := 51598; y5[49] := 13377;

	    y1[50] := 334; y2[50] := 16274; y3[50] := 4385; y4[50] := 144119; y5[50] := 19017;


	    y1[51] := 390; y2[51] := 19113; y3[51] := 4561; y4[51] := 68173; y5[51] := 20124;

	    y1[52] := 415; y2[52] := 24008; y3[52] := 4422; y4[52] := 85488; y5[52] := 22828;

	    y1[53] := 453; y2[53] := 29048; y3[53] := 4777; y4[53] := 170445; y5[53] := 25743;

	    y1[54] := 450; y2[54] := 31555; y3[54] := 5330; y4[54] := 119260; y5[54] := 26257;

	    y1[55] := 479; y2[55] := 34300; y3[55] := 4538; y4[55] := 45937; y5[55] := 26711;

	    y1[56] := 420; y2[56] := 29826; y3[56] := 4397; y4[56] := 58634; y5[56] := 21674;

	    y1[57] := 387; y2[57] := 25728; y3[57] := 4880; y4[57] := 107264; y5[57] := 21194;

	    y1[58] := 381; y2[58] := 22358; y3[58] := 4869; y4[58] := 67451; y5[58] := 19630;

	    y1[59] := 414; y2[59] := 23260; y3[59] := 6008; y4[59] := 143776; y5[59] := 23514;

	    y1[60] := 335; y2[60] := 19945; y3[60] := 3739; y4[60] := 33676; y5[60] := 17337;


	    y1[61] := 326; y2[61] := 20006; y3[61] := 4428; y4[61] := 97349; y5[61] := 17429.374;

	    y1[62] := 416; y2[62] := 24374; y3[62] := 5015; y4[62] := 71329; y5[62] := 21314.466;

	    y1[63] := 417; y2[63] := 26381; y3[63] := 5383; y4[63] := 196830; y5[63] := 22081.686;

	    y1[64] := 441; y2[64] := 31646; y3[64] := 4596; y4[64] := 109799; y5[64] := 24881.823;

	    y1[65] := 510; y2[65] := 38664; y3[65] := 5509; y4[65] := 113115; y5[65] := 29211.761;

	    y1[66] := 542; y2[66] := 41190; y3[66] := 6106; y4[66] := 35975; y5[66] := 29238.565;

	    y1[67] := 528; y2[67] := 40746; y3[67] := 5348; y4[67] := 177925; y5[67] := 30453.264;

	    y1[68] := 503; y2[68] := 37678; y3[68] := 5436; y4[68] := 158825; y5[68] := 28244.911;

	    y1[69] := 476; y2[69] := 34509; y3[69] := 5898; y4[69] := 163360; y5[69] := 26977.093;

	    y1[70] := 483; y2[70] := 30810; y3[70] := 5968; y4[70] := 320604; y5[70] := 28883.634;


	    y1[71] := 487; y2[71] := 28819; y3[71] := 7913; y4[71] := 113818; y5[71] := 26512.091;

	    y1[72] := 453; y2[72] := 25210; y3[72] := 4874; y4[72] := 106331; y5[72] := 25493.77;

	    y1[73] := 406; y2[73] := 22507; y3[73] := 5228; y4[73] := 48114; y5[73] := 23276.499;

	    y1[74] := 496; y2[74] := 28045; y3[74] := 5805; y4[74] := 143653; y5[74] := 28806.555;

	    y1[75] := 497; y2[75] := 31045; y3[75] := 6679; y4[75] := 143226; y5[75] := 27164.629;

	    y1[76] := 545; y2[76] := 37846; y3[76] := 7630; y4[76] := 64952; y5[76] := 30074.826;

	    y1[77] := 675; y2[77] := 46617; y3[77] := 5460; y4[77] := 82363; y5[77] := 34323.263;

	    y1[78] := 644; y2[78] := 47089; y3[78] := 5317; y4[78] := 128008; y5[78] := 34489.306;

	    y1[79] := 657; y2[79] := 49844; y3[79] := 4787; y4[79] := 140633; y5[79] := 35670.338;

	    y1[80] := 638; y2[80] := 46040; y3[80] := 5025; y4[80] := 219440; y5[80] := 35037.867;


	    y1[81] := 572; y2[81] := 38685; y3[81] := 4715; y4[81] := 81036; y5[81] := 31485.337;

	    y1[82] := 540; y2[82] := 35115; y3[82] := 5247; y4[82] := 154028; y5[82] := 29752.42;

	    y1[83] := 503; y2[83] := 32484; y3[83] := 6363; y4[83] := 91399; y5[83] := 27740.815;

	    y1[84] := 470; y2[84] := 28836; y3[84] := 4475; y4[84] := 144126; y5[84] := 25486.789;

	    y1[85] := 480; y2[85] := 28429; y3[85] := 4656; y4[85] := 128954; y5[85] := 25333.374;

	    y1[86] := 495; y2[86] := 32128; y3[86] := 7782; y4[86] := 76743; y5[86] := 26133.989;

	    y1[87] := 542; y2[87] := 34136; y3[87] := 6924; y4[87] := 148006; y5[87] := 27495.66;

	    /// Общие настройки ///

	    // Период расчета

	    tramoseats.ModelPeriod.FirstPoint := 1;

	    tramoseats.ModelPeriod.LastPoint := 88;

	    // Выбор объясняемой переменной

	    tramoseats.Serie.Value := y2;

	    // Кварталы или месяцы

	    tramoseats.SeasonalComponentCycleType := SeasonalityCycleType.Month; // месяцы

	    tramoseats.StartPeriod.Year := 2010;

	    tramoseats.StartPeriod.MonthOrQuarter := 4;

	    // Обработка пропусков

	    tramoseats.MissingData.Method := MissingDataMethod.SampleAverage;


	    /// Поправки на рабочие дни и праздники ///

	    // Поправка на рабочие дни

	    tramoseats.TradingDayEffects := TradingDayEffectsType.WeekendWeekday;

	    // Автоматический режим учета поправок на рабочие дни включен

	    tramoseats.TradingDayIfSignificant := True;

	    // Поправка на праздник Пасхи

	    tramoseats.EasterEffect := EasterEffectType.Auto;

	    /// ARIMA-опции

	    tramoseats.RunSeats := True;

	    tramoseats.ForecastHorizon := 8;

	    // Преобразование исходного ряда

	    tramoseats.Transformation := TransformationLogLevelType.None;


	    /// ARIMA specification ///

	    // Порядкиавторегрессии

	    tramoseats.AR := 1;

	    tramoseats.SAR := 1;

	    // Порядки скользящего среднего

	    tramoseats.MA := 1;

	    tramoseats.SMA := 1;

	    // Порядкинесезонного дифференцирования

	    tramoseats.D := 1;

	    // Используются заданные порядки AR, MA, SAR, SMA и несезонногодифференцирования

	    tramoseats.ArimaOrderSearch := ArimaOrderSearchType.FixOrder;

	    // Regressors

	    tramoseats.Exogenous.Clear;

	    Exogenous := tramoseats.Exogenous.Add;

	    Exogenous.Exogenous := y1;

	    Exogenous.RegressionEffect := RegressionEffectType.Separate;

	    // Outliers

	    tramoseats.Outliers.Clear;

	    outlier := tramoseats.Outliers.Add;

	    outlier.OutlierSpecification := OutlierSpecificationType.Additive;

	    outlier.OutlierDate.Year := 2010;

	    outlier.OutlierDate.MonthOrQuarter := 5;

	    outlier.RegressionEffect := RegressionEffectType.Seasonal;

	    // Режим выявления выбросов

	    tramoseats.OutliersDetection := OutliersType.AutoDetectAll;


	    // Расчёт модели

	    res := tramoseats.Execute;

	    Debug.WriteLine(tramoseats.Errors);

	    For i := 0 To tramoseats.WarningsCount - 1 Do

	        Debug.WriteLine(tramoseats.Warnings[i]);

	    End For;

	    If (res = 0) Then

	        Debug.WriteLine("Прогнозный ряд");

	        For j := 0 To tramoseats.Forecast.Length - 1 Do

	            Debug.WriteLine(tramoseats.Forecast[j]);

	        End For;

	        Debug.WriteLine("Сезонно скорректированный ряд:");

	        For j := 0 To tramoseats.SeasonallyAdjusted.Length - 1 Do

	            Debug.WriteLine(tramoseats.SeasonallyAdjusted[j]);

	        End For;

	        Debug.WriteLine("Тренд-составляющая:");

	        For j := 0 To tramoseats.Trend.Length - 1 Do

	            Debug.WriteLine(tramoseats.Trend[j]);

	        End For;

	        Debug.WriteLine("Нерегулярная компонента:");

	        For j := 0 To tramoseats.IrregularComponent.Length - 1 Do

	            Debug.WriteLine(tramoseats.IrregularComponent[j]);

	        End For;

	        Debug.WriteLine("Сезонный фактор:");

	        For j := 0 To tramoseats.SeasonalFactors.Length - 1 Do

	            Debug.WriteLine(tramoseats.SeasonalFactors[j]);

	        End For;

	        Debug.WriteLine("Циклическая составляющая:");

	        For j := 0 To tramoseats.Cycle.Length - 1 Do

	            Debug.WriteLine(tramoseats.Cycle[j]);

	        End For;

	        Debug.WriteLine("Линеаризация исходного ряда:");

	        For j := 0 To tramoseats.Linearized.Length - 1 Do

	            Debug.WriteLine(tramoseats.Linearized[j]);

	        End For;

	        Debug.WriteLine("Интерполяция исходного ряда:");

	        For j := 0 To tramoseats.Interpolated.Length - 1 Do

	            Debug.WriteLine(tramoseats.Interpolated[j]);

	        End For;

	        // Выходной файл, формируемый внешней программой TRAMO

	        TextW := File.OpenTextWriter("C:\tramo.txt", True);

	        TextW.Encoding := CodePage.UTF8;

	        For i := 0 To tramoseats.Output_tramo.Length - 1 Do

	            TextW.WriteLnString(tramoseats.Output_tramo[i]);

	        End For;

	        TextW.Flush;

	        // Выходной файл, формируемый внешней программой SEATS

	        TextW := File.OpenTextWriter("C:\seats.txt", True);

	        TextW.Encoding := CodePage.UTF8;

	        For i := 0 To tramoseats.Output_seats.Length - 1 Do

	            TextW.WriteLnString(tramoseats.Output_seats[i]);

	        End For;

	        TextW.Flush;

	    End If;

	End Sub UserProc;


После выполнения примера будет создана модель по методам TRAMO/SEATS:


	- период идентификации, дата начала периода расчета заданы вручную;


	- заданы порядки авторегрессии;


	- заданы порядки скользящего среднего;


	- задан порядок несезонного дифференцирования;


	- настроены регрессоры и выбросы.


В окно консоли будут выведены вычисленные составляющие.


Будет сформировано два файла:


	- выходной файл с информацией, сгенерированный процедурой TRAMO;


	- выходной файл с информацией, сгенерированный процедурой SEATS.


См. также:


[ISmTramoSeats](ISmTramoSeats.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
