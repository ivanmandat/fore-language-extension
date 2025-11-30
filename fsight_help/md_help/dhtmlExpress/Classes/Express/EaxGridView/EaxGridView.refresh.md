# EaxGridView.refresh

EaxGridView.refresh
-


**


# EaxGridView.refresh


## Синтаксис


refresh(gridViewTypeUpdate: PP.Exp.Ui.[ViewTypeUpdate](../../../Enums/ViewTypeUpdate.htm));


## Параметры


*gridViewTypeUpdate.* Указывает на тип элемента, который нужно обновить.


## Описание


Метод refresh** обновляет указанные элементы таблицы в рабочей области экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента ExpressBox с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Обновим панель статистики в таблице:


// Получим представление таблицы
var gridView = expressBox.getDataView().getGridView();
// Обновим панель статистики в таблице:
gridView.refresh(PP.Exp.Ui.ViewTypeUpdate.GridStatistics);

В результате выполнения примера будет обновлена панель статистики в таблице рабочей области экспресс-отчета.


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
