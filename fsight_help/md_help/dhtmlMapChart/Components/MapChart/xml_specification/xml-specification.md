# Спецификация формата JSON для настройки карты

Спецификация формата JSON для настройки карты
-


# Спецификация формата JSON для настройки карты


Для настройки внешнего вида карты используется файл с расширением *.xml,
 данные которого были [сконвертированы](../xml_and_json.htm)
 в формат JSON.


Далее представлена JSON-структура для настройки карты:


{


    //Корневой
 элемент


    "[MapChart](MapChart/MapChart_element.htm)":
 {


        //Словарь элементов, которые используются
 для настройки карты


        "[ItemsDictionary](MapChart/ItemsDictionary/ItemsDictionary.htm)":
 {


         //Коллекции кистей:


             //Со сплошной залиской


            "[SolidColorBrush](MapChart/ItemsDictionary/Brushes/Brushes.htm#solidcolorbrush)":
 [],


            //С линейной градиентной заливкой


            "[LinearGradientBrush](MapChart/ItemsDictionary/Brushes/Brushes.htm#lineargradientbrush)":
 [],


            //С радиальной градиентной заливкой


            "[RadialGradientBrush](MapChart/ItemsDictionary/Brushes/Brushes.htm#radialgradientbrush)":
 [],


         //Коллекция шрифтов


            "[Font](MapChart/ItemsDictionary/Fonts/Fonts.htm)": [],


         //Коллекция меток


            "[MapLabel](MapChart/ItemsDictionary/MapLabels/MapLabel_element.htm)":
 [],


         //Всплывающая подсказка


            "[MapToolTip](MapChart/ItemsDictionary/MapToolTops/MapToolTip_element.htm)":
 {},


         //Коллекция шкал


            "[MapScale](MapChart/ItemsDictionary/MapScale/MapScale_element.htm)":
 [],


         //Коллекция зависимостей


            "[DataDependency](MapChart/ItemsDictionary/DataDependency/DataDependency_element.htm)":
 [],


         //Коллекции эффектов:


            //Эффект изменения цвета заливки


            "[BrushEffect](MapChart/ItemsDictionary/Effects/Effects.htm#brusheffect)":
 [],


            //Эффект рассеивания


            "[BlurEffect](MapChart/ItemsDictionary/Effects/Effects.htm#blureffect)":
 [],


            //Эффект изменения размера


            "[ScaleEffect](MapChart/ItemsDictionary/Effects/Effects.htm#scaleeffect)":
 [],


            //Эффект изменения цвета границ


            "[BorderEffect](MapChart/ItemsDictionary/Effects/Effects.htm#bordereffect)":
 []


         },


         //Коллекция слоев карты


        "[MapLayers](MapChart/MapLayers/MapLayers_element.htm)":
 {


         //Слой карты


            "[MapLayer](MapChart/MapLayers/MapLayers_element.htm#maplayer)":
 [


                 {


                  //Коллекция показателей карты:


                   "MapLayer.[Visuals](MapChart/MapLayers/MapLayer/Visuals/Visuals_element.htm)":
 {


                        //показатель заливки


                        "[MapAreaVisual](MapChart/MapLayers/MapLayer/Visuals/MapAreaVisual_element.htm)":
 {},


                        //столбиковый показатель


                        "[MapBarVisual](MapChart/MapLayers/MapLayer/Visuals/MapBarVisual_element.htm)":
 {},


                        //Круговой показатель


                        "[MapPieVisual](MapChart/MapLayers/MapLayer/Visuals/MapPieVisual_element.htm)":
 {}


                   },


                    //Коллекция значков


                    "MapLayer.[Milestones](MapChart/MapLayers/MapLayer/Milestones/Milestones_element.htm)":
 {


                        //значок-изображение


                        "[MapImageMilestone](MapChart/MapLayers/MapLayer/Milestones/MapImageMilestone_element.htm)":
 {},


                        //значок-многоугольник


                        "[MapPolygonMilestone](MapChart/MapLayers/MapLayer/Milestones/MapPolygonMilestone_element.htm)":
 {}


                     }


                }


            ]


        },


       //Коллекция областей карты


        "[MapShapes](MapChart/MapShapes/MapShapes_element.htm)":
 {


                //Область карты


                "[MapShape](MapChart/MapShapes/MapShapes_element.htm#mapshape)":
 {}


        },


       //Коллекция стрелок


        "[MapArrows](MapChart/MapArrows/MapArrows_element.htm)":
 {


            //Простая стрелка


            "[MapSimpleArrow](MapChart/MapArrows/MapSimpleArrow_element.htm)":
 {},


            //Стрелка с заливкой


            "[MapFilledArrow](MapChart/MapArrows/MapFilledArrow_element.htm)":
 {},


            //Фигурная стрелка


            "[MapFiguredArrow](MapChart/MapArrows/MapFiguredArrow_element.htm)":
 {}


        },


       //Коллекция легенд


        "[MapLegends](MapChart/MapLegends/MapLegends_element.htm)":
 {


          //Легенда карты


            "[MapLegend](MapChart/MapLegends/MapLegends_element.htm#maplegend)":
 {}


        },


        //Расшифровка территорий


        "[MapTerritoryTranscript](MapChart/MapTerritoryTranscript/MapTerritoryTranscript_element.htm)":
 {},


        // Сетка карты


        "[MapGrid](MapChart/MapGrid/MapGrid_Element.htm)": {},


        //Временная линия


        "[MapTimeline](MapChart/MapTimeline/MapTimeline_element.htm)":
 {},


        //Коллекция источников данных


        "[DataSources](MapChart/DataSources/DataSources_element.htm)":
 {


           //Источник данных


            "[DataSource](MapChart/DataSources/DataSources_element.htm#datasource)":
 {


                //Измерение


                "[Dimension](MapChart/DataSources/DataSources_element.htm#dimension)":
 []


            }


        },


       //Коллекция имен областей карты


        "[RegionsNames](MapChart/RegionsNames/RegionsNames_element.htm)":
 {


           //Имя области карты


            "[RegionName](MapChart/RegionsNames/RegionsNames_element.htm#regionname)":
 []


        }


    }


}


См. также:


[Создание
 DHTML-карты](../MapChart_creation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
