# EaxGridView.getViewMode

EaxGridView.getViewMode
-


**


# EaxGridView.getViewMode


## Синтаксис


getViewMode();


## Описание


Метод getViewMode** возвращает значение флага «Режим просмотра» для таблицы рабочей области экспресс-отчета.


## Комментарии


Метод возвращает значение true, если таблица открыта в режиме просмотра, и false, если она открыта в режиме редактирования.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента ExpressBox с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Выведем значение режима просмотра таблицы:


// Получим представление таблицы
var gridView = expressBox.getDataView().getGridView()
// Выведем значение режима просмотра
console.log("View mode: " + gridView .getViewMode());

В результате выполнения примера будет возвращено значение флага:


View mode: false


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
