# ReportEvents.OnBeforeTransferDataSheet

ReportEvents.OnBeforeTransferDataSheet
-


# ReportEvents.OnBeforeTransferDataSheet


## Синтаксис


OnBeforeTransferDataSheet(Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Var Cancel: Boolean);


## Параметры


Sheet. Лист отчета, сгенерировавший
 событие;


Cancel. Признак отмены сохранения
 данных.


## Описание


Метод OnBeforeTransferDataSheet
 реализует событие, происходящее перед сохранением измененных значений
 областей данных листа отчета.


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
