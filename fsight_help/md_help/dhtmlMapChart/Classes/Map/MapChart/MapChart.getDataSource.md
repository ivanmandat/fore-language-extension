# MapChart.getDataSource

MapChart.getDataSource
-


# MapChart.getDataSource


## Синтаксис


getDataSource(id: String);


## Параметры


id. Идентификатор источника
 данных.


## Описание


Метод getDataSource возвращает
 источник данных по его идентификатору.


## Комментарии


Метод возвращает значение типа [PP.DataSource](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Определим наименование и данные для
 региона с идентификатором «RU-PER»:


// Получим источник данных
var dataSource = map.getDataSource("DataSource0");
// Получим ряды данных
var series = dataSource.getSeries();
// Получим данные ряда "RU-PER"
var serie = series["RU-PER"].getItems();
console.log("Данные ряда «RU-PER»: " + serie.toString());
// Получим наименование региона с идентификатором «RU-PER»
var region = map.getRegionName("RU-PER");
console.log("Наименование региона «RU-PER»: " + region);
В результате выполнения примера в консоли браузера были выведены наименование
 и данные для региона с идентификатором «RU-PER»:


Данные ряда «RU-PER»: 81.1487794300303,44.9419735208815,4.75851106678998,72.7369993798141


Наименование региона «RU-PER»: Perm


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
