# ResumeDTreeCalc: Операция

ResumeDTreeCalc: Операция
-


**


# ResumeDTreeCalc


## Синтаксис


DTreeCalcStateResult ResumeDTreeCalc(DTreeId tTree)


## Параметры


tTree. Моникёр
 экземпляра дерева решений.


## Описание


Операция ResumeDTreeCalc возобновляет
 расчёт дерева решений после приостановки.


## Комментарии


Для выполнения операции укажите в поле tTree
 моникёр экземпляра дерева решений. Моникёр может быть получен при выполнении
 операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будут данные о текущем статусе выполнения
 расчёта.


## Пример


Ниже приведён пример возобновления после остановки расчёта дерева решений.
 В запросе передаётся моникёр экземпляра дерева решений. В ответе возвращаются
 данные о текущем состоянии расчёта.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ResumeDTreeCalc xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO</id>  </tTree>
  </ResumeDTreeCalc>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<ResumeDTreeCalcResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<calcState xmlns="****">
  <state>Running</state>  </calcState>
  </ResumeDTreeCalcResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ResumeDTreeCalc" :
  {
   "tTree" :
    {
     "id" : "OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO"
    }
  }
}

### JSON-ответ:


{
 "ResumeDTreeCalcResult" :
  {
   "calcState" :
    {
     "state" : "Running"
    }
  }
}


public static DTreeCalcStateResult ResumeDTreeCalc(string treeMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tRes = new ResumeDTreeCalc()
    {
        tTree = new DTreeId() { id = treeMoniker }
    };
    // Возобновление расчёта дерева решений
    var result = somClient.ResumeDTreeCalc(tRes);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
