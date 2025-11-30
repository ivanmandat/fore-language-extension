# ChartCanvasAxis.MinorIntervals

ChartCanvasAxis.MinorIntervals
-


# ChartCanvasAxis.MinorIntervals


## Синтаксис


MinorIntervals: Number;


## Описание


Свойство MinorIntervals определяет
 количество промежуточных линий.


## Комментарии


Значение свойства устанавливается из JSON и при помощи метода setSettings, а возвращается с помощью
 метода getSettings.


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
console.log(settings.MinorIntervals);
В результате выполнения примера значение свойства было выведено в консоль.


См. также:


[ChartCanvasAxis](ChartCanvasAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
