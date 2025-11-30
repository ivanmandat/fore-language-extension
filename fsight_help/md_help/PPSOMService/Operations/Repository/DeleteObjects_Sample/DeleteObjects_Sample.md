# Удаление одного объекта: Операция DeleteObjects

Удаление одного объекта: Операция DeleteObjects
-


**


# Удаление одного объекта


Ниже приведен пример использования операции [DeleteObjects](../DeleteObjects.htm)
 для удаления одного объекта репозитория. В запросе передается моникёр
 соединения с репозиторием и ключ удаляемого объекта.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<DeleteObjects xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMb xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M</id>  </tMb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <objectKey>304999</objectKey>  </tArg>
  </DeleteObjects>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <DeleteObjectsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" />
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DeleteObjects" :
  {
   "tMb" :
    {
     "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M"
    },
   "tArg" :
    {
     "objectKey" : "304999"
    }
  }
}

### JSON-ответ:


{
 "DeleteObjectsResult" : ""
}


public static DeleteObjectsResult DelObject(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Получаем описание объекта, который удаляем
    var tObject = FindObjectById(mb, id);
    //Параметры выполнения операции
    var tDel = new DeleteObjects()
    {
        tArg = new DeleteObjectsArg()
        {
            objectKey = tObject.k
        },
        tMb = new MbId() { id = mb.id }
    };
    //Удаление объекта
    var result = somClient.DeleteObjects(tDel);
    return result;
}


См. также:


[DeleteObjects:
 Операция](../DeleteObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
