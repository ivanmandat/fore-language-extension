# IPageControlSheets.Insert

IPageControlSheets.Insert
-


# IPageControlSheets.Insert


## Синтаксис


Insert(Index: Integer; Sheet: [IPageControlSheet](../IPageControlSheet/IPageControlSheet.htm));


## Параметры


Index. Позиция, в которую будет
 вставлена страница.


Sheet. Страница, которая будет
 вставлена в указанную позицию.


## Описание


Метод Insert осуществляет вставку
 новой страницы в указанную позицию в коллекции.


## Комментарии


Метод применяется только для новых страниц, которые еще не добавлены
 в коллекцию. Для управления размещением существующих страниц используйте
 свойство [IPageControlSheet.SheetIndex](../IPageControlSheet/IPageControlSheet.SheetIndex.htm).


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

    Sheet := New PageControlSheet.Create;

    Sheet.Text := "Введение";

    Sheets.Insert(0, Sheet);

End Sub Button1OnClick;


При нажатии на кнопку в коллекцию страниц будет вставлена новая страница.
 Вкладка страницы будет размещена в начале списка.


См. также:


[IPageControlSheets](IPageControlSheets.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
