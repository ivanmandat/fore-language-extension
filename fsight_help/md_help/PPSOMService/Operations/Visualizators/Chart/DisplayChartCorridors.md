# DisplayChartCorridors: Операция

DisplayChartCorridors: Операция
-


**


# DisplayChartCorridors


## Синтаксис


bool DisplayChartCorridors(ChartCorridorsId tCorridors,
 ChartCorridorsDisplayInfo tArg)


## Параметры


tCorridors. Моникёр
 для работы с коридорами диаграммы.


tArg. Настройки отображения
 коридоров в легенде диаграммы.


## Описание


Операция DisplayChartCorridors
 изменяет настройки отображения коридоров в легенде диаграммы.


## Комментарии


Для выполнения операции укажите в поле tCorridors
 моникёр для работы с коридорами диаграммы, а в поле tArg
 устанавливаемые настройки отображения коридоров. Моникёр может быть сформирован
 на основании моникёра диаграммы, указываемого в операциях [GetChart](../GetChart.htm),
 [SetChart](../SetChart.htm), [GetChartSeries](../GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!Corridors.


Результатом выполнения операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек отображения коридоров в легенде
 диаграммы. В запросе передаётся моникёр для работы с коридорами и признак
 отображения коридоров в легенде диаграммы. В ответе возвращается признак
 успешного изменения настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<DisplayChartCorridors xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCorridors xmlns="****">
  <id>EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Corridors</id>  </tCorridors>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <dl>true</dl>  </tArg>
  </DisplayChartCorridors>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <DisplayChartCorridorsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DisplayChartCorridorsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DisplayChartCorridors" :
  {
   "tCorridors" :
    {
     "id" : "EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Corridors"
    },
   "tArg" :
    {
     "dl" : "true"
    }
  }
}

### JSON-ответ:


{
 "DisplayChartCorridorsResult" : "1"
}


public static bool DisplayChartCorridors(string chartMoniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new DisplayChartCorridors()
    {
        tCorridors = new ChartCorridorsId
        {
            id = chartMoniker + "!Corridors"
        },
        tArg = new ChartCorridorsDisplayInfo()
        {
            dl = true
        }
    };
    // Настройка отображения коридоров в легенде
    var result = somClient.DisplayChartCorridors(tSet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
