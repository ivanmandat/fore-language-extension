# IMsProblemCalculationSettings.ScenarioIncluded

IMsProblemCalculationSettings.ScenarioIncluded
-


# IMsProblemCalculationSettings.ScenarioIncluded


## Синтаксис


ScenarioIncluded(Scenario: [IMsScenario](../IMsScenario/IMsScenario.htm)):
 Boolean;


## Параметры


Scenario. Сценарий задачи моделирования,
 по которому будет производиться расчет задачи.


## Описание


Свойство ScenarioIncluded определяет
 сценарии задачи моделирования, по которым будет производиться расчёт.


## Комментарии


Если ScenarioIncluded = True, то по указанному сценарию будет
 производиться расчёт.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Problem: IMsProblem;

    CalcSett: IMsProblemCalculationSettings;

    Calculation: IMsProblemCalculation;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("PROBLEM_1", MB.ItemById("KONT_MODEL").Key).Edit;

    Problem := MObj As IMsProblem;

    CalcSett := Problem.CreateCalculationSettings;

    For i := 0 To Problem.Scenarios.Count - 1 Do

        CalcSett.ScenarioIncluded(Problem.Scenarios.Item(i)) := True;

    End For;

    Calculation := Problem.Calculate(CalcSett);

    Calculation.Run;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет осуществлен расчет задачи с идентификатором
 PROBLEM_1. Расчет будет производиться по всем сценариям, содержащимся
 в данной задаче.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
