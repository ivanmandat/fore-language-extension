# UiPrxCellChangeEventArgs.CreateArgs

UiPrxCellChangeEventArgs.CreateArgs
-


# UiPrxCellChangeEventArgs.CreateArgs


## Синтаксис


		CreateArgs (UiRep: [IUiReport](../../Interface/IUiReport/IUiReport.htm);
		 Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
		 Row: Integer; Column: Integer; Value: Variant);


## Параметры


UiRep. Компонент, для которого
 сгенерировано событие;


Sheet. Лист, для которого сгенерировано
 событие;


Row. Строка, для которой сгенерировано
 событие;


Column. Столбец, для которого
 сгенерировано событие;


Value. Значение ячейки.


## Описание


Конструктор CreateArgs создает
 аргумент события [IPrxReportUserEvents.EventOnCellChange](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnCellChange.htm),
 происходящего при изменении значения ячейки.


См. также:


[UiPrxCellChangeEventArgs](UiPrxCellChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
