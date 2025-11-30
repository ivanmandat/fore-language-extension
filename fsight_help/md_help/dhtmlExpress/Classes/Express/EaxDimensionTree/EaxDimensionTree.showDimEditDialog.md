# EaxDimensionTree.showDimEditDialog

EaxDimensionTree.showDimEditDialog
-


# EaxDimensionTree.showDimEditDialog


## Синтаксис


showDimEditDialog();


## Описание


Метод showDimEditDialog отображает
 диалог редактирования измерения.


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
// Отобразим диалог редактирования измерения
TreeV.showDimEditDialog();
В результате выполнения примера был отображен диалог редактирования
 измерения.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
