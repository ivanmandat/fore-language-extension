# DataGridCompareEventArgs.Create

DataGridCompareEventArgs.Create
-


# DataGridCompareEventArgs.Create


## Синтаксис


Create(Grid: [IDataGrid](../../Interface/IDataGrid/IDataGrid.htm);
 Column: [IDataGridColumn](../../Interface/IDataGridColumn/IDataGridColumn.htm);
 LeftRow: Integer; RightRow: Integer);


## Параметры


Grid. Таблица, для которой
 сгенерировано событие;


Column. Столбец, по значениям
 которого осуществляется пользовательская сортировка;


LeftRow. Индекс первой сравниваемой
 строки;


RightRow. Индекс второй сравниваемой
 строки.


## Описание


Конструктор Create создает аргумент
 события, наступающего при сравнении значений двух строк во время пользовательской
 сортировки в компоненте [DataGrid](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm).


См. также:


[DataGridCompareEventArgs](DataGridCompareEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
