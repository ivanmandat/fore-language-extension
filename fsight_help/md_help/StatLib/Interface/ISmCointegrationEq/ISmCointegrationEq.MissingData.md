# ISmCointegrationEq.MissingData

ISmCointegrationEq.MissingData
-


# ISmCointegrationEq.MissingData


## Синтаксис


MissingData: [IMissingData](../IMissingData/IMissingData.htm);


## Описание


Свойство MissingData возвращает
 параметры обработки пропусков объясняемого ряда.


## Комментарии


По умолчанию обработка пропусков не выполняется.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    CointegrEq: ISmCointegrationEq;

    y: Array[11] Of Double;

    x1: Array[21] Of Double;

    AR_X, AR_Y: Array[1] Of Integer;

    CommonEx, LongTerm: Array[1] Of Integer;

    Res: Integer;

    Eq: ISlEquation;

    VARStat: IVARStatistics;

Begin

    CointegrEq := New SmCointegrationEq.Create;

    //Эндогенная переменная:

    y[00] := 95;  y[01] := 45;  y[02] := Double.Nan;

    y[03] := -36; y[04] := 10;  y[05] := -15;

    y[06] := 36;  y[07] := -10; y[08] := Double.Nan;

    y[09] := -44; y[10] := -7;

    //Экзогенная переменная:

    x1[00] := 6;  x1[01] := 8;  x1[02] := 10;

    x1[03] := 5;  x1[04] := 3;  x1[05] := 6;

    x1[06] := 3;  x1[07] := 7;  x1[08] := 8;

    x1[09] := 10; x1[10] := 5;  x1[11] := 2;

    x1[12] := 1;  x1[13] := 1;  x1[14] := 3;

    x1[15] := 4;  x1[16] := 7;  x1[17] := 4;

    x1[18] := 7;  x1[19] := 4;  x1[20] := 3;

    Eq := CointegrEq.Equation;

    // Моделируемый ряд:

    Eq.Serie.Value := y;

    // Экзогенная переменная:

    Eq.ExogenousVariables.Add.Value := x1;

    AR_Y[0] := 1;

    AR_X[0] := 0;

    // Порядок авторегрессии эндогенной переменной:

    CointegrEq.SerieAROrder := AR_Y;

    //Порядок авторегрессии экзогенной переменной:

    Eq.AutoRegressionOrder := AR_X;

    // Период идентификации:

    CointegrEq.Period.FirstPoint := 0;

    CointegrEq.Period.LastPoint := 11;

    // Прогноз:

    Eq.Forecast.LastPoint := 21;

    // Включаем первую экзогенную переменную в группу краткосрочных связей

    CommonEx[0] := 0;

    CointegrEq.CommonExogenious := CommonEx;

    // Включаем вторую экзогенную переменную в группу долгосрочных связей

    LongTerm[0] := 0;

    CointegrEq.LongTermExogenious := LongTerm;

    // Обработка пропусков:

    CointegrEq.MissingData.Method := MissingDataMethod.LinTrend;

    // Расчёт модели:

    Res := CointegrEq.Execute;

    If Res = 0 Then

        Debug.WriteLine("=== Значения статистик векторной авторегрессии ===");

        VARStat := CointegrEq.VARStatistics;

        Debug.WriteLine("Определитель ковариационной матрицы:");

        Debug.WriteLine(VARStat.RC);

        Debug.WriteLine("Определитель матрицы ковариаций остатков:");

        Debug.WriteLine(VARStat.RCadj);

        Debug.WriteLine("Логарифм функции правдоподобия:");

        Debug.WriteLine(VARStat.LLV);

        Debug.WriteLine("Информационный критерий Акаике:");

        Debug.WriteLine(VARStat.AIC);

        Debug.WriteLine("Критерий Шварца:");

        Debug.WriteLine(VARStat.SC);

        Else

            Debug.Writeline(CointegrEq.Errors);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения статистик
 векторной авторегрессии.


См. также:


[ISmCointegrationEq](ISmCointegrationEq.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
