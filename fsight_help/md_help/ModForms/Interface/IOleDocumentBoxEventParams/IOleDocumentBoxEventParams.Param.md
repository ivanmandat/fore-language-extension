# IOleDocumentBoxEventParams.Param

IOleDocumentBoxEventParams.Param
-


# IOleDocumentBoxEventParams.Param


## Синтаксис


Param(Index: Integer): Variant;


## Параметры


Index. Индекс параметра события
 объекта, загруженного в [OleDocumentBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/OleDocumentBox.htm).


## Описание


Свойство Param возвращает параметр
 события объекта, загруженного в [OleDocumentBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/OleDocumentBox.htm).


## Комментарии


Для работы с параметрами используются методы класса Variant.
 Информацию о параметрах конкретного события можно узнать, изучив соответствующий
 класс объекта с помощью сторонних приложений.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и компонента OleDocumentBox.
 В компонент OleDocumentBox загружен лист Microsoft Excel.


			Sub OleDocumentBox1OnOleDocumentEvent(Sender: IOleDocumentBox; Args: IOleDocumentBoxEventArgs);

Var

    Sheet, Range: Variant;

    Row, Column: Integer;

    s: String;

Begin

    If Args.DispId = 1559 Then

        Sheet := Args.Params.Param(0);

        s := Sheet.GetProperty("Name") As String;

        Range := Args.Params.Param(1);

        Column := Range.GetProperty("Column") As Integer;

        Row := Range.GetProperty("Row") As Integer;

        Args.Params.Param(2) := True;

    End If;

End Sub OleDocumentBox1OnOleDocumentEvent;


Во время выполнения события OnOleDocumentEvent будет фиксироваться двойное
 нажатие кнопки мыши по ячейке листа. Данное событие имеет идентификатор
 - "1559", в нем передается три параметра: 1) Лист, на котором
 генерируется событие; 2) Ячейка, по которой осуществлен двойной щелчок
 мыши. Данный параметр является диапазоном, содержит множество параметров.
 Для его разбора используется метод GetProperty; 3) Логический параметр,
 определяющий будет ли осуществляться переход в режим редактирования ячейки.
 В переменной "s" будет содержаться наименование листа, в переменных
 "Row" и "Column" будет содержаться номер строки и
 столбца, соответственно, по которому осуществлен двойной щелчок мыши,
 переход в режим редактирования будет запрещен.


См. также:


[IOleDocumentBoxEventParams](IOleDocumentBoxEventParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
