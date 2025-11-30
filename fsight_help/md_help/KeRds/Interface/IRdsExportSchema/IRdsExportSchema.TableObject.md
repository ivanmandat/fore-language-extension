# IRdsExportSchema.TableObject

IRdsExportSchema.TableObject
-


# IRdsExportSchema.TableObject


## Синтаксис


TableObject: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство TableObject определяет таблицу репозитория, в которую будут экспортироваться данные.


## Комментарии


Физическое наименование таблицы, в которую экспортируются данные, определяет свойство [IRdsExportSchema.TableName](IRdsExportSchema.TableName.htm).


## Пример


Для выполнения примера предполагается наличие таблицы с идентификатором «OBJ_EXP». Также должен существовать репозиторий НСИ с идентификатором «RDS_REPO», содержащий справочник НСИ с идентификатором «EXPORT». Идентификаторы и типы полей таблицы «OBJ_EXP» и справочника «EXPORT» совпадают.


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

    MObj.Save;

    DictInst := Dict.Open(Null);

    DictInst.ExportData(SchemaExport);

End Sub UserProc;


После выполнения примера в справочнике НСИ будет создана новая схема экспорта. Значения атрибутов справочника «EXPORT» будут экспортироваться в одноименные поля таблицы «OBJ_EXP». Экспорт будет выполнен.


См. также:


[IRdsExportSchema](IRdsExportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
