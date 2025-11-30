# EaxGridView.isLoaded

EaxGridView.isLoaded
-


**


# EaxGridView.isLoaded


## Синтаксис


isLoaded();


## Описание


Метод isLoaded** возвращает признак того, что таблица рабочей области экспресс-отчета загружена.


## Комментарии


Если таблица в рабочей области экспресс-отчета загружена, то метод возвращает значение true, иначе - значение false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента ExpressBox с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим значение режима просмотра:


// Получим представление таблицы
var gridView = expressBox.getDataView().getGridView();
// Выведем значение режима просмотра
console.log("Is loaded: " + gridView .isLoaded());

В результате выполнения примера в консоли будет выведен следующий текст:


Is loaded: true


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
