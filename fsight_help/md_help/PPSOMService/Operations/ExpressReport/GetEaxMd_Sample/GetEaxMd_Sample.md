# Получение информации об объектах экспресс-отчёта: Операция GetEaxMd

Получение информации об объектах экспресс-отчёта: Операция GetEaxMd
-


**


# Получение информации об объектах экспресс-отчёта


Ниже приведен пример использования операции [GetEaxMd](../GetEaxMd.htm)
 для получения информации о таблице, диаграмме, карте и пузырьковой диаграмме
 экспресс-отчета. В запросе передается моникёр открытого экземпляра экспресс-отчета
 и шаблон, указывающий необходимость получить информацию об указанных объектах.
 В ответе приходит полученная информация.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../../minus.gif)](../../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../../minus.gif)](../../../#) <s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[![](../../../minus.gif)](../../../#) <GetEaxMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[![](../../../minus.gif)](../../../#) <tEax
								 xmlns="** **">


										  <id>S1!M!S!E1</id>


									  </tEax>


								[![](../../../minus.gif)](../../../#) <tArg
								 xmlns="** **">


										[![](../../../minus.gif)](../../../#)
										 <pattern>


												  <obInst>false</obInst>


												  <grid>true</grid>


												  <chart>true</chart>


												  <map>true</map>


												  <bubbleChart>true</bubbleChart>


											  </pattern>


									  </tArg>


							  </GetEaxMd>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[![](../../../minus.gif)](../../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../../minus.gif)](../../../#) <soapenv:Body>


						[![](../../../minus.gif)](../../../#) <GetEaxMdResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


								[![](../../../minus.gif)](../../../#) <id xmlns="** **">


										  <id>S1!M!S!E1</id>


									  </id>


								[![](../../../minus.gif)](../../../#) <meta
								 xmlns="** **">


										[![](../../../minus.gif)](../../../#)
										 <grid>


												  <visible>1</visible>


												  <active>1</active>


												  <enabled>1</enabled>


												  <viewScale>1.000000</viewScale>


												[![](../../../minus.gif)](../../../#) <viewSize>


														  <width>-1000</width>


														  <height>-1000</height>


														  <units>Mkm</units>


													  </viewSize>


												  <viewOrder>0</viewOrder>


												  <available>1</available>


												  <transposed>0</transposed>


												  <displayLegend>0</displayLegend>


												  <displayNumbers>0</displayNumbers>


												  <displayGrid>0</displayGrid>


												  <fixHeaders>1</fixHeaders>


												  <fixHeadersOnPrint>1</fixHeadersOnPrint>


												  <rowsHierarchical>1</rowsHierarchical>


												  <columnsHierarchical>1</columnsHierarchical>


												  <rowsHierarchyIndent>3.000000</rowsHierarchyIndent>


												  <columnsHierarchyIndent>0</columnsHierarchyIndent>


												  <headerTitleType>None</headerTitleType>


												[![](../../../minus.gif)](../../../#) <adjust>


														  <mode>Auto</mode>


														  <minVisibleDataColumns>3</minVisibleDataColumns>


														  <maxRowsInCell>8</maxRowsInCell>


													  </adjust>


											  </grid>


										[![](../../../minus.gif)](../../../#)
										 <chart>


												  <visible>0</visible>


												  <active>0</active>


												  <enabled>1</enabled>


												  <viewScale>1.000000</viewScale>


												[![](../../../minus.gif)](../../../#) <viewSize>


														  <width>-1000</width>


														  <height>-1000</height>


														  <units>Mkm</units>


													  </viewSize>


												  <viewOrder>1</viewOrder>


												  <available>1</available>


												[![](../../../minus.gif)](../../../#) <range>


														  <left>1</left>


														  <top>1</top>


														  <width>3</width>


														  <height>4</height>


													  </range>


												  <displayTotals>0</displayTotals>


												  <useNormalization>0</useNormalization>


												  <displayHidden>1</displayHidden>


												  <buildPointNameHierarchy>0</buildPointNameHierarchy>


												  <seriesInRows>1</seriesInRows>


												  <seriesLimit>100</seriesLimit>


												  <pointChartMode>XYY</pointChartMode>


												  <singleCellRangeMode>EntireGrid</singleCellRangeMode>


											  </chart>


										[![](../../../minus.gif)](../../../#)
										 <map>


												  <visible>0</visible>


												  <active>0</active>


												  <enabled>0</enabled>


												  <viewScale>1.000000</viewScale>


												[![](../../../minus.gif)](../../../#) <viewSize>


														  <width>-1000</width>


														  <height>-1000</height>


														  <units>Mkm</units>


													  </viewSize>


												  <viewOrder>2</viewOrder>


												  <available>0</available>


												  <dataIndex>-1</dataIndex>


												  <pointsCount>4</pointsCount>


												  <beginColor>#CA423E</beginColor>


												  <endColor>#6EA45A</endColor>


												[![](../../../minus.gif)](../../../#) <indicatorsDimension>


														  <k>116</k>


														  <id>DIM_1</id>


														  <n>Dim_1</n>


														  <vis>1</vis>


													  </indicatorsDimension>


												[![](../../../minus.gif)](../../../#) <indicatorElements>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <Key>Color</Key>


																[![](../../../minus.gif)](../../../#)
																 <Value>


																		  <key>1</key>


																		  <n>Первый
																		 элемент</n>


																	  </Value>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <Key>Depth</Key>


																[![](../../../minus.gif)](../../../#)
																 <Value>


																		  <key>2</key>


																		  <n>Второй
																		 элемент</n>


																	  </Value>


															  </it>


													  </indicatorElements>


												[![](../../../minus.gif)](../../../#) <timelineDim>


														  <k>112</k>


														  <id>CALENDAR</id>


														  <n>Календарь</n>


														  <vis>1</vis>


													  </timelineDim>


											  </map>


										  <windowsPosition>Maximized</windowsPosition>


										[![](../../../minus.gif)](../../../#)
										 <bubbleChart>


												  <visible>0</visible>


												  <active>0</active>


												  <enabled>1</enabled>


												  <viewScale>1.000000</viewScale>


												[![](../../../minus.gif)](../../../#) <viewSize>


														  <width>-1000</width>


														  <height>-1000</height>


														  <units>Mkm</units>


													  </viewSize>


												  <viewOrder>3</viewOrder>


												  <available>1</available>


												[![](../../../minus.gif)](../../../#) <timeLineDimension>


														  <k>112</k>


														  <id>CALENDAR</id>


														  <n>Календарь</n>


														  <vis>1</vis>


													  </timeLineDimension>


												[![](../../../minus.gif)](../../../#) <objectivesDimension>


														  <k>116</k>


														  <id>DIM_1</id>


														  <n>Dim_1</n>


														  <vis>1</vis>


													  </objectivesDimension>


												[![](../../../minus.gif)](../../../#) <indicatorsDimension>


														  <k>116</k>


														  <id>DIM_1</id>


														  <n>Dim_1</n>


														  <vis>1</vis>


													  </indicatorsDimension>


												[![](../../../minus.gif)](../../../#) <indicatorElements>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <Key>X</Key>


																[![](../../../minus.gif)](../../../#)
																 <Value>


																		  <key>1</key>


																		  <n>Первый
																		 элемент</n>


																	  </Value>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <Key>Y</Key>


																[![](../../../minus.gif)](../../../#)
																 <Value>


																		  <key>2</key>


																		  <n>Второй
																		 элемент</n>


																	  </Value>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <Key>Radial</Key>


																[![](../../../minus.gif)](../../../#)
																 <Value>


																		  <key>3</key>


																		  <n>Третий
																		 элемент</n>


																	  </Value>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <Key>Color</Key>


																[![](../../../minus.gif)](../../../#)
																 <Value>


																		  <key>4</key>


																		  <n>Четвертый
																		 элемент</n>


																	  </Value>


															  </it>


													  </indicatorElements>


											  </bubbleChart>


									  </meta>


							  </GetEaxMdResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


### JSON-запрос:


{
 "GetEaxMd" :
  {
   "tEax" :
    {
     "id" : "S1!M!S!E1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "false",
       "grid" : "true",
       "chart" : "true",
       "map" : "true",
       "bubbleChart" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetEaxMdResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!E1"
    },
   "meta" :
    {
     "grid" :
      {
       "visible" : "1",
       "active" : "1",
       "enabled" : "1",
       "viewScale" : "1.000000",
       "viewSize" :
        {
         "width" : "-1",
         "height" : "-1",
         "units" : "DLU96"
        },
       "viewOrder" : "0",
       "available" : "1",
       "transposed" : "0",
       "displayLegend" : "0",
       "displayNumbers" : "0",
       "displayGrid" : "0",
       "fixHeaders" : "1",
       "fixHeadersOnPrint" : "1",
       "rowsHierarchical" : "1",
       "columnsHierarchical" : "1",
       "rowsHierarchyIndent" : "3.000000",
       "columnsHierarchyIndent" : "0",
       "headerTitleType" : "None",
       "adjust" :
        {
         "mode" : "Auto",
         "minVisibleDataColumns" : "3",
         "maxRowsInCell" : "8"
        },
       "isEnabledRowsGrowth" : "0",
       "isEnabledColsGrowth" : "0",
       "canEnableRowsGrowth" : "1",
       "canEnableColsGrowth" : "1",
       "dataDisplayMode" : "Interactive"
      },
     "chart" :
      {
       "visible" : "0",
       "active" : "0",
       "enabled" : "1",
       "viewScale" : "1.000000",
       "viewSize" :
        {
         "width" : "-1",
         "height" : "-1",
         "units" : "DLU96"
        },
       "viewOrder" : "1",
       "available" : "1",
       "range" :
        {
         "left" : "1",
         "top" : "1",
         "width" : "3",
         "height" : "4"
        },
       "dataRange" :
        {
         "left" : "0",
         "top" : "0",
         "width" : "0",
         "height" : "0",
         "type" : "None"
        },
       "displayTotals" : "0",
       "useNormalization" : "0",
       "displayHidden" : "1",
       "buildPointNameHierarchy" : "0",
       "seriesInRows" : "1",
       "seriesLimit" : "100",
       "pointChartMode" : "XYY",
       "singleCellRangeMode" : "EntireGrid"
      },
     "map" :
      {
       "visible" : "0",
       "active" : "0",
       "enabled" : "0",
       "viewScale" : "1.000000",
       "viewSize" :
        {
         "width" : "-1",
         "height" : "-1",
         "units" : "DLU96"
        },
       "viewOrder" : "5",
       "available" : "0",
       "dataIndex" : "-1",
       "pointsCount" : "4",
       "beginColor" : "#CA423E",
       "endColor" : "#6EA45A",
       "enable3D" : "0"
      },
     "windowsPosition" : "Maximized",
     "bubbleChart" :
      {
       "visible" : "0",
       "active" : "0",
       "enabled" : "1",
       "viewScale" : "1.000000",
       "viewSize" :
        {
         "width" : "-1",
         "height" : "-1",
         "units" : "DLU96"
        },
       "viewOrder" : "4",
       "available" : "0"
      },
     "hasPivot" : "1"
    }
  }
}


    public static GetEaxMdResult GetEaxObjectInfo(EaxId moniker)
    {
        var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
        //Параметры выполнения операции
        var tEaxMd = new GetEaxMd()
        {
            tArg = new GetEaxMdArg()
            {
                //Шаблон, в соответствии с которым будут извлекаться метаданные
                pattern = new EaxMdPattern()
                {
                    obInst = false,
                    bubbleChart = true,
                    grid = true,
                    chart = true,
                    map = true
                }
            },
            tEax = moniker
        };
        //Получение информации об объектах экспресс-отчета
        var result = somClient.GetEaxMd(tEaxMd);
        return result;
    }


См. также:


[GetEaxMd:
 Операция](../GetEaxMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
