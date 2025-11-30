# MoveChartSerie: Операция

MoveChartSerie: Операция
-


**


# MoveChartSerie


## Синтаксис


Result MoveChartSerie(SeriesId tSeries, PosFromTo
 pos)


## Параметры


tSeries. Моникёр
 коллекции рядов диаграммы.


pos. Параметры перемещения
 рядов.


## Описание


Операция MoveChartSerie перемещает
 ряды диаграммы.


## Комментарии


Для выполнения операции укажите в поле tSeries
 моникёр рядов, а в поле tArg
 параметры перемещения рядов. Моникёр может быть сформирован на основании
 моникёра диаграммы, указываемого в операциях [GetChart](GetChart.htm),
 [SetChart](SetChart.htm), [GetChartSeries](GetChartSeries.htm).
 Формат моникёра: «Моникёр диаграммы»!Series.


Результатом работы операции будет логическое значение true,
 если перемещение завершилось успешно.


## Пример


Ниже приведён пример перемещения двух рядов на диаграмме, добавленной
 на лист регламентного отчёта. В запросе передаётся моникёр для работы
 с рядами диаграммы и параметры перемещения рядов. В ответе приходит признак
 удачного перемещения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<MoveChartSerie xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tSeries xmlns="****">
  <id>S2!M!S!P1!Sheets!1!Objects!PrxChart1!Series</id>  </tSeries>
[![](../../minus.gif)](../../#)<pos xmlns="****">
  <from>0</from>  <to>1</to>  </pos>
  </MoveChartSerie>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <MoveChartSerieResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</MoveChartSerieResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "MoveChartSerie" :
  {
   "tSeries" :
    {
     "id" : "S2!M!S!P1!Sheets!1!Objects!PrxChart1!Series"
    },
   "pos" :
    {
     "from" : "0",
     "to" : "1"
    }
  }
}

### JSON-ответ:


{
 "MoveChartSerieResult" : "1"
}


public static bool MoveSeries(string chartMoniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new MoveChartSerie()
    {
        tSeries = new SeriesId() { id = chartMoniker + "!Series"},
        pos = new PosFromTo() { from = 0, to = 1 }
    };
    // Перемещение рядов диаграммы
    var result = somClient.MoveChartSerie(tGet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
