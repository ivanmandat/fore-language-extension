# DataSource.getMaxIndexData

DataSource.getMaxIndexData
-


# DataSource.getMaxIndexData


## Синтаксис


getMaxIndexData();


## Описание


Метод getMaxIndexData возвращает максимальное количество элементов по всем атрибутам.


## Комментарии


Метод возвращает значение типа Number.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Получим максимальное количество элементов по всем атрибутам и количество рядов данных в источнике:


// Получим источник данных
var dataSource = bubbleChart.getDataSources().ds0;
// Получим максимальное количество элементов по всем атрибутам источника данных
console.log("Максимальное количество элементов по всем атрибутам: " + dataSource.getMaxIndexData());
// Получим количество рядов данных в источнике
console.log("Количество рядов данных в источнике: " + dataSource.getSeriesCount());

В результате выполнения примера в консоли браузера было выведено максимальное количество элементов по всем атрибутам и количество рядов данных в источнике:


Максимальное количество элементов по всем атрибутам: 7


Количество рядов данных в источнике: 28


См. также:


[DataSource](DataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
