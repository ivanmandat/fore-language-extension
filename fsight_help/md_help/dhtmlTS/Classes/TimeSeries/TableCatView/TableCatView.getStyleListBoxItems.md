# TableCatView.getStyleListBoxItems

TableCatView.getStyleListBoxItems
-


# TableCatView.getStyleListBoxItems


## Синтаксис


getStyleListBoxItems(): [PP.Ui.ListItem](dhtmlList.chm::/Classes/ListItem/ListItem.htm);


## Описание


Метод getTableStyleListBoxItems
 возвращает список стилей ячейки на вкладке ленты инструментов «Таблица».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Перейдите на вкладку «Таблица»
 ленты инструментов рабочей книги. Изменим стиль ячеек таблицы на нейтральный:


// Получим ленту инструментов
var ribbon = workbookBox.getRibbonView();
// Получим вкладку «Таблица»
var tableCatView = ribbon.getTableCategory();
// Получим стили ячейки
var styleList = tableCatView.getStyleListBoxItems();
// Установим нейтральный стиль для ячеек таблицы
var items = styleList[3];
var selItem = items.getParent();
selItem.setSelectedItem(items);

В результате выполнения примера стиль ячеек таблицы изменился на нейтральный.


См. также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
