# SetDataAreaGridMetaData: Операция

SetDataAreaGridMetaData: Операция
-


**


# SetDataAreaGridMetaData


## Синтаксис


bool SetDataAreaGridMetaData(string mon, DataAreaGrid
 tArg)


## Параметры


mon. Моникёр
 визуализатора Таблица.


tArg. Параметры визуализатора
 Таблица, которые необходимо установить.


## Описание


Операция SetDataAreaGridMetaData
 изменяет метаданные визуализатора Таблица.


## Комментарии


Операция предназначена для работы с визуализатором Таблица, которая
 отображает данные аналитической области данных.


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!«ключ среза»!Views!«ключ таблицы»,
 а в поле tArg укажите изменяемые значения. Моникёр может быть получен
 при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт значение true,
 если применение изменений завершилось успешно.


## Пример


Ниже приведён пример включения сортировки в таблице. В запросе передаётся
 моникёр таблицы и поля, определяющие необходимость включить сортировку.
 В ответе приходит признак успешного включения сортировки.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDataAreaGridMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Views!4</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <displayLeftHeaderSortIcons>true</displayLeftHeaderSortIcons>  <displayTopHeaderSortIcons>true</displayTopHeaderSortIcons>  </tArg>
  </SetDataAreaGridMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetDataAreaGridMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetDataAreaGridMetaDataResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDataAreaGridMetaData" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Views!4",
   "tArg" :
    {
     "displayLeftHeaderSortIcons" : "true",
     "displayTopHeaderSortIcons" : "true"
    }
  }
}

### JSON-ответ:


{
 "SetDataAreaGridMetaDataResult" : "1"
}


public static bool SetDataAreaGridMetaData(string moniker, uint sourceKey, uint sliceKey, uint viewKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetDataAreaGridMetaData()
    {
        tArg = new DataAreaGrid()
        {
            viewSettings = new EaxGridViewSettings()
            {
                leftSettings = new EaxGridHeaderSettings()
                {
                    displaySortIcons = true,
                },
                topSettings = new EaxGridHeaderSettings()
                {
                    displaySortIcons = true
                }
            }
        },
        mon = moniker + "!DataArea!DataSources!" + sourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Views!" + viewKey.ToString()
    };
    //Изменение метаданных таблицы
    var result = somClient.SetDataAreaGridMetaData(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
