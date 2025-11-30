# ISmBinaryModel.ProbabilityUpperConfidenceLevel

ISmBinaryModel.ProbabilityUpperConfidenceLevel
-


# ISmBinaryModel.ProbabilityUpperConfidenceLevel


## Синтаксис


ProbabilityUpperConfidenceLevel: Array;


## Описание


Свойство ProbabilityUpperConfidenceLevel
 возвращает верхнюю доверительную границу для вероятностного прогнозного
 ряда.


## Комментарии


Для получения нижней доверительной границы вероятностного прогнозного
 ряда используйте свойство [ISmBinaryModel.ProbabilityLowerConfidenceLevel](ISmBinaryModel.ProbabilityLowerConfidenceLevel.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    bm: SmBinaryModel;

    can: Array[14] Of Double;

    bin2: Array[9] Of Integer;

    i, res: Integer;

    Intercept: IIntercept;

    Explanatories: ISlSeries;

Begin

    bm := New SmBinaryModel.Create;

    // Задаем значения объясняющего ряда

    can[00] := 6.209; can[08] := 5;

    can[01] := 6.385; can[09] := 6;

    can[02] := 6.29; can[10] := Double.Nan;

    can[03] := Double.Nan; can[11] := 8;

    can[04] := 6.1; can[12] := 5;

    can[05] := 5; can[13] := 5;

    can[06] := 5.5;

    can[07] := 4.45;

    // Задаем значения объясняемого ряда

    bin2[00] := 1; bin2[05] := 0;

    bin2[01] := 1; bin2[06] := 1;

    bin2[02] := 0; bin2[07] := 0;

    bin2[03] := 1; bin2[08] := 1;

    bin2[04] := 1;

    // Задаем значения первой и последней точек периода идентификации

    bm.ModelPeriod.FirstPoint := 1;

    bm.ModelPeriod.LastPoint := 9;

    // Задаем значение последней точки прогноза

    bm.Forecast.LastPoint := 14;

    // Задаем метод обработки пропусков

    bm.MissingData.Method := MissingDataMethod.SampleAverage;

    // Задаем тип модели

    bm.BinaryDistr := BinaryDistrType.Probit;

    // Задаем значение деления на группы и точность

    bm.ClassificationCutOff := 0.5;

    bm.Tolerance := 0.001;

    // Задаем способ оценки константы

    Intercept := bm.ModelCoefficients.Intercept;

    Intercept.Mode := InterceptMode.AutoEstimate;

    // Задаем объясняемый ряд

    bm.BinaryExplained := bin2;

    // Задаем объясняющий ряд

    Explanatories := bm.Explanatories;

    Explanatories.Add.Value := can;

    // Производим расчет и выводим сообщения об ошибках

    res:=bm.Execute;

    // Выводим результаты расчетов

    If (res = 0) Then

        Debug.WriteLine(" === Прогнозный ряд ===");

        For i := 0 To bm.Forecast.Value.Length - 1 Do

            Debug.WriteLine(bm.Forecast.Value[i])

        End For;

        Debug.WriteLine(" === Вероятностный прогнозный ряд === ");

        For i := 0 To bm.ProbabilityForecast.Length - 1 Do

            Debug.WriteLine(bm.ProbabilityForecast[i])

        End For;

        Debug.WriteLine(" === Нижняя доверительная граница для вероятностного прогнозного ряда === ");

        For i := 0 To bm.ProbabilityLowerConfidenceLevel.Length - 1 Do

            Debug.WriteLine(bm.ProbabilityLowerConfidenceLevel[i])

        End For;

        Debug.WriteLine(" === Верхняя доверительная граница для вероятностного прогнозного ряда === ");

        For i := 0 To bm.ProbabilityUpperConfidenceLevel.Length - 1 Do

            Debug.WriteLine(bm.ProbabilityUpperConfidenceLevel[i])

        End For;

        Else

            Debug.WriteLine(bm.Errors);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены: значения прогнозного
 ряда, вероятностного прогнозного ряда, нижняя и верхняя доверительные
 границы для вероятностного прогнозного ряда.


См. также:


[ISmBinaryModel](ISmBinaryModel.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
