# ILanerTransformPeriod.PeriodSet

ILanerTransformPeriod.PeriodSet
-


# ILanerTransformPeriod.PeriodSet


## Синтаксис


PeriodSet: [LnTransformPeriodSet](../../Enums/LnTransformPeriodSet.htm);


## Описание


Свойство PeriodSet
 определяет параметры периода расчета, которые будут изменены для данного
 вычисляемого ряда.


## Комментарии


Значение PeriodSet влияет на
 то, какие параметры расчета будут переопределены для вычисляемого ряда,
 а какие будут браться из рабочей книги.


Период расчета включает следующие параметры:


		 Для вычисляемого ряда
		 Для рабочей книги


		 Дата начала идентификации
		 [ILanerTransformPeriod.StartDate](ILanerTransformPeriod.StartDate.htm)
		 [ILaner.StartDate](../ILaner/ILaner.StartDate.htm)


		 Дата начала прогнозирования
		 [ILanerTransformPeriod.ForecastStartDate](ILanerTransformPeriod.ForecastStartDate.htm)
		 -


		 Дата конца прогнозирования
		 [ILanerTransformPeriod.EndDate](ILanerTransformPeriod.EndDate.htm)
		 [ILaner.EndDate](../ILaner/ILaner.EndDate.htm)


PeriodSet всегда необходимо
 задавать до изменения значений параметра расчета вычисляемого ряда.


## Пример


Использование свойства приведено в примере для [ILanerCalculateSerie.TransformPeriod](../ILanerCalculateSerie/ILanerCalculateSerie.TransformPeriod.htm).


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
