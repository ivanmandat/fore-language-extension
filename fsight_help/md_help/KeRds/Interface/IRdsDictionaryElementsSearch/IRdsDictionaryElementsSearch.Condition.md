# IRdsDictionaryElementsSearch.Condition

IRdsDictionaryElementsSearch.Condition
-


# IRdsDictionaryElementsSearch.Condition


## Синтаксис


Condition: [IDimOrmCondition](KeDims.chm::/interface/IDimOrmCondition/IDimOrmCondition.htm);


## Описание


Свойство Condition возвращает
 коллекцию условий расширенного поиска.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента RdsDictionaryBox
 с наименованием «RdsDictionaryBox1» и какого-либо компонента UiRdsDictionary
 являющегося источником данных для «RdsDictionaryBox1». В справочнике НСИ,
 который подключен к компоненту UiRdsDictionary,
 имеются атрибуты «Name» и «UserAttr».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    RdsInst: IRdsDictionaryInstance;

	    Search: IRdsDictionaryElementsSearch;

	    Cond: IDimOrmCondition;

	    Crit: IDimTextCriteria;

	    Elems: IRdsDictionaryElements;

	    Elem: IRdsDictionaryElement;

	    i: Integer;

	Begin

	    RdsInst := RdsDictionaryBox1.Source.Instance;

	    Search := RdsInst.CreateSearch;

	    Search.Attributes.Attributes := "Name;UserAttr";

	    Crit := New DimTextCriteria.Create;

	    Crit.CriteriaOptions := TextCriteriaOptions.SearchStringAttributes

	        Or TextCriteriaOptions.FreeText;

	    Crit.Text := "Доход насел";

	    Cond := Search.Condition;

	    Cond.SetTextCriteria(Crit);

	    Elems := RdsInst.Elements;

	    For i := 0 To Elems.Count - 1 Do

	        Elem := Elems.Item(i);

	        Debug.WriteLine(Elem.Name + ": Условиям поиска удовлетворяет - " +

	            Cond.EvaluateRec(Elem.Record).ToString);

	    End For;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет создан объект для
 поиска элементов справочника НСИ. Будет установлено условие, в соответствии
 с которым будет производиться поиск. После этого будет осуществлена проверка
 всех элементов на соответствии условиям поиска. Наименования элементов
 и результат проверки будут выведены в консоль среды разработки.


См. также:


[IRdsDictionaryElementsSearch](IRdsDictionaryElementsSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
