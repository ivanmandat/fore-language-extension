# MapShape.BoundingAngles

MapShape.BoundingAngles
-


# MapShape.BoundingAngles


## Синтаксис


BoundingAngles: PP.Rect;


## Описание


Свойство BoundingAngles определяет прямоугольную область, ограничивающую область слоя карты.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setBoundingAngles, а возвращается с помощью метода getBoundingAngles.


## Пример


Воспользуется примером на странице описания свойства [MapChart.TopoBoundingAngles](../MapChart/MapChart.TopoBoundingAngles.htm), заменив строку сценария


map.setTopoBoundingAngles(rect);

на следующий код:


shape.setBoundingAngles(rect);

Результат выполнения примера будет тем же.


См. также:


[MapShape](MapShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
