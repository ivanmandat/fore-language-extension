# IMetabaseUpdate.ReflectObjectsRights

IMetabaseUpdate.ReflectObjectsRights
-


# IMetabaseUpdate.ReflectObjectsRights


## Синтаксис


		ReflectObjectsRights:
		 [UpdateReflectObjectsRightsType](../../Enums/UpdateReflectObjectsRightsType.htm);


## Описание


Свойство ReflectObjectsRights
 определяет метод переноса прав на объекты репозитория.


## Пример


Для выполнения примера в репозитории предполагается наличие двух таблиц
 с идентификаторами TABLE_1 и TABLE_2.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Update: IMetabaseUpdate;

		    Root: IMetabaseUpdateFolderNode;

		    TableObj: IMetabaseUpdateDataObjectNode;

		Begin

		    MB := MetabaseClass.Active;

		    Update := MB.CreateUpdate;

		    Root := Update.RootFolder;

		    TableObj := Root.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

		    TableObj.Object := MB.ItemById("Table_1");

		    TableObj.UpdatePart :=MetabaseObjectUpdatePart.DataMetadataSD;

		    TableObj := Root.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

		    TableObj.Object := MB.ItemById("Table_2");

		    TableObj.UpdatePart :=MetabaseObjectUpdatePart.DataMetadataSD;

		    Update.ReflectObjectsRights:= UpdateReflectObjectsRightsType.Ask;

		    Update.SaveToFileNF("c:\Table.pefx");

		End Sub;


В результате выполнения примера будет создано новое обновление. В обновление
 будут включены две таблицы. Для таблиц будет осуществляться обновление
 данных, метаданных и прав доступа. При применении обновления будет выдан
 запрос об обновлении прав доступа к таблицам на уровне СУБД.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
