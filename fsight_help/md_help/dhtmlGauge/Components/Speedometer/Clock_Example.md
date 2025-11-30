# Пример создания стрелочных часов

Пример создания стрелочных часов
-


# Пример создания стрелочных часов


Для выполнения примера создайте html-страницу и в теге HEAD добавьте ссылки на следующие js- и css-файлы:


-
PP.js;


-
PP.Charts.js;


-
PP.GraphicsBase.js;


-
PP.css.


Если используется Internet Explorer, дополнительно добавить следующие js- и css-файлы:


-
PP_IE7.css;


-
jquery.js.


В теге SCRIPT добавьте следующий скрипт для создания компонента [Speedometer](Speedometer.htm), представленного в виде стрелочных часов:


var int;
var speedometer1 = {
    ParentNode: document.body,
    Loaded: function (speedometer) {
        // Получим шкалу
        var scale = this.getScales(0);
        var marrow = scale.getArrows(0);
        // Сделаем указатель, соответствующий часовой стрелке, главным
        scale.setMajorArrow(this.getScales(0).getArrows(1));
        ticker = function (sender) {
            var time = new Date();
            // Установим для указателей спидометра значения
            marrow.setValue(time.getMinutes() * 6);
            scale.getMajorArrow().setValue(time.getHours() % 12 * 30);
        };
        ticker(this);
        if (int)
            clearInterval(int);
        int = setInterval(ticker, 500);
    },
    ToolTip: {
        Content: "Angular Gauge"
    },
    BaseWidth: 200,
    BaseHeight: 200,
    CenterPosition: "100, 100",
    Center: {
        PPType: PP.Ui.CircleMarker,
        Size: 12,
        ToolTip: {
            Content: "Center"
        },
        Background: {
            PPType: PP.RadialGradientBrush,
            Center: ".6,.6",
            GradientStops: {
                GradientStop: [{
                    Color: "#FFFFFF",
                    Offset: 0
                }, {
                    Color: "#FFFFFF",
                    Offset: .4
                }, {
                    Color: "#DCDCDC",
                    Offset: .8
                }]
            }
        }
    },
    Background: {
        PPType: PP.LinearGradientBrush,
        StartPoint: "0,1",
        EndPoint: "0,0",
        GradientStops: {
            GradientStop: [{
                Color: "#07476D",
                Offset: 0
            }, {
                Color: "#18659D",
                Offset: .95
            }, {
                Color: "#0B4E78",
                Offset: .98
            }, {
                Color: "#0B4E78",
                Offset: 1
            }, ]
        }
    },
    OuterRadius: "80,80",
    Borders: [{
        Background: {
            PPType: PP.SolidColorBrush,
            Color: "#333333"
        },
        BorderRadiusLeftTop: 0,
        BorderRadiusRightTop: 0,
        BorderRadiusRightBottom: 0,
        BorderRadiusLeftBottom: 0
    }],
    Scales: [{
        ToolTip: {
            Content: "Scale"
        },
        Background: {
            PPType: PP.SolidColorBrush,
            Color: "#E9E9E9"
        },
        Size: 0,
        Length: -360,
        Name: "Основная шкала",
        //OuterRadius: 110,
        MinValue: 0,
        MaxValue: 360,
        Values: [0, 90, 180, 270],
        Labels: ["12", "3", "6", "9"],
        LabelFont: {
            Color: "#FFFFFF",
            Size: 14,
            IsBold: true,
            FontFamily: PP.Font.Family.TimesNewRoman,
            IsItalic: true
        },
        RotateLabels: false,
        MajorTick: {
            PPType: PP.Ui.LineMarker,
            Border: {
                PPType: PP.SolidColorBrush,
                Color: "#FFFFFF"
            },
            Size: 0,
            Style: PP.GaugeStyleLabels.Inner
        },
        MinorTick: {
            PPType: PP.Ui.LineMarker,
            Border: {
                PPType: PP.SolidColorBrush,
                Color: "#FFFFFF"
            },
            Size: 0,
            Style: PP.GaugeStyleLabels.Inner
        },
        Arrows: [{
            PPType: PP.Ui.TriangleArrow,
            Radius: 60,
            Tail: 10,
            Size: 2,
            Border: {
                PPType: PP.SolidColorBrush,
                Color: "#BCBCBC"
            },
            Background: {
                PPType: PP.SolidColorBrush,
                Color: "#FFFFFF"
            },
            Name: "Часовая стрелка"
        }, {
            PPType: PP.Ui.TriangleArrow,
            Radius: 40,
            Tail: 10,
            Size: 2,
            Border: {
                PPType: PP.SolidColorBrush,
                Color: "#BCBCBC"
            },
            Background: {
                PPType: PP.SolidColorBrush,
                Color: "#FFFFFF"
            },
            Name: "Минутная стрелка"
        }],
        Sectors: [{
            Name: "Sector1",
            StartValue: 0,
            EndValue: 360,
            Background: {
                PPType: PP.SolidColorBrush,
                Color: "#012A46"
            },
            StartSize: 10,
            EndSize: 10,
            Offset: 70
        }, {
            Name: "Sector2",
            StartValue: 0,
            EndValue: 360,
            Background: {
                PPType: PP.LinearGradientBrush,
                StartPoint: "0,1",
                EndPoint: "0,0",
                GradientStops: {
                    GradientStop: [{
                        Color: "#EBF0F4",
                        Offset: 0
                    }, {
                        Color: "#EBF0F4",
                        Offset: .4
                    }, {
                        Color: "#484C4F",
                        Offset: .85
                    }, {
                        Color: "#484C4F",
                        Offset: .9
                    }, {
                        Color: "#C0C1C3",
                        Offset: .98
                    }, {
                        Color: "#C0C1C3",
                        Offset: 1
                    }]
                }
            },
            StartSize: 15,
            EndSize: 15,
            Offset: -20
        }, {
            Name: "Sector3",
            StartValue: 0,
            EndValue: 360,
            Background: {
                PPType: PP.LinearGradientBrush,
                StartPoint: "0,1",
                EndPoint: "0,0",
                GradientStops: {
                    GradientStop: [{
                        Color: "#07476D",
                        Offset: 0
                    }, {
                        Color: "#18669E",
                        Offset: .5
                    }, {
                        Color: "#18669E",
                        Offset: .9
                    }, {
                        Color: "#7CAED1",
                        Offset: .95
                    }, {
                        Color: "#C3E0EF",
                        Offset: 1
                    }]
                }
            },
            StartSize: 5,
            EndSize: 5,
            Offset: -5
        }],
        Step: 6
    }, {
        ToolTip: {
            Content: "Scale"
        },
        Background: {
            PPType: PP.SolidColorBrush,
            Color: "#E9E9E9"
        },
        Size: 0,
        Length: -360,
        //OuterRadius: 110,
        MinValue: 0,
        MaxValue: 360,
        Values: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330],
        Labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
        MajorTick: {
            PPType: PP.Ui.LineMarker,
            Border: {
                PPType: PP.SolidColorBrush,
                Color: "#FFFFFF"
            },
            Size: 8,
            Style: PP.GaugeStyleLabels.Inner,
            BorderWidth: 3
        },
        MinorTick: {
            PPType: PP.Ui.LineMarker,
            Border: {
                PPType: PP.SolidColorBrush,
                Color: "#FFFFFF"
            },
            Size: 3,
            Style: PP.GaugeStyleLabels.Inner,
            Offset: 2
        },
        Auto: true,
        MinStepSize: 5,
        Step: 6
    }]
};
speed1 = new PP.Ui.Speedometer(speedometer1);

После выполнения примера на html-странице будет размещен компонент [Speedometer](Speedometer.htm), представленный в виде стрелочных часов и имеющий следующий вид:


![](clock.png)


См. также:


[Speedometer](Speedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
