# GetMap: Операция

GetMap: Операция
-


**


# GetMap


## Синтаксис


GetMapResult GetMap(MapId tMap, GetMapArg tArg)


## Параметры


tMap. Моникёр карты.


tArg. Параметры извлечения
 метаданных.


## Описание


Операция GetMap извлекает метаданные
 карты.


## Комментарии


Для выполнения операции необходимо в параметре tMap
 указать моникёр карты, а в параметре tArg
 указать параметры извлечения метаданных. Моникёр может быть сформирован
 на основании моникера открытого экземпляра объекта, с картой которого
 осуществляется работа, по следующим правилам:


	- «Моникёр экземпляра экспресс-отчета»!Map.
	 Карта экспресс-отчета (если в экспресс-отчете один лист).


	- «Моникёр экземпляра экспресс-отчета»!Sheets!«Ключ
	 листа»!Map. Карта заданного листа экспресс-отчета (если в экспресс-отчете
	 несколько листов).


	- «Моникёр экземпляра рабочей
	 книги»!Map. Карта рабочей книги (если в рабочей книге один
	 лист).


	- «Моникёр экземпляра рабочей
	 книги»!Sheets!«Ключ листа»!Map. Карта заданного листа рабочей
	 книги (если в рабочей книги несколько листов).


	- «Моникёр экземпляра регламентного
	 отчета»!«Ключ листа»!Objects!«Идентификатор карты». Карта,
	 расположенная на листе регламентного отчета.


В поле tArg.pattern необходимо
 указать шаблон, в соответствии с которым будут извлекаться метаданные.
 Результатом работы операции будет запрошенная информация.


## Пример


Ниже приведен пример использования операции GetMap
 для получения визуальных настроек карты экспресс-отчёта. В запросе передается
 моникёр карты и шаблон для извлечения настроек. В ответе приходят запрошенные
 данные.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


		[![](../../minus.gif)](../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../minus.gif)](../../#) <s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[![](../../minus.gif)](../../#) <GetMap xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[![](../../minus.gif)](../../#) <tMap
								 xmlns="** **">


										  <id>S1!M!S!E2!Map</id>


									  </tMap>


								[![](../../minus.gif)](../../#) <tArg
								 xmlns="** **">


										[![](../../minus.gif)](../../#)
										 <pattern>


												  <All>false</All>


												  <DataSource>false</DataSource>


												  <Visual>true</Visual>


											  </pattern>


									  </tArg>


							  </GetMap>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../minus.gif)](../../#) <soapenv:Body>


						[![](../../minus.gif)](../../#) <GetMapResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


								[![](../../minus.gif)](../../#) <id xmlns="** **">


										  <id>S1!M!S!E2!Map</id>


									  </id>


								[![](../../minus.gif)](../../#) <meta
								 xmlns="** **">


										[![](../../minus.gif)](../../#)
										 <md>


												[![](../../minus.gif)](../../#) <MapChart Type="**SVG**" Mode="**Drawing2D**" Background="**#FFFFFFFF**" Topobase="**{Topobase}**">


														[![](../../minus.gif)](../../#)
														 <ItemsDictionary>


																  <Font
																 Id="**LegendFontHeader**"
																 Color="**#FF000000**"
																 FontFamily="**Arial**"
																 IsBold="**False**"
																 IsItalic="**False**"
																 Size="**11**"
																 />


																  <Font
																 Id="**MapFont**"
																 Color="**#FF010000**"
																 FontFamily="**Tahoma**"
																 IsBold="**False**"
																 IsItalic="**False**"
																 Size="**7**"
																 />


																  <Font
																 Id="**MapTerritoryTranscriptFont**"
																 Color="**#FF010000**"
																 FontFamily="**Arial**"
																 IsBold="**False**"
																 IsItalic="**False**"
																 Size="**9**"
																 />


																  <Font
																 Id="**LegendFont**"
																 Color="**#FF000000**"
																 FontFamily="**Arial**"
																 IsBold="**False**"
																 IsItalic="**False**"
																 Size="**21**"
																 />


																  <Font
																 Id="**LegendFontFooter**"
																 Color="**#FF000000**"
																 FontFamily="**Arial**"
																 IsBold="**False**"
																 IsItalic="**False**"
																 Size="**11**"
																 />


																  <Font
																 Id="**ToolTipFont**"
																 Color="**#918F8D**"
																 FontFamily="**Lucida
																 Grande**"
																 IsBold="**False**"
																 IsItalic="**False**"
																 Size="**13.333000183105469**"
																 />


																  <MapToolTip
																 Id="**MainToolTipStyle**"
																 Font="**{ToolTipFont}**"
																 Background="**#FFFFFFFF**"
																 BorderColor="**#FFC1C1C1**"
																 BorderRadius="**2**"
																 BorderThickness="**1**"
																 Padding="**5
																 5 5 5**"
																 TextWrapping="**NoWrap**"
																 HoverMode="**MouseOver**"
																 NoDataText="**нет
																 данных**"
																 MaskText="**{%Name}**"
																 />


																  <BorderEffect
																 Id="**BorderEffectDefault**"
																 BorderColor="**Orange**"
																 BorderThickness="**1**"
																 />


																  <MapLabel
																 Id="**MainLabelStyle**"
																 Padding="**2
																 2 2 2**"
																 Font="**{MapFont}**"
																 MaskText="**{0}:
																 {1:#,##0.00}**"
																 TextWrapping="**NoWrap**"
																 />


															  </ItemsDictionary>


														[![](../../minus.gif)](../../#)
														 <MapLayers>


																  <MapLayer
																 Id="**Background**"
																 />


																  <MapLayer
																 Id="**Regions**"
																 ToolTip="**{MainToolTipStyle}**"
																 Effect="**{BorderEffectDefault}**"
																 />


																  <MapLayer
																 Id="**Water**"
																 />


																  <MapLayer
																 Id="**SmallRivers**"
																 />


																  <MapLayer
																 Id="**BigRivers**"
																 />


																  <MapLayer
																 Id="**Lakes**"
																 />


																  <MapLayer
																 Id="**Cities**"
																 />


																  <MapLayer
																 Id="**Railways**"
																 />


															  </MapLayers>


														[![](../../minus.gif)](../../#)
														 <MapLegends>


																[![](../../minus.gif)](../../#)
																 <MapLegend
																 Background="**#80FFFFFF**"
																 BorderRadius="**0**"
																 Width="**0**"
																 Height="**0**"
																 Margin="**6
																 6 6 6**"
																 NoDataVisible="**TRUE**"
																 VerticalAlignment="**Top**"
																 HorizontalAlignment="**Left**"
																 BetweenFormat="**от
																 {0:#,##0.00}
																 до {1:#,##0.00}**"
																 EqualFormat="**равно
																 {0:#,##0.00}**"
																 GreaterFormat="**более
																 {0:#,##0.00}**"
																 LessFormat="**менее
																 {0:#,##0.00}**"
																 NoDataText="**нет
																 данных**"
																 IsOuter="**False**"
																 ColumnCount="**8**"
																 TextWrapping="**NoWrap**"
																 Marker="**Circle**"
																 Font="**{LegendFont}**"
																 IncludeEquals="**False**"
																 Visibility="**Visible**"
																 Padding="**3
																 0 3 0**">


																		[![](../../minus.gif)](../../#)
																		 <MapLegend.Header>


																				  <MapLabel
																				 Background="**#00000000**"
																				 Text=""
																				 Font="**{LegendFontHeader}**"
																				 MaskText="**{0}**"
																				 TextWrapping="**NoWrap**"
																				 />


																			  </MapLegend.Header>


																		[![](../../minus.gif)](../../#)
																		 <MapLegend.Footer>


																				  <MapLabel
																				 Background="**#00000000**"
																				 Text=""
																				 Font="**{LegendFontFooter}**"
																				 MaskText="**{0}**"
																				 TextWrapping="**NoWrap**"
																				 />


																			  </MapLegend.Footer>


																	  </MapLegend>


																[![](../../minus.gif)](../../#)
																 <SizeLegend
																 Background="**#80FFFFFF**"
																 BorderRadius="**0**"
																 Width="**0**"
																 Height="**0**"
																 Margin="**6
																 6 6 6**"
																 VerticalAlignment="**Center**"
																 HorizontalAlignment="**Right**"
																 IsOuter="**False**"
																 Font="**{LegendFont}**"
																 Visibility="**Collapsed**"
																 Padding="**3
																 0 3 0**"
																 ItemFormat="**#,##0.00**">


																		[![](../../minus.gif)](../../#)
																		 <MapLegend.Header>


																				  <MapLabel
																				 Background="**#00000000**"
																				 Text=""
																				 Font="**{LegendFontHeader}**"
																				 MaskText="**{0}**"
																				 TextWrapping="**NoWrap**"
																				 />


																			  </MapLegend.Header>


																	  </SizeLegend>


															  </MapLegends>


														  <MapTerritoryTranscript
														 ParentLayer="**{Regions}**" ColumnCount="**0**" MaxItemCount="**0**" Font="**{MapTerritoryTranscriptFont}**" SortingMode="**Asc**" Background="**#80FFFFFF**" BorderColor="**#FF000000**" BorderThickness="**1**" Padding="**2
														 2 2 2**" TextWrapping="**NoWrap**" Left="**0.01**" Top="**0.65**" VerticalAlignment="**Relative**" HorizontalAlignment="**Relative**" Width="**0**" Height="**0**" HighlightBrush="**#800000FF**" Visibility="**Collapsed**" />


													  </MapChart>


											  </md>


										[![](../../minus.gif)](../../#)
										 <topobaseOd isShortcut="**0**"
										 isLink="**0**">


												  <i>OBJ1533</i>


												  <n>RF.tbs</n>


												  <k>1533</k>


												  <c>3330</c>


												  <p>51</p>


												  <h>0</h>


											  </topobaseOd>


										  <options>[{"Name":
										 "mapmaster.timelinepanel.currentstep","Value":
										 0},{"Name": "mapmaster.signaturespanel.columnscount","Value":
										 8},{"Name": "mapmaster.stylespanel.enableborder","Value":
										 false},{"Name": "mapmaster.stylespanel.borderthickness","Value":
										 0},{"Name": "mapmaster.stylespanel.border","Value":
										 "#000000"},{"Name":
										 "mapmaster.stylespanel.background","Value":
										 {"SolidColorBrush":
										 {"@Color": "#ffffff","@Opacity":
										 0.501960813999176}}},{"Name":
										 "mapmaster.stylespanel.fontfamily","Value":
										 "Arial"},{"Name":
										 "mapmaster.stylespanel.fontsize","Value":
										 21.3333339691162},{"Name":
										 "mapmaster.stylespanel.isbold","Value":
										 false},{"Name": "mapmaster.stylespanel.isitalic","Value":
										 false},{"Name": "mapmaster.stylespanel.isunderline","Value":
										 false},{"Name": "mapmaster.stylespanel.fontcolor","Value":
										 "#000000"}]</options>


									  </meta>


							  </GetMapResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "GetMap" :
  {
   "tMap" :
    {
     "id" : "S1!M!S!E2!Map"
    },

   "tArg" :
    {
     "pattern" :
      {
       "All" : "false",
       "DataSource" : "false",
       "Visual" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetMapResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!E2!Map"
    },
   "meta" :
    {
     "md" :
      {
       "MapChart" :

        {
         "@Background" : "#FFFFFFFF",
         "@Type" : "SVG",
         "@Mode" : "Drawing2D",
         "@Topobase" : "{Topobase}",
         "ItemsDictionary" :
          {
           "Font" :
            [
              {

               "@IsItalic" : "False",
               "@FontFamily" : "Arial",
               "@Size" : "11",
               "@Id" : "LegendFontHeader",
               "@IsBold" : "False",
               "@Color" : "#FF000000"
              },
              {
               "@IsItalic" : "False",
               "@FontFamily" : "Tahoma",

               "@Size" : "7",
               "@Id" : "MapFont",
               "@IsBold" : "False",
               "@Color" : "#FF010000"
              },
              {
               "@IsItalic" : "False",
               "@FontFamily" : "Arial",
               "@Size" : "9",
               "@Id" : "MapTerritoryTranscriptFont",

               "@IsBold" : "False",
               "@Color" : "#FF010000"
              },
              {
               "@IsItalic" : "False",
               "@FontFamily" : "Arial",
               "@Size" : "21",
               "@Id" : "LegendFont",
               "@IsBold" : "False",
               "@Color" : "#FF000000"

              },
              {
               "@IsItalic" : "False",
               "@FontFamily" : "Arial",
               "@Size" : "11",
               "@Id" : "LegendFontFooter",
               "@IsBold" : "False",
               "@Color" : "#FF000000"
              },
              {

               "@IsItalic" : "False",
               "@FontFamily" : "Lucida Grande",
               "@Size" : "13.333000183105469",
               "@Id" : "ToolTipFont",
               "@IsBold" : "False",
               "@Color" : "#918F8D"
              }
            ],
           "MapToolTip" :
            {

             "@Background" : "#FFFFFFFF",
             "@MaskText" : "{%Name}",
             "@BorderRadius" : "2",
             "@Font" : "{ToolTipFont}",
             "@Padding" : "5 5 5 5",
             "@HoverMode" : "MouseOver",
             "@BorderThickness" : "1",
             "@NoDataText" : "нет данных",
             "@Id" : "MainToolTipStyle",
             "@BorderColor" : "#FFC1C1C1"

            },
           "BorderEffect" :
            {
             "@BorderThickness" : "1",
             "@Id" : "BorderEffectDefault",
             "@BorderColor" : "Orange"
            },
           "MapLabel" :
            {
             "@MaskText" : "{0}: {1:#,##0.00}",

             "@Padding" : "2 2 2 2",
             "@Font" : "{MapFont}",
             "@Id" : "MainLabelStyle",
             "@TextWrapping" : "NoWrap"
            }
          },
         "MapLayers" :
          {
           "MapLayer" :
            [

              {
               "@Id" : "Background"
              },
              {
               "@ToolTip" : "{MainToolTipStyle}",
               "@Id" : "Regions",
               "@Effect" : "{BorderEffectDefault}"
              },
              {
               "@Id" : "Water"

              },
              {
               "@Id" : "SmallRivers"
              },
              {
               "@Id" : "BigRivers"
              },
              {
               "@Id" : "Lakes"
              },

              {
               "@Id" : "Cities"
              },
              {
               "@Id" : "Railways"
              }
            ]
          },
         "MapLegends" :
          {

           "MapLegend" :
            {
             "@LessFormat" : "менее {0:#,##0.00}",
             "@Width" : "0",
             "@Background" : "#80FFFFFF",
             "@EqualFormat" : "равно {0:#,##0.00}",
             "@Marker" : "Circle",
             "@NoDataVisible" : "TRUE",
             "@BorderRadius" : "0",
             "@Visibility" : "Visible",

             "@HorizontalAlignment" : "Left",
             "@IsOuter" : "False",
             "@TextWrapping" : "NoWrap",
             "@IncludeEquals" : "False",
             "@GreaterFormat" : "более {0:#,##0.00}",
             "@BetweenFormat" : "от {0:#,##0.00} до {1:#,##0.00}",
             "@ColumnCount" : "8",
             "@Font" : "{LegendFont}",
             "@Padding" : "3 0 3 0",
             "@VerticalAlignment" : "Top",

             "@Height" : "0",
             "@NoDataText" : "нет данных",
             "@Margin" : "6 6 6 6",
             "MapLegend.Header" :
              {
               "MapLabel" :
                {
                 "@Background" : "#00000000",
                 "@MaskText" : "{0}",
                 "@Text" : "",

                 "@Font" : "{LegendFontHeader}",
                 "@TextWrapping" : "NoWrap"
                }
              },
             "MapLegend.Footer" :
              {
               "MapLabel" :
                {
                 "@Background" : "#00000000",
                 "@MaskText" : "{0}",

                 "@Text" : "",
                 "@Font" : "{LegendFontFooter}",
                 "@TextWrapping" : "NoWrap"
                }
              }
            },
           "SizeLegend" :
            {
             "@Background" : "#80FFFFFF",
             "@Width" : "0",

             "@BorderRadius" : "0",
             "@Font" : "{LegendFont}",
             "@Padding" : "3 0 3 0",
             "@Visibility" : "Collapsed",
             "@ItemFormat" : "#,##0.00",
             "@Height" : "0",
             "@VerticalAlignment" : "Center",
             "@HorizontalAlignment" : "Right",
             "@IsOuter" : "False",
             "@Margin" : "6 6 6 6",

             "MapLegend.Header" :
              {
               "MapLabel" :
                {
                 "@Background" : "#00000000",
                 "@MaskText" : "{0}",
                 "@Text" : "",
                 "@Font" : "{LegendFontHeader}",
                 "@TextWrapping" : "NoWrap"
                }

              }
            }
          },
         "MapTerritoryTranscript" :
          {
           "@Width" : "0",
           "@Background" : "#80FFFFFF",
           "@ParentLayer" : "{Regions}",
           "@Visibility" : "Collapsed",
           "@HorizontalAlignment" : "Relative",

           "@BorderThickness" : "1",
           "@Left" : "0.01",
           "@SortingMode" : "Asc",
           "@TextWrapping" : "NoWrap",
           "@Top" : "0.65",
           "@Padding" : "2 2 2 2",
           "@Font" : "{MapTerritoryTranscriptFont}",
           "@ColumnCount" : "0",
           "@Height" : "0",
           "@VerticalAlignment" : "Relative",

           "@HighlightBrush" : "#800000FF",
           "@BorderColor" : "#FF000000",
           "@MaxItemCount" : "0"
          }
        }
      },
     "topobaseOd" :
      {
       "@isShortcut" : "0",
       "@isLink" : "0",

       "i" : "OBJ1533",
       "n" : "RF.tbs",
       "k" : "1533",
       "c" : "3330",
       "p" : "51",
       "h" : "0"
      },
     "options" : "[{"Name": "mapmaster.timelinepanel.currentstep","Value": 0},{"Name": "mapmaster.signaturespanel.columnscount","Value": 8},{"Name": "mapmaster.stylespanel.enableborder","Value": false},{"Name": "mapmaster.stylespanel.borderthickness","Value": 0},{"Name": "mapmaster.stylespanel.border","Value": "#000000"},{"Name": "mapmaster.stylespanel.background","Value": {"SolidColorBrush": {"@Color": "#ffffff","@Opacity": 0.501960813999176}}},{"Name": "mapmaster.stylespanel.fontfamily","Value": "Arial"},{"Name": "mapmaster.stylespanel.fontsize","Value": 21.3333339691162},{"Name": "mapmaster.stylespanel.isbold","Value": false},{"Name": "mapmaster.stylespanel.isitalic","Value": false},{"Name": "mapmaster.stylespanel.isunderline","Value": false},{"Name": "mapmaster.stylespanel.fontcolor","Value": "#000000"}]"
    }
  }
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


public static GetMapResult GetMap(EaxId eax)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tArg = new GetMap()
    {
        tArg = new GetMapArg()
        {
            pattern = new MapMdPattern()
            {
                All = false,
                DataSource = false,
                Visual = true
            }
        },
        tMap = new MapId()
        {
            id = eax.id + "!Map"
        }
    };
    //Получение метаданных карты
    var tResult = somClient.GetMap(tArg);
    return tResult;
}


См. также:


[Интерактивные
 визуальные компоненты](Visualizators_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
