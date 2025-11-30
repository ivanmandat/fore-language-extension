# JSON структура BubbleChart

JSON структура BubbleChart
-


# JSON объект компонента BubbleChart


JSON структура представляет собой упорядоченный набор значений. С большинством
 свойств и настроек компонента [BubbleChart](BubbleChart.htm)
 доступна работа через JSON-объект, например при создании нового компонента.


Далее представлена JSON-структура только что созданной пузырьковой диаграммы:


{


  "@[NoDataVisualType](../../Classes/BubbleChart/BubbleChart/BubbleChart.NoDataVisualType.htm)":
 "X, Y",


  "@UseSelectOnRightClick":
 "true",  // Определяет возможность
 выделения элементов по щелчку правой кнопки мыши


  "@[ShowBubbleHistory](../../Classes/BubbleChart/BubbleChart/BubbleChart.ShowBubbleHistory.htm)":
 "false",


  "@ShowHistoryPreviousStepsOnly":
 "false",  // Отображает только
 предыдущие элементы в режиме отображения истории


  "@[ShowBubbleHistoryLabels](../../Classes/BubbleChart/BubbleChart/BubbleChart.ShowBubbleHistoryLabels.htm)":
 "false",


  "@[HistoryBubbleStyle](../../Classes/BubbleChart/BubbleChart/BubbleChart.HistoryBubbleStyle.htm)":
 {},


  "@[UseBubbleColorForHistoryLines](../../Classes/BubbleChart/BubbleChart/BubbleChart.UseBubbleColorForHistoryLines.htm)":
 "false",


  "@[UseBubbleFillForTooltip](../../Classes/BubbleChart/BubbleChart/BubbleChart.UseBubbleFillForTooltip.htm)":
 "true",


  "@[ShowBubblesWithNoData](../../Classes/BubbleChart/BubbleChart/BubbleChart.ShowBubblesWithNoData.htm)":
 "false",


  "@AnimationDuration":
 "1500.00000",  // Определяет
 длительность анимации диаграммы в миллисекундах


  "@[ShowHistoryMode](../../Classes/BubbleChart/BubbleChart/BubbleChart.ShowHistoryMode.htm)":
 "None",


  "@[OffsetX](../../Classes/BubbleChart/BubbleChart/BubbleChart.OffsetX.htm)":
 "70",


  "@[OffsetY](../../Classes/BubbleChart/BubbleChart/BubbleChart.OffsetY.htm)":
 "70",


  "@CrosshairMode": false,
  // Отображение прицела на пузырьках


  "@UseZoomOnWheel": false,
  // Возможность задавать масштабирование
 колесом мыши


  "@UseBubbleFillForCrosshair":
 false,  // Определяет применение цвета
 пузырька к его прицелу


  "[BubbleStyle](../../Classes/BubbleChart/BubbleChart/BubbleChart.BubbleStyle.htm)":
 {},


  "[Palette](../../Classes/BubbleChart/BubbleChart/BubbleChart.Palette.htm)":
 {[...](javascript:TextPopup(this))

   "BackgroundArray": {  //
 Содержит массив цветов для заливки фона визуализатора

      "@Colors": "#FF82BAB6
 #FFB1CA40"

    }

  },


  "TooltipStyle": "",
  // Определяет стиль всплывающих подсказок


  "@TooltipDelay": "500",
  // Определяет задержку всплывающих
 подсказок


  "[ChartArea](../../Classes/BubbleChart/BubbleChart/BubbleChart.ChartArea.htm)":
 {


    "[Background](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.Background.htm)":
 {[...](javascript:TextPopup(this))

     "@Angle": "-1.57080",

      "@Opacity": "1.00000",

      "@PPType": "PP.LinearGradientBrush",

      "GradientStops": {

        "GradientStop":
 [

          {

            "@Color":
 "#FFDCDCDC",

            "@Offset":
 "0.00000"

          },

          {

            "@Color":
 "#F5F5F5",

            "@Offset":
 "1.00000"

          }

        ]

      }

    },


    "[Header](../../Classes/BubbleChart/ChartArea/ChartArea.Header.htm)":
 {[...](javascript:TextPopup(this))

     "@NoDataText": "",

      "@TextWrapping": "Wrap",

      "@Margin": "0.00000
 0.00000 0.00000 0.00000",

      "@Padding": "0.00000
 0.00000 0.00000 0.00000",

      "@Alignment": "Left",

      "@IsVisible": "true",

      "Style": {

        "Release": {

          "Font":
 {

            "@Size":
 "13.33300",

            "@IsBold":
 "false",

            "@Color":
 "#FF918F8D",

            "@FontFamily":
 "Tahoma",

            "@IsItalic":
 "false",

            "@IsUnderline":
 "false"

          },

          "Border":
 {

            "@Color":
 "#00FFFFFF",

            "@Width":
 "0.00000",

            "@Radius":
 "0.00000",

            "@Style":
 "solid"

          }

        }

      },

      "MaskText": {

        "@IsAuto": "true"

      },

      "NoDataText": {

        "@IsAuto": "true"

      },

      "Text": {

        "@IsAuto": "true"

      }

    },


    "[Axes](../../Classes/BubbleChart/ChartArea/ChartArea.Axes.htm)":
 {[...](javascript:TextPopup(this))

     "X": {[...](javascript:TextPopup(this))

       "@Thickness": "0.00000",

        "@AxisCrossValue":
 "0.00000",

        "@AutoMin": "true",

        "@AutoMax": "true",

        "@Type": "X",

        "@Stroke": "#FF000000",

        "@IsVisible":
 "true",

        "Markers": {

          "@IntervalsCount":
 "5",

          "@IsVisible":
 "false"

        },

        "Caption": {

          "@NoDataText":
 "",

          "@TextWrapping":
 "Wrap",

          "@Margin":
 "0.00000 0.00000 0.00000 0.00000",

          "@Padding":
 "0.00000 0.00000 0.00000 0.00000",

          "@Alignment":
 "Left",

          "@IsVisible":
 "true",

          "Style":
 {

            "Release":
 {

              "Font":
 {

                "@Size":
 "13.33300",

                "@IsBold":
 "false",

                "@Color":
 "#FF918F8D",

                "@FontFamily":
 "Tahoma",

                "@IsItalic":
 "false",

                "@IsUnderline":
 "false"

              },

              "Border":
 {

                "@Color":
 "#00FFFFFF",

                "@Width":
 "0.00000",

                "@Radius":
 "0.00000",

                "@Style":
 "solid"

              }

            }

          },

          "MaskText":
 {

            "@IsAuto":
 "true"

          },

          "NoDataText":
 {

            "@IsAuto":
 "true"

          },

          "Text":
 {

            "@IsAuto":
 "true"

          }

        },

        "Labels": {

          "@NoDataText":
 "",

          "@TextWrapping":
 "NoWrap",

          "@Margin":
 "0.00000 0.00000 0.00000 0.00000",

          "@Alignment":
 "Left",

          "@IntervalsCount":
 "5",

          "@Padding":
 "0.00000 0.00000 0.00000 0.00000",

          "@IsVisible":
 "true",

          "Style":
 {

            "Release":
 {

              "Font":
 {

                "@Size":
 "10.66700",

                "@IsBold":
 "false",

                "@Color":
 "#FF918F8D",

                "@FontFamily":
 "Tahoma",

                "@IsItalic":
 "false",

                "@IsUnderline":
 "false"

              },

              "Border":
 {

                "@Color":
 "#00FFFFFF",

                "@Width":
 "0.00000",

                "@Radius":
 "0.00000",

                "@Style":
 "solid"

              }

            }

          },

          "MaskText":
 {

            "@IsAuto":
 "true"

          },

          "NoDataText":
 {

            "@IsAuto":
 "true"

          }

        }

      },

     "Y": {[...](javascript:TextPopup(this))

        "@Thickness":
 "0.00000",

        "@AxisCrossValue":
 "0.00000",

        "@AutoMin": "true",

        "@AutoMax": "true",

        "@Type": "Y",

        "@Stroke": "#FF000000",

        "@IsVisible":
 "true",

        "Markers": {

          "@IntervalsCount":
 "5",

          "@IsVisible":
 "false"

        },

        "Caption": {

          "@NoDataText":
 "",

          "@TextWrapping":
 "Wrap",

          "@Margin":
 "0.00000 0.00000 0.00000 0.00000",

          "@Padding":
 "0.00000 0.00000 0.00000 0.00000",

          "@Alignment":
 "Left",

          "@IsVisible":
 "true",

          "Style":
 {

            "Release":
 {

              "Font":
 {

                "@Size":
 "13.33300",

                "@IsBold":
 "false",

                "@Color":
 "#FF918F8D",

                "@FontFamily":
 "Tahoma",

                "@IsItalic":
 "false",

                "@IsUnderline":
 "false"

              },

              "Border":
 {

                "@Color":
 "#00FFFFFF",

                "@Width":
 "0.00000",

                "@Radius":
 "0.00000",

                "@Style":
 "solid"

              }

            }

          },

          "MaskText":
 {

            "@IsAuto":
 "true"

          },

          "NoDataText":
 {

            "@IsAuto":
 "true"

          },

          "Text":
 {

            "@IsAuto":
 "true"

          }

        },

        "Labels": {

          "@NoDataText":
 "",

          "@TextWrapping":
 "NoWrap",

          "@Margin":
 "0.00000 0.00000 0.00000 0.00000",

          "@Alignment":
 "Left",

          "@IntervalsCount":
 "5",

          "@Padding":
 "0.00000 0.00000 0.00000 0.00000",

          "@IsVisible":
 "true",

          "Style":
 {

            "Release":
 {

              "Font":
 {

                "@Size":
 "10.66700",

                "@IsBold":
 "false",

                "@Color":
 "#FF918F8D",

                "@FontFamily":
 "Tahoma",

                "@IsItalic":
 "false",

                "@IsUnderline":
 "false"

              },

              "Border":
 {

                "@Color":
 "#00FFFFFF",

                "@Width":
 "0.00000",

                "@Radius":
 "0.00000",

                "@Style":
 "solid"

              }

            }

          },

          "MaskText":
 {

            "@IsAuto":
 "true"

          },

          "NoDataText":
 {

            "@IsAuto":
 "true"

          }

        }

     },

    },


    "[Grid](../../Classes/BubbleChart/ChartArea/ChartArea.Grid.htm)":
 {[...](javascript:TextPopup(this))

     "@Left": "true",

      "@Top": "true",

      "@Bottom": "true",

      "@Right": "true",

      "@BorderBrush": "#FFE0E0E0",

      "@BorderThickness": "4.00000",

      "Verticals": {

        "@Thickness":
 "2.00000",

        "@Stroke": "#FFFFFFFF",

        "@IntervalsCount":
 "5",

        "@IsVisible":
 "true",

        "@LineType":
 "solid",

        "SubLines": {

          "@Thickness":
 "1.00000",

          "@Stroke":
 "#FFFAFAFA",

          "@IntervalsCount":
 "5",

          "@IsVisible":
 "true",

          "@LineType":
 "solid"

        }

      },

      "Horizontals": {

        "@Thickness":
 "2.00000",

        "@Stroke": "#FFFFFFFF",

        "@IntervalsCount":
 "5",

        "@IsVisible":
 "true",

        "@LineType":
 "solid",

        "SubLines": {

          "@Thickness":
 "1.00000",

          "@Stroke":
 "#FAFAFAFA",

          "@IntervalsCount":
 "5",

          "@IsVisible":
 "true",

          "@LineType":
 "solid"

        }

      }

    },


  },


  "[XVisual](../../Classes/BubbleChart/BubbleChart/BubbleChart.XVisual.htm)":
 {


    "CoordinateMapping":
 {[...](javascript:TextPopup(this))

     "@DataSource": "DataSource7",

      "@DimAttributeId": "X",

      "@Id": "DSMapping26",

      "@DataTransformer": "DataTransformer1",

      "@Type": "Transformer",

      "@Index": "0",

      "@Format": "#,##0.00"

    },  //
 Определяет настройки сопоставления данных, аналогично [PP.DataMapping](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.htm)


  },


  "[YVisual](../../Classes/BubbleChart/BubbleChart/BubbleChart.YVisual.htm)":
 {


    "CoordinateMapping":
 {[...](javascript:TextPopup(this))

     "@DataSource": "DataSource7",

      "@DimAttributeId": "Y",

      "@Id": "DSMapping27",

      "@DataTransformer": "DataTransformer2",

      "@Type": "Transformer",

      "@Index": "0",

      "@Format": "#,##0.00"

    },  //
 Определяет настройки сопоставления данных, аналогично [PP.DataMapping](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.htm)


  },


  "[Timeline](dhtmlGraphicBase.chm::/Classes/Timeline/Timeline.htm)":
 {[...](javascript:TextPopup(this))

   "@[Inverse](dhtmlGraphicBase.chm::/Classes/Timeline/Timeline.Inverse.htm)":
 "false",

    "@[ReturnToInitialState](dhtmlGraphicBase.chm::/Classes/Timeline/Timeline.ReturnToInitialState.htm)":
 "false",

    "@Margin": "0.00000 0.00000 0.00000
 0.00000",

    "@[CurrentStep](dhtmlGraphicBase.chm::/Classes/Timeline/Timeline.CurrentStep.htm)":
 "0",

    "@[StepDuration](dhtmlGraphicBase.chm::/Classes/Timeline/Timeline.StepDuration.htm)":
 "1000.00000",

    "@IsOverlap": "false",  // Определяет, уменьшает ли временная шкала
 рабочую область

    "@[DelayDuration](dhtmlGraphicBase.chm::/Classes/Timeline/Timeline.DelayDuration.htm)":
 "500.00000",

    "@Padding": "0.00000 0.00000 0.00000
 0.00000",

    "@[HorizontalAlignment](dhtmlCommon.chm::/Enums/PP.HorizontalAlignment.htm)":
 "Center",

    "@[VerticalAlignment](dhtmlCommon.chm::/Enums/PP.VerticalAlignment.htm)":
 "Bottom",

    "@[IsVisible](dhtmlUi.chm::/Classes/Control/Control.IsVisible.htm)":
 "true",

    "@LastIndexAsInitial": "true",

    "[Style](dhtmlCommon.chm::/Classes/PP/Style/Style.htm)":
 {[...](javascript:TextPopup(this))

      "Release": {

        "Border": {

          "@Color":
 "#00FFFFFF",

          "@Width":
 "0.00000",

          "@Radius":
 "0.00000",

          "@Style":
 "solid"

        }

      }

    },

    "[StepsNames](dhtmlGraphicBase.chm::/Classes/Timeline/Timeline.StepsNames.htm)":
 {

      "StepName": ""

    }

  },


  "[Legends](../../Classes/BubbleChart/BubbleChart/BubbleChart.getLegend.htm)":
 {


    "[Legend0](dhtmlGraphicBase.chm::/Classes/IntervalsLegend/IntervalsLegend.htm)":
 {[...](javascript:TextPopup(this))

     "@ItemsOrder": "LeftToRight",

      "@NoDataVisible": "true",

      "@Visibility": "Visible",

      "@Format": "",

      "@HorizontalAlignment": "Center",

      "@HoverMode": "MouseOver",

      "@TextSpacing": "2.00000",

      "@IsOuter": "false",

      "@DoHighlight": "false",

      "@NoDataPosition": "After",

      "@Id": "Legend0",

      "@TextHorizontalAlignment":
 "Left",

      "@IncludeEquals": "true",

      "@Margin": "0.00000
 0.00000 0.00000 0.00000",

      "@Type": "Intervals",

      "@Marker": "Circle",

      "@AutoColumnsCount": "true",

      "@ColorApplying": "Marker",

      "@CellSpacing": "0.00000
 0.00000",

      "@Mode": "LessGreater",

      "@IsOverlap": "false",

      "@ColumnCount": "0",

      "@Padding": "0.00000
 0.00000 0.00000 0.00000",

      "@VerticalAlignment": "Bottom",

      "@ContentAlignment": "Center",

      "Style": {

        "Release": {

          "Font":
 {

            "@Size":
 "10.66700",

            "@IsBold":
 "false",

            "@Color":
 "#FF918F8D",

            "@FontFamily":
 "Tahoma",

            "@IsItalic":
 "false",

            "@IsUnderline":
 "false"

          },

          "Background":
 {

            "@Color":
 "#FFFFFF",

            "@Opacity":
 "1.00000",

            "@PPType":
 "PP.SolidColorBrush"

          },

          "Border":
 {

            "@Color":
 "#FFD3D6D9",

            "@Width":
 "0.00000",

            "@Radius":
 "8.00000",

            "@Style":
 "solid"

          }

        }

      },

      "EqualFormat": {

        "@IsAuto": "true"

      },

      "GreaterFormat": {

        "@IsAuto": "true"

      },

      "LessFormat": {

        "@IsAuto": "true"

      },

      "BetweenFormat": {

        "@IsAuto": "true"

      },

      "NoDataText": {

        "@IsAuto": "true"

      },

      "Header": {

        "@NoDataText":
 "",

        "@TextWrapping":
 "NoWrap",

        "@Margin": "0.00000
 0.00000 0.00000 0.00000",

        "@Padding": "0.00000
 0.00000 0.00000 0.00000",

        "@Alignment":
 "Left",

        "@IsVisible":
 "true",

        "Style": "",

        "MaskText": {

          "@IsAuto":
 "true"

        },

        "NoDataText":
 {

          "@IsAuto":
 "true"

        },

        "Text": {

          "@IsAuto":
 "false",

          "@Value":
 ""

        }

      }

    },


  },


  "[Style](dhtmlCommon.chm::/Classes/PP/Style/Style.htm)":
 {[...](javascript:TextPopup(this))

   "Release": {

      "[Background](dhtmlCommon.chm::/Classes/PP/Style/Style.Background.htm)":
 {

        "@Color": "#FFFFFF",

        "@Opacity": "1.00000",

        "@PPType": "PP.SolidColorBrush"

      }

    }

  },


  "HoverInactiveEffects":
 {[...](javascript:TextPopup(this))

   "Effect": {

      "@[Opacity](dhtmlCommon.chm::/Classes/PP/Brush/Brush.Opacity.htm)":
 "0.50000",

      "@PPType": "PP.Ui.OpacityEffect"

    }

  },  //
 Определяет эффекты применяемые к элементам, на которые не наведен
 курсор мыши


  "SelectInactiveEffects":
 {[...](javascript:TextPopup(this))

   "Effect": {

      "@[Opacity](dhtmlCommon.chm::/Classes/PP/Brush/Brush.Opacity.htm)":
 "0.10000",

      "@PPType": "PP.Ui.OpacityEffect"

    }

  },  //
 Определяет эффекты применяемые к невыделенным элементам


  "CustomData": "",


  "[DataSources](../../Classes/BubbleChart/BubbleChart/BubbleChart.DataSource.htm)":
 {},


  "[Series](../../Classes/BubbleChart/BubbleChart/BubbleChart.Series.htm)":
 [],


  "Transformers": {[...](javascript:TextPopup(this))

   "DataTransformer1": {

      "@UseAbsoluteValues": "false",

      "@Id": "DataTransformer1",

      "@MinResultCut": "-1.00000",

      "@PPType": "PP.CoordinateTransformer",

      "@Type": "Linear",

      "@MinResult": "0.00000",

      "@UseSignDivision": "false",

      "@IncludeZero": "false",

      "@MaxResult": "1.00000",

      "@NoDataResult": "0.15000"

    },

    "DataTransformer2": {

      "@UseAbsoluteValues": "false",

      "@Id": "DataTransformer2",

      "@MinResultCut": "-1.00000",

      "@PPType": "PP.CoordinateTransformer",

      "@Type": "Linear",

      "@MinResult": "0.00000",

      "@UseSignDivision": "false",

      "@IncludeZero": "false",

      "@MaxResult": "1.00000",

      "@NoDataResult": "0.15000"

    }

  },  //
 Настройки [преобразований для данных](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.DataTransformer.htm)


  "SettingsProvider":
 {[...](javascript:TextPopup(this))

   "ToolTipStyle": {  //
 Определяет текст всплывающих подсказок

      "@NoDataText": "нет
 данных",

      "@ToolTipText": "{%Name},
 {%TimelineStep}\r\nX, Y: {%XValue} - {%XTitle}"

    },

    "AxisXCaptionStyle": {  //
 Определяет текст оси Х

      "@Text": "Private capital
 flows, total (% of GDP)"

    },

    "AxisYCaptionStyle": {  //
 Определяет текст оси Y

      "@Text": "Private capital
 flows, total (% of GDP)"

    },

    "IntervalsLegendStyle": {  // Определяет стиль легенды значений

      "@[BetweenFormat](dhtmlUi.chm::/Classes/ColorLegendBase/ColorLegendBase.BetweenFormat.htm)":
 "от {0} до {1}",

      "@[GreaterFormat](dhtmlUi.chm::/Classes/ColorLegendBase/ColorLegendBase.GreaterFormat.htm)":
 "более {0}",

      "@[NoDataText](dhtmlUi.chm::/Classes/ColorLegendBase/ColorLegendBase.NoDataText.htm)":
 "нет данных",

      "@[LessFormat](dhtmlUi.chm::/Classes/ColorLegendBase/ColorLegendBase.LessFormat.htm)":
 "менее {0}",

      "@[EqualFormat](dhtmlUi.chm::/Classes/ColorLegendBase/ColorLegendBase.EqualFormat.htm)":
 "равно {0}"

    },

    "SizeLegendStyle": {  //
 Определяет стиль легенды размеров

      "@[MaxValueFormat](dhtmlGraphicBase.chm::/Classes/SizeLegend/SizeLegend.MaxValueFormat.htm)":
 "{0}",

      "@[MinValueFormat](dhtmlGraphicBase.chm::/Classes/SizeLegend/SizeLegend.MinValueFormat.htm)":
 "{0}"

    }

  },  //
 Поставщик настроек отображения


}


См.
 также:


[BubbleChart](BubbleChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
