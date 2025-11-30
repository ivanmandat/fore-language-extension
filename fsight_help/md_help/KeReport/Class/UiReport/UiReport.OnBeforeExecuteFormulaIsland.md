# UiReport.OnBeforeExecuteFormulaIsland

UiReport.OnBeforeExecuteFormulaIsland
-


# UiReport.OnBeforeExecuteFormulaIsland


## Синтаксис


OnBeforeExecuteFormulaIsland(Sender: Object; Args:
 [IUiPrxFormulaIslandCancelEventArgs](../../Interface/IUiPrxFormulaIslandCancelEventArgs/IUiPrxFormulaIslandCancelEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeforeExecuteFormulaIsland
 наступает перед вычислением области формул регламентного отчёта.


## Комментарии


Используя свойство [IUiPrxFormulaIslandCancelEventArgs.Cancel](../../Interface/IUiPrxFormulaIslandCancelEventArgs/IUiPrxFormulaIslandCancelEventArgs.Cancel.htm)
 аргумента события, можно разрешить или запретить вычисление области формул.


См. также:


[UiReport](UiReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
