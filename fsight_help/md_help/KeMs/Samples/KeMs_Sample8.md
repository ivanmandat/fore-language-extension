# Создание задачи моделирования

Создание задачи моделирования
-


# Создание задачи моделирования


## Описание


Рассмотрим пример создания задачи моделирования [типа](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem_2.htm)
 «Задача прогнозирования».


## Требования


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащей метамодель с идентификатором
 METAMODEL. Данная метамодель должна содержать одну или несколько прогнозных
 моделей.


Добавьте ссылки на системные сборки: Metabase, Ms.


## Пример


	Sub ProblemCreation;

	Var

	    MB: IMetabase;

	    MSObj: IMetabaseObject;

	    MS: IMsModelSpace;

	    CrInfo: IMetabaseObjectCreateInfo;

	    ProblemObj: IMetabaseObject;

	    Problem: IMsProblem;

	    ScenTree: IMsScenarioTreeEntries;

	    ScenElement: IMsScenarioTreeElement;

	    Scenario: IMsScenario;

	    ScenProblem: IMsProblemScenarios;

	    Forecasting: IMsForecastingProblem;

	    Period: IMsModelPeriod;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем контейнер моделирования

	    MSObj := MB.ItemById("MS").Edit;

	    MS := MSObj As IMsModelSpace;

	    // Задаем базовые параметры создания задачи

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MSPROBLEM;

	    CrInfo.Id := MB.GenerateId("PROBLEM", MSObj.Key);

	    CrInfo.Name := "Задача прогнозирования";

	    CrInfo.Parent := MSObj.EditDescriptor;

	    // Создаем задачу и открываем её для редактирования

	    ProblemObj := MB.CreateObject(CrInfo).Edit;

	    Problem := ProblemObj As IMsProblem;

	    // Указываем метамодель, рассчитываемую задачей

	    Problem.MetaModel := MB.ItemByIdNamespace("METAMODEL", MSObj.Key).Bind As IMsMetaModel;

	    // Получаем все сценарии моделирования, содержащиеся в контейнере

	    ScenTree := MS.ScenarioTree;

	    // Добавляем новый сценарий

	    ScenElement := (ScenTree.AddScenario(False, True));

	    ScenElement.Name := "Базовый сценарий";

	    Scenario := ScenElement.Scenario;

	    // Получаем сценарии задачи моделирования и добавляем в них созданный сценарий

	    ScenProblem := Problem.Scenarios;

	    ScenProblem.AddScenario(Scenario);

	    // Сохраняем изменения в контейнере моделирования

	    MSObj.Save;

	    // Создаем параметры для задачи прогнозирования

	    Forecasting := New MsForecastingProblem.Create;

	    // Задаем периоды задачи

	    Period := Forecasting.Period;

	    Period.IdentificationStartDate := DateTime.Parse("01.01.2001");

	    Period.IdentificationEndDate := DateTime.Parse("31.12.2014");

	    Period.ForecastStartDate := DateTime.Parse("01.01.2015");

	    Period.ForecastEndDate := DateTime.Parse("31.12.2019");

	    // Указываем, что будет рассчитываться задача прогнозирования

	    Problem.Details := Forecasting;

	    // Указываем, что для отчетов по переменным будут использоваться кубы

	    Problem.UseCubes := True;

	    // Сохраняем задачу

	    ProblemObj.Save;

	End Sub ProblemCreation;


См. также:


[Примеры](KeMs_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
