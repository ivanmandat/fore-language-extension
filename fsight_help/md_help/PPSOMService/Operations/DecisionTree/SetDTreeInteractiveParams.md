# SetDTreeInteractiveParams: Операция

SetDTreeInteractiveParams: Операция
-


**


# SetDTreeInteractiveParams


## Синтаксис


SetDTreeInteractiveParamsResult SetDTreeInteractiveParams(DTreeId
 tTree, SetDTreeInteractiveParamsArg tArg)


## Параметры


tTree. Моникёр
 экземпляра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDTreeInteractiveParams
 устанавливает значения для параметров дерева решений.


## Комментарии


Операция используется для определения значений тех параметров, у которых
 это предусмотрено только во время расчёта дерева решений, или не было
 рассчитано и требуется для продолжения расчёта всего дерева решений. Для
 выполнения операции укажите в поле tTree
 моникёр экземпляра дерева решений, а в поле tArg
 устанавливаемые значения параметров. Моникёр может быть получен при выполнении
 операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет признак успешной установки значений
 параметров.


## Пример


Ниже приведён пример установки значений параметров, необходимых для
 продолжения расчёта дерева решений. В запросе передаётся моникёр экземпляра
 дерева решений и значения параметра. В ответе возвращается признак успешной
 установки значения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDTreeInteractiveParams xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO</id>  </tTree>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<values>
[![](../../minus.gif)](../../#)<its>
  <paramId>DT033E4C875B8D4728940F3E27501A2567</paramId>  <value>10</value>  </its>
  </values>
  </tArg>
  </SetDTreeInteractiveParams>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDTreeInteractiveParamsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </SetDTreeInteractiveParamsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDTreeInteractiveParams" :
  {
   "tTree" :
    {
     "id" : "OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO"
    },
   "tArg" :
    {
     "values" :
      {
       "its" :
        {
         "paramId" : "DT033E4C875B8D4728940F3E27501A2567",
         "value" : "10"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetDTreeInteractiveParamsResult" :
  {
   "result" : "1"
  }
}


public static SetDTreeInteractiveParamsResult SetDTreeParams(string treeMoniker, DTreeParamValue[] paramValues)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDTreeInteractiveParams()
    {
        tTree = new DTreeId() { id = treeMoniker },
        tArg = new SetDTreeInteractiveParamsArg()
        {
            values = paramValues
        }
    };
    // Установка значений параметров
    var result = somClient.SetDTreeInteractiveParams(tSet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
