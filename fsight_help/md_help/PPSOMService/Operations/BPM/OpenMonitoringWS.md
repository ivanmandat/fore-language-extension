# OpenMonitoringWS: Операция

OpenMonitoringWS: Операция
-


**


# OpenMonitoringWS


## Синтаксис


OpenMonitoringWSResult OpenMonitoringWS(BpmProcessId
 tObject, OpenMonitoringWSArg tArg)


## Параметры


tObject. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenMonitoringWS получает
 URL-адрес, с помощью которого может быть открыто WebSocket-соединение
 для мониторинга выполнения процесса.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр открытого процесса. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm). В поле tArg.key укажите уникальный ключ
 экземпляра выполняемого процесса. Ключ доступен в коллекции list
 результата выполнения операции [GetProcessInstances](GetProcessInstances.htm).
 В поле tArg.giud укажите GUID
 структуры выполняемого экземпляра процесса, который доступен в поле instId результата операции [GetBpmMonitoringWorkspace](GetBpmMonitoringWorkspace.htm).


Результатом выполнения операции будет URL-адрес, который в дальнейшем
 может использоваться для организации постоянного соединения между браузером
 и BI-сервером с помощью протокола WebSocket. Формат адреса, который необходимо
 передать в конструктор WebSocket: «ws://адрес
 BI-сервера[:порт]/service?id=» + полученный URL-адрес.


## Пример


Ниже приведён пример получения URL-адреса для открытия WebSocket-соединения.
 В запросе передаётся моникёр открытого процесса, ключ экземпляра процесса
 и GUID структуры процесса. В ответе будет получен URL-адрес.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenMonitoringWS xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>MGJFJPPOBBDDGOAECMABJPKINDGPEBIEBLJDEKDGIANBKOGK!M!S!BPIMOEODAPBBDDGOAEDHLCADLCMDDIJDCEGJPKIJEBEEOLAHIL</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <key>98037</key>  <guid>{99654793-F719-4107-AD36-F1060FCD62F5}</guid>  </tArg>
  </OpenMonitoringWS>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenMonitoringWSResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <url xmlns="****">BPMMONID!{6386DAFD-2FB5-4E14-B5A2-569F41AD14A8}</url>  </OpenMonitoringWSResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenMonitoringWS" :
  {
   "tObject" :
    {
     "id" : "MGJFJPPOBBDDGOAECMABJPKINDGPEBIEBLJDEKDGIANBKOGK!M!S!BPIMOEODAPBBDDGOAEDHLCADLCMDDIJDCEGJPKIJEBEEOLAHIL"
    },
   "tArg" :
    {
     "key" : "98037",
     "guid" : "{99654793-F719-4107-AD36-F1060FCD62F5}"
    }
  }
}

### JSON-ответ:


{
 "OpenMonitoringWSResult" :
  {
   "url" : "BPMMONID!{6386DAFD-2FB5-4E14-B5A2-569F41AD14A8}"
  }
}


public static OpenMonitoringWSResult OpenMonitoringWS(string moniker, int instanceKey, string instanceWSGUID)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new OpenMonitoringWS()
    {
        tObject = new BpmProcessId() { id = moniker },
        tArg = new OpenMonitoringWSArg()
        {
            key = instanceKey,
            guid = instanceWSGUID
        }
    };
    // Получение URL-адрес страницы мониторинга
    var result = somClient.OpenMonitoringWS(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
