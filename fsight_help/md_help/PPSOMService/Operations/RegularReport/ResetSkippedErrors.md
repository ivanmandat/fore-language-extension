# ResetSkippedErrors: Операция

ResetSkippedErrors: Операция
-


**


# ResetSkippedErrors


## Синтаксис


bool ResetSkippedErrors(string mon)


## Параметры


mon. Моникёр
 для работы с настройками формул отчёта.


## Описание


Операция ResetSkippedErrors
 сбрасывает пропущенные ошибки в ячейках.


## Комментарии


При выполнении операции будет осуществлён возврат индикации тем ячейкам,
 которые содержали ошибки в формулах, но были пропущены пользователем.
 Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Options!ErrorChecking».


Результатом операции будет логическое значение true,
 если сброс пропущенных ошибок завершился успешно.


## Пример


Ниже приведён пример сброса пропущенных ошибок в ячейках регламентного
 отчёта. В запросе передаётся моникёр для работы с настройками формул регламентного
 отчёта. В ответе возвращается признак успешного сброса пропущенных ошибок.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ResetSkippedErrors xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LFHLAJJGFJJNFOAEOHLLHDAIEIAGJHHELLMOKBONCJGBCELE!M!S!PNLMGHCKGFJJNFOAEPDODPHGHNCFOELOELJIHLDOGENABJMFK!Options!ErrorChecking</mon>  </ResetSkippedErrors>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <ResetSkippedErrorsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</ResetSkippedErrorsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ResetSkippedErrors" :
  {
   "mon" : "LFHLAJJGFJJNFOAEOHLLHDAIEIAGJHHELLMOKBONCJGBCELE!M!S!PNLMGHCKGFJJNFOAEPDODPHGHNCFOELOELJIHLDOGENABJMFK!Options!ErrorChecking"
  }
}

### JSON-ответ:


{
 "ResetSkippedErrorsResult" : "1"
}


public static bool ResetSkippedErrors(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tReset = new ResetSkippedErrors()
    {
        mon = moniker + "!Options!ErrorChecking"
    };
    // Сброс пропущенных ошибок в ячейках
    var result = somClient.ResetSkippedErrors(tReset);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
