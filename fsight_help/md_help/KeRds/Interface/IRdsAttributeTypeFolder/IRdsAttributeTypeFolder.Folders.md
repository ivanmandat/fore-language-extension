# IRdsAttributeTypeFolder.Folders

IRdsAttributeTypeFolder.Folders
-


# IRdsAttributeTypeFolder.Folders


## Синтаксис


Folders: [IRdsAttributeTypeFolders](../IRdsAttributeTypeFolders/IRdsAttributeTypeFolders.htm);


## Описание


Свойство Folders возвращает
 коллекцию дочерних папок.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 "NSI_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    NSI: IRdsDatabase;

	    NSIInst: IRdsDatabaseInstance;

	    Folders: IRdsAttributeTypeFolders;

	    Folder: IRdsAttributeTypeFolder;

	    Type: IRdsAttributeType;

	Begin

	    MB := MetabaseClass.Active;

	    NSI := MB.ItemById("NSI_1").Edit As IRdsDatabase;

	    NSIInst := NSI.Open(Null);

	    Folders := NSIInst.AttributeTypes.Folders;

	    Folders.Clear;

	    Folder := Folders.Add("Новая папка");

	    Type := Folder.Types.Add;

	    Type.DataType := DbDataType.DateTime;

	    Type.Id := "DateType"

	    Type.Name := "Время";

	    NSIInst.Save;

	    (NSI As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в корневой папке справочника типов атрибутов
 будет создана новая папка. В данной папке будет создан тип атрибута с
 наименованием "Время".


См. также:


[IRdsAttributeTypeFolder](IRdsAttributeTypeFolder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
