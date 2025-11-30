# ChartCanvasAxis.PlotLines

ChartCanvasAxis.PlotLines
-


# ChartCanvasAxis.PlotLines


## Синтаксис


PlotLines: Array of Objects;


## Описание


Свойство PlotLines определяет
 массив пользовательских линий оси.


## Комментарии


Значение свойства устанавливается из JSON и при помощи метода setSettings, а возвращается с помощью
 метода getSettings.


Массив может содержать оъекты со следующими полями:


{
LineColor: String, // Цвет линии
LineStyle: String, // Стиль линии
LineWidth: Number, // Ширина линии
ValueFunction: PP.Ui.Chart.LevelLinesNames, // Тип функции описывающий линию
Value: Number, // Уровень линии, в случае если в качестве функции выбрана константа (PP.Ui.Chart.LevelLinesNames.constant)
ZIndex: Number, // Параметр отрисовки линии: <=  0 - линия отрисовывается за рядами, > 0 - линия отрисовывается перед рядами
Label: Object, // Подпись линии
    Text: String, // Текст линии
    Font: PP.Font, // Настройки шрифта
    Align: String, // Выравнивание текста: "Start", "Center", "End"
}

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
console.log(settings.PlotLines);
В результате выполнения примера значение свойства было выведено в консоль.


См. также:


[ChartCanvasAxis](ChartCanvasAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
