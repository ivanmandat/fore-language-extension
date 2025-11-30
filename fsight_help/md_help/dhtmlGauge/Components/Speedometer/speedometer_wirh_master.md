# Пример создания спидометра с мастером

Пример создания спидометра с мастером
-


# Пример создания спидометра с мастером


Для выполнения примера добавьте ссылки на следующие файлы:


	- PP.css;


	- PP.js;


	- PP.GraphicsBase.js;


	- PP.Charts.js;


	- PP.Gauge.js;


	- PP.GaugeMaster.js;


	- resources.ru.js.


В теге BODY добавьте следующий код:


<div id="example" style="display: inline; float: left;"></div>
<div id="speedometer" style="display: inline; float: left; "></div>
В теге SCRIPT добавьте код для создания спидометра с мастером:


<script type="text/javascript">
    PP.resourceManager.setResourceList(["GaugeMaster", "PP"]);
    PP.resourceManager.setRootResourcesFolder("resources/");
    PP.setCurrentCulture(PP.Cultures.ru);
    var speedometer, master;
    var speedsettings = {
        ParentNode: "speedometer",
        Width: 250,
        Height: 150,
        BaseWidth: 220,
        BaseHeight: 135,
        CenterPosition: "110, 107",
        Center: {
            PPType: PP.Ui.CircleMarker,
            Size: 4,

            BorderEnabled: false,
            Background: {
                PPType: PP.LinearGradientBrush,
                StartPoint: "0, 0",
                EndPoint: "1, 1",
                GradientStops: {
                    GradientStop: [{
                        Color: "#ff4333",
                        Offset: 0.1
                    }, {
                        Color: "#ff190b",
                        Offset: 0.5
                    }, {
                        Color: "#9f0505",
                        Offset: 0.9
                    }]
                }

            }
        },
        CenterLabel: {
            Offset: 0,
            Font: {
                Color: "#848181",
                Size: 11
            },
            Border: {
                PPType: PP.SolidColorBrush,
                Color: "#b4b4b4"
            },
            Background: {
                PPType: PP.SolidColorBrush,
                Color: "#ffffff"
            },
            BorderWidth: 2,
            Text: "1000",
            TextAlign: "Center",
            Width: 30,
            IsVisible: true
        },

        OuterRadius: "100,100",
        Scales: [{
            Size: 0,
            Length: 180,
            StartAngle: 90,
            MinValue: 0,
            MaxValue: 180,
            CenterPosition: "110,115",
            OuterRadius: "1,1",
            Sectors: [{
                StartValue: 0,
                EndValue: 180,
                Background: {
                    PPType: PP.LinearGradientBrush,
                    StartPoint: "0, 0.5",
                    EndPoint: "1, 0.5",
                    GradientStops: {
                        GradientStop: // Подложка
                        [{
                            Color: "#d5d3d3",
                            Offset: 0.01
                        }, {
                            Color: "#676767",
                            Offset: 0.08
                        }, {
                            Color: "#d5d3d3",
                            Offset: 0.25
                        }, {

                            Color: "#676767",
                            Offset: 0.5
                        }, {
                            Color: "#d5d3d3",
                            Offset: 0.75
                        }, {
                            Color: "#676767",
                            Offset: 0.92
                        }, {
                            Color: "#d2d2d2",
                            Offset: 0.99
                        }]
                    }
                },
                StartSize: 1,
                EndSize: 1,
                Offset: 0
            }, {

                StartValue: 0,
                EndValue: 180,
                Background: {
                    PPType: PP.LinearGradientBrush,
                    StartPoint: "0, 0.5",
                    EndPoint: "1, 0.5",
                    GradientStops: {
                        GradientStop: //для нижней границы
                        [{
                            Color: "#bebebe",
                            Offset: 0.01
                        }, {
                            Color: "#dadada",
                            Offset: 0.25
                        }, {
                            Color: "#767676",
                            Offset: 0.5
                        }, {
                            Color: "#dfdfdf",
                            Offset: 0.8
                        }, {

                            Color: "#aeaeae",
                            Offset: 0.99
                        }]
                    }
                },
                StartSize: 0.95,
                EndSize: 0.95,
                Offset: 5
            }, {
                StartValue: 0,
                EndValue: 120,
                Background: {
                    PPType: PP.LinearGradientBrush,
                    StartPoint: "0, 0.5",
                    EndPoint: "1, 0.5",
                    GradientStops: {
                        GradientStop: //тонкая белая линия на внешней границе
                        [{
                            Color: "#FFFFFF",
                            Offset: 0.01
                        }, {
                            Color: "#c7c7c7",
                            Offset: 0.75
                        }, {
                            Color: "#d2d0d0",
                            Offset: 0.9
                        }]
                    }
                },

                StartSize: 0.01,
                EndSize: 0.01,
                Offset: 1
            }]
        }, {
            Size: 0,
            Length: 180,
            MinValue: 0,
            MaxValue: 180,
            StartAngle: 90,
            CenterPosition: "110,112",
            OuterRadius: "0.95,0.93",
            IsAbsoluteSectorOffset: false,
            Sectors: [{
                StartValue: 0,
                EndValue: 180,
                Background: {
                    PPType: PP.SolidColorBrush,
                    Color: "#efefef"
                },
                StartSize: 1,
                EndSize: 1,

                Offset: 0
            }, {
                StartValue: 0,
                EndValue: 180,
                Background: {
                    PPType: PP.SolidColorBrush,
                    Color: "#a2a1a1"
                },
                StartSize: 0.01,
                EndSize: 0.01,
                Offset: 0.37
            }, {
                StartValue: 0,
                EndValue: 180,
                Background: {
                    PPType: PP.SolidColorBrush,
                    Color: "#666666"
                }, //темно серый тонкий сектор
                StartSize: 0.01,

                EndSize: 0.01,
                Offset: 0
            }, {
                StartValue: 0,
                EndValue: 180,
                Background: {
                    PPType: PP.SolidColorBrush,
                    Color: "#ffffff"
                }, //белый тонкий сектор
                StartSize: 0.01,
                EndSize: 0.01,
                Offset: 0.38
            }]
        }, {
            Size: 0,
            Length: 180,
            MinValue: 0,
            MaxValue: 180,

            StartAngle: 90,
            CenterPosition: "110,112",
            OuterRadius: "0.95,0.92",
            IsAbsoluteSectorOffset: false,
            Sectors: [{
                StartValue: 0.5,
                EndValue: 45,
                Background: // синий
                {
                    PPType: PP.LinearGradientBrush,
                    StartPoint: "0, 0.5",
                    EndPoint: "1, 0.5",
                    GradientStops: {
                        GradientStop: [{
                            Color: "#1B84FE",
                            Offset: 0.01
                        }, {
                            Color: "#0079ff",
                            Offset: 0.9
                        }]
                    }
                },
                Border: {

                    PPType: PP.LinearGradientBrush,
                    StartPoint: "0, 0",
                    EndPoint: "1, 0.5",
                    GradientStops: {
                        GradientStop: [{
                            Color: "#80c4ff",
                            Offset: 0.01
                        }, {
                            Color: "#0065CF",
                            Offset: 0.9
                        }]
                    }
                },
                BorderWidth: 1,
                StartSize: 0.06,
                EndSize: 0.06,
                Offset: 0.395,
                ZIndex: 0

            }, {
                StartValue: 45,
                EndValue: 90,
                Background: {
                    PPType: PP.SolidColorBrush,
                    Color: "#A3BD3E"
                },
                Background: //зеленый
                {
                    PPType: PP.LinearGradientBrush,
                    StartPoint: "0, 0",
                    EndPoint: "1, 0.5",
                    GradientStops: {
                        GradientStop: [{
                            Color: "#6A851F",
                            Offset: 0.1
                        }, {

                            Color: "#A3BD3E",
                            Offset: 0.7
                        }]
                    }
                },
                Border: {
                    PPType: PP.LinearGradientBrush,
                    StartPoint: "0, 0",
                    EndPoint: "1, 0.5",
                    GradientStops: {
                        GradientStop: [{
                            Color: "#C9D7A6",
                            Offset: 0.1
                        }, {

                            Color: "#6A851F",
                            Offset: 0.8
                        }]
                    }
                },
                BorderWidth: 1,
                StartSize: 0.06,
                EndSize: 0.06,
                Offset: 0.395,
                ZIndex: 4
            }, {
                StartValue: 90,
                EndValue: 135,
                Background: {
                    PPType: PP.SolidColorBrush,
                    Color: "#E8CA26"
                },
                Background: // желтый

                {
                    PPType: PP.LinearGradientBrush,
                    StartPoint: "0, 0.5",
                    EndPoint: "1, 0.5",
                    GradientStops: {
                        GradientStop: [{
                            Color: "#ffde00",
                            Offset: 0.01
                        }, {
                            Color: "#E8CA26",
                            Offset: 0.9
                        }]
                    }
                },
                Border: {
                    PPType: PP.LinearGradientBrush,
                    StartPoint: "0, 0",

                    EndPoint: "1, 0.5",
                    GradientStops: {
                        GradientStop: [{
                            Color: "#B19400",
                            Offset: 0.01
                        }, {
                            Color: "#ffd900",
                            Offset: 0.9
                        }]
                    }
                },
                BorderWidth: 1,
                StartSize: 0.06,
                EndSize: 0.06,
                Offset: 0.395,
                ZIndex: 9
            }, {
                StartValue: 136,
                EndValue: 179.5,
                Background: //красный
                {
                    PPType: PP.LinearGradientBrush,
                    StartPoint: "0, 0.5",
                    EndPoint: "1, 0.5",
                    GradientStops: {

                        GradientStop: [{
                            Color: "#ff462c",
                            Offset: 0.01
                        }, {
                            Color: "#c00000",
                            Offset: 0.9
                        }]
                    }
                },
                Border: {
                    PPType: PP.LinearGradientBrush,
                    StartPoint: "0, 0",
                    EndPoint: "1, 0.5",
                    GradientStops: {
                        GradientStop: [{
                            Color: "#FF8273",
                            Offset: 0.01
                        }, {
                            Color: "#BD0B07",
                            Offset: 0.9
                        }]
                    }

                },
                BorderWidth: 1,
                StartSize: 0.06,
                EndSize: 0.06,
                Offset: 0.395,
                ZIndex: 14
            }]
        }, {
            OuterRadius: "0.95,0.875",
            Size: 0,
            Length: 180,
            StartAngle: 90,
            MinValue: 0,
            MaxValue: 1000,
            CenterPosition: "110,107",
            Values: [0, 500, 250, 750, 1000],
            Labels: [0, 500, 250, 750, 1000],
            LabelFont: {
                Color: "#8c8c8c",
                Size: 8,
                IsBold: false,
                FontFamily: PP.Font.Family.Tahoma,
                IsItalic: false
            },
            RotateLabels: false,
            Arrows: [{
                Name: "Arrow1",
                PPType: PP.Ui.LineArrow,
                Radius: 50,

                Tail: 0,
                Border: {
                    PPType: PP.SolidColorBrush,
                    Color: "#ff462c"
                }
            }],
            MajorTick: {
                PPType: PP.Ui.CircleMarker,
                Background: {
                    PPType: PP.SolidColorBrush,
                    Color: "#8c8c8c"
                },
                Size: 0.02,
                Style: PP.GaugeStyleLabels.Inner,
                Offset: -0.31
            },
            MinorTick: {
                PPType: PP.Ui.CircleMarker,
                Background: {
                    PPType: PP.SolidColorBrush,
                    Color: "#8c8c8c"
                },
                Size: 0.01,
                Style: PP.GaugeStyleLabels.Inner,
                Offset: -0.31
            },
            PassedMajorTick: {
                PPType: PP.Ui.CircleMarker,

                Background: {
                    PPType: PP.SolidColorBrush,
                    Color: "#ff462c"
                },
                // толстые точки
                Size: 0.02,
                Style: PP.GaugeStyleLabels.Inner,
                Offset: -0.31
            },
            PassedMinorTick: {
                PPType: PP.Ui.CircleMarker,
                Background: {
                    PPType: PP.SolidColorBrush,
                    Color: "#ff462c"
                },
                // маленькие точки
                Size: 0.01,
                Style: PP.GaugeStyleLabels.Inner,
                Offset: -0.31
            },
            PassedLabelFont: {
                Color: "#ff462c",
                Size: 8,

                IsBold: false,
                FontFamily: PP.Font.Family.Tahoma,
                IsItalic: false
            },
            Step: 50
        }]
    };
    speedometer = new PP.Ui.Speedometer(speedsettings);
    speedometer.addToNode('speedometer');
    speedometer.Click.add(function () {
        console.log("click");

    });
    master = new PP.Ui.GaugeMaster({
        ImagePath: "build/img/",
        DataView: [speedometer],
        ParentNode: "example",
        Width: 300,
        Height: 500,
        PropertyChanged: function (sender, args) {
            alert("Настройки изменены")
        }
    });
</script>
После выполнения примера на странице размещен спидометр с мастером:


![](speedometer%20with%20master.gif)


При изменении настроек мастера на экран будет
 выдаваться сообщение «Настройки изменены».


См. также:


[Speedometer](Speedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
