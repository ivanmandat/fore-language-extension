# Получение информации о процессоре BI-сервера: Операция GetSystemInfo

Получение информации о процессоре BI-сервера: Операция GetSystemInfo
-


**


# Получение информации о процессоре BI-сервера


Ниже приведён пример использования операции [GetSystemInfo](../GetSystemInfo.htm)
 для получения информации о процессоре BI-сервисе. В запросе передаётся
 признак необходимости получения информации о процессоре. В ответе возвращается
 полученная информация.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetSystemInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <cpuInfo>true</cpuInfo>  </tArg>
  </GetSystemInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetSystemInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <version xmlns="****">Релиз 10.4.10052.0 Master x64</version>  <release xmlns="****">10.4</release>  <platformInfo xmlns="****">x64</platformInfo>  <osType xmlns="****">Windows</osType>  <osInfo xmlns="****">Windows 10 x64</osInfo>[![](../../../minus.gif)](../../../#)<cpuInfo xmlns="****">
[![](../../../minus.gif)](../../../#)<cpuCoresUsage>
  <Item>69</Item>  <Item>66</Item>  <Item>66</Item>  <Item>61</Item>  <Item>72</Item>  <Item>60</Item>  <Item>64</Item>  <Item>64</Item>  <Item>71</Item>  </cpuCoresUsage>
  </cpuInfo>
  </GetSystemInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetSystemInfo" :
  {
   "tArg" :
    {
     "cpuInfo" : "true"
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
   "cpuInfo" :
    {
     "cpuCoresUsage" :
      {
       "Item" :
        [
          "69",
          "66",
          "66",
          "61",
          "72",
          "60",
          "64",
          "64",
          "71"
        ]
      }
    }
  }
}


public static GetSystemInfoResult GetCPUInfo()
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetSystemInfo()
    {
        tArg = new GetSystemInfoArg()
        {
            cpuInfo = true
        }
    };
    // Получение информации об ОС и загрузке процессоров BI-сервера
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
