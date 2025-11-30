# IRdsImportSchemas.Add

IRdsImportSchemas.Add
-


# IRdsImportSchemas.Add


## Синтаксис


Add: [IRdsImportSchema](../IRdsImportSchema/IRdsImportSchema.htm);


## Описание


Метод Add осуществляет создание
 новой схемы импорта.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". В базе
 данных, установленной для репозитория НСИ, имеется таблица "TabImport",
 содержащая поля с наименованиями, как и у базовых атрибутов справочника.


Добавьте ссылку на системную сборку «Metabase», «Rds».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Import: IRdsImportSchemas;

    SchemaImport: IRdsImportSchema;

    Attrs: IRdsAttributes;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("NSI_SEP", MB.ItemById("NSI1").Key).Edit;

    Dict := MObj As IRdsDictionary;

    Attrs := Dict.Attributes;

    Import := Dict.ImportSchemas;

    SchemaImport := Import.Add;

    SchemaImport.Id := "Import1";

    SchemaImport.Name := "Схема импорта №1";

    SchemaImport.Mappings(Attrs.Key).FieldName := "ID";

    SchemaImport.Mappings(Attrs.Name).FieldName := "NAME";

    SchemaImport.Mappings(Attrs.Order).FieldName := "ORD";

    SchemaImport.Mappings(Attrs.ParentKey).FieldName := "PARENT_KEY";

    SchemaImport.TableName := "SEP";

    MObj.Save;

End Sub UserProc;


После выполнения примера в справочнике НСИ будет создана новая схема
 импорта. Значения атрибутов справочника будут импортироваться из одноименных
 полей таблицы "TabImport".


См. также:


[IRdsImportSchemas](IRdsImportSchemas.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
