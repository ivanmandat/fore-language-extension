# IMsCalculationChainEntries.AddUserOptimizationProblem

IMsCalculationChainEntries.AddUserOptimizationProblem
-


# IMsCalculationChainEntries.AddUserOptimizationProblem


## Синтаксис


AddUserOptimizationProblem(Problem: [IMsUserOptimizationProblem](../IMsUserOptimizationProblem/IMsUserOptimizationProblem.htm);
 Level: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm)):
 [IMsCalculationChainUserOptimization](../IMsCalculationChainUserOptimization/IMsCalculationChainUserOptimization.htm);


## Параметры


Problem. Пользовательская задача
 оптимизации.


Level. Календарный уровень
 задачи оптимизации.


## Описание


Метод AddUserOptimizationProblem
 добавляет в цепочку расчёта пользовательскую задачу оптимизации.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В контейнере создана пользовательская
 задача оптимизации с идентификатором USER_OPTIMIZATION. Задача настроена
 на работу с какой-либо метамоделью.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    ModelspaceDescr: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    UserOptimization: IMsUserOptimizationProblem;

    MetaModel: IMsMetaModel;

    CalculationChain, FolderCont: IMsCalculationChainEntries;

    Folder: IMsCalculationChainFolder;

    Period: IMsModelPeriod;

    UserOptChain: IMsCalculationChainUserOptimization;

Begin

    Mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    ModelspaceDescr := Mb.ItemById("CONT_MODEL");

    // Получаем задачу

    Problem := Mb.ItemByIdNamespace("USER_OPTIMIZATION", ModelspaceDescr.Key).Edit As IMsProblem;

    // Получаем пользовательскую задачу оптимизации

    UserOptimization := Problem.Details As IMsUserOptimizationProblem;

    // Получаем метамодель

    MetaModel := Problem.MetaModel;

    // Получаем цепочку расчёта и создаём в ней папку

    CalculationChain := MetaModel.CalculationChain;

    CalculationChain.Clear;

    Folder := CalculationChain.AddFolder("Пользовательская задача оптимизации");

    // Задаём параметры расчёта папки

    Folder.Level := DimCalendarLevel.Year;

    Period := Folder.Period;

    Period.IdentificationEndDate := DateTime.ComposeDay(2009, 12, 31);

    Period.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

    Period.ForecastEndDate := DateTime.ComposeDay(2020, 12, 31);

    Period.ForecastStartDate := DateTime.ComposeDay(2010, 1, 1);

    FolderCont := Folder.Contents;

    // Добавляем задачу и ограничение

    UserOptChain := Folder.Contents.AddUserOptimizationProblem(UserOptimization, DimCalendarLevel.Year);

    UserOptChain.Name := "Задача оптимзиации";

    Folder.Contents.AddUserOptimizationConstraint(UserOptChain, UserOptimization.Constraints.Item(0));

    // Сохраняем изменения

    (MetaModel As IMetabaseObject).Save;

    (Problem As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в цепочке расчёта метамодели будет создана папка,
 в которую будет добавлена пользовательская задача оптимизации и её ограничение.


См. также:


[IMsCalculationChainEntries](IMsCalculationChainEntries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
