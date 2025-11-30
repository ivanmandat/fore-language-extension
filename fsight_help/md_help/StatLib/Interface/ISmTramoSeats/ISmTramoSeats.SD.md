# ISmTramoSeats.SD

ISmTramoSeats.SD
-


# ISmTramoSeats.SD


## Синтаксис


SD: Integer;


## Описание


Свойство SD определяет порядок
 сезонного дифференцирования.


## Комментарии


Свойство актуально, если [ISmTramoSeats.ArimaOrderSearch](ISmTramoSeats.ArimaOrderSearch.htm)
 = ArimaOrderSearchType.FixOrder или [ISmTramoSeats.ArimaOrderSearch](ISmTramoSeats.ArimaOrderSearch.htm)
 = ArimaOrderSearchType.FixOnlyDiff.


## Пример


Для выполнения примера добавьте ссылки на системные сборки: MathFin,
 Stat.


	Sub UserProc;

	Var

	    tramoseats: Smtramoseats;

	    y1, y2: Array[36] Of double;

	    i, j, res: Integer;

	    Value, Trend, HolidaySeries: Array Of Double;

	Begin

	    tramoseats := New SmTramoSeats.Create;

	     // Значения объясняемого ряда


    y1[0] := 284;    y1[1] := 277;   y1[2] := 338;    y1[3] := 363;     y1[4] := 376;   y1[5] := 388;

    y1[6] := 407;    y1[7] := 427;   y1[8] := 368;    y1[9] := 356;     y1[10] := 353;  y1[11] := Double.Nan;

    y1[12] := 248;   y1[13] := 263;  y1[14] := 322;   y1[15] := 396;    y1[16] := 412;  y1[17] := 451;

    y1[18] := 457;   y1[19] := 457;  y1[20] := 463;   y1[21] := 443;    y1[22] := 411;  y1[23] := 398;

    y1[24] := 335;   y1[25] := 321;  y1[26] := 393;   y1[27] := 418;    y1[28] := 431;  y1[29] := Double.Nan;


    y1[30] := 583;   y1[31] := 578;  y1[32] := 497;   y1[33] := 519;    y1[34] := 528;  y1[35] := 508;

    y2[0] := 8848;   y2[1] := 9295;   y2[2] := 11186;  y2[3] := 12779;  y2[4] := 11616;  y2[5] := 15562;

    y2[6] := 16066;  y2[7] := 17710;  y2[8] := 15128;  y2[9] := 13462;  y2[10] := 12491; y2[11] := 12831;

    y2[12] := 9339;  y2[13] := 10371; y2[14] := 12407; y2[15] := 14298; y2[16] := 13608; y2[17] := 17711;

    y2[18] := 18655; y2[19] := 19595; y2[20] := 18635; y2[21] := 16713; y2[22] := 15445; y2[23] := 16312;

    y2[24] := 12749; y2[25] := 12726; y2[26] := 15567; y2[27] := 17243; y2[28] := 19476; y2[29] := 26609;

    y2[30] := 30729; y2[31] := 32499; y2[32] := 27643; y2[33] := 25719; y2[34] := 24747; y2[35] := 24326;

     // Общие настройки


     // Период расчета

    tramoseats.ModelPeriod.FirstPoint := 1;

    tramoseats.ModelPeriod.LastPoint := 36;

     //Выбор объясняемой переменной

    tramoseats.Serie.Value := y1;

     //Кварталы или месяцы

    tramoseats.SeasonalComponentCycleType := SeasonalityCycleType.Month;  // месяцы

    tramoseats.StartPeriod.Year := 2010;

    tramoseats.StartPeriod.MonthOrQuarter := 4;

     //Обработка пропусков


    tramoseats.MissingData.Method := MissingDataMethod.SampleAverage;

     /// Поправки на рабочие дни и праздники ///

     // Использовать ли в качестве поправки на праздничные/рабочие дни отдельный ряд (например, ряд y2)

    tramoseats.UseHolidaySeries := True;

    tramoseats.HolidaySeries := y2;

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

     // Порядки сезонного дифференцирования

    tramoseats.SD := 1;

     // Задаются порядки только для дифференцирования

    tramoseats.ArimaOrderSearch := ArimaOrderSearchType.FixOnlyDiff;

     // Режим выявления выбросов

    tramoseats.OutliersDetection := OutliersType.AutoDetectAll;

     // Расчет модели

    res := tramoseats.Execute;


    Debug.WriteLine(tramoseats.Errors);

    For i := 0 To tramoseats.WarningsCount - 1 Do

        Debug.WriteLine(tramoseats.Warnings[i]);

    End For;

    If (res = 0) Then

        Debug.WriteLine("Объясняемый ряд:");

        Value := tramoseats.Serie.Value;

        For j := 0 To Value.Length - 1 Do

            Debug.Indent;

            Debug.WriteLine(Value[j]);

            Debug.Unindent;

        End For;

        Debug.WriteLine("Тренд-составляющая:");

        Trend := tramoseats.Trend;


        For j := 0 To Trend.Length - 1 Do

            Debug.Indent;

            Debug.WriteLine(Trend[j]);

            Debug.Unindent;

        End For;

        Debug.WriteLine("Поправка на рабочие/праздничные дни:");

        HolidaySeries := tramoseats.HolidaySeries;

        For j := 0 To HolidaySeries.Length - 1 Do

            Debug.Indent;

            Debug.WriteLine(HolidaySeries[j]);

            Debug.Unindent;

        End For;

    End If;

End Sub UserProc;


После выполнения примера будет создана модель по методам TRAMO/SEATS:


	- период идентификации, дата начала периода расчета заданы вручную;


	- задан параметр сезонного дифференцирования.


В окно консоли будут выведены вычисленные составляющие.


См. также:


[ISmTramoSeats](ISmTramoSeats.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
