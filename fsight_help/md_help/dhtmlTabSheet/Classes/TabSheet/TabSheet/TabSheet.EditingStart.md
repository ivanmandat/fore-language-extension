# TabSheet.EditingStart

TabSheet.EditingStart
-


# TabSheet.EditingStart


## Синтаксис


EditingStart: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы: Cell - ячейка таблицы, представленная объектом типа
 [PP.Ui.TabSheetCell](../TabSheetCell/TabSheetCell.htm), Coord
 - координаты ячейки, представленные объектом типа [PP.Ui.TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm).


## Описание


Событие EditingStart наступает
 перед редактированием ячейки таблицы.


## Комментарии


Данное событие доступно, если существует возможность выделения ячеек
 таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Обработаем событие процесса редактирования
 ячейки EditingStart и событие
 окончания данного процесса EditingEnd:


// Обработаем событие перед редактированием ячейки
tabSheet.EditingStart.add(function (sender, args) {
    console.debug("Ячейка редактируется");
    var coord = args.Coord;
    console.debug("Координаты ячейки: (" + coord.rowIndex + ", " + coord.colIndex + ")");
});
// Обработаем событие после редактирования ячейки
tabSheet.EditingEnd.add(function (sender, args) {
    console.debug(args.wasModify ? "Изменения сохранены" : "Изменений не было");
});

В результате выполнения примера при редактировании ячейки в консоли
 браузера будут выведены сообщения с координатами редактируемой ячейки
 и фактом внесения изменений.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
