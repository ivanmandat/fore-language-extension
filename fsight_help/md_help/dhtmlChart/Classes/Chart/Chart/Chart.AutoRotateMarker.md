# Chart.AutoRotateMarker

Chart.AutoRotateMarker
-


# Chart.AutoRotateMarker


## Синтаксис


AutoRotateMarker: Boolean;


## Описание


Свойство AutoRotateMarker определяет,
 установлен ли автоматический поворот [маркеров](UiDiagrams.chm::/Tuning_format/Format_line/Markers_Setup.htm)
 на диаграмме.


## Комментарии


Значение свойства задаётся в конструкторе [Chart](Constructor_Chart.htm)
 или с помощью метода setAutoRotateMarker,
 а возвращается с помощью метода getAutoRotateMarker.


Допустимые значения:


	- true. Маркеры автоматически
	 изменяют своё направление по касательной к линии ряда диаграммы;


	- false. По умолчанию.
	 Маркеры располагаются строго вертикально.


Автоматический поворот доступен для [типа
 маркера](UiDiagrams.chm::/Tuning_format/Format_line/Markers_Setup.htm#marker_type) «Треугольник»/«Обратный треугольник» на диаграммах:


	- линейная;


	- точечная;


	- лепестковая;


	- ступенчатая.


В зависимости от изменения значений линейного ряда диаграммы угол наклона
 маркера динамически изменяется.


Для установки автоматического поворота маркеров на конкретных рядах
 данных используйте свойство [ChartCanvasSerie.AutoRotateMarker](../ChartCanvasSerie/ChartCanvasSerie.AutoRotateMarker.htm).


## Пример


Для выполнения примера используйте HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Chart_Line</title>
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
            width: 450px;
            height: 400px;
        }
    </style>

    <script type="text/javascript">
        var chart;
        // Настроим параметры маркера
        function getMarker(borderColor) {
            var marker = {
                BorderColor: borderColor,
                BorderWidth: 2,
                Color: "rgb(255, 255, 255)",
                Enabled: true,
                Radius: 8,
                Symbol:'triangle'
            };
            return marker;
        }
        function getColors() {
            var colors = [
                "rgb(147,61,168)",
                "rgb(255,217,0)",
                "rgb(255,145,145)",
                "rgb(107,188,128)",
                "rgb(160,203,200)",
                "rgb(195,214,108)",
                "rgb(239,193,100)",
                "rgb(239,193,100)",
                "rgb(255,191,191)",
                "rgb(169,216,181)",
                "rgb(205,227,226)",
                "rgb(223,233,178)",
                "rgb(247,223,175)",
            ];
            return colors;
        }
        // Зададим массив значений для первого ряда данных
        function getSerieData1() {
            var data = [{
                X: 0,
                Y: 10,
                Name: "2001",
                Color: getColors()[0]
            }, {
                X: 1,
                Y: 30,
                Name: "2002",
                Color: getColors()[1]
            }, {
                X: 2,
                Y: 17,
                Name: "2003",
                Color: getColors()[2]
            }, {
                X: 3,
                Y: 25,
                Name: "2004",
                Color: getColors()[3]
            }, {
                X: 4,
                Y: 55,
                Name: "2005",
                Color: getColors()[4]
            }];
            return data;
        }
        // Зададим массив значений для второго ряда данных
        function getSerieData2() {
            var data = [{
                X: 0,
                Y: 15,
                Name: "2001",
                Color: getColors()[5]
            }, {
                X: 1,
                Y: 24,
                Name: "2002",
                Color: getColors()[6]
            }, {
                X: 2,
                Y: 19,
                Name: "2003",
                Color: getColors()[7]
            }, {
                X: 3,
                Y: 29,
                Name: "2004",
                Color: getColors()[8]
            }, {
                X: 4,
                Y: 28,
                Name: "2005",
                Color: getColors()[9]
            }];
            return data;
        }
        // Создадим линейную диаграмму
        function createChart() {
            chart = new PP.Ui.Chart({
                MarkersEnabled: true, // Маркеры для рядов данных
                Width: 450, // Ширина диаграммы
                Height: 400, // Высота диаграммы
                ParentNode: "chart",
                AutoRotateMarker: true,
                Type: "Line", // Тип диаграммы
                // Ось X
                XAxis: {
                    Categories: ["2001", "2002", "2003", "2004", "2005", "2006", "2007"],
                    IsX: true,
                    Labels: {
                        Enabled: true
                    }
                },
                // Дополнительная ось Y
                YSAxis: {
                    Enabled: false
                },
                Series: [{
                    Color: getColors()[0],
                    CustomData: "Ряд 1",
                    Data: getSerieData1(), // Данные ряда
                    DataIndex: 0, // Индекс ряда данных
                    Editable: false, // Данные ряда запрещено редактировать
                    Id: "Serie0",
                    IsMasterSerie: true, // Ряд данных является прогнозным
                    LinePenEnabled: true, // Отображение линий ряда
                    MasterSerieIdx: 0, // Индекс прогнозного ряда
                    Marker: getMarker(getColors()[0]), // Маркер для ряда данных диаграммы
                    Name: "Австралия", // Наименование ряда
                    LineColor: getColors()[4], // Цвет линий
                    Parent: chart,
                    ParentSerieIndex: -1, // Данный ряд данных является родительским
                    Threshold: '0', // Отсчёт оси Y начинается с 0
                    Type: "Line",
                }, {
                    Color: getColors()[1],
                    CustomData: "Ряд 2",
                    DataIndex: 1, // Индекс ряда данных
                    Editable: true, // Данные ряда можно редактировать
                    Data: getSerieData2(), // Массив значений
                    Id: "Serie1",
                    LinePenEnabled: false,
                    Marker: getMarker(getColors()[1]), // Маркер для ряда данных диаграммы
                    Name: "Бразилия", // Наименование ряда
                    LineColor: getColors()[5], // Цвет линий
                    Parent: chart,
                    ParentSerieIndex: 0, // Индекс родительского ряда данных
                    Threshold: '0',
                    Type: "Line"
                }],
            });
            // Перерисуем диаграмму
            chart.redraw(true);
        }
    </script>
</head>
<body onload="createChart()">
    <div id="chart"></div>
</body>
</html>

В результате выполнения примера на html-странице будет размещена диаграмма
 с автоматическим поворотом маркеров по направлению графика:


![](ChartLine.png)


См. также:


[Chart](Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
