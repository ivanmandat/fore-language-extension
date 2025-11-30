# GetBpmProcessSettings: Операция

GetBpmProcessSettings: Операция
-


**


# GetBpmProcessSettings


## Синтаксис


BpmProcessSettings GetBpmProcessSettings(BpmProcessId
 tBpmProcess)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


## Описание


Операция GetBpmProcessSettings
 получает настройки процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm).


Результатом выполнения операции будут полученные настройки процесса.


## Пример


Ниже приведён пример получения настроек процесса. В запросе передаётся
 моникёр открытого процесса. В ответе возвращаются полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetBpmProcessSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>PCMPFKDANKDAGOAEHGGCMAILKEKKFDIEKJCJBILJBEBFPLMF!M!S!BPGFFNKBEANKDAGOAEDJNBGLCJMDPBKHHEIKDLOLJJHKCKAIFG</id>  </tBpmProcess>
  </GetBpmProcessSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetBpmProcessSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<baseSettings xmlns="****">
  <roleId>PS-1-1</roleId>  <adminControl>1</adminControl>  <serviceExecution>0</serviceExecution>  <description />
  </baseSettings>
[![](../../minus.gif)](../../#)<paramsSettings xmlns="****">
[![](../../minus.gif)](../../#)<bpmProcessParams>
[![](../../minus.gif)](../../#)<it>
  <dictKey>338159</dictKey>  <dictName>Версия планирования</dictName>  </it>
  </bpmProcessParams>
  </paramsSettings>
  </GetBpmProcessSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetBpmProcessSettings" :
  {
   "tBpmProcess" :
    {
     "id" : "PCMPFKDANKDAGOAEHGGCMAILKEKKFDIEKJCJBILJBEBFPLMF!M!S!BPGFFNKBEANKDAGOAEDJNBGLCJMDPBKHHEIKDLOLJJHKCKAIFG"
    }
  }
}

### JSON-ответ:


{
 "GetBpmProcessSettingsResult" :
  {
   "baseSettings" :
    {
     "roleId" : "PS-1-1",
     "adminControl" : "1",
     "serviceExecution" : "0",
     "description" : ""
    },
   "paramsSettings" :
    {
     "bpmProcessParams" :
      {
       "it" :
        {
         "dictKey" : "338159",
         "dictName" : "Версия планирования"
        }
      }
    }
  }
}


public static BpmProcessSettings GetBpmProcessSettings(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetBpmProcessSettings()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker }
    };
    // Получение настроек процесса
    var result = somClient.GetBpmProcessSettings(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
