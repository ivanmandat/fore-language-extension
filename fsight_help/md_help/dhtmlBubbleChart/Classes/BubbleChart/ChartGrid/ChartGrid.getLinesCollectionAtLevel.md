# ChartGrid.getLinesCollectionAtLevel

ChartGrid.getLinesCollectionAtLevel
-


**


# ChartGrid.getLinesCollectionAtLevel


## Синтаксис


getLinesCollectionAtLevel(level: Number, visualType: [PP.Ui.VisualType](../../../Enums/VisualType.htm));


## Параметры


*level.* Уровень вложенности линий. Нумерация уровней ведётся с 0;


*visualType.* Тип линии. Если параметр равен значению PP.Ui.VisualType.X, то будет возвращена коллекция вертикальных линий, если значению PP.Ui.VisualType.Y, будет получена коллекция горизонтальных линий.


## Описание


Метод getLinesCollectionAtLevel** возвращает коллекцию линий координатной сетки пузырьковой диаграммы по уровню их вложенности.


## Комментарии


Метод возвращает значение типа [PP.Ui.ChartGridLineCollection](../ChartGridLineCollection/ChartGridLineCollection.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице экземпляра класса [ChartGrid](ChartGrid.htm) с наименованием «grid» (см. «[Конструктор ChartGrid](Constructor_ChartGrid.htm)»). Определим цвет, тип, толщину и количество интервалов для вертикальных линий сетки первого уровня:


// Получим коллекцию вертикальных дополнительных линий сетки (уровень 1)
var col = grid.getLinesCollectionAtLevel(1, PP.Ui.VisualType.X);
// Получим настройки линий в данной коллекции
console.log("Цвет линий: " + col.getStroke().getColor());
console.log("Тип линий: " + col.getLineType());
console.log("Толщина линий: " + col.getThickness());
console.log("Количество интервалов: " + col.getIntervalsCount());

В результате выполнения примера в консоли браузера были выведены цвет, тип, толщина и количество интервалов для вертикальных линий сетки первого уровня:


Цвет линий: #FFFFFF


Тип линий: dash


Толщина линий: 1


Количество интервалов: 2


См. также:


[ChartGrid](ChartGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
