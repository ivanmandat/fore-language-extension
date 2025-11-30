# ISmBinaryModel.SummaryStatistics

ISmBinaryModel.SummaryStatistics
-


# ISmBinaryModel.SummaryStatistics


## Синтаксис


SummaryStatistics: [ISummaryStatistics](../ISummaryStatistics/ISummaryStatistics.htm);


## Описание


Свойство SummaryStatistics возвращает
 статистические характеристики.


## Комментарии


Описательные статистики рассчитываются по общим формулам.


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

    can[02] := 6.29; can[07] := Double.Nan;

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

    // Задаем метод обработки пропусков

    bm.MissingData.Method := MissingDataMethod.Casewise;

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

        Debug.WriteLine(" === Модельный ряд ===");

        For i := 0 To bm.Fitted.Length - 1 Do

            Debug.WriteLine(bm.Fitted[i])

        End For;

        Debug.WriteLine(" === Ряд остатков === ");

        For i := 0 To bm.Residuals.Length - 1 Do

            Debug.WriteLine(bm.Residuals[i])

        End For;

        Debug.WriteLine(" === Описательные статистики === ");

        Debug.WriteLine("Коэффициент детерминации Макфаденна: "+bm.SummaryStatistics.McFaddenRsquared.ToString);

        Debug.WriteLine("Сумма квадратов остатков: "+bm.SummaryStatistics.SSR.ToString);

        Debug.WriteLine("Информационный критерий Акаике: "+bm.SummaryStatistics.AIC.ToString);

        Debug.WriteLine("Информационный критерий Шварца: "+bm.SummaryStatistics.SC.ToString);

        Else

            Debug.WriteLine(bm.Errors);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены модельный ряд,
 ряд остатков и рассчитанные статистические характеристики.


См. также:


[ISmBinaryModel](ISmBinaryModel.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
