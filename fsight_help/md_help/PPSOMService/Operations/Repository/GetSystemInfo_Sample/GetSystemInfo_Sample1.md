# Получение информации о соединении с репозиторием: Операция GetSystemInfo

Получение информации о соединении с репозиторием: Операция GetSystemInfo
-


**


# Получение информации о соединении с репозиторием


Ниже приведен пример использования операции [GetSystemInfo](../GetSystemInfo.htm)
 для получения информации о соединении с репозиторием. В запросе передается
 моникёр соединения с репозиторием. В ответе приходит информация о версии
 платформы, которая установлена на сервере, а также настройки указанного
 соединения с репозиторием.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetSystemInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<metabase>
  <id>LLCHGEDPNCCCGOAEHNAGCAHDLNEBJEHEMLCCONMKIJBCOLEH!M</id>  </metabase>
  <allowMetabaseNotFound>true</allowMetabaseNotFound>  </tArg>
  </GetSystemInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetSystemInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <version xmlns="****">Релиз 10.4.10052.0 Master x64</version>  <release xmlns="****">10.4</release>  <platformInfo xmlns="****">x64</platformInfo>  <osType xmlns="****">Windows</osType>  <osInfo xmlns="****">Windows 10 x64</osInfo>  <metabaseSessionTimeout xmlns="****">00:30:00.000</metabaseSessionTimeout>  <metabaseStoreBinaryCount xmlns="****">0</metabaseStoreBinaryCount>  <metabaseLocale xmlns="****">1049</metabaseLocale>  <metabaseConnectionPoolMaxCount xmlns="****">50</metabaseConnectionPoolMaxCount>  </GetSystemInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetSystemInfo" :
  {
   "tArg" :
    {
     "metabase" :
      {
       "id" : "LLCHGEDPNCCCGOAEHNAGCAHDLNEBJEHEMLCCONMKIJBCOLEH!M"
      },
     "allowMetabaseNotFound" : "true"
    }
  }
}

### JSON-ответ:


{
 "GetSystemInfoResult" :
  {
   "version" : "Релиз 10.4.10052.0 Master x64",
   "release" : "10.4",
   "platformInfo" : "x64",
   "osType" : "Windows",
   "osInfo" : "Windows 10 x64",
   "metabaseSessionTimeout" : "00:30:00.000",
   "metabaseStoreBinaryCount" : "0",
   "metabaseLocale" : "1049",
   "metabaseConnectionPoolMaxCount" : "50"
  }
}


public static GetSystemInfoResult GetConnectedInfo(string mb = null)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetSystemInfo()
    {
        tArg = new GetSystemInfoArg()
        {
            metabase = (mb != null ? new MbId() { id = mb } : null ),
            allowMetabaseNotFound = true
        }
    };
    // Получение информации о соединении
    var result = somClient.GetSystemInfo(tGet);
    return result;
}


См. также:


[GetSystemInfo:
 Операция](../GetSystemInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
