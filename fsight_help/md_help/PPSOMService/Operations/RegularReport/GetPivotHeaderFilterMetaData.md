# GetPivotHeaderFilterMetaData: Операция

GetPivotHeaderFilterMetaData: Операция
-


**


# GetPivotHeaderFilterMetaData


## Синтаксис


PivotHeaderFilter GetPivotHeaderFilterMetaData(string
 mon, PivotHeaderFilter tArg)


## Параметры


mon. Моникёр
 для работы с фильтром заголовка среза данных.


tArg. Параметры получения настроек
 фильтрации.


## Описание


Операция GetPivotHeaderFilterMetaData
 получает настройки фильтрации заголовка среза данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!<ключ среза>!Pivot!». Также
 данный моникёр необходимо дополнить одним из следующих значений:


	- «TopHeade!HeaderSettings!Filter»
	 - для работы с фильтром заголовка столбцов;


	- «LeftHeader!HeaderSettings!Filter»
	 - для работы с фильтром заголовка строк.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](GetPrxMeta.htm).


В поле tArg задайте пустые значения
 или значения по умолчанию для тех полей, значения которых необходимо получить.
 Операция вернёт полученные настройки фильтра для заголовка среза данных.


## Пример


Ниже приведён пример получения настроек фильтрации, заданных для заголовка
 столбцов у среза данных. В запросе передаётся моникёр для работы с настройками
 фильтрации заголовка и список полей, значения которых необходимо получить.
 В ответе приходят запрошенные настройки.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPivotHeaderFilterMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!TopHeader!HeaderSettings!Filter</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <enabled>false</enabled>  <suppressEmptyCells>false</suppressEmptyCells>  <suppressZeroCells>false</suppressZeroCells>  <suppressNoNumericCells>false</suppressNoNumericCells>  </tArg>
  </GetPivotHeaderFilterMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPivotHeaderFilterMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <enabled xmlns="****">1</enabled>  <suppressEmptyCells xmlns="****">1</suppressEmptyCells>  <suppressZeroCells xmlns="****">0</suppressZeroCells>  <suppressNoNumericCells xmlns="****">0</suppressNoNumericCells>  </GetPivotHeaderFilterMetaDataResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPivotHeaderFilterMetaData" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!TopHeader!HeaderSettings!Filter",
   "tArg" :
    {
     "enabled" : "false",
     "suppressEmptyCells" : "false",
     "suppressZeroCells" : "false",
     "suppressNoNumericCells" : "false"
    }
  }
}

### JSON-ответ:


{
 "GetPivotHeaderFilterMetaDataResult" :
  {
   "enabled" : "1",
   "suppressEmptyCells" : "1",
   "suppressZeroCells" : "0",
   "suppressNoNumericCells" : "0"
  }
}


public static PivotHeaderFilter GetPivotHeaderFilter(string moniker, uint dataSourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetPivotHeaderFilterMetaData()
    {
        tArg = new PivotHeaderFilter()
        {
            enabled = new bool(),
            suppressEmptyCells = new bool(),
            suppressNoNumericCells = new bool(),
            suppressZeroCells = new bool()
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!TopHeader!HeaderSettings!Filter"
    };
    //Получение информации о фильтре в заголовке
    var result = somClient.GetPivotHeaderFilterMetaData(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
