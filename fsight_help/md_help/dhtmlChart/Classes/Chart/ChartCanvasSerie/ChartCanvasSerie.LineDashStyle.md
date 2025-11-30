# ChartCanvasSerie.LineDashStyle

ChartCanvasSerie.LineDashStyle
-


# ChartCanvasSerie.LineDashStyle


## Синтаксис


LineDashStyle: String;


## Описание


Свойство LineDashStyle определяет
 стиль рисования линии ряда.


## Комментарии


Значение свойства устанавливается из JSON, а возвращается с помощью
 метода getLineDashStyle.


Допустимые значения:


	- Solid. Прямая линия.


	- Dash. Прерывистая линия.


## Пример


Для выполнения примера необходимо наличие веб-приложения с открытым
 экземпляром экспресс-отчета, с выбранной диаграммой линейного типа. Код
 необходимо вводить в консоли:


// Получим экземпляр диаграммы
dView = PP.App.getModuleObject().getReportBox().getDataView();
chart = dView.getChartView().getInstance();
// Получим первый ряд данных
oldSerie = chart.getSeries()[0];
// Получим настройки ряда данных
newSerie = oldSerie.getSettings();
// Задаем свойства для нового ряда
newSerie.LineDashStyle = "Dash";
// Зададим коэффициент преломления линии
newSerie.LineBreak = 0.5;
// Зададим новому ряду линию тренда
trend = {
BackwardForecast: 0,
Color: "rgb(0,0,0)",
Enabled: true,
ForwardForecast: 0,
LineDashStyle: "Dash",
LineWidth: 1,
Name: "Линейный тренд",
PeakInterval: 12,
ShowInLegend: true,
Type: "Linear",
UseAutomaticText: true
};
newSerie.TrendLine = trend;
// Проверим признак анимированного появления
console.log(oldSerie.getIsNewborn() ? "IsNewborn = true" : "IsNewborn = false")
// Проверим признак анимированного удаления
console.log(oldSerie.getMarkedForDeath() ? "MarkedForDeath = true" : "MarkedForDeath = false")
// Изменим индекс ряда в легенде
newSerie.LegendIndex = 3;
// Включим отображение тени ряда
newSerie.Shadow.Enabled = true;
// Установим цвет и ширину вдавленной линии
newSerie.InsetColor = "rgba(130, 16, 182, 1.000000)";
newSerie.InsetLineWidth = 1;
// Изменим настройки линии, заменяющей пустые значения
newSerie.EmptyLine.LineWidth = 3;
// Изменим коэффициент сглаживания
newSerie.ApproximationPixelCoef = 1;
// Добавим новый ряд
chart.addSerie(newSerie);
В результате выполнения примера был добавлен новый ряд с альтернативными
 настройками, содержащий линию тренда.


См. также:


[ChartCanvasSerie](ChartCanvasSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
