# MapDefaultSettingsProvider.getArrowDefaultLabelMaskText

MapDefaultSettingsProvider.getArrowDefaultLabelMaskText
-


# MapDefaultSettingsProvider.getArrowDefaultLabelMaskText


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
 [MapChart](../../../Components/MapChart/MapChart.htm) с идентификатором
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»).


// Получим базовые настройки карты
defaultSettings = map.getSettingsProvider();
// Получим формат вывода подписей стрелок на карте
console.log("Формат вывода подписей стрелок на карте: " + defaultSettings.getArrowDefaultLabelMaskText());

В результате выполнения примера в консоли браузера будут отображены
 настройки вывода подписей стрелок на карте:


Формат вывода подписей стрелок на карте: {%StartShape}
 > {%EndShape}, {%TimelineStep}

Цвет, Ширина: {%ColorValue} - {%ColorTitle}


См. также:


[MapDefaultSettingsProvider](MapDefaultSettingsProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
