# Открытие алгоритма расчёта на редактирование: Операция OpenAlg

Открытие алгоритма расчёта на редактирование: Операция OpenAlg
-


**


# Открытие алгоритма расчёта на редактирование


Ниже приведен пример использования операции [OpenAlg](../OpenAlg.htm)
 для открытия алгоритма расчёта показателей. В запросе передается моникёр
 объекта, являющегося алгоритмом расчёта. В ответе приходит моникёр открытого
 экземпляра алгоритма расчёта, открытый на редактирование. Какие-либо дополнительные
 метаданные не извлекаются.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenAlg xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tOb xmlns="****">
  <id>S1!M!231264</id>  </tOb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<args>
  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenAlg>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenAlgResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!C1</id>  </id>
  <readOnly xmlns="****">0</readOnly>  </OpenAlgResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenAlg" :
  {
   "tOb" :
    {
     "id" : "S1!M!231264"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenAlgResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!C1"
    },
   "readOnly" : "0"
  }
}


public static OpenAlgResult OpenAlg(MbId mb, string algId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenAlg()
    {
        tArg = new OpenAlgArg()
        {
            args = new AlgOpenArgs()
            {
                openForEdit = true
            }
        },
        //Формирование моникёра объекта
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, algId).k }
    };
    //Открытие алгоритма расчёта показателей
    var result = somClient.OpenAlg(tOpen);
    return result;
}


См. также:


[OpenAlg:
 Операция](../OpenAlg.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
