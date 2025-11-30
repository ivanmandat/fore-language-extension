# DataSource.Data

DataSource.Data
-


# DataSource.Data


## Синтаксис


Data: Number;


## Описание


Свойство Data определяет данные для выбранного элемента указанного ряда.


## Комментарии


Значение свойства устанавливается при помощи метода setData и возвращается при помощи метода getData. Из JSON значение свойства установиться нельзя.


Метод setData принимает следующие параметры: value - данные, id - идентификатор ряда, index - индекс элемента ряда, dimAttrId - идентификатор атрибута.


Метод getData принимает следующие параметры: id, index, dimAttrId.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Обработаем событие [DataChanged](DataSource.DataChanged.htm)»). Обработаем событие [DataChanged](DataSource.DataChanged.htm) и установим новые данные для элемента указанного ряда, если он присутствует в источнике. Получим первое не пустое значение указанного атрибута:


// Получим источник данных
var dataSource = bubbleChart.getDataSources().ds0;
// Обработаем событие изменения данных
dataSource.DataChanged.add(function (sender, args) {
    console.log("Новое значение: " + args.Value);
});
// Установим новые данные для ряда, если он присутствует в источнике
if (dataSource.hasItem("Serie0_Point0")) {
    dataSource.setData(2101, "Serie0_Point0", 1, "DimX");
}
// Отобразим первое не пустое значение указанного атрибута
console.log("Первое не пустое значение: " + dataSource.getFirstNotNullData("DimY"));

В результате выполнения примера в консоли браузера было выведено новое значение данных и первое не пустое значение указанного атрибута:


Новое значение: 2101


Первое не пустое значение: 46.1


См. также:


[DataSource](DataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
