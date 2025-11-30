# EaxDimensionTree.renameElement

EaxDimensionTree.renameElement
-


# EaxDimensionTree.renameElement


## Синтаксис


renameElement(elKey: Number, newText: String);


## Параметры


elKey. Ключ элемента;


newText. Новое наименование.


## Описание


Метод renameElement переименовывает
 элемент.


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
// Переместим элемент на одну позицию выше
TreeV.renameElement(key, "Renamed Element");
В результате выполнения примера был переименован элемент.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
