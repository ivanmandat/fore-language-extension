# TableDataSource.setAutoFilter

TableDataSource.setAutoFilter
-


# TableDataSource.setAutoFilter


## Синтаксис


setAutoFilter(filter: Object);


## Параметры


filter.
 Настройки автофильтра.


## Описание


Метод setAutoFilter устанавливает
 значение автофильтра.


## Комментарии


Для получения настроек автофильтра используйте метод [TabSheet.getFilterRange](dhtmlTabSheet.chm::/Interfaces/TabSheetSettings/TabSheetSettings.FilterRange.htm).


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)») и настроенным автофильтром. Удалим
 настройки диапазона автофильтра:


// Получим настройки автофильтра
data = reportBox.getDataView();
grid = data.getGridView();
sheet = grid.getTabSheet();
filter = sheet.getFilterRange();
filterToJSON = filter.toJSON();
// Удалим диапазон автофильтра и применим настройки
delete filterToJSON.Range;
tabSource = grid.getTableSource();
tabSource.setAutoFilter(filterToJSON);

В результате выполнения примера настройки диапазона автофильтра будут
 удалены.


См. также:


[TableDataSource](TableDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
