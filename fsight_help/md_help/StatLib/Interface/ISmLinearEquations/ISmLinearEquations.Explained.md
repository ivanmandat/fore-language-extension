# ISmLinearEquations.Explained

ISmLinearEquations.Explained
-


# ISmLinearEquations.Explained


## Синтаксис


Explained: [ISlSerie](../ISlSerie/ISlSerie.htm);


## Описание


Свойство Explained возвращает
 объясняемый ряд.


## Комментарии


Для получения объясняющих рядов используйте свойство [ISmLinearEquations.Explanatories](ISmLinearEquations.Explanatories.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Method: ISmLinearEquations;

    ExplainedVal, Exp1, Exp2, Exp3, Exp4, Exp5: Array[10] Of Double;

    ExplanatoriesVal: ISlSeries;

    Status, i: Integer;

    Estimate: Array Of Double;

Begin

    Method := New SmLinearEquations.Create;

    // Значения объясняемого ряда

    ExplainedVal[00] := -3;

    ExplainedVal[01] := 12;

    ExplainedVal[02] := Double.Nan;

    ExplainedVal[03] := Double.Nan;

    ExplainedVal[04] := 276;

    ExplainedVal[05] := -15;

    ExplainedVal[06] := 82;

    ExplainedVal[07] := 86;

    ExplainedVal[08] := 8;

    ExplainedVal[09] := 72;

    // Значения объясняющих рядов

    Exp1[00] := 1;  Exp2[00] := -1;  Exp3[00] := 3;  Exp4[00] := 1;  Exp5[00] := -3;

    Exp1[01] := 2;  Exp2[01] := -9;  Exp3[01] := 2;  Exp4[01] := 3;  Exp5[01] := 2;

    Exp1[02] := 3;  Exp2[02] := -8;  Exp3[02] := 3;  Exp4[02] := 3;  Exp5[02] := 4;

    Exp1[03] := 4;  Exp2[03] := 11;  Exp3[03] := 7;  Exp4[03] := 11; Exp5[03] := -1;

    Exp1[04] := 5;  Exp2[04] := 99;  Exp3[04] := 4;  Exp4[04] := 9;  Exp5[04] := 5;

    Exp1[05] := 6;  Exp2[05] := -12; Exp3[05] := 3;  Exp4[05] := 6;  Exp5[05] := -6;

    Exp1[06] := 7;  Exp2[06] := -4;  Exp3[06] := 7;  Exp4[06] := 8;  Exp5[06] := 6;

    Exp1[07] := 8;  Exp2[07] := -3;  Exp3[07] := 2;  Exp4[07] := 12; Exp5[07] := 6;

    Exp1[08] := 9;  Exp2[08] := -2;  Exp3[08] := -1; Exp4[08] := 4;  Exp5[08] := -2;

    Exp1[09] := 10; Exp2[09] := -1;  Exp3[09] := 2;  Exp4[09] := 7;  Exp5[09] := 6;

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

    Debug.WriteLine("=== Оцененные значения коэффициентов ===");

    Estimate := Method.ModelCoefficients.Coefficients.Estimate;

    For i := 0 To Estimate.Length - 1 Do

        Debug.WriteLine((i+1).ToString + ". " + Estimate[i].ToString);

    End For;

End Sub UserProc;


После выполнения примера, в окно консоли будут выведены оцененные значения
 коэффициентов.


См. также:


[ISmLinearEquations](ISmLinearEquations.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
