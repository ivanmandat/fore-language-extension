# ILanerTransformPeriod.IdentificationEndOffset

ILanerTransformPeriod.IdentificationEndOffset
-


# ILanerTransformPeriod.IdentificationEndOffset


## Синтаксис


IdentificationEndOffset: Integer;


## Описание


Свойство IdentificationEndOffset
 определяет число периодов, на которое сдвигается дата окончания периода
 идентификации.


## Комментарии


IdentificationEndOffset учитывается,
 если [ILanerTransformPeriod.AutoPeriod](ILanerTransformPeriod.AutoPeriod.htm)
 использует одно из следующих значений перечисления [TransformModelAutoPeriodOptions](KeCubes.chm::/Enums/TransformModelAutoPeriodOptions.htm):


	- IdentEndByFact;


	- IdentEndAsNow;


	- IdentEndByFactStart;


	- IdentEndByIdentStart;


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
