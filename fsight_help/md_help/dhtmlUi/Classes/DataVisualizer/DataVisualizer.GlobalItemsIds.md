# DataVisualizer.GlobalItemsIds

DataVisualizer.GlobalItemsIds
-


# DataVisualizer.GlobalItemsIds


## Синтаксис


GlobalItemsIds: Object


## Описание


Свойство GlobalItemsIds
 определяет словарь глобальных идентификаторов элементов.


## Комментарии


Значение свойства устанавливается из JSON с помощью метода setGlobalItemsIds,
 а возвращается с помощью метода getGlobalItemsIds.


Значение свойства представляет собой JSON-объект, элементы которого
 представлены в следующем формате: <внутренний идентификатор элемента:
 глобальный идентификатор элемента>.


Словарь глобальных идентификаторов служит для сопоставления элементов
 различных визуализаторов экспресс-отчета для синхронизации таких действий,
 как выделение элементов и установка наведения на элементы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»).


Получим массивы идентификаторов легенд и привязок данных. Определим
 и установим словарь глобальных идентификаторов. В консоль среды разработки
 выведем следующие значения:


	- размер легенды пузырьковой диаграммы;


	- глобальный и внутренний идентификаторы элемента;


	- идентификатор привязки данных;


	- идентификатор легенды.


Обработаем события выделения элементов легенды:


// Получаем словарь связи легенд с привязками данных
var legendMapping = bubbleChart.getLegendMapping();
// Определяем массивы идентификаторов легенд и привязок данных и заполняем их
var legendsIds = [];
var dataMappingsIds = [];
for (var key in legendMapping) {
    legendsIds.push(key);
    dataMappingsIds.push(legendMapping[key]);
}
// Получаем легенду по идентификатору
var legend = bubbleChart.getLegendById(legendsIds[0]);
// Устанавливаем словарь глобальных идентификаторов
var globalIds = {
    Serie0_Point0: 23599
}
bubbleChart.setGlobalItemsIds(globalIds);
// Выводим размеры легенды
console.log("Размер легенды: %sx%s", legend.getWidth(), legend.getHeight());
// Выводим глобальный и внутренний идентификаторы элемента
console.log("Глобальный идентификатор: " + bubbleChart.getGlobalItemId(bubbleChart.getBackwardGlobalItemsIds()[23599]));
console.log("Внутренний идентификатор: " + bubbleChart.getLocalItemId(23599));
// Выводим идентификатор привязки данных
console.log("Идентификатор привязки данных: " + legendMapping[legendsIds[0]]);
// Выводим идентификатор легенды
var legendBackwardMapping = bubbleChart.getBackwardLegendMapping();
console.log("Идентификатор легенды: " + legendBackwardMapping[dataMappingsIds[0]]);
// Обрабатываем события выделения элементов легенды
bubbleChart.LegendItemSelected.add(function () {
    console.log("Инициировано событие LegendItemSelected");
});
bubbleChart.LegendItemSelecting.add(function () {
    console.log("Инициировано событие LegendItemSelecting");
});
В результате в консоль среды разработки будут выведены полученные значения:


Размер легенды: 465x32


Глобальный идентификатор: 23599


Внутренний идентификатор: Serie0_Point0


Идентификатор привязки данных: DataMapping257


Идентификатор легенды: 0_BubbleChart71


Также при выделение элементов диаграммы в консоль будут выведены сообщения
 о вызове обработанных событий:


Инициировано событие LegendItemSelecting


Инициировано событие LegendItemSelected


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
