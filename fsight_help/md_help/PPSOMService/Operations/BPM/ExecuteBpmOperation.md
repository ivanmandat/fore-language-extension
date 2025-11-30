# ExecuteBpmOperation: Операция

ExecuteBpmOperation: Операция
-


**


# ExecuteBpmOperation


## Синтаксис


bool ExecuteBpmOperation(BpmProcessId tBpmProcess,
 ExecuteBpmOperationArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция ExecuteBpmOperation
 выполняет различные операции при работе с экземплярами выполняющихся процессов.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm). В поле tArg.oper определите выполняемую
 операцию. Если операция выполняется для экземпляров процессов, то определите
 поле tArg.instIds. Идентификаторы
 экземпляров процессов можно получить в результате операции [GetProcessInstances](GetProcessInstances.htm).
 Если операция выполняется для какого-либо шага, то определите поле tArg.guid. GUID'ы шагов можно получить
 в результате операции [GetBpmMonitoringWorkspace](GetBpmMonitoringWorkspace.htm).
 При необходимости можно определить другие необязательные поля.


Результатом выполнения операции будет логическое значение true,
 если операция завершилась успешно.


## Пример


Ниже приведён пример остановки выполняющегося экземпляра процесса. В
 запросе передаётся моникёр открытого процесса и идентификатор выполняющегося
 экземпляра процесса, а также выполняемая операция. В ответе возвращается
 признак успешной остановки экземпляра процесса.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ExecuteBpmOperation xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>NPHEOHFBGPCDGOAEFHEOFIIANCEEIDGECLDJGGBNCPACAJOB!M!S!BPJKLPJNFBGPCDGOAEEGOFJMAOEDKBLKDEALEJKADCFIEOHNAC</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <oper>ProcessStop</oper>[![](../../minus.gif)](../../#)<instIds>
  <it>97976</it>  </instIds>
  <comment />
  </tArg>
  </ExecuteBpmOperation>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <ExecuteBpmOperationResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</ExecuteBpmOperationResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ExecuteBpmOperation" :
  {
   "tBpmProcess" :
    {
     "id" : "NPHEOHFBGPCDGOAEFHEOFIIANCEEIDGECLDJGGBNCPACAJOB!M!S!BPJKLPJNFBGPCDGOAEEGOFJMAOEDKBLKDEALEJKADCFIEOHNAC"
    },
   "tArg" :
    {
     "oper" : "ProcessStop",
     "instIds" :
      {
       "it" : "97976"
      },
     "comment" : ""
    }
  }
}

### JSON-ответ:


{
 "ExecuteBpmOperationResult" : "1"
}


public static bool ExecuteBpmOperation(string moniker, int instId, BProcessMonitoringExecuteOperation operation, string operComment = "")
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tExec = new ExecuteBpmOperation()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new ExecuteBpmOperationArg()
        {
            instIds = new int[1] { instId },
            oper = operation,
            comment = operComment
        }
    };
    // Выполнение операции над запущенным экземпляром процесса
    var result = somClient.ExecuteBpmOperation(tExec);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
