# IDataGridRows.ImageIndex

IDataGridRows.ImageIndex
-


# IDataGridRows.ImageIndex


## Синтаксис


ImageIndex(Row: Integer; Column: Integer): Integer;


## Параметры


Row. Индекс строки таблицы;


Column. Индекс столбца таблицы.


## Описание


Свойство ImageIndex определяет
 индекс изображения, которое будет использоваться в ячейке таблицы.


## Комментарии


Строка и столбец, на пересечении которых расположена ячейка, передаются
 посредством параметров Row и
 Column соответственно. Для использования
 изображений в ячейках необходимо предварительно установить значение свойства
 [IDataGrid.Images](../IDataGrid/IDataGrid.Images.htm).


Положение изображения относительно текста в ячейке определяется в свойстве
 [IDataGridStyle.ImageAlign](../IDataGridStyle/IDataGridStyle.ImageAlign.htm)
 стиля, используемого для оформления строки Row.


См. также:


[IDataGridRows](IDataGridRows.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
