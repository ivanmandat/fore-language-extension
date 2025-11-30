# CalculateDTree: Операция

CalculateDTree: Операция
-


**


# CalculateDTree


## Синтаксис


CalculateDTreeResult CalculateDTree(DTreeId tTree)


## Параметры


tTree. Моникёр
 экземпляра дерева решений.


## Описание


Операция CalculateDTree запускает
 расчёт дерева решений.


## Комментарии


Для выполнения операции укажите в поле tTree
 моникёр открытого экземпляра дерева решений. Моникёр может быть получен
 при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом операции будет признак успешного выполнения, список возможных
 ошибок и таблица решений дерева.


## Пример


Ниже приведён пример запуска расчёта дерева решений. В запросе передаётся
 моникёр открытого экземпляра дерева решений. В ответе возвращается текущий
 статус расчёта.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CalculateDTree xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>GDLFODACFJDNFOAEFOBIIGIPLEPCKNLELKFPGKMHFLLMJGGA!M!S!CJOCHJEACFJDNFOAEEGDBIJFHENMAOMAEDIEGKGLEGLJCDNIE</id>  </tTree>
  </CalculateDTree>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<CalculateDTreeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<calcState xmlns="****">
  <state>Running</state>  </calcState>
  </CalculateDTreeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CalculateDTree" :
  {
   "tTree" :
    {
     "id" : "GDLFODACFJDNFOAEFOBIIGIPLEPCKNLELKFPGKMHFLLMJGGA!M!S!CJOCHJEACFJDNFOAEEGDBIJFHENMAOMAEDIEGKGLEGLJCDNIE"
    }
  }
}

### JSON-ответ:


{
 "CalculateDTreeResult" :
  {
   "calcState" :
    {
     "state" : "Running"
    }
  }
}


public static CalculateDTreeResult CalculateDecisionTree(string treeMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tCalc = new CalculateDTree()
    {
        tTree = new DTreeId() { id = treeMoniker },
    };
    // Расчёт дерева решений
    var result = somClient.CalculateDTree(tCalc);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
