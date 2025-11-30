# ILanerTransformPeriod.IdentificationEndDateParamId

ILanerTransformPeriod.IdentificationEndDateParamId
-


# ILanerTransformPeriod.IdentificationEndDateParamId


## Синтаксис


IdentificationEndDateParamId: String;


## Описание


Свойство IdentificationEndDateParamId
 определяет идентификатор параметра, задающего дату окончания периода идентификации.


## Комментарии


Значение свойства можно изменять, если [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 содержит значение [LnTransformPeriodSet.IdentificationEndDate](../../Enums/LnTransformPeriodSet.htm) или [LnTransformPeriodSet.All](../../Enums/LnTransformPeriodSet.htm).
 Поэтому значение [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 необходимо задавать до изменения значения IdentificationEndDateParamId.


Если значение свойства не задано, то дату окончания периода идентификации
 определяет свойство [ILanerTransformPeriod.IdentificationEndDate](ILanerTransformPeriod.IdentificationEndDate.htm).


Если заданы свойства IdentificationEndDateParamId
 и [ILanerTransformPeriod.IdentificationEndDate](ILanerTransformPeriod.IdentificationEndDate.htm),
 то дату окончания периода идентификации определяет то свойство, которое
 задано последним.


## Пример


Использование свойства приведено в примере для [ITsParamProvider.Params](KeTransform.chm::/Interface/ITsParamProvider/ITsParamProvider.Params.htm).


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
