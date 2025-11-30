# CloseAuditLog: Операция

CloseAuditLog: Операция
-


**


# CloseAuditLog


## Синтаксис


CloseAuditLog(AuditLogId tLog)


## Параметры


tLog. Моникёр протокола доступа.


## Описание


Операция CloseAuditLog закрывает
 экземпляр протокола доступа.


## Комментарии


Данная операция используется для закрытия экземпляра протокола подключений
 к репозиторию или экземпляра протокола операций, выполненных в рамках
 подключения к репозитория. Для открытия экземпляра протокола используется
 операция [OpenAuditLog](OpenAuditLog.htm).


## Пример


Пример закрытия экземпляра протокола доступа. В теле запроса передается
 моникёр открытого экземпляра протокола.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


				[![](../../minus.gif)](../../#)<CloseAuditLog
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


					[![](../../minus.gif)](../../#)<tLog xsi:type="**q1:OpenAuditLogResult**" xmlns="** **" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**">


						  <id>S1!M!S!A1</id>


					  </tLog>


				  </CloseAuditLog>


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<soapenv:Body>


				  <CloseAuditLogResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseAuditLogResult>


			  </soapenv:Body>


		  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseAuditLog" :
  {
   "tLog" :
    {
     "id" : "S1!M!S!A1"
    }
  }
}

### JSON-ответ:


{
 "CloseAuditLogResult" : "1"
}


public static bool CloseAuditLog(AuditLogId logId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tCloseLog = new CloseAuditLog()
    {
        tLog = logId
    };
    //Закрытие
    var result = somClient.CloseAuditLog(tCloseLog);
    return result;
}


См. также:


[Общие
 операции](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
