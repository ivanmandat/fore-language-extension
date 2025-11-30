# GetDefaultChart: Операция

GetDefaultChart: Операция
-


**


# GetDefaultChart


## Синтаксис


GetDefaultChartResult GetDefaultChart(GetChartArg
 tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDefaultChart позволяет
 получить новую диаграмму с настройками по умолчанию.


## Комментарии


Для выполнения операции укажите в поле tArg.pattern
 шаблон, в соответствии с которым будут получены настройки новой диаграммы.
 Полученные настройки не будут иметь собственного моникёра, их значения
 можно применить к диаграммам различных инструментов продукта «Форсайт. Аналитическая платформа»
 с помощью операции [SetChart](SetChart.htm).


## Пример


Ниже приведен пример использования операции GetDefaultChart
 для получения диаграммы с настройками по умолчанию.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDefaultChart xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <hiChart>true</hiChart>  </pattern>
  </tArg>
  </GetDefaultChart>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDefaultChartResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id />
  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
  <hiChart>{"StyleContainer": {"SCK": "-1","SCT": "0"},"chart": {"areaBorderEnabled": false,"auto": false,"backgroundColor": "rgba(255, 255, 255, 1.000000)","borderColor": "#909090","borderRadius": 0,"borderWidth": 0.666663289070129,"chartAsImage": false,"defaultSeriesType": "column","displayVolume3D": false,"excludeInvisibleSeries": false,"gaAutoPlaced": true,"gaRect": {"borderWidth": 0,"bottomMargin": 0,"height": 0,"leftMargin": 0,"rheight": 0,"rightMargin": 0,"rwidth": 0,"rx": 0,"ry": 0,"topMargin": 0,"width": 0,"x": 0,"y": 0},"gapWidthCoef": 1.5,"inverted": false,"isManhattan": false,"marginLeft": 80,"marginRight": 50,"overlapCoef": 0,"plotBackgroundColor": {"linearGradient": {"angle": 90,"opacity": 1,"x1": 0,"x2": "100%","y1": 0,"y2": 0},"stops": [[0,"#dddddd"],[1,"#ffffff"]]},"plotBorderColor": "#909090","plotBorderEnabled": false,"plotBorderWidth": 0.666663289070129,"renderTo": "container","scroller": {"enabled": false,"maxPointsInSight": -1,"position": 0},"secondaryGapWidthCoef": 1.5,"secondaryOverlapCoef": 0,"separateSecondaryAxis": true,"seriesOrder": "forward","stockStyle": "lowHighClose","useZeroSubstitution": false},"defaultSerie": {"autoRotateMarkerSerie": 0,"background": {"type": "auto"},"borderPenEnabled": false,"borderWidth": 1.33332657814026,"brushEnabled": true,"dashStyle": "solid","emptyDashStyle": "none","emptyLineColor": "#909090","emptyLinePenEnabled": false,"emptyLineWidth": 1.33332657814026,"inheritanceMask": "65536","is3DBorder": false,"lineColor": "rgba(0, 0, 0, 1.000000)","linePenEnabled": true,"lineWidth": 1.99999988079071,"marker": {"enabled": true},"shadow": false,"showInLegend": true,"useSplineSmoothing": false,"visible": true},"legend": {"align": "center","autoMargin": true,"autoPlaced": true,"backgroundColor": null,"borderColor": "#909090","borderEnabled": false,"borderWidth": 0.0881939977407455,"elementVerticalAlign": "middle","enabled": true,"isMultiline": false,"itemStyle": {"color": "#918f8d","fontFamily": "Tahoma","fontSize": "8.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"},"layout": "horizontal","rect": {"borderWidth": 0,"bottomMargin": 0,"height": 0,"leftMargin": 0,"rheight": 0,"rightMargin": 0,"rwidth": 0,"rx": 0,"ry": 0,"topMargin": 0,"width": 0,"x": 0,"y": 0},"textAlign": "center","textAngle": 0,"verticalAlign": "bottom"},"plotOptions": {"series": {"connectNulls": true,"dataLabels": {"color": "rgba(145, 143, 141, 1.000000)","enabled": false,"formatter": "%Autovalue","inheritanceMask": 4194304,"position": "auto","rotation": 0,"style": {"color": "#918f8d","fontFamily": "Tahoma","fontSize": "7.999371pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"}},"markersThinning": false,"stacking": null}},"series": [],"template": "","title": {"autoMargin": true,"autoPlaced": true,"rect": {"borderWidth": 0,"bottomMargin": 0,"height": 0,"leftMargin": 0,"rheight": 0,"rightMargin": 0,"rwidth": 0,"rx": 0,"ry": 0,"topMargin": 0,"width": 0,"x": 0,"y": 0},"style": {"backgroundColor": null,"borderColor": "#909090","borderStyle": "none","borderWidth": 0,"color": "#918f8d","fontFamily": "Tahoma","fontSize": "14.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"},"text": "","textAlign": "center","textAngle": 0},"tooltip": {"backgroundColor": "rgba(255, 255, 255, 1.000000)","backgroundType": "color","borderColor": "#7f7f7f","borderType": "solid","borderWidth": 1.33332657814026,"commonFormat": "","dataFormat": "","enabled": false,"formatter": "%Autovalue","horizontalAlignment": "left","isCustomFormat": false,"style": {"color": "#918f8d","fontFamily": "Tahoma","fontSize": "8.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"},"useIndicatorColorForBorder": true},"xAxis": {"axisXPlacement": "betweenticks","categories": [],"gridLineColor": "rgba(255, 255, 255, 1.000000)","gridLineDashStyle": "solid","gridLineEnabled": true,"gridLineWidth": 0.666663289070129,"includeZero": false,"labels": {"align": "near","enabled": true,"rotation": 0,"spacing": true,"style": {"color": "#918f8d","fontFamily": "Tahoma","fontSize": "8.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"}},"lineColor": "rgba(224, 224, 224, 1.000000)","lineEnabled": true,"lineWidth": 0.333331644535065,"minorGridLineColor": "rgba(255, 255, 255, 1.000000)","minorGridLineDashStyle": "solid","minorGridLineEnabled": false,"minorGridLineWidth": 0.666663289070129,"opposite": false,"position": "auto","reversed": false,"showMarksForHiddenLabels": false,"step": 1,"stepAuto": true,"textIsStagger": false,"textIsStaggerOddFirst": true,"textMultiline": "byWords","tickColor": "#909090","tickEnabled": false,"tickMarksInterval": 1,"tickWidth": 0.333331644535065,"tickmarkPlacement": "on","title": {"autoMargin": true,"autoPlaced": true,"rect": {"borderWidth": 0,"bottomMargin": 0,"height": 0,"leftMargin": 0,"rightMargin": 0,"topMargin": 0,"width": 0,"x": 0,"y": 0},"style": {"backgroundColor": null,"borderColor": "#909090","borderStyle": "none","borderWidth": 0,"color": "#918f8d","fontFamily": "Tahoma","fontSize": "10.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"},"text": "","textAlign": "center","textAngle": 0},"visible": true},"yAxis": {"displayUnit": "none","gridLineColor": "rgba(255, 255, 255, 1.000000)","gridLineDashStyle": "solid","gridLineEnabled": true,"gridLineType": "lines","gridLineWidth": 0.666663289070129,"includeZero": false,"labels": {"align": "center","dataFormat": "","enabled": true,"normalizedDataFormat": "","rotation": 0,"spacing": true,"style": {"color": "#918f8d","fontFamily": "Tahoma","fontSize": "8.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"}},"lineColor": "rgba(255, 255, 255, 1.000000)","lineEnabled": true,"lineWidth": 0.333331644535065,"max": null,"min": null,"minorGridLineColor": "rgba(255, 255, 255, 1.000000)","minorGridLineDashStyle": "solid","minorGridLineEnabled": false,"minorGridLineWidth": 0.666663289070129,"opposite": false,"position": "auto","reversed": false,"tickColor": "#909090","tickEnabled": false,"tickInterval": null,"tickWidth": 0.333331644535065,"title": {"autoMargin": true,"autoPlaced": true,"rect": {"borderWidth": 0,"bottomMargin": 0,"height": 0,"leftMargin": 0,"rightMargin": 0,"topMargin": 0,"width": 0,"x": 0,"y": 0},"style": {"backgroundColor": null,"borderColor": "#909090","borderStyle": "none","borderWidth": 0,"color": "#918f8d","fontFamily": "Tahoma","fontSize": "10.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"},"text": "","textAlign": "center","textAngle": 90},"type": "linear","visible": true}}</hiChart>  </meta>
  </GetDefaultChartResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "GetDefaultChart" :
  {
   "tArg" :
    {
     "pattern" :
      {
       "hiChart" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetDefaultChartResult" :
  {
   "id" :
    {
     "id" : ""
    },
   "meta" :
    {
     "hiChart" : "{"StyleContainer": {"SCK": "-1","SCT": "0"},"chart": {"areaBorderEnabled": false,"auto": false,"backgroundColor": "rgba(255, 255, 255, 1.000000)","borderColor": "#909090","borderRadius": 0,"borderWidth": 0.666663289070129,"chartAsImage": false,"defaultSeriesType": "column","displayVolume3D": false,"excludeInvisibleSeries": false,"gaAutoPlaced": true,"gaRect": {"borderWidth": 0,"bottomMargin": 0,"height": 0,"leftMargin": 0,"rheight": 0,"rightMargin": 0,"rwidth": 0,"rx": 0,"ry": 0,"topMargin": 0,"width": 0,"x": 0,"y": 0},"gapWidthCoef": 1.5,"inverted": false,"isManhattan": false,"marginLeft": 80,"marginRight": 50,"overlapCoef": 0,"plotBackgroundColor": {"linearGradient": {"angle": 90,"opacity": 1,"x1": 0,"x2": "100%","y1": 0,"y2": 0},"stops": [[0,"#dddddd"],[1,"#ffffff"]]},"plotBorderColor": "#909090","plotBorderEnabled": false,"plotBorderWidth": 0.666663289070129,"renderTo": "container","scroller": {"enabled": false,"maxPointsInSight": -1,"position": 0},"secondaryGapWidthCoef": 1.5,"secondaryOverlapCoef": 0,"separateSecondaryAxis": true,"seriesOrder": "forward","stockStyle": "lowHighClose","useZeroSubstitution": false},"defaultSerie": {"autoRotateMarkerSerie": 0,"background": {"type": "auto"},"borderPenEnabled": false,"borderWidth": 1.33332657814026,"brushEnabled": true,"dashStyle": "solid","emptyDashStyle": "none","emptyLineColor": "#909090","emptyLinePenEnabled": false,"emptyLineWidth": 1.33332657814026,"inheritanceMask": "65536","is3DBorder": false,"lineColor": "rgba(0, 0, 0, 1.000000)","linePenEnabled": true,"lineWidth": 1.99999988079071,"marker": {"enabled": true},"shadow": false,"showInLegend": true,"useSplineSmoothing": false,"visible": true},"legend": {"align": "center","autoMargin": true,"autoPlaced": true,"backgroundColor": null,"borderColor": "#909090","borderEnabled": false,"borderWidth": 0.0881939977407455,"elementVerticalAlign": "middle","enabled": true,"isMultiline": false,"itemStyle": {"color": "#918f8d","fontFamily": "Tahoma","fontSize": "8.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"},"layout": "horizontal","rect": {"borderWidth": 0,"bottomMargin": 0,"height": 0,"leftMargin": 0,"rheight": 0,"rightMargin": 0,"rwidth": 0,"rx": 0,"ry": 0,"topMargin": 0,"width": 0,"x": 0,"y": 0},"textAlign": "center","textAngle": 0,"verticalAlign": "bottom"},"plotOptions": {"series": {"connectNulls": true,"dataLabels": {"color": "rgba(145, 143, 141, 1.000000)","enabled": false,"formatter": "%Autovalue","inheritanceMask": 4194304,"position": "auto","rotation": 0,"style": {"color": "#918f8d","fontFamily": "Tahoma","fontSize": "7.999371pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"}},"markersThinning": false,"stacking": null}},"series": [],"template": "","title": {"autoMargin": true,"autoPlaced": true,"rect": {"borderWidth": 0,"bottomMargin": 0,"height": 0,"leftMargin": 0,"rheight": 0,"rightMargin": 0,"rwidth": 0,"rx": 0,"ry": 0,"topMargin": 0,"width": 0,"x": 0,"y": 0},"style": {"backgroundColor": null,"borderColor": "#909090","borderStyle": "none","borderWidth": 0,"color": "#918f8d","fontFamily": "Tahoma","fontSize": "14.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"},"text": "","textAlign": "center","textAngle": 0},"tooltip": {"backgroundColor": "rgba(255, 255, 255, 1.000000)","backgroundType": "color","borderColor": "#7f7f7f","borderType": "solid","borderWidth": 1.33332657814026,"commonFormat": "","dataFormat": "","enabled": false,"formatter": "%Autovalue","horizontalAlignment": "left","isCustomFormat": false,"style": {"color": "#918f8d","fontFamily": "Tahoma","fontSize": "8.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"},"useIndicatorColorForBorder": true},"xAxis": {"axisXPlacement": "betweenticks","categories": [],"gridLineColor": "rgba(255, 255, 255, 1.000000)","gridLineDashStyle": "solid","gridLineEnabled": true,"gridLineWidth": 0.666663289070129,"includeZero": false,"labels": {"align": "near","enabled": true,"rotation": 0,"spacing": true,"style": {"color": "#918f8d","fontFamily": "Tahoma","fontSize": "8.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"}},"lineColor": "rgba(224, 224, 224, 1.000000)","lineEnabled": true,"lineWidth": 0.333331644535065,"minorGridLineColor": "rgba(255, 255, 255, 1.000000)","minorGridLineDashStyle": "solid","minorGridLineEnabled": false,"minorGridLineWidth": 0.666663289070129,"opposite": false,"position": "auto","reversed": false,"showMarksForHiddenLabels": false,"step": 1,"stepAuto": true,"textIsStagger": false,"textIsStaggerOddFirst": true,"textMultiline": "byWords","tickColor": "#909090","tickEnabled": false,"tickMarksInterval": 1,"tickWidth": 0.333331644535065,"tickmarkPlacement": "on","title": {"autoMargin": true,"autoPlaced": true,"rect": {"borderWidth": 0,"bottomMargin": 0,"height": 0,"leftMargin": 0,"rightMargin": 0,"topMargin": 0,"width": 0,"x": 0,"y": 0},"style": {"backgroundColor": null,"borderColor": "#909090","borderStyle": "none","borderWidth": 0,"color": "#918f8d","fontFamily": "Tahoma","fontSize": "10.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"},"text": "","textAlign": "center","textAngle": 0},"visible": true},"yAxis": {"displayUnit": "none","gridLineColor": "rgba(255, 255, 255, 1.000000)","gridLineDashStyle": "solid","gridLineEnabled": true,"gridLineType": "lines","gridLineWidth": 0.666663289070129,"includeZero": false,"labels": {"align": "center","dataFormat": "","enabled": true,"normalizedDataFormat": "","rotation": 0,"spacing": true,"style": {"color": "#918f8d","fontFamily": "Tahoma","fontSize": "8.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"}},"lineColor": "rgba(255, 255, 255, 1.000000)","lineEnabled": true,"lineWidth": 0.333331644535065,"max": null,"min": null,"minorGridLineColor": "rgba(255, 255, 255, 1.000000)","minorGridLineDashStyle": "solid","minorGridLineEnabled": false,"minorGridLineWidth": 0.666663289070129,"opposite": false,"position": "auto","reversed": false,"tickColor": "#909090","tickEnabled": false,"tickInterval": null,"tickWidth": 0.333331644535065,"title": {"autoMargin": true,"autoPlaced": true,"rect": {"borderWidth": 0,"bottomMargin": 0,"height": 0,"leftMargin": 0,"rightMargin": 0,"topMargin": 0,"width": 0,"x": 0,"y": 0},"style": {"backgroundColor": null,"borderColor": "#909090","borderStyle": "none","borderWidth": 0,"color": "#918f8d","fontFamily": "Tahoma","fontSize": "10.000000pt","fontStyle": "normal","fontWeight": "normal","textDecoration": "none"},"text": "","textAlign": "center","textAngle": 90},"type": "linear","visible": true}}"
    }
  }
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


public static GetDefaultChartResult GetNewHiChart()
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetDefaultChart()
    {
        tArg = new GetChartArg()
        {
            pattern = new ChartMdPattern()
            {
                hiChart = true
            }
        }
    };
    // Получаем настройки диаграммы
    var result = somClient.GetDefaultChart(tGet);
    return result;
}


См. также:


[Интерактивные
 визуальные компоненты](Visualizators_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
