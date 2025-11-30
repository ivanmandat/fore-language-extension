# CloseDatabase: Операция

CloseDatabase: Операция
-


**


# CloseDatabase


## Синтаксис


bool CloseDatabase(OdId tOb)


## Параметры


tOb. Моникёр
 открытого экземпляра базы данных.


## Описание


Операция CloseDatabase закрывает
 открытый экземпляр базы данных.


## Комментарии


Для выполнения операции необходимо в поле tOb
 указать моникёр экземпляра базы данных, который необходимо закрыть. Результатом
 операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Пример закрытия экземпляра базы данных. В теле запроса передаётся моникёр
 открытого экземпляра базы данных. В ответе приходит признак удачного закрытия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseDatabase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!S!DB4</id>  </tOb>
  </CloseDatabase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseDatabaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseDatabaseResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseDatabase" :
  {
   "tOb" :
    {
     "id" : "S1!M!S!DB4"
    }
  }
}

### JSON-ответ:


{
 "CloseDatabaseResult" : "1"
}


public static bool CloseDB(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseDatabase()
    {
        tOb = new OdId() { id = moniker }
    };
    //Закрытие экземпляра базы данных
    var b = somClient.CloseDatabase(tClose);
    return b;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
