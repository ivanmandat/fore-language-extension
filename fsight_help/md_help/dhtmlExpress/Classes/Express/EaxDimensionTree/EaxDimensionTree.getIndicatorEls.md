# EaxDimensionTree.getIndicatorEls

EaxDimensionTree.getIndicatorEls
-


# EaxDimensionTree.getIndicatorEls


## Синтаксис


getIndicatorEls();


## Описание


Метод getIndicatorEls возвращает
 массив доступных метрик.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). На боковой панели экспресс
 отчета должно быть выбрано измерение с включенными метриками.


// Получим боковую панель
PropBar = expressBox.getPropertyBarView();
// Получим элемент управления боковой панели
Control = PropBar.getControl();
// Получим вкладку боковой панели
Panel = Control.getActiveItem();
// Получим представление дерева элементов измерения
TreeV = Panel.getDimTreeView();
// Определим, использует ли дерево метрики
console.log(TreeV.getIsIndicatorBehaviour());
// Получим доступные метрики
console.log(TreeV.getIndicatorEls());
// -> ["Value", "BackgroundColor", "FontColor", "FontSize"]
В результате выполнения примера был получен признак использования метрик
 и перечень доступных метрик.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
