# IPrxReportUserEvents.EventOnBeforeExecuteFormulaIsland

IPrxReportUserEvents.EventOnBeforeExecuteFormulaIsland
-


# IPrxReportUserEvents.EventOnBeforeExecuteFormulaIsland


## Синтаксис


EventOnBeforeExecuteFormulaIsland(Args: [IUiPrxFormulaIslandCancelEventArgs](../IUiPrxFormulaIslandCancelEventArgs/IUiPrxFormulaIslandCancelEventArgs.htm));


## Параметры


Args - параметр, позволяющий
 определить параметры события.


## Описание


Метод EventOnBeforeExecuteFormulaIsland
 реализует событие, происходящее перед вычислением области формул регламентного
 отчета.


## Пример


	Sub EventOnBeforeExecuteFormulaIsland(Args: IUiPrxFormulaIslandCancelEventArgs);

	Begin

	    Args.Cancel := Not WinApplication.ConfirmationBox("Вычислять область " + Args.FormulaIsland.Id + "?")

	End Sub EventOnBeforeExecuteFormulaIsland;


При наступлении события будет выдан диалог подтверждения вычисления
 области формул, содержащий идентификатор области. При положительном ответе
 область формул будет вычислена, в противном случае нет.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
