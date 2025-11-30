# MapChart.getMarkerLayer

MapChart.getMarkerLayer
-


# MapChart.getMarkerLayer


## Синтаксис


getMarkerLayer();


## Описание


Метод getMarkerLayer возвращает
 слой маркеров карты.


## Комментарии


Метод возвращает значение типа SVGElement.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 MapChart с наименованием «map» (см. «[Конструктор
 MapMarker](../MapMarker/Constructor_MapMarker.htm)»). Установим для слоя маркеров прозрачность, равную 50%:


// Получим слой маркеров
markerLayer = map.getMarkerLayer();
// Уcтановим прозрачность слоя на 50%
markerLayer.setOpacity(0.5);
В результате выполнения примера все доступные маркеры на карте были
 отображены с прозрачностью, равной 50%:


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
