# ChartCanvasAxis.MinorTickPlacement

ChartCanvasAxis.MinorTickPlacement
-


# ChartCanvasAxis.MinorTickPlacement


## Синтаксис


MinorTickPlacement: String;


## Описание


Свойство MinorTickPlacement
 определяет стиль расположения промежуточных линий делений оси.


## Комментарии


Значение свойства устанавливается из JSON и при помощи метода setSettings, а возвращается с помощью
 метода getSettings.


Значение может принимать значения: "Outside",
 "Center".


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
console.log(settings.MinorTickPlacement);
В результате выполнения примера значение свойства было выведено в консоль.


См. также:


[ChartCanvasAxis](ChartCanvasAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
