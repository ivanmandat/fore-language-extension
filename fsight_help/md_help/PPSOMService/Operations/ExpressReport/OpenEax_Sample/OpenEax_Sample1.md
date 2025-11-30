# Открытие экспресс-отчета на редактирование: Операция OpenEax

Открытие экспресс-отчета на редактирование: Операция OpenEax
-


**


# Открытие экспресс-отчета на редактирование


Ниже приведен пример использования операции [OpenEax](../OpenEax.htm)
 для открытия экспресс-отчета на редактирование. В запросе передается моникёр
 объекта, являющегося экспресс-отчетом, и флаг, определяющий необходимость
 открыть отчет на редактирование. В ответе приходит моникёр открытого экземпляра
 экспресс-отчета. Какие-либо дополнительные данные не извлекаются.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../../minus.gif)](../../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../../minus.gif)](../../../#) <s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[![](../../../minus.gif)](../../../#) <OpenEax xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[![](../../../minus.gif)](../../../#) <tObject
								 xmlns="** **">


										  <id>S1!M!189</id>


									  </tObject>


								[![](../../../minus.gif)](../../../#) <tArg
								 xmlns="** **">


										[![](../../../minus.gif)](../../../#)
										 <args>


												  <openForEdit>true</openForEdit>


											  </args>


									  </tArg>


							  </OpenEax>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[![](../../../minus.gif)](../../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../../minus.gif)](../../../#) <soapenv:Body>


						[![](../../../minus.gif)](../../../#) <OpenEaxResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


								[![](../../../minus.gif)](../../../#) <id xmlns="** **">


										  <id>S1!M!S!E12</id>


									  </id>


							  </OpenEaxResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenEax" :
  {
   "tObject" :
    {
     "id" : "S1!M!189"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "true",
       "storeObject" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenEaxResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!E2"
    }
  }
}


    public static OpenEaxResult OpenEaxForEdit(MbId mb, string eaxId)
    {
        var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
        //Параметры выполнения операции
        var tOpen = new OpenEax()
        {
            tArg = new OpenEaxArg()
            {
                args = new EaxOpenArgs()
                {
                    openForEdit = true
                }
            },
            //Формирование моникера объекта
            tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, eaxId).k }
        };
        //Открытие экспресс-отчета
        var result = somClient.OpenEax(tOpen);
        return result;
    }


См. также:


[OpenEax:
 Операция](../OpenEax.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
