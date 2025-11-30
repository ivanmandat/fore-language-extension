# DataSource.AttributeName

DataSource.AttributeName
-


# DataSource.AttributeName


## Синтаксис


AttributeName: String;


## Описание


Свойство AttributeName определяет имя атрибута по его идентификатору.


## Комментарии


Значение свойства устанавливается при помощи метода setAttributeName и возвращается при помощи метода getAttributeName. Из JSON значение свойства установиться нельзя.


Метод getAttributeName принимает параметр dimAttrId - идентификатор атрибута, а метод setAttributeName принимает следующие параметры: dimAttrId - идентификатор атрибута, name - новое имя атрибута.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Установим новое значение атрибута и выведем его:


// Получим источник данных
var dataSource = bubbleChart.getDataSources().ds0;
// Установим новое значение атрибута
dataSource.setAttributeName("DimX", "ВВП, млн рублей");
// Выведем новое значение атрибута
console.log("Новое значение атрибута: " + dataSource.getAttributeName("DimX"));

В результате выполнения примера в консоли браузера было выведено новое значение атрибута:


Новое значение атрибута: ВВП, млн рублей


См. также:


[DataSource](DataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
