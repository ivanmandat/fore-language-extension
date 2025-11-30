# IUiPrxFormulaIslandCancelEventArgs.Cancel

IUiPrxFormulaIslandCancelEventArgs.Cancel
-


# IUiPrxFormulaIslandCancelEventArgs.Cancel


## Синтаксис


Cancel: Boolean;


## Описание


Свойство Cancel определяет,
 будет ли производиться определенное действие для области формул. При установке
 значения True действие для области
 формул выполнено не будет.


## Пример


В примере рассмотрено событие, которое наступает перед вычислением области
 формул.


			Sub EventOnBeforeExecuteFormulaIsland(Args: IUiPrxFormulaIslandCancelEventArgs);

Begin

    Args.Cancel := Not WinApplication.ConfirmationBox("Вычислять область " + Args.FormulaIsland.Id + "?")

End Sub EventOnBeforeExecuteFormulaIsland;


При наступлении события будет выдан диалог подтверждения вычисления
 области формул, содержащий идентификатор области. При положительном ответе
 область формул будет вычислена, в противном случае нет.


См. также:


[IUiPrxFormulaIslandCancelEventArgs](IUiPrxFormulaIslandCancelEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
