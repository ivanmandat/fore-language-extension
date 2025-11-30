# IMsDetermAggregationTransform.CompositionRelevanceExpression

IMsDetermAggregationTransform.CompositionRelevanceExpression
-


# IMsDetermAggregationTransform.CompositionRelevanceExpression


## Синтаксис


		CompositionRelevanceExpression: String;


## Описание


Свойство CompositionRelevanceExpression
 определяет выражение, используемое для расчёта порога агрегации.


## Комментарии


При задании данного выражения должно быть определено значение свойства
 [IMsDetermAggregationTransform.Threshold](IMsDetermAggregationTransform.Threshold.htm).
 Если сумма агрегируемых значений, разделенная на сумму значений CompositionRelevanceExpression,
 меньше значения [IMsDetermAggregationTransform.Threshold](IMsDetermAggregationTransform.Threshold.htm),
 то агрегация не будет рассчитываться.


## Пример


Использование свойства приведено в примере для [IMsDetermAggregationTransform.AggregationExpression](IMsDetermAggregationTransform.AggregationExpression.htm).


См. также:


[IMsDetermAggregationTransform](IMsDetermAggregationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
