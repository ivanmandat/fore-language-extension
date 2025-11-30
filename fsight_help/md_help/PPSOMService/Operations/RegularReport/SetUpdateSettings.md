# SetUpdateSettings: Операция

SetUpdateSettings: Операция
-


**


# SetUpdateSettings


## Синтаксис


bool SetUpdateSettings(string mon, ViewerUpdateSettings
 tArg)


## Параметры


mon. Моникёр
 для работы с параметрами автоматического обновления.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetUpdateSettings изменяет
 параметры автоматического обновления регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Options!UpdateSettings».
 В поле tArg задайте параметры
 автоматического обновления, которые необходимо изменить. Моникёр может
 быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет логическое значение true,
 если изменение параметров завершилось успешно.


## Пример


Ниже приведён пример изменения параметров автоматического обновления
 регламентного отчёта. В запросе передаётся моникёр для работы с параметрами
 автоматического обновления и новые значения самих параметров. В ответе
 приходит признак успешного применения изменений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetUpdateSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Options!UpdateSettings</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <updateByIntervalEnabled>true</updateByIntervalEnabled>  <autoUpdateByData>true</autoUpdateByData>  <AutoUpdateInterval>5</AutoUpdateInterval>  <autoUpdateIntervalUnits>Seconds</autoUpdateIntervalUnits>  </tArg>
  </SetUpdateSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetUpdateSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetUpdateSettingsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetUpdateSettings" :
  {
   "mon" : "S1!M!S!P1!Options!UpdateSettings",
   "tArg" :
    {
     "updateByIntervalEnabled" : "true",
     "autoUpdateByData" : "true",
     "AutoUpdateInterval" : "5",
     "autoUpdateIntervalUnits" : "Seconds"
    }
  }
}

### JSON-ответ:


{
 "SetUpdateSettingsResult" : "1"
}


public static bool SetUpdateSettings(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetUpdateSettings()
    {
        tArg = new ViewerUpdateSettings()
        {
            updateByIntervalEnabled = true,
            autoUpdateByData = true,
            AutoUpdateInterval = 5,
            autoUpdateIntervalUnits = TimeUnits.Seconds
        },
        mon = moniker + "!Options!UpdateSettings"
    };
    //Изменение параметров автоматического обновления регламентного отчёта
    var result = somClient.SetUpdateSettings(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
