# IDimSelection.SelectElementWithoutExcep

IDimSelection.SelectElementWithoutExcep
-


# IDimSelection.SelectElementWithoutExcep


## Синтаксис


SelectElementWithoutExcep(Element: Integer; Recursive:
 Boolean);


## Параметры


Element. Индекс элемента справочника,
 который необходимо добавить в отметку;


Recursive. Параметр, определяющий,
 будут ли добавляться в отметку дочерние элементы. Если в качестве значения
 передаётся True, то в отметку
 также будут добавлены все дочерние элементы указанного элемента.


## Описание


Метод SelectElementWithoutExcep
 добавляет указанный элемент в отметку без вывода сообщений о возможных
 исключительных ситуациях.


## Комментарии


Если во время отметки возникает какая-либо исключительная ситуация,
 то сообщение о ней не выводится. Отметка при этом изменена не будет. Для
 вывода сообщения об исключительной ситуации используйте метод [IDimSelection.SelectElement](IDimSelection.SelectElement.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента UiDimension с идентификатором
 «UiDimension1» и компонента DimensionTree с идентификатором «DimensionTree1».
 В качестве источника данных для «DimensionTree1» установлен «UiDimension1».
 К компоненту «UiDimension1» подключен справочник территориальных образований
 с идентификатором «D_TO», находящийся в репозитории.


Пример является обработчиком события «OnClick» для кнопки.


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

    DimensionTree1.Selection.SelectElementWithoutExcep(i, False);

End Sub Button1OnClick;


При нажатии на кнопку в справочнике будет осуществлён поиск элемента
 с указанным наименованием. Найденный элемент будет добавлен в отметку.
 Если элемент не был найден, то отметка не будет изменена.


См. также:


[IDimSelection](IDimSelection.htm)
 | [IDimSelection.SelectElement](IDimSelection.SelectElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
