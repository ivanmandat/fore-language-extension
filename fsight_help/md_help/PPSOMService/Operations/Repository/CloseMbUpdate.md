# CloseMbUpdate: Операция

CloseMbUpdate: Операция
-


**


# CloseMbUpdate


## Синтаксис


bool CloseMbUpdate(MbUpdateId tMbUpdate)


## Параметры


tMbUpdate. Моникёр
 для работы с обновлением репозитория.


## Описание


Операция CloseMbUpdate закрывает
 контекст для работы с обновлением репозитория.


## Комментарии


Для выполнения операции укажите в поле tMbUpdate
 моникёр для работы с обновлением.


Результатом операции будет логическое значение true,
 если закрытие объекта и освобождение ресурсов сервера завершилось успешно.


## Пример


Ниже приведён пример закрытия контекста для работы с обновлением объектов
 репозитория. В запросе передаётся моникёр для работы с обновлением. В
 ответе приходит признак успешного закрытия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseMbUpdate xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMbUpdate xmlns="****">
  <id>S1!M!S!MbUpd1</id>  </tMbUpdate>
  </CloseMbUpdate>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseMbUpdateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseMbUpdateResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseMbUpdate" :
  {
   "tMbUpdate" :
    {
     "id" : "S1!M!S!MbUpd1"
    }
  }
}

### JSON-ответ:


{
 "CloseMbUpdateResult" : "1"
}


public static bool CloseUpdate(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseMbUpdate()
    {
        tMbUpdate = new MbUpdateId() { id = moniker }
    };
    //Закрытие обновления
    var result = somClient.CloseMbUpdate(tClose);
    return result;
}


См. также:


[Операции
 для работы с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
