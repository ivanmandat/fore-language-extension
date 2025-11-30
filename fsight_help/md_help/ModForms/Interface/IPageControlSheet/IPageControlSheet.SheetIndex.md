# IPageControlSheet.SheetIndex

IPageControlSheet.SheetIndex
-


# IPageControlSheet.SheetIndex


## Синтаксис


SheetIndex: Integer;


## Описание


Свойство SheetIndex определяет индекс текущей страницы в коллекции.


## Комментарии


Изменяя значение данного свойства, можно управлять расположением страницы в общей коллекции. Расположение страницы в коллекции влияет на расположение вкладки страницы в визуальном интерфейсе компонента. При увеличении значения вкладка смещается ближе к правому краю, при уменьшении - к левому краю компонента. Допустимое значение свойства находится в диапазоне [0, [IPageControlSheets.Count](../IPageControlSheets/IPageControlSheets.Count.htm) - 1].


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента PageControl с наименованием «PageControl1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Sheets: IPageControlSheets;

    Sheet: IPageControlSheet;

Begin

    Sheets := PageControl1.Pages;

    Sheet := Sheets.Item(Sheets.Count - 1);

    Sheet.SheetIndex := 0;

End Sub Button1OnClick;


При нажатии на кнопку последняя страница будет перемещена в начало коллекции. Вкладка страницы визуально также будет перемещена в начало списка.


См. также:


[IPageControlSheet](IPageControlSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
