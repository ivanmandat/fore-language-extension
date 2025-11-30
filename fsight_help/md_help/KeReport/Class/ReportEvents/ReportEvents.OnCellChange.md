# ReportEvents.OnCellChange

ReportEvents.OnCellChange
-


# ReportEvents.OnCellChange


## Синтаксис


OnCellChange(Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Row: Integer; Column: Integer; Value: Variant);


## Параметры


Sheet. Лист отчёта, сгенерировавший
 событие;


Row. Строка, сгенерировавшая
 событие;


Column. Столбец, сгенерировавший
 событие;


Value. Значение ячейки, сгенерировавшей
 событие.


## Описание


Метод OnCellChange реализует
 событие, происходящее при изменении значения ячейки регламентного отчёта.


## Комментарии


При вызове метода одновременно в ядре обрабатывается событие [IPrxReportUserEvents.EventOnCellChange](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnCellChange.htm),
 которое при желании можно переопределить.


## Пример


Использование метода приведено в примере для [IPrxReportUserEvents.EventOnCellChange](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnCellChange.htm).


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
