# AddDecisionTreeModificationSession: Операция

AddDecisionTreeModificationSession: Операция
-


**


# AddDecisionTreeModificationSession


## Синтаксис


AddDecisionTreeModificationSessionResult AddDecisionTreeModificationSession(OdId
 tTree)


## Параметры


tTree. Моникёр
 открытого экземпляра дерева решений.


## Описание


Операция AddDecisionTreeModificationSession
 добавляет сессию изменения дерева решений.


## Комментарии


Сессия изменения дерева решений используется при работе с параметрами
 и метриками дерева решений. Использование отдельной сессии позволяет произвести
 комплекс изменений над одним или несколькими параметрами/метриками, а
 затем сохранить или отменить внесённые изменения за одну операцию. Для
 выполнения операции укажите в поле tTree
 моникёр открытого экземпляра дерева решений. Моникёр может быть получен
 при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет моникёр сессии изменения дерева
 решений и уникальный идентификатор настроек параметров и метрик.


Для применения/отмены внесённых изменений используйте операции [CommitDecisionTreeModificationSession](CommitDecisionTreeModificationSession.htm)/[RemoveDecisionTreeModificationSession](RemoveDecisionTreeModificationSession.htm)
 соответственно.


## Пример


Ниже приведён пример добавления сессии изменения дерева решений. В запросе
 передаётся моникёр дерева решений. В ответе возвращается моникёр созданной
 сессии.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<AddDecisionTreeModificationSession xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC</id>  </tTree>
  </AddDecisionTreeModificationSession>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<AddDecisionTreeModificationSessionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  <modificationSessionId xmlns="****">LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!ModificationSessions!DT00C4C221886A485DB3DD0169413C5356</modificationSessionId>  <guid xmlns="****">DT00C4C221886A485DB3DD0169413C5356</guid>  </AddDecisionTreeModificationSessionResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "AddDecisionTreeModificationSession" :
  {
   "tTree" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC"
    }
  }
}

### JSON-ответ:


{
 "AddDecisionTreeModificationSessionResult" :
  {
   "result" : "1",
   "modificationSessionId" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!ModificationSessions!DT00C4C221886A485DB3DD0169413C5356",
   "guid" : "DT00C4C221886A485DB3DD0169413C5356"
  }
}


public static AddDecisionTreeModificationSessionResult AddDecisionTreeModificationSession(string dtMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new AddDecisionTreeModificationSession()
    {
        tTree = new OdId() { id = dtMoniker }
    };
    // Создание сессии изменения дерева решений
    var result = somClient.AddDecisionTreeModificationSession(tAdd);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
