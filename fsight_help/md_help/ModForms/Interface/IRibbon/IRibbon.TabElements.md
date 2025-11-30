# IRibbon.TabElements

IRibbon.TabElements
-


# IRibbon.TabElements


## Синтаксис


TabElements: [IRibbonElementsCollection](../IRibbonElementsCollection/IRibbonElementsCollection.htm);


## Описание


Свойство TabElements возвращает
 коллекцию общих элементов управления ленты.


## Комментарии


Общие элементы управления расположены
 с правой стороны на уровне заголовков вкладок ленты. Общие элементы не
 имеют принадлежности к какой-либо вкладке.


В коллекцию общих элементов могут быть добавлены следующие элементы
 управления:


	- [Кнопки](../IRibbonButton/IRibbonButton.htm);


	- [Комбинированные
	 списки](../IRibbonComboBox/IRibbonComboBox.htm);


	- [Кнопки
	 для вызова комбинированного меню](../IRibbonPaletteButton/IRibbonPaletteButton.htm);


	- [Редакторы текста](../IRibbonEdit/IRibbonEdit.htm);


	- [Кнопки
	 для выбора цвета](../IRibbonColorButton/IRibbonColorButton.htm);


	- [Редакторы
	 целочисленных значений](../IRibbonIntegerEdit/IRibbonIntegerEdit.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента Ribbon
 с наименованием «Ribbon1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TabElements: IRibbonElementsCollection;

    Btn: IRibbonButton;

    Edit: IRibbonEdit;

Begin

    TabElements := Ribbon1.TabElements;

    Btn := New RibbonButton.Create;

    Edit := New RibbonEdit.Create;

    //Добавление элементов в коллекцию

    TabElements.Add(Btn);

    TabElements.Add(Edit);

    //Изменение необходимых свойств

    Btn.Text := "New";

End Sub Button1OnClick;


При нажатии на кнопку в коллекцию общих элементов управления ленты будут
 добавлены два элемента.


См. также:


[IRibbon](IRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
