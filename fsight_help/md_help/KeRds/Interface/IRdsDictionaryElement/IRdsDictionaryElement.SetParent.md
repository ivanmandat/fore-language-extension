# IRdsDictionaryElement.SetParent

IRdsDictionaryElement.SetParent
-


# IRdsDictionaryElement.SetParent


## Синтаксис


SetParent(Parent: [IRdsDictionaryElement](IRdsDictionaryElement.htm));


## Параметры


Parent.
 Элемент, который необходимо установить в качестве родителя.


## Описание


Метод SetParent осуществляет
 изменение родительского элемента для текущего элемента.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Element1, Element2: IRdsDictionaryElement;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    Element1 := Elements.Item(1);

	    Element2 := Elements.Item(Elements.Count - 1);

	    Element1.SetParent(Element2);

	End Sub UserProc;


После выполнения примера для первого корневого элемента справочника
 в качестве родительского элемента будет установлен последний элемент.


См. также:


[IRdsDictionaryElement](IRdsDictionaryElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
