# ISmVarianceAnalysis.AnalysisType

ISmVarianceAnalysis.AnalysisType
-


# ISmVarianceAnalysis.AnalysisType


## Синтаксис


AnalysisType: [VarianceAnalysisType](../../Enums/VarianceAnalysisType.htm);


## Описание


Свойство AnalysisType определяет тип дисперсионного анализа.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    VA: ISmVarianceAnalysis;

    res: Integer;

    m: Array[5, 3] Of Double;

    SS: IVarianceAnalysisSumSquared;

    DF: IVarianceAnalysisDegreeOfFreedom;

    UE: IVarianceAnalysisUnbiasedEstimation;

    FS, FC, P: IVarianceAnalysisStatistics;

Begin

    VA := New SmVarianceAnalysis.Create;

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

        Debug.WriteLine("Результаты: ");

        Debug.WriteLine("Сумма квадратов отклонений");

        SS := VA.SumSquared;

        Debug.Indent;

        Debug.WriteLine("между группами: " + SS.BetweenGroup.ToString);

        Debug.WriteLine("внутри групп: " + SS.WithinGroup.ToString);

        Debug.WriteLine("итого: " + SS.Total.ToString);

        Debug.Unindent;

        Debug.WriteLine("Число степеней свободы");

        DF := VA.DegreeOfFreedom;

        Debug.Indent;

        Debug.WriteLine("между группами: " + DF.BetweenGroup.ToString);

        Debug.WriteLine("внутри групп: " + DF.WithinGroup.ToString);

        Debug.WriteLine("итого: " + DF.Total.ToString);

        Debug.Unindent;

        Debug.WriteLine("Несмещенная оценка суммы квадратов отклонений");

        UE := VA.UnbiasedEstimation;

        Debug.Indent;

        Debug.WriteLine("между группами: " + UE.BetweenGroup.ToString);

        Debug.WriteLine("внутри групп: " + UE.WithinGroup.ToString);

        Debug.Unindent;

        Debug.Write("Значение статистики Фишера: ");

        FS := VA.FisherStatistics;

        Debug.WriteLine(FS.OneFactorAnalysis.ToString);

        Debug.Write("Критическое значение статистики Фишера: ");

        FC := VA.FisherCritical;

        Debug.WriteLine(FC.OneFactorAnalysis.ToString);

        Debug.Write("Вероятность: ");

        P := VA.Probability;

        Debug.WriteLine(P.OneFactorAnalysis.ToString);

        If VA.VarianceEqualByRows Then

            Debug.WriteLine("Fstat < Fcrit. Гипотеза о равенстве групповых средних принимается");

        Else

            Debug.WriteLine("Fstat > Fcrit. Гипотеза о равенстве групповых средних отклоняется");

        End If;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты дисперсионного анализа:


Сумма квадратов отклонений


    между группами: 0,266666666666667


    внутри групп: 24,6666666666667


    итого: 24,9333333333333


Число степеней свободы


    между группами: 4


    внутри групп: 10


    итого: 14


Несмещенная оценка суммы квадратов отклонений


    между группами: 0,0666666666666667


    внутри групп: 2,46666666666667


Значение статистики Фишера: 0,027027027027027


Критическое значение статистики Фишера: 3,47804969076512


Вероятность: 0,99833254475293


Fstat < Fcrit. Гипотеза о равенстве групповых средних принимается


См. также:


[ISmVarianceAnalysis](ISmVarianceAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
