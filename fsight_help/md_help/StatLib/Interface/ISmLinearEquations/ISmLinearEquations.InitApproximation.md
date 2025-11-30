# ISmLinearEquations.InitApproximation

ISmLinearEquations.InitApproximation
-


# ISmLinearEquations.InitApproximation


## Синтаксис


InitApproximation: Array;


## Описание


Свойство InitApproximation определяет
 начальные приближения.


## Комментарии


Индексация массива начальных приближений должна начинаться с нуля.


Свойство актуально, если [ISmLinearEquations.SLEMethod](ISmLinearEquations.SLEMethod.htm) = [SLEMethodType](../../Enums/SLEMethodType.htm).ConjugateGradient.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Method: ISmLinearEquations;

    ExplainedVal, Exp1, Exp2: Array[2] Of Double;

    ExplanatoriesVal: ISlSeries;

    Init: Array[2] Of Double;

    Status, i: Integer;

    Estimate: Array Of Double;

Begin

    Method := New SmLinearEquations.Create;

    // Значения объясняемого ряда

    ExplainedVal[00] := 5;

    ExplainedVal[01] := 8;

    Method.Explained.Value := ExplainedVal;

    // Значения объясняющих рядов

    ExplanatoriesVal := Method.Explanatories;

    Exp1[00] := 3;  Exp2[00] := 2;

    Exp1[01] := 2;  Exp2[01] := 1;

    ExplanatoriesVal.Add.Value := Exp1;

    ExplanatoriesVal.Add.Value := Exp2;

    // Параметры периода идентификации:

    Method.ModelPeriod.FirstPoint := 1;

    Method.ModelPeriod.LastPoint := 2;

    // Параметры коэффициентов модели:

    Method.ModelCoefficients.Intercept.Mode := InterceptMode.None;

    // Значения начальных приближений:

    Init[0] := 0;

    Init[1] := 2;

    Method.InitApproximation := Init;

    // Точность и максимальное число итераций:

    Method.Tolerance := 0.00001;

    Method.MaxIteration := 500;

    // Метод решения системы линейных уравнений:

    Method.SLEMethod := SLEMethodType.ConjugateGradient;

    // Приведение системы линейных уравнений к эквивалентной:

    Method.SymmetricMatrixSet := True;

    // Расчёт модели:

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
