# IRdsDictionaryInstance.ExportData

IRdsDictionaryInstance.ExportData
-


# IRdsDictionaryInstance.ExportData


## Синтаксис


ExportData(Schema: [IRdsExportSchema](../IRdsExportSchema/IRdsExportSchema.htm));


## Параметры


Schema.
 Схема экспорта справочника НСИ.


## Описание


Метод ExportData осуществляет
 экспорт данных справочника НСИ, в соответствии с настройками схемы экспорта,
 передаваемой посредством параметра Schema.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". В справочнике
 имеется схема экспорта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Export: IRdsExportSchemas;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null) As IRdsDictionaryInstance;

	    Export := DictInst.Dictionary.ExportSchemas;

	    DictInst.ExportData(Export.Item(0));

	End Sub UserProc;


После выполнения примера данные справочника будут экспортированы в соответствии
 с настройками первой схемы экспорта.


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
