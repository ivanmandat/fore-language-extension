# IMetabaseUpdateDeleteObjectNode.BoundType

IMetabaseUpdateDeleteObjectNode.BoundType
-


# IMetabaseUpdateDeleteObjectNode.BoundType


## Синтаксис


BoundType: [MetabaseObjectUpdateBoundType](../../Enums/MetabaseObjectUpdateBoundType.htm);


## Описание


Свойство BoundType определяет
 тип обновления.


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pefx.
 В репозитории должен содержаться объект с идентификатором OBJ_DEL.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Update: IMetabaseUpdate;

	    UFN: IMetabaseUpdateFolderNode;

	    UON: IMetabaseUpdateDeleteObjectNode;

	Begin

	    MB := MetabaseClass.Active;

	    Update := Mb.CreateUpdate;

	    Update.LoadFromFileNF("C:\Update.pefx");

	    UFN := Update.RootFolder;

	    UON := UFN.Add(MetabaseUpdateNodeType.DeleteObject) As IMetabaseUpdateDeleteObjectNode;

	    UON.Object := MB.ItemById("OBJ_DEL");

	    UON.BoundType := MetabaseObjectUpdateBoundType.ById;

	    Update.SaveToFileNF("C:\Update.pefx");

	End Sub UserProc;


После выполнения примера в обновление, загруженное из файла C:\Update.pefx,
 будет добавлено удаление объекта с идентификатором OBJ_DEL. Для данного
 объекта будет задан тип обновления «По
 идентификаторам».


См. также:


[IMetabaseUpdateDeleteObjectNode](IMetabaseUpdateDeleteObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
