# Изменение диаграммы в рабочей книге

Изменение диаграммы в рабочей книге
-


**


# Изменение диаграммы в рабочей книге


Ниже приведён пример использования операции [SetWbkMd](../SetWbkMd.htm) для изменения диаграммы
 в рабочей книге. В запросе передаются: моникёр открытой рабочей книги
 и JSON-описание изменённой диаграммы. В ответе приходит экземпляр изменённой
 диаграммы.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetWbkMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWbk xmlns="****">
  <id>S1!M!S!W7</id>  </tWbk>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <refresh />
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>[![](../../../minus.gif)](../../../#)<setLanerChart>
[![](../../../minus.gif)](../../../#)<meta>
  <hiChart>{"penCursor":"../build/img/pen.cur","colors":["#4572A7","#AA4643","#89A54E","#80699B","#3D96AE","#DB843D","#92A8CD","#A47D7C","#B5CA92"],"symbols":["circle","diamond","square","triangle","triangle-down"],"lang":{"loading":"Loading...","months":["January","February","March","April","May","June","July","August","September","October","November","December"],"shortMonths":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"decimalPoint":".","resetZoom":"Reset zoom","resetZoomTitle":"Reset zoom level 1:1","thousandsSep":",","trendLines":{"linear":"?›?????µ?????°N?","logarithmic":"?›?????°N€??N„????N‡?µN????°N?","exponential":"?­??N????????µ??N†???°?»N????°N?","power":"??N‚?µ???µ?????°N?","mean":"??N€?µ?????µ?µ","peaks":"?Y????????N‹?µ ?·???°N‡?µ????N?"}},"global":{"useUTC":true,"canvasToolsURL":"http://code.highcharts.com/2.2.4/modules/canvas-tools.js"},"chart":{"borderColor":"#909090","borderRadius":0,"defaultSeriesType":"area","ignoreHiddenSeries":true,"spacingTop":10,"spacingRight":10,"spacingBottom":15,"spacingLeft":10,"style":{"fontFamily":"Arial","fontSize":"12px"},"plotBorderColor":"rgba(128, 128, 128, 1.000000)","resetZoomButton":{"theme":{"zIndex":20},"position":{"align":"right","x":-10,"y":10}},"backgroundColor":"rgba(255, 255, 255, 1.000000)","borderWidth":0,"displayVolume3D":false,"inverted":false,"plotBackgroundColor":"rgba(230, 230, 230, 1.000000)","plotBorderWidth":0.944882,"seriesOrder":"forward","reflow":false,"allowSelect":true,"animation":{"duration":700}},"title":{"text":"","align":"center","y":15,"style":{"color":"#000000","fontSize":"14.173228 pt","backgroundColor":"#ffffff","borderColor":"#909090","borderStyle":"none","borderWidth":0,"fontFamily":"Arial","fontStyle":"normal","fontWeight":"bold","textDecoration":"none"}},"subtitle":{"text":"","align":"center","y":30,"style":{"color":"#6D869F"}},"plotOptions":{"line":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":{"enabled":true,"lineWidth":0,"radius":4,"lineColor":"#FFFFFF","states":{"hover":{},"select":{"fillColor":"#FFFFFF","lineColor":"#000000","lineWidth":2}}},"point":{"events":{}},"dataLabels":{"enabled":false,"align":"center","x":0,"y":-6,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y"},"cropThreshold":300,"pointRange":0,"showInLegend":true,"states":{"hover":{"marker":{}},"select":{"marker":{}}},"stickyTracking":true},"area":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":{"enabled":true,"lineWidth":0,"radius":4,"lineColor":"#FFFFFF","states":{"hover":{},"select":{"fillColor":"#FFFFFF","lineColor":"#000000","lineWidth":2}}},"point":{"events":{}},"dataLabels":{"enabled":false,"align":"center","x":0,"y":-6,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y"},"cropThreshold":300,"pointRange":0,"showInLegend":true,"states":{"hover":{"marker":{}},"select":{"marker":{}}},"stickyTracking":true,"threshold":0},"spline":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":{"enabled":true,"lineWidth":0,"radius":4,"lineColor":"#FFFFFF","states":{"hover":{},"select":{"fillColor":"#FFFFFF","lineColor":"#000000","lineWidth":2}}},"point":{"events":{}},"dataLabels":{"enabled":false,"align":"center","x":0,"y":-6,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y"},"cropThreshold":300,"pointRange":0,"showInLegend":true,"states":{"hover":{"marker":{}},"select":{"marker":{}}},"stickyTracking":true},"areaspline":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":{"enabled":true,"lineWidth":0,"radius":4,"lineColor":"#FFFFFF","states":{"hover":{},"select":{"fillColor":"#FFFFFF","lineColor":"#000000","lineWidth":2}}},"point":{"events":{}},"dataLabels":{"enabled":false,"align":"center","x":0,"y":-6,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y"},"cropThreshold":300,"pointRange":0,"showInLegend":true,"states":{"hover":{"marker":{}},"select":{"marker":{}}},"stickyTracking":true,"threshold":0},"column":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":null,"point":{"events":{}},"dataLabels":{"enabled":false,"align":"center","x":0,"y":null,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y","verticalAlign":null},"cropThreshold":50,"pointRange":null,"showInLegend":true,"states":{"hover":{"marker":{},"brightness":0.1,"shadow":false},"select":{"marker":{},"color":"#C0C0C0","borderColor":"#000000","shadow":false}},"stickyTracking":true,"borderColor":"#FFFFFF","borderWidth":1,"borderRadius":0,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"threshold":0},"bar":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":null,"point":{"events":{}},"dataLabels":{"enabled":false,"align":"left","x":5,"y":null,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y","verticalAlign":"middle"},"cropThreshold":50,"pointRange":null,"showInLegend":true,"states":{"hover":{"marker":{},"brightness":0.1,"shadow":false},"select":{"marker":{},"color":"#C0C0C0","borderColor":"#000000","shadow":false}},"stickyTracking":true,"borderColor":"#FFFFFF","borderWidth":1,"borderRadius":0,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"threshold":0},"scatter":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":0,"shadow":true,"marker":{"enabled":true,"lineWidth":0,"radius":4,"lineColor":"#FFFFFF","states":{"hover":{},"select":{"fillColor":"#FFFFFF","lineColor":"#000000","lineWidth":2}}},"point":{"events":{}},"dataLabels":{"enabled":false,"align":"center","x":0,"y":-6,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y"},"cropThreshold":300,"pointRange":0,"showInLegend":true,"states":{"hover":{"marker":{},"lineWidth":0},"select":{"marker":{}}},"stickyTracking":true,"tooltip":{"headerFormat":"<span style=\"font-size: 10px; color:{series.color}\">{series.name}</span><br/>","pointFormat":"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}},"pie":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":null,"point":{"events":{}},"dataLabels":{"enabled":true,"align":"center","x":0,"y":5,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y","distance":30},"cropThreshold":300,"pointRange":0,"showInLegend":false,"states":{"hover":{"marker":{},"brightness":0.1,"shadow":false},"select":{"marker":{}}},"stickyTracking":true,"borderColor":"#FFFFFF","borderWidth":1,"center":["50%","50%"],"colorByPoint":true,"legendType":"point","size":"75%","slicedOffset":10},"series":{"connectNulls":true,"dataLabels":{"align":"center","color":"rgba(0, 0, 0, 1.000000)","enabled":true,"formatter":"%y","rotation":0,"style":{"color":"#000000","fontFamily":"Arial","fontSize":"7.086614 pt","fontStyle":"normal","fontWeigth":"normal","textDecoration":"none"}},"marker":{"enabled":false},"shadow":false,"animation":{"duration":700},"events":{}}},"labels":{"style":{"position":"absolute","color":"#3E576F"}},"legend":{"enabled":false,"align":"center","layout":"horizontal","labelFormatter":"%y","borderWidth":1,"borderColor":"#909090","borderRadius":5,"navigation":{"activeColor":"#3E576F","inactiveColor":"#CCC"},"shadow":false,"itemStyle":{"cursor":"pointer","color":"#3E576F","fontSize":"12px"},"itemHoverStyle":{},"itemHiddenStyle":{"color":"#C0C0C0"},"selectionStyle":{"fill":"#8491B4","stroke":"#566898"},"itemCheckboxStyle":{"position":"absolute","width":"13px","height":"13px"},"symbolWidth":16,"symbolPadding":5,"verticalAlign":"bottom","x":0,"y":0},"loading":{"labelStyle":{"fontWeight":"bold","position":"relative","top":"1em"},"style":{"position":"absolute","backgroundColor":"white","opacity":0.5,"textAlign":"center"}},"tooltip":{"enabled":true,"backgroundColor":"rgba(255, 255, 255, .85)","borderWidth":2,"borderRadius":5,"dateTimeLabelFormats":{"millisecond":"%A, %b %e, %H:%M:%S.%L","second":"%A, %b %e, %H:%M:%S","minute":"%A, %b %e, %H:%M","hour":"%A, %b %e, %H:%M","day":"%A, %b %e, %Y","week":"Week from %A, %b %e, %Y","month":"%B %Y","year":"%Y"},"headerFormat":"<span style=\"font-size: 10px\">{point.key}</span><br/>","pointFormat":"<span style=\"color:{series.color}\">{series.name}</span>: <b>{point.y}</b><br/>","shadow":true,"shared":false,"snap":10,"style":{"color":"#000000","fontSize":"7.086614 pt","padding":"5px","whiteSpace":"nowrap","fontFamily":"Arial"},"formatter":"%y"},"credits":{"enabled":false},"series":[{"borderColor":"rgba(11, 26, 39, 0.501961)","borderPenEnabled":true,"borderWidth":0.377953,"brushEnabled":true,"canDrillDown":false,"canDrillUp":false,"color":"#2e6a9f","dashStyle":"solid","data":[11.2777,11.6537,11.7236,11.607,11.759,11.8097,11.6982,11.531,11.4196,11.4196,11.5412,11.6678,11.6324,11.6476,null,null],"dataIndex":0,"dataLabels":{"align":"center","color":"rgba(0, 0, 0, 1.000000)","dataFormat":"0,00","enabled":true,"formatter":"%y","rotation":0,"style":{"color":"#000000","fontFamily":"Arial","fontSize":"7.086614 pt","fontStyle":"normal","fontWeigth":"normal","textDecoration":"none"}},"displayStacked":false,"emptyDashStyle":"none","emptyLineColor":"#909090","emptyLinePenEnabled":false,"emptyLineWidth":0,"legendIndex":1,"lineColor":"rgba(46, 106, 159, 1.000000)","linePenEnabled":true,"lineWidth":2,"marker":{"enabled":false},"name":"USA|A","shadow":false,"showInLegend":true,"trendLines":[],"zIndex":1}],"xAxis":{"axisXPlacement":"betweenticks","categories":["2000A1","2001A1","2002A1","2003A1","2004A1","2005A1","2006A1","2007A1","2008A1","2009A1","2010A1","2011A1","2012A1","2013A1","2014A1","2015A1"],"gridLineColor":"#909090","gridLineDashStyle":"none","gridLineWidth":0,"labels":{"enabled":true,"rotation":-90,"spacing":true,"style":{"color":"#000000","fontFamily":"Arial","fontSize":"7.086614 pt","fontStyle":"normal","fontWeigth":"normal","textDecoration":"none"},"dataFormat":"@"},"lineColor":"rgba(128, 128, 128, 1.000000)","lineWidth":0.377953,"opposite":false,"position":"auto","reversed":false,"showMarksForHiddenLabels":false,"tickColor":"rgba(128, 128, 128, 1.000000)","tickLabelSpacing":1,"tickMarksInterval":1,"tickWidth":0.377953,"tickmarkPlacement":"on","title":{"style":{"backgroundColor":"#ffffff","borderColor":"#909090","borderStyle":"none","borderWidth":0,"color":"#000000","fontFamily":"Arial","fontSize":"9.921260 pt","fontStyle":"normal","fontWeight":"bold","textDecoration":"none"},"text":""},"visible":true,"index":0,"isX":true},"yAxis":{"displayUnit":"none","gridLineColor":"rgba(128, 128, 128, 0.000000)","gridLineDashStyle":"solid","gridLineWidth":0.944882,"labels":{"dataFormat":"# ##0,00","enabled":true,"rotation":0,"spacing":true,"style":{"color":"#000000","fontFamily":"Arial","fontSize":"7.086614 pt","fontStyle":"normal","fontWeigth":"normal","textDecoration":"none"},"formatter":"%y"},"lineColor":"rgba(128, 128, 128, 1.000000)","lineWidth":0.377953,"max":null,"min":null,"opposite":false,"position":"auto","reversed":false,"tickColor":"rgba(128, 128, 128, 1.000000)","tickInterval":null,"tickWidth":0.377953,"title":{"style":{"backgroundColor":"#ffffff","borderColor":"#909090","borderStyle":"none","borderWidth":0,"color":"#000000","fontFamily":"Arial","fontSize":"9.921260 pt","fontStyle":"normal","fontWeight":"bold","textDecoration":"none"},"text":""},"type":"linear","visible":true,"minPadding":0,"index":0},"editMode":{"state":false}}</hiChart>  </meta>
  </setLanerChart>
  </pattern>
  <meta />
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  </metaGet>
  </tArg>
  </SetWbkMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetWbkMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <refresh xmlns="****" />
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!W7</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>WBK_CALC</i>  <n>Вычисляемые ряды</n>  <k>5541</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**4**">
  <its />
  </series>
[![](../../../minus.gif)](../../../#)<setLanerChart>
[![](../../../minus.gif)](../../../#)<id>
  <id>S1!M!S!W7!wbkChart</id>  </id>
  </setLanerChart>
  </meta>
  </SetWbkMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetWbkMd" :
  {
   "tWbk" :
    {
     "id" : "S1!M!S!W7"
    },
   "tArg" :
    {
     "refresh" : "",
     "pattern" :
      {
       "obInst" : "true",
       "useGridAutoAdjust" : "true",
       "setLanerChart" :
        {
         "meta" :
          {
           "hiChart" : "{"penCursor":"..\/build\/img\/pen.cur","colors":["#4572A7","#AA4643","#89A54E","#80699B","#3D96AE","#DB843D","#92A8CD","#A47D7C","#B5CA92"],"symbols":["circle","diamond","square","triangle","triangle-down"],"lang":{"loading":"Loading...","months":["January","February","March","April","May","June","July","August","September","October","November","December"],"shortMonths":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"decimalPoint":".","resetZoom":"Reset zoom","resetZoomTitle":"Reset zoom level 1:1","thousandsSep":",","trendLines":{"linear":"?›?????µ?????°N?","logarithmic":"?›?????°N€??N„????N‡?µN????°N?","exponential":"?­??N????????µ??N†???°?»N????°N?","power":"??N‚?µ???µ?????°N?","mean":"??N€?µ?????µ?µ","peaks":"?Y????????N‹?µ ?·???°N‡?µ????N?"}},"global":{"useUTC":true,"canvasToolsURL":"http:\/\/code.highcharts.com\/2.2.4\/modules\/canvas-tools.js"},"chart":{"borderColor":"#909090","borderRadius":0,"defaultSeriesType":"area","ignoreHiddenSeries":true,"spacingTop":10,"spacingRight":10,"spacingBottom":15,"spacingLeft":10,"style":{"fontFamily":"Arial","fontSize":"12px"},"plotBorderColor":"rgba(128, 128, 128, 1.000000)","resetZoomButton":{"theme":{"zIndex":20},"position":{"align":"right","x":-10,"y":10}},"backgroundColor":"rgba(255, 255, 255, 1.000000)","borderWidth":0,"displayVolume3D":false,"inverted":false,"plotBackgroundColor":"rgba(230, 230, 230, 1.000000)","plotBorderWidth":0.944882,"seriesOrder":"forward","reflow":false,"allowSelect":true,"animation":{"duration":700}},"title":{"text":"","align":"center","y":15,"style":{"color":"#000000","fontSize":"14.173228 pt","backgroundColor":"#ffffff","borderColor":"#909090","borderStyle":"none","borderWidth":0,"fontFamily":"Arial","fontStyle":"normal","fontWeight":"bold","textDecoration":"none"}},"subtitle":{"text":"","align":"center","y":30,"style":{"color":"#6D869F"}},"plotOptions":{"line":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":{"enabled":true,"lineWidth":0,"radius":4,"lineColor":"#FFFFFF","states":{"hover":{},"select":{"fillColor":"#FFFFFF","lineColor":"#000000","lineWidth":2}}},"point":{"events":{}},"dataLabels":{"enabled":false,"align":"center","x":0,"y":-6,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y"},"cropThreshold":300,"pointRange":0,"showInLegend":true,"states":{"hover":{"marker":{}},"select":{"marker":{}}},"stickyTracking":true},"area":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":{"enabled":true,"lineWidth":0,"radius":4,"lineColor":"#FFFFFF","states":{"hover":{},"select":{"fillColor":"#FFFFFF","lineColor":"#000000","lineWidth":2}}},"point":{"events":{}},"dataLabels":{"enabled":false,"align":"center","x":0,"y":-6,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y"},"cropThreshold":300,"pointRange":0,"showInLegend":true,"states":{"hover":{"marker":{}},"select":{"marker":{}}},"stickyTracking":true,"threshold":0},"spline":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":{"enabled":true,"lineWidth":0,"radius":4,"lineColor":"#FFFFFF","states":{"hover":{},"select":{"fillColor":"#FFFFFF","lineColor":"#000000","lineWidth":2}}},"point":{"events":{}},"dataLabels":{"enabled":false,"align":"center","x":0,"y":-6,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y"},"cropThreshold":300,"pointRange":0,"showInLegend":true,"states":{"hover":{"marker":{}},"select":{"marker":{}}},"stickyTracking":true},"areaspline":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":{"enabled":true,"lineWidth":0,"radius":4,"lineColor":"#FFFFFF","states":{"hover":{},"select":{"fillColor":"#FFFFFF","lineColor":"#000000","lineWidth":2}}},"point":{"events":{}},"dataLabels":{"enabled":false,"align":"center","x":0,"y":-6,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y"},"cropThreshold":300,"pointRange":0,"showInLegend":true,"states":{"hover":{"marker":{}},"select":{"marker":{}}},"stickyTracking":true,"threshold":0},"column":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":null,"point":{"events":{}},"dataLabels":{"enabled":false,"align":"center","x":0,"y":null,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y","verticalAlign":null},"cropThreshold":50,"pointRange":null,"showInLegend":true,"states":{"hover":{"marker":{},"brightness":0.1,"shadow":false},"select":{"marker":{},"color":"#C0C0C0","borderColor":"#000000","shadow":false}},"stickyTracking":true,"borderColor":"#FFFFFF","borderWidth":1,"borderRadius":0,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"threshold":0},"bar":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":null,"point":{"events":{}},"dataLabels":{"enabled":false,"align":"left","x":5,"y":null,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y","verticalAlign":"middle"},"cropThreshold":50,"pointRange":null,"showInLegend":true,"states":{"hover":{"marker":{},"brightness":0.1,"shadow":false},"select":{"marker":{},"color":"#C0C0C0","borderColor":"#000000","shadow":false}},"stickyTracking":true,"borderColor":"#FFFFFF","borderWidth":1,"borderRadius":0,"groupPadding":0.2,"pointPadding":0.1,"minPointLength":0,"threshold":0},"scatter":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":0,"shadow":true,"marker":{"enabled":true,"lineWidth":0,"radius":4,"lineColor":"#FFFFFF","states":{"hover":{},"select":{"fillColor":"#FFFFFF","lineColor":"#000000","lineWidth":2}}},"point":{"events":{}},"dataLabels":{"enabled":false,"align":"center","x":0,"y":-6,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y"},"cropThreshold":300,"pointRange":0,"showInLegend":true,"states":{"hover":{"marker":{},"lineWidth":0},"select":{"marker":{}}},"stickyTracking":true,"tooltip":{"headerFormat":"<span style="font-size: 10px; color:{series.color}">{series.name}<\/span><br\/>","pointFormat":"x: <b>{point.x}<\/b><br\/>y: <b>{point.y}<\/b><br\/>"}},"pie":{"allowPointSelect":false,"showCheckbox":false,"animation":{"duration":1000},"events":{},"lineWidth":2,"shadow":true,"marker":null,"point":{"events":{}},"dataLabels":{"enabled":true,"align":"center","x":0,"y":5,"style":{"color":"#666","fontSize":"11px","lineHeight":"14px"},"formatter":"%y","distance":30},"cropThreshold":300,"pointRange":0,"showInLegend":false,"states":{"hover":{"marker":{},"brightness":0.1,"shadow":false},"select":{"marker":{}}},"stickyTracking":true,"borderColor":"#FFFFFF","borderWidth":1,"center":["50%","50%"],"colorByPoint":true,"legendType":"point","size":"75%","slicedOffset":10},"series":{"connectNulls":true,"dataLabels":{"align":"center","color":"rgba(0, 0, 0, 1.000000)","enabled":true,"formatter":"%y","rotation":0,"style":{"color":"#000000","fontFamily":"Arial","fontSize":"7.086614 pt","fontStyle":"normal","fontWeigth":"normal","textDecoration":"none"}},"marker":{"enabled":false},"shadow":false,"animation":{"duration":700},"events":{}}},"labels":{"style":{"position":"absolute","color":"#3E576F"}},"legend":{"enabled":false,"align":"center","layout":"horizontal","labelFormatter":"%y","borderWidth":1,"borderColor":"#909090","borderRadius":5,"navigation":{"activeColor":"#3E576F","inactiveColor":"#CCC"},"shadow":false,"itemStyle":{"cursor":"pointer","color":"#3E576F","fontSize":"12px"},"itemHoverStyle":{},"itemHiddenStyle":{"color":"#C0C0C0"},"selectionStyle":{"fill":"#8491B4","stroke":"#566898"},"itemCheckboxStyle":{"position":"absolute","width":"13px","height":"13px"},"symbolWidth":16,"symbolPadding":5,"verticalAlign":"bottom","x":0,"y":0},"loading":{"labelStyle":{"fontWeight":"bold","position":"relative","top":"1em"},"style":{"position":"absolute","backgroundColor":"white","opacity":0.5,"textAlign":"center"}},"tooltip":{"enabled":true,"backgroundColor":"rgba(255, 255, 255, .85)","borderWidth":2,"borderRadius":5,"dateTimeLabelFormats":{"millisecond":"%A, %b %e, %H:%M:%S.%L","second":"%A, %b %e, %H:%M:%S","minute":"%A, %b %e, %H:%M","hour":"%A, %b %e, %H:%M","day":"%A, %b %e, %Y","week":"Week from %A, %b %e, %Y","month":"%B %Y","year":"%Y"},"headerFormat":"<span style="font-size: 10px">{point.key}<\/span><br\/>","pointFormat":"<span style="color:{series.color}">{series.name}<\/span>: <b>{point.y}<\/b><br\/>","shadow":true,"shared":false,"snap":10,"style":{"color":"#000000","fontSize":"7.086614 pt","padding":"5px","whiteSpace":"nowrap","fontFamily":"Arial"},"formatter":"%y"},"credits":{"enabled":false},"series":[{"borderColor":"rgba(11, 26, 39, 0.501961)","borderPenEnabled":true,"borderWidth":0.377953,"brushEnabled":true,"canDrillDown":false,"canDrillUp":false,"color":"#2e6a9f","dashStyle":"solid","data":[11.2777,11.6537,11.7236,11.607,11.759,11.8097,11.6982,11.531,11.4196,11.4196,11.5412,11.6678,11.6324,11.6476,null,null],"dataIndex":0,"dataLabels":{"align":"center","color":"rgba(0, 0, 0, 1.000000)","dataFormat":"0,00","enabled":true,"formatter":"%y","rotation":0,"style":{"color":"#000000","fontFamily":"Arial","fontSize":"7.086614 pt","fontStyle":"normal","fontWeigth":"normal","textDecoration":"none"}},"displayStacked":false,"emptyDashStyle":"none","emptyLineColor":"#909090","emptyLinePenEnabled":false,"emptyLineWidth":0,"legendIndex":1,"lineColor":"rgba(46, 106, 159, 1.000000)","linePenEnabled":true,"lineWidth":2,"marker":{"enabled":false},"name":"USA|A","shadow":false,"showInLegend":true,"trendLines":[],"zIndex":1}],"xAxis":{"axisXPlacement":"betweenticks","categories":["2000A1","2001A1","2002A1","2003A1","2004A1","2005A1","2006A1","2007A1","2008A1","2009A1","2010A1","2011A1","2012A1","2013A1","2014A1","2015A1"],"gridLineColor":"#909090","gridLineDashStyle":"none","gridLineWidth":0,"labels":{"enabled":true,"rotation":-90,"spacing":true,"style":{"color":"#000000","fontFamily":"Arial","fontSize":"7.086614 pt","fontStyle":"normal","fontWeigth":"normal","textDecoration":"none"},"dataFormat":"@"},"lineColor":"rgba(128, 128, 128, 1.000000)","lineWidth":0.377953,"opposite":false,"position":"auto","reversed":false,"showMarksForHiddenLabels":false,"tickColor":"rgba(128, 128, 128, 1.000000)","tickLabelSpacing":1,"tickMarksInterval":1,"tickWidth":0.377953,"tickmarkPlacement":"on","title":{"style":{"backgroundColor":"#ffffff","borderColor":"#909090","borderStyle":"none","borderWidth":0,"color":"#000000","fontFamily":"Arial","fontSize":"9.921260 pt","fontStyle":"normal","fontWeight":"bold","textDecoration":"none"},"text":""},"visible":true,"index":0,"isX":true},"yAxis":{"displayUnit":"none","gridLineColor":"rgba(128, 128, 128, 0.000000)","gridLineDashStyle":"solid","gridLineWidth":0.944882,"labels":{"dataFormat":"# ##0,00","enabled":true,"rotation":0,"spacing":true,"style":{"color":"#000000","fontFamily":"Arial","fontSize":"7.086614 pt","fontStyle":"normal","fontWeigth":"normal","textDecoration":"none"},"formatter":"%y"},"lineColor":"rgba(128, 128, 128, 1.000000)","lineWidth":0.377953,"max":null,"min":null,"opposite":false,"position":"auto","reversed":false,"tickColor":"rgba(128, 128, 128, 1.000000)","tickInterval":null,"tickWidth":0.377953,"title":{"style":{"backgroundColor":"#ffffff","borderColor":"#909090","borderStyle":"none","borderWidth":0,"color":"#000000","fontFamily":"Arial","fontSize":"9.921260 pt","fontStyle":"normal","fontWeight":"bold","textDecoration":"none"},"text":""},"type":"linear","visible":true,"minPadding":0,"index":0},"editMode":{"state":false}}"
          }
        }
      },
     "meta" : "",
     "metaGet" :
      {
       "obInst" : "true",
       "useGridAutoAdjust" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetWbkMdResult" :
  {
   "refresh" : "",
   "id" :
    {
     "id" : "S1!M!S!W7"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "2",
         "@hf" : "0",
         "i" : "WBK_CALC",
         "n" : "Вычисляемые ряды",
         "k" : "5541",
         "c" : "2827",
         "p" : "5471",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "1",
     "windowsPosition" : "Vertical",
     "hasPivot" : "0",
     "hasLaner" : "1",
     "series" :
      {
       "@count" : "4",
       "its" : ""
      },
     "setLanerChart" :
      {
       "id" :
        {
         "id" : "S1!M!S!W7!wbkChart"
        }
      }
    }
  }
}


public static SetWbkMdResult SetWbkChart(WbkId wbk, string hiChart, bool isModelling)
{
    WbkMdPattern pattern = new WbkMdPattern();
    SetChartArg chgChart = new SetChartArg()
    {
        meta = new ChartMd() { hiChart = hiChart }
    };
    if (isModelling)
    {
        pattern.setModellingChart = chgChart;
    }
    else { pattern.setLanerChart = chgChart; };

    // Задаём параметры выполнения операции
    var tOp = new SetWbkMd
    {
        tWbk = wbk,
        tArg = new SetWbkMdArg
        {   // Задаём шаблон изменения данных
            pattern = pattern,
            // Задаём прочие параметры
            meta = new WbkMd(){},
            metaGet = new WbkMdPattern(){},
            refresh = new EaxRefresh() { }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполнение операции
    var sRes = somClient.SetWbkMd(tOp);
    SetChartResult chRes = new SetChartResult();
    if (isModelling) {chRes = sRes.meta.setModellingChart;}
    else { chRes = sRes.meta.setLanerChart; };
    Console.WriteLine("Моникер изменённой диаграммы: " + chRes.id.id);
    return sRes;
}


См. также:


[SetWbkMd:
 Операция](../SetWbkMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
