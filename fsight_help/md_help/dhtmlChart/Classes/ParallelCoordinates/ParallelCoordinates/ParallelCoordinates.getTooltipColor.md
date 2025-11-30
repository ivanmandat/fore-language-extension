# ParallelCoordinates.getTooltipColor

ParallelCoordinates.getTooltipColor
-


# ParallelCoordinates.getTooltipColor


## Синтаксис


getTooltipColor(item: PP.Ui.[PCLine](../PCLine/PCLine.htm));


## Параметры


item. Линия диаграммы.


## Описание


Метод getTooltipColor возвращает
 цвет границы всплывающей подсказки заданной линии.


## Пример


Для реализации примера необходимо наличие компонента [ParallelCoordinates](../../../Components/ParallelCoordinates/ParallelCoordinates.htm)
 с наименованием «coord» (см. «[Пример
 создания компонента ParallelCoordinates](../../../Components/ParallelCoordinates/Example_ParallelCoordinates.htm)»). Получим цвет границы всплывающей
 подсказки первой линии:


// Получаем цвет границы всплывающей подсказки первой линии
var instance = coord.getInstance();
console.log("Цвет границы всплывающей подсказки первой линии: " + instance.getTooltipColor(coord.getLines()[0]));
В результате в консоль будет выведен цвет границы всплывающей подсказки
 первой линии:


Цвет границы всплывающей подсказки первой линии:
 82BAB6


См. также:


[ParallelCoordinates](ParallelCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
