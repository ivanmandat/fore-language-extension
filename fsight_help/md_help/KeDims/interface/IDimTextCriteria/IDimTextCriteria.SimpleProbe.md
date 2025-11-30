# IDimTextCriteria.SimpleProbe

IDimTextCriteria.SimpleProbe
-


# IDimTextCriteria.SimpleProbe


## Синтаксис


SimpleProbe: [IDimSimpleAttrProbe](../IDimSimpleAttrProbe/IDimSimpleAttrProbe.htm);


## Описание


Свойство SimpleProbe определяет
 объект, с помощью которого осуществляется проверка атрибутов, по значениям
 которых будет производиться поиск.


## Комментарии


Данное свойство используется, если необходимо произвести поиск элементов
 в каком-либо справочнике, либо справочнике НСИ. В качестве значения данного
 свойства необходимо указывать объект пользовательского класса, реализующий
 методы интерфейса [IDimSimpleAttrProbe](../IDimSimpleAttrProbe/IDimSimpleAttrProbe.htm).


Примечание.
 В качестве значения данного свойство также можно использовать объект,
 возвращаемый свойством [IRdsAttributesList.Probe](KeRds.chm::/Interface/IRdsAttributesList/IRdsAttributesList.Probe.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента RdsDictionaryBox с наименованием
 RdsDictionaryBox1 и какого-либо компонента UiRdsDictionary являющегося
 источником данных для RdsDictionaryBox1. В справочнике НСИ, который подключен
 к компоненту UiRdsDictionary, имеются атрибуты Name и UserAttr.


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        RdsInst: IRdsDictionaryInstance;

	        Search: IRdsDictionaryElementsSearch;

	        AttrsList: IRdsAttributesList;

	        Crit: IDimTextCriteria;

	        Keys: IRdsDictionaryElementArray;

	    Begin

	        RdsInst := RdsDictionaryBox1.Source.Instance;

	        Search := RdsInst.CreateSearch;

	        AttrsList := Search.Attributes;

	        //Указание атрибутов в коллекции

	        AttrsList.Attributes := "Name;Key";

	        Crit := New DimTextCriteria.Create;

	        //Определение атрибутов через метод Probe

	        Crit.CriteriaOptions := TextCriteriaOptions.SearchProbeAttributes

	            Or TextCriteriaOptions.FreeText;

	        //Указание объекта, который будет определять атрибуты для поиска

	        //Для атрибутов Name и Key метод вернет значение True т.к. они включены в коллекцию

	        Crit.SimpleProbe := AttrsList.Probe;

	        Crit.Text := "401";

	        Search.SetTextCriteria(Crit);

	        Keys := Search.FindAll;

	    End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет создан объект для
 поиска элементов справочника НСИ. Будет установлено условие, в соответствии
 с которым будет производиться поиск. Определение атрибутов, по значениям
 которых будет производиться поиск, осуществляется с использованием метода
 Probe. В качестве объекта осуществляющего проверку используется системный
 объект, полученный на основе коллекции атрибутов, содержащейся в переменной
 AttrsList. После поиска в переменной «Keys» будет содержаться массив ключей
 найденных элементов.


См. также:


[IDimTextCriteria](IDimTextCriteria.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
