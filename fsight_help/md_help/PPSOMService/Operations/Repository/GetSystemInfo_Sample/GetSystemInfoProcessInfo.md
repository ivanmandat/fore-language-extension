# Получение параметров производительности BI-сервера: Операция GetSystemInfo

Получение параметров производительности BI-сервера: Операция GetSystemInfo
-


**


# Получение параметров производительности BI-сервера


Ниже приведен пример использования операции [GetSystemInfo](../GetSystemInfo.htm)
 для получения параметров производительности. В запросе передаётся признак
 необходимости получения информации о производительности и используемых
 ресурсах. В ответе возвращается полученная информация.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetSystemInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <processInfo>true</processInfo>  </tArg>
  </GetSystemInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetSystemInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <version xmlns="****">Релиз 10.4.10052.0 Master x64</version>  <release xmlns="****">10.4</release>  <platformInfo xmlns="****">x64</platformInfo>  <osType xmlns="****">Windows</osType>  <osInfo xmlns="****">Windows 10 x64</osInfo>[![](../../../minus.gif)](../../../#)<processInfo xmlns="****">
  <privateBytes>69029888</privateBytes>  <workingSetSize>78454784</workingSetSize>  <residentSetSize>0</residentSetSize>  <proportionalSetSize>0</proportionalSetSize>  <sharedBytes>0</sharedBytes>  <swapSize>0</swapSize>  <gdiObjects>16</gdiObjects>  <userObjects>5</userObjects>  <handles>434</handles>  <maxThreadsCount>8</maxThreadsCount>  <activeThreadsCount>8</activeThreadsCount>  <fileDescriptorsCount>0</fileDescriptorsCount>  <mbCurConnectionCount>1</mbCurConnectionCount>  </processInfo>
  </GetSystemInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetSystemInfo" :
  {
   "tArg" :
    {
     "processInfo" : "true"
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
   "processInfo" :
    {
     "privateBytes" : "69029888",
     "workingSetSize" : "78454784",
     "residentSetSize" : "0",
     "proportionalSetSize" : "0",
     "sharedBytes" : "0",
     "swapSize" : "0",
     "gdiObjects" : "16",
     "userObjects" : "5",
     "handles" : "434",
     "maxThreadsCount" : "8",
     "activeThreadsCount" : "8",
     "fileDescriptorsCount" : "0",
     "mbCurConnectionCount" : "1"
    }
  }
}


public static GetSystemInfoResult GetBIServerInfo()
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetSystemInfo()
    {
        tArg = new GetSystemInfoArg()
        {
            processInfo = true
        }
    };
    // Получение информации о производительности BI-сервера
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
