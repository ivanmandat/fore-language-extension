# IMsProblemScenarios.FindByInternalKey

IMsProblemScenarios.FindByInternalKey
-


# IMsProblemScenarios.FindByInternalKey


## Синтаксис


FindByKey(InrernalKey: Integer): [IMsScenario](../IMsScenario/IMsScenario.htm);


## Параметры


InrernalKey. Внутренний ключ сценария моделирования.


## Описание


Метод FindByInternalKey осуществляет поиск сценария моделирования по внутреннему ключу.


## Комментарии


Для получения внутреннего ключа сценария моделирования используйте свойство [IMsScenario.InternalKey](../IMsScenario/IMsScenario.InternalKey.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «MODEL_SPACE», содержащего задачу моделирования с идентификатором «PROBLEM». Контейнер моделирования должен содержать несколько сценариев моделирования.


Добавьте ссылки на системные сборки «Metabase», «Ms».


			Sub FindByInternalKey;

Var

    MB: IMetabase;

    MsObj: IMetabaseObject;

    MObj: IMetabaseObject;

    Ms: IMsModelSpace;

    Problem: IMsProblem;

    ScenTree: IMsScenarioTreeEntries;

    MsScen, PoblemScen: IMsScenario;

    IntKey: Integer;

    ProbScen: IMsProblemScenarios;

Begin

    MB := MetabaseClass.Active;

    // Получаем контейнер моделирования
    MsObj := MB.ItemById("MODEL_SPACE").Bind;

    Ms := MsObj As IMsModelSpace;

    // Получаем задачу моделирования
    MObj := MB.ItemByIdNamespace("PROBLEM", MsObj.Key).Edit;

    Problem := MObj As IMsProblem;

    // Получаем 1-й сценарий в контейнере моделирования
    ScenTree := Ms.ScenarioTree;

    MsScen := (ScenTree.Item(0) As IMsScenarioTreeElement).Scenario;

    // Получаем внутренний ключ сценария моделирования
    IntKey := MsScen.InternalKey;

    // Получаем сценарии задачи моделирования
    ProbScen := Problem.Scenarios;

    // Выполняем поиск 1-го сценария контейнера
    // моделирования в сценариях задачи моделирования
    PoblemScen := ProbScen.FindByInternalKey(IntKey);

    // Если сценарий найден, то удаляем его из задачи моделирования
    If PoblemScen <> Null Then

        ProbScen.RemoveByInternalKey(IntKey);

    End If;

    // Сохраняем задачу моделирования
    MObj.Save;

End Sub FindByInternalKey;


Результат выполнения примера: из коллекции сценариев задачи моделирования «PROBLEM» будет удален первый сценарий контейнера моделирования, если данный сценарий присутствует в коллекции.


См. также:


[IMsProblemScenarios](IMsProblemScenarios.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
