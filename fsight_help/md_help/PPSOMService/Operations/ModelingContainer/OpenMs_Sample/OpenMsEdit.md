# Открытие контейнера моделирования на редактирование

Открытие контейнера моделирования на редактирование
-


**


# Открытие контейнера моделирования на редактирование


Приведено использование операции [OpenMs](../OpenMs.htm)
 для открытия контейнера моделирования на редактирование. В запросе передаются
 моникёр контейнера и признак того, что контейнер необходимо открыть на
 редактирование. В ответе приходит моникёр открытого экземпляра контейнера
 моделирования. Какие-либо дополнительные данные не извлекаются.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tOb xmlns="****">
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!306480</id>  </tOb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<args>
  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE</id>  </id>
  <readOnly xmlns="****">0</readOnly>  </OpenMsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenMs" :
  {
   "tOb" :
    {
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!306480"
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
 "OpenMsResult" :
  {
   "id" :
    {
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE"
    },
   "readOnly" : "0"
  }
}


public static MsId OpenMsEdit(MbId mb, string msId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Задаём параметры выполнения операции
    var tMsOp = new OpenMs()
    {
        tArg = new OpenMsArg()
        {
            // Задаём параметры октрытия контейнера
            args = new MsOpenArgs()
            {
                openForEdit = true
            }
        },
        // Формирование моникера объекта
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, msId).k }
    };
    // Открываем контейнер моделирования на редактирование
    var result = somClient.OpenMs(tMsOp);
    return result.id;
}


См. также:


[OpenMs:
 Операция](../OpenMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
