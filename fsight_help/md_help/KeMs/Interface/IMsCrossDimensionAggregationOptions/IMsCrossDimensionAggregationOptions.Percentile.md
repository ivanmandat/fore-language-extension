# IMsCrossDimensionAggregationOptions.Percentile

IMsCrossDimensionAggregationOptions.Percentile
-


# IMsCrossDimensionAggregationOptions.Percentile


## Синтаксис


		Percentile: Double;


## Описание


Свойство Percentile определяет
 процентиль, используемую для определения порога приемлемости.


## Комментарии


Процентиль - мера расположения данных выборки или распределения. Говорят,
 что n-й процентиль - это такое
 значение, ниже которого расположено n
 процентов наблюдений данной переменной. Следовательно, 40-й процентиль
 (или 4-й дециль) - это значение, ниже которого расположено 40% результатов
 наблюдений; 50-й процентиль называется медианой, а 25-й и 75-й процентили
 - нижним и верхним квартилями соответственно.


Диапазон допустимых значений: [0, 100]. Значение по умолчанию - 50.


При использовании процентили пустые значения исключаются из расчёта.
 Если свойство принимает значение «0», то агрегация возвращает пустые значения.


## Пример


Использование свойства приведено в примере для [IMsCrossDimensionAggregationTransform.AppliesToExpression](../IMsCrossDimensionAggregationTransform/IMsCrossDimensionAggregationTransform.AppliesToExpression.htm).


См. также:


[IMsCrossDimensionAggregationOptions](IMsCrossDimensionAggregationOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
