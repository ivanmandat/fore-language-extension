# IRdsDictionaryElements.Move

IRdsDictionaryElements.Move
-


# IRdsDictionaryElements.Move


## Синтаксис


Move(Element: Integer; InPlaceElement: Integer);


## Параметры


Element - ключ элемента, который
 необходимо переместить.


InPlaceElement - ключ элемента,
 на место которого будет перемещен элемент Element.


## Описание


Метод Move осуществляет перестановку
 двух элементов справочника НСИ. Перестановка элементов доступна в рамках
 одного родительского элемента.


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

	    Elem2 := Elements.Child(-2, Elements.ChildrenCount(-2) - 1);

	    Elements.Move(Elem1, Elem2);

	End Sub Button1OnClick;


После выполнения примера первый и последний корневые элементы справочника
 НСИ будут переставлены местами.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
