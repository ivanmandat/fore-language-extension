# IVarianceAnalysisDegreeOfFreedom.BetweenGroup

IVarianceAnalysisDegreeOfFreedom.BetweenGroup
-


# IVarianceAnalysisDegreeOfFreedom.BetweenGroup


## Синтаксис


BetweenGroup: Integer;


## Описание


Свойство BetweenGroup возвращает
 число степеней свободы между группами.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    VA: ISmVarianceAnalysis;

    res: Integer;

    m: Array Of Double;

    DF: IVarianceAnalysisDegreeOfFreedom;

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

        Debug.WriteLine("Число степеней свободы");

        DF := VA.DegreeOfFreedom;

        Debug.WriteLine("между группами: " + DF.BetweenGroup.ToString);

        Debug.WriteLine("внутри групп: " + DF.WithinGroup.ToString);

        Debug.WriteLine("итого: " + DF.Total.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты дисперсионного
 анализа:


Выполнение модуля начато


Число степеней свободы


между группами: 2


внутри групп: 12


итого: 14


Выполнение модуля завершено


См. также:


[IVarianceAnalysisDegreeOfFreedom](IVarianceAnalysisDegreeOfFreedom.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
