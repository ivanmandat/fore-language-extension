# EaxMapDefaultSettingsProvider.getBarDefaultTooltipMaskText

EaxMapDefaultSettingsProvider.getBarDefaultTooltipMaskText
-


# EaxMapDefaultSettingsProvider.getBarDefaultTooltipMaskText


## Синтаксис


getBarDefaultTooltipMaskText();


## Описание


Метод getBarDefaultTooltipMaskText
 возвращает формат вывода всплывающей подсказки столбикового показателя
 на карте экспресс-отчета.


## Комментарии


Метод возвращает формат вывода по умолчанию.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с идентификатором «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в рабочей
 области. Получим настройки вывода всплывающих подсказок:


// Получим базовые настройки карты экспресс-отчета
dataView = expressBox.getDataView();
mapView = dataView.getMapView()
map = mapView.getInstance()
defaultSettings = map.getSettingsProvider();
// Получим формат вывода всплывающей подсказки столбикового показателя
console.log("Формат вывода всплывающей подсказки столбикового показателя: " + defaultSettings.getBarDefaultTooltipMaskText());
// -> "{%Name}, {%TimelineStep}"
// Получим формат вывода всплывающей подсказки кругового показателя
console.log("Формат вывода всплывающей подсказки кругового показателя: " + defaultSettings.getPieDefaultTooltipMaskText());
// -> "{%Name}, {%TimelineStep}
// Получим формат вывода всплывающей подсказки пузырькового показателя
console.log("Формат вывода всплывающей подсказки пузырькового показателя: " + defaultSettings.getBubbleDefaultTooltipMaskText());
// -> "{%Name}, {%TimelineStep}
// Получим формат вывода всплывающей подсказки метки
console.log("Формат вывода всплывающей подсказки метки: " + defaultSettings.getMarkerDefaultTooltipMaskText());
// -> "{%Name}, {%TimelineStep}
В результате выполнения примера в консоль браузера будут выведены базовые
 настройки вывода всплывающих подсказок для различных визуальных элементов
 карты экспресс-отчета.


См. также:


[EaxMapDefaultSettingsProvider](EaxMapDefaultSettingsProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
