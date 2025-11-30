# CloseHie: Операция

CloseHie: Операция
-


**


# CloseHie


## Синтаксис


bool CloseHie(HieId tHie)


## Параметры


tHie. Моникёр иерархии показателей,
 которую необходимо закрыть.


## Описание


Операция CloseHie закрывает
 иерархию показателей базы данных временных рядов.


## Комментарии


Для выполнения операции необходимо в параметре tHie
 указать моникёр иерархии. Моникёр может быть получен при выполнении операции
 [OpenHie](OpenHie.htm).
 Результатом операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия иерархии показателей базы данных временных
 рядов. В запросе передаётся моникёр иерархии. В ответе приходит признак
 удачного закрытия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseHie xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tHie xmlns="****">
  <id>S1!M!S!H2</id>  </tHie>
  </CloseHie>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseHieResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseHieResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseHie" :
  {
   "tHie" :
    {
     "id" : "S1!M!S!H2"
    }
  }
}

### JSON-ответ:


{
 "CloseHieResult" : "1"
}


public static bool CloseHierarhy(HieId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseHie()
    {
        tHie = moniker
    };
    //Закрытие экземпляра иерархии показателей
    var b = somClient.CloseHie(tClose);
    return b;
}


См. также:


[Работа
 с базой данных временных рядов](TimeSeriesDatabase_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
