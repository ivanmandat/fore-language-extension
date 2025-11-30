# JSON структура TreeMap

JSON структура TreeMap
-


# JSON объект компонента TreeMap


JSON структура представляет собой упорядоченный набор значений. С большинством
 свойств и настроек компонента [TreeMap](TreeMap.htm) доступна
 работа через JSON-объект, например при создании нового компонента.


Далее представлена JSON-структура только что созданной плоской карты:


{


  "@[HierarchyDepth](../../Classes/TreeMap/TreeMap.HierarchyDepth.htm)":
 3,


  "@[BranchSpacing](../../Classes/TreeMap/TreeMap.BranchSpacing.htm)":
 1,


  "@[LeafBorderWidth](../../Classes/TreeMap/TreeMap.LeafBorderWidth.htm)":
 1,


  "@[LeafPadding](../../Classes/TreeMap/TreeMap.LeafPadding.htm)":
 0,


  "@[LeavesSpacing](../../Classes/TreeMap/TreeMap.LeavesSpacing.htm)":
 0,


  "@[LeavesOverflow](../../Classes/TreeMap/TreeMap.LeavesOverflow.htm)":
 "Hidden",


  "@[BranchesOverflow](../../Classes/TreeMap/TreeMap.BranchesOverflow.htm)":
 "Ellipsis",


  "@[AreHeadersVisible](../../Classes/TreeMap/TreeMap.AreHeadersVisible.htm)":
 true,


  "@[LabelAutoColor](../../Classes/TreeMap/TreeMap.LabelAutoColor.htm)":
 true,


  "@[MaxFont](../../Classes/TreeMap/TreeMap.MaxFont.htm)":
 "14",


  "@[MinFont](../../Classes/TreeMap/TreeMap.MinFont.htm)":
 "14",


  "@[HeatMap](../../Classes/TreeMap/TreeMap.HeatMap.htm)":
 false,


   "@[Circular](../../Classes/TreeMap/TreeMap.Circular.htm)":
 false,


  "[LabelsStyle](../../Classes/TreeMap/TreeMap.LabelsStyle.htm)":
 {[...](javascript:TextPopup(this))

    "[Style](dhtmlCommon.chm::/Classes/PP/Style/Style.htm)":
 {

      "Release": {

        "Id": "Style18189"

      }

    }

  },


  "[StartHeaderStyle](../../Classes/TreeMap/TreeMap.StartHeaderStyle.htm)":
 {[...](javascript:TextPopup(this))

   "[Style](dhtmlCommon.chm::/Classes/PP/Style/Style.htm)":
 {

      "Release": {

        "[Background](dhtmlCommon.chm::/Classes/PP/Style/Style.Background.htm)":
 {[...](javascript:TextPopup(this))

          "@Id":
 "SolidColorBrush18192",

          "@Opacity":
 1,

          "@Enabled":
 true,

          "@PPType":
 "PP.SolidColorBrush",

          "@Color":
 "#AAAAAA"

        },

        "[Font](dhtmlCommon.chm::/Classes/PP/Style/Style.Font.htm)":
 {[...](javascript:TextPopup(this))

          "@Id":
 "Font18191",

          "@IsItalic":
 false,

          "@FontFamily":
 "Arial",

          "@Size":
 12,

          "@IsBold":
 false,

          "@PPType":
 "Font",

          "@Color":
 "#000000"

        },

        "@Enabled": true,

        "@Id": "Style18193",

        "@PPType": "Style"

      }

    }

  },


  "[EndHeaderStyle](../../Classes/TreeMap/TreeMap.EndHeaderStyle.htm)":
 {[...](javascript:TextPopup(this))

   "[Style](dhtmlCommon.chm::/Classes/PP/Style/Style.htm)":
 {

      "Release": {

        "[Background](dhtmlCommon.chm::/Classes/PP/Style/Style.Background.htm)":
 {[...](javascript:TextPopup(this))

          "@Id":
 "SolidColorBrush18192",

          "@Opacity":
 1,

          "@Enabled":
 true,

          "@PPType":
 "PP.SolidColorBrush",

          "@Color":
 "#AAAAAA"

        },

        "[Font](dhtmlCommon.chm::/Classes/PP/Style/Style.Font.htm)":
 {[...](javascript:TextPopup(this))

          "@Id":
 "Font18191",

          "@IsItalic":
 false,

          "@FontFamily":
 "Arial",

          "@Size":
 12,

          "@IsBold":
 false,

          "@PPType":
 "Font",

          "@Color":
 "#000000"

        },

        "@Enabled": true,

        "@Id": "Style18196",

        "@PPType": "Style"

      }

    }

  },


  "[ItemsTooltipStyle](../../Classes/TreeMap/TreeMap.ItemsTooltipStyle.htm)":
 {[...](javascript:TextPopup(this))

   "[MaskText](dhtmlGraphicBase.chm::/Classes/LegendToolTip/LegendToolTip.MaskText.htm)":
 {

      "Value": "{%Name}, {%TimelineStep}",

      "IsAuto": true

    },

    "[Style](dhtmlCommon.chm::/Classes/PP/Style/Style.htm)":
 {

      "Release": {

        "[Background](dhtmlCommon.chm::/Classes/PP/Style/Style.Background.htm)":
 {[...](javascript:TextPopup(this))

          "@Opacity":
 0,

          "@PPType":
 "PP.SolidColorBrush",

          "@Color":
 "#FFFFFF"

        },

        "[Border](dhtmlCommon.chm::/Classes/PP/Style/Style.Border.htm)":
 {[...](javascript:TextPopup(this))

          "@RightBottomRadius":
 0,

          "@RightTopRadius":
 0,

          "@LeftBottomRadius":
 0,

          "@LeftTopRadius":
 0,

          "@Radius":
 0,

          "@RadiusEnabled":
 true,

          "@Enabled":
 true,

          "@Bottom":
 0,

          "@Right":
 0,

          "@Top":
 0,

          "@Left":
 0,

          "@Width":
 0,

          "@Id":
 "Border18198",

          "@PPType":
 "Border",

          "Style":
 "solid"

        },

        "[Font](dhtmlCommon.chm::/Classes/PP/Style/Style.Font.htm)":
 {[...](javascript:TextPopup(this))

          "@Id":
 "Font18200",

          "@PPType":
 "Font",

          "@FontFamily":
 "Calibri",

          "@Size":
 12,

          "@Color":
 "#000000"

        },

        "@Enabled": true,

        "@Id": "Style18197",

        "@PPType": "Style"

      }

    },

    "@PPType": "CanvasTooltip"

  },


  "@MinAreaToShowTooltip":
 0,  // Минимальный размер элемента
 для которого будут отображаться всплывающие подсказки


  "BranchItemsTooltipStyle":
 {[...](javascript:TextPopup(this))

   "[MaskText](dhtmlGraphicBase.chm::/Classes/LegendToolTip/LegendToolTip.MaskText.htm)":
 {

      "Value": "{%Name}, {%TimelineStep}\nКоличество
 детей: {%ChildsCount}",

      "IsAuto": true

    },

    "@[TextWrapping](dhtmlUi.chm::/Enums/TextWrapping.htm)":
 "Wrap",

    "[Style](dhtmlCommon.chm::/Classes/PP/Style/Style.htm)":
 {

      "Release": {

        "[Background](dhtmlCommon.chm::/Classes/PP/Style/Style.Background.htm)":
 {[...](javascript:TextPopup(this))

          "@Opacity":
 0,

          "@PPType":
 "PP.SolidColorBrush",

          "@Color":
 "#FFFFFF"

        },

        "[Border](dhtmlCommon.chm::/Classes/PP/Style/Style.Border.htm)":
 {[...](javascript:TextPopup(this))

          "@RightBottomRadius":
 0,

          "@RightTopRadius":
 0,

          "@LeftBottomRadius":
 0,

          "@LeftTopRadius":
 0,

          "@Radius":
 0,

          "@RadiusEnabled":
 true,

          "@Enabled":
 true,

          "@Bottom":
 0,

          "@Right":
 0,

          "@Top":
 0,

          "@Left":
 0,

          "@Width":
 0,

          "@Id":
 "Border18205",

          "@PPType":
 "Border",

          "Style":
 "solid"

        },

        "[Font](dhtmlCommon.chm::/Classes/PP/Style/Style.Font.htm)":
 {[...](javascript:TextPopup(this))

          "@Id":
 "Font18207",

          "@PPType":
 "Font",

          "@FontFamily":
 "Calibri",

          "@Size":
 12,

          "@Color":
 "#000000"

        },

        "@Enabled": true,

        "@Id": "Style18204",

        "@PPType": "Style"

      }

    },

    "@PPType": "CanvasTooltip"

  }, // Определяет
 стиль всплывающих подсказок ветвей плоского дерева


  "@[SizeBasedOnChildren](../../Classes/TreeMap/TreeMap.SizeBasedOnChildren.htm)":
 true,


  "@ShowBranches": true,
  // Использовать вложенность элементов


  "[DataSources](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.DataSources.htm)":
 {},


  "[Scales](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.Scales.htm)":
 {},


  "Transformers": {},
  // Настройки [преобразований
 для данных](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.DataTransformer.htm)


  "[Legends](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.Legends.htm)":
 {},


  "@[AnimationDuration](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.getAnimationDuration.htm)":
 1000,


  "@[EnableBatchData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.EnableBatchData.htm)":
 false,


  "[AreaSelection](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.AreaSelection.htm)":
 {[...](javascript:TextPopup(this))

   "@IsRTL": false,

    "Anchors": [

      "Top",

      "Left"

    ],

    "@Id": "AreaSelection18182",

    "@Width": 0,

    "@Height": 0,

    "@Type": "Simple",

    "@Enabled": true,

    "@Class": "Released",

    "@IsVisible": false,

    "@PPType": "AreaSelection"

  },


  "@[UseLegendsPacking](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.UseLegendsPacking.htm)":
 false,


  "@[LegendsPackingMaxPart](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.LegendsPackingMaxPart.htm)":
 0.5,


  "@[TabIndex](dhtmlUi.chm::/Classes/Control/Control.TabIndex.htm)":
 0,


  "@[IsRTL](dhtmlUi.chm::/Classes/Control/Control.IsRTL.htm)":
 false,


  "[Anchors](dhtmlUi.chm::/Classes/Control/Control.Anchors.htm)":
 [[...](javascript:TextPopup(this))

   "Top",

    "Left"

  ],


  "@[Id](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)":
 "TreeMap18188",


  "[HoverInactiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.HoverInactiveEffects.htm)":
 [[...](javascript:TextPopup(this))

   {

      "@Id": "OpacityEffect18159",

      "@[Opacity](dhtmlCommon.chm::/Classes/PP/Brush/Brush.Opacity.htm)":
 0.5,

      "@PPType": "OpacityEffect"

    }

  ],


  "[SelectInactiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.SelectInactiveEffects.htm)":
 [[...](javascript:TextPopup(this))

   {

      "@Id": "OpacityEffect18160",

      "@[Opacity](dhtmlCommon.chm::/Classes/PP/Brush/Brush.Opacity.htm)":
 0.25,

      "@PPType": "OpacityEffect"

    }

  ],


  "MappingInactiveEffects":
 [[...](javascript:TextPopup(this))

   {

      "@Id": "OpacityEffect18161",

      "@[Opacity](dhtmlCommon.chm::/Classes/PP/Brush/Brush.Opacity.htm)":
 0.25,

      "@PPType": "OpacityEffect"

    }

  ],  //
 Настройки эффектов для неактивных элементов


  "@AreaSelectionAction":
 "ItemsSelection",  // Действие
 при выделении области мышкой


  "SettingsProvider":
 {[...](javascript:TextPopup(this))

   "@Id": "TreeDefaultSettingsProvider18187",

    "@PPType": "TreeDefaultSettingsProvider"

  },  //
 Поставщик настроек отображения


  "@[Width](dhtmlUi.chm::/Classes/Control/Control.Width.htm)":
 0,


  "@[Height](dhtmlUi.chm::/Classes/Control/Control.Height.htm)":
 0,


  "@[Enabled](dhtmlUi.chm::/Classes/Control/Control.Enabled.htm)":
 true,


  "@[Class](dhtmlUi.chm::/Classes/Control/Control.addClass.htm)":
 "Released",


  "@PPType": "TreeMap",
  // Тип объекта


  "@Padding": "0
 0 0 0",  // Отступы внутри компонента


  "[LegendMapping](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.LegendMapping.htm)":
 {}


}


См.
 также:


[TreeMap](TreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
