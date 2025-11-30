# PrxChartView.ChartType

PrxChartView.ChartType
-


# PrxChartView.ChartType


## Синтаксис


ChartType: String


## Описание


Свойство ChartType определяет тип диаграммы.


## Комментарии


Доступны следующие значения:


-
line - линейная;


-
column - гистограмма;


-
pie - круговая;


-
area - с областями.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Предполагается наличие на листе регламентного отчета диаграммы. Изменим тип диаграммы на линейный:


var prxChart = reportBox.getDataView().getGridView().getTabSheet().getModel().getObjects()[0].getITabObject(); //получаем представление диаграммы регламентного отчета
prxChart.Rendered.add(function () { //Событие отрисовки диаграммы
   alert("Диаграмма перерисована")
});
prxChart.setChartType("line"); //изменяем тип диаграммы на линейный
prxChart.SerieClick.add(function () { //событие нажатия на ряд
   prxChart.undoData(); //отменяем изменение типа диаграммы
});

После выполнения примера тип диаграммы регламентного отчета изменится на линейный. На экран будет выведено сообщение о том, что диаграмма была перерисована. При нажатии на ряд диаграмма примет первоначальный вид, при этом на экране вновь появится сообщение о перерисовке.


См. также:


[PrxChartView](PrxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
