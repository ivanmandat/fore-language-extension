# GetChartCorridor: Операция

GetChartCorridor: Операция
-


**


# GetChartCorridor


## Синтаксис


Result GetChartCorridor(ChartCorridorId tCorridor)


## Параметры


tCorridor. Моникёр
 для работы с коридором диаграммы.


## Описание


Операция GetChartCorridor получает
 настройки коридора диаграммы.


## Комментарии


Для выполнения операции укажите в поле tCorridor
 моникёр коридора диаграммы, а в поле tArg
 устанавливаемые настройки. Моникёр может быть сформирован на основании
 моникёра диаграммы, указываемого в операциях [GetChart](../GetChart.htm),
 [SetChart](../SetChart.htm), [GetChartSeries](../GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!Corridors!«ключ коридора».


Результатом работы операции будут полученные настройки коридора.


## Пример


Ниже приведён пример получения настроек коридора. В запросе передаётся
 моникёр коридора. В ответе возвращаются полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetChartCorridor xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCorridor xmlns="****">
  <id>EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Corridors!1</id>  </tCorridor>
  </GetChartCorridor>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetChartCorridorResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <s1 xmlns="****">2</s1>  <s2 xmlns="****">3</s2>  <gf xmlns="****">1</gf>  <clr xmlns="****">#EF9859</clr>  <tp xmlns="****">50</tp>  <name xmlns="****">Германия - Франция</name>  <dl xmlns="****">0</dl>  </GetChartCorridorResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartCorridor" :
  {
   "tCorridor" :
    {
     "id" : "EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Corridors!1"
    }
  }
}

### JSON-ответ:


{
 "GetChartCorridorResult" :
  {
   "s1" : "2",
   "s2" : "3",
   "gf" : "1",
   "clr" : "#EF9859",
   "tp" : "50",
   "name" : "Германия - Франция",
   "dl" : "0"
  }
}


public static ChartCorridor GetChartCorridor(string chartMoniker, string corridorKey)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartCorridor()
    {
        tCorridor = new ChartCorridorId
        {
            id = chartMoniker + "!Corridors!" + corridorKey
        }
    };
    // Получение настроек коридора диаграммы
    var result = somClient.GetChartCorridor(tGet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
