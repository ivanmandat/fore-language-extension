# ChartTypeMenu.setChartType

ChartTypeMenu.setChartType
-


# ChartTypeMenu.setChartType


## Синтаксис


setChartType(value: String, fireEvent: Boolean);


## Параметры


value. Устанавливаемый тип диаграммы;


fireEvent. Признак того, нужно ли генерировать событие [ChartTypeChanged](ChartTypeMenu.ChartTypeChanged.htm). Если параметр равен значению true, то данное событие будет сгенерировано, иначе - не будет.


## Описание


Метод setChartType меняет тип диаграммы на указанный.


## Комментарии


Возможные типы диаграмм описаны на странице описания свойства [EaxChartView.ChartType](../EaxChartView/EaxChartView.ChartType.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной диаграммой в рабочей области экспресс-отчета. Преобразуем исходную диаграмму в круговую и обработаем событие [ChartTypeChanged](ChartTypeMenu.ChartTypeChanged.htm):


// Получим меню для выбора типа диаграммы
var chartTypeMenu = expressBox.getRibbonView().getChartCategory().getChartTypeMenu();
console.log("Исходный тип диаграммы: %s", chartTypeMenu.getSelectedValue());
// Обработаем событие ChartTypeChanged
chartTypeMenu.ChartTypeChanged.add(function (sender, args) {
    console.log("Новый тип диаграммы: %s", args.Type);
});
// Изменим тип диаграммы на круговую
chartTypeMenu.setChartType("pie");

В результате выполнения примера исходная диаграмма была преобразована в круговую:


![](ChartTypeMenu_chartTypeChange.png)


В консоли браузера был выведен исходный и новый тип диаграммы:


Исходный тип диаграммы: column


Новый тип диаграммы: pie


См. также:


[ChartTypeMenu](ChartTypeMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
