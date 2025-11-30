# IRdsDictionaryElements.History

IRdsDictionaryElements.History
-


# IRdsDictionaryElements.History


## Синтаксис


History(Element: Integer): [IRdsDictionaryElementHistory](../IRdsDictionaryElementHistory/IRdsDictionaryElementHistory.htm);


## Параметры


Element - ключ элемента.


## Описание


Свойство History возвращает
 историю изменения значений элемента, ключ которого передается посредством
 параметра Element. Актуально,
 если для справочника установлено изменение элементов во времени.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". Для справочника
 установлено изменение элементов во времени.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Hist: IRdsDictionaryElementHistory;

	    Attrs: IRdsAttributes;

	    i, j: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    j := Attrs.Name.Key;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    Hist := Elements.History(Elements.Item(1).Key);

	    For i := 0 To Hist.Count - 1 Do

	        Debug.WriteLine(Hist.Attribute(i, j));

	    End For;

	End Sub Button1OnClick;


После выполнения примера в консоль будут выведена история изменения
 атрибута Наименование для первого корневого элемента справочника НСИ.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
