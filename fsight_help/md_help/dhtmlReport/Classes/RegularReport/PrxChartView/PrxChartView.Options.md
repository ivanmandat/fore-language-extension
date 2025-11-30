# PrxChartView.Options

PrxChartView.Options
-


# PrxChartView.Options


## Синтаксис


Options: Object


## Описание


Свойство Options определяет настройки диаграммы.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Предполагается наличие на листе регламентного отчета диаграммы. Изменим цвет фона диаграммы:


var prxChart = reportBox.getDataView().getGridView().getTabSheet().getModel().getObjects()[0].getITabObject(); //получаем диаграмму регламентного отчета
opts = prxChart.getInstance().options; //получаем текущие настройки диаграммы
opts.chart.backgroundColor = "#FFFACD"; //устанавливаем новый цвет фона диаграммы
prxChart.setOptions(opts); //установим измененные настройки диаграммы в поле Options
prxChart.refreshJSON(prxChart.getOptions()); //обновим настройки диаграммы
prxChart.OptionsChanged.add(function (sender, args) {
   console.log(args)
}); //добавим обработчик события изменения настроек диаграммы
prxChart.setInstance(prxChart.getOptions()); //изменяем настройки диаграммы

После выполнения примера был изменен цвет фона диаграммы, было сгенерировано событие OptionsChanged: в консоль браузера был выведен JSON-объект с настройками диаграммы.


См. также:


[PrxChartView](PrxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
