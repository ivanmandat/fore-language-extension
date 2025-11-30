# CloseRub: Операция

CloseRub: Операция
-


**


# CloseRub


## Синтаксис


bool CloseRub(RubId tRub)


## Параметры


tRub.
 Моникёр открытого экземпляра базы данных временных рядов.


## Описание


Операция CloseRub закрывает
 базу данных временных рядов.


## Комментарии


Для выполнения операции необходимо в параметре tRub
 указать моникёр экземпляра базы данных временных рядов, которую необходимо
 закрыть. Моникёр может быть получен при выполнении операции [OpenRub](OpenRub.htm). Результатом операции будет
 логическое значение true, если
 закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра базы данных временных рядов.
 В запросе передаётся моникёр базы данных временных рядов. В ответе приходит
 признак удачного закрытия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseRub xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRub xmlns="****">
  <id>S1!M!S!R1</id>  </tRub>
  </CloseRub>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseRubResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseRubResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseRub" :
  {
   "tRub" :
    {
     "id" : "S1!M!S!R1"
    }
  }
}

### JSON-ответ:


{
 "CloseRubResult" : "1"
}


public static bool CloseRub(RubId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseRub()
    {
        tRub = moniker
    };
    //Закрытие экземпляра базы данных временных рядов
    var b = somClient.CloseRub(tClose);
    return b;
}


См. также:


[Работа
 с базой данных временных рядов](TimeSeriesDatabase_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
