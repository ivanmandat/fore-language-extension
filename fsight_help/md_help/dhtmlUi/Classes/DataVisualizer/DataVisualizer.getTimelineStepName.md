# DataVisualizer.getTimelineStepName

DataVisualizer.getTimelineStepName
-


# DataVisualizer.getTimelineStepName


## Синтаксис


getTimelineStepName(): String;


## Описание


Метод getTimelineStepName
 возвращает текущий шаг временной шкалы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm) »). Необходимо выбрать
 визуализатор «пузырьковая диаграмма»:


// Получим представление визуализатора PP.Ui.BubbleChart
dataV = expressBox.getDataView();
chartV = dataV.getBubbleChartView();
bubbleC = chartV.getInstance();
// Выведем в консоль текущий шаг временной шкалы
console.debug(bubbleC.getTimelineStepName());
В результате выполнения примера будет выведен текущий шаг временной
 шкалы.


См. также:


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
