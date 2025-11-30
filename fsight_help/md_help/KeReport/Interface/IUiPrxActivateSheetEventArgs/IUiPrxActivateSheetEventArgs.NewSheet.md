# IUiPrxActivateSheetEventArgs.NewSheet

IUiPrxActivateSheetEventArgs.NewSheet
-


# IUiPrxActivateSheetEventArgs.NewSheet


## Синтаксис


NewSheet: [IPrxSheet](../IPrxSheet/IPrxSheet.htm);


## Описание


Свойство NewSheet возвращает
 лист регламентного отчета, который стал активным.


## Пример


Пример рассмотрим на событии, которое наступает после смены активного
 листа: [EventOnAfterActivateSheet](../IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterActivateSheet.htm).


			Sub EventOnAfterActivateSheet(Args: IUiPrxActivateSheetEventArgs);

Begin

    WinApplication.InformationBox("Был активным " + Args.OldSheet.Name + #13 + #10 + "Стал активным " + Args.NewSheet.Name);

End Sub EventOnAfterActivateSheet;


После наступления события будет выдано информационное сообщение содержащее
 информацию о том, какой лист был активным, а какой стал.


См. также:


[IUiPrxActivateSheetEventArgs](IUiPrxActivateSheetEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
