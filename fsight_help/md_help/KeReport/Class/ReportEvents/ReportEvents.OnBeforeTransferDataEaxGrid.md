# ReportEvents.OnBeforeTransferDataEaxGrid

ReportEvents.OnBeforeTransferDataEaxGrid
-


# ReportEvents.OnBeforeTransferDataEaxGrid


## Синтаксис


OnBeforeTransferDataEaxGrid (EaxGrid: [IEaxGrid](KeExpress.chm::/Interface/IEaxGrid/IEaxGrid.htm);
 Var Cancel: Boolean);


## Параметры


EaxGrid. Аналитическая область
 данных, сгенерировавшая событие;


Cancel. Признак отмены сохранения
 данных.


## Описание


Метод OnBeforeTransferDataEaxGrid
 реализует событие, происходящее перед сохранением изменённых значений
 аналитической области данных.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Данные сохранены
	 не будут;


	- False. Данные будут
	 сохранены. Значение по умолчанию.


При вызове метода одновременно в ядре обрабатывается событие IPrxReportUserEvents.EventOnBeforeTransferDataEaxGrid,
 которое при желании можно переопределить.


## Пример


Использование метода приведено в примере для [IPrxReportUserEvents.EventOnBeforeTransferDataEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeTransferDataEaxGrid.htm).


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
