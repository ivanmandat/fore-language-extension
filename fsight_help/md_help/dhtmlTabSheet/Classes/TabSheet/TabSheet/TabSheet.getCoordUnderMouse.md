# TabSheet.getCoordUnderMouse

TabSheet.getCoordUnderMouse
-


**


# TabSheet.getCoordUnderMouse


## Синтаксис


getCoordUnderMouse(event: MouseEvent, touchEvent: MouseEvent);


## Параметры


*event.* Событие перемещения курсора мыши. Необязательный параметр. По умолчанию равен значению null;


*touchEvent.* Событие нажатия кнопки мыши. Необязательный параметр. По умолчанию равен значению null.


## Описание


Метод getCoordUnderMouse** возвращает текущую координату под курсором мыши.


## Комментарии


Метод возвращает объект типа PP.Ui.[TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Обработаем событие перемещения курсора мыши MouseMove, выводя информацию о координатах, соответствующих ячейкам под данным курсором:


// Обработаем событие MouseMove
tabSheet.MouseMove.add(function (sender, eventArgs) {
    var e = eventArgs.Event;
    // Получим координаты ячейки по текущей позиции курсора мыши
    var coord = tabSheet.getCoordUnderMouse(e);
    var info = tabSheet.getCoordInfo(coord);
    console.log("Координаты: (" + coord.rowIndex + ", " + coord.colIndex + ")");
    console.log("  Объединённая ли ячейка: " + info.cellspan);
    console.log("  Входит ли в заголовок столбцов: " + info.colHeader);
    console.log("  Входит ли в заголовок строк: " + info.rowHeader);

});

В результате выполнения примера при перемещении курсора мыши над таблицей в консоли браузера была выведена информация о координатах, соответствующих ячейкам под данным курсором:


Координаты: (-1, 1)

  Объединённая ли ячейка: false

  Входит ли в заголовок столбцов: true

  Входит ли в заголовок строк: false

Координаты: (0, 1)

  Объединённая ли ячейка: false

  Входит ли в заголовок столбцов: false

  Входит ли в заголовок строк: false


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
