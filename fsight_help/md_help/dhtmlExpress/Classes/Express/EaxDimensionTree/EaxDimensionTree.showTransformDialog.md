# EaxDimensionTree.showTransformDialog

EaxDimensionTree.showTransformDialog
-


# EaxDimensionTree.showTransformDialog


## Синтаксис


showTransformDialog(data);


## Параметры


data. Метаданные об элементе.
 Необязательный параметр.


## Описание


Метод showTransformDialog открывает
 окно редактирования формулы для сфокусированного элемента.


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
// Установим фокус для элемента
treeC = TreeV.getControl();
node = treeC.getNodeByPosition(5);
treeC.setFocusedNode(node);
// Откроем диалог редактирования формулы
TreeV.showTransformDialog();
В результате выполнения примера было открыто окно редактирования
 формулы для элемента с позицией 5.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
