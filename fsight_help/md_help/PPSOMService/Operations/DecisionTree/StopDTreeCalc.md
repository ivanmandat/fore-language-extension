# StopDTreeCalc: Операция

StopDTreeCalc: Операция
-


**


# StopDTreeCalc


## Синтаксис


DTreeCalcStateResult StopDTreeCalc(DTreeId tTree)


## Параметры


tTree. Моникёр
 экземпляра дерева решений.


## Описание


Операция StopDTreeCalc приостанавливает
 расчёт дерева решений.


## Комментарии


Для выполнения операции укажите в поле tTree
 моникёр экземпляра дерева решений. Моникёр может быть получен при выполнении
 операции [OpenDecisionTree](OpenDecisionTree.htm). Для возобновления
 расчёта используйте операцию [ResumeDTreeCalc](ResumeDTreeCalc.htm).


Результатом выполнения операции будут данные о текущем статусе выполнения
 расчёта.


## Пример


Ниже приведён пример приостановки расчёта дерева решений. В запросе
 передаётся моникёр экземпляра дерева решений. В ответе возвращаются данные
 о текущем состоянии расчёта.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<StopDTreeCalc xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO</id>  </tTree>
  </StopDTreeCalc>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<StopDTreeCalcResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<calcState xmlns="****">
  <state>Completed</state>  </calcState>
  </StopDTreeCalcResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "StopDTreeCalc" :
  {
   "tTree" :
    {
     "id" : "OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO"
    }
  }
}

### JSON-ответ:


{
 "StopDTreeCalcResult" :
  {
   "calcState" :
    {
     "state" : "Completed"
    }
  }
}


public static DTreeCalcStateResult StopDTreeCalc(string treeMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tStop = new StopDTreeCalc()
    {
        tTree = new DTreeId() { id = treeMoniker }
    };
    // Приостановка расчёта дерева решений
    var result = somClient.StopDTreeCalc(tStop);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
