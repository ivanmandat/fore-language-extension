# IDimAttributesList.Probe

IDimAttributesList.Probe
-


# IDimAttributesList.Probe


## Синтаксис


Probe: [IDimAttributeProbe](../IDimAttributeProbe/IDimAttributeProbe.htm);


## Описание


Свойство Probe возвращает коллекцию
 атрибутов, реализуемую интерфейсом [IDimAttributeProbe](../IDimAttributeProbe/IDimAttributeProbe.htm).


## Комментарии


Данное свойство возвращает объект, который будет осуществлять проверку
 атрибутов, по значениям которых будет осуществляться поиск. Использование
 данного свойство позволяет избежать пользовательской реализации метода
 [IDimAttributeProbe.Probe](../IDimAttributeProbe/IDimAttributeProbe.Probe.htm).
 Для атрибутов, входящих в текущую коллекцию, метод будет возвращать значение
 True, для всех остальных атрибутов
 - False.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента DimensionTree с наименованием
 «DimensionTree1» и компонента UiDimension с наименованием «UiDimension1»
 являющегося источником данных для «DimensionTree1». В справочнике, который
 подключен к компоненту «UiDimension1», имеются атрибуты «Name» и «UserAttr».


			    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        Man: IDimOrmManager;

        Cond: IDimOrmCondition;

        DimInst: IDimInstance;

        AttrsList: IDimAttributesList;

        Crit: IDimTextCriteria;

    Begin

        DimInst := UiDimension1.DimInstance;

        AttrsList := New DimAttributesList.Create(DimInst.Dimension, "NAME;USERATTR");

        Crit := New DimTextCriteria.Create;

        //Определение атрибутов через метод Probe

        Crit.CriteriaOptions := TextCriteriaOptions.SearchProbeAttributes

            Or TextCriteriaOptions.FreeText;

        //Указание объекта, который будет определять атрибуты для поиска

        //Для атрибутов Name и UserAttr метод вернет значение True т.к. они включены в коллекцию

        Crit.Probe := AttrsList.Probe;

        Crit.Text := "First";

        Man := New DimOrmManager.Create;

        Cond := Man.CreateCondition(DimInst.Dimension, Crit);

        Cond.SelectElements(DimensionTree1.Selection);

    End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет создан объект для
 поиска элементов справочника. Будет установлено условие, в соответствии
 с которым будет производиться поиск. Определение атрибутов, по значениям
 которых будет производиться поиск, осуществляется с использованием метода
 Probe. В качестве объекта осуществляющего проверку используется системный
 объект, полученный на основе коллекции атрибутов, содержащейся в переменной
 AttrsList. После поиска найденные элементы будут отмечены в компоненте
 «DimensionTree1».


См. также:


[IDimAttributesList](IDimAttributesList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
