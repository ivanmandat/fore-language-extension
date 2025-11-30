# EaxDimensionTree.EaxSource

EaxDimensionTree.EaxSource
-


# EaxDimensionTree.EaxSource


## Синтаксис


EaxSource: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm);


## Описание


Свойство EaxSource определяет
 источник дерева измерений.


## Комментарии


Значение свойства задается через JSON и при помощи метода setEaxSource(value,
 dimKey, dataSourceKey), возвращается при помощи метода getEaxSource.


Параметры метода setEaxDimKey:


  value. Документ
 экспресс отчета;


  dimKey. Ключ измерения;


  dataSourceKey.
 Ключ источника данных.


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
// Получим источник дерева имерений
TreeV.getEaxSource();
// -> PP.Exp.EaxDocument {_Sheets: Object, _ActiveSheetKey: 23254, _DocumentMetadata: Object, _TabId: Object, _ChartId: Object…}
В результате выполнения примера был получен экземпляр источника дерева
 измерений.


См. также:


[EaxDimensionTree](EaxDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
