# Пример создания точечной диаграммы

Пример создания точечной диаграммы
-


# Пример создания точечной диаграммы


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
 точечную диаграмму:


<script>
var chart;
// Создает диаграмму
function createChart() {
    // Создаем диаграмму
    chart = new PP.Ui.Chart({
        Width: 450, // Ширина диаграммы
        Height: 400, // Высота диаграммы
        ParentNode: "chart",
        Series: [{
            Name: "Австралия", // Наименование ряда
            Data: getSerieData1(), // Массив значений
            Color: getColors()[0], // Цвет


            LineColor: getColors()[4], // Цвет линий
            LineWidth: 2, // Толщина линий
            Marker: getMarker(getColors()[0])
        }, {
            Name: "Азия",
            Data: getSerieData2(),
            Color: getColors()[1],
            LineColor: getColors()[5],
            LineWidth: 2,
            Marker: getMarker(getColors()[1])
        }],

        Type: "Scatter", // Тип диаграммы
        // Ось X
        XAxis: {
            Categories: ["2001", "2002", "2003", "2004", "2005", "2006"],
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
        Enabled: true,
        Radius: 8,
        Symbol: "Circle",
    };
    return marker;
}

// Создаёт ось Y для диаграммы
function createAxis() {
    var axis = new PP.Ui.ChartCanvasAxis({
        AllowDecimals: false, // Запрещаем использовать дробные значения
        Parent: chart,
        // Устанавливаем положение оси, установленное пользователем
        Position: "custom",
        Min: 0,
        Max: 70,
        PlotBands: [],
        PositionValue: -1, // Ось Y располагаем слева от области построения диаграммы
        Primary: true, // Данная ось является основной
        // Количество интервалов оси
        TickIntervalsCount: 5,
        // Заголовок оси
        Title: {

            Text: "Значение",
            DisplayUnit: "млн. руб.",
            Font: new PP.Font(),
            Wrap: PP.Ui.TextWrapping.WrapWithEllipsis,
            Align: "Middle"
        },
        // Запрещаем использовать максимальные и минимальные значения по умолчанию
        UseDefaultExtremes: false,
        LabelClick: function(sender, args) {
            if (args.Tick) {

                if (args.Tick.getFont().getIsUnderline()) {
                    args.Tick.getFont().setIsUnderline(false);
                } else {
                    args.Tick.setFont(new PP.Font());
                    args.Tick.getFont().setIsUnderline(true);
                }
                this.redraw();
            }
        },

        LabelMouseOut: function(sender, args) {
            if (args.Tick) {
                args.Tick.setColor("rgb(0,0,0)");
                this.redraw();
            }
        },
        LabelMouseOver: function(sender, args) {
            if (args.Tick) {
                args.Tick.setColor("rgb(255,0,0)");
                this.redraw();
            }
        },

        TitleDblClick: function(sender, args) {
            if (args.Axis && args.Axis.getTitle()) {
                console.log("Заголовок оси: «%s»", args.Axis.getTitle().Text);
            }
        }
    });
    // Устанавливаем методы доступа для свойств Color, Font и ticks
    PP.Object.defineProps(PP.Ui.ChartAxisTick, ["Color", "Font"], true);
    PP.Object.defineProps(PP.Ui.ChartCanvasAxis, ["ticks"], true);
    return axis;
}

// Выводит информацию об указанной оси диаграммы
function printAxisInfo(axis) {
    console.log("Длина оси Y в пикселях: %s", axis.getPixelLength());
    value = 50;
    console.log("Координата оси Y, соответствующая значению %s: %s", value,
        axis.getPixelValue(value));
    console.log("Значение оси Y, соответствующее координате %s: %s", 100,
        axis.getAxisValue(100, true));

    console.log("Цена одного деления оси: %s", axis.getTickInterval());
    console.log("Длина одного деления оси в пикселях: %s", axis.getTickPixelInterval());
    console.log("Ширина оси Y: %s", axis.getSize());
    console.log("Ряды данных, связанные с осью:");
    for (var i in axis.getLinkedSeries()) {
        console.log("  %s", axis.getLinkedSeries()[i].getName());
    }
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
function onReady() {

    // Создаём точечную диаграмму
    createChart();
    // Создаём ось Y
    var yAxis = createAxis();
    // Устанавливаем данную ось
    chart.setYAxis(yAxis, true);
    // Перерисовываем диаграмму
    chart.redraw(true);
    // Выводим информацию об оси Y
    printAxisInfo(yAxis);
}
</script>
4. В теге <body> в качестве значения атрибута «onLoad» указать
 имя функции для создания диаграммы и добавить блок с идентификатором «chart»:


<body onload="onReady()">
    <div id="chart"></div>
</body>
В результате выполнения примера на html-странице была размещена точечная
 диаграмма:


![](ChartScatter.png)


В консоли браузера была выведена информация о вертикальной оси диаграммы:


Длина оси Y в пикселях: 302


Координата оси Y, соответствующая значению 50: 86.28571428571428


Значение оси Y, соответствующее координате 100:
 49.139072847682115


Цена одного деления оси: 14


Длина одного деления оси в пикселях: 60.4


Ширина оси Y: 66.21875


Ряды данных, связанные с осью:


  Австралия


  Азия


См. также:


[Chart](Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
