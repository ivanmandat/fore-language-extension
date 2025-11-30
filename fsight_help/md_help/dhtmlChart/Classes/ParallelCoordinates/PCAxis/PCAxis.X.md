# PCAxis.X

PCAxis.X
-


# PCAxis.X


## Синтаксис


X: Number;


## Описание


Свойство X определяет X-координату
 оси диаграммы.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setX,
 а возвращается с помощью метода getX.


## Пример


Для реализации примера необходимо наличие компонента [ParallelCoordinates](../../../Components/ParallelCoordinates/ParallelCoordinates.htm)
 с наименованием «coord» (см. «[Пример
 создания компонента ParallelCoordinates](../../../Components/ParallelCoordinates/Example_ParallelCoordinates.htm)»). Получаем X-координаты осей
 диаграммы:


// Получаем X-координаты осей диаграммы
console.log("X-координаты осей диаграммы:");
for (var i = 0; i < coord.getAxes().length; i++) {
    console.log(coord.getAxes()[i].getX());
}
В результате в консоль будут выведены X-координаты осей диаграммы:


X-координаты осей диаграммы:


4


290


576


См. также:


[PCAxis](PCAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
