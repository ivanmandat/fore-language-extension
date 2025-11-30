# EaxGridView.getInstance

EaxGridView.getInstance
-


**


# EaxGridView.getInstance


## Синтаксис


getInstance();


## Описание


Метод getInstance** возвращает экземпляр класса PP.Ui.TabSheet.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Пусть дана следующая таблица:


![](../../../EaxGridView.getInstance.gif)


Тогда выведем количество фиксированных строк и фиксированных столбцов у указанной таблицы:


var instance = expressBox.getDataView().getGridView().getInstance();
// Выведем количество фиксированных строк
console.log(instance.getFixedRowCount());
// Выведем количество фиксированных столбцов
console.log(instance.getFixedColumnCount());

В результате выполнения данного метода в консоли будет выведено количество фиксированных строк и фиксированных столбцов таблицы:


2

1


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
