# IDimSimpleAttrProbe.Probe

IDimSimpleAttrProbe.Probe
-


# IDimSimpleAttrProbe.Probe


## Синтаксис


Probe(Dimension: [IOrmSimpleClass](KeOrm.chm::/Interface/IOrmSimpleClass/IOrmSimpleClass.htm);


Attribute: [IOrmSimpleAttr](KeOrm.chm::/Interface/IOrmSimpleAttr/IOrmSimpleAttr.htm)):
 Boolean;


## Параметры


Dimension. Объект, реализуемый
 интерфейсом [IOrmSimpleClass](KeOrm.chm::/Interface/IOrmSimpleClass/IOrmSimpleClass.htm).
 В качестве значения параметра будет передаваться справочник либо справочник
 НСИ репозитория.


Attribute. Атрибут, реализуемый
 интерфейсом [IOrmSimpleAttr](KeOrm.chm::/Interface/IOrmSimpleAttr/IOrmSimpleAttr.htm),
 который необходимо проверить. В качестве значения параметра будет передаваться
 атрибут справочника либо атрибут справочника НСИ.


## Описание


Метод Probe проверяет атрибут
 и возвращает признак возможности поиска по данному атрибуту.


## Комментарии


Данный метод должен быть переопределен в пользовательском классе. Если
 метод возвращает значение True,
 то поиск будет осуществлен по данному атрибуту, в противном случае - нет.


Для использования метода необходимо свойство [IDimTextCriteria.CriteriaOptions](../IDimTextCriteria/IDimTextCriteria.CriteriaOptions.htm)
 установить в SearchProbeAttributes.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента RdsDictionaryBox
 с наименованием «RdsDictionaryBox1» и какого-либо компонента UiRdsDictionary,
 являющегося источником данных для «RdsDictionaryBox1». В справочнике НСИ,
 который подключен к компоненту UiRdsDictionary,
 имеются атрибуты «Name» и «UserAttr».


	Class TestForm: Form

	    Button1: Button;

	    UiRdsDictionary1: UiRdsDictionary;

	    RdsDictionaryBox1: RdsDictionaryBox;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        RdsInst: IRdsDictionaryInstance;

	        Search: IRdsDictionaryElementsSearch;

	        Crit: IDimTextCriteria;

	        Keys: IRdsDictionaryElementArray;

	    Begin

	        RdsInst := RdsDictionaryBox1.Source.Instance;

	        Search := RdsInst.CreateSearch;

	        Crit := New DimTextCriteria.Create;

	        Crit.CriteriaOptions := TextCriteriaOptions.SearchProbeAttributes

	            Or TextCriteriaOptions.FreeText;

	        Crit.SimpleProbe := New MyProbe.Create;

	        Crit.Text := "Доход насел";

	        Search.SetTextCriteria(Crit);

	        Keys := Search.FindAll;

	    End Sub Button1OnClick;


	End Class TestForm;


	Class MyProbe: Object, IDimSimpleAttrProbe

	    Public Function Probe(Dimension: IOrmSimpleClass; Attribute: IOrmSimpleAttr): Boolean;

	    Begin

	        Return (Attribute.Id = "NAME") Or (Attribute.Id = "USERATTR");

	    End Function Probe;

	End Class MyProbe;


После выполнения примера при нажатии на кнопку будет создан объект для
 поиска элементов справочника НСИ. Будет установлено условие, в соответствии
 с которым будет производиться поиск. Определение атрибутов, по значениям
 которых будет производиться поиск, осуществляется с использованием пользовательского
 метода Probe. В качестве объекта осуществляющего проверку используется
 системный объект пользовательского класса «MyProbe». После поиска в переменной
 «Keys» будет содержаться массив ключей найденных элементов.


См. также:


[IDimSimpleAttrProbe](IDimSimpleAttrProbe.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
