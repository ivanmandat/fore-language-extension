# RemoveDecisionTreeMetrics: Операция

RemoveDecisionTreeMetrics: Операция
-


**


# RemoveDecisionTreeMetrics


## Синтаксис


RemoveDecisionTreeMetricsResult RemoveDecisionTreeMetrics(RemoveDecisionTreeMetricsArg
 tMetrics)


## Параметры


tMetrics. Параметры выполнения
 операции.


## Описание


Операция RemoveDecisionTreeMetrics
 удаляет метрики дерева решений.


## Комментарии


Для выполнения операции укажите в поле tMetrics.ids
 коллекцию моникёров удаляемых метрик. Моникёры могут быть получены при
 выполнении операции [AddDecisionTreeMetric](AddDecisionTreeMetric.htm),
 [GetDecisionTreeMetrics](GetDecisionTreeMetrics.htm).


Результатом операции будет признак успешного удаления метрик.


## Пример


Ниже приведён пример удаления метрик дерева решений. В запросе передаётся
 массив моникёров метрики. В ответе возвращается признак успешного удаления.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<RemoveDecisionTreeMetrics xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMetrics xmlns="****">
[![](../../minus.gif)](../../#)<ids>
  <its>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT2C048849B7594958A3D5E32E8D4C41B3</its>  <its>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT54FDD34EF9934E41ACD2B7D2D7E86931</its>  </ids>
  </tMetrics>
  </RemoveDecisionTreeMetrics>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<RemoveDecisionTreeMetricsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </RemoveDecisionTreeMetricsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RemoveDecisionTreeMetrics" :
  {
   "tMetrics" :
    {
     "ids" :
      {
       "its" :
        [
          "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT2C048849B7594958A3D5E32E8D4C41B3",
          "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Metrics!DT54FDD34EF9934E41ACD2B7D2D7E86931"
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "RemoveDecisionTreeMetricsResult" :
  {
   "result" : "1"
  }
}


public static RemoveDecisionTreeMetricsResult RemoveDTMetrics(string[] metricsMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new RemoveDecisionTreeMetrics()
    {
        tMetrics = new RemoveDecisionTreeMetricsArg() { ids = metricsMoniker }
    };
    // Удаление метрик
    var result = somClient.RemoveDecisionTreeMetrics(tDel);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
