# GetChartSerie: Операция

GetChartSerie: Операция
-


**


# GetChartSerie


## Синтаксис


ChartSerie GetChartSerie(SerieId tSerie)


## Параметры


tSerie. Моникёр
 ряда диаграммы.


## Описание


Операция GetChartSerie получает
 настройки ряда диаграммы.


## Комментарии


Для выполнения операции укажите в поле tSerie
 моникёр ряда. Моникёр может быть сформирован на основании моникёра диаграммы,
 указываемого в операциях [GetChart](GetChart.htm), [SetChart](SetChart.htm),
 [GetChartSeries](GetChartSeries.htm). Моникёр формируется в
 одном из следующих форматов:


	- «Моникёр диаграммы»!Series!Default.
	 Для работы с настройками ряда диаграммы по умолчанию.


	- «Моникёр диаграммы»!Series!«Индекс
	 ряда». Для работы с настройками ряда диаграммы с указанным
	 индексом. Индексация начинается с нуля.


Результатом работы операции будут полученные настройки ряда диаграммы.


## Пример


Ниже приведён пример получения настроек ряда диаграммы, добавленной
 на лист регламентного отчёта. В запросе передаётся моникёр ряда. В ответе
 приходят полученные настройки ряда.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetChartSerie xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tSerie xmlns="****">
  <id>S2!M!S!P1!Sheets!1!Objects!PrxChart1!Series!0</id>  </tSerie>
  </GetChartSerie>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetChartSerieResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <type xmlns="****">8</type>  <name xmlns="****" />
  <dil xmlns="****">1</dil>  <asa xmlns="****">0</asa>[![](../../minus.gif)](../../#)<bd xmlns="****">
  <enabled>1</enabled>  <clr>#488DB1</clr>  <s>0</s>  <w>0.25</w>  </bd>
  <imask xmlns="****">167903231</imask>  </GetChartSerieResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartSerie" :
  {
   "tSerie" :
    {
     "id" : "S2!M!S!P1!Sheets!1!Objects!PrxChart1!Series!0"
    }
  }
}

### JSON-ответ:


{
 "GetChartSerieResult" :
  {
   "type" : "8",
   "name" : "",
   "dil" : "1",
   "asa" : "0",
   "bd" :
    {
     "enabled" : "1",
     "clr" : "#488DB1",
     "s" : "0",
     "w" : "0.25"
    },
   "imask" : "167903231"
  }
}


public static ChartSerie GetChartSerie(string chartMoniker, uint serieNumber)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartSerie()
    {
        tSerie = new SerieId() { id = chartMoniker + "!Series!" + serieNumber }
    };
    // Получаем настройки рядя диаграммы
    var result = somClient.GetChartSerie(tGet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
