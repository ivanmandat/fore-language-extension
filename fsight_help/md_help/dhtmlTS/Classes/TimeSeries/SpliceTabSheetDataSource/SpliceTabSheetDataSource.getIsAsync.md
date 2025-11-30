# SpliceTabSheetDataSource.getIsAsync

SpliceTabSheetDataSource.getIsAsync
-


# SpliceTabSheetDataSource.getIsAsync


## Синтаксис


getIsAsync();


## Описание


Метод getIsAsync определяет режим работы с источником данных таблицы сращивания.


## Комментарии


Метод возвращает значение true, если режим работы с источником данных таблицы асинхронный, и значение false, если он синхронный.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Определим режим работы с источником данных таблицы сращивания:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель параметров
var parametersPanel = propertyBar.getParametersPanel();
// Отобразим данную панель
parametersPanel.show();
// Развернём панель
parametersPanel.expand();
// Получим мастер настройки сращивания временных рядов
var spliceMethodWizard = parametersPanel._SpliceMethodWizard;
// Отобразим данный мастер
spliceMethodWizard.show();
// Получим источник данных таблицы для указанного мастера
var tabSheetDS = spliceMethodWizard._DataSource;
// Определим режим работы с источником данных
var isAsync = tabSheetDS.getIsAsync() ? "асинхронный" : "синхронный";
console.log("Источник данных таблицы " + isAsync + ".");
// Загрузим в таблицу данные всего диапазона ячеек
var tabSheet = spliceMethodWizard._TabSheet;
var range = tabSheet.getRange(0, 0, tabSheetDS._Columns.length - 1, tabSheetDS.getRowsCount() - 1);
tabSheetDS.loadRanges(range);
// Обновим источник данных таблицы
tabSheetDS.update();

В результате выполнения примера для таблицы сращиваемых временных рядов в консоли браузера был выведен режим работы с источником данных:


Источник данных таблицы асинхронный.


См. также:


[SpliceTabSheetDataSource](SpliceTabSheetDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
