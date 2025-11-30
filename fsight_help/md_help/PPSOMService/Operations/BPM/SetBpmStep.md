# SetBpmStep: Операция

SetBpmStep: Операция
-


**


# SetBpmStep


## Синтаксис


bool SetBpmStep(BpmProcessId tBpmProcess, BpmStepArg
 bpmStepArg)


## Параметры


tBpmProcess. Моникёр открытого
 процесса.


bpmStepArg. Параметры
 выполнения операции.


## Описание


Операция SetBpmStep изменяет
 настройки шага процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле bpmStepArg
 определите какие настройки шага будут изменены. Моникёр может быть получен
 при выполнении операции [OpenBpmProcess](OpenBpmProcess.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение настроек шага завершилось успешно, или информация об ошибке,
 если какой-либо параметр задан некорректно.


## Пример


Ниже приведён пример изменения настроек шага процесса. В запросе передаётся
 моникёр открытого процесса и настройки шага. В ответе возвращается признак
 успешного изменения настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetBpmStep xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>HCCHPFCEOKKEGOAEIEHCIOKNOCLDDHIEFIHLKFNHGNCKFAMP!M!S!BPKGCGEJCEOKKEGOAEJBOMCNNAIOMLLLCEELEHEIIOADLCIINK</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tBpmStepArg xmlns="****">
  <isEnabled>false</isEnabled>  <name>Новое наименование шага</name>  <guid>{354F963A-8195-461E-BC49-CC14F1E64F92}</guid>  <descr>Шаг временно исключён из расчёта</descr>  <roleId>PS-1-1</roleId>  <roleName>ADMIN</roleName>[![](../../minus.gif)](../../#)<maxDur>
  <periodType>Day</periodType>  <amount>1</amount>  </maxDur>
  <minDeadline>18:00</minDeadline>  <checkDeadline>false</checkDeadline>[![](../../minus.gif)](../../#)<bindOpt>
  <optType>Base</optType>  </bindOpt>
  </tBpmStepArg>
  </SetBpmStep>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetBpmStepResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <validate xmlns="****">1</validate>  </SetBpmStepResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetBpmStep" :
  {
   "tBpmProcess" :
    {
     "id" : "HCCHPFCEOKKEGOAEIEHCIOKNOCLDDHIEFIHLKFNHGNCKFAMP!M!S!BPKGCGEJCEOKKEGOAEJBOMCNNAIOMLLLCEELEHEIIOADLCIINK"
    },
   "tBpmStepArg" :
    {
     "isEnabled" : "false",
     "name" : "Новое наименование шага",
     "guid" : "{354F963A-8195-461E-BC49-CC14F1E64F92}",
     "descr" : "Шаг временно исключён из расчёта",
     "roleId" : "PS-1-1",
     "roleName" : "ADMIN",
     "maxDur" :
      {
       "periodType" : "Day",
       "amount" : "1"
      },
     "minDeadline" : "18:00",
     "checkDeadline" : "false",
     "bindOpt" :
      {
       "optType" : "Base"
      }
    }
  }
}

### JSON-ответ:


{
 "SetBpmStepResult" :
  {
   "validate" : "1"
  }
}


public static BpmStepValidateResult SetBpmStep(string moniker, string stepGuid)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetBpmStep()
    {
        tBpmProcess = new BpmProcessId() { id = moniker },
        tBpmStepArg = new BpmStepArg()
        {
            guid = stepGuid,
            bindOpt = new BpmBindingParamOption()
            {
                optType = BpmStepOptionType.Base
            },
            checkDeadline = false,
            name = "Новое наименование шага",
            descr = "Шаг временно исключён из расчёта",
            isEnabled = false,
            roleId = "PS-1-1",
            roleName = "ADMIN",
            maxDur = new BpmStepDuration()
            {
                amount = 1,
                periodType = BDurationType.Day
            },
            minDeadline = "18:00"
        }
    };
    // Изменение настроек шага
    var result = somClient.SetBpmStep(tSet);
    return result;
}


См. также:


[Работа с
 бизнес-процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
