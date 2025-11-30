# IOleDocumentBoxEventArgs.DispId

IOleDocumentBoxEventArgs.DispId
-


# IOleDocumentBoxEventArgs.DispId


## Синтаксис


DispId: Integer;


## Описание


Свойство DispId возвращает диспетчерский
 идентификатор события, произошедшего для объекта, загруженного в компонент.


## Комментарии


Диспетчерский идентификатор (DISPID) является уникальным значением,
 которое закрепляется за определенным событием при разработке. Необходимые
 значения диспетчерских идентификаторов для конкретных событий можно получить
 в специализированной документации на COM-объект, с которым осуществляется
 работа.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и компонента OleDocumentBox.
 В компонент OleDocumentBox загружен
 лист Microsoft Excel.


			Sub OleDocumentBox1OnOleDocumentEvent(Sender: IOleDocumentBox; Args: IOleDocumentBoxEventArgs);

Var

    Sheet, Range: Variant;

    Row, Column: Integer;

    s: String;

Begin

    If Args.DispId = 1559 Then //1559 - это идентификатор события SheetBeforeDoubleClick
 рабочей книги Microsoft Excel

        Sheet := Args.Params.Param(0);

        s := Sheet.GetProperty("Name") As String;

        Range := Args.Params.Param(1);

        Column := Range.GetProperty("Column") As Integer;

        Row := Range.GetProperty("Row") As Integer;

        //Запрет перехода в режим редактирования

        Args.Params.Param(2) := True;

    End If;

End Sub OleDocumentBox1OnOleDocumentEvent;


Во время выполнения события OnOleDocumentEvent будет фиксироваться двойной
 щелчок мыши по ячейке листа. Событие обрабатывается для всех листов книги
 и имеет идентификатор - «1559», в нем передаются три параметра:


	- Лист, на котором генерируется событие;


	- Ячейка, по которой осуществлен двойной щелчок. Данный параметр
	 является диапазоном, содержит множество параметров. Для его разбора
	 используется метод GetProperty;


	- Логический параметр, определяющий будет ли запрещен переход
	 в режим редактирования ячейки.


В переменной «s» будет содержаться наименование листа, в переменных
 «Row» и «Column» будут содержаться номера строки и столбца ячейки, по
 которой осуществлен двойной щелчок мыши. Переход в режим редактирования
 будет запрещен.


См. также:


[IOleDocumentBoxEventArgs](IOleDocumentBoxEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
