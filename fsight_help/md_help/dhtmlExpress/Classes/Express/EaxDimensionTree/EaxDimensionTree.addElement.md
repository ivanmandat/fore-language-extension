# EaxDimensionTree.addElement

EaxDimensionTree.addElement
-


# EaxDimensionTree.addElement


## Синтаксис


addElement(parentKey);


## Параметры


parentKey. Ключ родительского
 элемента.


## Описание


Метод addElement открывает диалог
 создания нового элемента.


## Комментарии


Метод аналогичен команде контекстного меню «Элемент -> Добавить новый
 элемент».


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
// Получим ключ первого выделенного элемента
key = TreeV.getSelectedNodes()[0];
// Добавим новый элемент
TreeV.addElement(key);
В результате выполнения примера было открыто окно добавления нового
 элемента.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
