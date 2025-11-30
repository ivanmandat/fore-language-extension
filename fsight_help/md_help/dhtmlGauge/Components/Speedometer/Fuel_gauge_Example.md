# Пример создания датчика топлива

Пример создания датчика топлива
-


# Пример создания датчика топлива


Для выполнения примера создайте html-страницу и в теге HEAD добавьте
 ссылки на следующие js- и css-файлы:


	- PP.js;


	- PP.GaugeMaster.js;


	- PP.GraphicsBase.js;


	- PP.Charts.js;


	- resources.ru.js;


	- PP.css.


Если используется Internt Explorer, дополнительно добавить следующие
 js- и css-файлы:


	- PP_IE7.css;


	- jquery.js.


Файл «Fuel_icon.png» должен храниться на одном уровне с html-страницей.


В теге SCRIPT добавьте следующий скрипт для создания компонента [Speedometer](Speedometer.htm):


var speedometer1 = {
    ParentNode: document.body,
    Loaded: function (speedometer) //начальная инициализация компонента
    {
        // шаг приращения положения стрелки
        var increment = .1;
        // инициализация переменной стрелки счетчика
        var arrow = this.getScales(1).getArrows(0);
        // функция, задающая амплитуду движения стрелки счетчика
        ticker = function () {
            arrow.setValue(arrow.getValue() + increment);
            if (arrow.getValue() >= 49.8)
                increment = -.1;
            if (arrow.getValue() <= .2)
                increment = .1;
        };
        // функция, выполняющая код ticker много раз, через равные промежутки времени, заданные в миллисекундах
        window.setInterval(ticker, 10);
    },
    ToolTip: {
        Content: "Angular Gauge"
    },
    Width: 200,
    Height: 200,
    CenterPosition: "100, 180",
    Center: //определение маркера отрисовки центра спидометра
    {

        PPType: PP.Ui.CircleMarker,
        Size: 17, //использование CircleMarker
        Background: {
            PPType: PP.SolidColorBrush,
            Color: "#000000"
        },
    },
    OuterRadius: "150,150", //определение радиуса спидометра
    Scales: //определение параметров, задающих отображение шкалы спидометра
    [{
        ToolTip: {
            Content: "Scale"
        },
        Background: {
            PPType: PP.SolidColorBrush,
            Color: "#E9E9E9"
        },
        Size: 0,
        Length: -60,
        StartAngle: 150,
        MinValue: 0,
        MaxValue: 2,
        Values: [1],
        Labels: [""],
        MajorTick: {
            PPType: PP.Ui.ImageMarker, //использование ImageMarker
            Src: "Fuel_icon.png", //путь к изображению
            Height: "32", //высота изображения
            Width: "32", //ширина изображения
            Style: PP.GaugeStyleLabels.Inner
        }

    }, {
        ToolTip: {
            Content: "Scale"
        },
        Background: {
            PPType: PP.SolidColorBrush,
            Color: "#E9E9E9"
        },
        Size: 0,
        Length: -60,
        StartAngle: 150,
        MinValue: 0,
        MaxValue: 50,
        Values: [0, 10, 20, 30, 40, 50],
        Labels: ["", "", "", "", "", ""],
        MajorTick: {
            PPType: PP.Ui.LineMarker, //использование LineMarker
            Border: {

                PPType: PP.SolidColorBrush,
                Color: "#333333"
            },
            Size: 10,
            Style: PP.GaugeStyleLabels.Inner,
            Offset: -5,
            BorderWidth: 3
        },
        Arrows: //определение параметров отображения стрелки
        [{
            DimAttributeId: "attr1",
            PPType: PP.Ui.LineArrow, //использование LineArrow
            Radius: 140,
            Tail: 0,
            Size: 6,
            Border: {
                PPType: PP.SolidColorBrush,
                Color: "#FF0000"
            }
        }],

        Sectors: [{
            StartValue: 0,
            EndValue: 50,
            Background: {
                PPType: PP.SolidColorBrush,
                Color: "#FFFFFF"
            },
            StartSize: 10,
            EndSize: 10,
            Offset: -10,
            Border: {
                PPType: PP.SolidColorBrush,
                Color: "#333333"
            }
        }],
        Step: 1
    }, {
        ToolTip: {
            Content: "Scale"
        },
        Background: {
            PPType: PP.SolidColorBrush,
            Color: "#E9E9E9"
        },
        Size: 0,
        Length: -60,
        StartAngle: 150,

        MinValue: 0,
        MaxValue: 1,
        Values: [0, 1],
        Labels: ["E", "F"],
        LabelFont: {
            Size: 14,
            IsBold: true
        },
        RotateLabels: false,
        MajorTick: {
            PPType: PP.Ui.LineMarker, //использование LineMarker
            Border: {
                PPType: PP.SolidColorBrush,
                Color: "#333333"
            },
            Size: 10,
            Style: PP.GaugeStyleLabels.Inner
        }
    }]
};
var speed1 = new PP.Ui.Speedometer(speedometer1);

После выполнения примера на html-странице будет размещен компонент [Speedometer](Speedometer.htm), имеющий следующий вид:


![](gauge.png)


См. также:


[Speedometer](Speedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
