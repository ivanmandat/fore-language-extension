# ILanerTransformPeriod.EndDateParamId

ILanerTransformPeriod.EndDateParamId
-


# ILanerTransformPeriod.EndDateParamId


## Синтаксис


EndDateParamId: String;


## Описание


Свойство EndDateParamId определяет
 идентификатор параметра, задающего дату конца прогнозирования значений
 ряда.


## Комментарии


Значение свойства можно изменять, если [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 содержит значение [LnTransformPeriodSet.EndDate](../../Enums/LnTransformPeriodSet.htm)
 или [LnTransformPeriodSet.All](../../Enums/LnTransformPeriodSet.htm).
 Поэтому значение [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 необходимо задавать до изменения значения EndDateParamId.


Если значение свойства не задано, то дату конца прогнозирования значений
 ряда определяет свойство [ILanerTransformPeriod.EndDate](ILanerTransformPeriod.EndDate.htm).


Если заданы свойства EndDateParamId
 и [ILanerTransformPeriod.EndDate](ILanerTransformPeriod.EndDate.htm),
 то дату конца прогнозирования значений ряда определяет то свойство, которое
 задано последним.


## Пример


Использование свойства приведено в примере для [ITsParamProvider.Params](KeTransform.chm::/Interface/ITsParamProvider/ITsParamProvider.Params.htm).


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
