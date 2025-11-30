# Элемент MapSimpleArrow

Элемент MapSimpleArrow
-


# Элемент MapSimpleArrow


Элемент MapSimpleArrow содержит
 описание простой стрелки. Простая стрелка - экземпляр класса [MapSimpleArrow](../../../../../Classes/Map/MapSimpleArrow/MapSimpleArrow.htm).


[Пример настройки стрелок](Arrow_exmpl.htm)


## Атрибуты элемента MapSimpleArrow


		 Наименование атрибута
		 Тип
		 Описание


		 StartPoint
		 Point
		 Начальная точка стрелки. Учитывается, если значение атрибута
		 StartShape не определено.


		 EndPoint
		 Point
		 Конечная точка стрелки. Учитывается, если значение атрибута
		 EndShape не определено.


		 Angle
		 Double
		 Угол наклона стрелки.


		 Color
		 String
		 Цвет стрелки в формате HTML.


		 StrokeThickness
		 Double
		 Ширина стрелки.


		 StrokeStyle
		 [StrokeStyle](../../../../../Enums/StrokeStyle.htm)
		 Стиль стрелки. Допустимые значения:


			- Solid. Сплошная;


			- Dash. Прерывистая;


			- Dot. Из точек;


			- DashDot. Пунктир
			 (тире-точка-тире);


			- DashDotDot.
			 Пунктир (тире-точка-точка-тире).


		 PointerWidth
		 Double
		 Ширина указателя стрелки в процентах относительно длины
		 стрелки. Допустимые значения от 0 до 1.


		 PointerLength
		 Double
		 Длина указателя стрелки в процентах относительно длины стрелки.
		 Допустимые значения от 0 до 1.


		 Font
		 Font
		 Идентификатор [шрифта](../ItemsDictionary/Fonts/Fonts.htm),
		 описанного в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm), или полное описание шрифта. Может использоваться
		 как элемент для полного описания шрифта. Идентификатор должен
		 располагаться в фигурных скобках:


		Font=”{идентификатор}”.


		 Text
		 String
		 Текст подписи стрелки.


		 TextOrientation
		 [ArrowTextOrientation](../../../../../Enums/ArrowTextOrientation.htm)
		 Ориентация подписи стрелки. Допустимые значения:


			- Horizontal.
			 Горизонтальная;


			- AlongTheArrow.
			 По направлению стрелки.


		 TextBackground
		 Brush
		 Идентификатор [кисти](../ItemsDictionary/Brushes/Brushes.htm),
		 описанной в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm), или полное описание кисти, служащей для заливки
		 подписи стрелки. Может использоваться как элемент для полного
		 описания кисти. Идентификатор должен располагаться в фигурных
		 скобках:


		Background=”{идентификатор}”.


		 StartShape
		 [MapShape](../../../../../Classes/Map/MapShape/MapShape.htm)
		 Идентификатор формы (региона), из которой выходит стрелка.
		 Формат: StartShape=”{ShapeId}”.


		 EndShape
		 [MapShape](../../../../../Classes/Map/MapShape/MapShape.htm)
		 Идентификатор формы (региона), в которую входит стрелка.
		 Формат: EndShape=”{ShapeId}”.


См. также:


[Элемент
 MapArrows](MapArrows_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
