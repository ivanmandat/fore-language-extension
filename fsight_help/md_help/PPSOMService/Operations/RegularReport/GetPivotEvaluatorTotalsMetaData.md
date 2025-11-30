# GetPivotEvaluatorTotalsMetaData: Операция

GetPivotEvaluatorTotalsMetaData: Операция
-


**


# GetPivotEvaluatorTotalsMetaData


## Синтаксис


PvtTotals GetPivotEvaluatorTotalsMetaData(string
 mon, PvtTotals tArg)


## Параметры


mon. Моникёр
 для работы с итогами.


tArg. Параметры получения информации
 об итогах.


## Описание


Операция GetPivotEvaluatorTotalsMetaData
 получает настройки вычисления итогов.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!«ключ среза»!Pivot!Totals» для работы
 с итогами, а в поле tArg укажите
 извлекаемые настройки.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


В поле tArg задайте пустые
 значения или значения по умолчанию для тех полей, значения которых необходимо
 получить. Для коллекций укажите один элемент. Для получения информации
 о каком-либо конкретном элементе укажите его ключ в метаданных. При указании
 в качестве ключа значения «-1» будет получена информация обо всех элементах
 данного типа.


## Пример


Ниже приведён пример получения настроек итогов. В запросе передаётся
 моникёр для работы с итогами и список настроек, значения которых необходимо
 получить. В ответе возвращаются полученные значения для настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPivotEvaluatorTotalsMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">HAPIEIKAGHBPFOAEGECNPBJBABIFDABEOKMMJKOHAOBCEPLN!M!S!PLMNJPALAGHBPFOAENFAIOMEDPPLOKFNEKKJAEHOAOHCPFIIC!DataArea!DataSources!1!DataSourceSlices!1!Pivot!Totals</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <treatEmptyAsZero>false</treatEmptyAsZero>  <includeOwner>false</includeOwner>[![](../../minus.gif)](../../#)<columnTypes>
  <t>None</t>  </columnTypes>
  <enabled>false</enabled>[![](../../minus.gif)](../../#)<columnSettings>
  <namingMode>Source</namingMode>  <totalsNameSeparator />
  <hierarchyTotal>false</hierarchyTotal>  <overallTotal>false</overallTotal>  <insteadOwnerTotalsType>None</insteadOwnerTotalsType>  </columnSettings>
  </tArg>
  </GetPivotEvaluatorTotalsMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPivotEvaluatorTotalsMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <treatEmptyAsZero xmlns="****">1</treatEmptyAsZero>  <includeOwner xmlns="****">1</includeOwner>[![](../../minus.gif)](../../#)<columnTypes xmlns="****">
  <t>Sum</t>  </columnTypes>
  <enabled xmlns="****">1</enabled>[![](../../minus.gif)](../../#)<columnSettings xmlns="****">
  <namingMode>Combined</namingMode>  <totalsNameSeparator>-</totalsNameSeparator>  <hierarchyTotal>1</hierarchyTotal>  <overallTotal>1</overallTotal>  <insteadOwnerTotalsType>Sum</insteadOwnerTotalsType>  </columnSettings>
  </GetPivotEvaluatorTotalsMetaDataResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPivotEvaluatorTotalsMetaData" :
  {
   "mon" : "HAPIEIKAGHBPFOAEGECNPBJBABIFDABEOKMMJKOHAOBCEPLN!M!S!PLMNJPALAGHBPFOAENFAIOMEDPPLOKFNEKKJAEHOAOHCPFIIC!DataArea!DataSources!1!DataSourceSlices!1!Pivot!Totals",
   "tArg" :
    {
     "treatEmptyAsZero" : "false",
     "includeOwner" : "false",
     "columnTypes" :
      {
       "t" : "None"
      },
     "enabled" : "false",
     "columnSettings" :
      {
       "namingMode" : "Source",
       "totalsNameSeparator" : "",
       "hierarchyTotal" : "false",
       "overallTotal" : "false",
       "insteadOwnerTotalsType" : "None"
      }
    }
  }
}

### JSON-ответ:


{
 "GetPivotEvaluatorTotalsMetaDataResult" :
  {
   "treatEmptyAsZero" : "1",
   "includeOwner" : "1",
   "columnTypes" :
    {
     "t" : "Sum"
    },
   "enabled" : "1",
   "columnSettings" :
    {
     "namingMode" : "Combined",
     "totalsNameSeparator" : "-",
     "hierarchyTotal" : "1",
     "overallTotal" : "1",
     "insteadOwnerTotalsType" : "Sum"
    }
  }
}


public static PvtTotals GetPivotEvaluatorTotalsMetaData(string moniker, uint dataSourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetPivotEvaluatorTotalsMetaData()
    {
        tArg = new PvtTotals()
        {
            enabled = new bool(),
            columnTypes = new PvtEvaluatorElementType[1],
            columnSettings = new PvtEvaluatorTotalsSettings()
            {
                hierarchyTotal = new bool(),
                insteadOwnerTotalsType = new PvtEvaluatorElementType(),
                namingMode = new PvtTotalParentNamingMode(),
                overallTotal = new bool(),
                totalsNameSeparator = ""
            },
            includeOwner = new bool(),
            treatEmptyAsZero = new bool()
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!Totals"
    };
    // Получение настроек вычисления итогов
    var result = somClient.GetPivotEvaluatorTotalsMetaData(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
