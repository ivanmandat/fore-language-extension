# IntervalsLegend.getSelectedItemsIndexes

IntervalsLegend.getSelectedItemsIndexes
-


# IntervalsLegend.getSelectedItemsIndexes


## Синтаксис


getSelectedItemsIndexes();


## Описание


Метод getSelectedItemsIndexes
 возвращает индексы выделенных элементов легенды.


## Пример


Для выполнения примера создайте html-страницу, на которой отображается
 [гистограмма](dhtmlChart.chm::/Components/Chart/Chart_Example.htm)
 с легендой. Настройки гистограммы задаются с помощью компонента [Chart](dhtmlChar.chm::/t/Components/Chart/Chart.htm).


Выделите элементы легенды и выполните в консоли:


//Получим легенду интервалов
var legend = chart.getLegend();
//Получим индексы выделенных элементов легенды
var items = legend.getSelectedItemsIndexes();
//Выведем индексы в консоль
console.log(items);
В результате выполнения примера в консоль будут выведены индексы выделенных
 элементов легенды:


(2) [0, 1]


См. также:


[IntervalsLegend](IntervalsLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
