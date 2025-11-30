# ChartColumnSerie.WidthData

ChartColumnSerie.WidthData
-


# ChartColumnSerie.WidthData


## Синтаксис


WidthData: Number;


## Описание


Свойство WidthData определяет
 данные по ширине или углу ряда.


## Комментарии


Значение свойства устанавливается из JSON, а возвращается с помощью
 метода getWidth.


Свойство используется в [круговой
 диаграмме с изменяемым радиусом сектора](../../EaxRadiusAngleChartView/EaxRadiusAngleChartView.htm).


## Пример


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


Необходимо добавить ссылки на следующие js-файлы: PP.js, PP.GraphicsBase.js,
 Charts_Canvas.js и на файл стилей PP.css.


Далее в теге <body> необходимо добавить сценарий, создающий диаграмму:


<div id="container"></div>
<script type="text/javascript">
function updateSize() {
        if (!chart)
            return;
        chart.setHeight(document.documentElement.clientHeight - 50);
        chart.setWidth(document.documentElement.clientWidth);
    };
    var chart;
    function createChart(polar) {
        if (chart)
            chart.dispose();
        chart = new PP.Ui.Chart({
            'ParentNode': document.getElementById("container"),
            "Type": "Column",
            "Stacking": "Absolute",
            "Polar": true,
            "AlternateColumnPadding": true,
            'GroupPadding': 0,
            'InnerCircleSize': 30,
            'Polar': polar || false,
            'PlotArea': { BackgroundColor: '#e6e6e6' },
            "Series": [
                {
                    "Name": "Something",
                    "Data": [200, 300],
                    "Color": "#a4d7ee",
                    "LineWidth": 1,
                    "LineColor": "#FFFFFF",
                    'WidthData': 6574,
                    "DataLabels": { "Enabled": true, "Mask": "%WidthData" }
                },
                {
                    "Name": "Something",
                    "Data": [350, 200],
                    "Color": "#4898c9",
                    "LineWidth": 1,
                    "LineColor": "#FFFFFF",
                    'WidthData': 63574,
                    "DataLabels": { "Enabled": true, "Mask": "%WidthData" }
                },
                {
                    "Name": "Something",
                    "Data": [100, 100],
                    "Color": "#2973a5",
                    "LineWidth": 1,
                    "LineColor": "#FFFFFF",
                    'WidthData': 35214,
                    "DataLabels": { "Enabled": true, "Mask": "%WidthData" }
                }, {
                    "Name": "Something",
                    "Data": [500, 400],
                    "Color": "#0e4f80",
                    "LineWidth": 1,
                    "LineColor": "#FFFFFF",
                    'WidthData': 11457,
                    "DataLabels": { "Enabled": true, "Mask": "%WidthData", "ValueFormat": "" }
                }, {
                    "Name": "Something",
                    "Data": [500, 300],
                    "Color": "#3e3673",
                    "LineWidth": 1,
                    "LineColor": "#FFFFFF",
                    'WidthData': 1874,
                    "DataLabels": { "Enabled": true, "Mask": "%WidthData", "ValueFormat": "" }
                }, {
                    "Name": "Other",
                    "Data": [100, 300],
                    "Color": "#b3b3b3",
                    "LineWidth": 1,
                    "LineColor": "#FFFFFF",
                    'WidthData': 1450,
                    "DataLabels": { "Enabled": true, "Mask": "%WidthData", "ValueFormat": "" }
                }],
            "XAxis": {
                "Enabled": true,
                "Categories": ['2008', '2009'],
                "Labels": { "Enabled": false },
                "TicksEnabled": false,
                "MinorTicksEnabled": false,
                "GridLineColor": '#FFFFFF',
                'LineColor': '#FFFFFF',
                'GridLineWidth': 2,
                'TickCross': '?'
            },
            "YAxis": {
                "Enabled": true,
                "LineEnabled": false,
                "GridEnabled": false,
                "TicksEnabled": false,
                "Labels": { "Enabled": false },
                "ExactIntervals": true
            },
            "YSAxis": {
                "Enabled": false
            },
            "ToolTip": {
                "UseIndicatorColorForBorder": true,
                "BackgroundEnabled": true,
                "BackgroundColor": "rgba(255, 255, 255, 1.000000)",
                "BorderType": "dashStyleSolid",
                "BorderColor": "#7f7f7f",
                "BorderWidth": 1,
                "Enabled": true,
                "Formatter": "%SerieName\nRadius: %Data\nAngle: %WidthData (%WidthPercentPart)",
                "Font": {
                    "Color": "#918F8D",
                    "Size": 8,
                    "FontFamily": "Tahoma"
                },
                "HorizontalAlignment": "left",
                "DataFormat": "#,##0.00"
            },
            "Legend": {}
        });
        updateSize();
    }
    createChart(true);
</script>
В результате выполнения примера была создана круговая диаграмма с изменяемым
 радиусом сектора.


См. также:


[ChartColumnSerie](ChartColumnSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
