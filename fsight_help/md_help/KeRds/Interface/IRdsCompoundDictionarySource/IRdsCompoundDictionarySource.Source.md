# IRdsCompoundDictionarySource.Source

IRdsCompoundDictionarySource.Source
-


# IRdsCompoundDictionarySource.Source


## Синтаксис


Source: [IRdsDictionary](../IRdsDictionary/IRdsDictionary.htm);


## Описание


Свойство Source определяет справочник
 НСИ, используемый в качестве источника данных для данного составного справочника.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1".
 В данном репозитории содержится два справочника: 1) обычный справочник
 НСИ с идентификатором "Dict_1"; 2) составной справочник НСИ
 с идентификатором "CompDict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	    CompDict: IRdsCompoundDictionary;

	    CompSources: IRdsCompoundDictionarySources;

	    CompSource: IRdsCompoundDictionarySource;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("CompDict_1", MB.ItemById("NSI_1").Key).Edit;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    CompDict := MObj As IRdsCompoundDictionary;

	    CompSources := CompDict.Sources;

	    CompSource := CompSources.Add;

	    CompSource.Id := "New_Source";

	    CompSource.Name := "Новый справочник-источник";

	    CompSource.Source := Dict;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в составной справочник будет добавлен новый
 источник. В качестве источника данных выступает справочник НСИ "Dict_1".


См. также:


[IRdsCompoundDictionarySource](IRdsCompoundDictionarySource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
