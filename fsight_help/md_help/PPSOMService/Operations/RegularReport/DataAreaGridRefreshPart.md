# DataAreaGridRefreshPart: Операция

DataAreaGridRefreshPart: Операция
-


**


# DataAreaGridRefreshPart


## Синтаксис


bool DataAreaGridRefreshPart(string mon, DataAreaGridRefreshPartArg
 tArg)


## Параметры


mon. Моникёр
 визуализатора Таблица.


tArg. Параметры обновления
 области таблицы.


## Описание


Операция DataAreaGridRefreshPart
 обновляет заданную область таблицы.


## Комментарии


Операция предназначена для работы с визуализатором Таблица, которая
 отображает данные аналитической области данных. Для выполнения операции
 укажите в поле mon моникёр экземпляра
 регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!<ключ среза>!Views!<ключ таблицы>»
 для работы с визуализатором, а в поле tArg.options
 область таблицы, которую необходимо обновить.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт значение true,
 если обновление завершилось успешно.


## Пример


Ниже приведён пример обновления таблицы, отображающей данные аналитической
 области данных. В запросе передаётся моникёр таблицы и область, которую
 необходимо обновить. В ответе приходит признак успешного обновления.


	SOAP JSONC#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DataAreaGridRefreshPart xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Views!4</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <options>InternalStyle</options>  </tArg>
  </DataAreaGridRefreshPart>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DataAreaGridRefreshPartResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DataAreaGridRefreshPartResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DataAreaGridRefreshPart" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Views!4",
   "tArg" :
    {
     "options" : "InternalStyle"
    }
  }
}

### JSON-ответ:


{
 "DataAreaGridRefreshPartResult" : "1"
}


public static bool RefreshGridPart(string moniker, uint sourceKey, uint sliceKey, uint viewKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tRef = new DataAreaGridRefreshPart()
    {
        tArg = new DataAreaGridRefreshPartArg()
        {
            options = EaxGridRefreshPart.InternalStyle
        },
        mon = moniker + "!DataArea!DataSources!" + sourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Views!" + viewKey.ToString()
    };
    //Обновление части таблицы
    var result = somClient.DataAreaGridRefreshPart(tRef);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
