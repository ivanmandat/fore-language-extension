# GetPivotDimElementTotal: Операция

GetPivotDimElementTotal: Операция
-


**


# GetPivotDimElementTotal


## Синтаксис


PivotDimElementTotal GetPivotDimElementTotal(string
 mon, PivotDimElementTotal tArg)


## Параметры


mon. Моникёр
 для работы с итогами.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetPivotDimElementTotal
 получает настройки расчёта собственного типа итога у элемента измерения.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!ключ
 источника!DataSourceSlices!ключ среза!Pivot!Totals» для работы
 с итогами, а в поле tArg укажите
 ключ измерения и ключ элемента, для которого будут получены настройки.
 Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будут полученные настройки расчёта собственного
 итога у элемента измерения.


## Пример


Ниже приведён пример получения настроек расчёта собственного итога у
 элемента измерения. В запросе передаётся моникёр для работы с итогами,
 ключ измерения и ключ элемента. В ответе возвращаются полученные настройки
 расчёта итога.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPivotDimElementTotal xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">IGKCBLACHJHFGOAECPFHIBAHKDNEEELENJKICJHOLDFGIJAG!M!S!PPMAJAPACHJHFGOAEPIAFFPEFHCEHPGKELLHHEFOLEHCDAEHK!DataArea!DataSources!1!DataSourceSlices!1!Pivot!Totals</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<elementKey>
  <key>1</key>  </elementKey>
  <dimKey>116</dimKey>  </tArg>
  </GetPivotDimElementTotal>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPivotDimElementTotalResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<elementKey xmlns="****">
  <key>1</key>  </elementKey>
  <dimKey xmlns="****">116</dimKey>  <type xmlns="****">Avg</type>  <enabled xmlns="****">1</enabled>  </GetPivotDimElementTotalResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPivotDimElementTotal" :
  {
   "mon" : "IGKCBLACHJHFGOAECPFHIBAHKDNEEELENJKICJHOLDFGIJAG!M!S!PPMAJAPACHJHFGOAEPIAFFPEFHCEHPGKELLHHEFOLEHCDAEHK!DataArea!DataSources!1!DataSourceSlices!1!Pivot!Totals",
   "tArg" :
    {
     "elementKey" :
      {
       "key" : "1"
      },
     "dimKey" : "116"
    }
  }
}

### JSON-ответ:


{
 "GetPivotDimElementTotalResult" :
  {
   "elementKey" :
    {
     "key" : "1"
    },
   "dimKey" : "116",
   "type" : "Avg",
   "enabled" : "1"
  }
}


public static PivotDimElementTotal GetPivotDimElementTotal(string moniker, uint dataSourceKey, uint sliceKey, uint dimKey, string elKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetPivotDimElementTotal()
    {
        tArg = new PivotDimElementTotal()
        {
            dimKey = dimKey,
            elementKey = new ElKey(){ key = elKey }
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey + "!DataSourceSlices!" + sliceKey + "!Pivot!Totals"
    };
    // Получение настроек вычисления собственного итога у элемента измерения
    var result = somClient.GetPivotDimElementTotal(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
