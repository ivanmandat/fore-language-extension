# MiniMap.getViewArea

MiniMap.getViewArea
-


# MiniMap.getViewArea


## Синтаксис


getViewArea();


## Описание


Метод getViewArea возвращает прямоугольник видимой области.


## Комментарии


Возвращаемое значение - объект класса PP.[Rect](dhtmlCommon.chm::/Classes/PP/Rect/Rect.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm) c  наименованием «map» и прикрепленной к нему панелью масштабирования (см. «[Пример создания компонента MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart_Example.htm)»).


Получаем координаты левого верхнего угла прямоугольника видимой области и его высоту и ширину:


var rect = map.getMiniMap().getViewArea();
console.log("Координаты левого верхнего угла прямоугольника: " + rect.getLeft() + ", " + rect.getTop());
console.log("Высота прямоугольника: " + rect.getHeight());
console.log("Ширина прямоугольника: " + rect.getWidth());

В результате в консоль будут выведены координаты левого верхнего угла, ширина и высота прямоугольника:


Координаты левого верхнего угла прямоугольника: 0, 0


Высота прямоугольника: 1


Ширина прямоугольника: 1


См. также:


[MiniMap](MiniMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
