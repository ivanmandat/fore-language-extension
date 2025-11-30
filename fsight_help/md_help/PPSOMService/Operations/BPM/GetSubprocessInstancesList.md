# GetSubprocessInstancesList: Операция

GetSubprocessInstancesList: Операция
-


**


# GetSubprocessInstancesList


## Синтаксис


GetProcessInstancesResult GetSubprocessInstancesList(BpmProcessId
 tBpmProcess, BProcessInstancesArg arg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetSubprocessInstancesList
 получает список подпроцессов, которые запущены и выполняются в рамках
 экземпляра процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm). В поле arg.parentInstKey укажите ключ
 выполняющегося экземпляра процесса.


Результатом выполнения операции будет полученная коллекция выполняющихся
 подпроцессов.


## Пример


Ниже приведён пример получения списка подпроцессов, запущенных в рамках
 выполняющегося экземпляра процесса. В запросе передаётся моникёр открытого
 процесса. и ключ выполняющегося экземпляра процесса. В ответе возвращается
 полученный список подпроцессов.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetSubprocessInstancesList xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>EOHGCHDLPGODGOAEHHPEEEGHEJFOAJNEOIBOJAACCPCDMAJE!M!S!BPDIKMKKDLPGODGOAENFLJMPAFGPLAPIFEBLLDBFPBHIDJCEMA</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<arg xmlns="****">
  <mode>0</mode>  <parentInstKey>106740</parentInstKey>  </arg>
  </GetSubprocessInstancesList>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetSubprocessInstancesListResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <operations xmlns="****">1</operations>[![](../../minus.gif)](../../#)<list xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <key>106752</key>  <startDate>20.09.2024 06:46:37</startDate>  <comment />
  <prms>Филиалы = 'Премский филиал'</prms>  <name>slave</name>  <mbKey>168054</mbKey>  </it>
[![](../../minus.gif)](../../#)<it>
  <key>106751</key>  <startDate>20.09.2024 06:46:37</startDate>  <comment />
  <prms>Филиалы = 'Московский филиал'</prms>  <name>slave</name>  <mbKey>168054</mbKey>  </it>
  </list>
  </GetSubprocessInstancesListResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetSubprocessInstancesList" :
  {
   "tBpmProcess" :
    {
     "id" : "EOHGCHDLPGODGOAEHHPEEEGHEJFOAJNEOIBOJAACCPCDMAJE!M!S!BPDIKMKKDLPGODGOAENFLJMPAFGPLAPIFEBLLDBFPBHIDJCEMA"
    },
   "arg" :
    {
     "mode" : "0",
     "parentInstKey" : "106740"
    }
  }
}

### JSON-ответ:


{
 "GetSubprocessInstancesListResult" :
  {
   "operations" : "1",
   "list" :
    {
     "it" :
      [
        {
         "key" : "106752",
         "startDate" : "20.09.2024 06:46:37",
         "comment" : "",
         "prms" : "Филиалы = 'Премский филиал'",
         "name" : "slave",
         "mbKey" : "168054"
        },
        {
         "key" : "106751",
         "startDate" : "20.09.2024 06:46:37",
         "comment" : "",
         "prms" : "Филиалы = 'Московский филиал'",
         "name" : "slave",
         "mbKey" : "168054"
        }
      ]
    }
  }
}


public static GetProcessInstancesResult GetSubprocessInstancesList(string moniker, int processInstanceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetSubprocessInstancesList()
    {
        tBpmProcess = new BpmProcessId() { id = moniker },
        arg = new BProcessInstancesArg() { mode = 0, parentInstKey = processInstanceKey}
    };
    // Получение списка подпроцессов, выполняющихся в рамках экземпляра процесса
    var result = somClient.GetSubprocessInstancesList(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
