# ReportEvents.OnBeforeExecuteTableIsland

ReportEvents.OnBeforeExecuteTableIsland
-


# ReportEvents.OnBeforeExecuteTableIsland


## Синтаксис


OnBeforeExecuteTableIsland(TableIsland: [IPrxTableIsland](../../Interface/IPrxTableIsland/IPrxTableIsland.htm);
 Var Cancel: Boolean);


## Параметры


TableIsland.
 Реляционная область данных, сгенерировавшая событие;


Cancel. Признак отмены вычисления
 реляционной области данных.


## Описание


Метод OnBeforeExecuteTableIsland
 реализует событие, которое наступает перед вычислением реляционной области
 данных.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Реляционная область
	 вычислена не будет;


	- False. Реляционная область
	 будет вычислена.


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
