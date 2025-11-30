# GetChartCorridors: Операция

GetChartCorridors: Операция
-


**


# GetChartCorridors


## Синтаксис


Result GetChartCorridors(ChartCorridorsId tCorridors)


## Параметры


tCorridors. Моникёр
 для работы с коридорами диаграммы.


## Описание


Операция GetChartCorridors получает
 настройки коридоров диаграммы.


## Комментарии


Для выполнения операции укажите в поле tCorridors
 моникёр коридора диаграммы, а в поле tArg
 устанавливаемые настройки. Моникёр может быть сформирован на основании
 моникёра диаграммы, указываемого в операциях [GetChart](../GetChart.htm),
 [SetChart](../SetChart.htm), [GetChartSeries](../GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!Corridors.


Результатом работы операции будут полученные настройки коридоров.


## Пример


Ниже приведён пример получения настроек коридоров диаграммы. В запросе
 передаётся моникёр для работы с коридорами. В ответе возвращаются полученные
 настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetChartCorridors xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCorridors xmlns="****">
  <id>EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Corridors</id>  </tCorridors>
  </GetChartCorridors>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetChartCorridorsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<corridors xmlns="****">
[![](../../../minus.gif)](../../../#)<it>
  <s1>0</s1>  <s2>1</s2>  <gf>1</gf>  <clr>#705E70</clr>  <tp>62</tp>  <name>США - Канада</name>  <dl>1</dl>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <s1>2</s1>  <s2>3</s2>  <gf>1</gf>  <clr>#EF9859</clr>  <tp>50</tp>  <name>Германия - Франция</name>  <dl>0</dl>  </it>
  </corridors>
  </GetChartCorridorsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartCorridors" :
  {
   "tCorridors" :
    {
     "id" : "EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Corridors"
    }
  }
}

### JSON-ответ:


{
 "GetChartCorridorsResult" :
  {
   "corridors" :
    {
     "it" :
      [
        {
         "s1" : "0",
         "s2" : "1",
         "gf" : "1",
         "clr" : "#705E70",
         "tp" : "62",
         "name" : "США - Канада",
         "dl" : "1"
        },
        {
         "s1" : "2",
         "s2" : "3",
         "gf" : "1",
         "clr" : "#EF9859",
         "tp" : "50",
         "name" : "Германия - Франция",
         "dl" : "0"
        }
      ]
    }
  }
}


public static ChartCorridors GetChartCorridors(string chartMoniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartCorridors()
    {
        tCorridors = new ChartCorridorsId
        {
            id = chartMoniker + "!Corridors"
        }
    };
    // Получение коридоров диаграммы
    var result = somClient.GetChartCorridors(tGet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
