# MapDefaultSettingsProvider.getArrowDefaultTooltipMaskText

MapDefaultSettingsProvider.getArrowDefaultTooltipMaskText
-


# MapDefaultSettingsProvider.getArrowDefaultTooltipMaskText


## Синтаксис


getArrowDefaultTooltipMaskText();


## Описание


Метод getArrowDefaultTooltipMaskText
 содержит формат подписей [стрелок](UiMaps.chm::/Configure/Arrows.htm)
 на карте.


## Комментарии


Метод предназначен для внутреннего использования при построении карты
 со [стрелками](UiMaps.chm::/Configure/Arrows.htm).
 Для отображения стрелок необходимо, чтобы в источнике данных экспресс-отчёта
 был куб с измерениями по территориям.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с идентификатором
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»).


// Получим базовые настройки карты
defaultSettings = map.getSettingsProvider();
// Получим формат подписей стрелок на карте
console.log("Формат подписей стрелок на карте: " + defaultSettings.getArrowDefaultTooltipMaskText());

В результате выполнения примера в консоли браузера будет отображен формат
 подписей стрелок на карте:


Формат подписей стрелок на карте: {%StartShape}
 > {%EndShape}, {%TimelineStep}

Цвет, Ширина: {%ColorValue} - {%ColorTitle}


См. также:


[MapDefaultSettingsProvider](MapDefaultSettingsProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
