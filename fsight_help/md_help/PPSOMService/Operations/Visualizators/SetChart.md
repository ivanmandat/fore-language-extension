# SetChart: Операция

SetChart: Операция
-


**


# SetChart


## Синтаксис


SetChartResult SetChart(ChartId tChart, SetChartArg
 tArg)


## Параметры


tChart. Моникёр диаграммы;


tArg. Параметры изменения данных.


## Описание


Операция SetChart изменяет данные
 диаграммы.


## Комментарии


Для выполнения операции необходимо в параметре tChart
 указать моникёр диаграммы и в параметре tArg.meta
 указать обновленные данные и метаданные. Моникёр диаграммы строится на
 базе моникера объекта репозитория, с диаграммой которого осуществляется
 работа, по следующим правилам:


	- «Моникёр экземпляра экспресс-отчета»!Chart.
	 Диаграмма экспресс-отчета (если в экспресс-отчете один лист);


	- «Моникёр экземпляра экспресс-отчета»!Sheets!«Ключ
	 листа»!Chart. Диаграмма заданного листа экспресс-отчета (если
	 в экспресс-отчете несколько листов);


	- «Моникёр экземпляра рабочей
	 книги»!Chart. Диаграмма рабочей книги (если в рабочей книге
	 один лист);


	- «Моникёр экземпляра рабочей
	 книги»!Sheets!«Ключ листа»!Chart. Диаграмма заданного листа
	 рабочей книги (если в рабочей книги несколько листов);


	- «Моникёр экземпляра регламентного
	 отчета»!«Ключ листа»!Objects!«Идентификатор диаграммы». Диаграмма,
	 расположенная на листе регламентного отчета.


## Пример


Ниже приведен пример использования операции SetChart
 для изменения диаграммы экспресс-отчёта. В запросе передается экземпляр
 диаграммы и шаблон для изменения данных. В ответе приходят изменённые
 данные.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


		[![](../../minus.gif)](../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../minus.gif)](../../#) <s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[![](../../minus.gif)](../../#) <SetChart xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[![](../../minus.gif)](../../#) <tChart
								 xmlns="** **">


										  <id>S1!M!S!E1!Chart</id>


									  </tChart>


								[![](../../minus.gif)](../../#) <tArg
								 xmlns="** **">


										[![](../../minus.gif)](../../#)
										 <meta>


												  <options
												 />


												  <toolTipImageMap>Данные по регионам</toolTipImageMap>


											  </meta>


										[![](../../minus.gif)](../../#)
										 <metaGet>


												  <data>true</data>


												  <hiChart>true</hiChart>


											  </metaGet>


									  </tArg>


							  </SetChart>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../minus.gif)](../../#) <soapenv:Body>


						[![](../../minus.gif)](../../#) <SetChartResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


								[![](../../minus.gif)](../../#) <id xmlns="** **">


										  <id>S1!M!S!E1!Chart</id>


									  </id>


								[![](../../minus.gif)](../../#) <metaGet
								 xmlns="** **">


										[![](../../minus.gif)](../../#)
										 <md>


												[![](../../minus.gif)](../../#) <data>


														[![](../../minus.gif)](../../#)
														 <Points>


																  <Point
																 Name="**2000A1**"
																 />


																  <Point
																 Name="**2001A1**"
																 />


																  <Point
																 Name="**2002A1**"
																 />


																  <Point
																 Name="**2003A1**"
																 />


																  <Point
																 Name="**2004A1**"
																 />


																  <Point
																 Name="**2005A1**"
																 />


															  </Points>


														  <series
														 Name="**United
														 States**" />


														[![](../../minus.gif)](../../#)
														 <values>


																  <value
																 SerieIndex="**0**"
																 value2="**0.000000,0.000000,0.000000,0.000000,0.000000,0.000000**">1.383864,1.348390,1.348390,1.348390,1.433527,1.589612</value>


															  </values>


														[![](../../minus.gif)](../../#)
														 <IsEditable>


																  <value
																 SerieIndex="**0**">1,1,1,1,1,1</value>


															  </IsEditable>


														[![](../../minus.gif)](../../#)
														 <ToolTips>


																  <ToolTip
																 SP="**0,0**">1,38</ToolTip>


																  <ToolTip
																 SP="**0,1**">1,35</ToolTip>


																  <ToolTip
																 SP="**0,2**">1,35</ToolTip>


																  <ToolTip
																 SP="**0,3**">1,35</ToolTip>


																  <ToolTip
																 SP="**0,4**">1,43</ToolTip>


																  <ToolTip
																 SP="**0,5**">1,59</ToolTip>


															  </ToolTips>


														[![](../../minus.gif)](../../#)
														 <Labels>


																  <Label
																 SP="**0,0**">1,38</Label>


																  <Label
																 SP="**0,1**">1,35</Label>


																  <Label
																 SP="**0,2**">1,35</Label>


																  <Label
																 SP="**0,3**">1,35</Label>


																  <Label
																 SP="**0,4**">1,43</Label>


																  <Label
																 SP="**0,5**">1,59</Label>


															  </Labels>


													  </data>


											  </md>


										  <hiChart>{"chart":
										 {"auto": false,"backgroundColor":
										 "rgba(255, 255, 255, 1.000000)","borderColor":
										 "#909090","borderRadius":
										 0,"borderWidth": 0,"chartAsImage":
										 false,"defaultSeriesType":
										 "column","displayVolume3D":
										 false,"gapWidthCoef":
										 1.5,"inverted": false,"marginLeft":
										 80,"marginRight": 50,"overlapCoef":
										 0,"plotBackgroundColor":
										 "rgba(230, 230, 230, 1.000000)","plotBorderColor":
										 "rgba(128, 128, 128, 1.000000)","plotBorderWidth":
										 0.944881916046143,"renderTo":
										 "container","seriesOrder":
										 "forward","stockStyle":
										 "lowHighClose"},"legend":
										 {"align": "center","backgroundColor":
										 null,"borderColor":
										 "#909090","borderWidth":
										 0,"elementVerticalAlign":
										 "middle","enabled":
										 true,"itemStyle": {"color":
										 "#000000","fontFamily":
										 "Arial","fontSize":
										 "7.086614pt","fontStyle":
										 "normal","fontWeight":
										 "normal","textDecoration":
										 "none"},"layout":
										 "horizontal","verticalAlign":
										 "bottom"},"plotOptions":
										 {"series": {"connectNulls":
										 true,"dataLabels": {"color":
										 "rgba(0, 0, 0, 1.000000)","customPosition":
										 {"hotspotHorAlign":
										 "center","hotspotPositionCoef":
										 0.5,"hotspotPositionOffsetX":
										 0,"hotspotPositionOffsetY":
										 0,"hotspotVertAlign":
										 "center"},"enabled":
										 false,"formatter": "%Autovalue","position":
										 "custom","rotation":
										 0,"style": {"color":
										 "#000000","fontFamily":
										 "Arial","fontSize":
										 "7.086614pt","fontStyle":
										 "normal","fontWeight":
										 "normal","textDecoration":
										 "none"}},"marker":
										 {"enabled": false},"stacking":
										 null}},"series": [{"auto":
										 true,"borderColor":
										 "rgba(11, 26, 39, 0.501961)","borderPenEnabled":
										 true,"borderWidth":
										 0.37795278429985,"brushEnabled":
										 true,"canDrillDown":
										 false,"canDrillUp":
										 false,"color": "rgba(46,
										 106, 159, 1.000000)","dashStyle":
										 "solid","data":
										 [{"auto": true,"color":
										 "rgba(46, 106, 159, 1.000000)","name":
										 "2000A1","x":
										 0,"y": 1.38386357},{"auto":
										 true,"color": "rgba(46,
										 106, 159, 1.000000)","name":
										 "2001A1","x":
										 0,"y": 1.34838968},{"auto":
										 true,"color": "rgba(46,
										 106, 159, 1.000000)","name":
										 "2002A1","x":
										 0,"y": 1.34838968},{"auto":
										 true,"color": "rgba(46,
										 106, 159, 1.000000)","name":
										 "2003A1","x":
										 0,"y": 1.34838968},{"auto":
										 true,"color": "rgba(46,
										 106, 159, 1.000000)","name":
										 "2004A1","x":
										 0,"y": 1.43352691},{"auto":
										 true,"color": "rgba(46,
										 106, 159, 1.000000)","name":
										 "2005A1","x":
										 0,"y": 1.5896119}],"dataIndex":
										 0,"dataLabels": {"color":
										 "rgba(0, 0, 0, 1.000000)","customPosition":
										 {"hotspotHorAlign":
										 "center","hotspotPositionCoef":
										 0.5,"hotspotPositionOffsetX":
										 0,"hotspotPositionOffsetY":
										 0,"hotspotVertAlign":
										 "center"},"dataFormat":
										 "0.00","enabled":
										 true,"formatter": "%Autovalue","position":
										 "custom","rotation":
										 0,"style": {"color":
										 "#000000","fontFamily":
										 "Arial","fontSize":
										 "7.086614pt","fontStyle":
										 "normal","fontWeight":
										 "normal","textDecoration":
										 "none"}},"displayStacked":
										 false,"emptyDashStyle":
										 "dot","emptyLineColor":
										 "rgba(46, 106, 159, 1.000000)","emptyLinePenEnabled":
										 false,"emptyLineWidth":
										 1.5118111371994,"is3DBorder":
										 false,"legendIndex":
										 0,"lineColor": "rgba(46,
										 106, 159, 1.000000)","linePenEnabled":
										 true,"lineWidth": 1.5118111371994,"marker":
										 {"enabled": false},"name":
										 "United States","shadow":
										 false,"showInLegend":
										 true,"trendLine": {},"zIndex":
										 1}],"title": {"style":
										 {"backgroundColor":
										 "#ffffff","borderColor":
										 "#909090","borderStyle":
										 "none","borderWidth":
										 0,"color": "#000000","fontFamily":
										 "Arial","fontSize":
										 "14.173228pt","fontStyle":
										 "normal","fontWeight":
										 "bold","textDecoration":
										 "none"},"text":
										 ""},"tooltip":
										 {"dataFormat": "0.00","enabled":
										 true,"formatter": "%Autovalue"},"xAxis":
										 {"axisXPlacement": "betweenticks","categories":
										 ["2000A1","2001A1","2002A1","2003A1","2004A1","2005A1"],"gridLineColor":
										 "#909090","gridLineDashStyle":
										 "none","gridLineWidth":
										 0,"includeZero": false,"labels":
										 {"enabled": true,"rotation":
										 -90,"spacing": true,"style":
										 {"color": "#000000","fontFamily":
										 "Arial","fontSize":
										 "7.086614pt","fontStyle":
										 "normal","fontWeight":
										 "normal","textDecoration":
										 "none"}},"lineColor":
										 "rgba(128, 128, 128, 1.000000)","lineWidth":
										 0.37795278429985,"minorGridLineColor":
										 "#909090","minorGridLineDashStyle":
										 "none","minorGridLineWidth":
										 0,"opposite": false,"position":
										 "auto","reversed":
										 false,"showMarksForHiddenLabels":
										 false,"step": 1,"stepAuto":
										 true,"textIsStagger":
										 false,"textIsStaggerOddFirst":
										 true,"textMultiline":
										 "bySymbols","tickColor":
										 "rgba(128, 128, 128, 1.000000)","tickMarksInterval":
										 1,"tickWidth": 0.37795278429985,"tickmarkPlacement":
										 "on","title":
										 {"style": {"backgroundColor":
										 "#ffffff","borderColor":
										 "#909090","borderStyle":
										 "none","borderWidth":
										 0,"color": "#000000","fontFamily":
										 "Arial","fontSize":
										 "9.921260pt","fontStyle":
										 "normal","fontWeight":
										 "bold","textDecoration":
										 "none"},"text":
										 ""},"visible":
										 true},"yAxis": {"displayUnit":
										 "none","gridLineColor":
										 "rgba(128, 128, 128, 1.000000)","gridLineDashStyle":
										 "solid","gridLineWidth":
										 0.944881916046143,"includeZero":
										 false,"labels": {"dataFormat":
										 "#,##0.00","enabled":
										 true,"rotation": 0,"spacing":
										 true,"style": {"color":
										 "#000000","fontFamily":
										 "Arial","fontSize":
										 "7.086614pt","fontStyle":
										 "normal","fontWeight":
										 "normal","textDecoration":
										 "none"}},"lineColor":
										 "rgba(128, 128, 128, 1.000000)","lineWidth":
										 0.37795278429985,"max":
										 null,"min": null,"minorGridLineColor":
										 "#909090","minorGridLineDashStyle":
										 "none","minorGridLineWidth":
										 0,"opposite": false,"position":
										 "auto","reversed":
										 false,"tickColor": "rgba(128,
										 128, 128, 1.000000)","tickInterval":
										 null,"tickWidth": 0.37795278429985,"title":
										 {"style": {"backgroundColor":
										 "#ffffff","borderColor":
										 "#909090","borderStyle":
										 "none","borderWidth":
										 0,"color": "#000000","fontFamily":
										 "Arial","fontSize":
										 "9.921260pt","fontStyle":
										 "normal","fontWeight":
										 "bold","textDecoration":
										 "none"},"text":
										 "Значение"},"type":
										 "linear","visible":
										 true}}</hiChart>


									  </metaGet>


							  </SetChartResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "SetChart" :
  {
   "tChart" :
    {
     "id" : "S1!M!S!E1!Chart"
    },
   "tArg" :
    {
     "meta" :
      {

       "options" : "",
       "toolTipImageMap" : "Данные по регионам"
      },
     "metaGet" :
      {
       "data" : "true",
       "hiChart" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetChartResult" :
  {
   "id" :
    {

     "id" : "S1!M!S!E1!Chart"
    },
   "metaGet" :
    {
     "md" :
      {
       "data" :
        {
         "Points" :
          {

           "Point" :
            [
              {
               "@Name" : "2000A1"
              },
              {
               "@Name" : "2001A1"
              },
              {
               "@Name" : "2002A1"

              },
              {
               "@Name" : "2003A1"
              },
              {
               "@Name" : "2004A1"
              },
              {
               "@Name" : "2005A1"
              }

            ]
          },
         "series" :
          {
           "@Name" : "United States"
          },
         "values" :
          {
           "value" :
            [

              {
               "@SerieIndex" : "0",
               "@value2" : "0.000000,0.000000,0.000000,0.000000,0.000000,0.000000",
               "$" : "1.383864,1.348390,1.348390,1.348390,1.433527,1.589612"
              }
            ]
          },
         "IsEditable" :
          {
           "value" :

            {
             "@SerieIndex" : "0",
             "$" : "1,1,1,1,1,1"
            }
          },
         "ToolTips" :
          {
           "ToolTip" :
            [
              {

               "@SP" : "0,0",
               "$" : "1,38"
              },
              {
               "@SP" : "0,1",
               "$" : "1,35"
              },
              {
               "@SP" : "0,2",
               "$" : "1,35"

              },
              {
               "@SP" : "0,3",
               "$" : "1,35"
              },
              {
               "@SP" : "0,4",
               "$" : "1,43"
              },
              {

               "@SP" : "0,5",
               "$" : "1,59"
              }
            ]
          },
         "Labels" :
          {
           "Label" :
            [
              {

               "@SP" : "0,0",
               "$" : "1,38"
              },
              {
               "@SP" : "0,1",
               "$" : "1,35"
              },
              {
               "@SP" : "0,2",
               "$" : "1,35"

              },
              {
               "@SP" : "0,3",
               "$" : "1,35"
              },
              {
               "@SP" : "0,4",
               "$" : "1,43"
              },
              {

               "@SP" : "0,5",
               "$" : "1,59"
              }
            ]
          }
        }
      },
     "hiChart" : "{"chart": {"areaBorderEnabled": false,"auto": false,"backgroundColor": "rgba(255, 255, 255, 1.000000)","borderColor": "#909090","borderRadius": 0,"borderWidth": 0.666663289070129,"chartAsImage": false,"defaultSeriesType": "column","displayVolume3D": false,"gapWidthCoef": 1.5,"inverted": false,"marginLeft": 80,"marginRight": 50,"overlapCoef": 0,"plotBackgroundColor": "rgba(230, 230, 230, 1.000000)","plotBorderColor": "rgba(128, 128, 128, 1.000000)","plotBorderEnabled": true,"plotBorderWidth": 0.944881916046143,"renderTo": "container","seriesOrder": "forward","stockStyle": "lowHighClose"},"legend": {"align": "center","backgroundColor": null,"borderColor": "#909090","borderEnabled": false,"borderWidth": 0.0881939977407455,"elementVerticalAlign": "middle","enabled": true,"itemStyle": {"color": "#000000","fontFamily": "Arial","fontSize": "7.086614pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"},"layout": "horizontal","verticalAlign": "bottom"},"plotOptions": {"series": {"connectNulls": true,"dataLabels": {"color": "rgba(0, 0, 0, 1.000000)","customPosition": {"hotspotHorAlign": "center","hotspotPositionCoef": 0.5,"hotspotPositionOffsetX": 0,"hotspotPositionOffsetY": 0,"hotspotVertAlign": "center"},"enabled": false,"formatter": "%Autovalue","position": "custom","rotation": 0,"style": {"color": "#000000","fontFamily": "Arial","fontSize": "7.086614pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"}},"marker": {"enabled": false},"stacking": null}},"series": [{"auto": true,"borderColor": "rgba(11, 26, 39, 0.501961)","borderPenEnabled": true,"borderWidth": 0.37795278429985,"brushEnabled": true,"canDrillDown": false,"canDrillUp": false,"color": "rgba(46, 106, 159, 1.000000)","dashStyle": "solid","data": [{"auto": true,"color": "rgba(46, 106, 159, 1.000000)","name": "2000A1","x": 0,"y": 1.38386357},{"auto": true,"color": "rgba(46, 106, 159, 1.000000)","name": "2001A1","x": 0,"y": 1.34838968},{"auto": true,"color": "rgba(46, 106, 159, 1.000000)","name": "2002A1","x": 0,"y": 1.34838968},{"auto": true,"color": "rgba(46, 106, 159, 1.000000)","name": "2003A1","x": 0,"y": 1.34838968},{"auto": true,"color": "rgba(46, 106, 159, 1.000000)","name": "2004A1","x": 0,"y": 1.43352691},{"auto": true,"color": "rgba(46, 106, 159, 1.000000)","name": "2005A1","x": 0,"y": 1.5896119}],"dataIndex": 0,"dataLabels": {"color": "rgba(0, 0, 0, 1.000000)","customPosition": {"hotspotHorAlign": "center","hotspotPositionCoef": 0.5,"hotspotPositionOffsetX": 0,"hotspotPositionOffsetY": 0,"hotspotVertAlign": "center"},"dataFormat": "0.00","enabled": true,"formatter": "%Autovalue","position": "custom","rotation": 0,"style": {"color": "#000000","fontFamily": "Arial","fontSize": "7.086614pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"}},"displayStacked": false,"emptyDashStyle": "dot","emptyLineColor": "rgba(46, 106, 159, 1.000000)","emptyLinePenEnabled": false,"emptyLineWidth": 1.5118111371994,"is3DBorder": false,"legendIndex": 0,"lineColor": "rgba(46, 106, 159, 1.000000)","linePenEnabled": true,"lineWidth": 1.5118111371994,"marker": {"enabled": false},"name": "United States","shadow": false,"showInLegend": true,"trendLine": {},"visible": true,"zIndex": 1}],"title": {"align": "center","style": {"backgroundColor": null,"borderColor": "#909090","borderStyle": "none","borderWidth": 0,"color": "#000000","fontFamily": "Arial","fontSize": "14.173228pt","fontStyle": "normal","fontWeight": "bold","textDecoration": "none"},"text": ""},"tooltip": {"dataFormat": "0.00","enabled": true,"formatter": "%Autovalue"},"xAxis": {"axisXPlacement": "betweenticks","categories": ["2000A1","2001A1","2002A1","2003A1","2004A1","2005A1"],"gridLineColor": "#909090","gridLineDashStyle": "none","gridLineEnabled": false,"gridLineWidth": 0.666663289070129,"includeZero": false,"labels": {"enabled": true,"rotation": -90,"spacing": true,"style": {"color": "#000000","fontFamily": "Arial","fontSize": "7.086614pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"}},"lineColor": "rgba(128, 128, 128, 1.000000)","lineEnabled": true,"lineWidth": 0.37795278429985,"minorGridLineColor": "rgba(255, 255, 255, 1.000000)","minorGridLineDashStyle": "none","minorGridLineEnabled": false,"minorGridLineWidth": 0.666663289070129,"opposite": false,"position": "auto","reversed": false,"showMarksForHiddenLabels": false,"step": 1,"stepAuto": true,"textIsStagger": false,"textIsStaggerOddFirst": true,"textMultiline": "bySymbols","tickColor": "rgba(128, 128, 128, 1.000000)","tickEnabled": true,"tickMarksInterval": 1,"tickWidth": 0.37795278429985,"tickmarkPlacement": "on","title": {"style": {"backgroundColor": null,"borderColor": "#909090","borderStyle": "none","borderWidth": 0,"color": "#000000","fontFamily": "Arial","fontSize": "9.921260pt","fontStyle": "normal","fontWeight": "bold","textDecoration": "none"},"text": ""},"visible": true},"yAxis": {"displayUnit": "none","gridLineColor": "rgba(128, 128, 128, 1.000000)","gridLineDashStyle": "solid","gridLineEnabled": true,"gridLineWidth": 0.944881916046143,"includeZero": false,"labels": {"dataFormat": "#,##0.00","enabled": true,"rotation": 0,"spacing": true,"style": {"color": "#000000","fontFamily": "Arial","fontSize": "7.086614pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"}},"lineColor": "rgba(128, 128, 128, 1.000000)","lineEnabled": true,"lineWidth": 0.37795278429985,"max": null,"min": null,"minorGridLineColor": "rgba(255, 255, 255, 1.000000)","minorGridLineDashStyle": "none","minorGridLineEnabled": false,"minorGridLineWidth": 0.666663289070129,"opposite": false,"position": "auto","reversed": false,"tickColor": "rgba(128, 128, 128, 1.000000)","tickEnabled": true,"tickInterval": null,"tickWidth": 0.37795278429985,"title": {"style": {"backgroundColor": null,"borderColor": "#909090","borderStyle": "none","borderWidth": 0,"color": "#000000","fontFamily": "Arial","fontSize": "9.921260pt","fontStyle": "normal","fontWeight": "bold","textDecoration": "none"},"text": "Значение"},"type": "linear","visible": true}}"
    }
  }
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


	Функция SetChart изменяет
	 диаграмму экспресс-отчёта и экспортирует её в форматы JSON и XML.
	 Входные параметры:


		- eax. Экземпляр открытого
		 экспресс-отчёта.


	В результате выполнения функция возвращает изменённую диаграмму.


public static SetChartResult SetChart(EaxId eax)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetChart()
    {
        tArg = new SetChartArg()
        {
            metaGet = new ChartMdPattern()
            {
                data = true,
                hiChart = true
            },
            meta = new ChartMd()
            {
                options = "",
                toolTipImageMap = "Данные по регионам"
            }
        },
        tChart = new ChartId() { id = eax.id + "!Chart" }
    };
    // Выполняем изменение диаграммы
    var result = somClient.SetChart(tSet);
    Console.WriteLine("Изменена диаграмма: " + result.id.id);
    var chart = result.metaGet;
    // Экспортируем xml-описание диаграммы
    XmlDocument chartXml= new XmlDocument();
    XmlElement el = chartXml.CreateElement(chart.md.Name);
    el.InnerXml = chart.md.InnerXml;
    chartXml.AppendChild(el);
    chartXml.Save("C:\\ChartOutput.xml");
    // Экспортируем json-описание диаграммы
    FileStream fs = new FileStream("C:\\ChartJsonOutput.json", FileMode.OpenOrCreate);
    Byte[] info = new UTF8Encoding(true).GetBytes(chart.hiChart);
    // Запись данных в файл
    fs.Write(info, 0, info.Length);
    fs.Flush();
    fs.Close();
    return result;
}


См. также:


[Интерактивные
 визуальные компоненты](Visualizators_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
