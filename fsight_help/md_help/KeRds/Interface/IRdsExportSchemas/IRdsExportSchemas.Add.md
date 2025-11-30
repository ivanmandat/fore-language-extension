# IRdsExportSchemas.Add

IRdsExportSchemas.Add
-


# IRdsExportSchemas.Add


## Синтаксис


Add: [IRdsExportSchema](../IRdsExportSchema/IRdsExportSchema.htm);


## Описание


Метод Add осуществляет создание
 новой схемы экспорта.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". В базе
 данных, установленной для репозитория НСИ, имеется таблица "TabExport"
 содержащая поля с наименованиями, как и у базовых атрибутов справочника.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	    Export: IRdsExportSchemas;

	    SchemaExport: IRdsExportSchema;

	    Attrs: IRdsAttributes;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

	    Dict := MObj As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    Export := Dict.ExportSchemas;

	    SchemaExport := Export.Add;

	    SchemaExport.Id := "Export1";

	    SchemaExport.Name := "Схема экспорта №1";

	    SchemaExport.Mappings(Attrs.Key).FieldName := "Key";

	    SchemaExport.Mappings(Attrs.Name).FieldName := "Name";

	    SchemaExport.Mappings(Attrs.Order).FieldName := "Ord";

	    SchemaExport.Mappings(Attrs.ParentKey).FieldName := "Parent_key";

	    SchemaExport.TableName := "TabExport";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочнике НСИ будет создана новая схема
 экспорта. Значения атрибутов справочника будут экспортироваться в одноименные
 поля таблицы "TabExport".


См. также:


[IRdsExportSchemas](IRdsExportSchemas.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
