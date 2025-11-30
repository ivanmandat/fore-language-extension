# EaxMapView.Rendered

EaxMapView.Rendered
-


**


# EaxMapView.Rendered


## Синтаксис


Rendered**: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие **Rendered** наступает после отрисовки карты экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в рабочей области. Обработаем событие **Rendered**, выводя в консоль браузера значение флага «Режим просмотра» для экспресс-отчета:


// Получим представление карты экспресс-отчета
var eaxMapView = expressBox.getDataView().getMapView()
// Обрабатываем событие Rendered
eaxMapView.Rendered.add(function () {
    var isViewMode = eaxMapView.getViewMode();
    if (isViewMode) {
        console.log("Экспресс-отчет находится в режиме просмотра.");
    } else {
        console.log("Экспресс-отчет находится в режиме редактирования.");
    }
});
// Обновим карту экспресс-отчета
eaxMapView.refreshAll();

После выполнения данного примера в консоли браузера в результате обновления карты экспресс-отчета и соответствующего наступления события **Rendered** будет выведено сообщение о том, что экспресс-отчет находится в режиме редактирования.


См. также:


[EaxMapView](EaxMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
