# EaxDimensionTree.moveDownElement

EaxDimensionTree.moveDownElement
-


# EaxDimensionTree.moveDownElement


## Синтаксис


moveDownElement(elKey);


## Параметры


elKey. Ключ элемента.


## Описание


Метод moveDownElement перемещает
 указанный элемент на одну позицию ниже.


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
// Переместим элемент на одну позицию ниже
TreeV.moveDownElement(key);
В результате выполнения примера элемент был перемещен на одну позицию
 ниже.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
