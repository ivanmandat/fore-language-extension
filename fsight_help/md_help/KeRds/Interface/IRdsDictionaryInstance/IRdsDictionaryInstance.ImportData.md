# IRdsDictionaryInstance.ImportData

IRdsDictionaryInstance.ImportData
-


# IRdsDictionaryInstance.ImportData


## Синтаксис


ImportData(Schema: [IRdsImportSchema](../IRdsImportSchema/IRdsImportSchema.htm));


## Параметры


Schema. Схема импорта справочника
 НСИ.


## Описание


Метод ImportData осуществляет
 импорт данных справочника НСИ, в соответствии с настройками схемы импорта,
 передаваемой посредством параметра Schema.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". В справочнике
 имеется схема импорта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Import: IRdsImportSchemas;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null) As IRdsDictionaryInstance;

	    Import := DictInst.Dictionary.ImportSchemas;

	    DictInst.ImportData(Import.Item(0));

	End Sub UserProc;


После выполнения примера в справочник будут импортированы данные в соответствии
 с настройками первой схемы импорта.


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
