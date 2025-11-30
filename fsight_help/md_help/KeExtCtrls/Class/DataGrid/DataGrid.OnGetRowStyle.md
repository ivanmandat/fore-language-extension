# DataGrid.OnGetRowStyle

DataGrid.OnGetRowStyle
-


# DataGrid.OnGetRowStyle


## Синтаксис


OnGetRowStyle(Sender: Object; Args: [IDataGridRowStyleEventArgs](../../Interface/IDataGridRowStyleEventArgs/IDataGridRowStyleEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetRowStyle наступает
 при отрисовке строки.


## Комментарии


В зависимости от расположения ячеек и состояния флага [CustomCellStyle](../../Interface/IDataGrid/IDataGrid.CustomCellStyle.htm)
 порядок событий, используемых для отрисовки, будет определяться автоматически.


См. также:


[DataGrid](DataGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
