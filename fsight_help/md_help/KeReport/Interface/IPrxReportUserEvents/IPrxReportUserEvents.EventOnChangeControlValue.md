# IPrxReportUserEvents.EventOnChangeControlValue

IPrxReportUserEvents.EventOnChangeControlValue
-


# IPrxReportUserEvents.EventOnChangeControlValue


## Синтаксис


EventOnChangeControlValue(Args: [IUiPrxControlEventArgs](../IUiPrxControlEventArgs/IUiPrxControlEventArgs.htm));


## Параметры


Args - параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnChangeControlValue
 реализует событие, происходящее при изменении значения элемента управления
 регламентного отчёта.


## Пример


			Sub EventOnChangeControlValue(Args: IUiPrxControlEventArgs);

Begin

    WinApplication.InformationBox("Изменено значение элемента управления " + Args.Control.Id);

End Sub EventOnChangeControlValue;


При наступлении события будет выдано информационное сообщение, содержащее
 идентификатор элемента управления, значение которого было изменено.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
