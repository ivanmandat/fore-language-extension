# ISmUnivariateSpectrumAnalysis.PaddingType

ISmUnivariateSpectrumAnalysis.PaddingType
-


# ISmUnivariateSpectrumAnalysis.PaddingType


## Синтаксис


PaddingType: [SAPaddingType](../../Enums/SAPaddingType.htm);


## Описание


Свойство PaddingType определяет
 способ заполнения/усечения ряда.


## Комментарии


Если длина исходного ряда увеличивается с помощью нулей, т.е. PaddingType = SAPaddingType.PadByZeros,
 то количество нулей определяет свойство [ISmUnivariateSpectrumAnalysis.ZerosCount](ISmUnivariateSpectrumAnalysis.ZerosCount.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			// Процедура вывода данных

Public Sub Print(Data: Array Of Double);

Var

    i: Integer;

    d: Double;

Begin

    For i := 0 To Data.Length - 1 Do

        If Double.IsNan(Data[i]) Then

            Debug.WriteLine(i.ToString + ": ---empty---");

        Else d := Data[i];

            Debug.WriteLine(i.ToString + ": " + d.ToString);

        End If;

    End For;

End Sub Print;


Sub UserProc;

Var

    sp: SmUnivariateSpectrumAnalysis;

    d0: Double;

    res, i: Integer;

    s: Array[40] Of Double;

Begin

    // Исходные данные

    s[0] := 0.599; s[10] := 0.586;

    s[1] := 0.586; s[11] := 0.578;

    s[2] := 0.556; s[12] := 0.568;

    s[3] := 0.549; s[13] := 0.537;

    s[4] := 0.531; s[14] := 0.506;

    s[5] := 0.528; s[15] := 0.512;

    s[6] := 0.497; s[16] := 0.475;

    s[7] := 0.444; s[17] := 0.444;

    s[8] := 0.401; s[18] := 0.410;

    s[9] := 0.309; s[19] := 0.364;

    s[20] := 0.627; s[30] := 0.599;

    s[21] := 0.562; s[31] := 0.543;

    s[22] := 0.540; s[32] := 0.519;

    s[23] := 0.537; s[33] := 0.512;

    s[24] := 0.500; s[34] := Double.Nan;

    s[25] := 0.500; s[35] := 0.494;

    s[26] := 0.475; s[36] := 0.469;

    s[27] := 0.451; s[37] := 0.469;

    s[28] := 0.451; s[38] := Double.Nan;

    s[29] := 0.444; s[39] := Double.Nan;

    // Создаем метод

    sp := New SmUnivariateSpectrumAnalysis.Create;

    // Исходный ряд данных

    sp.Serie.Value := s;

    // Период идентификации

    sp.ModelPeriod.FirstPoint := 1;

    sp.ModelPeriod.LastPoint := 40;

    // Доля краеввых данных

    sp.DataProportion := 0.5;

    // Лаговое окно

    sp.LagWindow := LagWindowType.Bartlett;

    // Тип начальной корректировки

    sp.InitCorrection := InitCorrectionType.MeanCorrection;

    // Точка отсечения

    sp.CutOffPoint := 1;

    // Способ заполнения/усечения ряда

    sp.PaddingType := SAPaddingType.PadByZeros;

    sp.ZerosCount := 2;

    // Используем быстрое преобразование Фурье

    sp.UseFastFourierTransform := True;

    // Порядок быстрого преобразования Фурье

    sp.FastFourierTransformOrder := 3;

    // Метод обработки пропусков

    sp.MissingData.Method := MissingDataMethod.SampleAverage;

    // Выполняем расчёт

    res := sp.Execute;

    If res <> 0 Then

        Debug.WriteLine(sp.Errors);

    Else

        // Выводим результаты

        For i := 0 To sp.WarningsCount - 1 Do

            Debug.WriteLine(sp.Warnings[i]);

        End For;

        d0 := sp.SpectrumStatistics.LCL;

        Debug.WriteLine("Нижний доверительный предел: " + d0.ToString);

        d0 := sp.SpectrumStatistics.UCL;

        Debug.WriteLine("Верхний доверительный предел: " + d0.ToString);

        d0 := sp.SpectrumStatistics.BW;

        Debug.WriteLine("Полоса пропускания: " + d0.ToString);

        d0 := sp.SpectrumStatistics.DF;

        Debug.WriteLine("Число степеней свободы: " + d0.ToString);

        Debug.WriteLine("Периодограмма");

        Print(sp.Periodogramm);

        Debug.WriteLine("Спектральная плотность");

        Print(sp.Spectrum);

        Debug.WriteLine("Спектральная частота");

        Print(sp.SpectrumFrequency);

        Debug.WriteLine("Спектральные периоды");

        Print(sp.SpectrumPeriod);

        Debug.WriteLine("Веса");

        Print(sp.Weights);

    End If;

End Sub UserProc;


После выполнения примера будет выполнен расчёт спектрального анализа.
 Результаты расчёта будут выведены в окно консоли.


См. также:


[ISmUnivariateSpectrumAnalysis](ISmUnivariateSpectrumAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
