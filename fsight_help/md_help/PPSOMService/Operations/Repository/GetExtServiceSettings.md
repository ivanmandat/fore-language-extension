# GetExtServiceSettings: Операция

GetExtServiceSettings: Операция
-


**


# GetExtServiceSettings


## Синтаксис


GetExtServiceSettingsResult GetExtServiceSettings(GetExtServiceSettingsArg
 tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция GetExtServiceSettings
 получает настройки внешнего сервиса аутентификации, на работу с которым
 настроен репозиторий.


## Комментарии


Операция позволяет получить адрес внешнего сервиса, который задан в
 настройках репозитория. Настройки задаются в [реестре](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm)/файле
 [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).
 Для выполнения операции укажите в поле tArg.mbId
 идентификатор описания репозитория. Описание репозитория задаётся в файле
 [Metabases.xml](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm).


Результатом выполнения операции будут полученные настройки внешнего
 сервиса.


## Пример


Ниже приведён пример получения настроек внешнего сервиса аутентификации.
 на работу с которым настроен репозиторий. В запросе передаётся идентификатор
 описания репозитория. В ответе возвращаются полученные настройки.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetExtServiceSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <mbId>TEST_JWT</mbId>  </tArg>
  </GetExtServiceSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetExtServiceSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<settings xmlns="****">
  <id>JWT_PROVIDER</id>  <authUrl>https://example.com/jwt/login</authUrl>  </settings>
  </GetExtServiceSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetExtServiceSettings" :
  {
   "tArg" :
    {
     "mbId" : "TEST_JWT"
    }
  }
}

### JSON-ответ:


{
 "GetExtServiceSettingsResult" :
  {
   "settings" :
    {
     "id" : "JWT_PROVIDER",
     "authUrl" : "https://example.com/jwt/login"
    }
  }
}


public static GetExtServiceSettingsResult GetExtServiceSettings(string metabaseDefinitionId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetExtServiceSettings()
    {
        tArg = new GetExtServiceSettingsArg()
        {
            mbId = metabaseDefinitionId
        }
    };
    // Получение настроек внешнего сервиса
    var result = somClient.GetExtServiceSettings(tGet);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
