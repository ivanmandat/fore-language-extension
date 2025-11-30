# GetPrxMetaChartsInfo: Операция

GetPrxMetaChartsInfo: Операция
-


**


# GetPrxMetaChartsInfo


## Синтаксис


PrxMetaChartsInfo GetPrxMetaChartsInfo(string mon)


## Параметры


mon. Моникёр
 экземпляра регламентного отчёта.


## Описание


Операция GetPrxMetaChartsInfo
 получает информацию о диаграммах, которые имеются в регламентном отчёте.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта. Моникёр может быть получен при
 выполнении операции [OpenPrxMeta](OpenPrxMeta.htm). Результатом
 операции будет общая информация о имеющихся в регламентном отчёте диаграммах.


Дальнейшая работа с диаграммами может осуществляться с помощью операций
 [GetPrxMetaChart](GetPrxMetaChart.htm)/[SetPrxMetaChart](SetPrxMetaChart.htm).


## Пример


Ниже приведён пример получения информации о диаграммах регламентного
 отчёта. В запросе передаётся моникёр регламентного отчёта. В ответе приходит
 полученная информация.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPrxMetaChartsInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1</mon>  </GetPrxMetaChartsInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPrxMetaChartsInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <name>Диаграмма1</name>  <objectID>PrxChart1</objectID>  <placementSheetKey>1</placementSheetKey>  </it>
[![](../../minus.gif)](../../#)<it>
  <name>Диаграмма2</name>  <objectID>PrxChart2</objectID>  <placementSheetKey>1</placementSheetKey>  </it>
[![](../../minus.gif)](../../#)<it>
  <name>Диаграмма показателей</name>  <objectID>PrxChart3</objectID>  <placementSheetKey>1</placementSheetKey>  </it>
  </its>
  </GetPrxMetaChartsInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPrxMetaChartsInfo" :
  {
   "mon" : "S1!M!S!P1"
  }
}

### JSON-ответ:


{
 "GetPrxMetaChartsInfoResult" :
  {
   "its" :
    {
     "it" :
      [
        {
         "name" : "Диаграмма1",
         "objectID" : "PrxChart1",
         "placementSheetKey" : "1"
        },
        {
         "name" : "Диаграмма2",
         "objectID" : "PrxChart2",
         "placementSheetKey" : "1"
        },
        {
         "name" : "Диаграмма показателей",
         "objectID" : "PrxChart3",
         "placementSheetKey" : "1"
        }
      ]
    }
  }
}


public static PrxMetaChartsInfo GetPrxCharts(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetPrxMetaChartsInfo()
    {
        mon = moniker
    };
    //Получение информации о диаграммах
    var result = somClient.GetPrxMetaChartsInfo(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
