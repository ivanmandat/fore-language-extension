# CloseTable: Операция

CloseTable: Операция
-


**


# CloseTable


## Синтаксис


bool CloseTable(OdId tOb)


## Параметры


tOb. Моникёр
 открытого экземпляра таблицы/присоединённой таблицы/представления.


## Описание


Операция CloseTable закрывает
 открытый экземпляр таблицы/присоединённой таблицы/представления.


## Комментарии


Для выполнения операции необходимо в поле tOb
 указать моникёр экземпляра таблицы/присоединённой таблицы/представления,
 который необходимо закрыть. Результатом операции будет логическое значение
 true, если закрытие завершилось
 успешно.


## Пример


Пример закрытия экземпляра таблицы. В теле запроса передаётся моникёр
 открытого экземпляра таблицы. В ответе приходит признак удачного закрытия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseTable xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!S!TABLE5</id>  </tOb>
  </CloseTable>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseTableResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseTableResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseTable" :
  {
   "tOb" :
    {
     "id" : "S1!M!S!TABLE5"
    }
  }
}

### JSON-ответ:


{
 "CloseTableResult" : "1"
}


public static bool CloseTable(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseTable()
    {
        tOb = new OdId() { id = moniker }
    };
    //Закрытие экземпляра таблицы
    var b = somClient.CloseTable(tClose);
    return b;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
