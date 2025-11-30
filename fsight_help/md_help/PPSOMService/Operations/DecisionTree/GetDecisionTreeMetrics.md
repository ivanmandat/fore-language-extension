# GetDecisionTreeMetrics: Операция

GetDecisionTreeMetrics: Операция
-


**


# GetDecisionTreeMetrics


## Синтаксис


GetDecisionTreeMetricsResult GetDecisionTreeMetrics(OdId
 tParent)


## Параметры


tParent. Моникёр
 дерева решений.


## Описание


Операция GetDecisionTreeMetrics
 получает список метрик дерева решений.


## Комментарии


Для выполнения операции укажите в поле tParent
 моникёр экземпляра дерева решений. Моникёр может быть получен при выполнении
 операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет полученный список метрик.


## Пример


Ниже приведён пример получения списка метрик дерева решений. В запросе
 передаётся моникёр экземпляра дерева решений. В ответе возвращается полученный
 список.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDecisionTreeMetrics xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParent xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC</id>  </tParent>
  </GetDecisionTreeMetrics>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDecisionTreeMetricsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<metrics xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT2C048849B7594958A3D5E32E8D4C41B3</id>  <name>Человеческий ресурс, чел/час</name>  <value>500.000</value>  </it>
[![](../../minus.gif)](../../#)<it>
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT54FDD34EF9934E41ACD2B7D2D7E86931</id>  <name>Единиц техники, шт</name>  <value>20.000</value>  </it>
  </metrics>
  <result xmlns="****">1</result>  </GetDecisionTreeMetricsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDecisionTreeMetrics" :
  {
   "tParent" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC"
    }
  }
}

### JSON-ответ:


{
 "GetDecisionTreeMetricsResult" :
  {
   "metrics" :
    {
     "it" :
      [
        {
         "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT2C048849B7594958A3D5E32E8D4C41B3",
         "name" : "Человеческий ресурс, чел\/час",
         "value" : "500.000"
        },
        {
         "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT54FDD34EF9934E41ACD2B7D2D7E86931",
         "name" : "Единиц техники, шт",
         "value" : "20.000"
        }
      ]
    },
   "result" : "1"
  }
}


public static GetDecisionTreeMetricsResult GetDTMetrics(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDecisionTreeMetrics()
    {
        tParent = new OdId() { id = moniker }
    };
    // Получение метрик дерева решений
    var result = somClient.GetDecisionTreeMetrics(tGet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
