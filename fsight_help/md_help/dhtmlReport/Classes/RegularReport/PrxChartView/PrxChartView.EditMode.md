# PrxChartView.EditMode

PrxChartView.EditMode
-


# PrxChartView.EditMode


## Синтаксис


EditMode: [PP.Prx.Ui.ChartEditMode](../../../Enums/PP.Prx.Ui.ChartEditMode.htm)


## Описание


Свойство EditMode определяет
 режим редактирования для диаграммы.


## Комментарии


По умолчанию для свойства установлено значение None,
 то есть редактирование отключено.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Предполагается наличие на листе
 регламентного отчета диаграммы.


var prxChart = reportBox.getDataView().getGridView().getTabSheet().getModel().getObjects()[0].getITabObject(); //получаем диаграмму регламентного отчета
prxChart.setEditMode("Point"); //устанавливаем редактирование по точкам
prxChart.DataChanged.add(function (sender, args) {//при изменении данных диаграммы при редактировании в консоль будет выводиться измененное значение в редактируемой точке ряда
   console.log(args._Metadata.Value)
});

После выполнения примера будет доступно редактирование диаграммы по
 точкам. При изменении данных во время редактирования диаграммы в консоль
 будет выводиться новое значение точки редактируемого ряда.


См. также:


[PrxChartView](PrxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
