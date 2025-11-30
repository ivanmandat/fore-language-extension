# IRdsDictionaryElementArray.Item

IRdsDictionaryElementArray.Item
-


# IRdsDictionaryElementArray.Item


## Синтаксис


Item(Index: Integer): Integer;


## Параметры


Index - индекс элемента массива.


## Описание


Свойство Item возвращает ключ
 элемента, содержащийся в элементе массива, индекс которого передается
 посредством параметра Index.


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

	    i, Key, j: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    j := Attrs.Name.Key; // ключ атрибута

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    Arr := Elements.Children(Elements.Item(1).Key);

	    For i := 0 To Arr.Count - 1 Do

	        Key := Arr.Item(i);

	        Debug.WriteLine(Elements.Attribute(Key, j));

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будут выведены значения атрибута
 "Наименование" для всех дочерних элементов первого корневого
 элемента справочника.


См. также:


[IRdsDictionaryElementArray](IRdsDictionaryElementArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
