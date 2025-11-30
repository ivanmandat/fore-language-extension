# EaxDimensionTree.restoreHierarchy

EaxDimensionTree.restoreHierarchy
-


# EaxDimensionTree.restoreHierarchy


## Синтаксис


restoreHierarchy();


## Описание


Метод restoreHierarchy восстанавливает
 иерархию измерения.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). На боковой панели экспресс
 отчета должно быть выбрано измерение и пользовательская иерархия. Восстановим
 изначальную иерархию измерения:


// Получим боковую панель
PropBar = expressBox.getPropertyBarView();
// Получим элемент управления боковой панели
Control = PropBar.getControl();
// Получим вкладку боковой панели
Panel = Control.getActiveItem();
// Получим представление дерева элементов измерения
TreeV = Panel.getDimTreeView();
// Восстановим иерархию активного измерения
TreeV.restoreHierarchy();
В результате выполнения примера была восстановлена иерархия измерения.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
