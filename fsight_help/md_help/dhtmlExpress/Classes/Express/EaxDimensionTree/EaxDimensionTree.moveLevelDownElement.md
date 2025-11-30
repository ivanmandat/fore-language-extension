# EaxDimensionTree.moveLevelDownElement

EaxDimensionTree.moveLevelDownElement
-


# EaxDimensionTree.moveLevelDownElement


## Синтаксис


moveLevelDownElement(elKey);


## Параметры


elKey. Ключ элемента.


## Описание


Метод moveLevelDownElement перемещает
 указанный элемент на уровень ниже.


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
// Переместим элемент на одинн уровень ниже
TreeV.moveLevelDownElement(key);
В результате выполнения примера элемент был перемещен на один уровень
 ниже.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
