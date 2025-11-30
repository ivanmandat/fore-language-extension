# IntervalsLegend.getColumnCount

IntervalsLegend.getColumnCount
-


# IntervalsLegend.getColumnCount


## Синтаксис


getColumnCount: Boolean;


## Описание


Метод getColumnCount возвращает
 количество столбцов легенды.


## Комментарии


Количество столбцов возвращается при заданном значении метода:


	- True. Отображаемое количество
	 столбцов, которое определяется при значении True
	 свойства [IntervalsLegend.AutoColumnsCount](IntervalsLegend.AutoColumnsCount.htm);


	- False. Установленное
	 количество столбцов в свойстве [IntervalsLegend.ColumnsCount](IntervalsLegend.ColumnsCount.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с
 наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»).


// Получим легенду интервалов
var legend = bubbleChart.getLegend();
// Включим автоматический расчет количества столбцов
legend.setAutoColumnsCount(true);
// Зададим отображение легенды в два столбца
legend.setColumnsCount(2);
console.log('Отображаемое количество столбцов:', legend.getColumnCount(true));
console.log('Установленное количество столбцов:', legend.getColumnCount(false));
// Обновим диаграмму
bubbleChart.refresh();
В результате выполнения примера в консоль будет выведена информация
 о количестве столбцов:


Отображаемое количество столбцов: 3


Установленное количество столбцов: 2


См. также:


[IntervalsLegend](IntervalsLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
