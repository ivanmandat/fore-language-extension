# Пример создания линейной диаграммы

Пример создания линейной диаграммы
-


# Пример создания линейной диаграммы


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода.


Для создания линейной диаграммы используйте HTML-код:


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
        // Создаем диаграмму
        function createChart() {
            // Линейная диаграмма
            chart = new PP.Ui.Chart({
                MarkersEnabled: true, // Отображаем маркеры для рядов данных
                Width: 450, // Ширина диаграммы
                Height: 400, // Высота диаграммы
                ParentNode: "chart",
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
                }
            });
        }
        // Возвращает маркер для ряда данных диаграммы
        function getMarker(borderColor) {
            var marker = {
                BorderColor: borderColor,
                BorderWidth: 2,
                Color: "rgb(255, 255, 255)",
                Enabled: chart.getMarkersEnabled(),
                Radius: 8,
                Symbol: chart.getMarkersSymbol(),
            };
            return marker;
        }
        // Создаёт массив цветов
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
        // Создаёт ряды данных для диаграммы
        var serie1, serie2;
                function createSeries() {
                    chart.setSeries([serie1 = createSerie1(), serie2 = createSerie2()]);
                    chart.redraw(true);
                }
        // Создаёт первый ряд данных для линейной диаграммы
        function createSerie1() {
            var serie = new PP.Ui.ChartCanvasSerie({
                Click: onClick,
                Color: getColors()[0],
                CustomData: "Ряд 1",
                Data: getSerieData1(), // Данные ряда
                DataIndex: 0, // Индекс ряда данных
                DataLabels: getDataLabels(),
                Editable: false, // Данные ряда запрещено редактировать
                Id: "Serie0",
                IsMasterSerie: true, // Указываем, что ряд данных является прогнозным
                LinePenEnabled: true, // Разрешаем отображать линии ряда
                MasterSerieIdx: 0, // Индекс прогнозного ряда
                Marker: getMarker(getColors()[0]), // Маркер для ряда данных диаграммы
                Name: "Австралия", // Наименование ряда
                LineColor: getColors()[4], // Цвет линий
                OnContextMenu: onContextMenu,
                Parent: chart,
                ParentSerieIndex: -1, // Данный ряд данных является родительским
                Threshold: '0', // Отсчёт оси Y начинаем с 0
                Type: "Line",
            });
            return serie;
        }
        // Создаёт второй ряд данных для линейной диаграммы
        function createSerie2() {
            var serie = new PP.Ui.ChartCanvasSerie({
                Click: onClick,
                Color: getColors()[1],
                CustomData: "Ряд 2",
                DataIndex: 1, // Индекс ряда данных
                DataLabels: getDataLabels(),
                Editable: true, // Данные ряда можно редактировать
                Data: getSerieData2(), // Массив значений
                Id: "Serie1",
                LinePenEnabled: false,
                Marker: getMarker(getColors()[1]), // Маркер для ряда данных диаграммы
                Name: "Бразилия", // Наименование ряда
                LineColor: getColors()[5], // Цвет линий
                OnContextMenu: onContextMenu,
                Parent: chart,
                ParentSerieIndex: 0, // Индекс родительского ряда данных
                Threshold: '0',
                Type: "Line"
            });
            // Устанавливаем текст в легенде для данного ряда
            serie.setLegendText(serie.getCustomData() + ": " + serie.getName());
            serie.setLegendTextWidth(5);
            return serie;
        }
        // Возвращает массив значений для первого ряда данных
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
        // Возвращает массив значений для второго ряда данных
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
        // Обрабатывает нажатие на точку ряда данных
        function onClick(sender, args) {
            if (args && args.Point) {
                if (args.Point.getParent().checkPointOnPlot(args.Point)) {
                    console.log("Выбрана точка со значением %s в пределах области построения диаграммы",
                        args.Point.getY());
                } else {
                    console.log("Выбрана точка со значением %s за пределами области построения диаграммы",
                        args.Point.getY());
                }
            };
        }
        // Обрабатывает событие вызова контекстного меню для точки ряда данных
        function onContextMenu(sender, args) {
            if (args && args.Point) {
                printSerieInfo(args.Point.getParent());
            }
        }
        // Возвращает подписи данных для точек ряда данных
        function getDataLabels() {
            var options = {
                BackgroundColor: "rgb(255,239,153)",
                BorderColor: "transparent",
                BorderWidth: 1,
                Font: new PP.Font(),
                Radius: 0
            };
            return options;
        }
        // Выводит информацию об указанном ряде данных
        function printSerieInfo(serie) {
            if (serie) {
                // Определяем, является ли ряд прогнозным
                if (serie.getIsMasterSerie()) {
                    console.log("Ряд данных является прогнозным и имеет индекс %s",
                        serie.getMasterSerieIdx());
                } else {
                    console.log("Ряд данных не является прогнозным");
                }
                console.log("Ряд данных %sвыделен", (serie.getIsSelected() ? "" : "не "));
                console.log("Ряд данных %sподсвечен", (serie.getHighlighted() ? "" : "не "));
                if (serie.getState === "Hover") {
                    console.log("На ряд данных наведён курсор мыши");
                } else {
                    console.log("На ряд данных не наведён курсор мыши");
                }
            }
        }
        function onReady() {
            // Создаём линейную диаграмму
            createChart();
            // Создаём ряды данных для диаграммы
            createSeries();
            // Перерисовываем диаграмму
            chart.redraw(true);
        }
    </script>
</head>
<body onload="onReady()">
    <div id="chart"></div>
</body>
</html>

В результате выполнения примера на html-странице будет размещен компонент
 [Chart](Chart.htm) в виде линейной диаграммы с двумя рядами
 данных:


![](ChartLine.png)


См. также:


[Chart](Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
