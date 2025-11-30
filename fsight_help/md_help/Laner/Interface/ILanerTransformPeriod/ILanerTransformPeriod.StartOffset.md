# ILanerTransformPeriod.StartOffset

ILanerTransformPeriod.StartOffset
-


# ILanerTransformPeriod.StartOffset


## Синтаксис


StartOffset: Integer;


## Описание


Свойство StartOffset определяет
 число периодов, на которое сдвигается дата начала периода идентификации.


## Комментарии


StartOffset учитывается, если
 [ILanerTransformPeriod.AutoPeriod](ILanerTransformPeriod.AutoPeriod.htm)
 использует одно из следующих значений перечисления [TransformModelAutoPeriodOptions](KeCubes.chm::/Enums/TransformModelAutoPeriodOptions.htm):


	- IdentStartByFact;


	- IdentStartByIdentEnd;


	- IdentStartAsNow;


	- IdentByFact;


	- AllByFact.


## Пример


Использование свойства приведено в примере для [ILanerTransformPeriod.AutoPeriod](ILanerTransformPeriod.AutoPeriod.htm).


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
