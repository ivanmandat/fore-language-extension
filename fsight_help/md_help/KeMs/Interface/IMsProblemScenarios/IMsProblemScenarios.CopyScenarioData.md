# IMsProblemScenarios.CopyScenarioData

IMsProblemScenarios.CopyScenarioData
-


# IMsProblemScenarios.CopyScenarioData


## Синтаксис


CopyScenarioData(DestScenarioKey: Integer;

                 SourceScenarioKey: Integer;

                 mvkTarget: [MsVariableKind](../../Enums/MsVariableKind.htm));


## Параметры


DestScenarioKey. Ключ сценария-приёмника.


SourceScenarioKey. Ключ сценария-источника.


mvkTarget. Тип копируемых переменных.


## Описание


Метод CopyScenarioData копирует данные по сценариям моделирования.


## Комментарии


Для копирования данных по сценарию «Факт» используйте ключ «-1».


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «MODEL_SPACE», содержащего задачу моделирования с идентификатором «PROBLEM». Задача моделирования должна содержать несколько сценариев моделирования.


Добавьте ссылки на системные сборки «Metabase», «Ms».


			Sub ProblemScenarioData;

Var

    MB: IMetabase;

    MsObj: IMetabaseObject;

    MObj: IMetabaseObject;

    Problem: IMsProblem;

    DestScen: IMsScenario;

    DestScenKey: Integer;

    ProbScen: IMsProblemScenarios;

Begin

    MB := MetabaseClass.Active;

    // Получаем контейнер моделирования
    MsObj := MB.ItemById("MODEL_SPACE").Bind;

    // Получаем задачу моделирования
    MObj := MB.ItemByIdNamespace("PROBLEM", MsObj.Key).Edit;

    Problem := MObj As IMsProblem;

    // Получаем сценарии задачи моделирования
    ProbScen := Problem.Scenarios;

    // Получаем 1-й сценарий в задаче моделирования
    DestScen := ProbScen.Item(0);

    DestScenKey := (DestScen As IMetabaseObject).Key;

    // Копируем данные по входным переменным из сценария Факт в 1-й сценарий
    ProbScen.CopyScenarioData(DestScenKey, -1, MsVariableKind.Input);

    // Сохраняем задачу моделирования
    MObj.Save;

End Sub ProblemScenarioData;


Результат выполнения примера: данные входных переменных по сценарию «Факт» скопированы в первый сценарий задачи моделирования.


См. также:


[IMsProblemScenarios](IMsProblemScenarios.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
