# MapChart.getPieLayer

MapChart.getPieLayer
-


# MapChart.getPieLayer


## Синтаксис


getPieLayer();


## Описание


Метод getPieLayer возвращает слой круговых показателей карты.


## Комментарии


Метод возвращает значение типа SVGElement.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Пример создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Отобразим на карте все доступные круговые показатели и установим для них прозрачность, равную 50%:


// Получим круговые показатели карты
var pieVisual = map.getLayer("Regions").getVisuals().PieVisual;
// Сделаем столбиковые показатели видимыми
pieVisual.setVisibility(PP.Ui.Visibility.Visible);
// Заново отрисуем карту
map.draw();
// Получим слой круговых показателей
var pieLayer = map.getPieLayer();
// Увечим прозрачность слоя на 50%
pieLayer.style.opacity = 0.5;

В результате выполнения примера на карте были отображены все доступные круговые показатели с прозрачностью, равной 50%:


![](MapChart_getPieLayer.png)


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
