# IMsDetermAggregationTransform.Threshold

IMsDetermAggregationTransform.Threshold
-


# IMsDetermAggregationTransform.Threshold


## Синтаксис


		Threshold: Double;


## Описание


Свойство Threshold определяет
 значение, используемое для расчёта порога агрегации.


## Комментарии


Значение данного свойства должно быть в интервале [0, 1].


При задании свойства должно быть также определено значение свойства
 [IMsDetermAggregationTransform.CompositionRelevanceExpression](IMsDetermAggregationTransform.CompositionRelevanceExpression.htm).
 Если сумма агрегируемых значений, разделённая на сумму значений [IMsDetermAggregationTransform.CompositionRelevanceExpression](IMsDetermAggregationTransform.CompositionRelevanceExpression.htm),
 меньше значения Threshold то агрегация
 не будет рассчитываться.


## Пример


Использование свойства приведено в примере для [IMsDetermAggregationTransform.AggregationExpression](IMsDetermAggregationTransform.AggregationExpression.htm).


См. также:


[IMsDetermAggregationTransform](IMsDetermAggregationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
