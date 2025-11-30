# IRdsImportSchema.TableObject

IRdsImportSchema.TableObject
-


# IRdsImportSchema.TableObject


## Синтаксис


TableObject: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство TableObject определяет таблицу репозитория, из которой будут импортироваться данные.


## Пример


Для выполнения примера предполагается наличие таблицы с идентификатором «TBL_IMP». Также должен существовать репозиторий НСИ с идентификатором «RDS_REPO», содержащий справочник НСИ с идентификатором «IMPORT». Идентификаторы и типы полей таблицы «TBL_IMP» и справочника «IMPORT» совпадают.


Добавьте ссылки на системные сборки «Metabase», «Rds», «Db».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Import: IRdsImportSchemas;

    SchemaImport: IRdsImportSchema;

    Attrs: IRdsAttributes;

    TableObj: IMetabaseObjectDescriptor;

    Table: ITable;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("IMPORT", MB.ItemById("RDS_REPO").Key).Edit;

    Dict := MObj As IRdsDictionary;

    Attrs := Dict.Attributes;

    Import := Dict.ImportSchemas;

    SchemaImport := Import.Add;

    SchemaImport.Name := "Схема импорта №1";

    SchemaImport.Incremental := True;

    SchemaImport.UniqueKey := Dict.UniqueKeys.Item(0);

    SchemaImport.Mappings(Attrs.Key).FieldName := "Key";

    SchemaImport.Mappings(Attrs.Name).FieldName := "Name";

    SchemaImport.Mappings(Attrs.Order).FieldName := "Ord";

    SchemaImport.Mappings(Attrs.ParentKey).FieldName := "Parent_key";

    TableObj := MB.ItemById("TBL_IMP");

    Table := TableObj.Bind As ITable;

    SchemaImport.TableObject := TableObj;

    SchemaImport.TableName := Table.NativeName;

    MObj.Save;


После выполнения примера в справочнике НСИ будет создана новая схема импорта. Значения атрибутов справочника «IMPORT» будут импортироваться из одноименных полей таблицы «TBL_IMP». Для проверки уникальности импортируемых данных будет использоваться первый уникальный ключ справочника «TBL_IMP». Если уникальный ключ отсутствует, то уникальность будет проверяться по атрибуту «KEY» ([IRdsAttributes.Key](../IRdsAttributes/IRdsAttributes.Key.htm)).


См. также:


[IRdsImportSchema](IRdsImportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
