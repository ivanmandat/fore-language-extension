# RemoveChartCorridor: Операция

RemoveChartCorridor: Операция
-


**


# RemoveChartCorridor


## Синтаксис


bool RemoveChartCorridor(ChartCorridorsId tCorridors,
 ChartCorridorRemoveInfo tArg)


## Параметры


tCorridors. Моникёр
 для работы с коридорами диаграммы.


tArg. Параметры выполнения
 операции.


## Описание


Операция RemoveChartCorridor
 удаляет коридор диаграммы.


## Комментарии


Для выполнения операции укажите в поле tCorridors
 моникёр для работы с коридорами диаграммы, а в поле tArg
 параметры удаления коридора. Моникёр может быть сформирован на основании
 моникёра диаграммы, указываемого в операциях [GetChart](../GetChart.htm),
 [SetChart](../SetChart.htm), [GetChartSeries](../GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!Corridors.


Результатом выполнения операции будет логическое значение true,
 если удаление коридора завершилось успешно.


## Пример


Ниже приведён пример удаления коридора диаграммы. В запросе передаётся
 моникёр для работы с коридорами и индекс удаляемого коридора. В ответе
 возвращается признак успешного удаления коридора.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<RemoveChartCorridor xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCorridors xmlns="****">
  <id>EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Corridors</id>  </tCorridors>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <index>1</index>  </tArg>
  </RemoveChartCorridor>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <RemoveChartCorridorResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</RemoveChartCorridorResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RemoveChartCorridor" :
  {
   "tCorridors" :
    {
     "id" : "EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Corridors"
    },
   "tArg" :
    {
     "index" : "1"
    }
  }
}

### JSON-ответ:


{
 "RemoveChartCorridorResult" : "1"
}


public static bool RemoveChartCorridor(string chartMoniker, uint corridorIndex)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new RemoveChartCorridor()
    {
        tCorridors = new ChartCorridorsId
        {
            id = chartMoniker + "!Corridors"
        },
        tArg = new ChartCorridorRemoveInfo()
        {
            index = corridorIndex
        }
    };
    // Удаление коридора диаграммы
    var result = somClient.RemoveChartCorridor(tSet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
