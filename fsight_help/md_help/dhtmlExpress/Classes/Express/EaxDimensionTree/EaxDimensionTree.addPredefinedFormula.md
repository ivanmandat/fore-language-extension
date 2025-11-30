# EaxDimensionTree.addPredefinedFormula

EaxDimensionTree.addPredefinedFormula
-


# EaxDimensionTree.addPredefinedFormula


## Синтаксис


addPredefinedFormula(formulaArgs);


## Параметры


formulaArgs. Аргументы формулы.


## Описание


Метод addPredefinedFormula применяет
 формулу объединения элементов.


## Комментарии


Параметр formulaArgs может содержать следующие поля:


formulaArgs = {
    name: "Total",  // Тип формулы
    args: "Sum", // Дополнительные аргументы формулы
    dimKey: 10152,  // Ключ измерения
    combine: true  // Объединить в новый элемент
    useGridSelection: false, // Использовать отметку таблицы
}

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
// Получим ключ измерения
key = TreeV.getEaxDimKey();
// Зададим формулу
formula = {
  name: "Sum",
  dimKey: key,
  useGridSelection: false,
  combine: true
};
// Применим формулу объединения элементов
TreeV.addPredefinedFormula(formula);
В результате выполнения примера была применена формула объединения элементов.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
