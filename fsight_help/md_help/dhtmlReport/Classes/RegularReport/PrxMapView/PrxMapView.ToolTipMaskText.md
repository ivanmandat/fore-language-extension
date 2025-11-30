# PrxMapView.ToolTipMaskText

PrxMapView.ToolTipMaskText
-


# PrxMapView.ToolTipMaskText


## Синтаксис


ToolTipMaskText: String


## Описание


Свойство ToolTipMaskText устанавливает маску для всплывающих подсказок территорий карты.


## Комментарии


По умолчанию установлена маска


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Предполагается наличие на листе регламентного отчета карты.


var prxMap = reportBox.getDataView().getGridView().getTabSheet().getModel().getObjects()[0].getITabObject();//получаем карту регламентного отчета


prxMap.setToolTipMaskText("{%Name}");


prxMap.refresh();


После выполнения примера будет изменена всплывающая подсказка для территорий карты: теперь при наведении курсора на область карты будет отображаться наименование территории.


См. также:


[PrxChartView](../PrxChartView/PrxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
