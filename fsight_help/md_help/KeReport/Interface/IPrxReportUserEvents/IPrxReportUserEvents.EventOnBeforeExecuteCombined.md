# IPrxReportUserEvents.EventOnBeforeExecuteCombined

IPrxReportUserEvents.EventOnBeforeExecuteCombined
-


# IPrxReportUserEvents.EventOnBeforeExecuteCombined


## Синтаксис


EventOnBeforeExecuteCombined(Args: [IUiPrxReportEventArgs](../IUiPrxReportEventArgs/IUiPrxReportEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeExecuteCombined
 реализует событие, происходящее перед объединением запросов при вычислении
 источников данных регламентного отчёта.


## Комментарии


В регламентном отчёте объединение запросов при вычислении источников
 аналитической области данных выполняется для параллельного расчёта [результирующих
 матриц кубов](KeCubes.chm::/Interface/ICubeCombinedExecutor/ICubeCombinedExecutor.htm).


Для выполнения объединения запросов при вычислении источников аналитической
 области данных используйте свойство [IEaxDataArea.UseCombinedExecutor](KeExpress.chm::/Interface/IEaxDataArea/IEaxDataArea.UseCombinedExecutor.htm)
 со значением True.


Для объединения запросов при вычислении источников данных в форме ввода
 используется флажок «[Объединять
 запросы при вычислении](DataEntryForms.chm::/desktop/Starting/Starting.htm#multiexecutor)».


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
