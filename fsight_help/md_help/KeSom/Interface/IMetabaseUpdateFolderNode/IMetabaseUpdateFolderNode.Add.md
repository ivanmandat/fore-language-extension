# IMetabaseUpdateFolderNode.Add

IMetabaseUpdateFolderNode.Add
-


# IMetabaseUpdateFolderNode.Add


## Синтаксис


Add(NodeType: [MetabaseUpdateNodeType](../../Enums/MetabaseUpdateNodeType.htm)):
 [IMetabaseUpdateNode](../IMetabaseUpdateNode/IMetabaseUpdateNode.htm);


## Параметры


NodeType. Тип
 создаваемого объекта обновления.


## Описание


Метод Add осуществляет добавление
 объекта в структуру обновления.


## Пример


Для выполнения примера предполагается наличие в репозитории таблиц с
 идентификаторами Table_1 и Table_2 и форм с идентификаторами Form_1 и
 Form_2.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Update: IMetabaseUpdate;

	    Root, Folder1, Folder2: IMetabaseUpdateFolderNode;

	    TableObj: IMetabaseUpdateDataObjectNode;

	    FormObj: IMetabaseUpdateObjectNode;

	Begin

	    MB := MetabaseClass.Active;

	    Update := MB.CreateUpdate;

	    Root := Update.RootFolder;

	    // Создание папок

	    Folder1 := Root.Add(MetabaseUpdateNodeType.Folder) As IMetabaseUpdateFolderNode;

	    Folder1.Label := "Таблицы";

	    Folder2 := Root.Add(MetabaseUpdateNodeType.Folder) As IMetabaseUpdateFolderNode;

	    Folder2.Label := "Формы";

	    // Добавление таблиц

	    TableObj := Folder1.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

	    TableObj.Object := MB.ItemById("Table_1");

	    TableObj.Label := TableObj.Object.Name;

	    TableObj.Method := MetabaseUpdateMethod.All;

	    TableObj := Folder1.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

	    TableObj.Object := MB.ItemById("Table_2");

	    TableObj.Label := TableObj.Object.Name;

	    TableObj.Method := MetabaseUpdateMethod.All;

	    // Добавление форм

	    FormObj := Folder2.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

	    FormObj.Object := MB.ItemById("Form_1");

	    FormObj.Label := FormObj.Object.Name;

	    FormObj := Folder2.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

	    FormObj.Object := MB.ItemById("Form_2");

	    FormObj.Label := FormObj.Object.Name;

	    Update.SaveToFileNF("c:\Object.pefx");

	End Sub UserProc;


После выполнения примера будет создано новое обновление. В обновление
 будут включены две таблицы и две формы. Для упорядочивания объектов в
 структуре обновления будут созданы две папки.


См. также:


[IMetabaseUpdateFolderNode](IMetabaseUpdateFolderNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
