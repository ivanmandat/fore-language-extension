# GetPivotFilterMetaData: Операция

GetPivotFilterMetaData: Операция
-


**


# GetPivotFilterMetaData


## Синтаксис


PivotFilter GetPivotFilterMetaData(string mon, PivotFilter
 tArg)


## Параметры


mon. Моникёр
 для работы с настройками фильтрации среза данных.


tArg. Параметры получения настроек
 фильтрации данных.


## Описание


Операция GetPivotFilterMetaData
 получает настройки фильтрации данных, заданных для среза данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!«ключ среза»!Pivot!Filter», а в
 поле tArg задайте пустые значения
 или значения по умолчанию для тех полей, значения которых необходимо получить.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](GetPrxMeta.htm).


Операция вернёт полученные настройки фильтрации данных.


## Пример


Ниже приведён пример получения настроек фильтрации данных. В запросе
 передаётся моникёр для работы с настройками фильтрации и список полей,
 значения которых необходимо получить. В ответе приходят запрошенные настройки.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPivotFilterMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!Filter</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <enabled>false</enabled>  <suppressEmptyCells>false</suppressEmptyCells>  <suppressZeroCells>false</suppressZeroCells>  <suppressNoNumericCells>false</suppressNoNumericCells>  <separateHeaders>false</separateHeaders>  </tArg>
  </GetPivotFilterMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPivotFilterMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <enabled xmlns="****">1</enabled>  <suppressEmptyCells xmlns="****">1</suppressEmptyCells>  <suppressZeroCells xmlns="****">0</suppressZeroCells>  <suppressNoNumericCells xmlns="****">0</suppressNoNumericCells>  <separateHeaders xmlns="****">0</separateHeaders>  </GetPivotFilterMetaDataResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPivotFilterMetaData" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!Filter",
   "tArg" :
    {
     "enabled" : "false",
     "suppressEmptyCells" : "false",
     "suppressZeroCells" : "false",
     "suppressNoNumericCells" : "false",
     "separateHeaders" : "false"
    }
  }
}

### JSON-ответ:


{
 "GetPivotFilterMetaDataResult" :
  {
   "enabled" : "1",
   "suppressEmptyCells" : "1",
   "suppressZeroCells" : "0",
   "suppressNoNumericCells" : "0",
   "separateHeaders" : "0"
  }
}


public static PivotFilter GetPivotFilter(string moniker, uint dataSourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetPivotFilterMetaData()
    {
        tArg = new PivotFilter()
        {
            enabled = new bool(),
            separateHeaders = new bool(),
            suppressEmptyCells = new bool(),
            suppressNoNumericCells = new bool(),
            suppressZeroCells = new bool()
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!Filter"
    };
    //Получение информации о фильтре данных
    var result = somClient.GetPivotFilterMetaData(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
