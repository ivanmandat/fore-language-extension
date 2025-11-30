# GetProcessInstances: Операция

GetProcessInstances: Операция
-


**


# GetProcessInstances


## Синтаксис


GetProcessInstancesResult GetProcessInstances(BpmProcessId
 tBpmProcess, BProcessInstancesArg arg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


arg.
 Параметры выполнения операции.


## Описание


Операция GetProcessInstances
 получает список выполняемых экземпляров процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm). Если требуется
 получить список подпроцессов, которые являются дочерними для экземпляра
 процесса, то укажите ключ процесса в поле arg.parentInstKey.


Результатом операции будет полученный список выполняемых экземпляров
 процесса.


## Пример


Ниже приведён пример получения списка выполняемых экземпляров процесса.
 В запросе передаётся моникёр открытого процесса. В ответе возвращается
 полученная информация.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetProcessInstances xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>MGJFJPPOBBDDGOAECMABJPKINDGPEBIEBLJDEKDGIANBKOGK!M!S!BPIMOEODAPBBDDGOAEDHLCADLCMDDIJDCEGJPKIJEBEEOLAHIL</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<arg xmlns="****">
  <mode>Default</mode>  </arg>
  </GetProcessInstances>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetProcessInstancesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <operations xmlns="****">1</operations>[![](../../minus.gif)](../../#)<list xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <key>98037</key>  <startDate>21.06.2024 08:27:14</startDate>  <comment />
  <prms>Филиалы = 'Большие филиалы'</prms>  </it>
  </list>
  </GetProcessInstancesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetProcessInstances" :
  {
   "tBpmProcess" :
    {
     "id" : "MGJFJPPOBBDDGOAECMABJPKINDGPEBIEBLJDEKDGIANBKOGK!M!S!BPIMOEODAPBBDDGOAEDHLCADLCMDDIJDCEGJPKIJEBEEOLAHIL"
    },
   "arg" :
    {
     "mode" : "Default"
    }
  }
}

### JSON-ответ:


{
 "GetProcessInstancesResult" :
  {
   "operations" : "1",
   "list" :
    {
     "it" :
      {
       "key" : "98037",
       "startDate" : "21.06.2024 08:27:14",
       "comment" : "",
       "prms" : "Филиалы = 'Большие филиалы'"
      }
    }
  }
}


public static GetProcessInstancesResult GetProcessInstances(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetProcessInstances()
    {
        tBpmProcess = new BpmProcessId() { id = moniker },
        arg = new BProcessInstancesArg() { mode = 0 }
    };
    // Получение списка выполняющихся экземпляров заданного процесса
    var result = somClient.GetProcessInstances(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
