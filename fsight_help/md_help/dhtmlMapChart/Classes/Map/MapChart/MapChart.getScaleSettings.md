# MapChart.getScaleSettings

MapChart.getScaleSettings
-


# MapChart.getScaleSettings


## Синтаксис


getScaleSettings();


## Описание


Метод getScaleSettings возвращает настройки масштаба карты.


## Комментарии


Метод возвращает JSON-объект со следующими полями: Scale - масштаб карты, Point - центр масштабирования, Type - тип топоосновы карты. Если масштаб не менялся, то метод возвращает null.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Пример создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»), а также требуется, чтобы масштаб карты был вручную изменён с помощью колёсика мыши. Получим теперь настройки масштабирования:


var scaleSettings = map.getScaleSettings();
if (scaleSettings != null) {
    console.log("Масштаб: " + scaleSettings.Scale);
    console.log("Центр масштабирования: " + scaleSettings.Point);
};

В результате выполнения примера в консоли браузера были выведены настройки масштабирования:


Масштаб: 1.1353174603174605


Центр масштабирования: 313,156


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
