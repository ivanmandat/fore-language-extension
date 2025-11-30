# ISmGreyForecast.MissingData

ISmGreyForecast.MissingData
-


# ISmGreyForecast.MissingData


## Синтаксис


MissingData: [IMissingData](../IMissingData/IMissingData.htm);


## Описание


Свойство MissingData определяет
 метод обработки пропусков.


## Комментарии


По умолчанию обработка пропусков не выполняется.


## Пример


Добавьте ссылку на системную сборку Stat.


					Sub UserProc;

		Var

		    Grey: ISmGreyForecast;

		    y: Array[43] Of Double;

		    d0, d1: Double;

		    res, i: Integer;

		Begin

		    Grey := New SmGreyForecast.Create;

		    // Задаем значения переменной

		    y[00] := 6209; y[01] := 6385; y[02] := 6752; y[03] := 6837; y[04] := 6495;

		    y[05] := 6907;  y[06] := 7349;  y[07] := 7213;  y[08] := 7061;  y[09] := Double.Nan;

		    y[10] := 7132;  y[11] := 7137;  y[12] := 7473;  y[13] := 7722;  y[14] := 8088;

		    y[15] := 8516; y[16] := 8941; y[17] := 14036; y[18] := 15010; y[19] := 9746;

		    y[20] := 9907;  y[21] := 10333; y[22] := 10863; y[23] := 11693; y[24] := 12242;

		    y[25] := 12227; y[26] := 12910; y[27] := 13049; y[28] := 13384; y[29] := Double.Nan;

		    y[30] := 14242; y[31] := 14704; y[32] := 13802; y[33] := 14197; y[34] := Double.Nan;

		    y[35] := 15589; y[36] := 15932; y[37] := 16631; y[38] := 17394; y[39] := 17758;

		    y[40] := 17308; y[41] := 16444; y[42] := 16413;

		    // Определяем объясняемый ряд

		    Grey.Serie.Value := y;

		    // Определяем параметры периода идентификации

		    Grey.ModelPeriod.FirstPoint := 1;

		    Grey.ModelPeriod.LastPoint := 40;

		    // Определяем параметры прогнозного
		 ряда

		    Grey.Forecast.LastPoint := 45;

		    Grey.Forecast.ConfidenceLevel := 0.8;

		    // определяем метод обработки пропусков

		    Grey.MissingData.Method := MissingDataMethod.SampleAverage;

		    // Выполняем расчёт метода и выводим результаты

		    res := Grey.Execute;

		    If res <> 0 Then

		    Debug.WriteLine(Grey.Errors);

		    Else

		        Debug.WriteLine("Исходный ряд / Модельный ряд");

		        Debug.Indent;

		        For i := 0 To Grey.ModelPeriod.LastPoint - 1 Do

		            d0 := Y[i];

		            d1 := Grey.Fitted[i];

		            Debug.WriteLine((i+1).ToString + ". " + d0.ToString + " / "+d1.ToString);

		        End For;

		        Debug.Unindent;

		        Debug.WriteLine("Остатки");

		        Debug.Indent;

		        For i := 0 To Grey.Residuals.Length - 1 Do

		            Debug.WriteLine(Grey.Residuals[i]);

		        End For;

		        Debug.Unindent;

		        Debug.WriteLine(" Константа: ");

		        d0 := Grey.ModelCoefficients.Intercept.Estimate;

		        Debug.WriteLine("Значение: " + d0.ToString);

		        d0 := Grey.ModelCoefficients.Intercept.StandardError;

		        Debug.WriteLine("Стандартная ошибка: " + d0.ToString);

		        d0 := Grey.ModelCoefficients.Intercept.TStatistic;

		        Debug.WriteLine("t-статистика: " + d0.ToString);

		        d0 := Grey.ModelCoefficients.Intercept.Probability;

		        Debug.WriteLine("Вероятность: " + d0.ToString);

		        Debug.WriteLine("Статистические характеристики");

		        Debug.WriteLine("Статистика Дарбина-Уотсона");

		        Debug.WriteLine(Grey.SummaryStatistics.DW);

		        Debug.WriteLine("Среднее остатков");

		        Debug.WriteLine(Grey.SummaryStatistics.ME);

		    End If;

		End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения исходного
 и модельного рядов, остатки, коэффициенты модели и статистические характеристики.


См. также:


[ISmGreyForecast](ISmGreyForecast.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
