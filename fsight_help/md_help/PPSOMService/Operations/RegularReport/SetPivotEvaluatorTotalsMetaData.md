# SetPivotEvaluatorTotalsMetaData: Операция

SetPivotEvaluatorTotalsMetaData: Операция
-


**


# SetPivotEvaluatorTotalsMetaData


## Синтаксис


bool SetPivotEvaluatorTotalsMetaData(string mon,
 PvtTotals tArg)


## Параметры


mon. Моникёр
 для работы с итогами.


tArg. Параметры изменения настроек
 расчёта итогов.


## Описание


Операция SetPivotEvaluatorTotalsMetaData
 изменяет настройки вычисления итогов.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!«ключ среза»!Pivot!Totals» для работы
 с итогами, а в поле tArg укажите
 устанавливаемые настройки.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция возвращает значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример включения расчёта итогов по столбцам. В запросе
 передаётся моникёр для работы с итогами и устанавливаемые настройки. В
 ответе возвращается признак успешного включения расчёта итогов.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPivotEvaluatorTotalsMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">HAPIEIKAGHBPFOAEGECNPBJBABIFDABEOKMMJKOHAOBCEPLN!M!S!PLMNJPALAGHBPFOAENFAIOMEDPPLOKFNEKKJAEHOAOHCPFIIC!DataArea!DataSources!1!DataSourceSlices!1!Pivot!Totals</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <treatEmptyAsZero>true</treatEmptyAsZero>  <includeOwner>true</includeOwner>[![](../../minus.gif)](../../#)<columnTypes>
  <t>Sum</t>  </columnTypes>
  <enabled>true</enabled>[![](../../minus.gif)](../../#)<columnSettings>
  <namingMode>Combined</namingMode>  <totalsNameSeparator>-</totalsNameSeparator>  <hierarchyTotal>true</hierarchyTotal>  <overallTotal>true</overallTotal>  <insteadOwnerTotalsType>Sum</insteadOwnerTotalsType>  </columnSettings>
  </tArg>
  </SetPivotEvaluatorTotalsMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPivotEvaluatorTotalsMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPivotEvaluatorTotalsMetaDataResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPivotEvaluatorTotalsMetaData" :
  {
   "mon" : "HAPIEIKAGHBPFOAEGECNPBJBABIFDABEOKMMJKOHAOBCEPLN!M!S!PLMNJPALAGHBPFOAENFAIOMEDPPLOKFNEKKJAEHOAOHCPFIIC!DataArea!DataSources!1!DataSourceSlices!1!Pivot!Totals",
   "tArg" :
    {
     "treatEmptyAsZero" : "true",
     "includeOwner" : "true",
     "columnTypes" :
      {
       "t" : "Sum"
      },
     "enabled" : "true",
     "columnSettings" :
      {
       "namingMode" : "Combined",
       "totalsNameSeparator" : "-",
       "hierarchyTotal" : "true",
       "overallTotal" : "true",
       "insteadOwnerTotalsType" : "Sum"
      }
    }
  }
}

### JSON-ответ:


{
 "SetPivotEvaluatorTotalsMetaDataResult" : "1"
}


public static bool SetPivotEvaluatorTotalsMetaData(string moniker, uint dataSourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetPivotEvaluatorTotalsMetaData()
    {
        tArg = new PvtTotals()
        {
            enabled = true,
            columnTypes = new PvtEvaluatorElementType[1] { PvtEvaluatorElementType.Sum },
            columnSettings = new PvtEvaluatorTotalsSettings()
            {
                hierarchyTotal = true,
                insteadOwnerTotalsType = PvtEvaluatorElementType.Sum,
                namingMode = PvtTotalParentNamingMode.Combined,
                overallTotal = true,
                totalsNameSeparator = "-"
            },
            includeOwner = true,
            treatEmptyAsZero = true
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!Totals"
    };
    // Изменение настроек вычисления итогов
    var result = somClient.SetPivotEvaluatorTotalsMetaData(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
