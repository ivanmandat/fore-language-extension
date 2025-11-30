# EaxDimensionTree.Mode

EaxDimensionTree.Mode
-


# EaxDimensionTree.Mode


## Синтаксис


Mode: String;


## Описание


Свойство Mode определяет режим
 работы дерева измерений.


## Комментарии


Режим работы зависит от визуализатора.


Значение свойства задается через JSON и при помощи метода setEditMode,
 возвращается при помощи метода getEditMode.


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
// Получим режим работы
TreeV.getMode();
// -> "grid"
В результате выполнения примера был получен режим работы дерева измерений.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
