# PrxChartView.getViewMode

PrxChartView.getViewMode
-


# PrxChartView.getViewMode


## Синтаксис


getViewMode();


## Описание


Метод getViewMode определяет, доступен ли [источник диаграммы регламентного отчета](../Report/Report.htm) для редактирования или нет.


## Комментарии


Метод возвращает значение false, если [источник диаграммы регламентного отчета](../Report/Report.htm) доступен для редактирования (по умолчанию). Иначе возвращает значение true.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Предполагается наличие на листе регламентного отчета диаграммы. Если диаграмма загружена, определим, является ли она изображением и доступен ли источник диаграммы для редактирования:


var prxChart = reportBox.getDataView().getGridView().getTabSheet().getModel().getObjects()[0].getITabObject(); //получаем диаграмму регламентного отчета
if (prxChart.isLoaded() == true) {
    vm = prxChart.getViewMode();
    img = prxChart.isImage();
    alert("Источник диаграммы доступен только для просмотра: " + vm + "\n Диаграмма является картинкой: " + img)
};

После выполнения примера, если диаграмма загружена, на экран будет выведено сообщение о том, является ли диаграмма изображением и доступен ли источник диаграммы для просмотра.


См. также:


[PrxChartView](PrxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
