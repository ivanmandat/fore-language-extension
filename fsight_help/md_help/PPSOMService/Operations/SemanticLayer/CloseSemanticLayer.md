# CloseSemanticLayer: Операция

CloseSemanticLayer: Операция
-


**


# CloseSemanticLayer


## Синтаксис


bool CloseSemanticLayer(string mon)


## Параметры


mon. Моникёр
 открытого экземпляра модели данных.


## Описание


Операция CloseSemanticLayer
 закрывает экземпляр модели данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра модели данных. Моникёр может быть получен
 при выполнении операции [OpenSemanticLayer](OpenSemanticLayer.htm).


Результатом выполнения операции будет логическое значение true,
 если закрытие экземпляра модели данных завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра модели данных. В запросе передаётся
 моникёр открытого экземпляра модели данных. В ответе возвращается признак
 успешного закрытия.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseSemanticLayer xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">ECLILKDCBLBDGOAEDKMFIAIDMENFPGPEHLJFNFCLBKCMGDDH!M!S!PODOLOLDCBLBDGOAEEKPLOFLBDLFCJDAEHINMBHIMJKOIAJPE</mon>  </CloseSemanticLayer>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseSemanticLayerResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseSemanticLayerResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseSemanticLayer" :
  {
   "mon" : "ECLILKDCBLBDGOAEDKMFIAIDMENFPGPEHLJFNFCLBKCMGDDH!M!S!PODOLOLDCBLBDGOAEEKPLOFLBDLFCJDAEHINMBHIMJKOIAJPE"
  }
}

### JSON-ответ:


{
 "CloseSemanticLayerResult" : "1"
}


public static bool CloseSemanticLayer(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операций
    var tClose = new CloseSemanticLayer()
    {
        mon = moniker
    };
    // Закрытие экземпляра модели данных
    var b = somClient.CloseSemanticLayer(tClose);
    return b;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
