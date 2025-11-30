# DataGrid.OnGetCellStyle

DataGrid.OnGetCellStyle
-


# DataGrid.OnGetCellStyle


## Синтаксис


OnGetCellStyle(Sender: Object; Args: [IDataGridCellStyleEventArgs](../../Interface/IDataGridCellStyleEventArgs/IDataGridCellStyleEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetCellStyle наступает
 при отрисовке ячейки.


## Комментарии


В зависимости от расположения ячеек и состояния флага [CustomCellStyle](../../Interface/IDataGrid/IDataGrid.CustomCellStyle.htm)
 порядок событий, используемых для отрисовки, будет определяться автоматически.


См. также:


[DataGrid](DataGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
