# GetChartGraphArea: Операция

GetChartGraphArea: Операция
-


**


# GetChartGraphArea


## Синтаксис


ChartGraphArea GetChartGraphArea(ChartGraphAreaId
 tGraphArea)


## Параметры


tGraphArea. Моникёр
 области построения диаграммы.


## Описание


Операция GetChartGraphArea получает
 настройки области построения диаграммы.


## Комментарии


Для выполнения операции укажите в поле tGraphArea
 моникёр области построения. Моникёр может быть сформирован на основании
 моникёра диаграммы, указываемого в операциях [GetChart](../GetChart.htm),
 [SetChart](../SetChart.htm), [GetChartSeries](../GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!GraphArea.


Результатом работы операции будут полученные настройки области построения.


## Пример


Ниже приведён пример получения настроек области построения диаграммы.
 В запросе передаётся моникёр для работы с областью построения. В ответе
 возвращаются полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetChartGraphArea xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tGraphArea xmlns="****">
  <id>EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!GraphArea</id>  </tGraphArea>
  </GetChartGraphArea>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetChartGraphAreaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<bg xmlns="****">
  <type>2</type>[![](../../../minus.gif)](../../../#)<gfill>
  <cf>#00FF00</cf>  <ct>#00FFFF</ct>  <tp>0</tp>  <a>45</a>  </gfill>
  </bg>
[![](../../../minus.gif)](../../../#)<bd xmlns="****">
  <clr>#000000</clr>  <s>0</s>  <w>0.25</w>  <enabled>1</enabled>  </bd>
  </GetChartGraphAreaResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartGraphArea" :
  {
   "tGraphArea" :
    {
     "id" : "EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!GraphArea"
    }
  }
}

### JSON-ответ:


{
 "GetChartGraphAreaResult" :
  {
   "bg" :
    {
     "type" : "2",
     "gfill" :
      {
       "cf" : "#00FF00",
       "ct" : "#00FFFF",
       "tp" : "0",
       "a" : "45"
      }
    },
   "bd" :
    {
     "clr" : "#000000",
     "s" : "0",
     "w" : "0.25",
     "enabled" : "1"
    }
  }
}


public static ChartGraphArea GetChartGraphArea(string chartMoniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartGraphArea()
    {
        tGraphArea = new ChartGraphAreaId()
        {
            id = chartMoniker + "!GraphArea"
        }
    };
    // Получение настроек области построения
    var result = somClient.GetChartGraphArea(tGet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
