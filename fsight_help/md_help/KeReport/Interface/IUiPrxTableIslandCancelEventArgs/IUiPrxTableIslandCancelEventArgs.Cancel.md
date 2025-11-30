# IUiPrxTableIslandCancelEventArgs.Cancel

IUiPrxTableIslandCancelEventArgs.Cancel
-


# IUiPrxTableIslandCancelEventArgs.Cancel


## Синтаксис


Cancel: Boolean;


## Описание


Свойство Cancel определяет,
 будет ли производиться вычисление реляционной области данных.


## Комментарии


При значении данного параметра True
 реляционная область данных регламентного отчета вычислена не будет, при
 значении False - будет вычислена.


## Пример


Пример рассмотрим на событии, которое наступает перед вычислением реляционной
 области данных.


			Sub EventOnBeforeExecuteTableIsland(Args: IUiPrxTableIslandCancelEventArgs);

Begin

    Args.Cancel := Not WinApplication.ConfirmationBox("Вычислять реляционную область " + Args.TableIsland.Id + "?")

End Sub EventOnBeforeExecuteTableIsland;


При наступлении события будет выдан диалог подтверждения вычисления
 реляционной области данных, содержащий идентификатор области. При положительном
 ответе реляционная область данных будет вычислена, в противном случае
 нет.


См. также:


[IUiPrxTableIslandCancelEventArgs](IUiPrxTableIslandCancelEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
