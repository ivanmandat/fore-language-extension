# IRdsAttributeTypes.Add

IRdsAttributeTypes.Add
-


# IRdsAttributeTypes.Add


## Синтаксис


Add: [IRdsAttributeType](../IRdsAttributeType/IRdsAttributeType.htm);


## Описание


Метод Add осуществляет добавление
 нового типа атрибутов.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 "NSI_1".


Sub Main;


Var


MB: IMetabase;


NSI: IRdsDatabase;


NSIInst: IRdsDatabaseInstance;


Folders: IRdsAttributeTypeFolders;


Folder: IRdsAttributeTypeFolder;


Type: IRdsAttributeType;


Begin


MB := MetabaseClass.Active;


NSI := MB.ItemById("NSI_1").Edit
 As IRdsDatabase;


NSIInst := NSI.Open(Null);


Folders := NSIInst.AttributeTypes.Folders;


Folders.Clear;


Folder := Folders.Add("Новая
 папка");


Type := Folder.Types.Add;


Type.DataType := DbDataType.DateTime;


Type.Id := "DateType";


Type.Name := "Время";


NSIInst.Save;


(NSI As
 IMetabaseObject).Save;


End Sub
 Main;


После выполнения примера в корневой папке справочника типов атрибутов
 будет создана новая папка. В данной папке будет создан тип атрибута с
 наименованием "Время".


См. также:


[IRdsAttributeTypes](IRdsAttributeTypes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
