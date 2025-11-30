# ISmBinaryModel.BinaryForecast

ISmBinaryModel.BinaryForecast
-


# ISmBinaryModel.BinaryForecast


## Синтаксис


BinaryForecast: Array;


## Описание


Свойство BinaryForecast возвращает
 бинарный прогнозный ряд.


## Комментарии


Для получения бинарного модельного ряда используйте свойство [ISmBinaryModel.BinaryFitted](ISmBinaryModel.BinaryFitted.htm).


Для получения прогнозного ряда используйте свойство [ISmBinaryModel.Forecast](ISmBinaryModel.Forecast.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


					Sub UserProc;

		Var

		    bm: SmBinaryModel;

		    can: Array[9] Of Double;

		    bin2: Array[5] Of Integer;

		    i, res: Integer;

		    Intercept: IIntercept;

		    Explanatories: ISlSeries;

		Begin

		    bm := New SmBinaryModel.Create;

		    // Задаем значения объясняющего ряда

		    can[00] := 6.209; can[05] := 5;

		    can[01] := 6.385; can[06] := 6;

		    can[02] := 6.29; can[07] := 7;

		    can[03] := 6.25; can[08] := 8;

		    can[04] := 6.1;

		    // Задаем значения объясняемого ряда

		    bin2[00] := 1; bin2[03] := 0;

		    bin2[01] := 1; bin2[04] := 0;

		    bin2[02] := 0;

		    // Задаем значения первой и последней точек периода идентификации

		    bm.ModelPeriod.FirstPoint := 1;

		    bm.ModelPeriod.LastPoint := 5;

		    // Задаем значение последней точки прогноза

		    bm.Forecast.LastPoint := 9;

		    // Задаем тип модели

		    bm.BinaryDistr := BinaryDistrType.Probit;

		    // Задаем значение деления на группы и точность

		    bm.ClassificationCutOff := 0.5;

		    bm.Tolerance := 0.001;

		    // Задаем объясняемый ряд

		    bm.BinaryExplained := bin2;

		    // Задаем объясняющий ряд

		    Explanatories := bm.Explanatories;

		    Explanatories.Add.Value := can;

		    // Задаем способ оценки константы

		    Intercept := bm.ModelCoefficients.Intercept;

		    Intercept.Mode := InterceptMode.AutoEstimate;

		    // Производим расчет и выводим сообщения об ошибках

		    res:=bm.Execute;

		    // Выводим результаты расчетов

		    If (res = 0) Then

		        Debug.WriteLine(" === Модельный ряд ===");

		        For i := 0 To bm.Fitted.Length - 1 Do

		            Debug.WriteLine(bm.Fitted[i]);

		        End For;

		        Debug.WriteLine(" === Бинарный модельный ряд ===");

		        For i := 0 To bm.BinaryFitted.Length - 1 Do

		            Debug.WriteLine(bm.BinaryFitted[i]);

		        End For;

		        Debug.WriteLine(" === Вероятностный модельный ряд ===");

		        For i := 0 To bm.ProbabilityFitted.Length - 1 Do

		            Debug.WriteLine(bm.ProbabilityFitted[i]);

		        End For;

		        Debug.WriteLine(" === Прогнозный ряд ===");

		        For i := 0 To bm.Forecast.Value.Length - 1 Do

		            Debug.WriteLine(bm.Forecast.Value[i]);

		        End For;

		        Debug.WriteLine(" === Бинарный прогнозный ряд ===");

		        For i := 0 To bm.BinaryForecast.Length - 1 Do

		            Debug.WriteLine(bm.BinaryForecast[i]);

		        End For;

		        Debug.WriteLine(" === Вероятностный прогнозный ряд ===");

		        For i := 0 To bm.ProbabilityForecast.Length - 1 Do

		            Debug.WriteLine(bm.ProbabilityForecast[i]);

		        End For;

		        Debug.WriteLine(" === Критерии качества классификации ===");

		        Debug.WriteLine("Количество истинно-положительных значений: " + bm.RelevanceMeasure.TruePositive.ToString);

		        Debug.WriteLine("Количество истинно-отрицательных значений: " + bm.RelevanceMeasure.TrueNegative.ToString);

		        Debug.WriteLine("Количество ложно-положительных значений: " + bm.RelevanceMeasure.FalsePositive.ToString);

		        Debug.WriteLine("Количество ложно-отрицательных значений: " + bm.RelevanceMeasure.FalseNegative.ToString);

		        Debug.WriteLine("Общая точность: " + bm.RelevanceMeasure.Accuracy.ToString);

		        Debug.WriteLine("Ф - оценка: " + bm.RelevanceMeasure.F1.ToString);

		        Debug.WriteLine("Точность положительного результата: " + bm.RelevanceMeasure.Precision.ToString);

		        Debug.WriteLine("Полнота положительного результата: " + bm.RelevanceMeasure.Recall.ToString);

		        Else

		            Debug.WriteLine(bm.Errors);

		    End If;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены: модельный
 ряд, бинарный модельный ряд, вероятностный модельный ряд, прогнозный ряд,
 бинарный прогнозный ряд, вероятностный прогнозный ряд и критерии качества
 классификации.


См. также:


[ISmBinaryModel](ISmBinaryModel.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
