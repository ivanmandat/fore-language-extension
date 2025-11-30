# IPrxReportUserEvents.EventOnBeforeExecuteTableIsland

IPrxReportUserEvents.EventOnBeforeExecuteTableIsland
-


# IPrxReportUserEvents.EventOnBeforeExecuteTableIsland


## Синтаксис


EventOnBeforeExecuteTableIsland(Args: [IUiPrxTableIslandCancelEventArgs](../IUiPrxTableIslandCancelEventArgs/IUiPrxTableIslandCancelEventArgs.htm));


## Параметры


Args - параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeExecuteTableIsland
 реализует событие, происходящее перед вычислением реляционной области
 данных.


## Пример


			Sub EventOnBeforeExecuteTableIsland(Args: IUiPrxTableIslandCancelEventArgs);

Begin

    Args.Cancel := Not WinApplication.ConfirmationBox("Вычислять реляционную область " + Args.TableIsland.Id + "?")

End Sub EventOnBeforeExecuteTableIsland;


При наступлении события будет выдан диалог подтверждения вычисления
 реляционной области данных, содержащий идентификатор области. При положительном
 ответе реляционная область данных будет вычислена, в противном случае
 нет.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
