# IMetabaseUpdateObjectNode.UpdatePart

IMetabaseUpdateObjectNode.UpdatePart
-


# IMetabaseUpdateObjectNode.UpdatePart


## Синтаксис


UpdatePart: [MetabaseObjectUpdatePart](../../Enums/MetabaseObjectUpdatePart.htm);


## Описание


Свойство UpdatePart определяет
 способ обновления данных объекта.


## Пример


Для выполнения примера в корневом каталоге диска C предполагается наличие
 файла обновления \Update.pefx. В репозитории должна присутствовать таблица
 с идентификатором Table_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Update: IMetabaseUpdate;

	    UFN: IMetabaseUpdateFolderNode;

	    UON: IMetabaseUpdateObjectNode;

	Begin

	    MB := MetabaseClass.Active;

	    Update := Mb.CreateUpdate;

	    Update.LoadFromFileNF("C:\Update.pefx");

	    UFN := Update.RootFolder;

	    UON := UFN.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateObjectNode;

	    UON.Object := MB.ItemById("Table_1");

	    UON.UpdatePart := MetabaseObjectUpdatePart.DataMetadataSD;

	    Update.SaveToFileNF("C:\Update.pefx");

	End Sub UserProc;


После выполнения примера в обновление, загруженное из файла «C:\Update.pefx»,
 будет добавлена таблица. Затем обновление будет сохранено. При выполнении
 обновления будут обновляться данные, метаданные и права доступа для указанной
 таблицы.


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
