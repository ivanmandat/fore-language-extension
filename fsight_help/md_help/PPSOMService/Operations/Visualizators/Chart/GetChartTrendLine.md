# GetChartTrendLine: Операция

GetChartTrendLine: Операция
-


**


# GetChartTrendLine


## Синтаксис


GetChartTrendLine GetChartTrendLine(SerieId tSerie)


## Параметры


tSerie. Моникёр
 ряда диаграммы.


## Описание


Операция GetChartTrendLine получает
 настройки линии тренда для ряда данных.


## Комментарии


Для выполнения операции укажите в поле tSerie
 моникёр ряда. Моникёр может быть сформирован на основании моникёра диаграммы,
 указываемого в операциях [GetChart](../GetChart.htm), [SetChart](../SetChart.htm),
 [GetChartSeries](../GetChartSeries.htm). Моникёр формируется
 в одном из следующих форматов:


	- «Моникёр диаграммы»!Series!Default.
	 Для работы с настройками ряда диаграммы по умолчанию.


	- «Моникёр диаграммы»!Series!«Индекс
	 ряда». Для работы с настройками ряда диаграммы с указанным
	 индексом. Индексация начинается с нуля.


Результатом работы операции будут полученные настройки линии тренда
 для ряда диаграммы.


## Пример


Ниже приведён пример получения настроек линии тренда для ряда диаграммы.
 В запросе передаётся моникёр ряда. В ответе возвращаются полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetChartTrendLine xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tSerie xmlns="****">
  <id>EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Series!1</id>  </tSerie>
  </GetChartTrendLine>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetChartTrendLineResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <e xmlns="****">1</e>  <tt xmlns="****">2</tt>[![](../../../minus.gif)](../../../#)<ls xmlns="****">
  <clr>#000000</clr>  <s>0</s>  <w>1.5</w>  </ls>
  <dil xmlns="****">0</dil>  <uat xmlns="****">1</uat>  <fwd xmlns="****">0</fwd>  <bwd xmlns="****">0</bwd>  </GetChartTrendLineResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartTrendLine" :
  {
   "tSerie" :
    {
     "id" : "EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Series!1"
    }
  }
}

### JSON-ответ:


{
 "GetChartTrendLineResult" :
  {
   "e" : "1",
   "tt" : "2",
   "ls" :
    {
     "clr" : "#000000",
     "s" : "0",
     "w" : "1.5"
    },
   "dil" : "0",
   "uat" : "1",
   "fwd" : "0",
   "bwd" : "0"
  }
}


public static ChartTrendLine GetChartTrendLine(string chartMoniker, ulong serieNumber)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartTrendLine()
    {
        tSerie = new SerieId() { id = chartMoniker + "!Series!" + serieNumber }
    };
    // Получение настроек линии тренда
    var result = somClient.GetChartTrendLine(tGet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
