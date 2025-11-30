# CommitDecisionTreeModificationSession: Операция

CommitDecisionTreeModificationSession: Операция
-


**


# CommitDecisionTreeModificationSession


## Синтаксис


CommitDecisionTreeModificationSessionResult CommitDecisionTreeModificationSession(OdId
 tModificationSession)


## Параметры


tModificationSession. Моникёр
 сессии изменения дерева решений.


## Описание


Операция CommitDecisionTreeModificationSession
 применяет изменения, внесённые в настройки параметров и метрик.


## Комментарии


Для выполнения операции укажите в поле tModificationSession
 моникёр сессии изменения дерева решений. Моникёр может быть получен при
 выполнении операции [AddDecisionTreeModificationSession](AddDecisionTreeModificationSession.htm).


Результатом операции будет признак успешного применения изменений.


## Пример


Ниже приведён пример применения изменений, которые были произведены
 в рамках сессии изменения дерева решений. В запросе передаётся моникёр
 сессии. В ответе возвращается признак успешного применения изменений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CommitDecisionTreeModificationSession xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tModificationSession xmlns="****">
  <id>ECAFFCKHENMLFOAEPJGGJNEENLJEIOIEHKOGPOPLBBLGMANC!M!S!CONMBKJKHENMLFOAEJKPDCPNGOADIKBHECLOACOFMDNJMOFCL!ModificationSessions!DTBAE1FA876BB6495AA429204CF7E3191B</id>  </tModificationSession>
  </CommitDecisionTreeModificationSession>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<CommitDecisionTreeModificationSessionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </CommitDecisionTreeModificationSessionResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CommitDecisionTreeModificationSession" :
  {
   "tModificationSession" :
    {
     "id" : "ECAFFCKHENMLFOAEPJGGJNEENLJEIOIEHKOGPOPLBBLGMANC!M!S!CONMBKJKHENMLFOAEJKPDCPNGOADIKBHECLOACOFMDNJMOFCL!ModificationSessions!DTBAE1FA876BB6495AA429204CF7E3191B"
    }
  }
}

### JSON-ответ:


{
 "CommitDecisionTreeModificationSessionResult" :
  {
   "result" : "1"
  }
}


public static CommitDecisionTreeModificationSessionResult CommitDecisionTreeModificationSession(string dtModificationSessionMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new CommitDecisionTreeModificationSession()
    {
        tModificationSession = new OdId() { id = dtModificationSessionMoniker }
    };
    // Применение изменений дерева решений
    var result = somClient.CommitDecisionTreeModificationSession(tSet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
