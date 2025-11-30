# Открытие регламентного отчета: Операция OpenPrx

Открытие регламентного отчета: Операция OpenPrx
-


**


# Открытие регламентного отчета


Ниже приведен пример использования операции [OpenPrx](../OpenPrx.htm)
 для открытия регламентного отчета. В запросе передается моникёр объекта,
 являющегося регламентным отчетом. В ответе приходит моникёр открытого
 экземпляра отчета. Какие-либо дополнительные данные не извлекаются.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../../Repository/GetObjects_Sample/GetObjects_Sample.htm)». Результат выполнения операции
 является результатом выполнения функции.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenPrx xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tObject xmlns="****">
  <id>S1!M!6334</id>  </tObject>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <args />
  </tArg>
  </OpenPrx>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenPrxResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!P1</id>  </id>
  </OpenPrxResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenPrx" :
  {
   "tObject" :
    {
     "id" : "S1!M!6334"
    },
   "tArg" :
    {
     "args" : ""
    }
  }
}

### JSON-ответ:


{
 "OpenPrxResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!P1"
    }
  }
}


public static OpenPrxResult OpenPrx(MbId mb, string prxId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenPrx()
    {
        tArg = new OpenPrxArg()
        {
            args = new PrxOpenArgs()
        },
        //Формирование моникера объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, prxId).k }
    };
    //Открытие регламентного отчета
    var result = somClient.OpenPrx(tOpen);
    return result;
}


См. также:


[OpenPrx](../OpenPrx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
