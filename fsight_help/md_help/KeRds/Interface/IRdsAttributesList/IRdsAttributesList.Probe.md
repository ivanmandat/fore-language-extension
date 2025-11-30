# IRdsAttributesList.Probe

IRdsAttributesList.Probe
-


# IRdsAttributesList.Probe


## Синтаксис


Probe: [IDimSimpleAttrProbe](KeDims.chm::/interface/IDimSimpleAttrProbe/IDimSimpleAttrProbe.htm);


## Описание


Свойство Probe возвращает коллекцию
 атрибутов реализуемую интерфейсом [IDimSimpleAttrProbe](KeDims.chm::/interface/IDimSimpleAttrProbe/IDimSimpleAttrProbe.htm).


## Комментарии


Данное свойство возвращает объект, который будет осуществлять проверку
 атрибутов, по значениям которых будет осуществляться поиск. Использование
 данного свойство позволяет избежать пользовательской реализации метода
 [IDimSimpleAttrProbe.Probe](KeDims.chm::/interface/IDimSimpleAttrProbe/IDimSimpleAttrProbe.Probe.htm).
 Для атрибутов, входящих в текущую коллекцию, метод будет возвращать значение
 True, для всех остальных атрибутов
 - False.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента RdsDictionaryBox
 с наименованием «RdsDictionaryBox1» и какого-либо компонента UiRdsDictionary
 являющегося источником данных для «RdsDictionaryBox1». В справочнике НСИ,
 который подключен к компоненту UiRdsDictionary,
 имеются атрибуты «Name» и «UserAttr».


			    Sub Button10OnClick(Sender: Object; Args: IMouseEventArgs);

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

    End Sub Button10OnClick;


После выполнения примера при нажатии на кнопку будет создан объект для
 поиска элементов справочника НСИ. Будет установлено условие, в соответствии
 с которым будет производиться поиск. Определение атрибутов, по значениям
 которых будет производиться поиск, осуществляется с использованием метода
 Probe. В качестве объекта осуществляющего проверку используется системный
 объект, полученный на основе коллекции атрибутов, содержащейся в переменной
 AttrsList. После поиска в переменной «Keys» будет содержаться массив ключей
 найденных элементов.


См. также:


[IRdsAttributesList](IRdsAttributesList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
