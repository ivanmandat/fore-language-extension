# ChartCatView.getChartDataSourceState

ChartCatView.getChartDataSourceState
-


**


# ChartCatView.getChartDataSourceState


## Синтаксис


getChartDataSourceState();


## Описание


Метод getChartDataSourceState** возвращает свойства источника данных для панели ленты инструментов «Диаграмма».


## Комментарии


Метод возвращает значение в JSON-формате.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). В приведенном ниже примере проверяется, используется ли выделение таблицы:


// Получаем представление вкладки «Диаграмма»
var chartCategory = expressBox.getRibbonView().getChartCategory();
// Проверяем, используется ли выделение таблицы
console.log("Is use grid selection: " + chartCategory.getChartDataSourceState().useGridSelection);

В результате выполнения примера будет выведено следующее:


Is use grid selection: false


См. также:


[ChartCatView](ChartCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
