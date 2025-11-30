# IForecast.Value

IForecast.Value
-


# IForecast.Value


## Синтаксис


Value: Array;


## Описание


Свойство Value возвращает массив
 значений прогнозного ряда.


## Комментарии


Длина данного массива зависит от заданной последней точки прогноза,
 определяемой свойством [IForecast.LastPoint](IForecast.LastPoint.htm).
 На периоде идентификации данный массив содержит пустые значения равные
 Double.NAN или 1#.QNAN, после которых в массиве расположены прогнозные
 значения.


## Пример


Добавьте ссылку на системную сборку Stat.


					Sub UserProc;

		Var

		    Method: SmLinearRegress;

		    Factors: ISlSeries;

		    Forecast: IForecast;

		    Serie: Array[6] Of Double;

		    Factor: Array[10] Of Double;

		    Period: IStatPeriod;

		    d0: Double;

		    FirstPoint, LastPoint, status, i: Integer;

		Begin

		    Method := New SmLinearRegress.Create;

		    // Задаем объясняемый ряд

		    Serie[00] := 6209; Serie[01] := 6385;

		    Serie[02] := 6752; Serie[03] := 6837;

		    Serie[04] := 6495; Serie[05] := Double.Nan;

		    Method.Explained.Value := Serie;

		    // Задаем объясняющий ряд

		    Factor[00] := 4110; Factor[01] := 4280;

		    Factor[02] := 4459; Factor[03] := 4545;

		    Factor[04] := 4664; Factor[05] := 4861;

		    Factor[06] := 5195; Factor[07] := 5389;

		    Factor[08] := 5463; Factor[09] := 5610;

		    Factors := Method.Explanatories;

		    Factors.Add.Value := Factor;

		    // Получаем параметры прогнозного ряда

		    Forecast := Method.Forecast;

		    // Задаем параметры авторегрессии

		    Forecast.ConfidenceLevel := 0.95;

		    Forecast.CoefUncertaintyInSECalc := False;

		    // Задаем период идентификации

		    Period := Method.ModelPeriod;

		    Period.FirstPoint := 1;

		    Period.LastPoint := 6;

		    // Задаем начальную
		 и конечную точку прогноза

		    Forecast.FirstPoint := 8;

		    Forecast.LastPoint := 10;

		    //Выполняем расчёт и выводим результаты

		    status := Method.Execute;

		    FirstPoint := Method.ModelPeriod.FirstPoint;

		    LastPoint := Forecast.LastPoint;

		    Debug.WriteLine("=== Прогнозный ряд ===");

		    For i := FirstPoint To LastPoint - 1 Do

		        d0 := Forecast.Value[i];

		        Debug.WriteLine(i.ToString + " " + d0.ToString);

		    End For;

		    Debug.WriteLine("=== Верхняя доверительная граница ===");

		    For i := FirstPoint To LastPoint - 1 Do

		        d0 := Forecast.UpperConfidenceLevel[i];

		        Debug.WriteLine(i.ToString + " " + d0.ToString);

		    End For;

		    Debug.WriteLine("=== Нижняя доверительная граница ===");

		    For i := FirstPoint To LastPoint - 1 Do

		        d0 := Forecast.LowerConfidenceLevel[i];

		        Debug.WriteLine(i.ToString + " " + d0.ToString);

		    End For;

		    Debug.WriteLine("=== Стандартные ошибки прогнозного ряда ===");

		    For i := FirstPoint To LastPoint - 1 Do

		        d0 := Forecast.StandardError[i];

		        Debug.WriteLine(i.ToString + " " + d0.ToString);

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены результаты
 расчетов:


	- значения прогнозного ряда;


	- верхняя и нижняя доверительные границы;


	- стандартные ошибки прогнозного ряда.


См. также:


[IForecast](IForecast.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
