# DataSource.ItemName

DataSource.ItemName
-


# DataSource.ItemName


## Синтаксис


ItemName: String;


## Описание


Свойство ItemName определяет наименование ряда по его идентификатору.


## Комментарии


Значение свойства устанавливается при помощи метода setItemName и возвращается при помощи метода getItemName. Из JSON значение свойства установиться нельзя.


Метод setItemName принимает следующие параметры: dimAttrId - идентификатор ряда, name - наименование ряда. Метод getItemName принимает параметр dimAttrId.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Установим имена рядов данных и выведем имя ряда по его идентификатору:


// Определим имена рядов
var itemsNames = {
    Serie0_Point0: "Ukraine",
    Serie10_Point0: "KievRegion"
}
// Получим источник данных
var dataSource = bubbleChart.getDataSources().ds0;
// Установим имена рядов
dataSource.setItemsNames(itemsNames);
// Получим и выведем имя ряда по идентификатору
console.log("Имя ряда с идентификатором Serie0_Point0: " + dataSource.getItemName("Serie0_Point0"));

В результате выполнения примера были установлена имена рядов данных и в консоли браузера было выведено имя ряда, полученного по его идентификатору:


Имя ряда с идентификатором Serie0_Point0: Ukraine


См. также:


[DataSource](DataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
