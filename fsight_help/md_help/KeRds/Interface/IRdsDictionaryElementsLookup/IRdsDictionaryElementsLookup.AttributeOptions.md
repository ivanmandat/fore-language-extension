# IRdsDictionaryElementsLookup.AttributeOptions

IRdsDictionaryElementsLookup.AttributeOptions
-


# IRdsDictionaryElementsLookup.AttributeOptions


## Синтаксис


AttributeOptions(Index: Integer): [RdsElementsLookupOptions](../../Enums/RdsElementsLookupOptions.htm);


## Параметры


Index - индекс атрибута, по
 которому необходимо определить дополнительные параметры поиска.


## Описание


Свойство AttributeOptions определяет
 настройки поиска по атрибуту, индекс которого передается посредством параметра
 Index.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". В справочнике
 содержится дополнительный атрибут с идентификатором "ATTRIBUTE1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

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

	    Look := DictInst.CreateLookup("NAME;ATTRIBUTE1");

	    Look.AttributeOptions(0) := RdsElementsLookupOptions.CaseInsensitive Or RdsElementsLookupOptions.Partial;

	    Look.AttributeOptions(1) := RdsElementsLookupOptions.Partial;

	    Look.Data.Value(0) := "Первый";

	    Look.Data.Value(1) := "33";

	    For Each Element In Look.LookupList Do

	        Debug.WriteLine(Element.Name + " " + Element.Key.ToString);

	    End For;

	End Sub Button1OnClick;


После выполнения примера будет осуществлен поиск элементов справочника
 НСИ по значениям двух атрибутов. Будут искаться элементы, содержащие в
 своем наименование слово "Первый" без учета регистра и в значениях
 дополнительного атрибута сочетание чисел "33". Наименования
 и ключи найденных элементов будут выведены в консоль среды разработки.


См. также:


[IRdsDictionaryElementsLookup](IRdsDictionaryElementsLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
