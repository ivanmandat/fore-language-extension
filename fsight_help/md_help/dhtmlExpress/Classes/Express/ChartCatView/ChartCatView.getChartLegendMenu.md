# ChartCatView.getChartLegendMenu

ChartCatView.getChartLegendMenu
-


# ChartCatView.getChartLegendMenu


## Синтаксис


getChartLegendMenu();


## Описание


Метод getChartLegendMenu возвращает меню, которое вызывается при нажатии на кнопку «Легенда» на вкладке ленты инструментов «Диаграмма».


## Комментарии


Метод возвращает объект класса PP.Ui.Menu.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). В приведенном ниже примере выводится количество дочерних элементов в пункте меню «Легенда»:


// Получим представление вкладки "Диаграмма"
var chartCategory = expressBox.getRibbonView().getChartCategory();
console.log("Menu items count: " + chartCategory.getChartLegendMenu().getItems().length);

В результате выполнения данного примера будет выведено количество дочерних элементов в пункте меню «Легенда» на вкладке ленты инструментов «Диаграмма»:


Menu items count: 1


См. также:


[ChartCatView](ChartCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
