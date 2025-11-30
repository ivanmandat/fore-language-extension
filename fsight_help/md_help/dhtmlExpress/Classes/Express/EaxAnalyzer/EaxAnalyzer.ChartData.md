# EaxAnalyzer.ChartData

EaxAnalyzer.ChartData
-


**


# EaxAnalyzer.ChartData


## Синтаксис


ChartData: Object


## Описание


Свойство ChartData** содержит данные представления экспресс-отчета «Диаграмма».


## Комментарии


Значение свойства можно установить из JSON и с помощью метода setChartData, а возвратить с помощью метода getChartData.


Свойство принимает и возвращает значение в виде JSON-объекта со следующими полями: id - идентификатор диаграммы, meta - метаданные диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Также вручную нужно вызвать контекстное меню «Настройки» для диаграммы экспресс-отчета и в открывшейся вкладке «Диаграмма» изменить цвет и толщину границы. Далее получим установленные цвет и толщину границы диаграммы экспресс-отчета:


var eaxAnalyzer = expressBox.getSource();
// Получаем данные диаграммы экспресс-отчета
var chartData = eaxAnalyzer.getChartData();
console.log("Цвет: " + chartData.meta.hiChart.chart.borderColor);
console.log("Толщина: " + chartData.meta.hiChart.chart.borderWidth);

В результате выполнения примера в консоли браузера будут выведены текущие значения цвета и толщины границы диаграммы экспресс-отчета:


Цвет: rgba(128, 128, 128, 1.000000)

Толщина: 0.944882


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
