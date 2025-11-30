# IMsProblemScenarios.AddScenario

IMsProblemScenarios.AddScenario
-


# IMsProblemScenarios.AddScenario


## Синтаксис


AddScenario(Scenario: [IMsScenario](../IMsScenario/IMsScenario.htm));


## Параметры


Scenario. Сценарий контейнера
 моделирования.


## Описание


Метод AddScenario осуществляет
 добавление сценария контейнера моделирования в коллекцию сценариев задачи.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    KMSpace: IMsModelSpace;

    KmScens: IMsScenarioTreeEntries;

    Problem: IMsProblem;

    ProbScen: IMsProblemScenarios;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("PROBLEM_1", MB.ItemById("KONT_MODEL").Key).Edit;

    KMSpace := MB.ItemById("KONT_MODEL").Bind As IMsModelSpace;

    KmScens := KMSpace.ScenarioTree;

    Problem := MObj As IMsProblem;

    ProbScen := Problem.Scenarios;

    ProbScen.AddScenario(KmScens.Item(KmScens.Count - 1) As IMsScenario);

    MObj.Save;

End Sub UserProc;


После выполнения примера в список сценариев задачи с идентификатором
 PROBLEM_1 будет добавлен последний сценарий контейнера моделирования.


См. также:


[IMsProblemScenarios](IMsProblemScenarios.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
