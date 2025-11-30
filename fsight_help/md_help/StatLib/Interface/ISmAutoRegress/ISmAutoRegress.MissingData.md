# ISmAutoRegress.MissingData

ISmAutoRegress.MissingData
-


# ISmAutoRegress.MissingData


## Синтаксис


MissingData: [IMissingData](../IMissingData/IMissingData.htm);


## Описание


Свойство MissingData определяет
 параметры обработки пропусков.


## Комментарии


По умолчанию обработка пропусков не выполняется.


## Пример


Добавьте ссылку на системную сборку Stat.


					Sub Print(Data: Array Of Double);

		Var

		    i: Integer;

		Begin

		    For i := 0 To Data.Length - 1 Do

		        If Double.IsNan(Data[i]) Then

		            Debug.WriteLine("---empty---");

		        Else

		            Debug.WriteLine(i.ToString + ", " + Data[i].ToString);

		        End If;

		    End For;

		End Sub Print;


		Sub UserProc;

		Var

		    ar: SmAutoRegress;

		    res: Integer;

		    y: Array[24] Of Double;

		    AROrder: Array[3] Of Integer;

		    d: Double;

		Begin

		    // Задаём значения переменной

		    ar := New SmAutoRegress.Create;

		    y[00] := 6209; y[12] := Double.Nan;

		    y[01] := 6385; y[13] := 7722;

		    y[02] := 6752; y[14] := 8088;

		    y[03] := 6837; y[15] := 8516;

		    y[04] := 6495; y[16] := 8941;

		    y[05] := 6907; y[17] := 9064;

		    y[06] := 7349; y[18] := 9380;

		    y[07] := 7213; y[19] := 9746;

		    y[08] := 7061; y[20] := 9907;

		    y[09] := 7180; y[21] := 10333;

		    y[10] := Double.Nan; y[22] := 10863;

		    y[11] := Double.Nan; y[23] := 11693;

		    // Определяем объясняемый ряд

		    ar.Serie.Value := y;

		    // Определяем параметры периода идентификации

		    ar.ModelPeriod.FirstPoint := 1;

		    ar.ModelPeriod.LastPoint := 24;

		    // Определяем параметры прогнозного
		 ряда

		    ar.Forecast.LastPoint := 35;

		    // Определяем порядки авторегрессий

		    AROrder[0] := 1;

		    AROrder[1] := 3;

		    AROrder[2] := 5;

		    ar.AutoRegressionOrder := AROrder;

		    // Определяем параметры обработки пропусков

		    ar.MissingData.Method := MissingDataMethod.SampleAverage;

		    // Определяем параметры коэффициентов модели

		    ar.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

		    // Выполняем расчёт метода и выводим результаты

		    res := ar.Execute;

		    If res <> 0 Then

		        Debug.WriteLine(ar.Errors);

		        Else

		            Debug.WriteLine("=== Модельный ряд ===");

		            Print(ar.Fitted);

		            Debug.WriteLine("=== Прогнозный ряд ===");

		            Print(ar.Forecast.Value);

		            Debug.WriteLine("=== Остатки ===");

		            Print(ar.Residuals);

		            Debug.WriteLine("=== Статистические характеристики ===");

		            Debug.WriteLine("=== Коэффициент детерминации ===");

		            d := ar.SummaryStatistics.AdjR2;

		            Debug.WriteLine(d);

		            Debug.WriteLine("=== Среднее остатков ===");

		            d := ar.SummaryStatistics.ME;

		            Debug.WriteLine(d);

		    End If;

		End Sub UserProc;


После выполнения примера в окно консоли будут выведены модельный и прогнозный
 ряды, остатки и статистические характеристики.


См. также:


[ISmAutoRegress](ISmAutoRegress.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
