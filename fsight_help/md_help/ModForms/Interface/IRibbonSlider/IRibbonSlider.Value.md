# IRibbonSlider.Value

IRibbonSlider.Value
-


# IRibbonSlider.Value


## Синтаксис


Value: Integer;


## Описание


Свойство Value определяет значение, установленное в элементе управления.


## Комментарии


Данное значение должно быть в диапазоне [[Minimum](IRibbonSlider.Minimum.htm); [Maximum](IRibbonSlider.Maximum.htm)].


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента Ribbon с наименованием «Ribbon1». На ленте компонента «Ribbon1» создана вкладка и панель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RPanel: IRibbonPanel;

    RSlider: IRibbonSlider;

Begin

    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

    RSlider := New RibbonSlider.Create;

    RPanel.Elements.Add(RSlider);

    RSlider.InnerWidth := 200;

    RSlider.Minimum := 0;

    RSlider.Maximum := 100;

    RSlider.Orientation := RibbonElementOrientation.Horizontal;

    RSlider.Value := 10;

    RSlider.VisibleButtons := True;

End Sub Button1OnClick;


При нажатии на кнопку на панели ленты будет создан ползунок. Для ползунка будут заданы текущее значение, максимально и минимальное допустимое значение, а также длина элемента управления в пикселях и его ориентация.


См. также:


[IRibbonSlider](IRibbonSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
