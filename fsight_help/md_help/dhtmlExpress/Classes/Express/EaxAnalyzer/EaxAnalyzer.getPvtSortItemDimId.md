# EaxAnalyzer.getPvtSortItemDimId

EaxAnalyzer.getPvtSortItemDimId
-


**


# EaxAnalyzer.getPvtSortItemDimId


## Синтаксис


getPvtSortItemDimId(pvtSortItemkey: Number, dimkey:
 Number);


## Параметры


*pvtSortItemkey. К*люч
 правила, для которого формируется область действия таблицы;


*dimKey.* Ключ измерения
 экспресс-отчёта.


## Описание


Метод getPvtSortItemDimId**
 возвращает моникёр для [сортировки](UiAnalyticalArea.chm::/Working_with_table_data/Sorting_table_data.htm)
 таблицы экспресс-отчёта.


## Комментарии


Моникёр - это идентификатор объекта на сервере, который представляет
 собой [отметку
 по измерению](UiSelection.chm::/Selection/Selection_of_the_dimension_elements.htm) с заданным ключом. Метод рекомендуется
 использовать при установке диапазона данных, на который распространяется
 [правило
 сортировки](UiAnalyticalArea.chm::/Working_with_table_data/Sorting_table_data.htm) таблицы.


Метод возвращает моникёр вида {идентификатор_сессии}!{идентификатор_объекта}
 для формирования [области
 действия правила](UiAnalyticalArea.chm::/Working_with_table_data/Sorting_table_data.htm) сортировки таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Экспресс-отчёт должен содержать
 хотя бы одно [измерение](UiSelection.chm::/Selection/Dimension.htm),
 [таблицу](UiAnalyticalArea.chm::/Table.htm),
 [правила
 сортировки](UiAnalyticalArea.chm::/Working_with_table_data/Sorting_table_data.htm).


Определим моникёр сортировки таблицы:


var eaxAnalyzer = expressBox.getSource();
// Получим первое правило сортировки таблицы
var sortings = eaxAnalyzer.getMetadata().pivot.sorting.items.it;
var pvtSortItemkey = sortings[0].key;
// Получим измерения экспресс-отчёта
var dims = eaxAnalyzer.getDims();
// Определим ключ первого измерения
var dimKey = dims[0].getKey();
var sort = eaxAnalyzer.getPvtSortItemDimId(pvtSortItemkey,dimKey);
// Выведем в консоль моникёр сортировки таблицы
console.log("Моникёр сортировки таблицы: " + sort.id);
В результате выполнения примера в консоли браузера будет выведен моникёр
 сортировки таблицы:


Моникёр сортировки таблицы: GDDOGJLAGBEAFOAECCAKPAOFFFEBKIBEHIJHGKOGNJLBBKDN!M!S!EENIIBMLAGBEAFOAEGHLABPENBMCIGOIEDJGBPMBJAICEJDPP!SortItem!21!Selection!10124


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
