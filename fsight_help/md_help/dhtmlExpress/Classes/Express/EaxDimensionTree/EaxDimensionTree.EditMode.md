# EaxDimensionTree.EditMode

EaxDimensionTree.EditMode
-


# EaxDimensionTree.EditMode


## Синтаксис


EditMode: Boolean;


## Описание


Свойство EditMode определяет
 возможность редактирования элементов дерева измерений.


## Комментарии


При значении false в контекстном
 меню будут недоступны команды по редактированию, созданию и объединению
 элементов.


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
// Запретим редактирование элементов
TreeV.setEditMode(false);
В результате выполнения примера было запрещено редактирование элементов
 дерева измерений.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
