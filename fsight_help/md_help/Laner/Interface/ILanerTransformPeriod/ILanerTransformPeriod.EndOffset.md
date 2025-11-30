# ILanerTransformPeriod.EndOffset

ILanerTransformPeriod.EndOffset
-


# ILanerTransformPeriod.EndOffset


## Синтаксис


EndOffset: Integer;


## Описание


Свойство EndOffset определяет
 число периодов, на которое сдвигается дата окончания периода прогноза.


## Комментарии


EndOffset учитывается, если
 [ILanerTransformPeriod.AutoPeriod](ILanerTransformPeriod.AutoPeriod.htm)
 использует одно из следующих значений перечисления [TransformModelAutoPeriodOptions](KeCubes.chm::/Enums/TransformModelAutoPeriodOptions.htm):


	- ForecastEndByIdentEnd;


	- ForecastEndByFact;


	- ForecastEndAsNow;


	- AllByFact.


## Пример


Использование свойства приведено в примере для [ILanerTransformPeriod.AutoPeriod](ILanerTransformPeriod.AutoPeriod.htm).


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
