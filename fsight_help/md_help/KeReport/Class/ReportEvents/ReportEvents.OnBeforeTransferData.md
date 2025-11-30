# ReportEvents.OnBeforeTransferData

ReportEvents.OnBeforeTransferData
-


# ReportEvents.OnBeforeTransferData


## Синтаксис


OnBeforeTransferData(Report: [IPrxReport](../../Interface/IPrxReport/IPrxReport.htm);
 Var Cancel: Boolean);


## Параметры


Report. Регламентный отчёт,
 сгенерировавший событие;


Cancel. Признак отмены сохранения
 данных.


## Описание


Метод OnBeforeTransferData реализует
 событие, происходящее перед сохранением измененных значений всех областей
 данных отчёта в источник.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Данные сохранены
	 не будут;


	- False. Данные будут
	 сохранены. Значение по умолчанию.


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
