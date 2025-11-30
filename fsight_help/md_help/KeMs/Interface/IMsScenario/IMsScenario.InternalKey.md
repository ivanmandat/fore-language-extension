# IMsScenario.InternalKey

IMsScenario.InternalKey
-


# IMsScenario.InternalKey


## Синтаксис


InternalKey: Integer;


## Описание


Свойство InternalKey возвращает внутренний ключ сценария.


## Комментарии


По внутреннему ключу данные сценария хранятся в БД.


InternalKey генерируется только при первом обращении к свойству и его значение не совпадает с ключом сценария как объекта репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера моделирования с идентификатором «CONT_MODEL». Также необходимо добавить ссылки на системные сборки «Metabase», «Ms».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    ModelSpace: IMsModelSpace;

    Tree: IMsScenarioTreeEntries;

    Folder: IMsScenarioTreeFolder;

    Scen: IMsScenarioTreeElement;

    Scenario: IMsScenario;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("CONT_MODEL").Edit;

    ModelSpace := MObj As IMsModelSpace;

    Tree := ModelSpace.ScenarioTree;

    Folder := Tree.AddFolder("Дополнительные сценарии");

    Scen := Folder.Contents.AddScenario;

    Scen.Name := "Сценарий №1";

    Scenario := Scen.Scenario;

    Debug.WriteLine(Scenario.InternalKey);

    MObj.Save;

End Sub UserProc;


После выполнения примера в дерево сценариев контейнера моделирования будет добавлена новая папка. В данной папке будет создан один сценарий. Внутренний ключ созданного сценария будет выведен в окно консоли.


См. также:


[IMsScenario](IMsScenario.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
