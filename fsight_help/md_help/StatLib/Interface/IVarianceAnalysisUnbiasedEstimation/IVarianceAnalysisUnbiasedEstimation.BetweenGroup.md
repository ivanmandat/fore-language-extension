# IVarianceAnalysisUnbiasedEstimation.BetweenGroup

IVarianceAnalysisUnbiasedEstimation.BetweenGroup
-


# IVarianceAnalysisUnbiasedEstimation.BetweenGroup


## Синтаксис


BetweenGroup: Double;


## Описание


Свойство BetweenGroup возвращает
 несмещенную оценку суммы квадратов отклонений между группами.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    VA: ISmVarianceAnalysis;

    res: Integer;

    m: Array Of Double;

    UE: IVarianceAnalysisUnbiasedEstimation;

Begin

    VA := New SmVarianceAnalysis.Create;

    m := New Double[5, 3];

    m[0, 0] := 1; m[0, 1] := 4; m[0, 2] := 1;

    m[1, 0] := 2; m[1, 1] := 3; m[1, 2] := 2;

    m[2, 0] := 3; m[2, 1] := 3; m[2, 2] := 1;

    m[3, 0] := 4; m[3, 1] := 1; m[3, 2] := 2;

    m[4, 0] := 5; m[4, 1] := 1; m[4, 2] := 1;

    VA.Data := m;

    VA.AnalysisType := VarianceAnalysisType.SingleFactor; //однофакторный анализ

    VA.ConfidenceLevel := 0.05;

    res := VA.Execute;

    If res <> 0 Then

        Debug.WriteLine(VA.Errors);

    Else

        Debug.WriteLine("Несмещенная оценка суммы квадратов отклонений");

        UE := VA.UnbiasedEstimation;

        Debug.WriteLine("между группами: " + UE.BetweenGroup.ToString);

        Debug.WriteLine("внутри групп: " + UE.WithinGroup.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты дисперсионного
 анализа:


Выполнение модуля начато


Несмещенная оценка суммы квадратов отклонений


между группами: 3.26666666666667


внутри групп: 1.53333333333333


Выполнение модуля завершено


См. также:


[IVarianceAnalysisUnbiasedEstimation](IVarianceAnalysisUnbiasedEstimation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
