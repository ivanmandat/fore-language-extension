# ISmLinearEquations.SummaryStatistics

ISmLinearEquations.SummaryStatistics
-


# ISmLinearEquations.SummaryStatistics


## Синтаксис


SummaryStatistics: [ISummaryStatistics](../ISummaryStatistics/ISummaryStatistics.htm);


## Описание


Свойство SummaryStatistics возвращает статистические характеристики.


## Пример


Перед выполнением примера необходимо добавить ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Method: ISmLinearEquations;

    ExplainedVal, Exp1, Exp2, Exp3, Exp4, Exp5: Array Of Double;

    ExplanatoriesVal: ISlSeries;

    R2: Double;

    I: Integer;

    Status: Integer;

// процедура вывода массива
    Sub Print(Data: Array Of Double);

    Var

        i: Integer;

        d: Double;

    Begin

        For i := 0 To Data.Length - 1 Do

            If Double.IsNan(Data[i]) Then

                Debug.WriteLine(i.ToString + ", ---empty---");

            Else

                d := Data[i];

                Debug.WriteLine(i.ToString + ", " + d.ToString);

            End If;

        End For;

    End Sub Print;

Begin

// Значения объясняемого ряда
    ExplainedVal := New Double[10];

    ExplainedVal[00] := -3;

    ExplainedVal[01] := 12;

    ExplainedVal[02] := 28;

    ExplainedVal[03] := 86;

    ExplainedVal[04] := 276;

    ExplainedVal[05] := -15;

    ExplainedVal[06] := 82;

    ExplainedVal[07] := 86;

    ExplainedVal[08] := 8;

    ExplainedVal[09] := 72;

// Значения объясняющих рядов
    Exp1 := New Double[10];

    Exp2 := New Double[10];

    Exp3 := New Double[10];

    Exp4 := New Double[10];

    Exp5 := New Double[10];

    Exp1[00] := 1; Exp2[00] := -1; Exp3[00] := 3; Exp4[00] := 1; Exp5[00] := -3;

    Exp1[01] := 2; Exp2[01] := -9; Exp3[01] := 2; Exp4[01] := 3; Exp5[01] := 2;

    Exp1[02] := 3; Exp2[02] := -8; Exp3[02] := 3; Exp4[02] := 3; Exp5[02] := 4;

    Exp1[03] := 4; Exp2[03] := 11; Exp3[03] := 7; Exp4[03] := 11; Exp5[03] := -1;

    Exp1[04] := 5; Exp2[04] := 99; Exp3[04] := 4; Exp4[04] := 9; Exp5[04] := 5;

    Exp1[05] := 6; Exp2[05] := -12; Exp3[05] := 3; Exp4[05] := 6; Exp5[05] := -6;

    Exp1[06] := 7; Exp2[06] := -4; Exp3[06] := 7; Exp4[06] := 8; Exp5[06] := 6;

    Exp1[07] := 8; Exp2[07] := -3; Exp3[07] := 2; Exp4[07] := 12; Exp5[07] := 6;

    Exp1[08] := 9; Exp2[08] := -2; Exp3[08] := -1; Exp4[08] := 4; Exp5[08] := -2;

    Exp1[09] := 10; Exp2[09] := -1; Exp3[09] := 2; Exp4[09] := 7; Exp5[09] := 6;

    Method := New SmLinearEquations.Create;

    Method.Explained.Value := ExplainedVal;

    ExplanatoriesVal := Method.Explanatories;

    ExplanatoriesVal.Add.Value := Exp1;

    ExplanatoriesVal.Add.Value := Exp2;

    ExplanatoriesVal.Add.Value := Exp3;

    ExplanatoriesVal.Add.Value := Exp4;

    ExplanatoriesVal.Add.Value := Exp5;

    Method.ModelPeriod.FirstPoint := 1;

    Method.ModelPeriod.LastPoint := 6;

    Method.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    Method.MissingData.Method := MissingDataMethod.SampleAverage;

    Status := Method.Execute;

    Debug.WriteLine(Method.Errors);

    Debug.WriteLine("=== Объясняемый ряд ===");

    Print(Method.Explained.Value);

    For I := 0 To ExplanatoriesVal.Count - 1 Do

        Debug.WriteLine("=== Объясняющий ряд " + I.ToString + " ===");

        Print(ExplanatoriesVal.Item(I).Value);

    End For;

    Debug.WriteLine("=== Оцененные значения коэффициентов ===");

    Print(Method.ModelCoefficients.Coefficients.Estimate);

    Debug.WriteLine("=== Коэффициент детерминации ===");

    R2 := Method.SummaryStatistics.R2;

    Debug.WriteLine(R2);

End Sub UserProc;


После выполнения примера, в окно консоли будут выведены результаты расчетов:


Module execution started


Нет ошибок


=== Объясняемый ряд ===


0, -3


1, 12


2, 28


3, 86


4, 276


5, -15


=== Объясняющий ряд 0 ===


0, 1


1, 2


2, 3


3, 4


4, 5


5, 6


=== Объясняющий ряд 1 ===


0, -1


1, -9


2, -8


3, 11


4, 99


5, -12


=== Объясняющий ряд 2 ===


0, 3


1, 2


2, 3


3, 7


4, 4


5, 3


=== Объясняющий ряд 3 ===


0, 1


1, 3


2, 3


3, 11


4, 9


5, 6


=== Объясняющий ряд 4 ===


0, -3


1, 2


2, 4


3, -1


4, 5


5, -6


=== Оцененные значения коэффициентов ===


0, 1.0000000000000036


1, 2


2, 3.0000000000000044


3, 3.9999999999999978


4, 5.0000000000000009


5, -1.1546319456101628E-014


=== Коэффициент детерминации ===


1


Module execution finished


См. также:


[ISmLinearEquations](ISmLinearEquations.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
