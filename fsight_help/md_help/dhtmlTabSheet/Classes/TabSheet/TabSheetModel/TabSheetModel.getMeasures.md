# TabSheetModel.getMeasures

TabSheetModel.getMeasures
-


**


# TabSheetModel.getMeasures


## Синтаксис


getMeasures();


## Описание


Метод getMeasures** возвращает
 измерения таблицы.


## Комментарии


Метод возвращает объект типа PP.Ui.[TabSheetMeasures](../TabSheetMeasures/TabSheetMeasures.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим координаты ячеек, расположенных
 вокруг ячейки B1:


// Получим модель данных таблицы
var model = tabSheet.getModel();
// Получим измерения модели таблицы
var measures = model.getMeasures();
// Зададим координаты ячейки
var coord = tabSheet.coord(1, 1);
// Получим ячейку, находящуюся на строку выше базовой ячейки
var cell = model.getNextTopCell(coord);
console.log("Ячейка сверху: (" + cell.getCoord().rowIndex + ", " + cell.getCoord().colIndex + ")");
// Получим ячейку, находящуюся справа от заданной ячейки
var cell = model.getNextRightCell(coord);
console.log("Ячейка справа: (" + cell.getCoord().rowIndex + ", " + cell.getCoord().colIndex + ")");
// Получим ячейку, находящуюся на строку ниже заданной ячейки
var cell = model.getNextBottomCell(coord);
console.log("Ячейка снизу: (" + cell.getCoord().rowIndex + ", " + cell.getCoord().colIndex + ")");
// Получим ячейку, находящуюся слева от заданной ячейки
var cell = model.getNextLeftCell(coord);
console.log("Ячейка слева: (" + cell.getCoord().rowIndex + ", " + cell.getCoord().colIndex + ")");

В результате выполнения примера в консоли браузера были выведены координаты
 ячеек, расположенных сверху, справа, снизу и слева от ячейки с координатами
 (1, 1):


Ячейка сверху: (0, 1)

Ячейка справа: (1, 2)

Ячейка снизу: (2, 1)

Ячейка слева: (1, 0)


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
