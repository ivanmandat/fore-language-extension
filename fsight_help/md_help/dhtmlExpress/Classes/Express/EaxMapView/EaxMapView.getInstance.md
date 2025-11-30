# EaxMapView.getInstance

EaxMapView.getInstance
-


**


# EaxMapView.getInstance


## Синтаксис


getInstance();


## Описание


Метод getInstance** возвращает
 экземпляр карты экспресс-отчета.


## Комментарии


Метод возвращает объект типа PP.[MapChart](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в рабочей
 области. Получим масштаб карты экспресс-отчета:


// Получим представление карты экспресс-отчета
var eaxMapView = expressBox.getDataView().getMapView();
console.log("Масштаб карты: " + eaxMapView.getInstance().getScale());

В результате выполнения примера в консоли браузера будет выведен масштаб
 карты экспресс-отчета:


Масштаб карты: 0.5296875


См. также:


[EaxMapView](EaxMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
