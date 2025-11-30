# TabSheetMeasures.addHiddenColumn

TabSheetMeasures.addHiddenColumn
-


**


# TabSheetMeasures.addHiddenColumn


## Синтаксис


addHiddenColumn(colIndex: Number);


## Параметры


*colIndex. Индекс скрываемого столбца.*


## Описание


Метод addHiddenColumn** скрывает столбец таблицы по указанному индексу.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Скроем столбцы и строки с индексами 0 и 1, после чего сделаем видимыми столбец и строку с индексом 1:


// Получим измерения таблицы
var measures = tabSheet.getMeasures();
// Сделаем невидимыми столбцы с индексами 0 и 1
measures.addHiddenColumn(0);
measures.addHiddenColumn(1);
// Сделаем невидимыми строки с индексами 0 и 1
measures.addHiddenRow(0);
measures.addHiddenRow(1);
// Сделаем видимым столбец с индексом 1
measures.removeHiddenColumn(1);
// Сделаем видимой строку с индексом 1
measures.removeHiddenRow(1);
// Перерисуем таблицу
tabSheet.rerender();

В результате выполнения примера будут скрыты только столбец и строка с индексом 0:


![](TabSheetMeasures.addHiddenColumn.png)


См. также:


[TabSheetMeasures](TabSheetMeasures.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
