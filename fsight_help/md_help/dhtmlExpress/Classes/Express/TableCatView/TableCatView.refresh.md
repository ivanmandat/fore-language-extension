# TableCatView.refresh

TableCatView.refresh
-


**


# TableCatView.refresh


## Синтаксис


refresh();


## Описание


Метод refresh** обновляет вкладку ленты инструментов «Таблица» экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее обновим вкладку ленты инструментов «Таблица»:


// Получим представление вкладки «Таблица»
var tableCategory = expressBox.getRibbonView().getTableCategory();
tableCategory.refresh();

В результате выполнения примера будет обновлена вкладка «Таблица» ленты инструментов экспресс-отчета.


См. также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
