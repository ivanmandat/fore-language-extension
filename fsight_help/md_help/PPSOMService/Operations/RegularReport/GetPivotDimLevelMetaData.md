# GetPivotDimLevelMetaData: Операция

GetPivotDimLevelMetaData: Операция
-


**


# GetPivotDimLevelMetaData


## Синтаксис


PivotDimensionLevel GetPivotDimLevelMetaData(string
 mon, PivotDimensionLevel tArg)


## Параметры


mon. Моникёр
 для работы с уровнем измерения среза данных.


tArg. Параметры уровня измерения,
 которые необходимо получить.


## Описание


Операция GetPivotDimLevelMetaData
 получает информацию об уровне измерения среза данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!«ключ среза»!Pivot!PivotDims!«ключ измерения»!DimLvls!«ключ
 уровня»» для работы с уровнем, а в поле tArg
 задайте пустые значения или значения по умолчанию для тех полей, значения
 которых необходимо получить.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт полученные параметры уровня измерения.


## Пример


Ниже приведён пример получения информации об уровне измерения среза
 данных. В запросе передаётся моникёр для работы с уровнем и список полей,
 значения которых необходимо получить. В ответе приходит полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPivotDimLevelMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!PivotDims!116!DimLvls!1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>0</k>  <id />
  <n />
  <separated>0</separated>  </tArg>
  </GetPivotDimLevelMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPivotDimLevelMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">0</k>  <id xmlns="****" />
  <n xmlns="****" />
  <separated xmlns="****">1</separated>  </GetPivotDimLevelMetaDataResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPivotDimLevelMetaData" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!PivotDims!116!DimLvls!1",
   "tArg" :
    {
     "k" : "0",
     "id" : "",
     "n" : "",
     "separated" : "0"
    }
  }
}

### JSON-ответ:


{
 "GetPivotDimLevelMetaDataResult" :
  {
   "k" : "0",
   "id" : "",
   "n" : "",
   "separated" : "1"
  }
}


public static PivotDimensionLevel GetPivotDimLevelMetadata(string moniker, uint dataSourceKey, uint sliceKey, uint dimKey, uint lvlKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetPivotDimLevelMetaData()
    {
        tArg = new PivotDimensionLevel()
        {
            id = "",
            n = "",
            separated = new int()
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!PivotDims!" + dimKey.ToString() + "!DimLvls!" + lvlKey.ToString()
    };
    //Получение информации о уровне измерении
    var result = somClient.GetPivotDimLevelMetaData(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
