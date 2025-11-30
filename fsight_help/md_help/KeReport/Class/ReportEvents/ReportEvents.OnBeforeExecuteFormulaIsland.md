# ReportEvents.OnBeforeExecuteFormulaIsland

ReportEvents.OnBeforeExecuteFormulaIsland
-


# ReportEvents.OnBeforeExecuteFormulaIsland


## Синтаксис


OnBeforeExecuteFormulaIsland(FormulaIsland: [IPrxFormulaIsland](../../Interface/IPrxFormulaIsland/IPrxFormulaIsland.htm);
 Var Cancel: Boolean);


## Параметры


FormulaIsland. Область формул,
 которая будет вычислена;


Cancel. Признак отмены вычисления
 области формул.


## Описание


Метод OnBeforeExecuteFormulaIsland
 реализует событие, наступающее перед вычислением области формул.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Область формул
	 вычислена не будет;


	- False. Область формул
	 будет вычислена.


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
