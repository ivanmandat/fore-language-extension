# IRdsDictionaryElements.Name

IRdsDictionaryElements.Name
-


# IRdsDictionaryElements.Name


## Синтаксис


Name(Element: Integer): String;


## Параметры


Element - ключ элемента.


## Описание


Свойство Name возвращает значение
 атрибута Наименование для элемента, ключ которого передается посредством
 параметра Element.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Arr: IRdsDictionaryElementArray;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    Arr := Elements.Children(Elements.Item(1).Key);

	    For Each i In Arr Do

	        Debug.WriteLine(Elements.Name(i));

	    End For;

	End Sub Button1OnClick;


После выполнения примера в консоль будут выведены значения атрибута
 "Наименование" для всех дочерних элементов первого корневого
 элемента справочника.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
