# IUiPrxSheetEventArgs.Sheet

IUiPrxSheetEventArgs.Sheet
-


# IUiPrxSheetEventArgs.Sheet


## Синтаксис


Sheet: [IPrxSheet](../IPrxSheet/IPrxSheet.htm);


## Описание


Свойство Sheet возвращает лист
 регламентного отчета, который был вычислен.


## Пример


Пример рассмотрим на событии, которое наступает после вычисления листа.


			Sub EventOnAfterRecalcSheet(Args: IUiPrxSheetEventArgs);

Begin

    WinApplication.InformationBox(Args.Sheet.Name);

End Sub EventOnAfterRecalcSheet;


После наступления события будет выдано информационное сообщение, содержащее
 наименование листа, который был вычислен.


См. также:


[IUiPrxSheetEventArgs](IUiPrxSheetEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
