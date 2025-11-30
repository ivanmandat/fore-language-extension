# MainCatView.getSeriesTreeList

MainCatView.getSeriesTreeList
-


# MainCatView.getSeriesTreeList


## Синтаксис


getSeriesTreeList();


## Описание


Метод getSeriesTreeList возвращает дерево источников данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Обработаем событие [DisplayTreeChanged](MainCatView.DisplayTreeChanged.htm), выведем идентификатор дерева источников:


// Получим ленту инструментов
var ribbon = workbookBox.getRibbonView();
// Получим вкладку «Главная»
var mainCatView = ribbon.getMainCategory();
// Получим кнопку «Дерево рядов»
var dataSourceButton = mainCatView.getDataSourceButton();
// Отобразим меню у кнопки «Дерево рядов»
var menu = dataSourceButton.getMenu();
menu.show();
// Получим дерево источников
var seriesTreeList = mainCatView.getSeriesTreeList();
// Обработаем событие DisplayTreeChanged
mainCatView.DisplayTreeChanged.add(function (sender, eventArgs) {
    console.log("Инициировано событие DisplayTreeChanged");
});
// Выведем идентификатор дерева источников
console.log("Идентификатор дерева источников: " + seriesTreeList.getId());
// Скроем меню у кнопки «Дерево рядов»
menu.hide();

После выполнения примера в консоли браузера был выведен идентификатор дерева источников данных, а после нажатия на кнопку «Дерево рядов» в результате инициирования события [DisplayTreeChanged](MainCatView.DisplayTreeChanged.htm) было выведено соответствующее уведомление:


Идентификатор дерева источников: MetabaseTreeList20260


Инициировано событие DisplayTreeChanged


См. также:


[MainCatView](MainCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
