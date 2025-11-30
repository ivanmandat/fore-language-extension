# IRdsExportSchema.ClearMappings

IRdsExportSchema.ClearMappings
-


# IRdsExportSchema.ClearMappings


## Синтаксис


ClearMappings(Attribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm)):
 Boolean;


## Параметры


Attribute - атрибут справочника
 НСИ, для которого необходимо очистить привязку к полям таблицы экспорта.


## Описание


Метод ClearMappings осуществляет
 очистку привязки атрибута, передаваемого посредством параметра Attribute,
 к полям таблицы, в которую осуществляется экспорт данных.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". В справочнике
 имеется схема экспорта с идентификатором "Export1", настроенная
 на экспорт данных, в какую либо таблицу.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	    Export: IRdsExportSchemas;

	    SchemaExport: IRdsExportSchema;

	    Attrs: IRdsAttributes;

	    Attr: IRdsAttribute;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

	    Dict := MObj As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    Export := Dict.ExportSchemas;

	    SchemaExport := Export.FindById("Export1");

	    For Each Attr In Attrs Do

	        SchemaExport.ClearMappings(Attr);

	    End For;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет осуществлена очистка привязки к полям
 экспортируемой таблицы по всем атрибутам справочника НСИ.


См. также:


[IRdsExportSchema](IRdsExportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
