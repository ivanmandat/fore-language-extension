# ChartCanvasAxis.UseDefaultExtremes

ChartCanvasAxis.UseDefaultExtremes
-


# ChartCanvasAxis.UseDefaultExtremes


## Синтаксис


UseDefaultExtremes: Boolean;


## Описание


Свойство UseDefaultExtremes
 определяет признак использования минимального и максимального значений
 оси диаграммы без данных.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setUseDefaultExtremes,
 а возвращается с помощью метода getUseDefaultExtremes.


Допустимые значения:


	- true.
	 Для оси диаграммы без данных в качестве минимального устанавливается
	 значение, установленное свойством [ChartCanvasAxis.Min](ChartCanvasAxis.Min.htm)
	 , в качестве максимального - значение, установленное свойством [ChartCanvasAxis.Max](ChartCanvasAxis.Max.htm);


	- false.
	 Для оси диаграммы без данных не устанавливаются минимальное и максимальное
	 значения (по умолчанию).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Chart](../../../Components/Chart/Chart.htm) с наименованием
 «chart» (см. «[Пример
 создания точечной диаграммы](../../../Components/Chart/ChartScatter.htm)»). Разрешим для оси Y использование минимального
 и максимального значений, для оси X их использование запретим, а затем
 удалим все ряды данных диаграммы:


// Запрещаем использование минимального и максимального значений для оси X
chart.getXAxis().setUseDefaultExtremes(false);
// Разрешаем использование минимального и максимального значений для оси Y
chart.getYAxis().setUseDefaultExtremes(true);
// Удаляем ряды данных
chart.removeAllSeries(true);
В результате выполнения примера после удаления рядов данных диаграммы
 была отображена только ось Y с минимальным значением, равным 0, и максимальным,
 равным 70:


![](ChartCanvasAxis_UseDefaultExtremes.png)


См. также:


[ChartCanvasAxis](ChartCanvasAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
