# IRdsDictionaryElementHistory.Item

IRdsDictionaryElementHistory.Item
-


# IRdsDictionaryElementHistory.Item


## Синтаксис


Item(Index: Integer): [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm);


## Параметры


Index. Индекс записи в истории
 изменений элемента.


## Описание


Свойство Item возвращает данные
 из истории элемента. Индекс записи передается посредством параметра Index.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". Для справочника
 установлено изменение элементов во времени.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Hist: IRdsDictionaryElementHistory;

	    Data: IRdsDictionaryElementData;

	    Attrs: IRdsAttributes;

	    i, InDate, OutDate: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    InDate := Attrs.InDate.Key;

	    OutDate := Attrs.OutDate.Key;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    Hist := Elements.History(Elements.Item(1).Key);

	    For i := 0 To Hist.Count - 1 Do

	        Data := Hist.Item(i);

	        Debug.Write("Дата начала:" + Data.Attribute(InDate));

	        Debug.WriteLine(" Дата окончания:" + Data.Attribute(OutDate));

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будут выведены даты начала и окончания
 действия всех версий первого корневого элемента справочника НСИ.


См. также:


[IRdsDictionaryElementHistory](IRdsDictionaryElementHistory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
