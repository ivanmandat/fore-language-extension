# EaxDimensionTree.HierarchyEditing

EaxDimensionTree.HierarchyEditing
-


# EaxDimensionTree.HierarchyEditing


## Синтаксис


HierarchyEditing: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие HierarchyEditing наступает
 перед редактированием иерархии.


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
// Зададим событие
TreeV.HierarchyEditing.add(
function (sender, args) {
    console.log("Событие HierarchyEditing");
});
В результате выполнения примера было добавлено событие HierarchyEditing.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
