# EaxCategoryView.getOptions

EaxCategoryView.getOptions
-


# EaxCategoryView.getOptions


## Синтаксис


getOptions();


## Описание


Метод getOptions возвращает
 объект с настройками вкладки ленты инструментов.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Получим положение окна, в котором
 отображается отчет:


// Получаем представление вкладки «Таблица»
var category = expressBox.getRibbonView().getTableCategory();
// Получаем объект с настройками
var option = category.getOption();
// Получаем положение окна
console.log("Положение окна: " + option.windowsPosition);
В результате в консоль будет выведена информация о положении окна:


Положение окна: Maximized


См.
 также:


[EaxCategoryView](EaxCategoryView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
