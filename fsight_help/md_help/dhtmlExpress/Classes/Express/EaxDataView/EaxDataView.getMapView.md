# EaxDataView.getMapView

EaxDataView.getMapView
-


**


# EaxDataView.getMapView


## Синтаксис


getMapView();


## Описание


Метод getMapView** **возвращает представление данных «Карта»** в рабочей области экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее получим тип карты, задаваемого с помощью перечисления PP.MapChart.Type:


// Получаем объект класса EaxDataView
var dataView = expressBox.getDataView();
dataView.getMapView().getMapType();

В результате выполнения примера в консоль браузера будет выведен тип карты:


"SVG"


См. также:


[ EaxDataView](EaxDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
