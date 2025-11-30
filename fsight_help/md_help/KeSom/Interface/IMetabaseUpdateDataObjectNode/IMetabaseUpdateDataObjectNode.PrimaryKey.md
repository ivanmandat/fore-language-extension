# IMetabaseUpdateDataObjectNode.PrimaryKey

IMetabaseUpdateDataObjectNode.PrimaryKey
-


# IMetabaseUpdateDataObjectNode.PrimaryKey


## Синтаксис


PrimaryKey: String;


## Описание


Свойство PrimaryKey определяет
 список полей/атрибутов, представляющих собой первичный ключ.


## Комментарии


По указанным полям будет проверяться, отличны ли данные таблицы-приёмника
 от данных таблицы-источника и выполняться заданное действие по обновлению
 (например, только добавление записей, которых нет по первичному ключу).
 Поля в списке должны указываться в верхнем регистре через ";".
 Способ обновления данных задается свойством [BatchMode](IMetabaseUpdateDataObjectNode.BatchMode.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором «T_Data». В таблице имеется поле «UNIQUENAME», по которому
 содержатся какие-либо уникальные данные.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MBDesc: IMetabaseObjectDescriptor;

    MUpdate: IMetabaseUpdate;

    ObjNode: IMetabaseUpdateDataObjectNode;

Begin

    MB := MetabaseClass.Active;

    MBDesc := MB.ItemById("T_Data");

    MUpdate := MB.CreateUpdate;

    MUpdate.BoundType := MetabaseObjectUpdateBoundType.ById;

    MUpdate.AlterType(MetabaseObjectClass.KE_CLASS_TABLE) := MetabaseObjectAlterType.Recreate;

    MUpdate.Description := "Обновление для таблицы";

    ObjNode := MUpdate.RootFolder.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

    //Указание обновляемого объекта

    ObjNode.Object := MBDesc;

    //Параметры обновления

    ObjNode.Label := MBDesc.Id;

    ObjNode.UpdatePart := MetabaseObjectUpdatePart.DataMetadata;

    ObjNode.BoundType := MetabaseObjectUpdateBoundType.ByKey;

    ObjNode.Method := MetabaseUpdateMethod.All;

    ObjNode.BatchMode := ObjectUpdateDataBatchMode.UpdateInsert;

    ObjNode.PrimaryKey := "UNIQUENAME";

    //Сохранение обновления

    MUpdate.SaveToFileNF("C:\Update.pefx");

End Sub UserProc;


При выполнении примера будет создан файл обновления. В данное обновление
 будет включена указанная таблица.


См. также:


[IMetabaseUpdateDataObjectNode](IMetabaseUpdateDataObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
