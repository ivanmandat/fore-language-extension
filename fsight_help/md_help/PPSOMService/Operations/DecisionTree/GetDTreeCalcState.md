# GetDTreeCalcState: Операция

GetDTreeCalcState: Операция
-


**


# GetDTreeCalcState


## Синтаксис


DTreeCalcStateResult GetDTreeCalcState(DTreeId tTree)


## Параметры


tTree. Моникёр
 экземпляра дерева решений.


## Описание


Операция GetDTreeCalcState получает
 текущее состояния расчёта дерева решений.


## Комментарии


Для выполнения операции укажите в поле tTree
 моникёр экземпляра дерева решений. Моникёр может быть получен при выполнении
 операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будут данные о текущем статусе выполнения
 расчёта.


## Пример


Ниже приведён пример получения статуса выполнения расчёта дерева решений.
 В запросе передаётся моникёр экземпляра дерева решений. В ответе возвращаются
 полученные данные.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDTreeCalcState xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO</id>  </tTree>
  </GetDTreeCalcState>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDTreeCalcStateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<calcState xmlns="****">
  <state>PausedInteractiveParamsRequired</state>[![](../../minus.gif)](../../#)<unsetParams>
  <blockId>DT7E547BC1CD284AFBA44DDCB42FA2D24C</blockId>[![](../../minus.gif)](../../#)<unsetParams>
  <its>DT033E4C875B8D4728940F3E27501A2567</its>  </unsetParams>
  </unsetParams>
[![](../../minus.gif)](../../#)<calculatingBlock>
  <blockId>DT7E547BC1CD284AFBA44DDCB42FA2D24C</blockId>  <inputLinkId>DTAAAC89AD7BEF42E9BBA0B3C2EDF7B905</inputLinkId>  </calculatingBlock>
[![](../../minus.gif)](../../#)<calculatedBlocks>
[![](../../minus.gif)](../../#)<its>
  <blockId>DTE41D060277F24940BE669F817B793081</blockId>  </its>
  </calculatedBlocks>
  </calcState>
  </GetDTreeCalcStateResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDTreeCalcState" :
  {
   "tTree" :
    {
     "id" : "OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO"
    }
  }
}

### JSON-ответ:


{
 "GetDTreeCalcStateResult" :
  {
   "calcState" :
    {
     "state" : "PausedInteractiveParamsRequired",
     "unsetParams" :
      {
       "blockId" : "DT7E547BC1CD284AFBA44DDCB42FA2D24C",
       "unsetParams" :
        {
         "its" : "DT033E4C875B8D4728940F3E27501A2567"
        }
      },
     "calculatingBlock" :
      {
       "blockId" : "DT7E547BC1CD284AFBA44DDCB42FA2D24C",
       "inputLinkId" : "DTAAAC89AD7BEF42E9BBA0B3C2EDF7B905"
      },
     "calculatedBlocks" :
      {
       "its" :
        {
         "blockId" : "DTE41D060277F24940BE669F817B793081"
        }
      }
    }
  }
}


public static DTreeCalcStateResult GetDTreeCalcState(string treeMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDTreeCalcState()
    {
        tTree = new DTreeId() { id = treeMoniker }
    };
    // Получение текущего состояния расчёта дерева решений
    var result = somClient.GetDTreeCalcState(tGet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
