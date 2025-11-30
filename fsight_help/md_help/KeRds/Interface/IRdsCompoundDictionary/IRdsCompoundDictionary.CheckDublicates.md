# IRdsCompoundDictionary.CheckDublicates

IRdsCompoundDictionary.CheckDublicates
-


# IRdsCompoundDictionary.CheckDublicates


## Синтаксис


CheckDublicates : Boolean;


## Описание


Свойство CheckDublicates определяет
 возможность добавления одинаковых элементов из источников в составной
 справочник НСИ.


## Комментарии


Если свойству установлено значение True
 - будет невозможно добавить несколько одинаковых элементов из источников
 в справочник, иначе данная возможность будет включена. По умолчанию свойство
 установлено значение False.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    NSI: IMetabaseObjectDescriptor;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Dict: IRdsDictionary;

	    CompDict: IRdsCompoundDictionary;

	    CompSources: IRdsCompoundDictionarySources;

	    CompSource: IRdsCompoundDictionarySource;

	Begin

	    MB := MetabaseClass.Active;

	    NSI := MB.ItemById("NSI_1");

	    Dict := MB.ItemByIdNamespace("Dict_1", NSI.Key).Bind As IRdsDictionary;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_RDS_COMPDICTIONARY;

	    CrInfo.Id := "CompDict_1";

	    CrInfo.Name := "Составной справочник НСИ";

	    CrInfo.Parent := NSI;

	    CompDict := MB.CreateObject(CrInfo).Edit As IRdsCompoundDictionary;

	    CompDict.CheckDublicates := True;

	    CompSources := CompDict.Sources;

	    CompSource := CompSources.Add;

	    CompSource.Id := "New_Source";

	    CompSource.Name := "Новый справочник-источник";

	    CompSource.Source := Dict;

	    (CompDict As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет создан новый составной справочник НСИ.
 В составной справочник будет добавлен один справочник-источник данных.
 Добавление дубликатов из источников в составной справочник будет запрещено.


См. также:


[IRdsCompoundDictionary](IRdsCompoundDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
