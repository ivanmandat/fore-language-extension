# IRdsImportSchema.Incremental

IRdsImportSchema.Incremental
-


# IRdsImportSchema.Incremental


## Синтаксис


Incremental: Boolean;


## Описание


Свойство Incremental определяет, будет ли производиться дополнение данных справочника НСИ при импорте.


## Комментарии


Допустимые значения:


-
True. При импорте список элементов справочника будет дополнен. Справочник будет содержать как собственные, так и импортированные элементы;


-
False. Значение по умолчанию. Перед импортом выполняется очистка списка элементов справочника. Справочник будет содержать только импортированные элементы.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором «NSI_1», содержащего справочник НСИ с идентификатором «Dict_1». В базе данных, установленной для репозитория НСИ, имеется таблица «TabImport». Наименования полей таблицы должны совпадать с наименованиями базовых атрибутов справочника «Dict_1».


Добавьте ссылки на системные сборки: «Metabase», «Rds».


			Sub UserProc;
Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    DictInst: IRdsDictionaryInstance;

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

    SchemaImport.Incremental := True;

    SchemaImport.Mappings(Attrs.Key).FieldName := "Key";

    SchemaImport.Mappings(Attrs.Name).FieldName := "Name";

    SchemaImport.Mappings(Attrs.Order).FieldName := "Ord";

    SchemaImport.Mappings(Attrs.ParentKey).FieldName := "Parent_key";

    SchemaImport.TableName := "TabImport";

    MObj.Save;

    DictInst := Dict.Open(Null);

    DictInst.ImportData(SchemaImport);
End Sub UserProc;


После выполнения примера в справочнике НСИ будет создана новая схема импорта. Значения атрибутов справочника будут импортироваться из одноименных полей таблицы «TabImport». После сохранения, будет произведен импорт данных в соответствии с настройками созданной схемы. При импорте будет производиться дополнение данных справочника НСИ.


См. также:


[IRdsImportSchema](IRdsImportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
