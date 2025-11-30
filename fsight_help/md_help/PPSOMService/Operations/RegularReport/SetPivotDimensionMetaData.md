# SetPivotDimensionMetaData: Операция

SetPivotDimensionMetaData: Операция
-


**


# SetPivotDimensionMetaData


## Синтаксис


bool SetPivotDimensionMetaData(string mon, PivotDimension
 tArg)


## Параметры


mon. Моникёр
 для работы с измерением среза данных.


tArg. Параметры измерения,
 которые необходимо применить.


## Описание


Операция SetPivotDimensionMetaData
 изменяет измерение среза данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!<ключ среза>!Pivot!PivotDims!<ключ
 измерения>» для работы с измерением, а в поле tArg
 задайте новые параметры измерения, которые необходимо применить.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт значение true,
 если применение изменений завершилось успешно.


## Пример


Ниже приведён пример изменения настроек измерения среза данных. В запросе
 передаётся моникёр для работы с измерением и изменяемые параметры измерения.
 В ответе приходит признак успешного применения изменений.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPivotDimensionMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!PivotDims!116</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>0</k>  <separated>1</separated>  </tArg>
  </SetPivotDimensionMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPivotDimensionMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPivotDimensionMetaDataResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPivotDimensionMetaData" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!PivotDims!116",
   "tArg" :
    {
     "k" : "0",
     "separated" : "1"
    }
  }
}

### JSON-ответ:


{
 "SetPivotDimensionMetaDataResult" : "1"
}


public static bool SetPivotDimMetadata(string moniker, uint dataSourceKey, uint sliceKey, uint dimKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetPivotDimensionMetaData()
    {
        tArg = new PivotDimension()
        {
            separated = 1
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!PivotDims!" + dimKey.ToString()
    };
    //Изменение параметров измерения
    var result = somClient.SetPivotDimensionMetaData(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
