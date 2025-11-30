# IMetabase.CreateUpdate

IMetabase.CreateUpdate
-


# IMetabase.CreateUpdate


## Синтаксис


CreateUpdate: [IMetabaseUpdate](../IMetabaseUpdate/IMetabaseUpdate.htm);


## Описание


Метод CreateUpdate осуществляет
 создание объекта обновления.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором Assembly_1. В данной сборке имеются какие-либо модули
 и формы.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    MUpdate: IMetabaseUpdate;

    RootFolder: IMetabaseUpdateFolderNode;

    Node: IMetabaseUpdateObjectNode;

Begin

    Mb := MetabaseClass.Active;

    MUpdate := Mb.CreateUpdate;

    RootFolder := MUpdate.RootFolder;

    Node := RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

    Node.UpdatePart := MetabaseObjectUpdatePart.DataMetadataSD;

    Node.UpdateType := MetabaseObjectUpdateType.Simple;

    Node.IncludeChildrenDependencies := TriState.OnOption;

    Node.Object := Mb.ItemById("Assembly_1").Bind;

    MUpdate.SaveToFileNF("C:\Update_1.pefx");

End Sub UserProc;


После выполнения примера в корневом каталоге диска «С» будет создан
 новый файл обновления с наименованием «C:\Update_1.pefx». В данный файл
 будет включена сборка Assembly_1 со всеми дочерними объектами.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
