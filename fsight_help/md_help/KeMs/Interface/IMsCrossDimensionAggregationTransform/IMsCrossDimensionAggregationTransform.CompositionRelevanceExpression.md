# IMsCrossDimensionAggregationTransform.CompositionRelevanceExpression

IMsCrossDimensionAggregationTransform.CompositionRelevanceExpression
-


# IMsCrossDimensionAggregationTransform.CompositionRelevanceExpression


## Синтаксис


		CompositionRelevanceExpression: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство CompositionRelevanceExpression
 определяет выражение для расчёта релевантности агрегации.


## Комментарии


При задании данного выражения должно быть определено значение свойства
 [IMsCrossDimensionAggregationOptions.Threshold](../IMsCrossDimensionAggregationOptions/IMsCrossDimensionAggregationOptions.Threshold.htm).
 Если сумма значений CompositionRelevanceExpression,
 разделённая на сумму всех значений, меньше значения [IMsCrossDimensionAggregationOptions.Threshold](../IMsCrossDimensionAggregationOptions/IMsCrossDimensionAggregationOptions.Threshold.htm),
 то агрегация не будет рассчитываться.


Коллекцию элементов, которые могут быть использованы в выражении, возвращает
 свойство [IMsCrossDimensionAggregationTransform.CompositionRelevanceOperands](IMsCrossDimensionAggregationTransform.CompositionRelevanceOperands.htm).


## Пример


Использование свойства приведено в примере для [IMsCrossDimensionAggregationTransform.AppliesToExpression](IMsCrossDimensionAggregationTransform.AppliesToExpression.htm).


См. также:


[IMsCrossDimensionAggregationTransform](IMsCrossDimensionAggregationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
