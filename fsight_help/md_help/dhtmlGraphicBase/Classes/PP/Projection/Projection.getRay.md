# Projection.getRay

Projection.getRay
-


# Projection.getRay


## Синтаксис


getRay(pos: Object);


## Параметры


pos. Координаты точки начала
 луча.


## Описание


Метод getRay возвращает луч,
 выходящий из заданной точки вдаль.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm) c наименованием
 «map» (см. «[Пример
 создания компонента MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart_Example.htm)»). Необходимо открыть сферическую карту.
 Получим координаты направление луча, который выходит из точки с координатами
 (10, 10):


// Получаем объект класса для работы с трехмерной проекцией
var projection = map.getGLControl().getProjection();
// Получаем направление луча из точки
var direction = projection.getRay({
    X: 10,
    Y: 10
}).getDirection();
console.log("Координата X луча: " + direction.getX());
console.log("Координата Y луча: " + direction.getY());
console.log("Координата Z луча: " + direction.getZ());
В результате в консоль будут выведены координаты луча:


Координата X луча: -0.20233237191132247


Координата Y луча: 0.08951007928384862


Координата Z луча: -0.9752176972262846


См. также:


[Projection](Projection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
