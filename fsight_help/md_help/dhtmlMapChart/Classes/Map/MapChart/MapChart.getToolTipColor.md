# MapChart.getToolTipColor

MapChart.getToolTipColor
-


# MapChart.getToolTipColor


## Синтаксис


getToolTipColor(item: [PP.MapArrowBase](../MapArrowBase/MapArrowBase.htm)
 | [PP.MapShape](../MapShape/MapShape.htm) | [PP.MapVisualItem](../MapVisualItem/MapVisualItem.htm),
 color: String);


## Параметры


item. Стрелка, область слоя
 карты или показатель, для всплывающих подсказок у которых требуется определить
 цвет границы;


color. Цвет, используемый в
 случае, если цвет границы всплывающей подсказки неопределён. Необязательный
 параметр.


## Описание


Метод getToolTipColor возвращает
 цвет границы всплывающей подсказки.


## Комментарии


Метод возвращает значение типа String.


Если свойство [MapChart.UseItemColorForToolTipBorder](MapChart.UseItemColorForToolTipBorder.htm)
 равно значению false, то метод
 возвратит null.


## Пример


Пример использования приведён на странице описания [конструктора
 класса PP.MapBubble](../MapBubble/Constructor_MapBubble.htm).


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
