# IEaxDataArea.UseCombinedExecutor

IEaxDataArea.UseCombinedExecutor
-


# IEaxDataArea.UseCombinedExecutor


## Синтаксис


UseCombinedExecutor: Boolean;


## Описание


Свойство UseCombinedExecutor
 определяет, используется ли объединение запросов при вычислении источников
 аналитической области данных.


## Комментарии


Свойство используется для параллельного расчёта [результирующих
 матриц кубов](KeCubes.chm::/Interface/ICubeCombinedExecutor/ICubeCombinedExecutor.htm).


Допустимые значения:


	- True. При вычислении
	 источников аналитической области данных выполняется параллельный расчёт
	 результирующих матриц кубов;


	- False. При вычислении
	 источников аналитической области данных выполняется последовательный
	 расчёт результирующих матриц кубов.


Перед выполнением расчёта аналитической области данных можно задать
 событие, которое будет выполняться перед расчётом, с помощью метода [IPrxReportUserEvents.EventOnBeforeExecuteCombined](KeReport.chm::/Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeExecuteCombined.htm).


Для объединения запросов при вычислении источников данных в форме ввода
 используется флажок «[Объединять
 запросы при вычислении](DataEntryForms.chm::/Desktop/Starting/Starting.htm#multiexecutor)».


См. также:


[IEaxDataArea](IEaxDataArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
