# SemanticLayerSourcesDelete: Операция

SemanticLayerSourcesDelete: Операция
-


**


# SemanticLayerSourcesDelete


## Синтаксис


bool SemanticLayerSourcesDelete(string mon, OpItemKey
 tArg)


## Параметры


mon. Моникёр
 для работы с источниками модели данных.


tArg. Ключ удаляемого источника.


## Описание


Операция SemanticLayerSourcesDelete
 удаляет источник в модели данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра модели данных с постфиксом !Sources,
 а в поле tArg.k ключ удаляемого
 источника. Моникёр может быть получен при выполнении операции [OpenSemanticLayer](OpenSemanticLayer.htm).
 Ключ можно получить в результате операции [GetSemanticLayerSources](GetSemanticLayerSources.htm).


Результатом выполнения операции будет логическое значение true,
 если удаление источника завершилось успешно.


## Пример


Ниже приведён пример удаления источника из модели данных. В запросе
 передаётся моникёр для работы с источниками и ключ удаляемого источника.
 В ответе возвращается признак успешного удаления.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SemanticLayerSourcesDelete xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">ECLILKDCBLBDGOAEDKMFIAIDMENFPGPEHLJFNFCLBKCMGDDH!M!S!PHNEOHMDCBLBDGOAECKLPNOCOILIKDEJEJKJAGADEKNADKACB!Sources</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>1</k>  </tArg>
  </SemanticLayerSourcesDelete>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SemanticLayerSourcesDeleteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SemanticLayerSourcesDeleteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SemanticLayerSourcesDelete" :
  {
   "mon" : "ECLILKDCBLBDGOAEDKMFIAIDMENFPGPEHLJFNFCLBKCMGDDH!M!S!PHNEOHMDCBLBDGOAECKLPNOCOILIKDEJEJKJAGADEKNADKACB!Sources",
   "tArg" :
    {
     "k" : "1"
    }
  }
}

### JSON-ответ:


{
 "SemanticLayerSourcesDeleteResult" : "1"
}


public static bool SemanticLayerSourcesDelete(string moniker, uint sourceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new SemanticLayerSourcesDelete()
    {
        tArg = new OpItemKey()
        {
            k = sourceKey
        },
        // Моникёр открытого экземпляра модели данных
        mon = moniker + "!Sources"
    };
    // Удаление источника в модель данных
    var result = somClient.SemanticLayerSourcesDelete(tDel);
    return result;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
