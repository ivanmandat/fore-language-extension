# SetPivotMetaData: Операция

SetPivotMetaData: Операция
-


**


# SetPivotMetaData


## Синтаксис


bool SetPivotMetaData(string mon, PivotMetaData
 tArg)


## Параметры


mon. Моникёр
 для работы с основой среза данных.


tArg. Параметры изменения основы
 для среза данных.


## Описание


Операция SetPivotMetaData изменяет
 основу для среза данных.


## Комментарии


Операция позволяет изменить различные настройки, которые влияют на формирование
 среза и извлечение данных. Для выполнения операции укажите в поле mon моникёр экземпляра регламентного
 отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!<ключ среза>!Pivot» для работы
 с основой среза, а в поле tArg
 укажите новые настройки.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция возвращает значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения основы среза данных. В запросе передаётся
 моникёр для работы с основой среза данных и изменяемые параметры. В ответе
 приходит признак успешного применения изменений.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPivotMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<dims>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>5858</k>  <index>0</index>  </it>
  </its>
  </dims>
  </tArg>
  </SetPivotMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPivotMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPivotMetaDataResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPivotMetaData" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot",
   "tArg" :
    {
     "dims" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "5858",
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
 "SetPivotMetaDataResult" : "1"
}


public static bool ChangePivotInfo(string moniker, uint dataSourceKey, uint sliceKey, uint dimKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetPivotMetaData()
    {
        tArg = new PivotMetaData()
        {
            dims = new PivotDimensions()
            {
                its = new PivotDimension[1]
                {
                    new PivotDimension()
                    {
                        k = dimKey,
                        index = 0
                    }
                }
            }
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot"
    };
    //Изменение информации об основе среза
    var result = somClient.SetPivotMetaData(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
