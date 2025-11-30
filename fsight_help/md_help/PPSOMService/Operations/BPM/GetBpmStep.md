# GetBpmStep: Операция

GetBpmStep: Операция
-


**


# GetBpmStep


## Синтаксис


BpmStep GetBpmStep(BpmProcessId tBpmProcess, BpmStepArg
 tBpmStepArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tBpmStepArg. Параметры выполнения операции.


## Описание


Операция GetBpmStep получает
 настройки шага процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tBpmStepArg
 параметры извлечения настроек. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm). В поле tBpmStepArg.bindOpt.optType указывается
 какие-именно настройки необходимо получить. В поле tBpmStepArg.guid
 укажите уникальный идентификатор шага. Уникальный идентификатор можно
 получить в результатах выполнения операции [GetBpmWorkspace](GetBpmWorkspace.htm).
 Используйте поля tBpmStepArg.objBind,
 tBpmStepArg.stepType для получения
 настроек связей с параметрами процесса.


Результатом выполнения операции будут полученные настройки шага.


## Пример


Ниже приведён пример получения базовых настроек шага. В запросе передаётся
 моникёр открытого процесса и уникальный идентификатор шага. В ответе возвращаются
 полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetBpmStep xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>HCCHPFCEOKKEGOAEIEHCIOKNOCLDDHIEFIHLKFNHGNCKFAMP!M!S!BPKGCGEJCEOKKEGOAEJBOMCNNAIOMLLLCEELEHEIIOADLCIINK</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tBpmStepArg xmlns="****">
  <guid>{354F963A-8195-461E-BC49-CC14F1E64F92}</guid>[![](../../minus.gif)](../../#)<bindOpt>
  <optType>Base</optType>  </bindOpt>
  </tBpmStepArg>
  </GetBpmStep>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetBpmStepResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <isEnabled xmlns="****">0</isEnabled>  <isValid xmlns="****">1</isValid>  <name xmlns="****">Новое наименование шага</name>  <type xmlns="****">ManualTask</type>  <index xmlns="****">1</index>  <guid xmlns="****">{354F963A-8195-461E-BC49-CC14F1E64F92}</guid>  <descr xmlns="****">Шаг временно исключён из расчёта</descr>  <roleId xmlns="****">PS-1-1</roleId>  <roleName xmlns="****">ADMIN</roleName>[![](../../minus.gif)](../../#)<maxDur xmlns="****">
  <periodType>Day</periodType>  <amount>1</amount>  </maxDur>
  <minDeadline xmlns="****">18:00</minDeadline>  <checkDeadline xmlns="****">0</checkDeadline>  </GetBpmStepResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetBpmStep" :
  {
   "tBpmProcess" :
    {
     "id" : "HCCHPFCEOKKEGOAEIEHCIOKNOCLDDHIEFIHLKFNHGNCKFAMP!M!S!BPKGCGEJCEOKKEGOAEJBOMCNNAIOMLLLCEELEHEIIOADLCIINK"
    },
   "tBpmStepArg" :
    {
     "guid" : "{354F963A-8195-461E-BC49-CC14F1E64F92}",
     "bindOpt" :
      {
       "optType" : "Base"
      }
    }
  }
}

### JSON-ответ:


{
 "GetBpmStepResult" :
  {
   "isEnabled" : "0",
   "isValid" : "1",
   "name" : "Новое наименование шага",
   "type" : "ManualTask",
   "index" : "1",
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
   "checkDeadline" : "0"
  }
}


public static BpmStep GetBpmStep(string moniker, string stepGUID, BpmStepOptionType optionType = BpmStepOptionType.Base)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetBpmStep()
    {
        tBpmProcess = new BpmProcessId() { id = moniker },
        tBpmStepArg = new BpmStepArg()
        {
            bindOpt = new BpmBindingParamOption()
            {
                optType = optionType
            },
            guid = stepGUID
        }
    };
    // Получение информации о шаге
    var result = somClient.GetBpmStep(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
