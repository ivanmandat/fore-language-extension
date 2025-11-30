# DataSource.remove

DataSource.remove
-


# DataSource.remove


## Синтаксис


remove(id: String, dimAttrId: String);


## Параметры


id. Идентификатор ряда;


dimAttrId. Идентификатор атрибута.


## Описание


Метод remove удаляет данные для указанного атрибута ряда.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Удалим атрибуты ряда и выведем соответствующее сообщение:


// Получим источник данных
var dataSource = bubbleChart.getDataSources().ds0;
// Удалим атрибуты ряда
dataSource.remove("Serie0_Point0", "DimX");
// Выведем сообщение об удалении данных
if (dataSource.getSeries().Serie0_Point0.DimX == null) {
    console.log("Атрибуты ряда были удалены");
}

В результате выполнения примера в консоли браузера было выведено сообщение об удалении соответствующих данных:


Атрибуты ряда были удалены


См. также:


[DataSource](DataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
