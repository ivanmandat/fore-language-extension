# TabSheetCell.getModel

TabSheetCell.getModel
-


**


# TabSheetCell.getModel


## Синтаксис


getModel();


## Описание


Метод getModel** возвращает
 модель таблицы, в которой находится данная ячейка.


## Комментарии


Метод возвращает объект типа PP.Ui.[TabSheetModel](../TabSheetModel/TabSheetModel.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Создадим копию ячейки с координатами
 (0, 1) и проверим, не изменились ли координаты созданной копии:


// Определим координаты (0, 1)
var coord = tabSheet.coord(0, 1);
// Получим ячейку с координатами (0, 1)
var cell = tabSheet.getModel().getRealOrChangedCell(coord);
// Создадим копию ячейки с координатами (0, 1)
var oldCell = cell.getModel().getRealOrChangedCell(coord).clone();
// Проверим, изменились ли координаты копии ячейки
var isSame = (cell.getCoord() == oldCell.getCoord());
if (isSame) {
    console.log("Копия ячейки имеет координаты (0, 1)");
} else {
    var newCoord = cell.getCoord();
    console.log("Копия ячейки имеет новые координаты: (" + newCoord.rowIndex + ", " + newCoord.colIndex + ")")
};

В результате выполнения примера была создана копия ячейки с координатами
 (0, 1), при этом координаты созданной копии не изменились. Об этом свидетельствует
 сообщение, выведенное в консоли браузера:


См. также:


[TabSheetCell](TabSheetCell.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
