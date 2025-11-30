# SetPivotDimLevelMetaData: Операция

SetPivotDimLevelMetaData: Операция
-


**


# SetPivotDimLevelMetaData


## Синтаксис


bool SetPivotDimLevelMetaData(string mon, PivotDimensionLevel
 tArg)


## Параметры


mon. Моникёр
 для работы с уровнем измерения среза данных.


tArg. Параметры уровня измерения,
 которые необходимо применить.


## Описание


Операция SetPivotDimLevelMetaData
 изменяет параметры уровня измерения среза данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!<ключ среза>!Pivot!PivotDims!<ключ
 измерения>!DimLvls!<ключ уровня>» для работы с уровнем,
 а в поле tArg задайте параметры
 уровня, которые необходимо применить.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт значение true,
 если применение изменений завершилось успешно.


## Пример


Ниже приведён пример изменения настроек уровня измерения среза данных.
 В запросе передаётся моникёр для работы с уровнем измерения и изменяемые
 параметры уровня. В ответе приходит признак успешного применения изменений.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPivotDimLevelMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!PivotDims!116!DimLvls!1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>0</k>  <separated>1</separated>  </tArg>
  </SetPivotDimLevelMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPivotDimLevelMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPivotDimLevelMetaDataResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPivotDimLevelMetaData" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!PivotDims!116!DimLvls!1",
   "tArg" :
    {
     "k" : "0",
     "separated" : "1"
    }
  }
}

### JSON-ответ:


{
 "SetPivotDimLevelMetaDataResult" : "1"
}


public static bool SetPivotDimLevelMetadata(string moniker, uint dataSourceKey, uint sliceKey, uint dimKey, uint lvlKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetPivotDimLevelMetaData()
    {
        tArg = new PivotDimensionLevel()
        {
            separated = 1
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!PivotDims!" + dimKey.ToString() + "!DimLvls!" + lvlKey.ToString()
    };
    //Изменение параметров уровня измерения
    var result = somClient.SetPivotDimLevelMetaData(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
