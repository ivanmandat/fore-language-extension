# IRdsDictionaryElementsLookup.Data

IRdsDictionaryElementsLookup.Data
-


# IRdsDictionaryElementsLookup.Data


## Синтаксис


Data: [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm);


## Описание


Свойство Data возвращает объект,
 содержащий искомые данные элементов справочника НСИ.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". В справочнике
 содержится дополнительный атрибут с идентификатором "ATTRIBUTE1".


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

	    Look := DictInst.CreateLookup("NAME;ATTRIBUTE1");

	    Look.Options := RdsElementsLookupOptions.Partial;

	    Look.Data.Value(0) := "Первый";

	    Look.Data.Value(1) := 100;

	    For Each Element In Look.LookupList Do

	        Debug.WriteLine(Element.Name + " " + Element.Key.ToString);

	    End For;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск элементов справочника
 НСИ по значениям двух атрибутов. Будут искаться элементы, содержащие в
 своем наименование слово "Первый" и в значениях дополнительного
 атрибута число "100". Наименования и ключи найденных элементов
 будут выведены в консоль среды разработки.


См. также:


[IRdsDictionaryElementsLookup](IRdsDictionaryElementsLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
