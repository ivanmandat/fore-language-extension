# IRdsDictionaryInstance.CreateLookup

IRdsDictionaryInstance.CreateLookup
-


# IRdsDictionaryInstance.CreateLookup


## Синтаксис


CreateLookup([Attributes: String = ""]):
 [IRdsDictionaryElementsLookup](../IRdsDictionaryElementsLookup/IRdsDictionaryElementsLookup.htm);


## Параметры


Attributes. Список атрибутов,
 по значениям которых будет осуществляться поиск. Наименования атрибутов
 разделяются знаком «;». Если данный параметр неопределен, необходимо указать
 список атрибутов в свойстве [Attributes](../IRdsDictionaryElementsLookup/IRdsDictionaryElementsLookup.Attributes.htm).


## Описание


Метод CreateLookup создает объект,
 осуществляющий поиск элементов справочника НСИ по заданным значениям атрибутов.


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

	    Look.Options := RdsElementsLookupOptions.Partial;

	    Look.Data.Value(0) := "Первый";

	    For Each Element In Look.LookupList Do

	        Debug.WriteLine(Element.Name + " " + Element.Key.ToString);

	    End For;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск элементов справочника,
 содержащих в своем наименовании слово "Первый". В случае удачного
 поиска, наименования и ключи найденных элементов будут выведены в консоль
 среды разработки.


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
