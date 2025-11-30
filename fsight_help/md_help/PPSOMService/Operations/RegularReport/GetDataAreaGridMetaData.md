# GetDataAreaGridMetaData: Операция

GetDataAreaGridMetaData: Операция
-


**


# GetDataAreaGridMetaData


## Синтаксис


DataAreaGrid GetDataAreaGridMetaData(string mon,
 DataAreaGrid tArg)


## Параметры


mon. Моникёр
 визуализатора Таблица.


tArg. Параметры визуализатора
 Таблица, которые необходимо получить.


## Описание


Операция GetDataAreaGridMetaData
 получает метаданные визуализатора Таблица.


## Комментарии


Операция предназначена для работы с визуализатором Таблица, которая
 отображает данные аналитической области данных.


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!«ключ среза»!Views!«ключ таблицы».
 В поле tArg задайте пустые значения
 или значения по умолчанию для тех полей, значения которых необходимо получить.
 Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт запрошенные метаданные.


## Пример


Ниже приведён пример получения различных метаданных таблицы. В запросе
 передаётся моникёр таблицы и список получаемых полей. В ответе приходят
 запрошенные метаданные.


	 SOAP  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDataAreaGridMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">GLCLGKOCBPDOFOAEENFEDILEMKNEILDEEJBICAEDMGPNBJLP!M!S!PIKDEKAPCBPDOFOAEIFJLGPOHDBHHIAFEFIDCDPHPDEAMFAID!DataArea!DataSources!1!DataSourceSlices!1!Views!6</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<adjustSettings>
  <mode>None</mode>  <allowAdjust>false</allowAdjust>  <maxRowsInCell>0</maxRowsInCell>  <minVisibleDataColumns>0</minVisibleDataColumns>  <leftHeaderMaxWidth>0</leftHeaderMaxWidth>  <rowMaxHeight>0</rowMaxHeight>  </adjustSettings>
  </tArg>
  </GetDataAreaGridMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDataAreaGridMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<adjustSettings xmlns="****">
  <mode>Simple</mode>  <allowAdjust>1</allowAdjust>  <maxRowsInCell>8</maxRowsInCell>  <minVisibleDataColumns>1</minVisibleDataColumns>  <leftHeaderMaxWidth>500</leftHeaderMaxWidth>  <rowMaxHeight>50</rowMaxHeight>  </adjustSettings>
  </GetDataAreaGridMetaDataResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDataAreaGridMetaData" :
  {
   "mon" : "GLCLGKOCBPDOFOAEENFEDILEMKNEILDEEJBICAEDMGPNBJLP!M!S!PIKDEKAPCBPDOFOAEIFJLGPOHDBHHIAFEFIDCDPHPDEAMFAID!DataArea!DataSources!1!DataSourceSlices!1!Views!6",
   "tArg" :
    {
     "adjustSettings" :
      {
       "mode" : "None",
       "allowAdjust" : "false",
       "maxRowsInCell" : "0",
       "minVisibleDataColumns" : "0",
       "leftHeaderMaxWidth" : "0",
       "rowMaxHeight" : "0"
      }
    }
  }
}

### JSON-ответ:


{
 "GetDataAreaGridMetaDataResult" :
  {
   "adjustSettings" :
    {
     "mode" : "Simple",
     "allowAdjust" : "1",
     "maxRowsInCell" : "8",
     "minVisibleDataColumns" : "1",
     "leftHeaderMaxWidth" : "500",
     "rowMaxHeight" : "50"
    }
  }
}


public static DataAreaGrid GetDataAreaGridMetaData(string moniker, uint sourceKey, uint sliceKey, uint viewKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDataAreaGridMetaData()
    {
        tArg = new DataAreaGrid()
        {
            adjustSettings = new DataAreaGridAdjustSettings()
            {
                allowAdjust = new bool(),
                leftHeaderMaxWidth = new int(),
                maxRowsInCell = new int(),
                minVisibleDataColumns = new int(),
                mode = new EaxAdjustMode(),
                rowMaxHeight = new int()
            }
        },
        mon = moniker + "!DataArea!DataSources!" + sourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Views!" + viewKey.ToString()
    };
    // Получение метаданных таблицы
    var result = somClient.GetDataAreaGridMetaData(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
