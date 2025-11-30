# MapChart.getInstance

MapChart.getInstance
-


# MapChart.getInstance


## Синтаксис


getInstance();


## Описание


Метод getInstance возвращает
 экземпляр карты.


## Комментарии


Метод возвращает значение типа [PP.MapChart](MapChart.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Определим размеры карты и её топоосновы:


// Определим размеры карты
var width = map.getInstance().getWidth();
var height = map.getInstance().getHeight();
console.log("Ширина карты: " + width + ", её высота: " + height);
// Получим размер топоосновы
var topobaseSize = map.getTopobaseSize();
console.log("Ширина топоосновы: " + topobaseSize.width + ", её высота: " +
    topobaseSize.height);
В результате выполнения примера в консоли браузера были выведены размеры
 карты и топоосновы:


Ширина карты: 619, её высота: 397


Ширина топоосновы: 844, её высота: 504


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
