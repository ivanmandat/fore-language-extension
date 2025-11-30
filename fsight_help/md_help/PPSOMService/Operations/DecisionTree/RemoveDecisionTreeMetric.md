# RemoveDecisionTreeMetric: Операция

RemoveDecisionTreeMetric: Операция
-


**


# RemoveDecisionTreeMetric


## Синтаксис


RemoveDecisionTreeMetricResult RemoveDecisionTreeMetric(OdId
 tMetric)


## Параметры


tMetric. Моникёр
 метрики дерева решений.


## Описание


Операция RemoveDecisionTreeMetric
 удаляет метрики дерева решений.


## Комментарии


Для выполнения операции укажите в поле tMetric
 моникёр удаляемой метрики. Моникёр может быть получен при выполнении операции
 [AddDecisionTreeMetric](AddDecisionTreeMetric.htm), [GetDecisionTreeMetrics](GetDecisionTreeMetrics.htm).


Результатом операции будет признак успешного удаления метрики.


## Пример


Ниже приведён пример удаления метрики дерева решений. В запросе передаётся
 моникёр метрики. В ответе возвращается признак успешного удаления.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<RemoveDecisionTreeMetric xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMetric xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT067CCE54E76145BEBC3628CD86A10D01</id>  </tMetric>
  </RemoveDecisionTreeMetric>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<RemoveDecisionTreeMetricResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </RemoveDecisionTreeMetricResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RemoveDecisionTreeMetric" :
  {
   "tMetric" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT067CCE54E76145BEBC3628CD86A10D01"
    }
  }
}

### JSON-ответ:


{
 "RemoveDecisionTreeMetricResult" :
  {
   "result" : "1"
  }
}


public static RemoveDecisionTreeMetricResult RemoveDTMetric(string metricMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new RemoveDecisionTreeMetric()
    {
        tMetric = new OdId() { id = metricMoniker }
    };
    // Удаление метрики
    var result = somClient.RemoveDecisionTreeMetric(tDel);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
