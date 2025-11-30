# IMetabaseUpdateNode.ParentNode

IMetabaseUpdateNode.ParentNode
-


# IMetabaseUpdateNode.ParentNode


## Синтаксис


ParentNode: [IMetabaseUpdateFolderNode](../IMetabaseUpdateFolderNode/IMetabaseUpdateFolderNode.htm);


## Описание


Свойство ParentNode возвращает
 родительскую структуру для объекта обновления.


## Комментарии


Свойство ParentNode возвращает
 Null для корневого элемента структуры
 обновления.


## Пример


Для выполнения примера предполагается наличие файла обновления «C:\Update.pef».
 В репозитории должен присутствовать объект с идентификатором «OBJ_FOR_PEF».
 Добавьте ссылку на системную сборку Metabase.


			    Sub UserProc;

    Var

        MB: IMetabase;

        Update: IMetabaseUpdate;

        UFN: IMetabaseUpdateFolderNode;

        UpdateObj: IMetabaseUpdateObjectNode;

        ObjIndex: Integer;

        ParentNode: IMetabaseUpdateFolderNode;

    Begin

        MB := MetabaseClass.Active;

        Update := Mb.CreateUpdate;

        Update.LoadFromFileNF("C:\Update.pefx");

        UFN := Update.RootFolder;

        UpdateObj := UFN.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateObjectNode;

        UpdateObj.Object := MB.ItemById("OBJ_FOR_PEF");

        ObjIndex := UpdateObj.Index;

        ParentNode := UpdateObj.ParentNode;

        ParentNode.MoveNode(ObjIndex, ParentNode, 0);

        Update.SaveToFileNF("C:\Update.pefx");

    End Sub UserProc;


После выполнения примера «OBJ_FOR_PEF» будет добавлен в начало списка
 объектов обновления «C:\Update.pef». Изменения будут сохранены.


См. также:


[IMetabaseUpdateNode](IMetabaseUpdateNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
