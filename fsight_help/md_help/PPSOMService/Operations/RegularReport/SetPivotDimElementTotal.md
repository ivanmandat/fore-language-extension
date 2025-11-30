# SetPivotDimElementTotal: Операция

SetPivotDimElementTotal: Операция
-


**


# SetPivotDimElementTotal


## Синтаксис


bool SetPivotDimElementTotal(string mon, PivotDimElementTotal
 tArg)


## Параметры


mon. Моникёр
 для работы с итогами.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetPivotDimElementTotal
 изменяет настройки расчёта собственного типа итога у элемента измерения.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!ключ
 источника!DataSourceSlices!ключ среза!Pivot!Totals» для работы
 с итогами, а в поле tArg задайте
 настройки расчёта собственного итога для элемента измерения. Моникёр может
 быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек расчёта собственного итога у
 элемента измерения. В запросе передаётся моникёр для работы с итогами,
 ключ измерения, ключ элемента и тип рассчитываемого итога. В ответе возвращаются
 признак успешного изменения настроек расчёта итога.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPivotDimElementTotal xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">IGKCBLACHJHFGOAECPFHIBAHKDNEEELENJKICJHOLDFGIJAG!M!S!PPMAJAPACHJHFGOAEPIAFFPEFHCEHPGKELLHHEFOLEHCDAEHK!DataArea!DataSources!1!DataSourceSlices!1!Pivot!Totals</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<elementKey>
  <key>1</key>  </elementKey>
  <dimKey>116</dimKey>  <type>Avg</type>  <enabled>true</enabled>  </tArg>
  </SetPivotDimElementTotal>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPivotDimElementTotalResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPivotDimElementTotalResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPivotDimElementTotal" :
  {
   "mon" : "IGKCBLACHJHFGOAECPFHIBAHKDNEEELENJKICJHOLDFGIJAG!M!S!PPMAJAPACHJHFGOAEPIAFFPEFHCEHPGKELLHHEFOLEHCDAEHK!DataArea!DataSources!1!DataSourceSlices!1!Pivot!Totals",
   "tArg" :
    {
     "elementKey" :
      {
       "key" : "1"
      },
     "dimKey" : "116",
     "type" : "Avg",
     "enabled" : "true"
    }
  }
}

### JSON-ответ:


{
 "SetPivotDimElementTotalResult" : "1"
}


public static bool SetPivotDimElementTotal(string moniker, uint dataSourceKey, uint sliceKey, uint dimKey, string elementIndex)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetPivotDimElementTotal()
    {
        tArg = new PivotDimElementTotal()
        {
            dimKey = dimKey,
            elementKey = new ElKey(){ key = elementIndex },
            enabled = true,
            type = PvtEvaluatorElementType.Avg
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey + "!DataSourceSlices!" + sliceKey + "!Pivot!Totals"
    };
    // Изменение настроек вычисления собственного итога у элемента измерения
    var result = somClient.SetPivotDimElementTotal(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
