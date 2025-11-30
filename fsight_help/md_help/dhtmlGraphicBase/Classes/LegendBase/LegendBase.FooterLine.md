# LegendBase.FooterLine

LegendBase.FooterLine
-


**


# LegendBase.FooterLine


## Синтаксис


FooterLine: [PP.Ui.LineLabel](dhtmlUi.chm::/Classes/LineLabel/LineLabel.htm);


## Описание


Свойство FooterLine определяет
 линию рядом с нижним текстом легенды.


## Комментарии


Значение свойства устанавливается из JSON.**


## Пример


Для выполнения примера создайте html-страницу и выполните следующие
 действия:


1. В теге <head> добавьте ссылки на следующие js- и css-файлы:


	- PP.js;


	- PP.GraphicsBase.js


	- PP.css.


2. В теге <body> задайте настройки контейнера, где будет расположена
 легенда:


<body onresize="onresize()">
    <div id="container" style="position: absolute; top: 50px; left: 50px; width: 900px; height: 700px; border: solid 1px #888">
    </div>
</body>
3. В теге <script> добавьте сценарий, создающий легенду:


<script type="text/javascript">
    // Зададим размеры легенды
    var Area = new PP.Rect({ Top: 0, Left: 0, Width: 900, Height: 700 });
    // Зададим шкалу значений
    var Scale = new PP.ScaleBase({
        "Id": "Scale0",
        "Values": "0.0 30.0 60.0 100.0",
        "Items": "#FF00FF00 #FF40D000 #FF808000 #FFD04000 #FFFF0000",
        "EnableEquality": "false",
        "NoData": "#FF808080",
        "TypeArguments": "Brush"
        });
    // Зададим настройки легенды
    var Settings = {
        Scale: Scale, //шкала значений
        AutoColumnsCount: false,
        MaxHeight: 50,
        MaxWidth: 30,
        MaxHeaderWidth: 20,
        Style: {
            Release: {
                Background: {
                    PPType: PP.SolidColorBrush,
                        Color: "#80F0F0F0"
                    },
                    "Font": {
                    "IsItalic": "false",
                    "FontFamily": "Arial",
                    "Size": "20",
                    "IsBold": "false",
                    "Color": "#FF000000"
                    }
            }
        },
        LessFormat: "менее чем {0:#,##0.00}", // подписи к значениям
        GreaterFormat: "более чем {0:#,##0.00}",
        BetweenFormat: "от {0:#,##0.00} до {1:#,##0.00}",
        NoDataText: "нет данных",
        TextWrapping: "NoWrap",
        TextSpacing: "10",
        Marker: "Circle",
        IsOuter: "False",
        IsOverlap: "False",
        ColumnCount: "3", // количество столбцов со значениями в легенде
        HorizontalAlignment: "Top", // положение легенды в контейнере
        VerticalAlignment: "Top",
        Padding: "4 4 4 4", // отступы между значениями
        Margin: "6 6 6 6",
        Header: { // верхний текст над легендой
            Text: "Верхний текст",
            Margin: "2 2 2 2",
            Padding: "2 2 2 2",
            HorizontalAlignment: "Left",
            Style: {
                Release: {
                    Font: {
                        IsItalic: "False",
                        FontFamily: "Arial",
                        Size: "15",
                        IsBold: false,
                        Color: "#FF008000"
                    }
                }
            }
        },
        Footer: { // нижний текст под легендой
        Text: "Нижний текст",
        HorizontalAlignment: "Left",
        Margin: "2 2 2 2",
        Padding: "2 2 2 2",
        },
        FooterLine: new PP.Ui.LineLabel({ // линия рядом с нижним текстом
            // Установим толщину линии
            LineHeight: 1,
            // Устанавим цвет линии
            LineColor: PP.Color.Colors.darkviolet
        }),
        HeaderLine: new PP.Ui.LineLabel({ // линия рядом с верхним текстом
            // Устанавим толщину линии
            LineHeight: 1,
            // Устанавим цвет линии
            LineColor: PP.Color.Colors.darkviolet
        }),
        ParentNode:document.getElementById('container')
    };
    // Применим все настройки для легенды и отрисуем в контейнере
    var legend = new PP.Ui.IntervalsLegend(Settings);
    legend.draw(Area);
</script>
В результате выполнения примера на html-странице будет отображена легенда
 с заданными параметрами:


![](LegendBase_FooterLine.gif)


См. также:


[LegendBase](LegendBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
