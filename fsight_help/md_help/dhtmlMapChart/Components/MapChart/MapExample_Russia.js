{
    "MapChart": {
        "ItemsDictionary": {
            "MapToolTip": {
                "@Background": "#FFFFFFFF",
                "@MaskText": "{0}: {1:#,##0.00}",
                "@BorderRadius": "1",
                "@Padding": "2 2 2 2",
                "@HoverMode": "MouseOver",
                "@BorderThickness": "1",
                "@NoDataText": "no data",
                "@Id": "MainToolTipStyle",
                "@BorderColor": "#FF000000",
                "@TextWrapping": "NoWrap"
            },
            "Font": [{
                "@IsItalic": "False",
                "@FontFamily": "Arial",
                "@Size": "7",
                "@Id": "MapFont",
                "@IsBold": "False",
                "@Color": "#FF010000"
            }, {
                "@IsItalic": "False",
                "@FontFamily": "Calibri",
                "@Size": "12",
                "@Id": "ToolTipFont",
                "@IsBold": "False",
                "@Color": "#313533"
            }, {
                "@IsItalic": "False",
                "@FontFamily": "Arial",
                "@Size": "11",
                "@Id": "LegendFont",
                "@IsBold": "False",
                "@Color": "#FF000000"
            }, {
                "@IsItalic": "False",
                "@FontFamily": "Arial",
                "@Size": "11",
                "@Id": "LegendFontHeader",
                "@IsBold": "False",
                "@Color": "#FF010000"
            }, {
                "@IsItalic": "False",
                "@FontFamily": "Arial",
                "@Size": "11",
                "@Id": "LegendFontFooter",
                "@IsBold": "False",
                "@Color": "#FF010000"
            }, {
                "@IsItalic": "False",
                "@FontFamily": "Verdana",
                "@Size": "14",
                "@Id": "FiguredArrowFont",
                "@IsBold": "True",
                "@Color": "#000066"
            }, {
                "@IsItalic": "False",
                "@FontFamily": "Verdana",
                "@Size": "12",
                "@Id": "FilledArrowFont",
                "@IsBold": "True",
                "@Color": "#000066"
            }, {
                "@IsItalic": "False",
                "@FontFamily": "Verdana",
                "@Size": "12",
                "@Id": "SimpleArrowFont",
                "@IsBold": "True",
                "@Color": "Black"
            }],
            "MapLabel": {
                "@MaskText": "{0}: {1:#,##0.00}",
                "@Padding": "2 2 2 2",
                "@Font": "{MapFont}",
                "@Id": "MainLabelStyle",
                "@TextWrapping": "NoWrap"
            },
            "BorderEffect": {
                "@BorderThickness": "1",
                "@Id": "BorderEffectDefault",
                "@BorderColor": "Orange"
            },
            "MapScale": [{
                "@Items": "#FF705B #FFD900 #6BBC80 #86B7FB Transparent",
                "@TypeArguments": "Brush",
                "@Id": "BarVisualScale_color",
                "@NoData": "Gray",
                "@EnableEquality": "False",
                "@Values": "0 1 2 3 4"
            }, {
                "@Items": "4 10 12 15 18 20 22 25 28 30 35 40 43 50",
                "@NoData": "0.0",
                "@TypeArguments": "Double",
                "@Id": "BarVisualScale"
            }, {
                "@Values": "0.00 30.00 70.00 100.00",
                "@Items": "#FFCA423E #FFCA423E #FFD06664 #FFD06664 #FF84AF75 #FF84AF75 #FF6EA45A",
                "@EnableEquality": "True",
                "@NoData": "#FFBFBFBF",
                "@TypeArguments": "Brush",
                "@Id": "MapScale0"
            }, {
                "@Values": "0.00 30.00 70.00 100.00",
                "@Items": "#D8BFD8 #9370DB #A020F0 #8A2BE2 #9400D3 #9932CC #BA55D3",
                "@EnableEquality": "True",
                "@NoData": "#FFBFBFBF",
                "@TypeArguments": "Brush",
                "@Id": "MapScale1"
            }, {
                "@Id": "ArrowWidthScale",
                "@TypeArguments": "Double",
                "@Items": "0.05 0.09 0.1 0.12 0.15 0.17 0.22 0.1",
                "@NoData": "0"
            }, {
                "@Id": "ArrowColorScale",
                "@TypeArguments": "Brush",
                "@Items": "#A164D4DF #A100A1DF #A16F91BE #A19180D0 #A1A248A3 #A1444AC2"
            }],
            "DataDependency": [{
                "@IsDependent": "False",
                "@TypeArguments": "Double",
                "@Id": "StaticWidthDataDependency",
                "@Value": "4"
            }, {
                "@IsDependent": "True",
                "@TypeArguments": "Brush",
                "@Id": "BarBackDataDependency",
                "@DataSource": "{BarBackSource}",
                "@MapScale": "{BarVisualScale_color}"
            }, {
                "@IsDependent": "True",
                "@TypeArguments": "Brush",
                "@Id": "BubbleBackDataDependency",
                "@DataSource": "{DataSource0}",
                "@MapScale": "{MapScale1}"
            }, {
                "@IsDependent": "False",
                "@TypeArguments": "Double",
                "@Id": "StaticRadiusDataDependency",
                "@Value": "16"
            }, {
                "@IsDependent": "True",
                "@MapScale": "{BarVisualScale}",
                "@TypeArguments": "Double",
                "@DataSource": "{DataSource0}",
                "@Id": "BarHeightDataDependency",
                "@Value": "80",
                "@ValueFormat": "#,##",
                "@ValuesStringDelimiter": "|"
            }, {
                "@IsDependent": "False",
                "@TypeArguments": "Color",
                "@Id": "StaticColorDataDependency",
                "@Value": "#ff000000"
            }, {
                "@Id": "ArrowColorDataDependency",
                "@IsDependent": "True",
                "@DataSource": "{arrowSource}",
                "@TypeArguments": "Brush",
                "@MapScale": "{ArrowColorScale}"
            }, {
                "@Id": "ArrowWidthDataDependency",
                "@IsDependent": "True",
                "@DataSource": "{arrowSource}",
                "@TypeArguments": "Double",
                "@MapScale": "{ArrowWidthScale}"
            }]
        },
        "MapTimeline": {
            "@Visibility": "Visible",
            "@HorizontalAlignment": "Center",
            "@VerticalAlignment": "Bottom",
            "@DataSource": "{DataSource0 BarBackSource}",
            "@StepTime": "1000",
            "@DelayTime": "1000",
            "@ReturnToInitialState": "True",
            "MapTimeline.StepsNames": {
                "StepName": [{
                    "@Name": "2000"
                }, {
                    "@Name": "2001"
                }, {
                    "@Name": "2002"
                }, {
                    "@Name": "2003"
                }]
            }
        },
        "MapLayers": {
            "MapLayer": {
                "@Id": "Regions",
                "@Effect": "{BorderEffectDefault}",
                "MapLayer.ToolTip": {
                    "MapToolTip": {
                        "@Background": "#FFFFF3E1",
                        "@MaskText": "{%Name}:{%AreaValue:#,##0.00}",
                        "@BorderRadius": "0",
                        "@Padding": "4 2 4 2",
                        "@Font": "{ToolTipFont}",
                        "@HoverMode": "MouseOver",
                        "@BorderThickness": "1",
                        "@NoDataText": "no data",
                        "@BorderColor": "#FFD3D6D9",
                        "@TextWrapping": "NoWrap"
                    }
                },
                "MapLayer.Milestones": {
                    "MapImageMilestone": [{
                        "@Shape": "{RU-MO}",
                        "@Offset": "0.4, 0.6",
                        "@OffsetType": "Relative",
                        "@Source": "png/Yahoo_Weather_001.png",
                        "@Width": "100",
                        "@Height": "69"
                    }, {
                        "@Shape": "{RU-NEN}",
                        "@Offset": "0.45, 0.6",
                        "@OffsetType": "Relative",
                        "@Source": "png/Yahoo_Weather_002.png",
                        "@Width": "100",
                        "@Height": "69"
                    }, {
                        "@Shape": "{RU-ROS}",
                        "@Offset": "0.4, 0.6",
                        "@OffsetType": "Relative",
                        "@Source": "png/Yahoo_Weather_003.png",
                        "@Width": "100",
                        "@Height": "69"
                    }, {
                        "@Shape": "{RU-ZAB}",
                        "@Offset": "0.5, 0.6",
                        "@OffsetType": "Relative",
                        "@Source": "png/Yahoo_Weather_004.png",
                        "@Width": "100",
                        "@Height": "69"
                    }, {
                        "@Shape": "{RU-SAK}",
                        "@Offset": "0.6, 0.45",
                        "@OffsetType": "Relative",
                        "@Source": "png/Yahoo_Weather_005.png",
                        "@Width": "100",
                        "@Height": "69"
                    }, {
                        "@Shape": "{RU-KYA}",
                        "@Offset": "0.4, 0.6",
                        "@OffsetType": "Relative",
                        "@Source": "png/Yahoo_Weather_006.png",
                        "@Width": "100",
                        "@Height": "69"
                    }, {
                        "@Shape": "{RU-MAG}",
                        "@Offset": "0.4, 0.5",
                        "@OffsetType": "Relative",
                        "@Source": "png/Yahoo_Weather_007.png",
                        "@Width": "100",
                        "@Height": "69"
                    }]
                },
                "MapLayer.Visuals": {
                    "MapAreaVisual": {
                        "@Name": "Cartographic",
                        "@Visibility": "Visible",
                        "@Index": "0",
                        "@DataSource": "{DataSource0}",
                        "@Id": "MapAreaVisual",
                        "MapAreaVisual.Background": {
                            "DataDependency": {
                                "@IsDependent": "True",
                                "@MapScale": "{MapScale0}",
                                "@TypeArguments": "Brush",
                                "@DataSource": "{DataSource0}"
                            }
                        }
                    },
                    "MapBubbleVisual": {
                        "@Background": "{BubbleBackDataDependency}",
                        "@Size": "{BarHeightDataDependency}",
                        "@Name": "Рождаемость",
                        "@Visibility": "Collapsed",
                        "@Id": "BubbleVisual",
                        "@LeastSizePart": "2",
                        "@DataSource": "{DataSource0}"
                    },
                    "Map3DVisual": {
                        "@Id": "3DVisual",
                        "@Name": "3D",
                        "@Visibility": "Visible",
                        "@AutoHeight": "False",
                        "@DataSource": "{DataSource0}",
                        "@Index": "0",
                        "Map3DVisual.Height": {
                            "DataDependency": {
                                "@TypeArguments": "Double",
                                "@IsDependent": "True",
                                "@Value": "10",
                                "DataDependency.MapScale": {
                                    "MapScale": {
                                        "@TypeArguments": "Double",
                                        "@NoData": "5",
                                        "@Items": "10 20 30 40 50",
                                        "@Mode": "Uniform",
                                        "@EnableEquality": "False"
                                    }
                                }
                            }
                        }
                    },
                    "MapBarVisual": {
                        "Background": "{BarBackDataDependency}",
                        "BarDistance": "1",
                        "LeastWidthPart": "4",
                        "Width": "{StaticWidthDataDependency}",
                        "Name": "Рождаемость",
                        "MaxBarsCount": "4",
                        "Visibility": "Collapsed",
                        "Height": "{BarHeightDataDependency}",
                        "LeastHeightPart": "3",
                        "BorderThickness": "1",
                        "IsPercentage": "false",
                        "Id": "BarVisual",
                        "BorderColor": "{StaticColorDataDependency}",
                        "DataSource": "{DataSource0}"
                    },
                    "MapPieVisual": {
                        "@Background": "{BarBackDataDependency}",
                        "@LeastRadiusPart": "2",
                        "@Radius": "{StaticRadiusDataDependency}",
                        "@Name": "Рождаемость",
                        "@MaxPiesCount": "4",
                        "@Visibility": "Collapsed",
                        "@BorderThickness": "1",
                        "@IsProportional": "False",
                        "@Id": "PieVisual",
                        "@BorderColor": "{StaticColorDataDependency}",
                        "@DataSource": "{BarBackSource}"
                    }
                }
            }
        },
        "Visuals": {
            "MarkerVisual0": {
                "@PPType": "PP.MarkerVisual",
                "@Id": "MarkerVisual",
                "@DataSource": "markers0",
                "@LongitudeMapping": {
                    "DimAttributeId": "lng",
                    "Type": "None"
                },
                "@LatitudeMapping": {
                    "DimAttributeId": "lat",
                    "Type": "None"
                },
                "@ColorMapping": {
                    "DimAttributeId": "clr",
                    "Type": "Scale",
                    "Scale": {
                        "TypeArguments": "Brush",
                        "Items": "#FF276B66 #FF29CB33 #FFA6D618 #FFFFC80C #FFF38E01 #FFEC1A1A"
                    },
                    "Format": "#,##0.00"
                }
            },
            "MapArrowVisual": {
                "@Id": "MapArrowVisual",
                "@Color": "{ArrowColorDataDependency}",
                "@BasementWidth": "{ArrowWidthDataDependency}"
            }
        },
        "MapArrows": {
            "MapSimpleArrow": {
                "@PointerWidth": "0.1",
                "@TextOrientation": "AlongTheArrow",
                "@PointerLength": "0.3",
                "@Text": "Simple Arrow",
                "@Angle": "50",
                "@Font": "{SimpleArrowFont}",
                "@StrokeStyle": "Solid",
                "@Color": "#FFA282BB",
                "@StartShape": "{RU-KGD}",
                "@EndShape": "{RU-ARK}"
            },
            "MapFilledArrow": {
                "@PointerWidth": "0.15",
                "@TextOrientation": "AlongTheArrow",
                "@PointerLength": "0.1",
                "@Text": "Filled Arrow",
                "@Angle": "45",
                "@Font": "{FilledArrowFont}",
                "@StrokeStyle": "Dash",
                "@Color": "#DF679BD6",
                "@StartShape": "{RU-IRK}",
                "@EndShape": "{RU-MOS}",
                "@BasementWidth": "0.05"
            },
            "MapFiguredArrow": {
                "@PointerWidth": "0.15",
                "@TextOrientation": "Horizontal",
                "@PointerLength": "0.1",
                "@Text": "Figured Arrow",
                "@Angle": "45",
                "@Font": "{FiguredArrowFont}",
                "@StrokeStyle": "Dot",
                "@Color": "#BF86ADB7",
                "@StartShape": "{RU-KYA}",
                "@EndShape": "{RU-MAG}",
                "@BasementWidth": "0.1"
            }
        },
        "MapLegends": {
            "MapLegend": [{
                "@LessFormat": "меньше {0:#,##0.00}",
                "@Width": "0",
                "@Background": "#80FFFFFF",
                "@EqualFormat": "equal {0:#,##0.00}",
                "@Marker": "Circle",
                "@BorderRadius": "0",
                "@MapScale": "{MapScale0}",
                "@Visibility": "Collapsed",
                "@HorizontalAlignment": "Center",
                "@IsOuter": "False",
                "@TextWrapping": "NoWrap",
                "@IncludeEquals": "False",
                "@GreaterFormat": "более {0:#,##0.00}",
                "@BetweenFormat": "от {0:#,##0.00} до {1:#,##0.00}",
                "@ColumnCount": "8",
                "@Font": "{LegendFont}",
                "@Padding": "3 0 3 0",
                "@VerticalAlignment": "Bottom",
                "@Visibility": true,
                "@Height": "0",
                "@NoDataText": "нет данных",
                "@Margin": "6 6 6 6",
                "MapLegend.Header": {
                    "MapLabel": {
                        "@Background": "#00000000",
                        "@MaskText": "{0}",
                        "@Text": "",
                        "@Font": "{LegendFontHeader}",
                        "@TextWrapping": "NoWrap"
                    }
                },
                "MapLegend.Footer": {
                    "MapLabel": {
                        "@Background": "#00000000",
                        "@MaskText": "{0}",
                        "@Text": "",
                        "@Font": "{LegendFontFooter}",
                        "@TextWrapping": "NoWrap"
                    }
                }
            }]
        },
        "DataSources": {
            "DataSource": [{
                "@Id": "arrowSource",
                "Dimension": [{
                    "@Id": "Simple",
                    "@Items": "15.29 10.2 11.2 16"
                }, {
                    "@Id": "Filled",
                    "@Items": "8.45 9.14 5.18 7.19"
                }, {
                    "@Id": "Figured",
                    "@Items": "3.53 14 2 12"
                }]
            }, {
                "@Id": "BarBackSource",
                "Dimension": [{
                    "@Items": "2 1 3 4",
                    "@Id": "RU-SA"
                }, {
                    "@Items": "4 3 1 2",
                    "@Id": "RU-KAM"
                }, {
                    "@Items": "1 0 3 2 4",
                    "@Id": "RU-KYA"
                }, {
                    "@Items": "4 3 3 2",
                    "@Id": "RU-MOS"
                }, {
                    "@Items": "1 4 4 2",
                    "@Id": "RU-NIZ"
                }]
            }, {
                "Id": "markers0",
                "Title": "Marker",
                "AttributesNames": {
                    "lat": "Latitude",
                    "lng": "Longitude",
                    "clr": "Color"
                },
                "ItemsNames": {
                    "m00": "First Marker",
                    "m01": "Second Marker",
                    "m02": "Third Marker"
                },
                "Series": {
                    "m00": {
                        "lat": {
                            "Items": "278.031372 275.753395 279.933 275.753395"
                        },
                        "lng": {
                            "Items": "396.243134 377.619505 370.359344 377.619505"
                        },
                        "clr": {
                            "Items": "10 20 30 40"
                        }
                    },
                    "m01": {
                        "lat": {
                            "Items": "309.61167 301.16581 309.909736 301.203405"
                        },
                        "lng": {
                            "Items": "526.421814 508.894501 536.617126 541.27533"
                        },
                        "clr": {
                            "Items": "40 30 20 10"
                        }
                    },
                    "m02": {
                        "lat": {
                            "Items": "387.561997 389.96028 388.959409 383.211116"
                        },
                        "lng": {
                            "Items": "407.479019 413.016129 382.332535 422.684097"
                        },
                        "clr": {
                            "Items": "20 10 40 30"
                        }
                    }
                }
            }, {
                "@Id": "DataSource0",
                "Dimension": [{
                    "@Items": "16.1939280648688 12.2310511359158 60.117842843811 27.5648132560611",
                    "@Id": "RU-AD"
                }, {
                    "@Items": "79.0762767563929 47.4979236477511 12.8499087006086 48.6262122861232",
                    "@Id": "RU-AL"
                }, {
                    "@Items": "9.81249423223198 75.1427246141912 82.0356626911255 65.7545083042954",
                    "@Id": "RU-ALT"
                }, {
                    "@Items": "56.9232088778742 1.84414088811918 33.9544456144583 55.2143345378406",
                    "@Id": "RU-AMU"
                }, {
                    "@Items": "82.9002566090321 74.3999437775463 53.6573190491913 67.8472857772593",
                    "@Id": "RU-ARK"
                }, {
                    "@Items": "34.2345855823879 13.074286381283 8.73672729764913 23.3522435758972",
                    "@Id": "RU-AST"
                }, {
                    "@Items": "48.569667734471 17.0039602634515 42.6808474784162 22.173033339052",
                    "@Id": "RU-BA"
                }, {
                    "@Items": "6.99207559553537 5.48785478132211 74.1058486858876 50.0728917075661",
                    "@Id": "RU-BEL"
                }, {
                    "@Items": "20.506218737227 70.9140857080529 8.37823576684028 69.5240841570888",
                    "@Id": "RU-BRY"
                }, {
                    "@Items": "41.1685938672948 77.9431286165226 12.8076114751434 32.9473887257964",
                    "@Id": "RU-BU"
                }, {
                    "@Items": "26.8897194074885 17.3301270312304 73.2925263574778 68.8850196399191",
                    "@Id": "RU-CE"
                }, {
                    "@Items": "8.2053239029857 67.6412047201959 27.2776352834318 39.7139570860723",
                    "@Id": "RU-CHE"
                }, {
                    "@Items": "60.2166453191157 30.6727933374573 27.2505752403525 43.7360617535822",
                    "@Id": "RU-CHU"
                }, {
                    "@Items": "83.1376064955898 45.9175565493841 83.1000259067398 3.11964168358577",
                    "@Id": "RU-CU"
                }, {
                    "@Items": "3.49432383826669 36.7655992679138 78.9951455215901 62.0723164929414",
                    "@Id": "RU-DA"
                }, {
                    "@Items": "4.81707616933485 90.6768753615566 41.6341366905878 4.32463945090987",
                    "@Id": "RU-IN"
                }, {
                    "@Items": "1.03687592830363 31.9627709835594 45.2482895670684 86.0091231698213",
                    "@Id": "RU-IRK"
                }, {
                    "@Items": "93.4659051212789 64.4303614573695 14.0457406705458 4.95712799250946",
                    "@Id": "RU-IVA"
                }, {
                    "@Items": "61.5923323024029 20.7099303233949 40.9575663697708 16.9044585511575",
                    "@Id": "RU-KAM"
                }, {
                    "@Items": "39.7817600238052 39.8517076577301 15.1469196729115 80.9284630142751",
                    "@Id": "RU-KB"
                }, {
                    "@Items": "89.7263249800197 2.96689039234393 61.9563880199363 76.3192822580781",
                    "@Id": "RU-KC"
                }, {
                    "@Items": "78.2372795409697 30.3697869323053 66.9352852119763 74.588662187843",
                    "@Id": "RU-KDA"
                }, {
                    "@Items": "87.8140598013131 5.2585940832545 66.0297603188221 4.40299459938099",
                    "@Id": "RU-KEM"
                }, {
                    "@Items": "98.9479830949325 50.735294982202 28.1303125564616 36.2128440459319",
                    "@Id": "RU-KGD"
                }, {
                    "@Items": "75.6959903406426 68.9678869065679 67.8481437116154 76.2425529194263",
                    "@Id": "RU-KGN"
                }, {
                    "@Items": "22.3929151531276 41.2685121136105 46.2480519647934 95.7862838617462",
                    "@Id": "RU-KHA"
                }, {
                    "@Items": "16.6270526669114 22.293447247843 82.1437294511794 62.4276761721949",
                    "@Id": "RU-KHM"
                }, {
                    "@Items": "4.95999017961323 66.1955673555823 63.3378816597806 63.6426161805366",
                    "@Id": "RU-KIR"
                }, {
                    "@Items": "21.6186795950023 98.066682507315 72.3459915129216 1.85018577699092",
                    "@Id": "RU-KK"
                }, {
                    "@Items": "28.7204873416203 65.3148544325097 26.0873599099402 70.6670889959983",
                    "@Id": "RU-KL"
                }, {
                    "@Items": "65.0274857715831 70.6596273792254 98.1950633685081 88.2073110380244",
                    "@Id": "RU-KLU"
                }, {
                    "@Items": "98.4006011385473 9.64274607116484 6.00914489757696 10.8570373202008",
                    "@Id": "RU-KO"
                }, {
                    "@Items": "92.5796177669333 4.74472232383896 41.2084682105149 70.8138731172373",
                    "@Id": "RU-KOS"
                }, {
                    "@Items": "72.0035639461146 38.9043667534852 58.5355478611475 48.4578128664092",
                    "@Id": "RU-KR"
                }, {
                    "@Items": "56.7188384275506 66.1701041581901 59.6922295911667 55.9438322931266",
                    "@Id": "RU-KRS"
                }, {
                    "@Items": "48.226057481126 4.50760903978143 69.6286720082297 21.6184924457308",
                    "@Id": "RU-KYA"
                }, {
                    "@Items": "41.9207124234739 2.38714413828549 82.7843150043787 0.881300587617466",
                    "@Id": "RU-LEN"
                }, {
                    "@Items": "78.3893034692804 26.2801267794707 7.49235670431161 10.3811359081329",
                    "@Id": "RU-LIP"
                }, {
                    "@Items": "42.8805269966277 97.1810547156171 11.2150671478431 51.7332877739022",
                    "@Id": "RU-MAG"
                }, {
                    "@Items": "43.0734487451024 58.040740926769 97.3856827231989 6.98430659574657",
                    "@Id": "RU-ME"
                }, {
                    "@Items": "16.284302350266 71.2866921309786 69.8480584052615 0.21526785577427",
                    "@Id": "RU-MO"
                }, {
                    "@Items": "24.9870991450674 92.5240085425433 91.639052234422 82.7143128415171",
                    "@Id": "RU-MOS"
                }, {
                    "@Items": "39.5311346461676 23.8881786465124 45.1313473494404 62.5503831834301",
                    "@Id": "RU-MOW"
                }, {
                    "@Items": "5.62262484134297 70.1435276168136 22.4410315148723 60.5198767318017",
                    "@Id": "RU-MUR"
                }, {
                    "@Items": "1.03095537099566 76.5765709227773 46.2865986145505 96.0134570002619",
                    "@Id": "RU-NEN"
                }, {
                    "@Items": "26.8584310667861 5.12784430995949 32.4677338509204 66.2994909874627",
                    "@Id": "RU-NGR"
                }, {
                    "@Items": "97.2523656195274 30.8273323023819 27.9333461206096 74.8225092304975",
                    "@Id": "RU-NIZ"
                }, {
                    "@Items": "27.6892996056421 6.80226008724527 5.38436412130686 98.6780975007816",
                    "@Id": "RU-NVS"
                }, {
                    "@Items": "68.7844214349913 52.7079229954201 39.6595299428606 76.9393653501474",
                    "@Id": "RU-OMS"
                }, {
                    "@Items": "34.6595506345199 69.4134041524555 96.6313933006634 49.3967038809306",
                    "@Id": "RU-ORE"
                }, {
                    "@Items": "10.7480919038635 0.0700021628616388 61.3501659414499 54.501124822768",
                    "@Id": "RU-ORL"
                }, {
                    "@Items": "81.1487794300303 44.9419735208815 4.75851106678998 72.7369993798141",
                    "@Id": "RU-PER"
                }, {
                    "@Items": "74.7400232007448 50.6951904160414 50.7023324029065 66.496877822325",
                    "@Id": "RU-PNZ"
                }, {
                    "@Items": "11.7541423122185 1.37222572293702 80.1258755289604 11.1564580403066",
                    "@Id": "RU-PRI"
                }, {
                    "@Items": "38.8189582800581 3.54856741779883 2.96290223624692 94.1597668426855",
                    "@Id": "RU-PSK"
                }, {
                    "@Items": "64.5906624219337 16.8165430039244 55.0250132358749 32.7288745589223",
                    "@Id": "RU-ROS"
                }, {
                    "@Items": "18.5038145252056 46.4532498486588 93.7659617484389 52.9147018459228",
                    "@Id": "RU-RYA"
                }, {
                    "@Items": "30.4839976739529 45.5016661647249 25.8603260972818 31.6175512185402",
                    "@Id": "RU-SA"
                }, {
                    "@Items": "79.9451776221139 96.8898947336198 85.2653650963983 26.7884289039245",
                    "@Id": "RU-SAK"
                }, {
                    "@Items": "43.7776783685096 77.9666090281525 85.1507115574324 52.3103920986459",
                    "@Id": "RU-SAM"
                }, {
                    "@Items": "26.0688212355919 55.1963467407955 0.0824860297527565 76.9941091896007",
                    "@Id": "RU-SAR"
                }, {
                    "@Items": "56.0999276843387 38.8874862989818 86.9239551885631 67.4121957120542",
                    "@Id": "RU-SE"
                }, {
                    "@Items": "72.5820474664597 28.5030719025541 38.1204070700893 31.1109832167211",
                    "@Id": "RU-SMO"
                }, {
                    "@Items": "66.4505019162085 2.47162645797787 84.806041458997 93.9315488999391",
                    "@Id": "RU-SPE"
                }, {
                    "@Items": "45.0449889269867 28.6212913825276 35.9973102975624 34.6955295813715",
                    "@Id": "RU-STA"
                }, {
                    "@Items": "51.1760117724426 51.8438092208671 42.2530017058612 29.2383570360198",
                    "@Id": "RU-SVE"
                }, {
                    "@Items": "24.8348643187596 19.0847811843663 86.5517002002111 14.8642475785987",
                    "@Id": "RU-TA"
                }, {
                    "@Items": "16.1068606265387 53.3374466250359 67.378779671797 60.8523492519056",
                    "@Id": "RU-TAM"
                }, {
                    "@Items": "18.3978558603664 50.6525101376011 68.0909456070936 9.39431568113822",
                    "@Id": "RU-TOM"
                }, {
                    "@Items": "16.7340569741717 78.0309040462742 76.6289468745836 79.6163282262237",
                    "@Id": "RU-TUL"
                }, {
                    "@Items": "59.5292946600957 26.3537660363846 80.3326543794631 1.9809257713989",
                    "@Id": "RU-TVE"
                }, {
                    "@Items": "7.38125909463561 94.7493428805607 65.1670493023317 77.4735511641361",
                    "@Id": "RU-TY"
                }, {
                    "@Items": "12.0838532746229 91.3338161964593 81.7434399769378 15.156386985982",
                    "@Id": "RU-TYU"
                }, {
                    "@Items": "41.9692987305901 50.4551819760609 1.13438032620325 74.2250120147248",
                    "@Id": "RU-UD"
                }, {
                    "@Items": "12.9433450349343 70.8441289937329 52.1592448708412 37.0151464999724",
                    "@Id": "RU-ULY"
                }, {
                    "@Items": "52.3357860987707 72.0597076099644 51.3053350855156 19.2446008414238",
                    "@Id": "RU-VGG"
                }, {
                    "@Items": "61.1242922307571 77.2680578181837 12.7131273563547 15.7979917786075",
                    "@Id": "RU-VLA"
                }, {
                    "@Items": "34.3806808508843 75.4117257778587 77.1974919257674 67.0140848807125",
                    "@Id": "RU-VLG"
                }, {
                    "@Items": "51.992344507944 56.3809820713387 75.1662349212757 24.822245736058",
                    "@Id": "RU-VOR"
                }, {
                    "@Items": "71.511154841404 40.2720759344623 21.8570979413842 30.0855214381989",
                    "@Id": "RU-YAN"
                }, {
                    "@Items": "53.9177318820347 9.07814903607506 2.78039430397581 24.7730444300794",
                    "@Id": "RU-YAR"
                }, {
                    "@Items": "71.5940066480981 52.2223926858149 18.8830505213156 67.9426738843055",
                    "@Id": "RU-YEV"
                }, {
                    "@Items": "49.5181298113978 93.8659335923688 96.4509706462039 45.8899279804388",
                    "@Id": "RU-ZAB"
                }]
            }]
        },
        "RegionsNames": {
            "RegionName": [{
                "@Name": "Adygea",
                "@Id": "RU-AD"
            }, {
                "@Name": "Altai",
                "@Id": "RU-AL"
            }, {
                "@Name": "Altai",
                "@Id": "RU-ALT"
            }, {
                "@Name": "Amur",
                "@Id": "RU-AMU"
            }, {
                "@Name": "Arkhangelsk",
                "@Id": "RU-ARK"
            }, {
                "@Name": "Astrakhan",
                "@Id": "RU-AST"
            }, {
                "@Name": "Bashkortostan",
                "@Id": "RU-BA"
            }, {
                "@Name": "Belgorod",
                "@Id": "RU-BEL"
            }, {
                "@Name": "Bryansk",
                "@Id": "RU-BRY"
            }, {
                "@Name": "Buryatia",
                "@Id": "RU-BU"
            }, {
                "@Name": "Chechen",
                "@Id": "RU-CE"
            }, {
                "@Name": "Chelyabinsk",
                "@Id": "RU-CHE"
            }, {
                "@Name": "Chukotka",
                "@Id": "RU-CHU"
            }, {
                "@Name": "Chuvashia",
                "@Id": "RU-CU"
            }, {
                "@Name": "Dagestan",
                "@Id": "RU-DA"
            }, {
                "@Name": "Ingushetia",
                "@Id": "RU-IN"
            }, {
                "@Name": "Irkutsk",
                "@Id": "RU-IRK"
            }, {
                "@Name": "Ivanovo",
                "@Id": "RU-IVA"
            }, {
                "@Name": "Kamchatka",
                "@Id": "RU-KAM"
            }, {
                "@Name": "Kabardino",
                "@Id": "RU-KB"
            }, {
                "@Name": "Karachay",
                "@Id": "RU-KC"
            }, {
                "@Name": "Krasnodar",
                "@Id": "RU-KDA"
            }, {
                "@Name": "Kemerovo",
                "@Id": "RU-KEM"
            }, {
                "@Name": "Kaliningrad",
                "@Id": "RU-KGD"
            }, {
                "@Name": "Kurgan",
                "@Id": "RU-KGN"
            }, {
                "@Name": "Khabarovsk",
                "@Id": "RU-KHA"
            }, {
                "@Name": "Khanty",
                "@Id": "RU-KHM"
            }, {
                "@Name": "Kirov",
                "@Id": "RU-KIR"
            }, {
                "@Name": "Khakassia",
                "@Id": "RU-KK"
            }, {
                "@Name": "Kalmykia",
                "@Id": "RU-KL"
            }, {
                "@Name": "Калужская область",
                "@Id": "RU-KLU"
            }, {
                "@Name": "Коми",
                "@Id": "RU-KO"
            }, {
                "@Name": "Костромская область",
                "@Id": "RU-KOS"
            }, {
                "@Name": "Карелия",
                "@Id": "RU-KR"
            }, {
                "@Name": "Курская область",
                "@Id": "RU-KRS"
            }, {
                "@Name": "Красноярский край",
                "@Id": "RU-KYA"
            }, {
                "@Name": "Ленинградская область",
                "@Id": "RU-LEN"
            }, {
                "@Name": "Липецкая область",
                "@Id": "RU-LIP"
            }, {
                "@Name": "Магаданская область",
                "@Id": "RU-MAG"
            }, {
                "@Name": "Марий Эл",
                "@Id": "RU-ME"
            }, {
                "@Name": "Мордовия",
                "@Id": "RU-MO"
            }, {
                "@Name": "Москва",
                "@Id": "RU-MOS"
            }, {
                "@Name": "Moscow",
                "@Id": "RU-MOW"
            }, {
                "@Name": "Murmansk",
                "@Id": "RU-MUR"
            }, {
                "@Name": "Nenetskiy",
                "@Id": "RU-NEN"
            }, {
                "@Name": "Novgorod",
                "@Id": "RU-NGR"
            }, {
                "@Name": "Nizhny",
                "@Id": "RU-NIZ"
            }, {
                "@Name": "Novosibirsk",
                "@Id": "RU-NVS"
            }, {
                "@Name": "Omsk",
                "@Id": "RU-OMS"
            }, {
                "@Name": "Orenburg",
                "@Id": "RU-ORE"
            }, {
                "@Name": "Oryol",
                "@Id": "RU-ORL"
            }, {
                "@Name": "Perm",
                "@Id": "RU-PER"
            }, {
                "@Name": "Penza",
                "@Id": "RU-PNZ"
            }, {
                "@Name": "Primorski",
                "@Id": "RU-PRI"
            }, {
                "@Name": "Pskov",
                "@Id": "RU-PSK"
            }, {
                "@Name": "Rostov",
                "@Id": "RU-ROS"
            }, {
                "@Name": "Ryazan",
                "@Id": "RU-RYA"
            }, {
                "@Name": "Саха",
                "@Id": "RU-SA"
            }, {
                "@Name": "Sakhalin",
                "@Id": "RU-SAK"
            }, {
                "@Name": "Самара",
                "@Id": "RU-SAM"
            }, {
                "@Name": "Саратов",
                "@Id": "RU-SAR"
            }, {
                "@Name": "North",
                "@Id": "RU-SE"
            }, {
                "@Name": "Smolensk",
                "@Id": "RU-SMO"
            }, {
                "@Name": "Saint",
                "@Id": "RU-SPE"
            }, {
                "@Name": "Stavropol",
                "@Id": "RU-STA"
            }, {
                "@Name": "Sverdlovsk",
                "@Id": "RU-SVE"
            }, {
                "@Name": "Tatarstan",
                "@Id": "RU-TA"
            }, {
                "@Name": "Tambov",
                "@Id": "RU-TAM"
            }, {
                "@Name": "Томск",
                "@Id": "RU-TOM"
            }, {
                "@Name": "Tula",
                "@Id": "RU-TUL"
            }, {
                "@Name": "Tver",
                "@Id": "RU-TVE"
            }, {
                "@Name": "Tuva",
                "@Id": "RU-TY"
            }, {
                "@Name": "Tyumens",
                "@Id": "RU-TYU"
            }, {
                "@Name": "Udmurtia",
                "@Id": "RU-UD"
            }, {
                "@Name": "Ulyanovsk",
                "@Id": "RU-ULY"
            }, {
                "@Name": "Volgograd",
                "@Id": "RU-VGG"
            }, {
                "@Name": "Vladimir",
                "@Id": "RU-VLA"
            }, {
                "@Name": "Vologda",
                "@Id": "RU-VLG"
            }, {
                "@Name": "Voronezh",
                "@Id": "RU-VOR"
            }, {
                "@Name": "Yamalo",
                "@Id": "RU-YAN"
            }, {
                "@Name": "Ярославль",
                "@Id": "RU-YAR"
            }, {
                "@Name": "Yevreyskaya",
                "@Id": "RU-YEV"
            }, {
                "@Name": "Zabaykalsky",
                "@Id": "RU-ZAB"
            }]
        }
    }
}