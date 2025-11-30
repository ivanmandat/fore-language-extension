# RunDTreeDeferredModule: Операция

RunDTreeDeferredModule: Операция
-


**


# RunDTreeDeferredModule


## Синтаксис


RunDTreeDeferredModuleResult RunDTreeDeferredModule(DTreeId
 tTree, RunDTreeDeferredModuleArg tArg)


## Параметры


tTree. Моникёр
 экземпляра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция RunDTreeDeferredModule
 запускает Fore-модуль, на работу с которым настроено действие.


## Комментарии


Операция используется для запуска модулей только у тех действий, для
 которых отключен автоматический запуск (AutoRun=false) и которые остаются
 в результирующей таблице после расчёта дерева решений. Для выполнения
 операции укажите в поле tTree
 моникёр экземпляра дерева решений, а в поле tArg
 информацию о действии, которое настроено на работу с модулем. Моникёр
 может быть получен при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет признак успешного запуска Fore-модуля.


## Пример


Ниже приведён пример выполнения модуля, связанного с действием, которое
 доступно в решениях дерева. В запросе передаётся моникёр дерева решений
 и идентификатор действия. В ответе возвращается информация о результатах
 выполнения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<RunDTreeDeferredModule xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO</id>  </tTree>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <actionId>518B0CBD-6EA9-4B45-AA52-20D98B85E61E!DT7E547BC1CD284AFBA44DDCB42FA2D24C</actionId>  </tArg>
  </RunDTreeDeferredModule>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<RunDTreeDeferredModuleResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  <resultMessage xmlns="****">Действие 'Действие' успешно выполнено</resultMessage>  </RunDTreeDeferredModuleResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RunDTreeDeferredModule" :
  {
   "tTree" :
    {
     "id" : "OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO"
    },
   "tArg" :
    {
     "actionId" : "518B0CBD-6EA9-4B45-AA52-20D98B85E61E!DT7E547BC1CD284AFBA44DDCB42FA2D24C"
    }
  }
}

### JSON-ответ:


{
 "RunDTreeDeferredModuleResult" :
  {
   "result" : "1",
   "resultMessage" : "Действие 'Действие' успешно выполнено"
  }
}


public static RunDTreeDeferredModuleResult RunDTreeActionModule(string treeMoniker, string action)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tRun = new RunDTreeDeferredModule()
    {
        tTree = new DTreeId() { id = treeMoniker },
        tArg = new RunDTreeDeferredModuleArg()
        {
            actionId = action
        }
    };
    // Запуск модуля
    var result = somClient.RunDTreeDeferredModule(tRun);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
