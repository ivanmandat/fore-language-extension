# DefaultSettingsProvider.getDefaultLabelsMaskText

DefaultSettingsProvider.getDefaultLabelsMaskText
-


# DefaultSettingsProvider.getDefaultLabelsMaskText


## Синтаксис


getDefaultLabelsMaskText();


## Описание


Метод getDefaultLabelsMaskText
 возвращает текстовую маску подписей данных по умолчанию.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Получим базовые
 настройки:


// Получим класс базовых настроек
prov = bubbleChart.getSettingsProvider();
// Получим визуализатор, привязанный к базовым настройкам
console.log(prov.getDataVisualizer());
// -> PP.Ui.BubbleChart {...}
// Получим базовые настройки:
console.log(prov.getDefaultLabelsMaskText());
// -> Object {Value: "{%Value}", IsAuto: true}
console.log(prov.getDefaultLegendBetweenFormat());
// -> Object {Value: "от {0} до {1}", IsAuto: true}
console.log(prov.getDefaultLegendGreaterFormat());
// -> Object {Value: "больше {0}", IsAuto: true}
console.log(prov.getDefaultLegendLessFormat());
// -> Object {Value: "меньше {0}", IsAuto: true}
console.log(prov.getDefaultLegendNoDataText());
// -> Object {Value: "нет данных", IsAuto: true}
console.log(prov.getDefaultNoDataText());
// -> Object {Value: "нет данных", IsAuto: true}
console.log(prov.getDefaultSizeLegendMaxValueFormat());
// -> Object {Value: "{0}", IsAuto: true}
console.log(prov.getDefaultSizeLegendMinValueFormat());
// -> Object {Value: "{0}", IsAuto: true}
console.log(prov.getDefaultTooltipMaskText());
// -> "{%Name}
// -> {%XTitle}: {%XValue:#,##.00}
// -> {%YTitle}: {%YValue:#,##.00}
// -> {%RTitle}: {%RValue:#,##.00}
// -> {%ColorTitle}: {%ColorValue:#,##.00}"
В результате выполнения примера в консоль были выведены базовые настройки
 визуализатора.


См. также:


[DefaultSettingsProvider](DefaultSettingsProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
