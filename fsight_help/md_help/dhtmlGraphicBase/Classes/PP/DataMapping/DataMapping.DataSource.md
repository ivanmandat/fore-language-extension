# DataMapping.DataSource

DataMapping.DataSource
-


# DataMapping.DataSource


## Синтаксис


DataSource: PP.DataSource;


## Описание


Свойство DataSource определяет источник данных для объекта настроек сопоставления данных.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setDataSource.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Установим для объекта с настройками сопоставления данных цветам пузырьков новый идентификатор атрибута измерений и источник данных, а также получим наименование атрибута измерения:


// Получим объект сопоставления данных рядов цветам пузырьков
var colorVisual = bubbleChart.getColorVisual();
// Установим источник данных
colorVisual.setDataSource(bubbleChart.getDataSources().ds0);
// Получим настройки сопоставления данных
var mapping = colorVisual.getColorMapping();
// Установим идентификатор атрибута измерения
mapping.setDimAttributeId("DimR");
// Получим идентификатор атрибута измерения
console.log("Идентификатор атрибута измерения: " + mapping.getDimAttributeId());
// Получим наименование атрибута измерения
var dimName = colorVisual.getDataSource().getAttributesNames()[mapping.getDimAttributeId()];
console.log("Наименование атрибута измерения: «" + dimName + "»");

В результате выполнения примера в консоли браузера были выведены новый идентификатор и наименование атрибута измерения, соответствующего сопоставлению данных цветам пузырьков:


Идентификатор атрибута измерения: DimR


Наименование атрибута измерения: «Валовой региональный продукт на душу населения, рублей»


См. также:


[DataMapping](DataMapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
