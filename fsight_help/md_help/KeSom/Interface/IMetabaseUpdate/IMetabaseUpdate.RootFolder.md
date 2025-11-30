# IMetabaseUpdate.RootFolder

IMetabaseUpdate.RootFolder
-


# IMetabaseUpdate.RootFolder


## Синтаксис


RootFolder:
 [IMetabaseUpdateFolderNode](../IMetabaseUpdateFolderNode/IMetabaseUpdateFolderNode.htm);


## Описание


Свойство RootFolder возвращает
 объект, содержащий структуру обновления.


## Пример


Для выполнения примера в репозитории предполагается наличие таблиц с
 идентификаторами TABLE_1 и TABLE_2 и форм с идентификаторами FORM_1 и
 FORM_2.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    Root, Folder1, Folder2:IMetabaseUpdateFolderNode;

    TableObj: IMetabaseUpdateDataObjectNode;

    FormObj: IMetabaseUpdateObjectNode;

Begin

    MB := MetabaseClass.Active;

    Update := MB.CreateUpdate;

    Root := Update.RootFolder;

    //Создание папок

    Folder1 := Root.Add(MetabaseUpdateNodeType.Folder) As IMetabaseUpdateFolderNode;

    Folder1.Label := "Таблицы";

    Folder2 := Root.Add(MetabaseUpdateNodeType.Folder) As IMetabaseUpdateFolderNode;

    Folder2.Label := "Формы";

    //Добавление таблиц

    TableObj := Folder1.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

    TableObj.Object := MB.ItemById("Table_1");

    TableObj.Label := TableObj.Object.Name;

    TableObj.Method := MetabaseUpdateMethod.All;

    TableObj := Folder1.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

    TableObj.Object := MB.ItemById("Table_2");

    TableObj.Label := TableObj.Object.Name;

    TableObj.Method := MetabaseUpdateMethod.All;

    //Добавление форм

    FormObj := Folder2.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

    FormObj.Object := MB.ItemById("Form_1");

    FormObj.Label := FormObj.Object.Name;

    FormObj := Folder2.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

    FormObj.Object := MB.ItemById("Form_2");

    FormObj.Label := FormObj.Object.Name;

    Update.SaveToFileNF("c:\Object.pefx");

End Sub;


В результате выполнения примера будет создано новое обновление. В обновление
 будут включены две таблицы и две формы. Для упорядочивания объектов в
 структуре обновления будут созданы две папки.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
