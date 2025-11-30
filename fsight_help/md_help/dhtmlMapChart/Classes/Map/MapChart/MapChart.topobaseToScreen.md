# MapChart.topobaseToScreen

MapChart.topobaseToScreen
-


# MapChart.topobaseToScreen


## Синтаксис


topobaseToScreen(rect: PP.Rect);


## Параметры


rect. Прямоугольная область топоосновы карты.


## Описание


Метод topobaseToScreen преобразует координаты указанной области топоосновы в экранные координаты.


## Комментарии


Метод возвращает значение типа PP.Rect.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Пример создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Получим координаты центра топоосновы карты и соответствующие ему экранные координаты:


// Получим координаты центра топоосновы
var centerX = map.getTopobaseLeft() + map.getTopobaseSize().width / 2;
var centerY = map.getTopobaseTop() + map.getTopobaseSize().height / 2;
console.log("Координаты центра топоосновы: (" + centerX + ", " + centerY + ")");
var topoRect = new PP.Rect({
    Left: centerX,
    Top: centerY,
    Width: 0,
    Height: 0
});
// Получим экранные координаты центра топоосновы
var screenRect = map.topobaseToScreen(topoRect);
console.log("Экранные координаты центра топоосновы: (" + screenRect.getLeft() + ", " + screenRect.getTop() + ")");

В результате выполнения примера в консоли браузера были выведены координаты центра топоосновы карты и соответствующие ему экранные координаты:


Координаты центра топоосновы: (714.5198412698412, 252)


Экранные координаты центра топоосновы: (880.8645518392541, 207.5)


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
