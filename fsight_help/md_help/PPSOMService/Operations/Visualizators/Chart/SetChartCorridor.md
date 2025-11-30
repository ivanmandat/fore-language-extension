# SetChartCorridor: Операция

SetChartCorridor: Операция
-


**


# SetChartCorridor


## Синтаксис


bool SetChartCorridor(ChartCorridorId tCorridor,
 SetChartCorridorArg tArg)


## Параметры


tCorridor. Моникёр
 коридора диаграммы.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetChartCorridor изменяет
 настройки коридора диаграммы.


## Комментарии


Для выполнения операции укажите в поле tCorridor
 моникёр коридора диаграммы, а в поле tArg
 устанавливаемые настройки. Моникёр может быть сформирован на основании
 моникёра диаграммы, указываемого в операциях [GetChart](../GetChart.htm),
 [SetChart](../SetChart.htm), [GetChartSeries](../GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!Corridors!«ключ коридора».


Результатом работы операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек коридора диаграммы. В запросе
 передаётся моникёр коридора и устанавливаемые настройки. В ответе возвращается
 признак успешного применения изменений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetChartCorridor xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCorridor xmlns="****">
  <id>EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Corridors!1</id>  </tCorridor>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<meta>
  <s1>3</s1>  <s2>4</s2>  <gf>false</gf>  <clr>#00FFFF</clr>  <tp>75</tp>  </meta>
  </tArg>
  </SetChartCorridor>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <SetChartCorridorResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetChartCorridorResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetChartCorridor" :
  {
   "tCorridor" :
    {
     "id" : "EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Corridors!1"
    },
   "tArg" :
    {
     "meta" :
      {
       "s1" : "3",
       "s2" : "4",
       "gf" : "false",
       "clr" : "#00FFFF",
       "tp" : "75"
      }
    }
  }
}

### JSON-ответ:


{
 "SetChartCorridorResult" : "1"
}


public static bool SetChartCorridor(string chartMoniker, string corridorKey)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetChartCorridor()
    {
        tCorridor = new ChartCorridorId
        {
            id = chartMoniker + "!Corridors!" + corridorKey
        },
        tArg = new SetChartCorridorArg()
        {
            meta = new ChartCorridor()
            {
                s1 = 3,
                s2 = 4,
                gf = false,
                clr = "#00FFFF", //Cyan
                tp = 75
            }
        }
    };
    // Создание коридора диаграммы
    var result = somClient.SetChartCorridor(tSet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
