# SaveDecisionTree: Операция

SaveDecisionTree: Операция
-


**


# SaveDecisionTree


## Синтаксис


SaveDecisionTreeResult SaveDecisionTree(OdId tTree)


## Параметры


tTree. Моникёр
 открытого экземпляра дерева решений.


## Описание


Операция SaveDecisionTree сохраняет
 изменения в дереве решений.


## Комментарии


Для выполнения операции укажите в поле tTree
 моникёр экземпляра дерева решений. Моникёр может быть получен при выполнении
 операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет признак успешного сохранения изменений.


## Пример


Ниже приведён пример сохранения изменений в дереве решений. В запросе
 передаётся моникёр экземпляра дерева решений. В ответе возвращается признак
 успешного сохранения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SaveDecisionTree xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>DJPCAELDGFAMFOAEELBKEGNKOMMCLFMEMLKHPJJAEHLNLMOA!M!S!CIKFPNHLDGFAMFOAEMOBLEJPPGKEPNNCEKIBJHJJMFEBJKMFB</id>  </tTree>
  </SaveDecisionTree>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SaveDecisionTreeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </SaveDecisionTreeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SaveDecisionTree" :
  {
   "tTree" :
    {
     "id" : "DJPCAELDGFAMFOAEELBKEGNKOMMCLFMEMLKHPJJAEHLNLMOA!M!S!CIKFPNHLDGFAMFOAEMOBLEJPPGKEPNNCEKIBJHJJMFEBJKMFB"
    }
  }
}

### JSON-ответ:


{
 "SaveDecisionTreeResult" :
  {
   "result" : "1"
  }
}


public static SaveDecisionTreeResult SaveDecisionTree(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSave = new SaveDecisionTree()
    {
        tTree = new OdId() { id = moniker }
    };
    // Сохранение изменений дерева решений
    var result = somClient.SaveDecisionTree(tSave);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
