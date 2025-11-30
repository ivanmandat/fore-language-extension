# EaxMapView.LegendPosition

EaxMapView.LegendPosition
-


# EaxMapView.LegendPosition


## Синтаксис


LegendPosition: String;


## Описание


Свойство LegendPosition определяет расположение легенды карты.


## Комментарии


Значение свойства с помощью метода setLegendPosition, а возвращается с помощью метода getLegendPosition. Из JSON значение задать нельзя.


Свойство может содержать следующие строковые значения: «bottom» или «top» - расположение легенды снизу или сверху от области построения карты, «left» или «right» - выравнивание по левому или правому краю. Данные значения могут комбинироваться с использованием разделителя «|».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в области данных. Расположим легенду над областью построения карты справа:


// Получим контейнер с картой экспресс-отчёта
var mapView = expressBox.getDataView().getMapView();
// Расположим легенду над областью построения карты справа
mapView.setLegendPosition("bottom|left");

В результате выполнения примера легенда была расположена над областью построения карты справа:


![](EaxMapView_LegendPosition.png)


См. также:


[EaxBubbleChartView](../EaxBubbleChartView/EaxBubbleChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
