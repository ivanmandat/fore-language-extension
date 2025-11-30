# IRdsImportSchemaAttribute.DetailTable

IRdsImportSchemaAttribute.DetailTable
-


# IRdsImportSchemaAttribute.DetailTable


## Синтаксис


DetailTable: String;


## Описание


Свойство DetailTable определяет
 физическое имя таблицы, содержащей записи для множественных значений атрибута
 справочника.


## Комментарии


Свойство является обязательным. Также для корректного импорта необходимо
 задать свойство [IRdsImportSchemaAttribute.DetailTableObject](IRdsImportSchemaAttribute.DetailTableObject.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие таблиц с
 идентификаторами «TABLE_EXP», «TABLE_EXP_VALUE» и репозитория НСИ с идентификатором
 «MDM_REPO», содержащий справочник НСИ с идентификатором «MDM_DICTIONARY».
 Данные объекты должны использовать одну БД и соответствовать следующим
 требованиям:


	- в справочнике «MDM_DICTIONARY» содержится атрибут с идентификатором
	 «ATTRIBUTE», который может иметь множественные значения и связан с
	 другим справочником. Также в данном справочнике должна отсутствовать
	 схема импорта с идентификатором «IMPORT_SCHEME»;


	- идентификаторы и типы полей таблицы «TABLE_EXP» и справочника
	 «MDM_DICTIONARY» совпадают;


	- таблица «TABLE_EXP» должна содержать поле целого типа с идентификатором
	 «KEY_EXP». По данному полю определяются множественные значения атрибута,
	 хранящиеся в таблице «TABLE_EXP_VALUE»;


	- таблица «TABLE_EXP_VALUE» содержит записи, определяющие множественные
	 значения атрибута «ATTRIBUTE», и обязательные поля целого типа со
	 следующими идентификаторами: «KEYFIELD», «VALUEFIELD», «ORDERFIELD».


Добавьте ссылки на системные сборки: Db, Metabase, Rds.


			Sub UserImport;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Import: IRdsImportSchemas;

    SchemaImport: IRdsImportSchema;

    Attrs: IRdsAttributes;

    TableObj: IMetabaseObjectDescriptor;

    Table: ITable;

    SchemaImportAttr: IRdsImportSchemaAttribute;

    DictInst: IRdsDictionaryInstance;

Begin

    MB := MetabaseClass.Active;

    // Получаем справочник НСИ

    MObj := MB.ItemByIdNamespace("MDM_DICTIONARY_IMPORT", MB.ItemById("MDM_REPO").Key).Edit;

    Dict := MObj As IRdsDictionary;

    // Получаем атрибуты справочника НСИ

    Attrs := Dict.Attributes;

    // Создаем новую схему импорта

    Import := Dict.ImportSchemas;

    SchemaImport := Import.Add;

    SchemaImport.Id := "IMPORT_SCHEME";

    SchemaImport.Name := "Схема импорта №1";

    // Задаем привязку системных атрибутов справочника НСИ

    SchemaImport.Mappings(Attrs.Key).FieldName := "KEY";

    SchemaImport.Mappings(Attrs.Name).FieldName := "NAME";

    SchemaImport.Mappings(Attrs.Order).FieldName := "ORD";

    SchemaImport.Mappings(Attrs.ParentKey).FieldName := "PARENT_KEY";

    // Получаем таблицу «TABLE_EXP»

    TableObj := MB.ItemById("TABLE_EXP");

    Table := TableObj.Bind As ITable;

    // Указываем, что импорт значений системных атрибутов

    // будет выполняться из таблицы «TABLE_EXP»

    SchemaImport.TableObject := TableObj;

    SchemaImport.TableName := Table.NativeName;

    // Задаем привязку атрибута, который может принимать множественные значения

    SchemaImportAttr := SchemaImport.Mappings(Attrs.FindById("ATTRIBUTE"));

    //Получаем таблицу «TABLE_EXP_VALUE»

    TableObj := MB.ItemById("TABLE_EXP_VALUE");

    // Указываем, что импорт множественных значений атрибута

    // будет выполняться из таблицы «TABLE_EXP_VALUE»

    Table := TableObj.Bind As ITable;

    SchemaImportAttr.DetailTable := Table.NativeName;

    SchemaImportAttr.DetailTableObject := TableObj;

    // Задаем параметры импорта множественных значений атрибута

    SchemaImportAttr.Attribute.Hidden := False;

    SchemaImportAttr.FieldName := "KEY_EXP";

    SchemaImportAttr.KeyField := "KEYFIELD";

    SchemaImportAttr.ValueField := "VALUEFIELD";

    SchemaImportAttr.OrderField := "ORDERFIELD";

    // Сохраняем схему импорта

    MObj.Save;

    // Выполняем импорт

    DictInst := Dict.Open(Null);

    DictInst.ImportData(SchemaImport);

End Sub UserImport;


После выполнения примера в справочнике НСИ будет создана новая схема
 импорта. Значения атрибутов справочника «MDM_DICTIONARY» импортируются
 из одноименных полей таблицы «TABLE_EXP». Множественные значения атрибута
 «ATTRIBUTE» импортируются из таблицы «TABLE_EXP_VALUE». Импорт будет выполнен.


См. также:


[IRdsImportSchemaAttribute](IRdsImportSchemaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
