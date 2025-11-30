# CoordinateTransformer.UseSignDivision

CoordinateTransformer.UseSignDivision
-


# CoordinateTransformer.UseSignDivision


## Синтаксис


UseSignDivision: Boolean;


## Описание


Свойство UseSignDivision определяет
 признак использования нормализации данных.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setUseSignDivision,
 а возвращается с помощью метода getUseSignDivision.


Допустимые значения:


	- true.
	 Положительные числовые данные нормализуются в диапазоне от 0 до максимального
	 значения (устанавливается свойством MaxResult),
	 а отрицательные - от минимального значения (устанавливается свойством
	 MinResult) до 0;


	- false.
	 Данные не нормализуются (по умолчанию).


## Пример


Пример использования приведён на странице описания [конструктора
 класса MapBarAxis](dhtmlMapChart.chm::/Classes/Map/MapBarAxis/Constructor_MapBarAxis.htm).


См. также:


[CoordinateTransformer](CoordinateTransformer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
