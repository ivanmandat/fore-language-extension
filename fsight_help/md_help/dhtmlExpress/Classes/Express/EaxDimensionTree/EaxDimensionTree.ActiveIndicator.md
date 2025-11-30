# EaxDimensionTree.ActiveIndicator

EaxDimensionTree.ActiveIndicator
-


# EaxDimensionTree.ActiveIndicator


## Синтаксис


ActiveIndicator: String;


## Описание


Свойство ActiveIndicator определяет
 текущую метрику дерева измерений.


## Комментарии


Может принимать значения: "Value", "BackgroundColor",
 "FontColor", "FontSize".


Значение свойства задается через JSON и при помощи метода setActiveIndicator,
 возвращается при помощи метода getActiveIndicator.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). На боковой панели экспресс
 отчета должно быть выбрано измерение с включенным режимом метрик:


// Получим боковую панель
PropBar = expressBox.getPropertyBarView();
// Получим элемент управления боковой панели
Control = PropBar.getControl();
// Получим вкладку боковой панели
Panel = Control.getActiveItem();
// Получим представление дерева элементов измерения
TreeV = Panel.getDimTreeView();
// Получим текущую метрику
TreeV.getActiveIndicator();
// -> "Value"
В результате выполнения примера была получена текущая метрика дерева
 измерений.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
