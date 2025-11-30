# Сценарий моделирования

Сценарий моделирования
-


# Сценарий моделирования


В данный момент в контейнере моделирования сценарии содержатся не как
 отдельные объекты репозитория, а в виде дерева. Для работы с деревом сценариев
 предназначен интерфейс [IMsScenarioTreeEntries](../Interface/IMsScenarioTreeEntries/IMsScenarioTreeEntries.htm).
 В дерево можно добавить следующие элементы:


	- [Папка](../Interface/IMsScenarioTreeEntries/IMsScenarioTreeEntries.AddFolder.htm).
	 Предназначена для упорядочивания структуры дерева сценариев. Интерфейс
	 [IMsScenarioTreeFolder](../Interface/IMsScenarioTreeFolder/IMsScenarioTreeFolder.htm);


	- [Сценарий](../Interface/IMsScenarioTreeEntries/IMsScenarioTreeEntries.AddScenario.htm).
	 Элемент дерева, которому соответствует сценарий моделирования. Интерфейс
	 [IMsScenarioTreeElement](../Interface/IMsScenarioTreeElement/IMsScenarioTreeElement.htm).


Примечание.
 В примере, представленном ниже, предполагается наличие объектов, которые
 указаны в разделе описания переменных.


Чтобы по необходимому сценарию был произведен расчет его нужно добавить
 в задачу моделирования:


			Sub UserProc;

Var

    ModelSpace: IMsModelSpace; // Контейнер моделирования

    ScenarioTree: IMsScenarioTreeEntries; // Дерево сценариев

    ScenarioElement: IMsScenarioTreeElement; // Элемент дерева, которому соответствует сценарий

    Problem: IMsProblem; // Задача моделирования

    Scenarios: IMsScenarios; // Коллекция сценариев моделирования

    Scenario: IMsScenario; // Сценарий моделирования

Begin

    ScenarioTree := ModelSpace.ScenarioTree;

    ScenarioElement := ScenarioTree.Item(0) As IMsScenarioTreeElement;

    Scenario := ScenarioElement.Scenario;

    Scenarios := Problem.Scenarios;

    Scenarios.AddScenario(Scenario);

End Sub UserProc;


Пример создания сценария приведен в разделе «[Работа
 со сценариями контейнера моделирования](../Samples/KeMs_Sample2.htm)».


См. также:


[Общие принципы программирования с использованием
 сборки Ms](KeMs_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
