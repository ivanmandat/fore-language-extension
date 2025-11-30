# Пример создания круговой диаграммы

Пример создания круговой диаграммы
-


# Пример создания круговой диаграммы


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
        width: 300px;
        height: 250px;
    }
</style>
3. Затем в теге <head> необходимо добавить сценарий, создающий
 круговую диаграмму:


<script>
var chart; // Диаграмма
// Создает круговую диаграмму
function createChart() {
    // Создаем диаграмму
    chart = new PP.Ui.Chart({
        Width: 300, // Ширина диаграммы
        Height: 250, // Высота диаграммы
        Polar: true, // Используем полярные координаты
        ParentNode: "chart", // Родительский элемент
        SeriesAsRings: true, // Ряды данных отображаются в виде колец
        Type: "Pie" // Тип диаграммы
    });
}

// Создаёт ряды данных для диаграммы
function createSeries() {
    chart.setSeries([createSerie1(), createSerie2()]);
    chart.redraw(true);
}
// Создаёт первый ряд данных для круговой диаграммы
function createSerie1() {
    var serie = new PP.Ui.ChartPieSerie({
        Name: "Австралия", // Наименование ряда
        Data: getSerieData1(), // Массив значений
        LineColor: getColors()[getColors().length - 1], // Цвет линий
        Parent: chart,
        Type: "Pie",
        Index: 0 // Индекс ряда
    });

    var point = getChartPiePoint(serie);
    // Добавляем точку в ряд данных
    addPointToSerie(point, serie);
    return serie;
}
// Создаёт второй ряд данных для круговой диаграммы
function createSerie2() {
    var serie = new PP.Ui.ChartPieSerie({
        Name: "Бразилия", // Наименование ряда
        Data: getSerieData2(), // Массив значений
        LineColor: getColors()[getColors().length - 1], // Цвет линий
        Parent: chart,
        Type: "Pie",
        Index: 1 // Индекс ряда
    });
    return serie;
}

// Добавляет точку в ряд данных
function addPointToSerie(point, serie) {
    var serieData = serie.getData();
    serieData.push({
        X: point.getX(),
        Y: point.getY(),
        Name: "2006",
        Color: point.getColor()
    });
    serie.setData(serieData);
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
// Выводит информацию о диаграмме
function printChartInfo() {
    for (var i in chart.getSeries()) {

        var serie = chart.getSerie(i);
        if (serie.getPoints().length > 0) {
            var point = serie.getPoints()[i];
            console.log("Информация о ряде данных «%s»:", serie.getName());
            console.log("  Начальный угол первого сектора: %s", point.getStartAngle());
            console.log("  Конечный угол первого сектора: %s", point.getEndAngle());
            console.log("  Внешний радиус кольца: %s", point.getRadius());
            console.log("  Внутренний радиус кольца: %s", point.getInnerRadius());
        }
    }

}
// Возвращает точку для ряда данных диаграммы
function getChartPiePoint(serie) {
    var chartPiePoint = new PP.Ui.ChartPiePoint({
        Parent: serie, // Ряд данных, к которому принадлежит точка
        X: getSerieData1().length,
        Y: 75,
        Color: getColors()[6]
    });
    chartPiePoint.setInnerRadius(30);
    return chartPiePoint;
}
function onReady() {

    // Создаём круговую диаграмму
    createChart();
    // Создаём ряды данных для диаграммы
    createSeries();
    // Выводим информацию о диаграмме
    printChartInfo();
}
</script>
4. В теге <body> в качестве значения атрибута «onLoad» указать
 имя функции для создания диаграммы и добавить блок с идентификатором «chart»:


<body onload="onReady()">
    <div id="chart"></div>
</body>
В результате выполнения примера на html-странице была размещена круговая
 диаграмма:


![](ChartPie.png)


В консоли браузера будет выведена информацию о двух рядах данных круговой
 диаграммы:


Информация о ряде данных «Австралия»:


  Начальный угол первого сектора: 4.71238898038469


  Конечный угол первого сектора: 5.0087656458176895


  Внешний радиус кольца: 56.25


  Внутренний радиус кольца: 0


Информация о ряде данных «Бразилия»:


  Начальный угол первого сектора: 5.531934890016809


  Конечный угол первого сектора: 0.5600230382486151


  Внешний радиус кольца: 112.5


  Внутренний радиус кольца: 56.25


См. также:


[Chart](Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
