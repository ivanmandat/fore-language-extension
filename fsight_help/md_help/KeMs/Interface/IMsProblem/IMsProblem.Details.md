# IMsProblem.Details

IMsProblem.Details
-


# IMsProblem.Details


## Синтаксис


Details: Object;


## Описание


Свойство Details определяет
 базовые параметры расчета задачи.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    MetaMod: IMsMetaModel;

    i: Integer;

    Problem: IMsProblem;

    Period: IMsForecastingProblem;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("PROBLEM_1", MB.ItemById("KONT_MODEL").Key).Edit;

    Problem := MObj As IMsProblem;

    For i := 0 To Problem.VariableStubs(MsVariableKind.All).Count - 1 Do

        Debug.WriteLine((Problem.VariableStubs(MsVariableKind.All).Item(i) As IMetabaseObject).Name);

    End For;

    For i := 0 To Problem.DimensionFix.Count - 1 Do

        Debug.WriteLine(Problem.DimensionFix.Dimension(i).Ident);

    End For;

    MetaMod := Problem.MetaModel;

    i := MetaMod.CalculationChain.Count;

    Period := New MsForecastingProblem.Create;

    Period.Period.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

    Period.Period.IdentificationEndDate := DateTime.ComposeDay(2005, 12, 31);

    Period.Period.ForecastStartDate := DateTime.ComposeDay(2006, 1, 1);

    Period.Period.ForecastEndDate := DateTime.ComposeDay(2009, 12, 31);

    Problem.Details := Period;

    MObj.Save;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены идентификаторы
 всех фиксированных измерений, входящих в переменные, наименования переменных;
 будет получена метамодель, содержащая цепочку расчета для задачи, в переменной
 i будет содержаться количество моделей в данной цепочке; будут установлены
 периоды идентификации и прогнозирования для задачи с идентификатором PROBLEM_1
 контейнера моделирования.


См. также:


[IMsProblem](IMsProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
