# GetPrxMetaChangePoints: Операция

GetPrxMetaChangePoints: Операция
-


**


# GetPrxMetaChangePoints


## Синтаксис


PrxChangePoints GetPrxMetaChangePoints(string mon,
 PrxChangePointsRequest tArg)


## Параметры


mon. Моникёр
 листа регламентного отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetPrxMetaChangePoints
 получает историю изменения значения в ячейке среза данных.


## Комментарии


История доступна, если срез основан на источнике, у которого включено
 ведение [истории
 изменений](uinavobj.chm::/Cube/createcube/Master_Standart/Additional_Settings.htm#history). Для выполнения операции укажите в поле mon моникёр в формате Моникёр
 экземпляра рег.отчёта!Sheets!Ключ листа, а в поле tArg
 координаты ячейки. Моникёр экземпляра регламентного отчёта может быть
 получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).
 Лист должен быть вычислен.


Результатом операции будет история изменения ячейки.


## Пример


Ниже приведён пример получения истории изменения значения в ячейке среза
 данных. В запросе передаётся моникёр листа отчёта и координаты ячейки.
 В ответе возвращается полученная история.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPrxMetaChangePoints xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">MJKLJBIKPIFGGOAEODMFHONOGCNHJHFEIJHDFJOJDCCFABAK!M!S!PFBMIBHIKPIFGGOAEEBFMBBKOPFKEMOBEDJCEIAPFLHDKEJGO!Sheets!1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <row>3</row>  <col>3</col>  </tArg>
  </GetPrxMetaChangePoints>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPrxMetaChangePointsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <vis>1</vis>  <ts>2025-07-30T10:40:14.000</ts>  <user>Пользователь ADMIN</user>  <oldVal />
  <newVal>20,00</newVal>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <vis>1</vis>  <ts>2025-07-30T10:42:04.000</ts>  <user>Пользователь ADMIN</user>  <oldVal>20,00</oldVal>  <newVal>25,00</newVal>  </it>
  </its>
  </GetPrxMetaChangePointsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPrxMetaChangePoints" :
  {
   "mon" : "MJKLJBIKPIFGGOAEODMFHONOGCNHJHFEIJHDFJOJDCCFABAK!M!S!PFBMIBHIKPIFGGOAEEBFMBBKOPFKEMOBEDJCEIAPFLHDKEJGO!Sheets!1",
   "tArg" :
    {
     "row" : "3",
     "col" : "3"
    }
  }
}

### JSON-ответ:


{
 "GetPrxMetaChangePointsResult" :
  {
   "its" :
    {
     "it" :
      [
        {
         "k" : "1",
         "vis" : "1",
         "ts" : "2025-07-30T10:40:14.000",
         "user" : "Пользователь ADMIN",
         "oldVal" : "",
         "newVal" : "20,00"
        },
        {
         "k" : "2",
         "vis" : "1",
         "ts" : "2025-07-30T10:42:04.000",
         "user" : "Пользователь ADMIN",
         "oldVal" : "20,00",
         "newVal" : "25,00"
        }
      ]
    }
  }
}


public static PrxChangePoints GetPrxMetaChangePoints(string moniker, uint sheetKey, uint cellRow, uint cellColumn)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetPrxMetaChangePoints()
    {
        tArg = new PrxChangePointsRequest()
        {
            row = cellRow,
            col = cellColumn
        },
        mon = moniker + "!Sheets!" + sheetKey
    };
    // Получение истории изменения ячейки
    var result = somClient.GetPrxMetaChangePoints(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
