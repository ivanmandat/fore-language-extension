# GetOAuthSettings: Операция

GetOAuthSettings: Операция
-


**


# GetOAuthSettings


## Синтаксис


GetOAuthSettingsResult GetOAuthSettings(GetOAuthSettingsArg
 tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция GetOAuthSettings получает
 настройки по работе с OAuth-серверами, которые заданы на BI-сервере.


## Комментарии


Операция позволяет получить настройки OAuth-серверов, которые выступают
 в качестве сервисов авторизации. Настройки задаются в реестре/файле settings.xml
 в подразделе [OAuth](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm#oauth).


Для выполнения операции укажите в поле tArg.svcKey
 ключ элемента с настройками сервиса авторизации. При значении -1 будут
 получены настройки всех сервисов, которые определены на BI-сервере.


Результатом операции будут полученные настройки.


## Пример


Ниже приведён пример получения настроек BI-сервера по работе с OAuth-серверами.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetOAuthSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <svcKey>-1</svcKey>  </tArg>
  </GetOAuthSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetOAuthSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<settings xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <id>Google</id>  <key>0</key>  <authUrl />
  <icon>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB5SURBVDhPlZHJEQAhCASNy4CMx2hMxmBwPaBgxLXsJ9IyaKBHUKg5BiDmug47SnB6GeWwoLrtjVSSJ/TqIJVZODIF7r+2L4HzQBiXIWwDJOFCTTaCTEABl5Ynwh22m3hpMWCLo2D+QY35ET4wuMIXBo5lY6Jw5VEgatYLFxcSCQWXAAAAAElFTkSuQmCC</icon>  </it>
  </settings>
  </GetOAuthSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetOAuthSettings" :
  {
   "tArg" :
    {
     "svcKey" : "-1"
    }
  }
}

### JSON-ответ:


{
 "GetOAuthSettingsResult" :
  {
   "settings" :
    {
     "it" :
      {
       "id" : "Google",
       "key" : "0",
       "authUrl" : "",
       "icon" : "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB5SURBVDhPlZHJEQAhCASNy4CMx2hMxmBwPaBgxLXsJ9IyaKBHUKg5BiDmug47SnB6GeWwoLrtjVSSJ\/TqIJVZODIF7r+2L4HzQBiXIWwDJOFCTTaCTEABl5Ynwh22m3hpMWCLo2D+QY35ET4wuMIXBo5lY6Jw5VEgatYLFxcSCQWXAAAAAElFTkSuQmCC"
      }
    }
  }
}


public static GetOAuthSettingsResult GetOAuthSettings()
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetOAuthSettings()
    {
        tArg = new GetOAuthSettingsArg()
        {
            svcKey = uint.MaxValue
        }
    };
    // Получение настроек OAuth-серверов, которые заданы на BI-сервере
    var result = somClient.GetOAuthSettings(tGet);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
