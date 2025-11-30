# IPrxReportUserEvents.EventOnAfterExecuteFormulaIsland

IPrxReportUserEvents.EventOnAfterExecuteFormulaIsland
-


# IPrxReportUserEvents.EventOnAfterExecuteFormulaIsland


## Синтаксис


EventOnAfterExecuteFormulaIsland(Args: [IUiPrxFormulaIslandEventArgs](../IUiPrxFormulaIslandEventArgs/IUiPrxFormulaIslandEventArgs.htm));


## Параметры


Args - параметр, позволяющий
 определить параметры события.


## Описание


Метод EventOnAfterExecuteFormulaIsland
 реализует событие, происходящее после вычисления области формул регламентного
 отчета.


## Пример


	Sub EventOnAfterExecuteFormulaIsland(Args: IUiPrxFormulaIslandEventArgs);

	Begin

	    WinApplication.InformationBox("Область формул: " + Args.FormulaIsland.Id);

	End Sub EventOnAfterExecuteFormulaIsland;


После наступления события будет выдано информационное сообщение, содержащее
 идентификатор области формул.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
