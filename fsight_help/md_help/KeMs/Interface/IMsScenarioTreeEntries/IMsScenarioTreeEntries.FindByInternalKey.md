# IMsScenarioTreeEntries.FindByInternalKey

IMsScenarioTreeEntries.FindByInternalKey
-


# IMsScenarioTreeEntries.FindByInternalKey


## Синтаксис


FindByKey(InrernalKey: Integer): [IMsScenarioTreeEntry](../IMsScenarioTreeEntry/IMsScenarioTreeEntry.htm);


## Параметры


InrernalKey. Внутренний ключ сценария моделирования.


## Описание


Метод FindByInternalKey осуществляет поиск сценария моделирования по внутреннему ключу.


## Комментарии


Для получения внутреннего ключа сценария моделирования используйте свойство [IMsScenario.InternalKey](../IMsScenario/IMsScenario.InternalKey.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «MODEL_SPACE». Контейнер моделирования должен содержать несколько сценариев моделирования.


Добавьте ссылки на системные сборки «Metabase», «Ms».


			Sub FindByInternalKey;

Var

    MB: IMetabase;

    MsObj: IMetabaseObject;

    Ms: IMsModelSpace;

    ScenTree: IMsScenarioTreeEntries;

    ScenEntry: IMsScenarioTreeEntry;

    IntKey: Integer;

Begin

    MB := MetabaseClass.Active;

    // Получаем контейнер моделирования
    MsObj := MB.ItemById("MODEL_SPACE").Edit;

    Ms := MsObj As IMsModelSpace;

    // Получаем дерево сценариев
    ScenTree := Ms.ScenarioTree;

    // Задаем значение внутреннего ключа
    IntKey := 44489;

    // Ищем объект по значению внутреннего ключа в дереве сценариев
    ScenEntry := ScenTree.FindByInternalKey(IntKey);

    // Если объект найден, то удаляем его из дерева сценариев
    If ScenEntry <> Null Then

        ScenTree.RemoveByInternalKey(IntKey);

    End If;

    // Сохраняем изменения
    MsObj.Save;

End Sub FindByInternalKey;


Результат выполнения примера: из дерева сценариев в контейнере моделирования «MODEL_SPACE» будет удален сценарий с ключом «44489», если данный сценарий присутствует в контейнере.


См. также:


[IMsScenarioTreeEntries](IMsScenarioTreeEntries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
