# GetPivotMetaData: Операция

GetPivotMetaData: Операция
-


**


# GetPivotMetaData


## Синтаксис


PivotMetaData GetPivotMetaData(string mon, PivotMetaData
 tArg)


## Параметры


mon. Моникёр
 для работы с основой среза данных.


tArg. Параметры получения информации
 об основе среза.


## Описание


Операция GetPivotMetaData получает
 основу для построения среза источника аналитической области данных.


## Комментарии


Операция позволяет получить различные настройки, которые влияют на формирование
 среза и извлечение данных. Для выполнения операции укажите в поле mon моникёр экземпляра регламентного
 отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!<ключ среза>!Pivot» для работы
 с основой среза, а в поле tArg
 укажите извлекаемые настройки.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


В поле tArg задайте пустые значения
 или значения по умолчанию для тех полей, значения которых необходимо получить.
 Для коллекций укажите один элемент. Для получения информации о каком-либо
 конкретном элементе укажите его ключ в метаданных. При указании в качестве
 ключа значения «-1» будет получена информация обо всех элементах данного
 типа.


## Пример


Ниже приведён пример получения информации об основе среза источника
 данных. В запросе передаётся моникёр для работы с основой среза данных
 и список полей, значения которых необходимо получить. В ответе приходит
 запрошенная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPivotMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PLHCGKDDEBBGOFOAENCPCGCHBJGOFDLNEIJMPDIHNAGKFLNGA!DataArea!DataSources!1!DataSourceSlices!1!Pivot</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<dims>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id />
  <n />
  <position>Unknown</position>  <index>0</index>  </it>
  </its>
  </dims>
  </tArg>
  </GetPivotMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPivotMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<dims xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>5858</k>  <id>FACTS</id>  <n>Факты</n>  <position>Fixed</position>  <index>0</index>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>112</k>  <id>CALENDAR</id>  <n>Календарь</n>  <position>Top</position>  <index>0</index>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>116</k>  <id>DIM_1</id>  <n>Dim_1</n>  <position>Left</position>  <index>0</index>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>991</k>  <id>DIM_2</id>  <n>Dim_2</n>  <position>Fixed</position>  <index>1</index>  </it>
  </its>
  </dims>
  <drillThrough xmlns="****">0</drillThrough>  </GetPivotMetaDataResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPivotMetaData" :
  {
   "mon" : "FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PLHCGKDDEBBGOFOAENCPCGCHBJGOFDLNEIJMPDIHNAGKFLNGA!DataArea!DataSources!1!DataSourceSlices!1!Pivot",
   "tArg" :
    {
     "dims" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "-1",
             "id" : "",
             "n" : "",
             "position" : "Unknown",
             "index" : "0"
            }
          ]
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetPivotMetaDataResult" :
  {
   "dims" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "5858",
           "id" : "FACTS",
           "n" : "Факты",
           "position" : "Fixed",
           "index" : "0"
          },
          {
           "k" : "112",
           "id" : "CALENDAR",
           "n" : "Календарь",
           "position" : "Top",
           "index" : "0"
          },
          {
           "k" : "116",
           "id" : "DIM_1",
           "n" : "Dim_1",
           "position" : "Left",
           "index" : "0"
          },
          {
           "k" : "991",
           "id" : "DIM_2",
           "n" : "Dim_2",
           "position" : "Fixed",
           "index" : "1"
          }
        ]
      }
    },
   "drillThrough" : "0"
  }
}


public static PivotMetaData GetPivotInfo(string moniker, uint dataSourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetPivotMetaData()
    {
        tArg = new PivotMetaData()
        {
            dims = new PivotDimensions()
            {
                its = new PivotDimension[1]
                {
                    new PivotDimension()
                    {
                        k = uint.MaxValue,
                        id = "",
                        n = "",
                        position = PvtDimPos.Unknown,
                        index = 0
                    }
                }
            }
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot"
    };
    //Получение информации об основе среза
    var result = somClient.GetPivotMetaData(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
