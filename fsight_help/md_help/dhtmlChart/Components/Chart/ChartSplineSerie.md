# Пример создания сглаженной диаграммы

Пример создания сглаженной диаграммы
-


# Пример создания сглаженной диаграммы


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
        width: 450px;
        height: 400px;
    }
</style>
3. Затем в теге <head> необходимо добавить сценарий, создающий
 инвертированную сглаженную диаграмму с маркерами:


<script>
var chart;
// Создает диаграмму
function createChart() {
    // Создаем сглаженную диаграмму
    chart = new PP.Ui.Chart({
        Width: 450, // Ширина диаграммы
        Height: 400, // Высота диаграммы
        ParentNode: "chart",
        Type: "Spline", // Тип диаграммы
        // Ось X
        XAxis: {
            Categories: ["2001", "2002", "2003", "2004", "2005", "2006",
                "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"
            ],
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
            Min: 0
        },


        // Дополнительная ось Y
        YSAxis: {
            Enabled: false
        },
        Inverted: true, // Инвертированная диаграмма
        MarkersEnabled: true, // Отображаем маркеры для рядов данных
        MarkersSymbol: "square" // Отображаем маркеры в виде прямоугольников
    })
}
// Создаёт ряды данных для сглаженной диаграммы
function createSeries() {


    chart.setSeries([createSerie1(), createSerie2()]);
    chart.redraw(true);
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
// Создаёт первый ряд данных для сглаженной диаграммы
function createSerie1() {
    var serie = new PP.Ui.ChartSplineSerie({
        Data: getSerieData1(),
        Name: "Австралия", // Наименование ряда
        Color: getColors()[0],
        LineColor: getColors()[4], // Цвет линий
        Marker: getMarker(getColors()[0]), // Маркер для ряда данных диаграммы
        Parent: chart,
        Type: "Spline",
    });


    return serie;
}
// Создаёт второй ряд данных для сглаженной диаграммы
function createSerie2() {
    var serie = new PP.Ui.ChartSplineSerie({
        Name: "Бразилия", // Наименование ряда
        Data: getSerieData2(), // Массив значений
        Color: getColors()[1],
        LineColor: getColors()[5], // Цвет линий
        Marker: getMarker(getColors()[1]), // Маркер для ряда данных диаграммы
        Parent: chart,
        Type: "Spline"
    });
    return serie;
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
    }, {


        X: 5,
        Y: 51,
        Name: "2006",
        Color: getColors()[0]
    }, {
        X: 6,
        Y: 47,
        Name: "2007",
        Color: getColors()[1]
    }, {
        X: 7,
        Y: 33,
        Name: "2008",
        Color: getColors()[2]
    }, {


        X: 8,
        Y: 39,
        Name: "2009",
        Color: getColors()[3]
    }, {
        X: 9,
        Y: 29,
        Name: "2010",
        Color: getColors()[4]
    }, {
        X: 10,
        Y: 22,
        Name: "2011",
        Color: getColors()[0]
    }, {


        X: 11,
        Y: 24,
        Name: "2012",
        Color: getColors()[1]
    }, {
        X: 12,
        Y: 16,
        Name: "2013",
        Color: getColors()[2]
    }, {


        X: 13,
        Y: 14,
        Name: "2014",
        Color: getColors()[3]
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
    }, {
        X: 5,
        Y: 25,
        Name: "2006",
        Color: getColors()[0]
    }, {


        X: 6,
        Y: 29,
        Name: "2007",
        Color: getColors()[1]
    }, {
        X: 7,
        Y: 33,
        Name: "2008",
        Color: getColors()[2]
    }, {
        X: 8,
        Y: 36,
        Name: "2009",
        Color: getColors()[3]
    }, {


        X: 9,
        Y: 42,
        Name: "2010",
        Color: getColors()[4]
    }, {
        X: 10,
        Y: 48,
        Name: "2011",
        Color: getColors()[0]
    }, {
        X: 11,
        Y: 51,
        Name: "2012",
        Color: getColors()[1]
    }, {


        X: 12,
        Y: 56,
        Name: "2013",
        Color: getColors()[2]
    }, {
        X: 13,
        Y: 60,
        Name: "2014",
        Color: getColors()[3]
    }];
    return data;
}


// Обновляем маркеры у рядов данных диаграммы
function updateChartMarkers() {
    for (var i in chart.getSeries()) {
        var serie = chart.getSeries()[i];
        // Получаем настройки ряда данных диаграммы
        var states = serie.getStates();
        states.Normal.Marker.Enabled = chart.getMarkersEnabled();
        states.Normal.Marker.Symbol = chart.getMarkersSymbol();
    }
    // Обновляем ряды данных диаграммы
    chart.redrawSeries(true);
}
// Устанавливает размер маркеров для рядов данных
function setMarkersRadius(radius) {
    for (var i in chart.getSeries()) {
        var serie = chart.getSeries()[i];
        serie.getMarker().Radius = radius;
    }


    // Обновляем ряды данных диаграммы
    chart.redrawSeries(true);
}
function onReady() {
    // Создаём сглаженную диаграмму
    createChart();
    // Создаём ряды данных для диаграммы
    createSeries();
    // Перерисовываем диаграмму
    chart.redraw(true);
}
</script>
4. В теге <body> в качестве значения атрибута «onLoad» указать
 имя функции для создания диаграммы и добавить блок с идентификатором «chart»:


<body onload="onReady()">
    <div id="chart"></div>
</body>
В результате выполнения примера на html-странице была размещена инвертированная
 сглаженная диаграмма с маркерами в виде прямоугольников:


![](ChartSpline.png)


См. также:


[Chart](Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
