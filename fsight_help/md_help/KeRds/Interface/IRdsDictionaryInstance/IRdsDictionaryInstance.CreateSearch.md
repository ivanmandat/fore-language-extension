# IRdsDictionaryInstance.CreateSearch

IRdsDictionaryInstance.CreateSearch
-


# IRdsDictionaryInstance.CreateSearch


## Синтаксис


CreateSearch: [IRdsDictionaryElementsSearch](../IRdsDictionaryElementsSearch/IRdsDictionaryElementsSearch.htm);


## Описание


Метод CreateSearch создает объект,
 осуществляющий поиск элементов справочника НСИ с расширенными возможностями
 поиска.


## Комментарии


В отличие от объекта поиска, создаваемого с помощью метода [CreateLookup](IRdsDictionaryInstance.CreateLookup.htm),
 данный поиск будет осуществляться на основании различных критериев.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента RdsDictionaryBox
 с идентификатором «RdsDictionaryBox1» и какого-либо компонента UiRdsDictionary
 являющегося источником данных для «RdsDictionaryBox1». В справочнике НСИ,
 который подключен к компоненту UiRdsDictionary,
 имеются атрибуты «Name» и «UserAttr».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    RdsInst: IRdsDictionaryInstance;

	    Search: IRdsDictionaryElementsSearch;

	    Crit: IDimTextCriteria;

	    Res: IRdsDictionaryElementList;

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

	    Res := Search.FindAllList;

	    Debug.WriteLine(Res.Count);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет осуществлен поиск
 элементов справочника НСИ с указанными параметрами критерия поиска. Поиск
 будет осуществляться по значениям указанных атрибутов. Количество найденных
 элементов будет выведено в консоль среды разработки.


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
