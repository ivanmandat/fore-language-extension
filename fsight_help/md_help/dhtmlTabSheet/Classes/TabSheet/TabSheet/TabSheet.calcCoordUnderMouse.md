# TabSheet.calcCoordUnderMouse

TabSheet.calcCoordUnderMouse
-


**


# TabSheet.calcCoordUnderMouse


## Синтаксис


calcCoordUnderMouse(event: MouseEvent, touchEvent: MouseEvent);


## Параметры


*event.* Событие перемещения курсора мыши. Необязательный параметр. По умолчанию равен значению null;


*touchEvent.* Событие нажатия кнопки мыши. Необязательный параметр. По умолчанию равен значению null.


## Описание


Метод calcCoordUnderMouse** возвращает координаты ячейки под текущей позиции курсора мыши с учётом объединения ячеек таблицы.


## Комментарии


Метод возвращает объект типа PP.Ui.[TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Обработаем событие перемещения курсора мыши MouseMove, выводя координаты ячеек под данным курсором с учётом их объединения:


// Получим диапазон ячеек по заданным координатам
var range = tabSheet.getRange(0, 1, 1, 0);
// Выполним объединение ячеек по полученному диапазону
tabSheet.merge(range);
// Получим координаты верхней левой ячейки диапазона объединённый ячеек
var tlCoord = range.getCorners().tlCoord;
// Расположим объединение в видимой области таблицы
if (!tabSheet.isCoordVisibleOrInsideVisibleSpan(tlCoord)) {
    tabSheet.scrollToRange(range)
};
// Обработаем событие MouseMove
tabSheet.MouseMove.add(function (sender, eventArgs) {
    var e = eventArgs.Event
    /* Получим координаты ячейки под текущей позицией курсора мыши
    с учетом объединения ячеек  */
    var coord = tabSheet.calcCoordUnderMouse(e);
    // Выведем полученные координаты
    console.log("Координаты ячейки: (" + coord.colIndex + ", " + coord.rowIndex + ")")
});

В результате выполнения примера при перемещении курсора мыши над всем диапазоном выделенных ячеек в консоли браузера будет выведены только координаты левой верхней ячейки объединения:


Координаты ячейки: (0, 0)


При перемещении курсора над остальными ячейками таблицы в консоли браузера будут выводиться их координаты:


Координаты ячейки: (2, 1)

Координаты ячейки: (2, 0)


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
