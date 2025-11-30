# PrxMapView.RegionClick

PrxMapView.RegionClick
-


# PrxMapView.RegionClick


## Синтаксис


RegionClick: function (sender,args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RegionClick наступает при нажатии на территорию карты.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Предполагается наличие на листе регламентного отчета карты.


var prxMap = reportBox.getDataView().getGridView().getTabSheet().getModel().getObjects()[0].getITabObject();//получаем карту регламентного отчета


prxMap.RegionClick.add(function (sender, args) {//обработчик события щелчка по региону


    console.log(args.ShapeId)


});


После выполнения примера при нажатии на регион в консоль будет выводиться идентификатор выбранной территории.


См. также:


[PrxChartView](../PrxChartView/PrxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
