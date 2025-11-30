# EaxMapView.RequestMetadata

EaxMapView.RequestMetadata
-


**


# EaxMapView.RequestMetadata


## Синтаксис


RequestMetadata**: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие **RequestMetadata** генерируется при отсутствии метаданных в источнике данных диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. страницу «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в рабочей области. Обработаем событие RequestMetadata, проверяя, загружена ли карта экспресс-отчета:


// Получаем представление карты экспресс-отчета
var mapView = expressBox.getDataView().getMapView();
// Обрабатываем событие RequestMetadata
mapView.RequestMetadata.add(function () {
    if (mapView.isLoaded()) {
        console.log("Карта экспресс-отчета успешно загружена.")
    } else {
        console.log("Карта экспресс-отчета не загружена.")
    }
});

После выполнения примера в результате наступления события RequestMetadata в консоли браузера было выведено сообщение о том, что карта экспресс-отчета не загружена.


См. также:


[EaxMapView](EaxMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
