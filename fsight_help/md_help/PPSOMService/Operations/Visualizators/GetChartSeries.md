# GetChartSeries: Операция

GetChartSeries: Операция
-


**


# GetChartSeries


## Синтаксис


ChartSeries GetChartSeries(ChartId tChart)


## Параметры


tChart. Моникёр
 диаграммы.


## Описание


Операция GetChartSeries получает
 настройки рядов диаграммы.


## Комментарии


Для выполнения операции укажите в поле tChart
 моникёр диаграммы. Моникёр диаграммы строится на базе моникера объекта
 репозитория, с диаграммой которого осуществляется работа, по следующим
 правилам:


	- «Моникёр экземпляра экспресс-отчета»!Chart.
	 Диаграмма экспресс-отчета (если в экспресс-отчете один лист);


	- «Моникёр экземпляра экспресс-отчета»!Sheets!«Ключ
	 листа»!Chart. Диаграмма заданного листа экспресс-отчета (если
	 в экспресс-отчете несколько листов);


	- «Моникёр экземпляра рабочей
	 книги»!Chart. Диаграмма рабочей книги (если в рабочей книге
	 один лист);


	- «Моникёр экземпляра рабочей
	 книги»!Sheets!«Ключ листа»!Chart. Диаграмма заданного листа
	 рабочей книги (если в рабочей книге несколько листов);


	- «Моникёр экземпляра регламентного
	 отчета»!Sheets!«Ключ листа»!Objects!«Идентификатор диаграммы».
	 Диаграмма, расположенная на листе регламентного отчета.


Результатом работы операции будут настройки рядов диаграммы.


## Пример


Ниже приведён пример получения настроек рядов диаграммы, добавленной
 на лист регламентного отчёта. В запросе передаётся моникёр диаграммы.
 В ответе приходят полученные настройки рядов.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetChartSeries xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tChart xmlns="****">
  <id>S2!M!S!P1!Sheets!1!Objects!PrxChart1</id>  </tChart>
  </GetChartSeries>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetChartSeriesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<series xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <def>1</def>  <type>8</type>[![](../../minus.gif)](../../#)<bd>
  <enabled>0</enabled>  </bd>
  <imask>41680900</imask>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>8</type>  <name />
  <dil>1</dil>  <asa>0</asa>[![](../../minus.gif)](../../#)<bd>
  <enabled>1</enabled>  <clr>#488DB1</clr>  <s>0</s>  <w>0.25</w>  </bd>
  <imask>167903231</imask>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>8</type>  <name />
  <dil>1</dil>  <asa>0</asa>[![](../../minus.gif)](../../#)<bd>
  <enabled>1</enabled>  <clr>#4AA86B</clr>  <s>0</s>  <w>0.25</w>  </bd>
  <imask>167903231</imask>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>8</type>  <name />
  <dil>1</dil>  <asa>0</asa>[![](../../minus.gif)](../../#)<bd>
  <enabled>1</enabled>  <clr>#C3A83D</clr>  <s>0</s>  <w>0.25</w>  </bd>
  <imask>167903231</imask>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>8</type>  <name />
  <dil>1</dil>  <asa>0</asa>[![](../../minus.gif)](../../#)<bd>
  <enabled>1</enabled>  <clr>#D45B5B</clr>  <s>0</s>  <w>0.25</w>  </bd>
  <imask>167903231</imask>  </it>
  </series>
  </GetChartSeriesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartSeries" :
  {
   "tChart" :
    {
     "id" : "S2!M!S!P1!Sheets!1!Objects!PrxChart1"
    }
  }
}

### JSON-ответ:


{
 "GetChartSeriesResult" :
  {
   "series" :
    {
     "it" :
      [
        {
         "def" : "1",
         "type" : "8",
         "bd" :
          {
           "enabled" : "0"
          },
         "imask" : "41680900"
        },
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
        },
        {
         "type" : "8",
         "name" : "",
         "dil" : "1",
         "asa" : "0",
         "bd" :
          {
           "enabled" : "1",
           "clr" : "#4AA86B",
           "s" : "0",
           "w" : "0.25"
          },
         "imask" : "167903231"
        },
        {
         "type" : "8",
         "name" : "",
         "dil" : "1",
         "asa" : "0",
         "bd" :
          {
           "enabled" : "1",
           "clr" : "#C3A83D",
           "s" : "0",
           "w" : "0.25"
          },
         "imask" : "167903231"
        },
        {
         "type" : "8",
         "name" : "",
         "dil" : "1",
         "asa" : "0",
         "bd" :
          {
           "enabled" : "1",
           "clr" : "#D45B5B",
           "s" : "0",
           "w" : "0.25"
          },
         "imask" : "167903231"
        }
      ]
    }
  }
}


public static ChartSeries GetChartSeries(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartSeries()
    {
        tChart = new ChartId() { id = moniker }
    };
    // Получаем настройки рядов диаграммы
    var result = somClient.GetChartSeries(tGet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
