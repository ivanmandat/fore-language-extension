# IRdsImportSchema.DisableUniqueKeys

IRdsImportSchema.DisableUniqueKeys
-


# IRdsImportSchema.DisableUniqueKeys


## Синтаксис


DisableUniqueKeys: Boolean;


## Описание


Свойство DisableUniqueKeys определяет,
 отключена ли проверка загружаемых данных на соответствие всем пользовательским
 уникальным ключам справочника.


## Комментарии


Допустимые значения:


	- True. Проверка данных
	 не производится, элементы с нарушениями уникальных ключей попадают
	 в справочник, импорт выполняется быстрее;


	- False. Установлено по
	 умолчанию. Загружаемые данные будут проверены на соответствие всем
	 пользовательским уникальным ключам.


DisableUniqueKeys актуально
 только для репозиториев, работающих с СУБД Oracle. В репозиториях, работающих
 с СУБД MSSQL, импорт в справочник НСИ всегда производится без проверки
 пользовательских уникальных ключей, т.е. DisableUniqueKeys
 = True.


## Пример


Для выполнения примера предполагается наличие таблицы с идентификатором
 «TBL_IMP». Также должен существовать репозиторий НСИ с идентификатором
 «RDS_REPO», содержащий справочник НСИ с идентификатором «IMPORT». Идентификаторы
 и типы полей таблицы «TBL_IMP» и справочника «IMPORT» совпадают.


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

    SchemaImport.Id := "Import1";

    SchemaImport.Name := "Схема импорта №1";

    SchemaImport.Incremental := True;

    SchemaImport.DisableUniqueKeys := True;

    SchemaImport.Mappings(Attrs.Key).FieldName := "Key";

    SchemaImport.Mappings(Attrs.Name).FieldName := "Name";

    SchemaImport.Mappings(Attrs.Order).FieldName := "Ord";

    SchemaImport.Mappings(Attrs.ParentKey).FieldName := "Parent_key";

    TableObj := MB.ItemById("TBL_IMP");

    Table := TableObj.Bind As ITable;

    SchemaImport.TableObject := TableObj;

    SchemaImport.TableName := Table.NativeName;

    MObj.Save;

End Sub UserProc;


После выполнения примера в справочнике НСИ будет создана новая схема
 импорта. Значения атрибутов справочника «IMPORT» будут импортироваться
 из одноименных полей таблицы «TBL_IMP». Загружаемые данные не будут проверяться
 на соответствие всем пользовательским уникальным ключам.


См. также:


[IRdsImportSchema](IRdsImportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
