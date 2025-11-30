# IRdsExportSchemaAttribute.UpdateDetailTableMode

IRdsExportSchemaAttribute.UpdateDetailTableMode
-


# IRdsExportSchemaAttribute.UpdateDetailTableMode


## Синтаксис


UpdateDetailTableMode: [RdsUpdateDetailTableMode](../../Enums/RdsUpdateDetailTableMode.htm);


## Описание


Свойство UpdateDetailTableMode
 определяет способ обновления записей в таблице, использующейся для
 экспорта значений множественного атрибута.


## Комментарии


По умолчанию UpdateDetailTableMode
 = RdsUpdateDetailTableMode.Recreate, т.е. при экспорте сначала
 из дочерней таблицы удаляются все записи, а затем производится экспорт
 значений множественного атрибута.


## Пример


Для выполнения примера предполагается наличие в репозитории таблиц с
 идентификаторами «OBJ_EXP» и «OBJ_EXP_VALUE». Также должен существовать
 репозиторий НСИ с идентификатором «RDS_REPO», содержащий справочник НСИ
 с идентификатором «EXPORT». В данном справочнике имеется атрибут с идентификатором
 «ATTRIBUTE», который может иметь множественные значения и связан с другим
 справочником. Идентификаторы и типы полей таблицы «OBJ_EXP» и справочника
 «EXPORT» совпадают. Также таблица «OBJ_EXP» должна содержать поле целого
 типа с идентификатором «KEY_EXP». Таблица «OBJ_EXP_VALUE» должна содержать
 поля целого типа со следующими идентификаторами: «KEYFIELD», «VALUEFIELD»,
 «ORDERFIELD».


Добавьте ссылки на системные сборки «Metabase», «Rds», «Db».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Export: IRdsExportSchemas;

    SchemaExport: IRdsExportSchema;

    Attrs: IRdsAttributes;

    TableObj: IMetabaseObjectDescriptor;

    Table: ITable;

    SchemaExportAttr: IRdsExportSchemaAttribute;

    DictInst: IRdsDictionaryInstance;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("EXPORT", MB.ItemById("RDS_REPO").Key).Edit;

    Dict := MObj As IRdsDictionary;

    Attrs := Dict.Attributes;

    Export := Dict.ExportSchemas;

    SchemaExport := Export.Add;

    SchemaExport.Id := MB.GenerateId("Export1");

    SchemaExport.Name := "Схема экспорта №1";

    SchemaExport.Mappings(Attrs.Key).FieldName := "Key";

    SchemaExport.Mappings(Attrs.Name).FieldName := "Name";

    SchemaExport.Mappings(Attrs.Order).FieldName := "Ord";

    SchemaExport.Mappings(Attrs.ParentKey).FieldName := "Parent_key";

    TableObj := MB.ItemById("OBJ_EXP");

    Table := TableObj.Bind As ITable;

    SchemaExport.TableObject := TableObj;

    SchemaExport.TableName := Table.NativeName;

    SchemaExportAttr := SchemaExport.Mappings(Attrs.FindById("ATTRIBUTE"));

//Привязка атрибута, имеющего множественные значения

    TableObj := MB.ItemById("OBJ_EXP_VALUE");

    Table := TableObj.Bind As ITable;

    SchemaExportAttr.DetailTableObject := TableObj;

    SchemaExportAttr.DetailTable := Table.NativeName;

    SchemaExportAttr.FieldName := "KEY_EXP";

    SchemaExportAttr.KeyField := "KEYFIELD";

    SchemaExportAttr.ValueField := "VALUEFIELD";

    SchemaExportAttr.OrderField := "ORDERFIELD";

    SchemaExportAttr.UpdateDetailTableMode := RdsUpdateDetailTableMode.Update;

    MObj.Save;

    DictInst := Dict.Open(Null);

    DictInst.ExportData(SchemaExport);

End Sub UserProc;


После выполнения примера в справочнике НСИ будет создана новая схема
 экспорта. Значения атрибутов справочника «EXPORT» экспортируются в одноименные
 поля таблицы «OBJ_EXP». Множественные значения атрибута «ATTRIBUTE» экспортируются
 в таблицу «OBJ_EXP_VALUE». Экспорт будет выполнен. При экспорте будет
 выполнено сопоставление значений атрибута «ATTRIBUTE» и записей, содержащихся
 в таблице «OBJ_EXP_VALUE». Если в таблице не найдена запись, соответствующая
 значению атрибута, то она будет туда добавлена. Если в таблице найдена
 запись, которая не соответствуют ни одному из значений атрибута, то она
 будет удалена. Если в таблице найдена запись, соответствующая значению
 атрибута, то она будет обновлена.


См. также:


[IRdsExportSchemaAttribute](IRdsExportSchemaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
