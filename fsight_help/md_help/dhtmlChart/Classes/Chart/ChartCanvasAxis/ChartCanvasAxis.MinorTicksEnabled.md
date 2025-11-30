# ChartCanvasAxis.MinorTicksEnabled

ChartCanvasAxis.MinorTicksEnabled
-


# ChartCanvasAxis.MinorTicksEnabled


## Синтаксис


MinorTicksEnabled: Boolean;


## Описание


Свойство MinorTicksEnabled определяет
 отображение промежуточных линий делений оси.


## Комментарии


Значение свойства устанавливается из JSON и при помощи метода setSettings, а возвращается с помощью
 метода getSettings.


Допустимые значения:


	- true.
	 Промежуточные линии делений оси отображаются;


	- false.
	 Промежуточные линии делений оси не отображаются.


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
console.log(settings.MinorTicksEnabled);
В результате выполнения примера значение свойства было выведено в консоль.


См. также:


[ChartCanvasAxis](ChartCanvasAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
