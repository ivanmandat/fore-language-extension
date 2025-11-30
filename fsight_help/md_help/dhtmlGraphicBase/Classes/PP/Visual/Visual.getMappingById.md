# Visual.getMappingById

Visual.getMappingById
-


# Visual.getMappingById


## Синтаксис


getMappingById(id: Number);


## Параметры


id. Идентификатор настроек сопоставления данных.


## Описание


Метод getMappingById возвращает настройки сопоставления данных по его идентификатору.


## Комментарии


Метод возвращает объект типа PP.DataMapping.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Установим для объекта сопоставления данных цветам пузырьков пузырьковой диаграммы наименование и источник данных, а также получим настройки сопоставления данных и определим идентификатор и наименование атрибута измерения:


// Получим объект сопоставления данных рядов цветам пузырьков пузырьковой диаграммы
var colorVisual = bubbleChart.getColorVisual();
// Установим наименование сопоставления
colorVisual.setName("colorVisual");
// Установим источник данных
colorVisual.setDataSource(bubbleChart.getDataSources().ds0);
// Получим наименование сопоставления данных
console.log("Наименование сопоставления данных: " + colorVisual.getName());
// Получим идентификатор настроек сопоставления
var mappingId = colorVisual.getColorMapping().getId();
var mapping = colorVisual.getMappingById(mappingId);
// Получим идентификатор атрибута измерения
console.log("Идентификатор атрибута измерения: " + mapping.getDimAttributeId());
// Получим наименование атрибута измерения
var dimName = colorVisual.getDataSource().getAttributesNames()[mapping.getDimAttributeId()];
console.log("Наименование атрибута измерения: «" + dimName + "»");

В результате выполнения примера в консоли браузера были выведены наименование объекта сопоставления данных, а также идентификатор и наименование атрибута измерения, соответствующего сопоставлению данных цветам пузырьков пузырьковой диаграммы:


Наименование сопоставления данных: colorVisual


Идентификатор атрибута измерения: DimCol


Наименование атрибута измерения: «Валовой региональный продукт на душу населения, рублей»


См. также:


[PP.Visual](Visual.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
