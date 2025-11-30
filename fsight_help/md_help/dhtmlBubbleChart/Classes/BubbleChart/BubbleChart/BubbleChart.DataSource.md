# BubbleChart.DataSource

BubbleChart.DataSource
-


**


# BubbleChart.DataSource


## Синтаксис


DataSource: PP.[DataSource](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.htm);


## Описание


Свойство DataSource** определяет
 источник данных для пузырьковой диаграммы.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setDataSource,
 а возвращается с помощью метода getDataSource.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Получим наименование данных по
 оси Y пузырьковой диаграммы:


// Получим источники данных для пузырьковой диаграммы
var dataSources = bubbleChart.getDataSources();
// Установим источник данных пузырьковой диаграммы
bubbleChart.setDataSource(dataSources.ds0);
// Получим наименование данных по оси Y пузырьковой диаграммы
var name = bubbleChart.getDataSource().getAttributesNames().DimY;
console.log("Наименование данных по оси Y: «" + name + "»");

В результате выполнения примера в консоли браузера было выведено наименование
 данных по оси Y:


Наименование данных по оси Y: «Индекс физического
 объема валового регионального продукта, % к предыдущему периоду»


См. также:


[BubbleChart](BubbleChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
