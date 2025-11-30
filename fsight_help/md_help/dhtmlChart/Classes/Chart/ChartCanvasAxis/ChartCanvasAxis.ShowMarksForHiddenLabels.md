# ChartCanvasAxis.ShowMarksForHiddenLabels

ChartCanvasAxis.ShowMarksForHiddenLabels
-


# ChartCanvasAxis.ShowMarksForHiddenLabels


## Синтаксис


ShowMarksForHiddenLabels: Boolean;


## Описание


Свойство ShowMarksForHiddenLabels
 определяет признак отображения меток для пустых категорий.


## Комментарии


Значение свойства устанавливается из JSON и при помощи метода setSettings, а возвращается с помощью
 метода getSettings и getShowMarksForHiddenLabels.


Допустимые значения:


	- true.
	 Метки для пустых категорий отображаются;


	- false.
	 Метки для пустых категорий не отображаются.


## Пример


Для выполнения примера необходимо наличие веб-приложения с открытым
 экземпляром экспресс-отчета, с выбранной диаграммой. Код необходимо вводить
 в консоли:


// Получим экземпляр диаграммы
dView = PP.App.getModuleObject().getReportBox().getDataView();
chart = dView.getChartView().getInstance();
// Получим горизонтальную ось диаграммы
axis = chart.getXAxis();
// Получим настройки горизонтальной оси
settings = axis.getSettings();
// Получим значение свойства
console.log(settings.ShowMarksForHiddenLabels);
В результате выполнения примера значение свойства было выведено в консоль.


См. также:


[ChartCanvasAxis](ChartCanvasAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
