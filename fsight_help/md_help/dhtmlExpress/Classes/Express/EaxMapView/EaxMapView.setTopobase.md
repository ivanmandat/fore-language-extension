# EaxMapView.setTopobase

EaxMapView.setTopobase
-


**


# EaxMapView.setTopobase


## Синтаксис


setTopobase(value: String, type: [PP.MapChartType](dhtmlMapChart.chm::/Enums/MapChartType.htm));


## Параметры


*value.* Топооснова, устанавливаемая
 карте экспресс-отчета;


*type.* Тип карты, для которой устанавливаем
 топооснову.


## Описание


Метод setTopobase** устанавливает
 топооснову для карты экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в рабочей
 области. Установим топооснову и обновим карту экспресс-отчета:


// Получаем представление карты экспресс-отчета
var mapView = expressBox.getDataView().getMapView();
// Обрабатываем событие DataChanged
var source = mapView.getSource();
// Определяем тип
var loadedType = PP.MapChart.Type.SVG;
// Получаем топооснову
var topo = source.getTopobase(source.getTopobaseOd().k, loadedType);
// Устанавливаем топооснову для карты
mapView.setTopobase(topo, loadedType);
// Обновим карту экспресс-отчета
var arg = new PP.Mb.Ui.PropertyChangedEventArgs({
    PropertyName: PP.Exp.Ui.ControlType.Map,
    Metadata: null,
    TypeUpdateData: PP.Exp.Ui.ViewTypeUpdate.Map
});
mapView.refresh(arg);

В результате выполнения примера была установлена топооснова, и обновлена
 карта экспресс-отчета.


См. также:


[EaxMapView](EaxMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
