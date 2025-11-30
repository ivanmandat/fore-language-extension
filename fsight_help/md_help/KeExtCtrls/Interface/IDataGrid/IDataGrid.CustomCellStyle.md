# IDataGrid.CustomCellStyle

IDataGrid.CustomCellStyle
-


# IDataGrid.CustomCellStyle


## Синтаксис


CustomCellStyle: Boolean;


## Описание


Свойство CustomCellStyle определяет
 признак генерации событий для отрисовки отдельных ячеек.


## Комментарии


Если свойству установлено значение True,
 то при отрисовке ячеек для каждой из ячейки будет генерироваться событие
 [OnGetCellStyle](../../Class/DataGrid/DataGrid.OnGetCellStyle.htm).
 Ячейки будут отрисовываться поочередно по столбцам.


Если свойству установлено значение False,
 то при отрисовки ячеек будет генерироваться событие [OnGetRowStyle](../../Class/DataGrid/DataGrid.OnGetRowStyle.htm).


Для отрисовки выделенных строк и сфокусированной ячейки будут использоваться
 события [OnGetSelectedRowStyle](../../Class/DataGrid/DataGrid.OnGetSelectedRowStyle.htm)
 и [OnGetSelectedCellStyle](../../Class/DataGrid/DataGrid.OnGetSelectedCellStyle.htm).
 Порядок их срабатывания также зависит от расположения ячеек и состояния
 данного флага.


См. также:


[IDataGrid](IDataGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
