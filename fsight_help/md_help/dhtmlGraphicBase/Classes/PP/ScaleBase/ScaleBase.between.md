# ScaleBase.between

ScaleBase.between
-


# ScaleBase.between


## Синтаксис


between(lesserIndex: Number, greaterIndex: Number,
 offset: Number, isInactiveItem: Boolean);


## Параметры


lesserIndex. Индекс меньшего
 значения шкалы;


greaterIndex. Индекс большего
 значения шкалы;


offset. Смещение от меньшего
 значения шкалы в долях единицы;


isInactiveItem. Признак того,
 будет ли возвращено значение шкалы, соответствующий элемент которого не
 отображается в легенде. Допустимые значения:


	- true.
	 Значение для элемента, не отображаемого в легенде, возвращено не будет;


	- false.
	 Значение для элемента, не отображаемого в легенде, будет возвращено
	 (по умолчанию).


## Описание


Метод between возвращает промежуточное
 значение шкалы.


## Пример


Пример использования приведён на странице описания [конструктора
 класса PP.AreaVisual](dhtmlMapChart.chm::/Classes/Map/AreaVisual/Constructor_AreaVisual.htm).


См. также:


[ScaleBase](ScaleBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
