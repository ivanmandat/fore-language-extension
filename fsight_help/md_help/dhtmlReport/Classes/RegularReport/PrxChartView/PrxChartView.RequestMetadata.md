# PrxChartView.RequestMetadata

PrxChartView.RequestMetadata
-


# PrxChartView.RequestMetadata


## Синтаксис


RequestMetadata: function (sender,args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestMetadata наступает при запросе метаданных диаграммы.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Предполагается наличие на листе регламентного отчета диаграммы.


var prxChart = reportBox.getDataView().getGridView().getTabSheet().getModel().getObjects()[0].getITabObject(); //получаем диаграмму регламентного отчета


prxChart.RequestMetadata.add(function () {


   alert("Запрос метаданных")


});


prxChart.RequestMetadata.fire(this)


После выполнения примера будет сгенерировано событие RequestMetadata: на экран будет выведено сообщение «Запрос метаданных».


См. также:


[PrxChartView](PrxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
