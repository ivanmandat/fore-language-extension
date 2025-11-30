# GetUpdateSettings: Операция

GetUpdateSettings: Операция
-


**


# GetUpdateSettings


## Синтаксис


ViewerUpdateSettings GetUpdateSettings(string mon)


## Параметры


mon. Моникёр
 для работы с параметрами автоматического обновления.


## Описание


Операция GetUpdateSettings получает
 параметры автоматического обновления регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Options!UpdateSettings».
 Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт заданные параметры автоматического обновления регламентного
 отчёта.


## Пример


Ниже приведён пример получения параметров автоматического обновления
 регламентного отчёта. В запросе передаётся моникёр для работы с параметрами
 автоматического обновления. В ответе приходит запрошенная информация.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetUpdateSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Options!UpdateSettings</mon>  </GetUpdateSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetUpdateSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <updateByIntervalEnabled xmlns="****">0</updateByIntervalEnabled>  <autoUpdateByData xmlns="****">1</autoUpdateByData>  <AutoUpdateInterval xmlns="****">5</AutoUpdateInterval>  <autoUpdateIntervalUnits xmlns="****">Minutes</autoUpdateIntervalUnits>  </GetUpdateSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetUpdateSettings" :
  {
   "mon" : "S1!M!S!P1!Options!UpdateSettings"
  }
}

### JSON-ответ:


{
 "GetUpdateSettingsResult" :
  {
   "updateByIntervalEnabled" : "0",
   "autoUpdateByData" : "1",
   "AutoUpdateInterval" : "5",
   "autoUpdateIntervalUnits" : "Minutes"
  }
}


public static ViewerUpdateSettings GetUpdateSettings(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetUpdateSettings()
    {
        mon = moniker + "!Options!UpdateSettings"
    };
    //Получение параметров автоматического обновления регламентного отчёта
    var result = somClient.GetUpdateSettings(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
