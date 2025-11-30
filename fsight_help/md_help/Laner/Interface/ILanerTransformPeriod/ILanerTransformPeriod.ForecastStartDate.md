# ILanerTransformPeriod.ForecastStartDate

ILanerTransformPeriod.ForecastStartDate
-


# ILanerTransformPeriod.ForecastStartDate


## Синтаксис


ForecastStartDate: DateTime;


## Описание


Свойство ForecastStartDate определяет
 дату начала прогнозирования значений ряда.


## Комментарии


Значение свойства можно изменять, если [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 имеет значение [LnTransformPeriodSet.ForecastStartDate](../../Enums/LnTransformPeriodSet.htm)
 или [LnTransformPeriodSet.All](../../Enums/LnTransformPeriodSet.htm). Поэтому
 [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 необходимо задавать до ForecastStartDate.


Недопустимо одновременное использование свойств ForecastStartDate
 и [IdentificationEndDate](ILanerTransformPeriod.IdentificationEndDate.htm).


## Пример


Использование свойства приведено в примере для [ILanerCalculateSerie.TransformPeriod](../ILanerCalculateSerie/ILanerCalculateSerie.TransformPeriod.htm).


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
