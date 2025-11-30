# IRibbonProgressBar.Value

IRibbonProgressBar.Value
-


# IRibbonProgressBar.Value


## Синтаксис


Value: Integer;


## Описание


Свойство Value определяет значение, отображаемое на индикаторе.


## Комментарии


Данное значение должно быть в диапазоне [[Minimum](IRibbonProgressBar.Minimum.htm); [Maximum](IRibbonProgressBar.Maximum.htm)].


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента Ribbon с наименованием «Ribbon1». На ленте компонента «Ribbon1» создана вкладка и панель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RPanel: IRibbonPanel;

    RProgress: IRibbonProgressBar;

Begin

    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

    RProgress := New RibbonProgressBar.Create;

    RPanel.Elements.Add(RProgress);

    RProgress.InnerWidth := 150;

    RProgress.Mode := RibbonProgressBarMode.Normal;

    RProgress.Minimum := 0;

    RProgress.Maximum := 100;

    RProgress.Value := 10;

End Sub Button1OnClick;


При нажатии на кнопку на панели ленты будет создан индикатор процесса. Для индикатора будут заданы текущее значение, максимально и минимальное допустимое значение, а также режим работы и длина элемента управления в пикселях.


См. также:


[IRibbonProgressBar](IRibbonProgressBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
