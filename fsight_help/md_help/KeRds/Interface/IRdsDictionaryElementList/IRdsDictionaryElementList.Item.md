# IRdsDictionaryElementList.Item

IRdsDictionaryElementList.Item
-


# IRdsDictionaryElementList.Item


## Синтаксис


Item(Index: Integer): [IRdsDictionaryElement](../IRdsDictionaryElement/IRdsDictionaryElement.htm);


## Параметры


Index - индекс элемента в коллекции.


## Описание


Свойство Item возвращает элемент,
 индекс которого передается посредством параметра Index.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


Sub Main;


Var


MB: IMetabase;


Attrs: IRdsAttributes;


Dict: IRdsDictionary;


DictInst: IRdsDictionaryInstance;


Elements: IRdsDictionaryElements;


ElementList: IRdsDictionaryElementList;


Element: IRdsDictionaryElement;


i:
 Integer;


Begin


MB := MetabaseClass.Active;


Dict := MB.ItemByIdNamespace("Dict_1",
 MB.ItemById("NSI_1").Key).Bind As
 IRdsDictionary;


Attrs := Dict.Attributes;


DictInst := Dict.Open(Null);


Elements := DictInst.Elements;


ElementList := Elements.Item(1).Children;


For
 i := 0 To ElementList.Count -
 1 Do


Element := ElementList.Item(i);


Debug.WriteLine(Element.Name);


End
 For;


End Sub
 Main;


После выполнения примера в консоль будут выведены наименования всех
 дочерних элементов первого элемента справочника НСИ.


См. также:


[IRdsDictionaryElementList](IRdsDictionaryElementList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
