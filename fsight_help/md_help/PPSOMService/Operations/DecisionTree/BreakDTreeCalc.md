# BreakDTreeCalc: Операция

BreakDTreeCalc: Операция
-


**


# BreakDTreeCalc


## Синтаксис


DTreeCalcStateResult BreakDTreeCalc(DTreeId tTree,
 BreakDtCalculationArg tArg)


## Параметры


tTree. Моникёр
 экземпляра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция BreakDTreeCalc прерывает
 расчёт дерева решений.


## Комментарии


Для выполнения операции укажите в поле tTree
 моникёр экземпляра дерева решений, а в поле tArg
 параметры прерывания расчёта. Моникёр может быть получен при выполнении
 операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будут данные о текущем статусе выполнения
 расчёта.


## Пример


Ниже приведён пример прерывания расчёта дерева решений. В запросе передаётся
 моникёр экземпляра дерева решений. В ответе возвращаются данные о текущем
 состоянии расчёта.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<BreakDTreeCalc xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO</id>  </tTree>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <isHardBreak>true</isHardBreak>  </tArg>
  </BreakDTreeCalc>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<BreakDTreeCalcResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<calcState xmlns="****">
  <state>Completed</state>  </calcState>
  </BreakDTreeCalcResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "BreakDTreeCalc" :
  {
   "tTree" :
    {
     "id" : "OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO"
    },
   "tArg" :
    {
     "isHardBreak" : "true"
    }
  }
}

### JSON-ответ:


{
 "BreakDTreeCalcResult" :
  {
   "calcState" :
    {
     "state" : "Completed"
    }
  }
}


public static DTreeCalcStateResult BreakDTreeCalc(string treeMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tCheck = new BreakDTreeCalc()
    {
        tTree = new DTreeId() { id = treeMoniker },
        tArg = new BreakDtCalculationArg()
        {
            isHardBreak = true
        }
    };
    // Прерывание расчёта дерева решений
    var result = somClient.BreakDTreeCalc(tCheck);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
