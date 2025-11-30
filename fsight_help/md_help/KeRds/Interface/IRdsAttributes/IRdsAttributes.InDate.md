# IRdsAttributes.InDate

IRdsAttributes.InDate
-


# IRdsAttributes.InDate


## Синтаксис


InDate: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Свойство InDate возвращает системный
 атрибут справочника, назначение которого - Дата начала действия элемента.


## Комментарии


Данный атрибут имеет тип Дата, не может содержать пустые и множественные
 значения. По умолчанию является скрытым. Идентификатор атрибута - "INDATE".


Данный атрибут доступен, если свойству [TimeDependent](../IRdsDictionary/IRdsDictionary.TimeDependent.htm)
 установлено значение True, и используется
 для фиксации изменений значений атрибутов.


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

	    Attrs: IRdsAttributes;

	    Hist: IRdsDictionaryElementHistory;

	    i, j, InDate, OutDate, Name: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    InDate := Attrs.InDate.Key;

	    OutDate := Attrs.OutDate.Key;

	    Name := Attrs.Name.Key;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    For i := 1 To Elements.Count - 1 Do

	        Hist := Elements.Item(i).History;

	        Debug.WriteLine(Elements.Item(i).Name);

	        For j := 0 To Hist.Count - 1 Do

	            Debug.Write("Начало: " + Hist.Attribute(j, InDate));

	            Debug.Write(" Окончание: " + Hist.Attribute(j, OutDate));

	            Debug.WriteLine(" Значение на данном интервале: " + Hist.Attribute(j, Name));

	        End For;

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будет выведена история значений атрибута
 "Наименование" для всех элементов справочника.


См. также:


[IRdsAttributes](IRdsAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
