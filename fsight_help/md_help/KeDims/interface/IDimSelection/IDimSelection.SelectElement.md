# IDimSelection.SelectElement

IDimSelection.SelectElement
-


# IDimSelection.SelectElement


## Синтаксис


SelectElement(Element: Integer; Recursive: Boolean);


## Параметры


Element. Индекс элемента справочника,
 который необходимо добавить в отметку.


Recursive. Параметр, определяющий,
 будут ли добавляться в отметку дочерние элементы. Если в качестве значения
 передается True, то в отметку
 также будут добавлены все дочерние элементы указанного элемента.


## Описание


Метод SelectElement осуществляет
 добавление элемента с индексом Element
 в отметку.


## Комментарии


Если выделение указанного элемента невозможно (например, в параметре
 Element указан индекс несуществующего
 элемента), то генерируется исключительная ситуация. Для добавления элементов
 в отметку без вывода сообщений о возможных исключительных ситуациях используйте
 метод [IDimSelection.SelectElementWithoutExcep](IDimSelection.SelectElementWithoutExcep.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiDimension
 с наименованием «UiDimension1» и компонента DimensionTree
 с наименованием «DimensionTree1». В качестве источника данных для «DimensionTree1»
 установлен «UiDimension1». К компоненту «UiDimension1» подключен справочник
 территориальных образований «D_TO».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Inst: IDimInstance;

    Attr: IDimAttribute;

    AttrInst: IDimAttributeInstance;

    i: Integer;

Begin

    Inst := UiDimension1.DimInstance;

    Attr := Inst.Dimension.Attributes.Name;

    AttrInst := Inst.Attributes.FindByKey(Attr.Key);

    i := AttrInst.LookupValue("Свердловская область");

    If i <> -1 Then

        DimensionTree1.Selection.SelectElement(i, False);

        DimensionTree1.MakeVisible(i);

    End If;

End Sub Button1OnClick;


При нажатии на кнопку среди элементов справочника будет осуществлён
 поиск. Поиск будет осуществляться по наименованию. Искомое значение -
 «Свердловская область». Если элемент будет найден, то он будет отмечен
 в компоненте «DimensionTree1». Дерево элементов компонента будет прокручено
 таким образом, чтобы найденный элемент был виден.


См. также:


[IDimSelection](IDimSelection.htm) | [IDimSelection.SelectElementWithoutExcep](IDimSelection.SelectElementWithoutExcep.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
