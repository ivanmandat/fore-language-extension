# EaxMapBox.MetadataChanged

EaxMapBox.MetadataChanged
-


# EaxMapBox.MetadataChanged


## Синтаксис


MetadataChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: Data - массив настроек карты в виде JSON-объектов с полями Name и Value.


## Описание


Событие MetadataChanged наступает после изменения данных карты экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в рабочей области. Обработаем событие MetadataChanged:


// Получаем контейнер карты экспресс-отчета
var mapView = expressBox.getDataView().getMapView();
// Обработаем событие MetadataChanged
mapView.MetadataChanged.add(function (sender, args) {
    console.log("Данные карты экспресс-отчета изменены");
});

В результате выполнения примера после наступления события MetadataChanged в консоли браузера будет выведено сообщение о том, что данные карты экспресс-отчета изменены.


См. также:


[EaxMapBox](EaxMapBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
