# IPrxReportUserEvents.EventOnAfterExecuteTableIsland

IPrxReportUserEvents.EventOnAfterExecuteTableIsland
-


# IPrxReportUserEvents.EventOnAfterExecuteTableIsland


## Синтаксис


EventOnAfterExecuteTableIsland(Args: [IUiPrxTableIslandEventArgs](../IUiPrxTableIslandEventArgs/IUiPrxTableIslandEventArgs.htm));


## Параметры


Args - параметр, позволяющий
 работать с параметрами события


## Описание


Метод EventOnAfterExecuteTableIsland
 реализует событие, которое наступает после вычисления реляционной области
 данных.


## Пример


			Sub EventOnAfterExecuteTableIsland(Args: IUiPrxTableIslandEventArgs);

Begin

    WinApplication.InformationBox(Args.TableIsland.Id);

End Sub EventOnAfterExecuteTableIsland;


При наступлении события будет выдано информационное сообщение, содержащее
 идентификатор реляционной области данных.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
