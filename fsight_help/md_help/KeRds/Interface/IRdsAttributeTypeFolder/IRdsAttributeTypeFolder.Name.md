# IRdsAttributeTypeFolder.Name

IRdsAttributeTypeFolder.Name
-


# IRdsAttributeTypeFolder.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 папки.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 "NSI_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    NSI: IRdsDatabase;

	    NSIInst: IRdsDatabaseInstance;

	    Folder: IRdsAttributeTypeFolder;

	    Folders: IRdsAttributeTypeFolders;

	    Types: IRdsAttributeTypes;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    NSI := MB.ItemById("NSI_1").Bind As IRdsDatabase;

	    NSIInst := NSI.Open(Null);

	    Folder := NSIInst.AttributeTypes;

	    Debug.WriteLine("Папки, содержащиеся в корневом каталоге типов атрибутов");

	    Debug.Indent;

	    //Папки, содержащиеся в корневой папке

	    Folders := Folder.Folders;

	    For i := 0 To Folders.Count - 1 Do

	        Debug.WriteLine(Folders.Item(i).Name);

	    End For;

	    Debug.Unindent;

	    Debug.WriteLine("Типы атрибутов, содержащиеся в корневом каталоге");

	    Debug.Indent;

	    //Типы атрибутов, содержащиеся в корневой папке

	    Types := Folder.Types;

	    For i := 0 To Types.Count - 1 Do

	        Debug.WriteLine(Types.Item(i).Name);

	    End For;

	    Debug.Unindent;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены наименования
 всех папок и типов атрибутов, содержащихся в корневом каталоге справочника
 типов атрибутов репозитория НСИ.


См. также:


[IRdsAttributeTypeFolder](IRdsAttributeTypeFolder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
