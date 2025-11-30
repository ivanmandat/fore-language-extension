# EaxDimensionTree.getDataSourceKey

EaxDimensionTree.getDataSourceKey
-


# EaxDimensionTree.getDataSourceKey


## Синтаксис


getDataSourceKey();


## Описание


Метод getDataSourceKey возвращает
 индекс источника данных, если экспресс-отчет содержит несколько источников.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). На боковой панели экспресс
 отчета должно быть выбрано измерение.


// Получим боковую панель
PropBar = expressBox.getPropertyBarView();
// Получим элемент управления боковой панели
Control = PropBar.getControl();
// Получим вкладку боковой панели
Panel = Control.getActiveItem();
// Получим представление дерева элементов измерения
TreeV = Panel.getDimTreeView();
// Получим индекс источника данных
TreeV.getDataSourceKey();
В результате выполнения примера был получен индекс источника данных
 дерева измерений.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
