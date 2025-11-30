# IRdsImportSchema.Filter

IRdsImportSchema.Filter
-


# IRdsImportSchema.Filter


## Синтаксис


Filter: String;


## Описание


Свойство Filter определяет фильтр,
 применяемый к импортируемым данным. В данном свойстве необходимо указывать
 условие, используя идентификаторы полей таблицы, из которой будут загружаться
 данные.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". В базе
 данных, установленной для репозитория НСИ, имеется таблица "TabImport"
 содержащая поля с наименованиями, как и у базовых атрибутов справочника.


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

	    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

	    Dict := MObj As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    Import := Dict.ImportSchemas;

	    SchemaImport := Import.Add;

	    SchemaImport.Id := "Import1";

	    SchemaImport.Name := "Схема импорта №1";

	    SchemaImport.Mappings(Attrs.Key).FieldName := "Key";

	    SchemaImport.Mappings(Attrs.Name).FieldName := "Name";

	    SchemaImport.Mappings(Attrs.Order).FieldName := "Ord";

	    SchemaImport.Mappings(Attrs.ParentKey).FieldName := "Parent_key";

	    SchemaImport.TableName := "TabImport";

	    SchemaImport.Filter := "Key<100";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочнике НСИ будет создана новая схема
 импорта. Значения атрибутов справочника будут импортироваться из одноименных
 полей таблицы "TabImport". При импорте будет осуществляться
 фильтрация данных по значению поля "Key".


См. также:


[IRdsImportSchema](IRdsImportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
