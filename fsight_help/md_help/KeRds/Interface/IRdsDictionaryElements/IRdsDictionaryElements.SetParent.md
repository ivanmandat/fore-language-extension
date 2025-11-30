# IRdsDictionaryElements.SetParent

IRdsDictionaryElements.SetParent
-


# IRdsDictionaryElements.SetParent


## Синтаксис


SetParent(Element: Integer; Parent: Integer);


## Параметры


Element - ключ элемента, для
 которого необходимо изменить родительский элемент.


Parent - ключ элемента, который
 необходимо установить в качестве родителя для элемента Element.


## Описание


Метод SetParent осуществляет
 изменение родительского элемента для элемента, ключ которого передается
 посредством параметра Element.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Elem1, Elem2: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    Elem1 := Elements.Child(-2, 0);

	    Elem2 := Elements.Child(-2, 1);

	    Elements.SetParent(Elem1, Elem2);

	End Sub Button1OnClick;


После выполнения примера для первого корневого элемента справочника,
 в качестве родительского элемента будет установлен второй элемент.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
