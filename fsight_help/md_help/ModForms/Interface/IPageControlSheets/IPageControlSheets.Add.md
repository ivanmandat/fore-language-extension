# IPageControlSheets.Add

IPageControlSheets.Add
-


# IPageControlSheets.Add


## Синтаксис


Add(Sheet: [IPageControlSheet](../IPageControlSheet/IPageControlSheet.htm));


## Параметры


Sheet. Новая
 страница, которая будет добавлена в конец коллекции страниц компонента.


## Описание


Метод Add добавляет новую страницу
 в коллекцию страниц компонента.


## Комментарии


Добавление осуществляется в конец коллекции.


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

    Sheet.Text := "Дополнительные настройки";

    Sheets.Add(Sheet);

End Sub Button1OnClick;


При нажатии на кнопку в коллекцию страниц будет добавлена новая страница.
 Вкладка страницы будет размещена в конце списка.


См. также:


[IPageControlSheets](IPageControlSheets.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
