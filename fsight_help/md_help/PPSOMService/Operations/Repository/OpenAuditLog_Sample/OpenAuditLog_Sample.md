# Получение списка подключений к репозиторию: Операция OpenAuditLog

Получение списка подключений к репозиторию: Операция OpenAuditLog
-


**


# Получение списка подключений к репозиторию


Пример использования операции [OpenAuditLog](../OpenAuditLog.htm)
 для открытия протокола доступа со списком подключений к репозиторию. В
 теле запроса передается моникёр открытого соединения с репозиторием. В
 качестве ответа приходит моникёр экземпляра протокола доступа, содержащего
 список подключений к репозиторию.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


				[![](../../../minus.gif)](../../../#)<OpenAuditLog
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


					[![](../../../minus.gif)](../../../#)<tMb xmlns="** **">


						  <id>S1!M</id>


					  </tMb>


					[![](../../../minus.gif)](../../../#)<tArg xmlns="** **">


						  <logType>Logons</logType>


					  </tArg>


				  </OpenAuditLog>


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../../minus.gif)](../../../#)<soapenv:Body>


				[![](../../../minus.gif)](../../../#)<OpenAuditLogResult
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


					  <id xmlns="** **">S1!M!S!A1</id>


				  </OpenAuditLogResult>


			  </soapenv:Body>


		  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenAuditLog" :
  {
   "tMb" :
    {
     "id" : "S1!M"
    },
   "tArg" :
    {
     "logType" : "Logons"
    }
  }
}

### JSON-ответ:


{
 "OpenAuditLogResult" :
  {
   "id" : "S1!M!S!A1"
  }
}


public static OpenAuditLogResult OpenAuditLogons(string mb)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpenAudit = new OpenAuditLog()
    {

        tArg = new OpenAuditLogArg()
        {
            logType = AuditLogType.Logons
        },
        tMb = new MbId() { id = mb }
    };
    //Открытие протокола доступа со списком подключений
    var result = somClient.OpenAuditLog(tOpenAudit);
    return result;
}


См. также:


[OpenAuditLog:
 Операция](../OpenAuditLog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
