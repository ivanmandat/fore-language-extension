# IPrxSliceDimension.AggregationEnabled

IPrxSliceDimension.AggregationEnabled
-


# IPrxSliceDimension.AggregationEnabled


## Синтаксис


AggregationEnabled: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство AggregationEnabled
 определяет признак использования агрегации для элементов измерения.


## Комментарии


Актуально, если измерение расположено в фиксированной области.


Если свойству установлено значение TriState.OnOption, то в измерении
 будет доступна множественная отметка элементов, когда измерение расположено
 в фиксированной области. При этом будет осуществляться агрегация данных
 по выделенным элементам. Метод агрегации указывается в свойстве [AggregatorOperation](IPrxSliceDimension.AggregatorOperation.htm),
 либо [UseDSAggregationValue](IPrxSliceDimension.UseDSAggregationValue.htm).


## Пример


Использование свойства приведено в примере для [IPrxSliceDimension.Selection](IPrxSliceDimension.Selection.htm).


См. также:


[IPrxSliceDimension](IPrxSliceDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
