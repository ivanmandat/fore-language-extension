# Projection.project

Projection.project
-


# Projection.project


## Синтаксис


project(v: PP.Vector3);


## Параметры


v. Вектор.


## Описание


Метод project преобразует мировые
 координаты вектора в оконные.


## Комментарии


Преобразование оконных координат в мировые производится с помощью метода
 [unProject](Projection.unProject.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm) c наименованием
 «map» (см. «[Пример
 создания компонента MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart_Example.htm)»). Необходимо открыть сферическую карту.
 Получаем оконные координаты вектора с мировыми координатами (10, 10, 10):


// Получаем объект класса для работы с трехмерной проекцией
var projection = map.getGLControl().getProjection();
// Получаем направление луча из точки
var vector = projection.project(new PP.Vector3(10, 10, 10));
console.log("Координата X вектора: " + vector.getX());
console.log("Координата Y вектора: " + vector.getY());
console.log("Координата Z вектора: " + vector.getZ());
В результате в консоль будут выведены координаты вектора:


Координата X вектора: -2018.5043397046127


Координата Y вектора: 2702.0043429156012


Координата Z вектора: 1.0001132475542702


См. также:


[Projection](Projection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
