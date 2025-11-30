# TabSheet.HeadersMouseDown

TabSheet.HeadersMouseDown
-


# TabSheet.HeadersMouseDown


## Синтаксис


HeadersMouseDown: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: rowIndex - индекс строки нажатой ячейки, colIndex - индекс столбца нажатой ячейки, coordInfo - JSON-объект с информацией о координате ячейки, event - событие нажатия курсором мыши на ячейки заголовка таблицы.


## Описание


Событие HeadersMouseDown генерируется при нажатии на заголовки строк и столбцов таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Обработаем событие HeadersMouseDown:


// Обработаем событие HeadersMouseDown
tabSheet.HeadersMouseDown.add(function (sender, eventArgs) {
    var e = eventArgs.Event;
    // Получим координаты ячейки по текущей позиции курсора мыши
    var tabSheetCoord = tabSheet.getCoordUnderMouse(e);
    // Выведем полученные координаты
    console.log("Координаты ячейки: (" + tabSheetCoord.colIndex + ", " + tabSheetCoord.rowIndex + ")")
});

В результате выполнения примера при нажатии на любую ячейку, принадлежащую заголовкам строк и столбцов таблицы, в консоли браузера буду выводится координаты данной ячейки:


Координаты ячейки: (1, -1)

Координаты ячейки: (-1, 2)


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
