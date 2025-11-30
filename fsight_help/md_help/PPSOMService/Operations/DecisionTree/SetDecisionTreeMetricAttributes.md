# SetDecisionTreeMetricAttributes: Операция

SetDecisionTreeMetricAttributes: Операция
-


**


# SetDecisionTreeMetricAttributes


## Синтаксис


SetDecisionTreeMetricAttributesResult SetDecisionTreeMetricAttributes(OdId
 tMetric, SetDecisionTreeMetricAttributesArg tArg)


## Параметры


tMetric. Моникёр
 метрики дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDecisionTreeMetricAttributes
 изменяет настройки метрики дерева решений.


## Комментарии


Для выполнения операции укажите в поле tMetric
 моникёр метрики, а в поле tArg
 определите изменяемые настройки метрики. Моникёр метрики может быть получен
 при выполнении операции [GetDecisionTreeMetrics](GetDecisionTreeMetrics.htm),
 [AddDecisionTreeMetric](AddDecisionTreeMetric.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек метрики дерева решений. В запросе
 передаётся моникёр метрики и устанавливаемые настройки. В ответе возвращается
 признак успешного изменения настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDecisionTreeMetricAttributes xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMetric xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT2C048849B7594958A3D5E32E8D4C41B3</id>  </tMetric>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <name>Производительность, тонн/час</name>  <value>100</value>  </tArg>
  </SetDecisionTreeMetricAttributes>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDecisionTreeMetricAttributesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </SetDecisionTreeMetricAttributesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDecisionTreeMetricAttributes" :
  {
   "tMetric" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT2C048849B7594958A3D5E32E8D4C41B3"
    },
   "tArg" :
    {
     "name" : "Производительность, тонн\/час",
     "value" : "100"
    }
  }
}

### JSON-ответ:


{
 "SetDecisionTreeMetricAttributesResult" :
  {
   "result" : "1"
  }
}


public static SetDecisionTreeMetricAttributesResult EditDTMetric(string metricMoniker, string newName, string newValue)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDecisionTreeMetricAttributes()
    {
        tArg = new SetDecisionTreeMetricAttributesArg()
        {
            name = newName,
            value = newValue
        },
        tMetric = new OdId() { id = metricMoniker }
    };
    // Изменение метрики дерева решений
    var result = somClient.SetDecisionTreeMetricAttributes(tSet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
