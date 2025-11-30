# IUiPrxTableIslandEventArgs.TableIsland

IUiPrxTableIslandEventArgs.TableIsland
-


# IUiPrxTableIslandEventArgs.TableIsland


## Синтаксис


TableIsland: [IPrxTableIsland](../IPrxTableIsland/IPrxTableIsland.htm);


## Описание


Свойство TableIsland возвращает
 реляционную область данных.


## Пример


Пример рассмотрим на событии, которое наступает после вычисления реляционной
 области данных [EventOnAfterExecuteTableIsland](../IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterExecuteTableIsland.htm).


			Sub EventOnAfterExecuteTableIsland(Args: IUiPrxTableIslandEventArgs);

Begin

    WinApplication.InformationBox(Args.TableIsland.Id);

End Sub EventOnAfterExecuteTableIsland;


При наступлении события будет выдано информационное сообщение, содержащее
 идентификатор реляционной области данных.


См. также:


[IUiPrxTableIslandEventArgs](IUiPrxTableIslandEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
