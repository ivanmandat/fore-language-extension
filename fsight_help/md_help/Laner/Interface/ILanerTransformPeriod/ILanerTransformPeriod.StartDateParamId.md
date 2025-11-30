# ILanerTransformPeriod.StartDateParamId

ILanerTransformPeriod.StartDateParamId
-


# ILanerTransformPeriod.StartDateParamId


## Синтаксис


StartDateParamId: String;


## Описание


Свойство StartDateParamId определяет
 идентификатор параметра, задающего дату начала идентификации значений
 ряда.


## Комментарии


Значение свойства можно изменять, если [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 содержит значение [LnTransformPeriodSet.StartDate](../../Enums/LnTransformPeriodSet.htm)
 или [LnTransformPeriodSet.All](../../Enums/LnTransformPeriodSet.htm).
 Поэтому значение [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 необходимо задавать до изменения значения StartDateParamId.


Если значение свойства не задано, то дату начала идентификации определяет
 свойство [ILanerTransformPeriod.StartDate](ILanerTransformPeriod.StartDate.htm).


Если заданы свойства StartDateParamId
 и [ILanerTransformPeriod.StartDate](ILanerTransformPeriod.StartDate.htm),
 то дату начала идентификации определяет то свойство, которое задано последним.


## Пример


Использование свойства приведено в примере для [ITsParamProvider.Params](KeTransform.chm::/Interface/ITsParamProvider/ITsParamProvider.Params.htm).


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
