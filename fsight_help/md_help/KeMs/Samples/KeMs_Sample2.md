# Работа со сценариями контейнера моделирования

Работа со сценариями контейнера моделирования
-


# Работа со сценариями контейнера моделирования


Для выполнения примера предполагается наличие контейнера моделирования
 с идентификатором KONT_MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    ModelSpace: IMsModelSpace;

    Tree: IMsScenarioTreeEntries;

    Folder: IMsScenarioTreeFolder;

    Scen: IMsScenarioTreeElement;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("KONT_MODEL").Edit;

    ModelSpace := MObj As IMsModelSpace;

    Tree := ModelSpace.ScenarioTree;

    Folder := Tree.AddFolder("Дополнительные сценарии");

    Scen := Folder.Contents.AddScenario;

    Scen.Name := "Сценарий №1";

    MObj.Save;

End Sub UserProc;


После выполнения примера в дереве сценариев контейнера моделирования
 будет создана папка «Дополнительные сценарии». В данной папке будет создан
 один сценарий.


См. также:


[Примеры](KeMs_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
