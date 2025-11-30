# Открытие справочника: Операция OpenDim

Открытие справочника: Операция OpenDim
-


**


# Открытие справочника


Ниже приведен пример использования операции [OpenDim](../OpenDim.htm)
 для открытия справочника репозитория. В запросе передается моникёр объекта,
 являющегося справочником. В ответе приходит моникёр открытого экземпляра
 справочника. Какие-либо дополнительные данные не извлекаются.


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenDim xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tObject xmlns="****">
  <id>S1!M!116</id>  </tObject>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <openArgs />
  </tArg>
  </OpenDim>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenDimResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!S1</id>  </id>
  </OpenDimResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenDim" :
  {
   "tObject" :
    {
     "id" : "S1!M!116"
    },
   "tArg" :
    {
     "openArgs" : ""
    }
  }
}

### JSON-ответ:


{
 "OpenDimResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!S1"
    }
  }
}


public static OpenDimResult OpenDimension(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenDim()
    {
        tArg = new OpenDimArg()
        {
            openArgs = new DmOpenArgs()
        },
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    //Открытие справочника
    var tResult = somClient.OpenDim(tOpen);
    return tResult;
}


См. также:


[OpenDim:
 Операция](../OpenDim.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
