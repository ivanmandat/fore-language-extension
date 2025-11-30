# ChartCatView.refresh

ChartCatView.refresh
-


**


# ChartCatView.refresh


## Синтаксис


refresh();


## Описание


Метод refresh** обновляет данные вкладки «Диаграмма» на ленте инструментов экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее обновим представление и данные вкладки «Диаграмма»:


// Получим представление вкладки «Диаграмма»
var chartCategory = expressBox.getRibbonView().getChartCategory();
// Обновим представление вкладки
chartCategory.update();
// Обновим данные вкладки
chartCategory.refresh();

В результате выполнения примера будут обновлены представление и данные вкладки «Диаграмма».


См. также:


[ChartCatView](ChartCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
