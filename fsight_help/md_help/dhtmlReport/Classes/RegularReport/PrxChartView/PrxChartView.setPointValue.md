# PrxChartView.setPointValue

PrxChartView.setPointValue
-


# PrxChartView.setPointValue


## Синтаксис


setPointValue (value: Number, serie: Number, point: Number);


## Параметры


value. Значение;


serie. Индекс ряда;


point. Индекс точки ряда;


fireEvent. Параметр, определяющий, будет ли сгенерировано соответствующее событие после выполнения метода. По умолчанию установлено значение true. Если установлено значение false, событие генерироваться не будет.


## Описание


Метод setPointValue устанавливает значение для указанной точки выбранного ряда диаграммы.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Предполагается наличие на листе регламентного отчета диаграммы. Установим для первой точки первого ряда диаграммы значение 1000:


var prxChart = reportBox.getDataView().getGridView().getTabSheet().getModel().getObjects()[0].getITabObject(); //получаем диаграмму регламентного отчета


prxChart.setPointValue(100, 0, 0, false);


После выполнения примера для первой точки первого ряда диаграммы будет установлено значение 100.


См. также:


[PrxChartView](PrxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
