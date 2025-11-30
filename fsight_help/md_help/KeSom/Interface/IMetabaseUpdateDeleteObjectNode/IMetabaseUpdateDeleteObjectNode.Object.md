# IMetabaseUpdateDeleteObjectNode.Object

IMetabaseUpdateDeleteObjectNode.Object
-


# IMetabaseUpdateDeleteObjectNode.Object


## Синтаксис


Object: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Object определяет дескриптор
 объекта, который необходимо удалить при применении обновления.


## Комментарии


Объект, который необходимо удалить при применении обновления также можно
 задать по его ключу или идентификатору. Используйте соответствующие свойства:
 [IMetabaseUpdateDeleteObjectNode.ObjectKey](IMetabaseUpdateDeleteObjectNode.ObjectKey.htm)
 или [IMetabaseUpdateDeleteObjectNode.ObjectId](IMetabaseUpdateDeleteObjectNode.ObjectId.htm).


## Пример


Для выполнения примера предполагается наличие файла обновления «C:\Update.pefx».
 В репозитории должен присутствовать объект с идентификатором «OBJ_FOR_PEF».
 Добавьте ссылку на системную сборку Metabase.


			    Sub UserProc;

    Var

        MB: IMetabase;

        Update: IMetabaseUpdate;

        UFN: IMetabaseUpdateFolderNode;

        UpdateObj: IMetabaseUpdateDeleteObjectNode;

    Begin

        MB := MetabaseClass.Active;

        Update := Mb.CreateUpdate;

        Update.LoadFromFileNF("C:\Update.pefx");

        UFN := Update.RootFolder;

        UpdateObj := UFN.Add(MetabaseUpdateNodeType.DeleteObject) As IMetabaseUpdateDeleteObjectNode;

        UpdateObj.Object := MB.ItemById("OBJ_FOR_PEF");

        UpdateObj.Label := "Удаление объекта OBJ_FOR_PEF";

        Update.SaveToFileNF("C:\Update.pefx");

    End Sub UserProc;


После выполнения примера в структуру обновления «C:\Update.pefx» будет
 добавлено удаление объекта «OBJ_FOR_PEF». Изменения в обновлении будут
 сохранены.


См. также:


[IMetabaseUpdateDeleteObjectNode](IMetabaseUpdateDeleteObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
