# MapLayer.clearLayers

MapLayer.clearLayers
-


# MapLayer.clearLayers


## Синтаксис


clearLayers();


## Описание


Метод clearLayers очищает дочерние слои карты.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Пример создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Также требуется, чтобы была загружена карта с топоосновой Google (см. страницу описания свойства [MapChart.afterGoogleLoad](../MapChart/MapChart.afterGoogleLoad.htm)).


Очистим слой с областями карты, имеющей топооснову Google:


// Получим главный слой карты
var mainLayer = map.getLayer("MainLayer");
// Очистим слой с областями карты
mainLayer.clearLayers();

В результате выполнения примера был очищен слой с областями карты:


![](../MapChart/MapChart_clearLayers.png)


См. также:


[MapLayer](MapLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
