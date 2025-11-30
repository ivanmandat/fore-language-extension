# EaxCategoryView.DataView

EaxCategoryView.DataView
-


# EaxCategoryView.DataView


## Синтаксис


DataView: Array


## Описание


Свойство DataView определяет
 представление данных в рабочей области экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). В приведенном ниже примере выводится
 тип выделенного объекта в таблице рабочей области экспресс-отчета:


// Получаем представление вкладки «Таблица»
var category = expressBox.getRibbonView().getTableCategory();
// Получаем представление данных
var gridView = category.getDataView();
// Выводим тип выделенного объекта
console.log("Selection type: " + gridView.getSelectionType());
В результате выполнения данного примера в консоли браузера будет выведен
 следующий текст:


Selection type: Column


См. также:


[EaxCategoryView](EaxCategoryView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
