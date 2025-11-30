# TableCatView.selectionForPareto

TableCatView.selectionForPareto
-


**


# TableCatView.selectionForPareto


## Синтаксис


selectionForPareto();


## Описание


Метод selectionForPareto**
 включает кнопку «Распределение» в зависимости от выделенного в таблице
 диапазона.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 ExpressBox с наименованием «expressBox»
 (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Сделаем доступной кнопку «Распределение»:


// Получим представление вкладки «Таблица»
var category = expressBox.getRibbonView().getTableCategory();
// Пробуем сделать доступной кнопку «Распределение»
category.selectionForPareto();

После выполнения примера кнопка «Распределение» на ленте инструментов
 экспресс-отчета станет доступной.


См. также:


[TableCatView](TableCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
