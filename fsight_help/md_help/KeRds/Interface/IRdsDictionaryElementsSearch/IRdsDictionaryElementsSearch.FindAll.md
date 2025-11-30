# IRdsDictionaryElementsSearch.FindAll

IRdsDictionaryElementsSearch.FindAll
-


# IRdsDictionaryElementsSearch.FindAll


## Синтаксис


FindAll: [IRdsDictionaryElementArray](../IRdsDictionaryElementArray/IRdsDictionaryElementArray.htm);


## Описание


Метод FindAll осуществляет поиск
 всех элементов, удовлетворяющих условиям поиска и возвращает массив, содержащий
 ключи найденных элементов.


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

	    Keys: IRdsDictionaryElementArray;

	Begin

	    RdsInst := RdsDictionaryBox1.Source.Instance;

	    Search := RdsInst.CreateSearch;

	    Search.Attributes.Attributes := "Name;UserAttr";

	    Crit := New DimTextCriteria.Create;

	    Crit.CriteriaOptions := TextCriteriaOptions.SearchStringAttributes

	        Or TextCriteriaOptions.FreeText;

	    Crit.Text := "Доход
	 насел";

	    Search.SetTextCriteria(Crit);

	    Keys := Search.FindAll;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет осуществлен поиск
 элементов справочника НСИ с указанными параметрами критерия поиска. Поиск
 будет осуществляться по значениям указанных атрибутов. В переменной «Keys»
 будет содержаться массив ключей найденных элементов.


См. также:


[IRdsDictionaryElementsSearch](IRdsDictionaryElementsSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
