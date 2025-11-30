# IMsFormulaGenTermPoint.IsInternal

IMsFormulaGenTermPoint.IsInternal
-


# IMsFormulaGenTermPoint.IsInternal


## Синтаксис


IsInternal(Index: Integer): Boolean;


## Параметры


Index. Индекс значения.


## Описание


Свойство IsInternal возвращает
 признак попадания точки в область расчёта.


## Комментарии


Допустимые значения:


	- True. Точка попадает
	 в область расчёта.


	- False. Точка не попадает
	 в область расчёта.


Область расчёта формируется за счёт задания [фильтра](../IMsProblemCalculationSettings/IMsProblemCalculationSettings.ExecutionFilter.htm)
 по источникам данных. Если фильтр не задан, то областью расчёта считаются
 все точки источника данных. Если фильтр задан, то для точек, которые попадают
 в фильтр, свойство вернёт значение True,
 иначе - False.


Если генерируются формулы для табличной области, то на точку, для которой
 свойство возвращает True, можно
 ссылаться по [координате](IMsFormulaGenTermPoint.Coord.htm)
 как на ячейку таблицы, если свойство возвращает значение False,
 то точки в таблице нет и необходимо использовать в формуле её [значение](IMsFormulaGenTermPoint.Value.htm).


См. также:


[IMsFormulaGenTermPoint](IMsFormulaGenTermPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
