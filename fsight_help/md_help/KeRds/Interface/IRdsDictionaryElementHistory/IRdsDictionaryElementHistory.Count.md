# IRdsDictionaryElementHistory.Count

IRdsDictionaryElementHistory.Count
-


# IRdsDictionaryElementHistory.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 записей в истории изменений элемента.


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

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена история
 изменения атрибута "Наименование" для первого корневого элемента
 справочника НСИ.


См. также:


[IRdsDictionaryElementHistory](IRdsDictionaryElementHistory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
