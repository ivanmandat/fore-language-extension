# SetPivotFilterMetaData: Операция

SetPivotFilterMetaData: Операция
-


**


# SetPivotFilterMetaData


## Синтаксис


bool SetPivotFilterMetaData(string mon, PivotFilter
 tArg)


## Параметры


mon. Моникёр
 для работы с настройками фильтрации среза данных.


tArg. Параметры изменения настроек
 фильтрации данных.


## Описание


Операция SetPivotFilterMetaData
 изменяет настройки фильтрации данных, заданных для среза данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!<ключ среза>!Pivot!Filter»,
 а в поле tArg задайте параметры
 фильтрации, которые необходимо применить.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт значение true,
 если применение изменений завершилось успешно.


## Пример


Ниже приведён пример изменения настроек фильтрации данных. В запросе
 передаётся моникёр для работы с настройками фильтрации и изменяемые параметры
 фильтрации. В ответе приходит признак успешного применения изменений.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPivotFilterMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!Filter</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <enabled>true</enabled>  <suppressEmptyCells>true</suppressEmptyCells>  </tArg>
  </SetPivotFilterMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPivotFilterMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPivotFilterMetaDataResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPivotFilterMetaData" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!Filter",
   "tArg" :
    {
     "enabled" : "true",
     "suppressEmptyCells" : "true"
    }
  }
}

### JSON-ответ:


{
 "SetPivotFilterMetaDataResult" : "1"
}


public static bool SetPivotFilter(string moniker, uint dataSourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetPivotFilterMetaData()
    {
        tArg = new PivotFilter()
        {
            enabled = true,
            suppressEmptyCells = true
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!Filter"
    };
    //Изменение настроек для фильтра данных
    var result = somClient.SetPivotFilterMetaData(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
