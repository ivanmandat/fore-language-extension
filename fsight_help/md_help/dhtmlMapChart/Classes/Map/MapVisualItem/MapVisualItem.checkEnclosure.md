# MapVisualItem.checkEnclosure

MapVisualItem.checkEnclosure
-


# MapVisualItem.checkEnclosure


## Синтаксис


checkEnclosure(x: Number, y: Number);


## Параметры


x. Абсцисса точки;


y. Ордината точки.


## Описание


Метод checkEnclosure проверяет,
 соответствует ли точка с указанными координатами какому-либо из столбцов
 столбикового показателя.


## Комментарии


Метод возвращает индекс столбца в столбиковом показателе, которому соответствует
 точка с указанными координатами. Иначе метод возвращает значение -1.


## Пример


Для выполнения примера необходимо наличие на html-странице объекта типа
 [MapBar](../MapBar/MapBar.htm) с наименованием «mapBar» (см.
 «[Конструктор MapVisualItem](Constructor_MapVisualItem.htm)»).
 Проверим, соответствуют ли точки с указанными координатами какому-либо
 из столбцов столбикового показателя и пересекают ли их заданные области:


// Функция проверяет, соответствуют ли точка с указанными координатами какому-либо из столбцов столбикового показателя
function checkEnclosure(position) {
    var enclosure = mapBar.checkEnclosure(position.getX(), position.getY());
    console.log("Точка с координатами (%s, %s) %s",
        position.getX(),
        position.getY(), (enclosure > 0) ? "соответствует столбцу " + enclosure : "не принадлежит столбиковому показателю");
}
// Функция проверяет, пересекает ли указанная область какой-либо из столбцов столбикового показателя
function checkIntersection(rect) {
    var left = rect.getLeft();
    var top = rect.getTop();
    var right = rect.getLeft() + rect.getWidth()
    var bottom = rect.getTop() + rect.getHeight();
    if (mapBar.checkIntersection(left, top, right, bottom, false)) {
        if (mapBar.checkIntersection(left, top, right, bottom, true)) {
            console.log("Область (%s, %s)-(%s, %s) полностью входит в область построения столбикового показателя",
                left, top, right, bottom);
        } else {
            console.log("Область (%s, %s)-(%s, %s) пересекает столбиковый показатель",
                left, top, right, bottom);
        }
    } else {
        console.log("Область (%s, %s)-(%s, %s) не пересекает столбиковый показатель",
            left, top, right, bottom);
    }
}
// Проверяем, соответствуют ли точки с указанными координатами какому-либо из столбцов столбикового показателя
checkEnclosure(new PP.Point({
    X: mapBar.getLeft() + mapBar.getWidth() / 2,
    Y: Math.round(mapBar.getTop() - mapBar.getHeight() / 3)
}));
checkEnclosure(new PP.Point({
    X: mapBar.getLeft(),
    Y: mapBar.getTop()
}));
// Проверяем, пересекают ли указанные области какой-либо из столбцов столбикового показателя
var rect1 = [mapBar.getLeft() + mapBar.getWidth() / 2,
    Math.round(mapBar.getTop() - mapBar.getHeight() / 3),
    mapBar.getWidth(),
    mapBar.getHeight()
];
checkIntersection(new PP.Rect(rect1.toString()));
var rect2 = [mapBar.getLeft(),
    mapBar.getTop(),
    mapBar.getWidth(),
    mapBar.getHeight()
];
checkIntersection(new PP.Rect(rect2.toString()));
После выполнения примера в консоли браузера были выведены результаты
 всех проверок:


Точка с координатами (362, 171) соответствует столбцу
 1


Точка с координатами (329.5, 182.5) не принадлежит
 столбиковому показателю


Область (362, 171)-(427, 206) пересекает столбиковый
 показатель


Область (329.5, 182.5)-(394.5, 217.5) не пересекает
 столбиковый показатель


См. также:


[MapVisualItem](MapVisualItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
