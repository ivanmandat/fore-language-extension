# SetBpmProcessSettings: Операция

SetBpmProcessSettings: Операция
-


**


# SetBpmProcessSettings


## Синтаксис


bool SetBpmProcessSettings(BpmProcessId tBpmProcess,
 BpmProcessSettings tBpmProcessSettings)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tBpmProcessSettings. Настройки
 параметров, которые необходимо применить для процесса.


## Описание


Операция SetBpmProcessSettings
 изменяет настройки процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tBpmProcessSettings
 изменяемые настройки. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm). Процесс должен
 быть открыт на редактирование.


Результатом выполнения операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения списка параметров в настройках процесса.
 В запросе передаётся моникёр открытого процесса и настройки создаваемого
 параметра. В ответе возвращается признак успешного изменения списка параметров.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetBpmProcessSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>PCMPFKDANKDAGOAEHGGCMAILKEKKFDIEKJCJBILJBEBFPLMF!M!S!BPGFFNKBEANKDAGOAEDJNBGLCJMDPBKHHEIKDLOLJJHKCKAIFG</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tBpmProcessSettings xmlns="****">
[![](../../minus.gif)](../../#)<paramsSettings>
[![](../../minus.gif)](../../#)<bpmProcessParams>
[![](../../minus.gif)](../../#)<it>
  <dictKey>338159</dictKey>  <dictName>Версия планирования</dictName>  </it>
  </bpmProcessParams>
  </paramsSettings>
  </tBpmProcessSettings>
  </SetBpmProcessSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetBpmProcessSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetBpmProcessSettingsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetBpmProcessSettings" :
  {
   "tBpmProcess" :
    {
     "id" : "PCMPFKDANKDAGOAEHGGCMAILKEKKFDIEKJCJBILJBEBFPLMF!M!S!BPGFFNKBEANKDAGOAEDJNBGLCJMDPBKHHEIKDLOLJJHKCKAIFG"
    },
   "tBpmProcessSettings" :
    {
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
}

### JSON-ответ:


{
 "SetBpmProcessSettingsResult" : "1"
}


public static bool SetBpmProcessSettings(string moniker, BpmProcessParams[] bpmParams)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetBpmProcessSettings()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        // Параметры
        tBpmProcessSettings = new BpmProcessSettings()
        {
            paramsSettings = new BpmProcessParamsSettings()
            {
                bpmProcessParams = bpmParams
            }
        }
    };
    // Изменение информации о параметрах
    var result = somClient.SetBpmProcessSettings(tSet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
