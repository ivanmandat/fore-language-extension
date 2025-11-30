# IRdsDictionaryElementsLookup.Options

IRdsDictionaryElementsLookup.Options
-


# IRdsDictionaryElementsLookup.Options


## Синтаксис


Options: [RdsElementsLookupOptions](../../Enums/RdsElementsLookupOptions.htm);


## Описание


Свойство Options определяет
 общие настройки поиска, применяемые по всем атрибутам.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Look: IRdsDictionaryElementsLookup;

	    Element: IRdsDictionaryElement;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("DICT_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    Look := DictInst.CreateLookup("NAME");

	    Look.Options := RdsElementsLookupOptions.Partial Or RdsElementsLookupOptions.CaseInsensitive;

	    Look.Data.Value(0) := "Первый";

	    For Each Element In Look.LookupList Do

	        Debug.WriteLine(Element.Name + " " + Element.Key.ToString);

	    End For;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск элементов справочника,
 содержащих в своем наименовании слово "Первый". При поиске не
 будет учитываться регистр символов. Наименования и ключи найденных элементов
 будут выведены в консоль среды разработки.


См. также:


[IRdsDictionaryElementsLookup](IRdsDictionaryElementsLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
