# IMsAggregationFilter.AdvancedFilter

IMsAggregationFilter.AdvancedFilter
-


# IMsAggregationFilter.AdvancedFilter


## Синтаксис


		AdvancedFilter: [IMsDimIteratorAdvancedFilter](../IMsDimIteratorAdvancedFilter/IMsDimIteratorAdvancedFilter.htm);


## Описание


Свойство AdvancedFilter
 возвращает параметры расширенного фильтра.


## Комментарии


Расширенный фильтр позволяет выбрать элементы, соответствующие заданному
 условию.


Если в фильтре уже заданы элементы в одном из свойств [IMsAggregationFilter.AggregationGroup](IMsAggregationFilter.AggregationGroup.htm),
 [IMsAggregationFilter.AggregationParamID](IMsAggregationFilter.AggregationParamID.htm)
 или [IMsAggregationFilter.AggregationSelection](IMsAggregationFilter.AggregationSelection.htm),
 то именно они проверяются на соответствие заданному условию. Если элементы
 не заданы, то на соответствие условию проверяются все элементы справочника.


## Пример


Использование свойства приведено в примере для [IMsMatrixAggregationTransform.Aggregator](../IMsMatrixAggregationTransform/IMsMatrixAggregationTransform.Aggregator.htm).


См. также:


[IMsAggregationFilter](IMsAggregationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
