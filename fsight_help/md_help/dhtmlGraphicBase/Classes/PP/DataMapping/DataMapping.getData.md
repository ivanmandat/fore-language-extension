# DataMapping.getData

DataMapping.getData
-


# DataMapping.getData


## Синтаксис


getData(id: String);


## Параметры


id. Идентификатор ряда.


## Описание


Метод getData возвращает элемент шкалы или преобразованных данных по идентификатору ряда.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Получим цвет элемента первого и последнего рядов данных:


// Получим объект сопоставления данных рядов цветам пузырьков матрицы
var colorVisual = bubbleChart.getColorVisual();
// Получим настройки сопоставления данных
var mapping = colorVisual.getColorMapping();
// Получим элемент первого ряда
var data = mapping.getData("Serie0_Point0");
// Получим цвет элемента первого ряда
console.log("Цвет элемента первого ряда: " + data.getColor());
// Получим последний ряд данных
var item = mapping.getDataSourceItem("Serie27_Point0");
// Получим цвет элемента последнего ряда
data = mapping.transformDataSourceItem(item);
// Получим цвет элемента последнео ряда
console.log("Цвет элемента последнего ряда: " + data.getColor());

В результате выполнения примера в консоли браузера был выведен цвет элемента первого и последнего рядов данных:


Цвет элемента первого ряда: #EBAF36


Цвет элемента последнего ряда: #FF462C


См. также:


[DataMapping](DataMapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
