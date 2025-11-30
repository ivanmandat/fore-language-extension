# ISmVarianceAnalysis.FisherCritical

ISmVarianceAnalysis.FisherCritical
-


# ISmVarianceAnalysis.FisherCritical


## Синтаксис


FisherCritical: [IVarianceAnalysisStatistics](../IVarianceAnalysisStatistics/IVarianceAnalysisStatistics.htm);


## Описание


Свойство FisherCritical возвращает критическое значение статистики Фишера.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    VA: SmVarianceAnalysis;

    res: Integer;

    m: Array Of Double;

    FS, FC: IVarianceAnalysisStatistics;

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

        Debug.WriteLine("=================================");

        Debug.WriteLine("Значение статистики Фишера");

        FS := VA.FisherStatistics;

        Debug.WriteLine("строки : " + FS.Rows.ToString);

        Debug.WriteLine("столбцы : " + FS.Columns.ToString);

        Debug.AssertMsg(False, "=================================");

        Debug.WriteLine("Критическое значение статистики Фишера");

        FC := VA.FisherCritical;

        Debug.WriteLine("строки : " + FC.Rows.ToString);

        Debug.WriteLine("столбцы : " + FC.Columns.ToString);

        If VA.VarianceEqualByRows Then

            Debug.WriteLine("Fstat < Fcrit. Гипотеза о равенстве дисперсий фактора А (по строкам) принимается. Различие дисперсий незначимо");

        Else

            Debug.WriteLine("Fstat > Fcrit. Гипотеза о равенстве дисперсий фактора А (по строкам) отклоняется. Различие дисперсий значимо");

        End If;

        If VA.VarianceEqualByColumns Then

            Debug.WriteLine("Fstat < Fcrit. Гипотеза о равенстве дисперсий фактора B (по столбцам) принимается. Различие дисперсий незначимо");

        Else

            Debug.WriteLine("Fstat > Fcrit. Гипотеза о равенстве дисперсий фактора B (по столбцам) отклоняется. Различие дисперсий значимо");

        End If;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты дисперсионного анализа:


Module execution started


=================================


Значение статистики Фишера


строки: 0.029411764705882443


столбцы: 1.4411764705882384


=================================


Критическое значение статистики Фишера


строки: 3.837853326929805


столбцы: 4.4589684100858102


Fstat < Fcrit. Гипотеза о равенстве дисперсий фактора А (по строкам) принимается. Различие дисперсий незначимо


Fstat < Fcrit. Гипотеза о равенстве дисперсий фактора B (по столбцам) принимается. Различие дисперсий незначимо


Module execution finished


См. также:


[ISmVarianceAnalysis](ISmVarianceAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
