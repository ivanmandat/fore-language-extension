# EaxChartView.Instance

EaxChartView.Instance
-


**


# EaxChartView.Instance


## Синтаксис


Instance: Object


## Описание


Свойство Instance** содержит экземпляр диаграммы экспресс-отчета.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setInstance, а возвращается с помощью метода getInstance.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной диаграммой в рабочей области экспресс-отчета. Получим ширину и высоту данной диаграммы:


// Получаем представление диаграммы экспресс-отчета
var chartView = expressBox.getDataView().getChartView();
if (chartView.isLoaded()) {
    // Получим экземпляр диаграммы экспресс-отчета
    var instance = chartView.getInstance();
    // Получим ширину и высоту диаграммы
    console.log("Ширина диаграммы: " + instance.chartWidth);
    console.log("Высота диаграммы: " + instance.chartHeight);
}

В результате выполнения примера в консоли браузера были выведены размеры диаграммы экспресс-отчета:


Ширина диаграммы: 897

Высота диаграммы: 448


## Пример 2


Также пример использования приведен на странице описания свойства [EaxChartView.Options](EaxChartView.Options.htm).


См. также:


[EaxChartView](EaxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
