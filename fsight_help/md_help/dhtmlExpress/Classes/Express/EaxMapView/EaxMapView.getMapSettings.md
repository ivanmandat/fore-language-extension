# EaxMapView.getMapSettings

EaxMapView.getMapSettings
-


**


# EaxMapView.getMapSettings


## Синтаксис


getMapSettings();


## Описание


Метод getMapSettings** возвращает настройки карты экспресс-отчета.


## Комментарии


Метод возвращает JSON-объект с настройками карты экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в рабочей области. Получим настройки карты экспресс-отчета, из которых отдельно определим значения цвета и семейства шрифтов:


// Получим представление карты экспресс-отчета
var eaxMapView = expressBox.getDataView().getMapView();
var settings = eaxMapView.getMapSettings();
console.log("Цвет шрифта: " + settings["mapmaster.stylespanel.fontcolor"].Value);
console.log("Семейство шрифтов: " + settings["mapmaster.stylespanel.fontfamily"].Value);

В результате выполнения примера в консоли браузера были выведены цвет и семейство шрифтов:


Цвет шрифта: #000000

Семейство шрифтов: Arial


См. также:


[EaxMapView](EaxMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
