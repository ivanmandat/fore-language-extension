# DataVisualizer.EnableBatchData

DataVisualizer.EnableBatchData
-


**


# DataVisualizer.EnableBatchData


## Синтаксис


EnableBatchData: Boolean


## Описание


Свойство EnableBatchData**
 управляет доступностью пакетных данных у источника диаграмм.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setEnableBatchData,
 а возвращается с помощью метода getEnableBatchData.


Свойство содержит значение true,
 если пакетные данные доступны, и false
 (значение по умолчанию) - если недоступны.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Сделаем пакетные данные доступными,
 а затем получим количество рядов у первого источник данных пузырьковой диаграммы:


// Разрешим использование пакетных данных
bubbleChart.setEnableBatchData(true);
// Получим массив источников данных пузырьковой диаграммы
var dataSources = bubbleChart.getDataSources();
if (bubbleChart.getEnableBatchData() && dataSources) {
    // Получим источник данных по идентификатору
    var ds = bubbleChart.getFirstDataSource();
    // Определим количество рядов данных
    var seriesCount = ds.getSeriesCount();
    console.log("Количество рядов данных у первого источника \"" + ds.getId() + "\": " + seriesCount);
};

В результате выполнения примера в консоли браузера были выведены идентификатор
 и количество рядов у первого источника данных пузырьковой диаграммы:


Количество рядов данных у первого источника "ds0":
 28


См. также:


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
