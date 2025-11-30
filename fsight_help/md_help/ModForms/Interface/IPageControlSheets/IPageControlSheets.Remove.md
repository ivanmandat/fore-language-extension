# IPageControlSheets.Remove

IPageControlSheets.Remove
-


# IPageControlSheets.Remove


## Синтаксис


Remove(Sheet: [IPageControlSheet](../IPageControlSheet/IPageControlSheet.htm));


## Параметры


Sheet. Страница,
 которая будет удалена из коллекции.


## Описание


Метод Remove удаляет указанную
 страницу компонента.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента PageControl
 с наименованием «PageControl1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Sheets: IPageControlSheets;

    Sheet: IPageControlSheet;

Begin

    Sheets := PageControl1.Pages;

    Sheet := Sheets.Item(Sheets.Count - 1);

    Sheets.Remove(Sheet);

End Sub Button1OnClick;


При нажатии на кнопку будет удалена последняя страница компонента «PageControl1».


См. также:


[IPageControlSheets](IPageControlSheets.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
