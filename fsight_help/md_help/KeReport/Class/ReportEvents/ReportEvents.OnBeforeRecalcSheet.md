# ReportEvents.OnBeforeRecalcSheet

ReportEvents.OnBeforeRecalcSheet
-


# ReportEvents.OnBeforeRecalcSheet


## Синтаксис


OnBeforeRecalcSheet(Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Var Cancel: Boolean);


## Параметры


Sheet. Лист регламентного отчёта,
 сгенерировавший событие;


Cancel. Признак отмены вычисления
 листа регламентного отчёта.


## Описание


Метод OnBeforeRecalcSheet реализует
 событие, происходящее перед вычислением листа регламентного отчёта.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Лист вычислен
	 не будет;


	- False. Лист будет вычислен.
	 Значение по умолчанию.


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
