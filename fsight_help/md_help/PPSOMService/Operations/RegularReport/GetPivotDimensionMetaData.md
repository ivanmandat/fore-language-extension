# GetPivotDimensionMetaData: Операция

GetPivotDimensionMetaData: Операция
-


**


# GetPivotDimensionMetaData


## Синтаксис


PivotDimension GetPivotDimensionMetaData(string
 mon, PivotDimension tArg)


## Параметры


mon. Моникёр
 для работы с измерением среза данных.


tArg. Параметры измерения,
 которые необходимо получить.


## Описание


Операция GetPivotDimensionMetaData
 получает информацию об измерении среза данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!<ключ среза>!Pivot!PivotDims!<ключ
 измерения>» для работы с измерением, а в поле tArg
 задайте пустые значения или значения по умолчанию для тех полей, значения
 которых необходимо получить.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт полученные параметры измерения.


## Пример


Ниже приведён пример получения информации об измерении среза данных.
 В запросе передаётся моникёр для работы с измерением и список полей, значения
 которых необходимо получить. В ответе приходит полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPivotDimensionMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!PivotDims!116</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>0</k>  <id />
  <n />
  <position>Unknown</position>  <index>0</index>  <separated>0</separated>  </tArg>
  </GetPivotDimensionMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPivotDimensionMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">116</k>  <id xmlns="****">DIM_1</id>  <n xmlns="****">Dim_1</n>  <position xmlns="****">Left</position>  <index xmlns="****">1</index>  <separated xmlns="****">1</separated>  </GetPivotDimensionMetaDataResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPivotDimensionMetaData" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!PivotDims!116",
   "tArg" :
    {
     "k" : "0",
     "id" : "",
     "n" : "",
     "position" : "Unknown",
     "index" : "0",
     "separated" : "0"
    }
  }
}

### JSON-ответ:


{
 "GetPivotDimensionMetaDataResult" :
  {
   "k" : "116",
   "id" : "DIM_1",
   "n" : "Dim_1",
   "position" : "Left",
   "index" : "1",
   "separated" : "1"
  }
}


public static PivotDimension GetPivotDimMetadata(string moniker, uint dataSourceKey, uint sliceKey, uint dimKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetPivotDimensionMetaData()
    {
        tArg = new PivotDimension()
        {
            id = "",
            n = "",
            index = new long(),
            position = new PvtDimPos(),
            separated = new int()
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!PivotDims!" + dimKey.ToString()
    };
    //Получение информации об измерении
    var result = somClient.GetPivotDimensionMetaData(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
