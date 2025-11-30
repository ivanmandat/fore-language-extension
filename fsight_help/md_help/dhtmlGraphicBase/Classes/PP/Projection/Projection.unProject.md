# Projection.unProject

Projection.unProject
-


# Projection.unProject


## Синтаксис


unProject(v: PP.Vector3);


## Параметры


v. Вектор.


## Описание


Метод unProject преобразует
 оконные координаты вектора в мировые.


## Комментарии


Преобразование мировых координат в оконные производится с помощью метода
 [project](Projection.project.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm) c наименованием
 «map» (см. «[Пример
 создания компонента MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart_Example.htm)»). Необходимо открыть сферическую карту.
 Получаем мировые координаты вектора с оконными координатами (-2018.5,
 2702, 1):


// Получаем объект класса для работы с трехмерной проекцией
var projection = map.getGLControl().getProjection();
// Получаем направление луча из точки
var vector = projection.unProject(new PP.Vector3(-2018.5, 2702, 1));
console.log("Координата X вектора: " + vector.getX());
console.log("Координата Y вектора: " + vector.getY());
console.log("Координата Z вектора: " + vector.getZ());
В результате в консоль будут выведены координаты вектора:


Координата X вектора: 9.999733240684458


Координата Y вектора: 9.99973295890323


Координата Z вектора: 9.999209430791687


См. также:


[Projection](Projection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
