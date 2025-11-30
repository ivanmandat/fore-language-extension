# ISmVarianceAnalysis.SumSquared

ISmVarianceAnalysis.SumSquared
-


# ISmVarianceAnalysis.SumSquared


## Синтаксис


SumSquared: [IVarianceAnalysisSumSquared](../IVarianceAnalysisSumSquared/IVarianceAnalysisSumSquared.htm)


## Описание


Свойство SumSquared возвращает
 сумму квадратов отклонений.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    VA: SmVarianceAnalysis;

    res: Integer;

    m: Array Of Double;

    SS: IVarianceAnalysisSumSquared;

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

    VA.AnalysisType := VarianceAnalysisType.TwoFactor; // двухфакторный анализ

    VA.ConfidenceLevel := 0.05;

    res := VA.Execute;

    If res <> 0 Then

        Debug.WriteLine(VA.Errors);

    Else

        Debug.AssertMsg(False,"Результаты: ");

        Debug.WriteLine("Сумма квадратов отклонений");

        SS := VA.SumSquared;

        Debug.WriteLine("строки : " + SS.Rows.ToString);

        Debug.WriteLine("столбцы : " + SS.Columns.ToString);

        Debug.WriteLine("погрешность : " + SS.Accuracy.ToString);

        Debug.WriteLine("Итого: " + SS.Total.ToString);

        Debug.WriteLine("Несмещенная оценка суммы квадратов отклонений");

        UE := VA.UnbiasedEstimation;

        Debug.WriteLine("строки : " + UE.Rows.ToString);

        Debug.WriteLine("столбцы : " + UE.Columns.ToString);

        Debug.WriteLine("погрешность : " + UE.Accuracy.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты дисперсионного
 анализа:


Выполнение модуля начато


Результаты:


Сумма квадратов отклонений


строки : 0.266666666666667


столбцы : 6.53333333333333


погрешность : 18.1333333333333


Итого: 24.9333333333333


Несмещенная оценка суммы квадратов отклонений


строки : 0.0666666666666667


столбцы : 3.26666666666667


погрешность : 2.26666666666666


Выполнение модуля завершено


См. также:


[ISmVarianceAnalysis](ISmVarianceAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
