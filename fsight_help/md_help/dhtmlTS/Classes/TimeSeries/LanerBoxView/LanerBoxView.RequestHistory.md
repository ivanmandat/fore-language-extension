# LanerBoxView.RequestHistory

LanerBoxView.RequestHistory
-


# LanerBoxView.RequestHistory


## Синтаксис


RequestHistory: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: Row - индекс строки, Column - индекс столбца ячейки, для которой осуществляется запрос истории изменений.


## Описание


Событие RequestHistory наступает при запросе истории изменений значения указанной ячейки в таблице рабочей книги.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Обработаем событие RequestHistory, выводя в консоли браузера координаты ячейки, для которой осуществляется запрос истории изменений:


// Получим область данных рабочей книги
var dataView = workbookBox.getDataView();
// Получим таблицу рабочей книги
var lanerBoxView = dataView.getGridView();
// Обработаем событие RequestHistory
lanerBoxView.RequestHistory.add(function (sender, args) {
    console.log("Координаты выбранной ячейки: (" + args.Row + ", " + args.Column + ")");
});

После выполнения примера в контекстном меню любой ячейки с данными выберем пункт «История изменений». В результате вызова данной команды будет отображено окно «История изменений», а в консоли браузера будут выведены координаты ячейки, для которой осуществлён запрос истории изменений:


Координаты выбранной ячейки: (1, 8)


См. также:


[LanerBoxView](LanerBoxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
