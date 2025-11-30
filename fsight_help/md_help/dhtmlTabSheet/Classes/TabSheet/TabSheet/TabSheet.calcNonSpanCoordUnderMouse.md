# TabSheet.calcNonSpanCoordUnderMouse

TabSheet.calcNonSpanCoordUnderMouse
-


**


# TabSheet.calcNonSpanCoordUnderMouse


## Синтаксис


calcNonSpanCoordUnderMouse(event: MouseEvent, touchEvent: MouseEvent);


## Параметры


*event.* Событие перемещения курсора мыши;


*touchEvent.* Событие нажатия кнопки мыши.


## Описание


Метод calcNonSpanCoordUnderMouse** возвращает координаты ячейки под текущей позиции курсора мыши без учёта объединения ячеек таблицы.


## Комментарии


Метод возвращает объект типа PP.Ui.[TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Обработаем событие перемещения курсора мыши MouseMove, выводя координаты ячеек под данным курсором без учёта их объединения, но входящие в него:


// Получим диапазон ячеек по заданным координатам
var range = tabSheet.getRange(0, 1, 1, 0);
// Выполним объединение ячеек по полученному диапазону
tabSheet.merge(range)
// Обработаем событие MouseMove
tabSheet.MouseMove.add(function (sender, eventArgs) {
    var e = eventArgs.Event
    /* Получим координаты ячейки под текущей позицией курсора мыши
    без учета объединения ячеек  */
    var coord = tabSheet.calcNonSpanCoordUnderMouse(e);
    if (tabSheet.getCellSpanUnderCoord(coord)) {
        // Выведем полученные координаты
        console.log("Координаты ячейки: (" + coord.colIndex + ", " + coord.rowIndex + ")");
    }
});

В результате выполнения примера при перемещении курсора мыши над всем диапазоном выделенных ячеек в консоли браузера будут выводиться координаты только тех ячеек, которые входят в объединение, но без его учёта:


Координаты ячейки: (0, 0)

Координаты ячейки: (1, 0)

Координаты ячейки: (1, 1)


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
