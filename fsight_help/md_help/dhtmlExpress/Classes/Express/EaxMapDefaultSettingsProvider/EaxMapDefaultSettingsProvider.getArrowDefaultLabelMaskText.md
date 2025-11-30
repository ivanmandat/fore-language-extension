# EaxMapDefaultSettingsProvider.getArrowDefaultLabelMaskText

EaxMapDefaultSettingsProvider.getArrowDefaultLabelMaskText
-


# EaxMapDefaultSettingsProvider.getArrowDefaultLabelMaskText


## Синтаксис


getArrowDefaultLabelMaskText();


## Описание


Метод getArrowDefaultLabelMaskText
 возвращает формат вывода подписей [стрелок](UiMaps.chm::/Configure/Arrows.htm)
 на карте.


## Комментарии


Метод предназначен для внутреннего использования при установленном флажке
 «[Подписи
 стрелок](UiMaps.chm::/Configure/Arrows.htm)»,
 если в экспресс-отчёте содержится карта со стрелками. Для отображения
 стрелок необходимо, чтобы в источнике данных экспресс-отчёта был куб с
 измерениями по территориям.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с идентификатором «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


// Получим базовые настройки карты
dataView = expressBox.getDataView();
mapView = dataView.getMapView();
map = mapView.getInstance();
defaultSettings = map.getSettingsProvider();
// Получим формат вывода подписей стрелок на карте
console.log("Формат вывода подписей стрелок на карте: " + defaultSettings.getArrowDefaultLabelMaskText());

В результате выполнения примера в консоли браузера будут отображены
 настройки вывода подписей стрелок на карте:


Формат вывода подписей стрелок на карте: {%StartShape}
 > {%EndShape}, {%TimelineStep}


См. также:


[EaxMapDefaultSettingsProvider](EaxMapDefaultSettingsProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
