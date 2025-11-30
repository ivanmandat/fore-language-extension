# ReportEvents.OnBeforeSortEaxGrid

ReportEvents.OnBeforeSortEaxGrid
-


# ReportEvents.OnBeforeSortEaxGrid


## Синтаксис


OnBeforeSortEaxGrid (EaxGrid: [IEaxGrid](KeExpress.chm::/Interface/IEaxGrid/IEaxGrid.htm));
 Var Cancel: Boolean);


## Параметры


EaxGrid. Параметр, возвращающий
 аналитическую область данных, сгенерировавшую событие;


Cancel. Признак отмены сортировки
 данных.


## Описание


Метод OnBeforeSortEaxGrid реализует
 событие, происходящее перед сортировкой данных в аналитической области.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Данные отсортированы
	 не будут;


	- False. Данные будут
	 отсортированы. Значение по умолчанию


При вызове метода одновременно в ядре обрабатывается событие IPrxReportUserEvents.EventOnBeforeSortEaxGrid,
 которое при желании можно переопределить.


## Пример


Использование метода приведено в примере для [IPrxReportUserEvents.EventOnBeforeSortEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeSortEaxGrid.htm).


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
