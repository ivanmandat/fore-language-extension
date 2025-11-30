# Пример создания гистограммы с накоплением

Пример создания гистограммы с накоплением
-


# Пример создания гистограммы с накоплением


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылку на css-файл PP.css. Также нужно добавить ссылки на
 следующие js-файлы:


	- PP.js;


	- PP.GraphicsBase.js


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
 гистограмму с накоплением:


<script>
var chart; // Диаграмма
var currentY = 0;
var isPointEditing = false;
// Создает диаграмму
function createChart() {
    // Создаем диаграмму
    chart = new PP.Ui.Chart({
        Width: 600, // Ширина диаграммы
        Height: 500, // Высота диаграммы
        ParentNode: "chart",
        Type: "Column", // Тип диаграммы
        // Ось X
        XAxis: {
            Categories: getCategories(),
            Labels: {
                Enabled: true
            }
        },
        // Ось Y
        YAxis: {

            Labels: {
                Enabled: true
            },
            Max: 30,
            Min: -5
        },
        // Дополнительная ось Y
        YSAxis: {
            Enabled: false
        },
        UseZeroSubstitution: true
    });
    // Удаляем легенду
    chart.getLegend().dispose();

    chart.PointMouseOver.add(function(sernder, args) {
        var point = args.Point;
        if (point) {
            point.MouseOver.fire(chart, args);
        }
    })
    chart.PointMouseOut.add(function(sernder, args) {
        var point = args.Point;
        if (point) {
            point.MouseOut.fire(chart, args);
        }
    })
    chart.DblClick.add(function(sender, args) {

        var point = args.Point;
        if (point) {
            point.Click.fire(sender, args);
        }
    });
}
// Возвращает точку ряда данных по идентификатору
function getChartPointById(id) {
    for (var i in chart.getSeries()) {

        var serie = chart.getSerie(i);
        for (var j in serie.getPoints()) {
            var point = serie.getPoint(j);
            if (point.getId() == id) {
                return point;
            }
        }
    }
    return null;
}

// Удаляет столбцы, соответствующие точкам рядов данных со значением null
function removeNullPoints() {
    // Определяем удаляемые столбцы
    var removePointsIndexes = getRemovedPoints();
    // Удаляем столбцы
    removePoints(removePointsIndexes);
    // Перемещаем столбцы с учётом удалённых столбцов
    movePointsAfterRemoving();
}
// Определяет удаляемые столбцы
function getRemovedPoints() {

    var removePointsIndexes = [];
    for (var i in chart.getSeries()) {
        var serie = chart.getSeries()[i];
        for (var j = 0; j < serie.getPoints().length; j++) {
            var point = serie.getPoint(j);
            if (j > 0) {
                if (point.getIsAfterNull()) {
                    removePointsIndexes.push(j - 1);
                }
            }
        }
    };

    return removePointsIndexes;
}
// Удаляет точки с указанными индексами
function removePoints(points) {
    var serie = chart.getSeries()[0];
    for (var i = 0; i < serie.getPoints().length; i++) {
        if (points.indexOf(i) >= 0) {
            chart.getXAxis().getCategories().splice(i + 1, 1);
            for (var j = 0; j < chart.getSeries().length; j++) {
                chart.getSeries()[j].removePoint(i, true);
            }
        }
    }

}
// Перемещает столбцы с учётом удалённых столбцов
function movePointsAfterRemoving() {
    for (var i in chart.getSeries()) {
        var serie = chart.getSeries()[i];
        for (var j = 0; j < serie.getPoints().length; j++) {
            var point = serie.getPoint(j);
            point.setX(j);
        }
    };
}

// Удаляет указанный столбец диаграммы
function removeColumn(index) {
    for (var i in chart.getSeries()) {
        var serie = chart.getSeries()[i];
        serie.removePoint(index - 1, true);
    }
    chart.getXAxis().getCategories().splice(index + 1, 1);
}
// Создаёт ряды данных для диаграммы
function createSeries() {

    chart.setSeries([createSerie0(), createSerie1()]);
    chart.redraw(true);
}
// Создаёт второй ряд данных для круговой диаграммы
function createSerie0() {
    var serie = new PP.Ui.ChartColumnSerie({
        Index: 0,
        Name: "Бразилия", // Наименование ряда
        Data: getSerieData0(), // Массив значений
        Color: getColors()[1],
        Parent: chart,
        Type: "Column"
    });

    return serie;
}
// Создаёт первый ряд данных для круговой диаграммы
function createSerie1() {
    var serie = new PP.Ui.ChartColumnSerie({
        Index: 0,
        LineColor: new PP.SolidColorBrush(),
        Name: "Австралия", // Наименование ряда
        LineWidth: 2,
        Parent: chart,
        Type: "Column"
    });

    // Добавляем точки в ряд данных
    var point0 = getChartPoint0(serie);
    addPointToSerie(point0, serie);
    addPointToSerie(getChartPoint1(serie), serie);
    addPointToSerie(getChartPoint2(serie), serie);
    addPointToSerie(getChartPoint3(serie), serie);
    addPointToSerie(getChartPoint4(serie), serie);
    // Устанавливаем цвет границ точек
    if (point0.getOriginalLineColorIsRGBA()) {
        serie.getLineColor().setColor(point0.getLineColor());
    };

    return serie;
}
// Добавляет точку в ряд данных
function addPointToSerie(point, serie) {
    serie.getData().push({
        X: point.getX(),
        Y: point.getY(),
        Name: point.getName(),
        Color: point.getColor(),
        YBottom: point.getStackY(),
    });
    serie.getPoints().push(point);
}

// Создаёт массив цветов
function getColors() {
    var colors = [
        "#933DA8",
        "#FFD900",
        "#FF9191",
        "#6BBC80",
        "#A0CBC8"
    ];
    return colors;
}

// Возвращает массив категорий для оси X
function getCategories() {
    var categories = [];
    for (var i in getSerieData0()) {
        categories.push(getSerieData0()[i].Name);
    }
    return categories;
}
// Возвращает массив значений для второго ряда данных
function getSerieData0() {
    var data = [{

        X: 0,
        Y: 1,
        YBottom: 0,
        Name: "2001",
        Color: getColors()[5]
    }, {
        X: 1,
        Y: 2,
        YBottom: 0,
        Name: "2002",
        Color: getColors()[6]
    }, {

        X: 2,
        Y: 3,
        YBottom: 0,
        Name: "2003",
        Color: getColors()[7]
    }, {

        X: 3,
        Y: 5,
        YBottom: 0,
        Name: "2004",
        Color: getColors()[8]
    }, {
        X: 4,
        Y: 10,
        YBottom: 0,
        Name: "2005",
        Color: getColors()[9]
    }];

    return data;
}
// Возвращает массив значений для первого ряда данных
function getSerieData1() {
    var data = [{
        X: 0,
        Y: 10,
        YBottom: 1,
        Name: "2001",
        Color: getColors()[0]
    }, {
        X: 1,

        Y: null,
        YBottom: 2,
        Name: "2002",
        Color: getColors()[1]
    }, {
        X: 2,
        Y: 17,
        YBottom: 3,
        Name: "2003",
        Color: getColors()[2]
    }, {
        X: 3,

        Y: 25,
        YBottom: 5,
        Name: "2004",
        Color: getColors()[3]
    }, {
        X: 4,
        Y: 22,
        YBottom: 10,
        Name: "2005",
        Color: getColors()[4]
    }];

    return data;
}
// Возвращает точку для ряда данных диаграммы
function getChartPoint0(serie) {
    var data0 = getSerieData1()[0];
    var chartPoint = new PP.Ui.ChartColumnPoint({
        Color: data0.Color,
        ColorValue: 0.75,
        CustomData: "0",
        Id: "point0",
        EnableEdit: true,

        LineColor: "rgba(195,195,195,1)",
        Name: data0.Name,
        Parent: serie, // Ряд данных, к которому принадлежит точка
        X: data0.X,
        Y: data0.Y,
        State: "Normal",
        Width: 60,
        StackY: data0.YBottom
    });

    // Обновляем точку для данных
    refreshBeforeRender(chartPoint);
    return chartPoint;
}
// Возвращает точку для ряда данных диаграммы
function getChartPoint1(serie) {
    var data1 = getSerieData1()[1];
    var chartPoint = new PP.Ui.ChartColumnPoint({
        Color: data1.Color,
        ColorValue: 0.75,

        CustomData: "1",
        Id: "point1",
        EnableEdit: false,
        Name: data1.Name,
        Parent: serie, // Ряд данных, к которому принадлежит точка
        X: data1.X,
        Y: data1.Y,
        TextValue: "Точка со значением null",
        Width: 60,
        StackY: data1.YBottom
    });

    // Обновляем точку для данных
    refreshBeforeRender(chartPoint);
    return chartPoint;
}
// Возвращает точку для ряда данных диаграммы
function getChartPoint2(serie) {
    var data2 = getSerieData1()[2];
    var chartPoint = new PP.Ui.ChartColumnPoint({
        Color: data2.Color,
        ColorValue: 0.75,
        CustomData: "2",
        Id: "point2",
        EnableEdit: true,

        LineColor: data2.Color,
        Name: data2.Name,
        Parent: serie, // Ряд данных, к которому принадлежит точка
        X: data2.X,
        Y: data2.Y,
        IsSelected: true,
        SizeValue: 10,
        IsAfterNull: true,
        Width: 60,
        StackY: data2.YBottom
    });
    // Обновляем точку для данных
    refreshBeforeRender(chartPoint);
    return chartPoint;
}

// Возвращает точку для ряда данных диаграммы
function getChartPoint3(serie) {
    var data3 = getSerieData1()[3];
    var chartPoint = new PP.Ui.ChartColumnPoint({
        Color: data3.Color,
        ColorValue: 0.75,
        CustomData: "3",
        Id: "point3",
        EnableEdit: false,
        IsFictive: true,
        Name: data3.Name,
        Parent: serie, // Ряд данных, к которому принадлежит точка
        X: data3.X,

        Y: data3.Y,
        TextValue: "Фиктивная точка",
        Width: 60,
        StackY: data3.YBottom
    });
    // Обновляем точку для данных
    refreshBeforeRender(chartPoint);
    return chartPoint;
}
// Возвращает точку для ряда данных диаграммы
function getChartPoint4(serie) {
    var data4 = getSerieData1()[4];
    var chartPoint = new PP.Ui.ChartColumnPoint({
        Color: data4.Color,

        ColorValue: 0.75,
        CustomData: "4",
        Id: "point4",
        EnableEdit: true,
        IsVisible: false,
        LineColor: data4.Color,
        Name: data4.Name,
        Parent: serie, // Ряд данных, к которому принадлежит точка
        X: data4.X,
        Y: data4.Y,
        TextValue: "Скрытая точка",
        Width: 60,
        StackY: data4.YBottom
    });
    // Обновляем точку для данных
    refreshBeforeRender(chartPoint);
    return chartPoint;
}

// Обновляет столбец диаграммы до его отрисовки
function refreshBeforeRender(point) {
    // Настраиваем цвет точки ряда данных
    setupPointColor(point);
    // Устанавливаем метку для точки ряда данных
    setupDataLabel(point);
    // Добавляем события к точке
    addEventsHandlerToPoint(point);
}
// Обновляет столбец диаграммы после его отрисовки
function refreshAfterRender() {
    for (var i in chart.getSeries()) {
        var serie = chart.getSeries()[i];
        for (var j in serie.getPoints()) {

            var point = serie.getPoints()[j];
            // Устанавливаем вторую координату для столбцов по оси Y
            point.setYBottom(point.getStackY(), true);
            // Указываем размеры столбца
            point.setSizeValue({
                Width: point.getWidth(),
                Height: point.getPlotYBottom() - point.getPlotY()
            });
            if (point.getPercentage()) {
                point.setY(point.getPercentage());
            }

            if (point.getPercentPart()) {
                point.setYBottom(point.getPercentPart());
            }
        }
    }
}
// Создаёт подписи данных для точки ряда данных
function createDataLabels(point) {

    var dataLabel = new PP.Ui.ChartText({
        BackgroundColor: "rgb(255,239,153)",
        BorderWidth: 1,
        Radius: 12,
        Font: new PP.Font(),
        Parent: point.getParent(),
        Text: point.getY()
    });
    point.setDataLabels([dataLabel]);
}

// Устанавливает подпись данных для точки ряда данных
function setupDataLabel(point) {
    createDataLabels(point);
    if (point.getDataLabels().length > 0) {
        point.setDataLabel(point.getDataLabels()[0]);
    }
}
// Рисует подпись данных для точки ряда
function drawDataLabel(point) {
    var label = point.getDataLabel();
    if (label) {
        label.setLeft(25);
        label.setTop(point.getPlotY());
        label.drawSelf();
    }
}

// Добавляем обработчики событий к точке ряда данных
function addEventsHandlerToPoint(point) {
    // Обрабатываем событие MouseOut
    point.MouseOut.add(function(sender, args) {
        if (args.Point && args.Point.getDataLabel()) {
            args.Point.getDataLabel().dispose();
            args.Point.setDataLabel(null);
        }
    });
    // Обрабатываем событие MouseOver
    point.MouseOver.add(function(sender, args) {
        if (args.Point) {
            if (!args.Point.getDataLabel()) {
                setupDataLabel(point);
            }
            drawDataLabel(args.Point);
        };
    });

    // Обрабатываем событие Click
    point.Click.add(function(sender, args) {
        var point = args.Point;
        console.log("Выбрана точка ряда данных с индексом «%s»", point.getCustomData());
        if (point.getTextValue()) {
            console.log("Описание точки: %s", point.getTextValue());
        }
        if (point.getSizeValue()) {
            console.log("Размеры соответствующего столбца: %s x %s",
                point.getSizeValue().Width,
                point.getSizeValue().Height);
        }
    });
}

// Настраивает цвет точки ряда данных
function setupPointColor(point) {
    var opacity = point.getColorValue();
    if (!point.getIsVisible()) {
        opacity = 0;
    }
    if (point.getIsFictive()) {
        opacity = 0.1;
    }
    if (point.getIsSelected()) {
        opacity = 1;
    }
    if (point.getOriginalColorIsRGBA()) {
        point.setColor(new PP.SolidColorBrush({
            Color: point.getColor(),
            Opacity: opacity
        }));
    }
}

// Включает режим редактирования точки ряда данных
function turnEditMode(isEnabled) {
    chart.getEditMode().setEnabled(isEnabled);
    chart.redraw(true);
}
function onReady() {
    // Создаём диаграмму с областями
    createChart();
    // Создаём ряды данных для диаграммы
    createSeries();
    // Обновляем столбцы диаграммы после их отрисовки
    refreshAfterRender();
}
</script>
4. В теге <body> в качестве значения атрибута «onLoad» указать
 имя функции для создания гистограммы с накоплением и добавить блок с идентификатором
 «chart»:


<body onload="onReady()">
    <div id="chart"></div>
</body>
В результате выполнения примера на html-странице была размещена гистограмма
 с накоплением:


![](ChartPoint.png)


Вторая точка второй серии диаграммы имеет пустое значение, третья точка
 этой же серии выделена, четвёртая является фиктивной, пятая - невидимой.


При наведении на любую точку второго ряда на оси Y появляется всплывающая
 подсказка, содержащая значение данной точки:


![](ChartPoint1.png)


После двойного щелчка на любой точке второго ряда в консоли браузера
 будет выведена информация о данной точке. Например, для третьей точки
 выведенные данные будут следующими:


Выбрана точка ряда данных с индексом «2»


Размеры соответствующего столбца: 52.901119402985074
 x 174


Выбрана точка ряда данных с индексом «3»


Описание точки: Фиктивная точка


Размеры соответствующего столбца: 52.901119402985074
 x 248.57142857142856


Разрешим редактирование точек рядов данных гистограммы:


chart.getEditMode().setEnabled(true);
После выполнения примера был включён режим редактирования точек гистограммы.
 После нажатия на любую точку второго ряда определилось, что для первой,
 третьей и пятой точек данного ряда редактирование разрешено, для остальных
 точек ряда - запрещено:


![](ChartPoint2.png)


Удалим столбцы, соответствующие пустым точкам диаграммы:


removeNullPoints();
В результате выполнения данного строки второй столбец диаграммы был
 удалён:


![](ChartPoint3.png)


См. также:


[Chart](Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
