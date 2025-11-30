# IPrxReportUserEvents.EventOnAfterRecalcSheet

IPrxReportUserEvents.EventOnAfterRecalcSheet
-


# IPrxReportUserEvents.EventOnAfterRecalcSheet


## Синтаксис


EventOnAfterRecalcSheet(Args: [IUiPrxSheetEventArgs](../IUiPrxSheetEventArgs/IUiPrxSheetEventArgs.htm));


## Параметры


Args - параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnAfterRecalcSheet
 реализует событие, происходящее после вычисления листа регламентного отчёта.


## Пример


			Sub EventOnAfterRecalcSheet(Args: IUiPrxSheetEventArgs);

Begin

    WinApplication.InformationBox(Args.Sheet.Name);

End Sub EventOnAfterRecalcSheet;


После наступления события будет выдано информационное сообщение, содержащее
 наименование листа, который был вычислен.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
