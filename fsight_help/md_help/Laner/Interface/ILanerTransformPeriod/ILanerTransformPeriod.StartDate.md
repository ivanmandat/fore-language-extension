# ILanerTransformPeriod.StartDate

ILanerTransformPeriod.StartDate
-


# ILanerTransformPeriod.StartDate


## Синтаксис


StartDate: DateTime;


## Описание


Свойство StartDate определяет
 дату начала идентификации значений ряда.


## Комментарии


Значение свойства можно изменять, если [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 содержит значение [LnTransformPeriodSet.StartDate](../../Enums/LnTransformPeriodSet.htm)
 или [LnTransformPeriodSet.All](../../Enums/LnTransformPeriodSet.htm).
 Поэтому значение [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 необходимо задавать до изменения значения StartDate.


Если значение свойства не задано, то дату начала идентификации определяет
 свойство [ILanerTransformPeriod.StartDateParamId](ILanerTransformPeriod.StartDateParamId.htm).


Если заданы свойства StartDate
 и [ILanerTransformPeriod.StartDateParamId](ILanerTransformPeriod.StartDateParamId.htm),
 то дату начала идентификации определяет то свойство, которое задано последним.


## Пример


Использование свойства приведено в примере для [ILanerCalculateSerie.TransformPeriod](../ILanerCalculateSerie/ILanerCalculateSerie.TransformPeriod.htm).


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
