# DataGrid.OnGetSelectedRowStyle

DataGrid.OnGetSelectedRowStyle
-


# DataGrid.OnGetSelectedRowStyle


## Синтаксис


OnGetSelectedRowStyle(Sender: Object; Args: [IDataGridSelRowStyleEventArgs](../../Interface/IDataGridSelRowStyleEventArgs/IDataGridSelRowStyleEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetSelectedRowStyle
 наступает при отрисовке выделенной строки.


## Комментарии


В зависимости от расположения ячеек и состояния флага [CustomCellStyle](../../Interface/IDataGrid/IDataGrid.CustomCellStyle.htm)
 порядок событий, используемых для отрисовки, будет определяться автоматически.


См. также:


[DataGrid](DataGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
