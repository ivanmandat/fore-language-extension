# GetBpmStepOperations: Операция

GetBpmStepOperations: Операция
-


**


# GetBpmStepOperations


## Синтаксис


BpmStepOperationStatusResult GetBpmStepOperations(BpmProcessId
 tBpmProcess, GetBpmStepOperationsArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetBpmStepOperations
 получает список операций, доступных для шага выполняемого экземпляра процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm). В поле tArg.instId укажите уникальный
 ключ экземпляра выполняемого процесса. Ключ доступен в коллекции list результата выполнения операции
 [GetProcessInstances](GetProcessInstances.htm). В поле tArg.guids укажите GUID'ы шагов.
 GUID'ы можно получить в результате операции [GetBpmMonitoringWorkspace](GetBpmMonitoringWorkspace.htm).


Результатом выполнения операции будет коллекция элементов с информацией
 о доступных для шагов операциях.


## Пример


Ниже приведён пример списка операций, которые доступны для шагов выполняемого
 процесса. В запросе передаётся моникёр открытого процесса, ключ экземпляра
 процесса и GUID'ы шагов. В ответе возвращается полученный список доступных
 шагов.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetBpmStepOperations xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>MGJFJPPOBBDDGOAECMABJPKINDGPEBIEBLJDEKDGIANBKOGK!M!S!BPIMOEODAPBBDDGOAEDHLCADLCMDDIJDCEGJPKIJEBEEOLAHIL</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <instId>98037</instId>[![](../../minus.gif)](../../#)<guids>
  <it>{17AE01A0-8BDA-4B2C-8BF3-B48A6A411EE1}</it>  <it>{9EE92EA8-E209-45D5-B662-7063A93FA887}</it>  </guids>
  </tArg>
  </GetBpmStepOperations>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetBpmStepOperationsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<steps xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <guid>{17AE01A0-8BDA-4B2C-8BF3-B48A6A411EE1}</guid>[![](../../minus.gif)](../../#)<ops>
  <it>1</it>  <it>8</it>  </ops>
[![](../../minus.gif)](../../#)<bindParams>
[![](../../minus.gif)](../../#)<it>
  <paramId>OBJ168001_0</paramId>  <dimKey>168001</dimKey>  <mnk>MGJFJPPOBBDDGOAECMABJPKINDGPEBIEBLJDEKDGIANBKOGK!M!S!SBBHMKLAPBBDDGOAEGNHJGINPEEBHEKOELIIFKIFHGFHIKGML</mnk>  </it>
  </bindParams>
  <autoExec>0</autoExec>  </it>
[![](../../minus.gif)](../../#)<it>
  <guid>{9EE92EA8-E209-45D5-B662-7063A93FA887}</guid>  <ops />
  <bindParams />
  <autoExec>0</autoExec>  </it>
  </steps>
  </GetBpmStepOperationsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetBpmStepOperations" :
  {
   "tBpmProcess" :
    {
     "id" : "MGJFJPPOBBDDGOAECMABJPKINDGPEBIEBLJDEKDGIANBKOGK!M!S!BPIMOEODAPBBDDGOAEDHLCADLCMDDIJDCEGJPKIJEBEEOLAHIL"
    },
   "tArg" :
    {
     "instId" : "98037",
     "guids" :
      {
       "it" :
        [
          "{17AE01A0-8BDA-4B2C-8BF3-B48A6A411EE1}",
          "{9EE92EA8-E209-45D5-B662-7063A93FA887}"
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "GetBpmStepOperationsResult" :
  {
   "steps" :
    {
     "it" :
      [
        {
         "guid" : "{17AE01A0-8BDA-4B2C-8BF3-B48A6A411EE1}",
         "ops" :
          {
           "it" :
            [
              "1",
              "8"
            ]
          },
         "bindParams" :
          {
           "it" :
            {
             "paramId" : "OBJ168001_0",
             "dimKey" : "168001",
             "mnk" : "MGJFJPPOBBDDGOAECMABJPKINDGPEBIEBLJDEKDGIANBKOGK!M!S!SBBHMKLAPBBDDGOAEGNHJGINPEEBHEKOELIIFKIFHGFHIKGML"
            }
          },
         "autoExec" : "0"
        },
        {
         "guid" : "{9EE92EA8-E209-45D5-B662-7063A93FA887}",
         "ops" : "",
         "bindParams" : "",
         "autoExec" : "0"
        }
      ]
    }
  }
}


public static BpmStepOperationStatusResult GetBpmStepOperations(string moniker, int instanceKey, string[] stepGUIDs)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetBpmStepOperations()
    {
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new GetBpmStepOperationsArg()
        {
            instId = instanceKey,
            guids = stepGUIDs
        }
    };
    // Получение список операций, доступных для шагов выполняемого экземпляра процесса
    var result = somClient.GetBpmStepOperations(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
