# GetDecisionTreeMetric: Операция

GetDecisionTreeMetric: Операция
-


**


# GetDecisionTreeMetric


## Синтаксис


GetDecisionTreeMetricResult GetDecisionTreeMetric(OdId
 tMetric)


## Параметры


tMetric. Моникёр
 метрики дерева решений.


## Описание


Операция GetDecisionTreeMetric
 получает метрику дерева решений.


## Комментарии


Для выполнения операции укажите в поле tMetric
 моникёр метрики. Моникёр может быть получен при выполнении операции [GetDecisionTreeMetrics](GetDecisionTreeMetrics.htm), [AddDecisionTreeMetric](AddDecisionTreeMetric.htm).


Результатом выполнения операции будут запрошенные настройки метрики.


## Пример


Ниже приведён пример получения настроек метрики дерева решений. В запросе
 передаётся моникёр метрики. В ответе возвращается полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDecisionTreeMetric xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMetric xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT2C048849B7594958A3D5E32E8D4C41B3</id>  </tMetric>
  </GetDecisionTreeMetric>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDecisionTreeMetricResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<metric xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT2C048849B7594958A3D5E32E8D4C41B3</id>  <name>Человеческий ресурс, чел/час</name>  <value>500.000</value>  </metric>
  <result xmlns="****">1</result>  </GetDecisionTreeMetricResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDecisionTreeMetric" :
  {
   "tMetric" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT2C048849B7594958A3D5E32E8D4C41B3"
    }
  }
}

### JSON-ответ:


{
 "GetDecisionTreeMetricResult" :
  {
   "metric" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT2C048849B7594958A3D5E32E8D4C41B3",
     "name" : "Человеческий ресурс, чел\/час",
     "value" : "500.000"
    },
   "result" : "1"
  }
}


public static GetDecisionTreeMetricResult GetDTMetric(string metricMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDecisionTreeMetric()
    {
        tMetric = new OdId() { id = metricMoniker }
    };
    // Получение метрики дерева решений
    var result = somClient.GetDecisionTreeMetric(tGet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
