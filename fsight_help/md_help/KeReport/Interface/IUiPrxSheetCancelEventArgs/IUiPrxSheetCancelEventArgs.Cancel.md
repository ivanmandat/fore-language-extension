# IUiPrxSheetCancelEventArgs.Cancel

IUiPrxSheetCancelEventArgs.Cancel
-


# IUiPrxSheetCancelEventArgs.Cancel


## Синтаксис


Cancel: Boolean;


## Описание


Свойство Cancel определяет,
 будет ли производиться действие (вычисление, сохранение) для листа регламентного
 отчета.


## Комментарии


При значении True действие производится
 не будет, при значении False -
 действие производится.


## Пример


Пример рассмотрим на событии, которое наступает перед вычислением листа


			Sub EventOnBeforeRecalcSheet(Args: IUiPrxSheetCancelEventArgs);

Begin

    Args.Cancel := Not WinApplication.ConfirmationBox("Вычислить " + Args.Sheet.Name + "?");

End Sub EventOnBeforeRecalcSheet;


При наступлении события будет выдан диалог подтверждения вычисления
 листа отчета, содержащий наименование листа. При положительном ответе
 лист будет вычислен, в противном случае нет.


См. также:


[IUiPrxSheetCancelEventArgs](IUiPrxSheetCancelEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
