# IRibbonIntegerEdit.Value

IRibbonIntegerEdit.Value
-


# IRibbonIntegerEdit.Value


## Синтаксис


Value: Integer;


## Описание


Свойство Value определяет значение, которое установлено в элементе управления.


## Комментарии


Данное значение должно быть в диапазоне [[MinValue](IRibbonIntegerEdit.MinValue.htm); [MaxValue](IRibbonIntegerEdit.MaxValue.htm)].


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента Ribbon с наименованием «Ribbon1». На ленте компонента «Ribbon1» создана вкладка и панель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RPanel: IRibbonPanel;

    RIntEdit: IRibbonIntegerEdit;

Begin

    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

    RIntEdit := New RibbonIntegerEdit.Create;

    RPanel.Elements.Add(RIntEdit);

    RIntEdit.MinValue := -100;

    RIntEdit.MaxValue := 100;

    RIntEdit.Value := 10;

End Sub Button1OnClick;


При нажатии на кнопку на панели ленты будет создан редактор целочисленных значений. Для редактора будет задано текущее значение, а также минимальное и максимальное значение, которые могут быть введены.


См. также:


[IRibbonIntegerEdit](IRibbonIntegerEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
