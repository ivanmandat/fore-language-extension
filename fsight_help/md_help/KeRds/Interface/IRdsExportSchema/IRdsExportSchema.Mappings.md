# IRdsExportSchema.Mappings

IRdsExportSchema.Mappings
-


# IRdsExportSchema.Mappings


## Синтаксис


Mappings(Attribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm)):
 [IRdsExportSchemaAttribute](../IRdsExportSchemaAttribute/IRdsExportSchemaAttribute.htm);


## Параметры


Attribute.
 Атрибут справочника НСИ, для которого необходимо определить привязку к
 полям таблицы экспорта.


## Описание


Свойство Mappings возвращает
 параметры привязки атрибутов справочника НСИ к полям таблицы, в которую
 осуществляется экспорт данных.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". В данном
 справочнике имеется атрибут "ATTRIBUTE", связанный с другим
 справочником. Так же в данном атрибуте могут содержаться множественные
 значения. В базе данных, установленной для репозитория НСИ, имеется две
 таблицы: "TabExport" - таблица содержит поля с наименованиями,
 как и у базовых атрибутов справочника. В данную таблицы будет экспортироваться
 основная структура дерева элементов справочника; "TabValue"
 - таблица будет содержать записи, определяющие множественные значения
 атрибута "ATTRIBUTE".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	    Export: IRdsExportSchemas;

	    SchemaExport: IRdsExportSchema;

	    SchemaExportAttr: IRdsExportSchemaAttribute;

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

	    //Привязка основных атрибутов

	    SchemaExport.Mappings(Attrs.Key).FieldName := "Key";

	    SchemaExport.Mappings(Attrs.Name).FieldName := "Name";

	    SchemaExport.Mappings(Attrs.Order).FieldName := "Ord";

	    SchemaExport.Mappings(Attrs.ParentKey).FieldName := "Parent";

	    SchemaExport.TableName := "TabExport";

	    SchemaExportAttr := SchemaExport.Mappings(Attrs.FindById("ATTRIBUTE"));

	    //Привязка атрибута, имеющего множественные значения

	    SchemaExportAttr.FieldName := "Key1";

	    SchemaExportAttr.DetailTable := "TabValue";

	    SchemaExportAttr.KeyField := "Key";

	    SchemaExportAttr.ValueField := "Value";

	    SchemaExportAttr.OrderField := "Value_Number";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочнике НСИ будет создана новая схема
 экспорта. Значения атрибутов справочника будут экспортироваться в одноименные
 поля таблицы "TabExport". Множественные значения атрибута "ATTRIBUTE"
 экспортируются в таблицу "TabValue".


См. также:


[IRdsExportSchema](IRdsExportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
