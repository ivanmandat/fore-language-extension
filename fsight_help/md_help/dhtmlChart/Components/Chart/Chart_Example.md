# Пример создания гистограммы

Пример создания гистограммы
-


# Пример создания гистограммы


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода.


Для создания гистограммы с легендой используйте HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Histogram</title>
    <script src="../build/PP.js" type="text/javascript"></script>
    <script src="../build/PP.GraphicsBase.js" type="text/javascript"></script>
    <script src="../build/PP.Charts.js" type="text/javascript"></script>
    <script src="../build/PP.Charts_Canvas.js" type="text/javascript"></script>
    <link href="../build/PP.css" rel="stylesheet" type="text/css" />
    <script src="../resources/PP.resources.ru.js" type="text/javascript"></script>

    <style type="text/css">
    div#chart {
        border: #CCCCCC 1px solid;
        padding: 1px;
        margin: 1px;
        width: 600px;
        height: 500px;
    }
    </style>

    <script type="text/javascript">
        var chart; // Диаграмма
        // Создаем диаграмму
        function createChart() {
            // Создаем массивы значений для рядов данных
            var data0 = [-10, 10, -20, 20, -30];
            var data1 = [-20, 20, -30, 30, -40];
            var data2 = [-30, 30, -40, 40, -50];
            var data3 = [-40, 40, -50, 50, -60];
            var data4 = [-50, 50, -60, 60, -70];
            var trendData = [10, 20, 30, 40, 50];
            // Создаем массив с цветовыми значениями
            var colors = ["rgb(192,217,253)", "rgb(163,200,252)", "rgb(134,183,251)",
            "rgb(96,161,250)", "rgb(192,142,204)", "rgb(192,107,188)"
            ];
            // Диаграмма
            chart = new PP.Ui.Chart({
                Width: 600, // Ширина диаграммы
                Height: 500, // Высота диаграммы
                // Отступы диаграммы
                PaddingLeft: 15,
                PaddingRight: 20,
                PaddingTop: 30,
                PaddingBottom: 40,
                UseSoftPadding: false, // Признак использования альтернативного расчета отступов
                ParentNode: "chart", // Родительский элемент
                Type: "Column", // Тип диаграммы
                ToolTip:{},
                AlternateColumnPadding: true,
                PointPadding: -0.2,
                ExcludeInvisibleSeries: true, // Признак необходимости исключения невидимых рядов данных из расчетов
                // Ряды данных
                "Series": [{ // Ряд 1
                    "Name": "Австралия", // Наименование ряда
                    "Data": data0, // Массив значений
                    "Color": colors[0], // Цвет
                    "LineColor": colors[1], // Цвет линий
                    "LineWidth": 4, // Толщина линий
                    "ShowInLegend": false, // Признак отображения ряда в легенде
                    "IsVisible": true // Признак видимости ряда
                }, { // Ряд 2
                    "Name": "Азия",
                    "Data": data1,
                    "Color": colors[1],
                    "LineColor": colors[2],
                    "LineWidth": 4,
                    "ShowInLegend": true
                }, { // Ряд 3
                    "Name": "Африка",
                    "Data": data2,
                    "Color": colors[2],
                    "LineColor": colors[3],
                    "LineWidth": 4,
                    "ShowInLegend": true
                }, { // Ряд 4
                    "Name": "Европа",
                    "Data": data3,
                    "Color": colors[3],
                    "LineColor": colors[4],
                    "LineWidth": 4,
                    "ShowInLegend": true
                }, { // Ряд 5
                    "Name": "С. Америка",
                    "Data": data4,
                    "Color": colors[4],
                    "LineColor": colors[5],
                    "LineWidth": 4,
                    "ShowInLegend": true
                }, {
                    // Линия тренда
                    "Type": "Line", // Тип ряда
                    "Name": "Тренд",
                    "Data": trendData,
                    "Color": colors[4],
                    "LineColor": colors[5],
                    "LineWidth": 2,
                    "ShowInLegend": false,
                    "Trend": true
                }],
                // Ось категорий
                "XAxis": {
                    "Categories": ["2001", "2002", "2003", "2004", "2005"], // Массив категорий
                    // Настройки подписей
                    "Labels": {
                        "Enabled": true
                    }
                },
                // Ось значений
                "YAxis": {
                    "Labels": {
                        "Enabled": true
                    }, // Настройки подписей
                    "Max": 110, // Максимальное значение
                    "Min": -110, // Минимальное значение
                },
                // Дополнительная ось значений
                "YSAxis": {
                    "Enabled": false // Признак активности оси
                },
                // Область отрисовки диаграммы
                "PlotArea": {},
                // Легенда диаграммы
                "Legend": {
                    CellSpacing: 60 // Отступы между элементами легенды
                },
                // Заголовок диаграммы
                "Title": {
                    "Text": "Диаграмма"
                }
            })
        }
    </script>
</head>
<body onload="createChart()">
    <div id="chart"></div>
</body>
</html>

В результате выполнения примера на html-странице будет размещен компонент
 [Chart](Chart.htm) в виде гистограммы с легендой:


![](ChartColumn.png)


См. также:


[Chart](Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
