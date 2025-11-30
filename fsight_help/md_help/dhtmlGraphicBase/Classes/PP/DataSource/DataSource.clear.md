# DataSource.clear

DataSource.clear
-


# DataSource.clear


## Синтаксис


clear();


## Описание


Метод clear очищает источник данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Очистим источник данных и проверим, загружены ли данные для элемента с индексом 1:


// Получим источник данных
var dataSource = bubbleChart.getDataSources().ds0;
// Очистим источник данных
dataSource.clear();
// Проверим, загружены ли данные для элемента с индексом 1
if (dataSource.isIndexLoaded(1) == false) {
    console.log("Данные для элемента с индексом 1 не загружены")
};

В результате выполнения примера источник данных был очищен, а в консоли браузера было выведено сообщение, что данные для элемента с указанным индексом не загружены:


Данные для элемента с индексом 1 не загружены


См. также:


[DataSource](DataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
