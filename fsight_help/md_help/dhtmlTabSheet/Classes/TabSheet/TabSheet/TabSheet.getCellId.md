# TabSheet.getCellId

TabSheet.getCellId
-


**


# TabSheet.getCellId


## Синтаксис


getCellId(rowIndex: Number, colIndex: Number);


## Параметры


*rowIndex.* Индекс строки ячейки;


*colIndex.* Индекс столбца ячейки.


## Описание


Метод getCellId** возвращает идентификатор ячейки таблицы.


## Комментарии


Метод возвращает значение типа String.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим идентификатор ячейки таблицы и обратно её координаты по данному идентификатору:


// Получим идентификатор ячейки таблицы
var id = tabSheet.getCellId(1, 1);
// Выведем полученное значение
console.log("Идентификатор ячейки: " + id);
// Выполним обратное преобразование
var coord = tabSheet.parseCellId(id);
// Выведем полученные координаты
console.log("Координаты ячейки: (" + coord.rowIndex + ", "  + coord.colIndex + ")");

В результате выполнения примера в консоли браузера был выведен идентификатор и координаты одной ячейки:


Идентификатор ячейки: cell_r_1_c_1_tabSheet1

Координаты ячейки: (1, 1)


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
