# CloseDecisionTree: Операция

CloseDecisionTree: Операция
-


**


# CloseDecisionTree


## Синтаксис


bool CloseDecisionTree(string mon)


## Параметры


mon. Моникёр
 открытого экземпляра дерева решений.


## Описание


Операция CloseDecisionTree закрывает
 экземпляр дерева решений.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра дерева решений, который необходимо закрыть. Моникёр
 может быть получен при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра дерева решений. В запросе передаётся
 моникёр открытого экземпляра дерева решений. В ответе приходит признак
 успешного закрытия.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseDecisionTree xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">JGIKCAEDNIMLFOAEJEAEIHHOIIAPIACEEIEADDBIMDDJMJPN!M!S!COJNAIEEDNIMLFOAEDHCJAKADFJMFOOPEBJAEKLIGINKKDNGD</mon>  </CloseDecisionTree>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseDecisionTreeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseDecisionTreeResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseDecisionTree" :
  {
   "mon" : "JGIKCAEDNIMLFOAEJEAEIHHOIIAPIACEEIEADDBIMDDJMJPN!M!S!COJNAIEEDNIMLFOAEDHCJAKADFJMFOOPEBJAEKLIGINKKDNGD"
  }
}

### JSON-ответ:


{
 "CloseDecisionTreeResult" : "1"
}


public static bool CloseDecisionTree(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tClose = new CloseDecisionTree()
    {
        mon = moniker
    };
    //Закрытие экземпляра дерева решений
    var b = somClient.CloseDecisionTree(tClose);
    return b;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
