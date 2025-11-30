# SemanticLayerSourceAddQuery: Операция

SemanticLayerSourceAddQuery: Операция
-


**


# SemanticLayerSourceAddQuery


## Синтаксис


OpItemKey SemanticLayerSourceAddQuery(string mon)


## Параметры


mon. Моникёр
 источника модели данных.


## Описание


Операция SemanticLayerSourceAddQuery
 создаёт SQL-запрос на основе источника модели данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра модели данных с постфиксом !Sources!ключ
 источника.


Результатом операции будет ключ созданного запроса. Дальнейшая работ
 с SQL-запросом осуществляется с помощью операций [DashboardFormulaEditorEdit](../Dashboard/DashboardFormulaEditorEdit.htm),
 [DashboardFormulaEditorApply](../Dashboard/DashboardFormulaEditorApply.htm),
 [DashboardFormulaEditorRollback](../Dashboard/DashboardFormulaEditorRollback.htm),
 [DashboardFormulaEditorDelete](../Dashboard/DashboardFormulaEditorDelete.htm).


## Пример


Ниже приведён пример создания SQL-запроса в модели данных. В запросе
 передаётся моникёр открытого экземпляра модели данных и ключ источника.
 В ответе возвращается ключ созданного SQL-запроса.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SemanticLayerSourceAddQuery xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">KHBBAIKKHBCDGOAEBJILIDLMBNKIKJJEOLDDGEOMOCFPLAFB!M!S!PCMGALLKKHBCDGOAEAGKHOMPAJPKDLOPEFJJKKEKPJDIGENGH!Sources!1</mon>  </SemanticLayerSourceAddQuery>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SemanticLayerSourceAddQueryResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">2</k>  </SemanticLayerSourceAddQueryResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SemanticLayerSourceAddQuery" :
  {
   "mon" : "KHBBAIKKHBCDGOAEBJILIDLMBNKIKJJEOLDDGEOMOCFPLAFB!M!S!PCMGALLKKHBCDGOAEAGKHOMPAJPKDLOPEFJJKKEKPJDIGENGH!Sources!1"
  }
}

### JSON-ответ:


{
 "SemanticLayerSourceAddQueryResult" :
  {
   "k" : "2"
  }
}


public static OpItemKey SemanticLayerSourceAddQuery(string moniker, uint sourceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new SemanticLayerSourceAddQuery()
    {
        // Моникёр источника в модели данных
        mon = moniker + "!Sources!" + sourceKey
    };
    // Создание SQL-запроса
    var result = somClient.SemanticLayerSourceAddQuery(tDel);
    return result;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
