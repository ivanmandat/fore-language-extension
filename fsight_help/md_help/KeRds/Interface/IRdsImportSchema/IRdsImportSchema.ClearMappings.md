# IRdsImportSchema.ClearMappings

IRdsImportSchema.ClearMappings
-


# IRdsImportSchema.ClearMappings


## Синтаксис


ClearMappings(Attribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm)): Boolean;


## Параметры


Attribute. Атрибут справочника НСИ, для которого необходимо очистить привязку к полям таблицы импорта.


## Описание


Метод ClearMappings осуществляет очистку привязки атрибута к полям импортируемой таблицы.


## Комментарии


Метод возвращает значение True, если очистка привязки прошла успешно и False, если очистка не производилась. Очистка не будет произведена, например, если отсутствует привязка атрибута, либо указан не существующий атрибут.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1", содержащего справочник НСИ с идентификатором "Dict_1". В справочнике имеется схема импорта с идентификатором "Import1", настроенная на импорт данных, из какой-либо таблицы.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Import: IRdsImportSchemas;

    SchemaImport: IRdsImportSchema;

    Attrs: IRdsAttributes;

    Attr: IRdsAttribute;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("Dict_1", MB.GetObjectKeyById("NSI_1")).Edit;

    Dict := MObj As IRdsDictionary;

    Attrs := Dict.Attributes;

    Import := Dict.ImportSchemas;

    SchemaImport := Import.FindById("Import1");

    For Each Attr In Attrs Do

        SchemaImport.ClearMappings(Attr);

    End For;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет осуществлена очистка привязки к полям импортируемой таблицы по всем атрибутам справочника НСИ.


См. также:


[IRdsImportSchema](IRdsImportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
