# ReportEvents.OnBeforeExecuteDataIsland

ReportEvents.OnBeforeExecuteDataIsland
-


# ReportEvents.OnBeforeExecuteDataIsland


## Синтаксис


OnBeforeExecuteDataIsland(DataIsland: [IPrxDataIsland](../../Interface/IPrxDataIsland/IPrxDataIsland.htm);
 Var Cancel: Boolean);


## Параметры


DataIsland. Область данных
 регламентного отчёта, сгенерировавшая событие;


Cancel. Признак отмены вычисления
 области данных регламентного отчёта.


## Описание


Метод OnBeforeExecuteDataIsland
 реализует событие, происходящее перед вычислением области данных регламентного
 отчёта.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Область данных
	 вычислена не будет;


	- False. Область данных
	 будет вычислена.


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
