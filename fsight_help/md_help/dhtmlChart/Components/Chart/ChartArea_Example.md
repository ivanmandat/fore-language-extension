# Пример создания диаграммы с областями

Пример создания диаграммы с областями
-


# Пример создания диаграммы с областями


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылку на css-файл PP.css. Также нужно добавить ссылки на
 следующие js-файлы:


	- PP.js;


	- PP.GraphicsBase.js;


	- PP.Charts_Canvas.js;


	- resources.ru.js.


2. Далее в теге <head> необходимо добавить стиль для блока с идентификатором
 «chart»:


<style type="text/css">
    div#chart {
        border: #CCCCCC 1px solid;
        padding: 1px;
        margin: 1px;
        width: 600px;
        height: 500px;
    }
</style>
3. Затем в теге <head> необходимо добавить сценарий, создающий
 диаграмму с областями:


<script>
var chart; // Диаграмма
// Создает диаграмму
function createChart() {
    // Создаем диаграмму
    chart = new PP.Ui.Chart({
        Width: 600, // Ширина диаграммы
        Height: 500, // Высота диаграммы
        ParentNode: "chart",
        Type: "Area", // Тип диаграммы
        // Ось X
        XAxis: {
            Categories: ["2001", "2002", "2003", "2004", "2005", "2006"],
            Labels: {
                Enabled: true
            }
        },
        // Ось Y

        YAxis: {
            Labels: {
                Enabled: true
            },
            Max: 60,
            Min: -10
        },
        // Дополнительная ось Y
        YSAxis: {
            Enabled: false
        }
    });
}

// Создаёт ряды данных для диаграммы
function createSeries() {
    var serie = createSerie();
    chart.setSeries([serie]);
    chart.redraw(true);
}
// Создаёт ряд данных для диаграммы с областями
function createSerie() {
    var serie = new PP.Ui.ChartAreaSerie({
        Name: "Австралия", // Наименование ряда
        Data: getSerieData(), // Массив значений
        Color: getColors()[0], // Цвет
        LineColor: getColors()[4], // Цвет линий
        Parent: chart,
        Type: "Area"
    });
    var point = getChartAreaPoint(serie);
    // Добавляем точку в ряд данных
    addPointToSerie(point, serie);
    return serie;
}

// Добавляет точку в ряд данных
function addPointToSerie(point, serie) {
    serie.getData().push({
        X: point.getX(),
        Y: point.getY(),
        YBottom: point.getYBottom()
    });
    serie.getPoints().push(point);
}
// Рисует подписи данных для точки ряда
function drawDataLabels() {
    for (var i in chart.getSeries()) {
        var serie = chart.getSerie(i);

        for (var j in serie.getPoints()) {
            var point = serie.getPoints()[j];
            var label = point.getBottomDataLabel();
            if (label) {
                // Устанавливаем координату второго значения по оси X
                point.setPlotXBottom(point.getPlotX());
                // Определяем расположение подписи
                if (point.getTopIsHovered()) {
                    label.setLeft(point.getPlotX());
                    label.setTop(point.getPlotY());
                } else {

                    label.setLeft(point.getPlotXBottom());
                    label.setTop(point.getPlotYBottom());
                }
                label.drawSelf();
            }
        }
    }
}
// Создаёт массив цветов
function getColors() {
    var colors = ["rgb(192,217,253)", "rgb(163,200,252)", "rgb(134,183,251)",
        "rgb(96,161,250)", "rgb(192,142,204)", "rgb(192,107,188)"
    ];
    return colors;
}

// Выводит информацию о диаграмме
function printChartInfo() {
    if (chart.getSeries().length > 0) {
        var serie = chart.getSerie(0);
        if (serie.getIsAreaRange()) {
            console.log("Отображена диаграмма с областями и накоплением");
        } else {
            console.log("Отображена диаграмма с областями");
        }
        // Определяем точки, входящие в диапазон (200, 300)
        var points = serie.getPolyInRange({
            X: 300,
            Y: 0
        }, {
            X: 200,
            Y: 0
        });
        console.log("Точки, входящие в диапазон от 200 до 300:");
        for (var i in points) {
            console.log("(%s, %s)", points[i].X, points[i].Y);
        }

    }
}
// Возвращает массив значений для ряда данных
function getSerieData() {
    var data = [{
        X: 0,
        Y: 10,
        YBottom: 5
    }, {
        X: 1,
        Y: 30,
        YBottom: 15
    }, {
        X: 2,
        Y: 17,
        YBottom: -8
    }, {
        X: 3,
        Y: 25,

        YBottom: 12
    }, {
        X: 4,
        Y: 55,
        YBottom: 27
    }];
    return data;
}
// Возвращает точку для ряда данных диаграммы
function getChartAreaPoint(serie) {
    var chartAreaPoint = new PP.Ui.ChartAreaPoint({
        Parent: serie, // Ряд данных, к которому принадлежит точка
        BottomDataLabel: new PP.Ui.ChartText({

            BackgroundColor: "rgb(255,239,153)",
            BorderWidth: 1,
            Radius: 12,
            Font: new PP.Font(),
            Text: "10",
            Parent: serie
        }), // Метка для второго значения точки
        X: getSerieData().length, // Координата точки по оси X
        Y: 20, // Координата первого значения точки по оси Y
        YBottom: 10, // // Координата второго значения точки по оси Y
    });
    // Будем отображать метку для второго значения точки ряда данных
    chartAreaPoint.setTopIsHovered(false);
    return chartAreaPoint;
}

function onReady() {
    // Создаём диаграмму с областями
    createChart();
    // Создаём ряды данных для диаграммы
    createSeries();
    // Нарисуем метки данных для точек ряда
    drawDataLabels();
    // Выводим информацию о диаграмме
    printChartInfo();
}
</script>
4. В теге <body> в качестве значения атрибута «onLoad» указать
 имя функции для создания диаграммы и добавить блок с идентификатором «chart»:


<body onload="onReady()">
    <div id="chart"></div>
</body>
В результате выполнения примера на html-странице была размещена диаграмма
 с областями:


![](ChartArea.png)


В консоли браузера будут выведены уведомление о том, какая диаграмма
 отображена, и координаты точек, входящие в диапазон от 200 до 300:


Отображена диаграмма с областями и накоплением


Точки, входящие в диапазон от 200 до 300:


(251.35677083333331, 277.2142857142857)


(251.35677083333331, 432.57142857142856)


См. также:


[Chart](Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
