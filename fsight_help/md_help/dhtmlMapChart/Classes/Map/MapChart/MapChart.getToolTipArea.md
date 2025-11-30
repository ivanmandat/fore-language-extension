# MapChart.getToolTipArea

MapChart.getToolTipArea
-


# MapChart.getToolTipArea


## Синтаксис


getToolTipArea() : PP.Rect;


## Описание


Метод getToolTipArea возвращает
 область, доступную для отображения всплывающих подсказок.


## Комментарии


Метод возвращает значение типа PP.Rect.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Выведем в консоль координаты области,
 доступной для отображения всплывающих подсказок:


// Получим область
area = map.getToolTipArea();
// Выведем в консоль ширину и высоту области
console.debug("Height: " + area.getHeight() + "\n" + "Width: " + area.getWidth());
// -> Height: 432
// -> Width: 800
В результате выполнения примера в консоли браузера были выведены ширина
 и высота области, доступной для отображения всплывающих подсказок.


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
