# MapChart.UseItemColorForToolTipBorder

MapChart.UseItemColorForToolTipBorder
-


# MapChart.UseItemColorForToolTipBorder


## Синтаксис


UseItemColorForToolTipBorder: Boolean;


## Описание


Свойство UseItemColorForToolTipBorder
 определяет, используется ли для задания цвета границы всплывающей подсказки
 цвет заливки соответствующей области слоя карты.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setUseItemColorForToolTipBorder,
 а возвращается с помощью метода getUseItemColorForToolTipBorder.


Данное свойство определяет цвет границы у всплывающей подсказки для
 области слоя карты, показателей и стрелок на карте.


Допустимые значения:


	- true.
	 Для задания цвета границы всплывающей подсказки используется цвет
	 заливки соответствующей области карты (по умолчанию);


	- false.
	 Для задания цвета границы всплывающей подсказки используется цвет,
	 определяемый свойством Border.


## Пример


Пример использования приведён на странице описания [конструктора
 класса PP.MapBubble](../MapBubble/Constructor_MapBubble.htm).


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
