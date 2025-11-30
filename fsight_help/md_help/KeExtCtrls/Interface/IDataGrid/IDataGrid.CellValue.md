# IDataGrid.CellValue

IDataGrid.CellValue
-


# IDataGrid.CellValue


## Синтаксис


CellValue(Row: Integer; Column: Integer): Variant;


## Параметры


Row - индекс строки ячейки.


Column - индекс столбца ячейки.


## Описание


Свойство CellValue определяет
 значение ячейки, координаты которой передаются в качестве входных параметров
 Row и Column.


## Комментарии


Данное свойство возвращает значение ячейки, фактически отображаемой
 в таблице. При этом учитывается установленная фильтрация и сортировка.


Если необходимо получить значение ячейки в источнике данных, используйте
 свойство [ColumnValue](../IDataGridRow/IDataGridRow.ColumnValue.htm).


См. также:


[IDataGrid](IDataGrid.htm) | [IDataGridRow.ColumnValue](../IDataGridRow/IDataGridRow.ColumnValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
