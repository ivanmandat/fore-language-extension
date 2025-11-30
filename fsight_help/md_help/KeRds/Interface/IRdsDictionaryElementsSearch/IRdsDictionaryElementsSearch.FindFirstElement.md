# IRdsDictionaryElementsSearch.FindFirstElement

IRdsDictionaryElementsSearch.FindFirstElement
-


# IRdsDictionaryElementsSearch.FindFirstElement


## Синтаксис


FindFirstElement: [IRdsDictionaryElement](../IRdsDictionaryElement/IRdsDictionaryElement.htm);


## Описание


Метод FindFirstElement осуществляет
 поиск первого элемента, удовлетворяющего условиям поиска и возвращает
 параметры найденного элемента в случае удачного поиска.


## Комментарии


Метод возвращает значение Null
 если элемент не найден.


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

	    Crit: IDimTextCriteria;

	    Elem: IRdsDictionaryElement;

	Begin

	    RdsInst := RdsDictionaryBox1.Source.Instance;

	    Search := RdsInst.CreateSearch;

	    Search.Attributes.Attributes := "Name;UserAttr";

	    Crit := New DimTextCriteria.Create;

	    Crit.CriteriaOptions := TextCriteriaOptions.SearchStringAttributes

	        Or TextCriteriaOptions.FreeText;

	    Crit.Text := "Доход насел";

	    Search.SetTextCriteria(Crit);

	    Elem := Search.FindFirstElement;

	    Debug.WriteLine(Elem.Name);

	    Elem := Search.FindNextElement(Elem);

	    Debug.WriteLine(Elem.Name);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет осуществлен поиск
 первых двух элементов справочника НСИ с указанными параметрами критерия
 поиска. Поиск будет осуществляться по значениям указанных атрибутов. Наименования
 найденных элементов будут выведены в консоль среды разработки.


См. также:


[IRdsDictionaryElementsSearch](IRdsDictionaryElementsSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
