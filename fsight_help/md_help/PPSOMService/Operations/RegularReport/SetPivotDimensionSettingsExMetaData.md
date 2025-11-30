# SetPivotDimensionSettingsExMetaData: Операция

SetPivotDimensionSettingsExMetaData: Операция
-


**


# SetPivotDimensionSettingsExMetaData


## Синтаксис


bool SetPivotDimensionSettingsExMetaData(string
 mon, PivotDimensionSettingsEx tArg)


## Параметры


mon. Моникёр
 для работы с измерением среза данных.


tArg. Расширенные настройки
 измерения, которые необходимо изменить.


## Описание


Операция SetPivotDimensionSettingsExMetaData
 изменяет расширенные настройки измерения среза данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!«ключ среза»!Pivot!PivotDims!«ключ измерения»!Settings»
 для работы с настройками измерения, а в поле tArg
 задайте те настройки, которые необходимо установить. Моникёр может быть
 получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения расширенных настроек измерения среза
 данных. В запросе передаётся моникёр измерения и признаки необходимости
 объединить измерение с предыдущим и поджатия выделенных элементов. В ответе
 возвращаются признак успешного изменения настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPivotDimensionSettingsExMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">OKOJDJGKNIENFOAEJNJLKGEKADFPDGEEGJGOMBCJJOBOMJEF!M!S!PBAJILOGKNIENFOAEONEKNMNEGGHGMDBEPLLMLDOJNKGLFFDF!DataArea!DataSources!3!DataSourceSlices!3!Pivot!PivotDims!991!Settings</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <MergeTopDown>true</MergeTopDown>  <IsDimensionMergeAllowed>true</IsDimensionMergeAllowed>  </tArg>
  </SetPivotDimensionSettingsExMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPivotDimensionSettingsExMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPivotDimensionSettingsExMetaDataResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPivotDimensionSettingsExMetaData" :
  {
   "mon" : "OKOJDJGKNIENFOAEJNJLKGEKADFPDGEEGJGOMBCJJOBOMJEF!M!S!PBAJILOGKNIENFOAEONEKNMNEGGHGMDBEPLLMLDOJNKGLFFDF!DataArea!DataSources!3!DataSourceSlices!3!Pivot!PivotDims!991!Settings",
   "tArg" :
    {
     "MergeTopDown" : "true",
     "IsDimensionMergeAllowed" : "true"
    }
  }
}

### JSON-ответ:


{
 "SetPivotDimensionSettingsExMetaDataResult" : "1"
}


public static bool SetPivotDimensionSettingsExMetaData(string moniker, uint dataSourceKey, uint sliceKey, uint dimKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetPivotDimensionSettingsExMetaData()
    {
        tArg = new PivotDimensionSettingsEx()
        {
            IsDimensionMergeAllowed = true,
            MergeTopDown = true
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!PivotDims!" + dimKey.ToString() + "!Settings"
    };
    // Изменение настроек измерения
    var result = somClient.SetPivotDimensionSettingsExMetaData(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
