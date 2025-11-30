# VerifyDecisionTree: Операция

VerifyDecisionTree: Операция
-


**


# VerifyDecisionTree


## Синтаксис


VerifyDecisionTreeResult VerifyDecisionTree(OdId
 tTree)


## Параметры


tTree. Моникёр
 открытого экземпляра дерева решений.


## Описание


Операция VerifyDecisionTree
 проверяет на корректность дерево решений.


## Комментарии


Для выполнения операции укажите в поле tTree
 моникёр открытого экземпляра дерева решений. Моникёр может быть получен
 при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).
 При выполнении операции осуществляется проверка наличия и корректность
 связей между всеми блоками дерева решений.


Результатом выполнения операции будет признак успешной проверки и возможный
 список ошибок.


## Пример


Ниже приведён пример проверки корректности дерева решений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<VerifyDecisionTree xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>GDLFODACFJDNFOAEFOBIIGIPLEPCKNLELKFPGKMHFLLMJGGA!M!S!CJOCHJEACFJDNFOAEEGDBIJFHENMAOMAEDIEGKGLEGLJCDNIE</id>  </tTree>
  </VerifyDecisionTree>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<VerifyDecisionTreeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  <verificationErrorList xmlns="****" />
  </VerifyDecisionTreeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "VerifyDecisionTree" :
  {
   "tTree" :
    {
     "id" : "GDLFODACFJDNFOAEFOBIIGIPLEPCKNLELKFPGKMHFLLMJGGA!M!S!CJOCHJEACFJDNFOAEEGDBIJFHENMAOMAEDIEGKGLEGLJCDNIE"
    }
  }
}

### JSON-ответ:


{
 "VerifyDecisionTreeResult" :
  {
   "result" : "1",
   "verificationErrorList" : ""
  }
}


public static VerifyDecisionTreeResult VerifyDecisionTree(string treeMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tCheck = new VerifyDecisionTree()
    {
        tTree = new OdId() { id = treeMoniker }
    };
    // Проверка корректности дерева решений
    var result = somClient.VerifyDecisionTree(tCheck);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
