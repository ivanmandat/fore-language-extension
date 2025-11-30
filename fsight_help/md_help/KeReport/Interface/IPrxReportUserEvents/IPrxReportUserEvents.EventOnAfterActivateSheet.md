# IPrxReportUserEvents.EventOnAfterActivateSheet

IPrxReportUserEvents.EventOnAfterActivateSheet
-


# IPrxReportUserEvents.EventOnAfterActivateSheet


## Синтаксис


EventOnAfterActivateSheet(Args: [IUiPrxActivateSheetEventArgs](../IUiPrxActivateSheetEventArgs/IUiPrxActivateSheetEventArgs.htm));


## Параметры


Args - параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnAfterActivateSheet
 реализует событие, происходящее после смены активного листа регламентного
 отчета.


## Пример


			Sub EventOnAfterActivateSheet(Args: IUiPrxActivateSheetEventArgs);

Begin

    WinApplication.InformationBox("Был активным " + Args.OldSheet.Name + #13 + #10 + "Стал активным " + Args.NewSheet.Name);

End Sub EventOnAfterActivateSheet;


После наступления события будет выдано информационное сообщение содержащее
 информацию о том, какой лист был активным, а какой стал.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
