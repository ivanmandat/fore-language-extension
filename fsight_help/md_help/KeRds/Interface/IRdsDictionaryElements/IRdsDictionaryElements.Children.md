# IRdsDictionaryElements.Children

IRdsDictionaryElements.Children
-


# IRdsDictionaryElements.Children


## Синтаксис


Children(Element: Integer): [IRdsDictionaryElementArray](../IRdsDictionaryElementArray/IRdsDictionaryElementArray.htm);


## Параметры


Element - ключ элемента.


## Описание


Свойство Children возвращает
 массив, содержащий ключи дочерних элементов для элемента, ключ которого
 передается посредством параметра Element.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Arr: IRdsDictionaryElementArray;

	    Attrs: IRdsAttributes;

	    i, j: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    j := Attrs.Name.Key; // ключ атрибута

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    Arr := Elements.Children(Elements.Item(1).Key);

	    For Each i In Arr Do

	        Debug.WriteLine(Elements.Attribute(i, j));

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будут выведены значения атрибута
 "Наименование" для всех дочерних элементов первого корневого
 элемента справочника.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
