# MapDefaultSettingsProvider.getBarDefaultTooltipMaskText

MapDefaultSettingsProvider.getBarDefaultTooltipMaskText
-


# MapDefaultSettingsProvider.getBarDefaultTooltipMaskText


## Синтаксис


getBarDefaultTooltipMaskText();


## Описание


Метод getBarDefaultTooltipMaskText
 возвращает формат вывода всплывающей подсказки столбикового показателя
 на карте.


## Комментарии


Метод возвращает формат вывода по умолчанию.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с идентификатором
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Получим настройки вывода всплывающих
 подсказок:


// Получим базовые настройки карты
defaultSettings = map.getSettingsProvider();
// Получим формат вывода всплывающей подсказки столбикового показателя
console.log("Формат вывода всплывающей подсказки столбикового показателя: " + defaultSettings.getBarDefaultTooltipMaskText());
// -> "{%Name}, {%TimelineStep}"
// {%HeightValue:#,##0.00} - {%HeightTitle}"
// Получим формат вывода всплывающей подсказки кругового показателя
console.log("Формат вывода всплывающей подсказки кругового показателя: " + defaultSettings.getPieDefaultTooltipMaskText());
// -> "{%Name}, {%TimelineStep}
// {%Value:#,##0.00} - {%Title}"
// Получим формат вывода всплывающей подсказки пузырькового показателя
console.log("Формат вывода всплывающей подсказки пузырькового показателя: " + defaultSettings.getBubbleDefaultTooltipMaskText());
// -> "{%Name}, {%TimelineStep}
// {%SizeValue:#,##0.00} - {%SizeTitle}"
// Получим формат вывода всплывающей подсказки метки
console.log("Формат вывода всплывающей подсказки метки: " + defaultSettings.getMarkerDefaultTooltipMaskText());
// -> "{%Name}, {%TimelineStep}
// {%ColorValue:#,##0.00} - {%ColorTitle}"
В результате выполнения примера в консоль браузера будут выведены базовые
 настройки вывода всплывающих подсказок для различных визуальных элементов
 карты.


См. также:


[MapDefaultSettingsProvider](MapDefaultSettingsProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
