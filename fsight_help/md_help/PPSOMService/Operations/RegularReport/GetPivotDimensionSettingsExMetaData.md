# GetPivotDimensionSettingsExMetaData: Операция

GetPivotDimensionSettingsExMetaData: Операция
-


**


# GetPivotDimensionSettingsExMetaData


## Синтаксис


PivotDimensionSettingsEx GetPivotDimensionSettingsExMetaData(string
 mon, PivotDimensionSettingsEx tArg)


## Параметры


mon. Моникёр
 для работы с измерением среза данных.


tArg. Расширенные настройки
 измерения, которые необходимо получить.


## Описание


Операция GetPivotDimensionSettingsExMetaData
 получает расширенные настройки измерения среза данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!«ключ среза»!Pivot!PivotDims!«ключ измерения»!Settings»
 для работы с настройками измерения, а в поле tArg
 задайте пустые значения или значения по умолчанию для тех полей, значения
 которых необходимо получить. Моникёр может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт полученные настройки измерения.


## Пример


Ниже приведён пример получения расширенных настроек измерения среза
 данных. В запросе передаётся моникёр измерения и список настроек, значения
 которых необходимо получить. В ответе возвращаются полученные значения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPivotDimensionSettingsExMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">OKOJDJGKNIENFOAEJNJLKGEKADFPDGEEGJGOMBCJJOBOMJEF!M!S!PBAJILOGKNIENFOAEONEKNMNEGGHGMDBEPLLMLDOJNKGLFFDF!DataArea!DataSources!3!DataSourceSlices!3!Pivot!PivotDims!991!Settings</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <MergeTopDown>false</MergeTopDown>  <IsDimensionMergeAllowed>false</IsDimensionMergeAllowed>  </tArg>
  </GetPivotDimensionSettingsExMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPivotDimensionSettingsExMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <MergeTopDown xmlns="****">1</MergeTopDown>  <IsDimensionMergeAllowed xmlns="****">0</IsDimensionMergeAllowed>  </GetPivotDimensionSettingsExMetaDataResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPivotDimensionSettingsExMetaData" :
  {
   "mon" : "OKOJDJGKNIENFOAEJNJLKGEKADFPDGEEGJGOMBCJJOBOMJEF!M!S!PBAJILOGKNIENFOAEONEKNMNEGGHGMDBEPLLMLDOJNKGLFFDF!DataArea!DataSources!3!DataSourceSlices!3!Pivot!PivotDims!991!Settings",
   "tArg" :
    {
     "MergeTopDown" : "false",
     "IsDimensionMergeAllowed" : "false"
    }
  }
}

### JSON-ответ:


{
 "GetPivotDimensionSettingsExMetaDataResult" :
  {
   "MergeTopDown" : "1",
   "IsDimensionMergeAllowed" : "0"
  }
}


public static PivotDimensionSettingsEx GetPivotDimensionSettingsExMetaData(string moniker, uint dataSourceKey, uint sliceKey, uint dimKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetPivotDimensionSettingsExMetaData()
    {
        tArg = new PivotDimensionSettingsEx()
        {
            IsDimensionMergeAllowed = new bool(),
            MergeTopDown = new bool()
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!PivotDims!" + dimKey.ToString() + "!Settings"
    };
    // Получение настроек измерения
    var result = somClient.GetPivotDimensionSettingsExMetaData(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
