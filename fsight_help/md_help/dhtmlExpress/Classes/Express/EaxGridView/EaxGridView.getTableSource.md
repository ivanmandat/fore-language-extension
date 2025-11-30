# EaxGridView.getTableSource

EaxGridView.getTableSource
-


**


# EaxGridView.getTableSource


## Синтаксис


getTableSource();


## Описание


Метод getTableSource** возвращает источник данных таблицы в рабочей области экспресс-отчета.


## Комментарии


Метод возвращает объект класса PP.Exp.EaxTableDataSource.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента ExpressBox с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим ключ источника данных:


// Получим объект источника данных таблицы
var tableSource = expressBox.getDataView().getGridView().getTableSource();
// Получим ключ источника данных
console.log("Id: " + tableSource.getId());

В результате выполнения примера в консоли будет выведен ключ источника данных таблицы:


Id: 20198


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
