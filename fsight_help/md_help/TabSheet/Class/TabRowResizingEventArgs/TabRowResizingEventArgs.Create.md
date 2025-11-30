# TabRowResizingEventArgs.Create

TabRowResizingEventArgs.Create
-


# TabRowResizingEventArgs.Create


## Синтаксис


Create(Sheet: [ITabSheetBox](../../Interface/ITabSheetBox/ITabSheetBox.htm); Row: Integer; ResizeType: [TabRowColumnResizeType](../../Enums/TabRowColumnResizeType.htm); Cancel: Boolean);


## Параметры


Sheet. Компонент, для которого генерируется событие.


Row. Строка, для которой генерируется событие.


ResizeType. Действие, в результате которого изменяется размер строки.


Cancel. Признак отмены изменения размера строки.


## Описание


Конструктор Create создает аргумент события, происходящего при каждом видимом изменении размера строки таблицы.


См. также:


[TabRowResizingEventArgs](TabRowResizingEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
