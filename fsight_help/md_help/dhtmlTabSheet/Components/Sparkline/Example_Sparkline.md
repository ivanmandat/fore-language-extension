# Пример создания компонента Sparkline

Пример создания компонента Sparkline
-


# Пример создания компонента Sparkline


Для выполнения примера необходимо наличие на html-странице ссылок на
 файл сценария PP.js и файл стилей PP.css, в теге <body> html-документа
 элемента <div> с идентификатором «sparkline». В событие onload тега
 <body> необходимо добавить вызов функции createSparkline(). Добавим
 на html-страницу спарклайн с данными:


function createSparkline() {
    // Создаем спарклайн
    sparkline = new PP.Ui.Sparkline({
        // Устанавливаем родительский элемент
        ParentNode: document.getElementById("sparkline"),
        // Устанавливаем размеры
        Width: 395,
        Height: 100,
        // Устанавливаем значения точек
        Values: [2, 8, 10, 15, 3, 1, 9, 1, 4, 8, 20, 15, 13, 12, 6, 8, 21, 16, 13, 20],
        // Устанавливаем режимы отображения
        ViewMode: [PP.Ui.SparklineViewMode.Line, PP.Ui.SparklineViewMode.Column],
        // Устанавливаем цвет фона
        BackgroundColor: PP.Color.Colors.lightgray,
        // Устанавливаем цвет линии
        LineColor: PP.Color.Colors.darkred,
        // Устанавливаем ширину линии
        LineThickness: 2,
        // Устанавливаем цвет столбцов
        FillColor: PP.Color.Colors.blue,
        // Устанавливаем цвет границ столбцов
        StrokeColor: PP.Color.Colors.darkblue,
        // Устанавливаем ширину границ столбцов
        StrokeThickness: 3,
        // Устанавливаем отступ по краям графика
        Padding: 2,
        // Устанавливаем отрисовку столбцов для всех значений
        UsePeakValuesToColumns: false
    });
}
В результате будет создан спарклайн:


![](Sparkline_Example.png)


См. также:


[Sparkline](Sparkline.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
