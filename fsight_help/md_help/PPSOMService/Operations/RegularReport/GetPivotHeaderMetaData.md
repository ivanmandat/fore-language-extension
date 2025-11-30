# GetPivotHeaderMetaData: Операция

GetPivotHeaderMetaData: Операция
-


**


# GetPivotHeaderMetaData


## Синтаксис


PivotHeader GetPivotHeaderMetaData(string mon, PivotHeader
 tArg)


## Параметры


mon. Моникёр
 для работы с заголовком среза данных.


tArg. Параметры получения информации
 о заголовке среза.


## Описание


Операция GetPivotHeaderMetaData
 получает информацию о заголовке среза данных.


## Комментарии


Операция позволяет получить различные настройки, заданные для заголовка.


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!<ключ среза>!Pivot!». Также
 данный моникёр необходимо дополнить одним из следующих значений:


	- «TopHeader» - для работы
	 с заголовком столбцов;


	- «LeftHeader» - для работы
	 с заголовком строк.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](GetPrxMeta.htm).


В поле tArg задайте пустые значения
 или значения по умолчанию для тех полей, значения которых необходимо получить.
 Операция вернёт полученные настройки для заголовка среза данных.


## Пример


Ниже приведён пример получения настроек заголовка столбцов у среза данных.
 В запросе передаётся моникёр для работы с заголовком и список полей, значения
 которых необходимо получить. В ответе приходят запрошенные настройки.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPivotHeaderMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PLHCGKDDEBBGOFOAENCPCGCHBJGOFDLNEIJMPDIHNAGKFLNGA!DataArea!DataSources!1!DataSourceSlices!1!Pivot!TopHeader</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<headerSettings>
[![](../../minus.gif)](../../#)<filter>
  <enabled>false</enabled>  <suppressEmptyCells>false</suppressEmptyCells>  <suppressZeroCells>false</suppressZeroCells>  <suppressNoNumericCells>false</suppressNoNumericCells>  </filter>
  </headerSettings>
  <separated>0</separated>  </tArg>
  </GetPivotHeaderMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPivotHeaderMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<headerSettings xmlns="****">
[![](../../minus.gif)](../../#)<filter>
  <enabled>1</enabled>  <suppressEmptyCells>0</suppressEmptyCells>  <suppressZeroCells>0</suppressZeroCells>  <suppressNoNumericCells>0</suppressNoNumericCells>  </filter>
  </headerSettings>
  <separated xmlns="****">1</separated>  </GetPivotHeaderMetaDataResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPivotHeaderMetaData" :
  {
   "mon" : "FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PLHCGKDDEBBGOFOAENCPCGCHBJGOFDLNEIJMPDIHNAGKFLNGA!DataArea!DataSources!1!DataSourceSlices!1!Pivot!TopHeader",
   "tArg" :
    {
     "headerSettings" :
      {
       "filter" :
        {
         "enabled" : "false",
         "suppressEmptyCells" : "false",
         "suppressZeroCells" : "false",
         "suppressNoNumericCells" : "false"
        }
      },
     "separated" : "0"
    }
  }
}

### JSON-ответ:


{
 "GetPivotHeaderMetaDataResult" :
  {
   "headerSettings" :
    {
     "filter" :
      {
       "enabled" : "1",
       "suppressEmptyCells" : "0",
       "suppressZeroCells" : "0",
       "suppressNoNumericCells" : "0"
      }
    },
   "separated" : "1"
  }
}


public static PivotHeader GetPivotHeaderMeta(string moniker, uint dataSourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetPivotHeaderMetaData()
    {
        tArg = new PivotHeader()
        {
            headerSettings = new PivotHeaderSettings()
            {
                filter = new PivotHeaderFilter()
                {
                    enabled = new bool(),
                    suppressEmptyCells = new bool(),
                    suppressNoNumericCells = new bool(),
                    suppressZeroCells = new bool()
                }
            },
            separated = new int()
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!TopHeader"
    };
    //Получение информации о заголовке
    var result = somClient.GetPivotHeaderMetaData(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
