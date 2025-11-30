# ITabView.EmulateCellClick

ITabView.EmulateCellClick
-


# ITabView.EmulateCellClick


## Синтаксис


EmulateCellClick(Row: Integer; Column: Integer);


## Параметры


Row. Индекс строки. Допустимое
 значение параметра находится в диапазоне [0, [RowsCount](../ITabSheet/ITabSheet.RowsCount.htm));


Column. Индекс столбца. Допустимое
 значение параметра находится в диапазоне [0, [ColumnsCount](../ITabSheet/ITabSheet.ColumnsCount.htm)).


## Описание


Метод EmulateCellClick осуществляет
 эмуляцию щелчка по указанной ячейке.


## Комментарии


При выполнении метода для компонента, с таблицей которого осуществляется
 работа, генерируется событие OnCellClick.
 Описание события для различных компонентов представлено в следующих подразделах:


	- [LanerBox.OnCellClick](KeExpress.chm::/Class/LanerBox/LanerBox.OnCellClick.htm);


	- [ReportBox.OnCellClick](KeReport.chm::/Class/ReportBox/ReportBox.OnCellClick.htm);


	- [TabSheetBox.OnCellClick](../../Class/TabSheetBox/TabSheetBox.OnCellClick.htm).


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
