# CloseDbCommand: Операция

CloseDbCommand: Операция
-


**


# CloseDbCommand


## Синтаксис


bool CloseDbCommand(DbCommandId tDbCommand)


## Параметры


tDbCommand. Моникёр
 SQL-объекта репозитория.


## Описание


Операция CloseDbCommand закрывает
 открытый экземпляр SQL-объект.


## Комментарии


Для выполнения операции необходимо в поле tDbCommand
 указать моникёр экземпляра SQL-объекта, который необходимо закрыть. Моникёр
 может быть получен при выполнении операции [OpenDbCommand](OpenDbCommand.htm).
 Результатом операции будет логическое значение true,
 если закрытие объекта завершилось успешно.


## Пример


Пример закрытия экземпляра SQL-объекта. В теле запроса передается моникёр
 SQL-объекта. В ответе приходит признак удачного закрытия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseDbCommand xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tDbCommand xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MKMLJCMFKABODGOAELEAAIAKKFADKILKEJLMIMPHCMKJAKDKO</id>  </tDbCommand>
  </CloseDbCommand>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseDbCommandResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseDbCommandResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseDbCommand" :
  {
   "tDbCommand" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MKMLJCMFKABODGOAELEAAIAKKFADKILKEJLMIMPHCMKJAKDKO"
    }
  }
}

### JSON-ответ:


{
 "CloseDbCommandResult" : "1"
}


public static bool CloseSQLObject(DbCommandId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseDbCommand()
    {
        tDbCommand = moniker
    };
    //Закрытие экземпляра SQL-объекта
    var b = somClient.CloseDbCommand(tClose);
    return b;
}


См. также:


[Работа
 с SQL-объектами репозитория](Relational_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
