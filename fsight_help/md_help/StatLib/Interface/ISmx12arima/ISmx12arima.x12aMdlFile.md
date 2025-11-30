# ISmx12arima.x12aMdlFile

ISmx12arima.x12aMdlFile
-


# ISmx12arima.x12aMdlFile


## Синтаксис


x12aMdlFile: Array;


## Описание


Свойство x12aMdlFile определяет
 строковый массив с возможными спецификациями ARIMA.


## Комментарии


Свойство актуально, если [ISmx12arima.SelectFromFile](ISmx12arima.SelectFromFile.htm)
 = True.


## Пример


Для выполнения примера предполагается наличие файлов:


	- X12ARIMA.txt. Файл содержит
	 спецификации параметров ARIMA в виде: (AR, D, MA) (SAR, DS, SMA),
	 где:


		- AR / SAR. Порядок
		 несезонной / сезонной авторегрессии;


		- D / DS. Порядок
		 несезонного / сезонного дифференцирования;


		- MA / SMA. Порядок
		 несезонного / сезонного скользящего среднего;


	- Massiv.txt. Файл предназначен
	 для сохранения результатов вычисления модели X12 по заданным параметрам;


	- Errors.txt. Файл предназначен
	 для сохранения ошибок и предупреждений, возникших при расчете модели
	 X12.


Добавьте ссылки на системные сборки: IO, Stat.


	Sub UserProc;

	Var

	    cens: ISmX12ARIMA;

	    y: Array[62] Of Double;

	    outlier: ICensus2PeriodBegin;

	    i, res: Integer;

	    TextR: ITextReader;

	    TextW: ITextWriter;

	    arr: IStringList;

	Begin

	    cens := New SmX12ARIMA.Create;

	    // Значения объясняемого ряда

	    y[0] := 284; y[1] := 277; y[2] := 338; y[3] := 363; y[4] := 370; y[5] := 388;

	    y[6] := 407; y[7] := 427; y[8] := 368; y[9] := 365; y[10] := 353; y[11] := 375;

	    y[12] := 248; y[13] := 263; y[14] := 322; y[15] := 396; y[16] := 412; y[17] := 451;

	    y[18] := 457; y[19] := 457; y[20] := 463; y[21] := 443; y[22] := 411; y[23] := 398;

	    y[24] := 335; y[25] := 321; y[26] := 393; y[27] := 418; y[28] := 431; y[29] := 499;

	    y[30] := 583; y[31] := 578; y[32] := 497; y[33] := 519; y[34] := 528; y[35] := 508;

	    y[36] := 422; y[37] := 439; y[38] := 494; y[39] := 539; y[40] := 559; y[41] := 603;

	    y[42] := 627; y[43] := 612; y[44] := 548; y[45] := 480; y[46] := 385; y[47] := 428;

	    y[48] := 307; y[49] := 273; y[50] := 334; y[51] := 390; y[52] := 415; y[53] := 453;

	    y[54] := 450; y[55] := 479; y[56] := 420; y[57] := 387; y[58] := 381; y[59] := 414;

	    y[60] := 335; y[61] := 326;


	    /// Общие настройки ///

	    //Период расчета

	    cens.ModelPeriod.FirstPoint := 1;

	    cens.ModelPeriod.LastPoint := 62;

	    //Выбор объясняемой переменной

	    cens.Serie.Value := y;

	    //Кварталы или месяцы

	    cens.SeasonalComponentCycleType := SeasonalityCycleType.Month;

	    cens.StartPeriod.MonthOrQuarter := 2;

	    cens.StartPeriod.Year := 2000;

	    /// Настройки сезонности ///

	    //Тип сезонности

	    cens.SeasonalAdjustmentMode := SeasonalityTypeX12.Additive;

	    //Сезонный фильтр

	    cens.SeasonalFilter := SeasonalFilterType.Auto;

	    /// Поправки на рабочие дни и праздники ///

	    cens.AdjustmentOptions := AdjustmentOptionsX12Type.X11Step;

	    // Поправка на рабочие дни

	    cens.TradingDayEffects := TradingDayEffectsX12Type.Td;

	    // Поправка на праздничные дни

	    cens.Easter.IsActive := True;

	    cens.Easter.Day := 8;


	    /// Спецификация параметров ARIMA из файла ///

	    cens.SelectFromFile := True;

	    cens.SelectFromFileBest := True;

	    cens.SelectFromFileByFit := True;

	    TextR := File.OpenTextReader("C:\X12ARIMA.txt");

	    TextR.Encoding := CodePage.UTF8;

	    arr := New StringList.Create;

	    While Not (TextR.Eof) Do

	        arr.Add(TextR.ReadLine);

	    End While;

	    cens.x12aMdlFile := arr.ToArray;

	    /// Выбросы ///

	    outlier := cens.OutliersX11ao.Add;

	    outlier.Year := 2004;

	    outlier.MonthOrQuarter := 2;

	    outlier := cens.OutliersARIMArpbegin.Add;

	    outlier.Year := 2002;

	    outlier.MonthOrQuarter := 1;

	    outlier := cens.OutliersARIMArpend.Add;

	    outlier.Year := 2002;

	    outlier.MonthOrQuarter := 5;


	    /// Диагностика ///

	    // Анализ стабильности сезонных компонент

	    cens.StabilityAnalysisofSeasonals := StabilityAnalysisofSeasonalsX12Type.None;

	    /// Расчет модели ///

	    res := cens.Execute;

	    Debug.WriteLine(cens.Errors);

	    For i := 0 To cens.WarningsCount - 1 Do

	        Debug.WriteLine(cens.Warnings[i]);

	    End For;

	    If (res = 0) Then

	        // Сохранение в файл

	        If File.Exists("C:\Massiv.txt") Then

	            TextW := File.OpenTextWriter("C:\Massiv.txt", True);

	            TextW.Encoding := CodePage.UTF8;

	            For i := 0 To cens.Output.Length - 1 Do

	                TextW.WriteLnString(cens.Output[i]);

	            End For;

	            TextW.Flush;

	        End If;

	        // Вывод ошибок

	        If File.Exists("C:\Errors.txt") Then

	            TextW := File.OpenTextWriter("C:\Errors.txt", True);

	            TextW.Encoding := CodePage.UTF8;

	            For i := 0 To cens.ErrorFile.Length - 1 Do

	                TextW.WriteLnString(cens.ErrorFile[i]);

	            End For;

	            TextW.Flush;

	        End If;

	    End If;

	End Sub UserProc;


В результате выполнения примера будет создана модель X12, будет сформировано
 два файла: Massiv.txt, Errors.txt.


См. также:


[ISmx12arima](ISmx12arima.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
