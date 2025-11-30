# IRdsDictionaryElements.Child

IRdsDictionaryElements.Child
-


# IRdsDictionaryElements.Child


## Синтаксис


Child(Element: Integer; ChildIndex: Integer): Integer;


## Параметры


Element - ключ элемента.


ChildIndex - индекс дочернего
 элемента.


## Описание


Свойство Child возвращает для
 элемента Element ключ дочернего
 элемента, индекс которого передается посредством параметра ChildIndex.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Attrs: IRdsAttributes;

	    i, j: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    j := Attrs.Name.Key; // ключ атрибута

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    For i := 0 To Elements.ChildrenCount(-2) - 1 Do

	        Debug.WriteLine(Elements.Attribute(Elements.Child(-2, i), j));

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будут выведены значения атрибута
 "Наименование" для всех корневых элементов справочника.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
