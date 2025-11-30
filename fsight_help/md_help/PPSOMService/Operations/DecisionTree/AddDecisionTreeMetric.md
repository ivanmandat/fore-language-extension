# AddDecisionTreeMetric: Операция

AddDecisionTreeMetric: Операция
-


**


# AddDecisionTreeMetric


## Синтаксис


AddDecisionTreeMetricResult AddDecisionTreeMetric(OdId
 tParent)


## Параметры


tParent. Моникёр
 экземпляра дерева решений.


## Описание


Операция AddDecisionTreeMetric
 создаёт метрику дерева решений.


## Комментарии


Для выполнения операции укажите в поле tParent
 моникёр экземпляра дерева решений. Моникёр может быть получен при выполнении
 операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом операции будет моникёр созданной метрики. Дальнейшая работа
 с метрикой осуществляется с помощью операций [GetDecisionTreeMetric](GetDecisionTreeMetric.htm),
 [SetDecisionTreeMetricAttributes](SetDecisionTreeMetricAttributes.htm).


## Пример


Ниже приведён пример создания метрики. В запросе передаётся моникёр
 открытого экземпляра дерева решений. В ответе возвращается моникёр созданной
 метрики.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<AddDecisionTreeMetric xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParent xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC</id>  </tParent>
  </AddDecisionTreeMetric>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<AddDecisionTreeMetricResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  <id xmlns="****">LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT067CCE54E76145BEBC3628CD86A10D01</id>  </AddDecisionTreeMetricResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "AddDecisionTreeMetric" :
  {
   "tParent" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC"
    }
  }
}

### JSON-ответ:


{
 "AddDecisionTreeMetricResult" :
  {
   "result" : "1",
   "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT067CCE54E76145BEBC3628CD86A10D01"
  }
}


public static AddDecisionTreeMetricResult AddDTMetric(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new AddDecisionTreeMetric()
    {
        tParent = new OdId()
        {
            id = moniker
        }
    };
    // Создание метрики
    var result = somClient.AddDecisionTreeMetric(tAdd);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
