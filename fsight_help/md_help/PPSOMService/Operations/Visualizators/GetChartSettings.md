# GetChartSettings: Операция

GetChartSettings: Операция
-


**


# GetChartSettings


## Синтаксис


ChartSettings GetChartSettings(ChartId tChart)


## Параметры


tChart. Моникёр
 диаграммы.


## Описание


Операция GetChartSettings получает
 настройки диаграммы.


## Комментарии


Для выполнения операции укажите в поле tChart
 моникёр диаграммы. Моникёр диаграммы строится на базе моникёра объекта
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


Результатом работы операции будут полученные настройки диаграммы.


## Пример


Ниже приведён пример получения настроек диаграммы, созданной в регламентном
 отчёте. В запросе передаётся моникёр диаграммы. В ответе приходят полученные
 настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetChartSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tChart xmlns="****">
  <id>S1!M!S!P1!Sheets!1!Objects!PrxChart1</id>  </tChart>
  </GetChartSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetChartSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <type xmlns="****">1</type>  <view3d xmlns="****">0</view3d>  <uzs xmlns="****">0</uzs>[![](../../minus.gif)](../../#)<bg xmlns="****">
  <type>0</type>  </bg>
[![](../../minus.gif)](../../#)<bd xmlns="****">
  <enabled>0</enabled>  </bd>
  <ornt xmlns="****">0</ornt>  <accum xmlns="****">0</accum>  <inter xmlns="****">Selection</inter>  <zm xmlns="****">None</zm>  </GetChartSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartSettings" :
  {
   "tChart" :
    {
     "id" : "S1!M!S!P1!Sheets!1!Objects!PrxChart1"
    }
  }
}

### JSON-ответ:


{
 "GetChartSettingsResult" :
  {
   "type" : "1",
   "view3d" : "0",
   "uzs" : "0",
   "bg" :
    {
     "type" : "0"
    },
   "bd" :
    {
     "enabled" : "0"
    },
   "ornt" : "0",
   "accum" : "0",
   "inter" : "Selection",
   "zm" : "None"
  }
}


public static ChartSettings GetChartSettings(string moniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartSettings()
    {
        tChart = new ChartId()
        {
            id = moniker
        }
    };
    // Получение настроек
    var result = somClient.GetChartSettings(tGet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
