# PCObject.isCoordsInside

PCObject.isCoordsInside
-


# PCObject.isCoordsInside


## Синтаксис


isCoordsInside(coords: Object);


## Параметры


coords. Объект с координатами
 мыши. Объект должен содержать следующие поля: X
 - X-координата курсора мыши; Y
 - Y-координата курсора мыши.


## Описание


Метод isCoordsInside проверяет,
 находится ли мышь над элементом диаграммы.


## Комментарии


Метод возвращает значение true,
 если мышь находится над элементом, иначе - значение false.


## Пример


Для реализации примера необходимо наличие компонента [ParallelCoordinates](../../../Components/ParallelCoordinates/ParallelCoordinates.htm)
 с наименованием «coord» (см. «[Пример
 создания компонента ParallelCoordinates](../../../Components/ParallelCoordinates/Example_ParallelCoordinates.htm)»). Проверим, отображена ли
 первая линия диаграммы:


// Проверяем, видима ли первая линия диаграммы
if (coord.getLines()[0].getIsVisible()) {
    console.log("Первая линия отображена");
} else {
    console.log("Первая линия не отображена");
}
В результате в консоль будет выведен результат проверки:


Первая линия отображена


Установим обработчик события нажатия мыши на диаграмму. Проверим попадание
 курсора мыши на первую линию диаграммы:


// Устанавливаем обработчик события нажатия мыши на диаграмму
coord.Click.add(function(sender, args) {
    var offset = PP.calculateOffset(coord.getChartArea().getPaper());
    var clickCoords = {
        X: args.Event.x-offset.X,
        Y: args.Event.y-offset.Y
    };
    // Проверяем попадание курсора мыши на первую линию
    if(coord.getLines()[0].isCoordsInside(clickCoords)) {
        console.log("Мышь нажата на первой линии");
    } else {
        console.log("Мышь нажата не на первой линии");
    }
});
После нажатия на первую линию диаграммы в консоль будет выведено сообщение
 о нажатие:


Мышь нажата на первой линии


См. также:


[PCObject](PCObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
