# IMetabaseUpdateObject.WriteUpdate

IMetabaseUpdateObject.WriteUpdate
-


# IMetabaseUpdateObject.WriteUpdate


## Синтаксис


WriteUpdate(Update: [IMetabaseUpdate](../IMetabaseUpdate/IMetabaseUpdate.htm);
 Mode: [UpdateLoadMode](../../Enums/UpdateLoadMode.htm));


## Параметры


Update. Обновление, которое
 будет сохранено;


Mode. Режим добавления объектов
 в обновление.


## Описание


Метод WriteUpdate сохраняет
 обновление как объект репозитория.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.
 В репозитории должны быть обновление с идентификатором «ObjPefx», таблица
 с идентификатором «Table» и форма с идентификатором «Form_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    Root: IMetabaseUpdateFolderNode;

    TableObj: IMetabaseUpdateDataObjectNode;

    Obj: IMetabaseUpdateObjectNode;

    UpdateObj: IMetabaseUpdateObject;

Begin

    MB := MetabaseClass.Active;

    Update := MB.CreateUpdate;

    Root := Update.RootFolder;

    TableObj := Root.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateDataObjectNode;

    TableObj.Object := MB.ItemById("Table");

    TableObj.Method := MetabaseUpdateMethod.All;

    TableObj.Label := TableObj.Object.Name;

    Obj := Root.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

    Obj.Object := MB.ItemById("Form_1");

    UpdateObj := MB.ItemById("ObjPefx").Bind As IMetabaseUpdateObject;

    UpdateObj.WriteUpdate(Update, UpdateLoadMode.InsertUpdate);

End Sub UserProc;


После выполнения примера в обновление, расположенное в репозитории,
 будут добавлены таблица и форма. Если данные объекты уже содержались в
 обновлении, то они будут заменены.


См. также:


[IMetabaseUpdateObject](IMetabaseUpdateObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
