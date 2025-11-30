# SetPivotHeaderFilterMetaData: Операция

SetPivotHeaderFilterMetaData: Операция
-


**


# SetPivotHeaderFilterMetaData


## Синтаксис


PivotHeaderFilter SetPivotHeaderFilterMetaData(string
 mon, PivotHeaderFilter tArg)


## Параметры


mon. Моникёр
 для работы с фильтром заголовка среза данных.


tArg. Параметры изменения настроек
 фильтрации.


## Описание


Операция SetPivotHeaderFilterMetaData
 изменяет настройки фильтрации заголовка среза данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!<ключ среза>!Pivot!». Также
 данный моникёр необходимо дополнить одним из следующих значений:


	- «TopHeade!HeaderSettings!Filter»
	 - для работы с фильтром заголовка столбцов;


	- «LeftHeader!HeaderSettings!Filter»
	 - для работы с фильтром заголовка строк.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


В поле tArg задайте параметры
 фильтрации, которые необходимо применить.


Операция вернёт значение true,
 если применение изменений завершилось успешно.


## Пример


Ниже приведён пример изменения настроек фильтрации в заголовке столбцов
 среза данных. В запросе передаётся моникёр для работы с настройками фильтрации
 заголовка и изменяемые параметры фильтрации. В ответе приходит признак
 успешного применения изменений.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPivotHeaderFilterMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!TopHeader!HeaderSettings!Filter</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <enabled>true</enabled>  <suppressEmptyCells>true</suppressEmptyCells>  </tArg>
  </SetPivotHeaderFilterMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPivotHeaderFilterMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPivotHeaderFilterMetaDataResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPivotHeaderFilterMetaData" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!TopHeader!HeaderSettings!Filter",
   "tArg" :
    {
     "enabled" : "true",
     "suppressEmptyCells" : "true"
    }
  }
}

### JSON-ответ:


{
 "SetPivotHeaderFilterMetaDataResult" : "1"
}


public static bool SetPivotHeaderFilter(string moniker, uint dataSourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetPivotHeaderFilterMetaData()
    {
        tArg = new PivotHeaderFilter()
        {
            enabled = true,
            suppressEmptyCells = true
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!TopHeader!HeaderSettings!Filter"
    };
    //Изменение настроек для фильтра заголовка
    var result = somClient.SetPivotHeaderFilterMetaData(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
