# EaxAnalyzer.ChartChangedData

EaxAnalyzer.ChartChangedData
-


**


# EaxAnalyzer.ChartChangedData


## Синтаксис


ChartChangedData: Object


## Описание


Свойство ChartChangedData** содержит измененные данные представления экспресс-отчета «Диаграмма».


## Комментарии


Значение свойства можно установить из JSON и с помощью метода setChartChangedData, а возвратить с помощью метода getChartChangedData.


Свойство принимает и возвращает значение в виде JSON-объекта с полями chart (объект диаграммы), colors (цвета), editMode (флаг «Режим редактирования»), title (заголовок диаграммы), xAxis (ось категорий), yAxis (ось значений), legend (легенда диаграммы), plotOptions (настройки печати) и др.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Также вручную нужно вызвать контекстное меню «Настройки» для диаграммы экспресс-отчета и в открывшейся вкладке «Диаграмма» изменить толщину границы. Далее определим изменённое значение толщины границы диаграммы, а затем очистим метаданные:


var eaxAnalyzer = expressBox.getSource();
// Получаем измененные данные диаграммы экспресс-отчета
var chartData = eaxAnalyzer.getChartChangedData();
if (chartData != null & chartData != undefined) {
    console.log("Толщина границы диаграммы: " + chartData.chart.borderWidth);
    eaxAnalyzer.clearViewData();
    chartData = eaxAnalyzer.getChartChangedData();
    console.log("Измененные данные диаграммы после очистки метаданных: " + chartData);
} else {
    console.log("Изменённые данные диаграммы не определены.");
};

В результате выполнения примера в консоли браузера будет выведено измененное значение толщины границы диаграммы, а также все измененные данные диаграммы после их очистки:


Толщина границы диаграммы: 2


Измененные данные диаграммы после очистки метаданных: null


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
