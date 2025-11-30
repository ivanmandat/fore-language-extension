# IMsTargetProblem.OptimisticScenario

IMsTargetProblem.OptimisticScenario
-


# IMsTargetProblem.OptimisticScenario


## Синтаксис


OptimisticScenario: [IMsScenario](../IMsScenario/IMsScenario.htm);


## Описание


Свойство OptimisticScenario
 определяет сценарий оптимизационной задачи.


## Комментарии


Для задания сценария целевой задачи и сценария для траектории целевой
 задачи используйте свойства [IMsTargetProblem.TargetScenario](IMsTargetProblem.TargetScenario.htm)
 и [IMsTargetProblem.TrajectoryScenario](IMsTargetProblem.TrajectoryScenario.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS_DEFAULT», содержащего задачу моделирования
 с идентификатором «TARGET_PROBLEM». Данная задача должна быть предназначена
 для веб-приложения и содержать целевую функцию.


Добавьте ссылки на системные сборки: Metabase, Express.


			Sub UserProc;

Var

    mb: IMetabase;

    MsObj: IMetabaseObject;

    Ms: IMsModelSpace;

    ScenarioTree: IMsScenarioTreeEntries;

    OptimisticScenario: IMsScenarioTreeElement;

    Scenario: IMsScenario;

    Problem: IMsProblem;

    TargetProblem: IMsTargetProblem;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MS_DEFAULT").Edit;

    Ms := MsObj As IMsModelSpace;

    // Получаем сценарии

    ScenarioTree := Ms.ScenarioTree;

    // Добавляем новый сценарий

    OptimisticScenario := ScenarioTree.AddScenario(False, True);

    OptimisticScenario.Name := "Сценарий оптимизационной задачи";

    Scenario := OptimisticScenario.Scenario;

    // Получаем целевую задачу

    Problem := mb.ItemByIdNamespace("TARGET_PROBLEM", MsObj.Key).Edit As IMsProblem;

    TargetProblem := Problem.AdditionalDetails.Item(0) As IMsTargetProblem;

    // Задаем сценарий оптимизационной задачи

    Problem.Scenarios.AddScenario(Scenario);

    TargetProblem.OptimisticScenario := Scenario;

    // Сохраняем изменения

    (Problem As IMetabaseObject).Save;

    MsObj.Save;

End Sub UserProc;


В результате выполнения примера для задачи моделирования будет задан
 сценарий оптимизационной задачи.


См. также:


[IMsTargetProblem](IMsTargetProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
