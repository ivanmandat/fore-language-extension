# IRdsDictionaryElement.Move

IRdsDictionaryElement.Move
-


# IRdsDictionaryElement.Move


## Синтаксис


Move(InPlaceDictionaryElement: [IRdsDictionaryElement](IRdsDictionaryElement.htm));


## Параметры


InPlaceElement.
 Элемент, на место которого будет перемещен текущий элемент.


## Описание


Метод Move осуществляет перестановку
 текущего элемента с элементом, передаваемым посредством параметра InPlaceDictionaryElement. Перестановка
 элементов доступна в рамках одного родительского элемента.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Element: IRdsDictionaryElement;

	    List: IRdsDictionaryElementList;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    List := Elements.RootItem.Children;

	    Element := List.Item(0);

	    Element.Move(List.Item(List.Count - 1));

	End Sub UserProc;


После выполнения примера первый и последний корневые элементы справочника
 НСИ будут переставлены местами.


См. также:


[IRdsDictionaryElement](IRdsDictionaryElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
