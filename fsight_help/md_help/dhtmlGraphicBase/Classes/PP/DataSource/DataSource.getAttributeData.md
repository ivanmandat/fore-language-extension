# DataSource.getAttributeData

DataSource.getAttributeData
-


# DataSource.getAttributeData


## Синтаксис


getAttributeData(dimAttrId: String, index: Number);


## Параметры


dimAttrId. Идентификатор атрибута;


index. Индекс значения.


## Описание


Метод getAttributeData возвращает массив значений всех рядов по одному атрибуту.


## Комментарии


Метод возвращает массив значений типа Number.


Если среди данных есть пустое значение, то оно записывается единожды в начало массива.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Получим массив значений всех рядов по указанному атрибуту и выведем первые значения:


// Получим источник данных
var dataSource = bubbleChart.getDataSources().ds0;
// Получим массив значений всех рядов по указанному атрибуту
var dimXData = dataSource.getAttributeData("DimX", 1);
// Выведем первые значения полученного массива
console.log("Первые 3 значения полученного массива: " + dimXData[0] + " " + dimXData[1] + " " + dimXData[2]);

В результате выполнения примера в консоли браузера были выведены первые 3 значения массива данных всех рядов по указанному атрибуту:


Первые 3 значения полученного массива: 2100 -12848 10207


См. также:


[DataSource](DataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
