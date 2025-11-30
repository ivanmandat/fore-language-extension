# TabSheetObject.setLeftOffset

TabSheetObject.setLeftOffset
-


**


# TabSheetObject.setLeftOffset


## Синтаксис


setLeftOffset(left: Number, isVirtual: Boolean);


## Параметры


*left.* Отступ слева в пикселях.


*isVirtual.* Определяет, какая координата была передана - виртуальная или реальная. Если параметр равен значению true, то была передана виртуальная координата, иначе - реальная.


## Описание


Метод setLeftOffset** устанавливает отступ слева для объекта в таблице.


## Комментарии


Отступ слева рассчитывается в пикселях, начиная от левой границы таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»), а также компонента [TabSheetObject](TabSheetObject.htm) (см. страницу «[Конструктор TabSheetObject](Constructor_TabSheetObject.htm)»). Переместим объект в ячейку C1 и уберём все отступы от её границ:


// Определим координаты ячейки C1 и её размеры
var coord = tabSheet.coord(1, 2);
// Получим измерения таблицы
var measures = tabSheet.getMeasures();
// Разместим объект в ячейке C1
tabSheetObject.setLeftOffset(measures.calcColumnsWidth(0, coord.colIndex));
tabSheetObject.setTopOffset(measures.calcRowsHeight(0, coord.rowIndex));
// Обнулим отступы от границы ячейки C1
tabSheetObject.setTop(0);
tabSheetObject.setLeft(0);
// Перерисуем таблицу
tabSheet.rerender();

В результате выполнения примера объект будет размещён в ячейке с координатами (1, 2), а верхний и левый отступы от её верхней и левой границы будут убраны:


![](TabSheetObject.TopRow.png)


См. также:


[TabSheetObject](TabSheetObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
