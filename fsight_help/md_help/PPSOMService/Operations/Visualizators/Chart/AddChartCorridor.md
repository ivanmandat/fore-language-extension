# AddChartCorridor: Операция

AddChartCorridor: Операция
-


**


# AddChartCorridor


## Синтаксис


ChartCorridorKey AddChartCorridor(ChartCorridorsId
 tCorridors, SetChartCorridorArg tArg)


## Параметры


tCorridors. Моникёр
 для работы с коридорами диаграммы.


tArg. Параметры выполнения
 операции.


## Описание


Операция AddChartCorridor создаёт
 коридор для диаграммы.


## Комментарии


Для выполнения операции укажите в поле tCorridors
 моникёр для работы с коридорами диаграммы, а в поле tArg
 параметры создаваемого коридора. Моникёр может быть сформирован на основании
 моникёра диаграммы, указываемого в операциях [GetChart](../GetChart.htm),
 [SetChart](../SetChart.htm), [GetChartSeries](../GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!Corridors.


Результатом выполнения операции будет ключ созданного коридора.


## Пример


Ниже приведён пример добавления коридора для диаграммы. В запросе передаётся
 моникёр для работы с коридорами и параметры добавляемого коридора. В ответе
 возвращается ключ созданного коридора.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<AddChartCorridor xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCorridors xmlns="****">
  <id>EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Corridors</id>  </tCorridors>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<meta>
  <s1>2</s1>  <s2>3</s2>  <gf>true</gf>  <tp>50</tp>  </meta>
  </tArg>
  </AddChartCorridor>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<AddChartCorridorResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">1</k>  </AddChartCorridorResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "AddChartCorridor" :
  {
   "tCorridors" :
    {
     "id" : "EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Corridors"
    },
   "tArg" :
    {
     "meta" :
      {
       "s1" : "2",
       "s2" : "3",
       "gf" : "true",
       "tp" : "50"
      }
    }
  }
}

### JSON-ответ:


{
 "AddChartCorridorResult" :
  {
   "k" : "1"
  }
}


public static ChartCorridorKey AddChartCorridor(string chartMoniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tAdd = new AddChartCorridor()
    {
        tCorridors = new ChartCorridorsId
        {
            id = chartMoniker + "!Corridors"
        },
        tArg = new SetChartCorridorArg()
        {
            meta = new ChartCorridor()
            {
                s1 = 2,
                s2 = 3,
                gf = true,
                tp = 50
            }
        }
    };
    // Создание коридора диаграммы
    var result = somClient.AddChartCorridor(tAdd);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
