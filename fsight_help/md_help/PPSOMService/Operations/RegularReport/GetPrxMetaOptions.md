# GetPrxMetaOptions: Операция

GetPrxMetaOptions: Операция
-


**


# GetPrxMetaOptions


## Синтаксис


PrxMetaOptions GetPrxMetaOptions(string mon, PrxMetaOptions
 tArg)


## Параметры


mon. Моникёр
 для работы с настройками регламентного отчёта.


tArg. Настройки регламентного
 отчёта, которые необходимо получить.


## Описание


Операция GetPrxMetaOptions получает
 настройки регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Options».
 В поле tArg задайте пустые значения
 или значения по умолчанию для тех полей, значения которых необходимо получить.
 Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт запрошенные настройки.


## Пример


Ниже приведён пример получения настроек регламентного отчёта. В запросе
 передаётся моникёр для работы с настройками регламентного отчёта и список
 полей, значения которых необходимо получить. В ответе приходит запрошенная
 информация.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPrxMetaOptions xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Options</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <displayTabs>false</displayTabs>  <updateSettings />
  </tArg>
  </GetPrxMetaOptions>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPrxMetaOptionsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <displayTabs xmlns="****">1</displayTabs>[![](../../minus.gif)](../../#)<updateSettings xmlns="****">
  <updateByIntervalEnabled>0</updateByIntervalEnabled>  <autoUpdateByData>1</autoUpdateByData>  <AutoUpdateInterval>5</AutoUpdateInterval>  <autoUpdateIntervalUnits>Minutes</autoUpdateIntervalUnits>  </updateSettings>
  </GetPrxMetaOptionsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPrxMetaOptions" :
  {
   "mon" : "S1!M!S!P1!Options",
   "tArg" :
    {
     "displayTabs" : "false",
     "updateSettings" : ""
    }
  }
}

### JSON-ответ:


{
 "GetPrxMetaOptionsResult" :
  {
   "displayTabs" : "1",
   "updateSettings" :
    {
     "updateByIntervalEnabled" : "0",
     "autoUpdateByData" : "1",
     "AutoUpdateInterval" : "5",
     "autoUpdateIntervalUnits" : "Minutes"
    }
  }
}


public static PrxMetaOptions GetPrxMetaOptions(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetPrxMetaOptions()
    {
        tArg = new PrxMetaOptions()
        {
            displayTabs = new bool(),
            updateSettings = new ViewerUpdateSettings()
        },
        mon = moniker + "!Options"
    };
    //Получение настроек регламентного отчёта
    var result = somClient.GetPrxMetaOptions(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
