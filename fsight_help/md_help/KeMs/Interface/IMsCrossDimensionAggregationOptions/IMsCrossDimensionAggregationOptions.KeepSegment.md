# IMsCrossDimensionAggregationOptions.KeepSegment

IMsCrossDimensionAggregationOptions.KeepSegment
-


# IMsCrossDimensionAggregationOptions.KeepSegment


## Синтаксис


		KeepSegment: Boolean;


## Описание


Свойство KeepSegment определяет
 признак расчёта функции KeepSegment.


## Комментарии


Допустимые значения:


	- True. Рассчитывать функцию.
	 Расчёт выполняется сразу после расчёта агрегации;


	- False. Не рассчитывать
	 функцию.


Функция KeepSegment возвращает ряд, урезанный до диапазона по заданной
 дате:


	- если дата попадает на пустую точку ряда, то функция возвращает
	 пустой ряд;


	- если дата попадает на точку ряда со значением, то функция возвращает
	 интервал, ограниченный ближайшими пустыми значениями справа и слева
	 от данной точки.


## Пример


Использование свойства приведено в примере для [IMsCrossDimensionAggregationTransform.AppliesToExpression](../IMsCrossDimensionAggregationTransform/IMsCrossDimensionAggregationTransform.AppliesToExpression.htm).


См. также:


[IMsCrossDimensionAggregationOptions](IMsCrossDimensionAggregationOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
