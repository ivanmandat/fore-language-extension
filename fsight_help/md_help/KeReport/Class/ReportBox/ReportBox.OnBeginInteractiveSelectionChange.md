# ReportBox.OnBeginInteractiveSelectionChange

ReportBox.OnBeginInteractiveSelectionChange
-


# ReportBox.OnBeginInteractiveSelectionChange


## Синтаксис


OnBeginInteractiveSelectionChange(Sender: Object;
 Args: [IReportInteractiveSelectionEventArgs](../../Interface/IReportInteractiveSelectionEventArgs/IReportInteractiveSelectionEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeginInteractiveSelectionChange
 наступает при начале перемещения выделенной области ячеек в таблице.


## Комментарии


Выделенная область начинает перемещаться в двух случаях:


	- было начато перемещение выделенного диапазона ячеек.


	- было начато автозаполнение диапазона на базе какого-либо другого
	 диапазона.


См. также:


[ReportBox](ReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
