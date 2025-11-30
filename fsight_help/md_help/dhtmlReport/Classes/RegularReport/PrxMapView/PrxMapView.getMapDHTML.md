# PrxMapView.getMapDHTML

PrxMapView.getMapDHTML
-


# PrxMapView.getMapDHTML


## Синтаксис


getMapDHTML ();


## Описание


Метод getMapDHTML возвращает
 экземпляр компонента [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm).


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Предполагается наличие на листе
 регламентного отчета карты.


var
 prxMap = reportBox.getDataView().getGridView().getTabSheet().getModel().getObjects()[0].getITabObject();//получаем
 карту регламентного отчета


mapChart = prxMap.getMapDHTML();//получаем
 компонент MapChart


mapChart.setUseZoomOnWheel(false);//отключаем
 возможность изменять масштаб карты при помощи мыши


После выполнения примера масштабирование карты
 при помощи колесика мыши будет недоступно.


См. также:


[PrxChartView](../PrxChartView/PrxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
