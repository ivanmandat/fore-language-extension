# GetStartEventSettings: Операция

GetStartEventSettings: Операция
-


**


# GetStartEventSettings


## Синтаксис


BpmStartEventInfo GetStartEventSettings(BpmProcessId
 tBpmProcess, GetStartEventSettingsArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetStartEventSettings
 получает настройки стартового события процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tArg.optType
 тип получаемых настроек. Моникёр может быть получен при выполнении операции
 [OpenBpmProcess](OpenBpmProcess.htm).


Результатом выполнения операции будут полученные настройки.


## Пример


Ниже приведён пример получения настроек стартового события процесса.
 В запросе передаётся моникёр открытого процесса. В ответе возвращаются
 полученные настройки.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetStartEventSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>DICNGBKNAJKEGOAEPFPJHGAAEMHJPFIEHLGHCIACBBLCJJKA!M!S!BPAHEICDKNAJKEGOAECMEPDJAJDGAPEBCELJDMNJMLEPENHPHE</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <optType>0</optType>  </tArg>
  </GetStartEventSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetStartEventSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <optType xmlns="****">0</optType>[![](../../minus.gif)](../../#)<per xmlns="****">
  <type>Weekly</type>[![](../../minus.gif)](../../#)<wPer>
  <evWs>1</evWs>[![](../../minus.gif)](../../#)<dsOfW>
  <it>1</it>  </dsOfW>
  </wPer>
  </per>
  <rep xmlns="****">4</rep>  <id xmlns="****">START_TIMER_EVENT</id>  <stDT xmlns="****">2024-12-26T07:00:00.000Z</stDT>  </GetStartEventSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetStartEventSettings" :
  {
   "tBpmProcess" :
    {
     "id" : "DICNGBKNAJKEGOAEPFPJHGAAEMHJPFIEHLGHCIACBBLCJJKA!M!S!BPAHEICDKNAJKEGOAECMEPDJAJDGAPEBCELJDMNJMLEPENHPHE"
    },
   "tArg" :
    {
     "optType" : "0"
    }
  }
}

### JSON-ответ:


{
 "GetStartEventSettingsResult" :
  {
   "optType" : "0",
   "per" :
    {
     "type" : "Weekly",
     "wPer" :
      {
       "evWs" : "1",
       "dsOfW" :
        {
         "it" : "1"
        }
      }
    },
   "rep" : "4",
   "id" : "START_TIMER_EVENT",
   "stDT" : "2024-12-26T07:00:00.000Z"
  }
}


public static BpmStartEventInfo GetStartEventSettings(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetStartEventSettings()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new GetStartEventSettingsArg()
        {
            optType = 0
        }
    };
    // Получение настроек стартового события
    var result = somClient.GetStartEventSettings(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
