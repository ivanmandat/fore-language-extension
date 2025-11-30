# Пример размещения компонентов BubbleTreeMaster и BubbleTree

Пример размещения компонентов BubbleTreeMaster и BubbleTree
-


# Пример размещения компонентов BubbleTreeMaster и BubbleTree


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. В теге HEAD добавьте ссылки на следующие css-файлы: PP.css, PP.Metabase.css,
 PP.Express.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.GraphicsBase.js,
 PP.Metabase.js, PP.BubbleTree.js, PP.TreeChartMaster.js, resources.ru.js
 и BubbleTreeData.js.


[![](../../Opened.gif)![](../../Closed.gif)Содержимое файла
 BubbleTreeData.js](javascript:TextPopup(this))


var data = {
    "BubbleStyle": PP.Ui.VisualizerItemStyle.RadialGradient,
    "SideBubbleMinSize": 10,
    "ImagePath": "build/img/",
    "Style": {
        "Release": {
            "Background": {
                "PPType": "PP.SolidColorBrush",
                "Color": "#FFFFFFFF"
            }
        }
    },
    "InnerLabelsStyle": {
        "MaskText": "",
        "TextWrapping": "NoWrap",
        "Alignment": "Top",
        "TailLength": "0",
        "Direction": "LeftToRight",
        "ShowHandCursor": "false",
        "Style": {
            "Release": {
                "Font": {
                    "IsItalic": "False",
                    "FontFamily": "Arial",
                    "Size": "12",
                    "IsBold": "true",
                    "Color": "#FF000000"
                },
                "Background": {
                    "Color": "#FFFFFF",
                    "Opacity": "0.0"
                }
            }
        }
    },
    "OuterLabelsStyle": {
        "MaskText": "{%Name}",
        "TextWrapping": "NoWrap",
        "Alignment": "Right",
        "TailLength": "10",
        "Direction": "LeftToRight",
        "ShowHandCursor": "false",
        "Padding": "5 5 5 5",
        "HoverMode": "Default",
        "Style": {
            "Release": {
                "Font": {
                    "IsItalic": "False",
                    "FontFamily": "Arial",
                    "Size": "12",
                    "IsBold": "true",
                    "Color": "#FF000000"
                },
                "Border": {
                    "Color": "#c1c1c1",
                    "Width": "1",
                    "Radius": "4"
                },
                "Background": {
                    "Color": "#FFFFFF",
                    "Opacity": "0.5"
                }
            }
        }
    },
    "OrbitsPen": {
        "Color": "#80808080",
        "Style": "Solid",
        "Width": "2"
    },
    "Model": {
        "RootItem": {
            "Id": "W",
            "Items": [{
                    "Id": "EU",
                    "Items": [{
                            "Id": "EEU",
                            "Items": [{
                                    "Id": "RUS"
                                }, {
                                    "Id": "UKR"
                                }, {
                                    "Id": "POL"
                                }, {
                                    "Id": "ROM"
                                }
                            ]
                        }, {
                            "Id": "NEU"
                        }, {
                            "Id": "SEU"
                        }, {
                            "Id": "WEU"
                        }
                    ]
                }
            ]
        }
    },
    "ItemsNames": {
        "W": "Мир",
        "EU": "Европа",
        "EEU": "Восточная Европа",
        "RUS": "Россия",
        "UKR": "Украина",
        "POL": "Польша",
        "ROM": "Румыния",
        "NEU": "Северная Европа",
        "SEU": "Южная Европа",
        "WEU": "Западная Европа"
    },
    "TextVisual": {
        "TextMapping": {
            "DataSource": "DataSource0",
            "DimAttributeId": "value",
            "Index": "0",
            "Type": "None"
        }
    },
    "ColorVisual": {
        "ColorMapping": {
            "DataSource": "DataSource0",
            "DimAttributeId": "value",
            "Type": "Scale",
            "Index": "0",
            "Scale": "Scale0"
        }
    },
    "SizeVisual": {
        "NumericMapping": {
            "DataSource": "DataSource0",
            "DimAttributeId": "value",
            "Index": "0",
            "Type": "None"
        }
    },
    "DataSources": {
        "DataSource0": {
            "Title": "BubbleTree Data",
            "AttributesNames": {
                "color": "Color Value",
                "radius": "Radius Value",
                "value": "Value"
            },
            "Series": {
                "W": {
                    "value": {
                        "Items": "100 110.0 120.0 130.0 140.0"
                    }
                },
                "EU": {
                    "value": {
                        "Items": ""
                    }
                },
                "EEU": {
                    "value": {
                        "Items": ""
                    }
                },
                "RUS": {
                    "value": {
                        "Items": "100.0 10.0 20.0 10.0 140.0"
                    }
                },
                "UKR": {
                    "value": {
                        "Items": "33.0 10.0 81.0 27.0 45.0"
                    }
                },
                "POL": {
                    "value": {
                        "Items": "22.0 10.0 30.0 33.0 34.0"
                    }
                },
                "ROM": {
                    "value": {
                        "Items": "15.0 10.0 28.0 62.0 38.0"
                    }
                },
                "NEU": {
                    "value": {
                        "Items": "53.0 10.0 40.0 35.0 34.0"
                    }
                },
                "SEU": {
                    "value": {
                        "Items": "43.0 10.0 41.0 43.0 45.0"
                    }
                },
                "WEU": {
                    "value": {
                        "Items": "41.0 10.0 41.0 42.0 46.0"
                    }
                }
            }
        }
    },
    "Timeline": {
        "Visibility": "Visible",
        "HorizontalAlignment": "Justify",
        "VerticalAlignment": "Bottom",
        "StepDuration": "500",
        "DelayDuration": "500",
        "ReturnToInitialState": "True",
        "StepsNames": ["1990", "1991", "1992", "1993", "1994"]
    },
    "Breadcrumb": {
        "Height": "24",
        "Margin": "0 0 0 0",
        "Padding": "1 1 0 1",
        "HorizontalAlignment": "Justify",
        "VerticalAlignment": "Top",
        "Style": {
            "Release": {
                "Background": {
                    "Color": "#9C9C9C"
                }
            }
        },
        "ItemStyle": {
            "Margin": "0 0 1 0",
            "Padding": "6 0 0 0",
            "HorizontalAlignment": "Left",
            "VerticalAlignment": "Middle",
            "Style": {
                "Hover": {
                    "Background": {
                        "Color": "#8F8F8F"
                    }
                },
                "Active": {
                    "Background": {
                        "Color": "#787878"
                    }
                },
                "Release": {
                    "Background": {
                        "Color": "#9C9C9C"
                    },
                    "Font": {
                        "IsItalic": "False",
                        "FontFamily": "Arial",
                        "Size": "12",
                        "IsBold": "false",
                        "Color": "#d8d8d8"
                    },
                    "Border": {
                        "Style": "solid",
                        "Color": "#BABABA",
                        "Width": "1"
                    }
                }
            }
        }
    },
    "Scales": {
        "Scale0": {
            "Id": "Scale0",
            "Values": "20.0 30.0 40.0 50.0",
            "Items": "#FFFF462C #FFEBAF36 #FFFFD900 #FFB1CA40 #FF6A8535",
            "EnableEquality": "false",
            "NoData": "#FFBFBFBF",
            "TypeArguments": "Brush"
        }
    },
    "Legends": {
        "Legend0": {
            "Type": "Intervals",
            "Scale": "Scale0",
            "BetweenFormat": "от {0:0.00} до {1:0.00}",
            "GreaterFormat": "больше {0:0.00}",
            "LessFormat": "меньше {0:0.00}",
            "EqualFormat": "ровно {0:0.00}",
            "IncludeEquals": "false",
            "NoDataText": "нет данных",
            "NoDataPosition": "After",
            "NoDataVisible": "true",
            "DoHighlight": "false",
            "HighlightBrush": "null",
            "InactiveBrush": "null",
            "CellSpacing": "null",
            "Marker": "Circle",
            "Mode": "LessGreater",
            "ColumnCount": "0",
            "TextSpacing": "10",
            "TextWrapping": "NoWrap",
            "IsOuter": "false",
            "IsOverlap": "false",
            "HorizontalAlignment": "Center",
            "VerticalAlignment": "Bottom",
            "Padding": "3 0 3 0",
            "Margin": "6 6 6 6",
            "Header": {
                "Text": "ВВП (млн. $$)",
                "Margin": "2 2 2 2",
                "Padding": "2 2 2 2",
                "Style": {
                    "Release": {
                        "Font": {
                            "IsItalic": "False",
                            "FontFamily": "Arial",
                            "Size": "12",
                            "IsBold": "False",
                            "Color": "#FF010000"
                        }
                    }
                }
            }
        }
    }
}


2. В теге SCRIPT добавьте код для создания компонентов [BubbleTreeMaster](BubbleTreeMaster.htm)
 и [BubbleTree](../BubbleTree/BubbleTree.htm):


<script language="javascript">
    // Переменная, в которой будем хранить экземпляр диаграммы
    var bubbleTree;
    // Переменная, в которой будем хранить экземпляр мастера
    var bubbleTreeMaster;
    // Укажем путь к корневой папке, содержащей файлы ресурсов
    PP.resourceManager.setRootResourcesFolder("build/resources/");
    // Установим языковые настройки для ресурсов
    PP.setCurrentCulture(PP.Cultures.ru)
    // Получим DOM-элемент контейнера, в котором будет отображено пузырьковое дерево
    var container = document.getElementById("bubbleTree");
    // Создадим новый экземпляр диаграммы
    bubbleTree = new PP.Ui.BubbleTree(data);
    // Разместим диаграмму в блоке <div>
    bubbleTree.addToNode(container);
    // Установим размеры диаграммы
    bubbleTree.setWidth(480);
    bubbleTree.setHeight(480);
    //создаем мастер диаграммы
    bubbleTreeMaster = new PP.Ui.BubbleTreeMaster({
        ParentNode: "master", //DOM-вершина, в которой будет размещаться мастер
                    Height: 500,
                    Width: 300,
                    ImagePath: "build/img/",
                    DataView: bubbleTree
    });
</script>
3. В теге BODY разместите созданные компоненты:


<table style="width: 500px; border: #CCCCCC 1px solid">
    <tr>
        <td valign="top" width="250" id="master"></td>
        <td valign="top" id="bubbleTree"></td>
    </tr>
</table>
После выполнения примера на странице будет размещено [пузырьковое
 дерево](../BubbleTree/BubbleTree.htm) и [мастер](BubbleTreeMaster.htm) для его настройки:


![](BubbleTreeMaster_BubbleTree.png)


См. также:


[BubbleTreeMaster](BubbleTreeMaster.htm)
 | [BubbleTree](../BubbleTree/BubbleTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
