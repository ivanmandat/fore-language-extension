# RemoveDecisionTreeObjects: Операция

RemoveDecisionTreeObjects: Операция
-


**


# RemoveDecisionTreeObjects


## Синтаксис


RemoveDecisionTreeObjectsResult RemoveDecisionTreeObjects(OdId
 tTree, RemoveDecisionTreeObjectsArg tArg)


## Параметры


tTree. Моникёр
 открытого экземпляра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция RemoveDecisionTreeObjects
 удаляет блоки в рабочей области дерева решений.


## Комментарии


Для выполнения операции укажите в поле tTree
 моникёр экземпляра дерева решений, а в поле tArg
 параметры удаления блоков. Моникёр может быть получен при выполнении операции
 [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет признак успешного удаления блоков.


## Пример


Ниже приведён пример удаления блока в дереве решений. В запросе передаётся
 моникёр открытого экземпляра дерева решений и идентификатор удаляемого
 объекта. В ответе возвращается признак успешного удаления.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<RemoveDecisionTreeObjects xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>FDDEPGHMFLMLFOAEPIHADAAMMDDHFJLEJIDFFPMLJMAEDELM!M!S!CMPCCKHHMFLMLFOAEDEIBAJHJBDKBGLJEILHKIFGHADNADEAO</id>  </tTree>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<ids>
  <its>DT224525B786524CD6A3E93A6C19ABD4CD</its>  </ids>
  </tArg>
  </RemoveDecisionTreeObjects>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<RemoveDecisionTreeObjectsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </RemoveDecisionTreeObjectsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RemoveDecisionTreeObjects" :
  {
   "tTree" :
    {
     "id" : "FDDEPGHMFLMLFOAEPIHADAAMMDDHFJLEJIDFFPMLJMAEDELM!M!S!CMPCCKHHMFLMLFOAEDEIBAJHJBDKBGLJEILHKIFGHADNADEAO"
    },
   "tArg" :
    {
     "ids" :
      {
       "its" : "DT224525B786524CD6A3E93A6C19ABD4CD"
      }
    }
  }
}

### JSON-ответ:


{
 "RemoveDecisionTreeObjectsResult" :
  {
   "result" : "1"
  }
}


public static RemoveDecisionTreeObjectsResult RemoveDecisionTreeObjects(string treeMoniker, string[] delObjects)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new RemoveDecisionTreeObjects()
    {
        tTree = new OdId() { id = treeMoniker },
        tArg = new RemoveDecisionTreeObjectsArg()
        {
            ids = delObjects
        }
    };
    // Удаление объектов
    var result = somClient.RemoveDecisionTreeObjects(tDel);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
