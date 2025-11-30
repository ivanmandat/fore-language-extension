# ILanerTransformPeriod.EndDate

ILanerTransformPeriod.EndDate
-


# ILanerTransformPeriod.EndDate


## Синтаксис


EndDate: DateTime;


## Описание


Свойство EndDate определяет
 дату конца прогнозирования значений ряда.


## Комментарии


Значение свойства можно изменять, если [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 содержит значение [LnTransformPeriodSet.EndDate](../../Enums/LnTransformPeriodSet.htm)
 или [LnTransformPeriodSet.All](../../Enums/LnTransformPeriodSet.htm).
 Поэтому значение [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 необходимо задавать до изменения значения EndDate.


Если значение свойства не задано, то дату конца прогнозирования значений
 ряда определяет свойство [ILanerTransformPeriod.EndDateParamId](ILanerTransformPeriod.EndDateParamId.htm).


Если заданы свойства EndDate
 и [ILanerTransformPeriod.EndDateParamId](ILanerTransformPeriod.EndDateParamId.htm),
 то дату конца прогнозирования значений ряда определяет то свойство, которое
 задано последним.


## Пример


Использование свойства приведено в примере для [ILanerCalculateSerie.TransformPeriod](../ILanerCalculateSerie/ILanerCalculateSerie.TransformPeriod.htm).


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
