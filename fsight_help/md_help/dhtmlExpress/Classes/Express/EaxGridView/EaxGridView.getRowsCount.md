# EaxGridView.getRowsCount

EaxGridView.getRowsCount
-


**


# EaxGridView.getRowsCount


## Синтаксис


getRowsCount();


## Описание


Метод getRowsCount** возвращает количество строк в таблице рабочей области экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Определим количество строк в таблице:


var gridView = expressBox.getDataView().getGridView();
// Выводим в консоль количество строк в таблице
console.log(gridView.getRowsCount());

В результате выполнения данного примера в консоли браузера будет выведено количество строк:


209


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
