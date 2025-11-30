# OpenMbUpdate: Операция

OpenMbUpdate: Операция
-


**


# OpenMbUpdate


## Синтаксис


OpenMbUpdateResult OpenMbUpdate(MbId tMb, OpenMbUpdateArg
 tArg)


## Параметры


tMb. Моникёр
 соединения с репозиторием, в рамках которого осуществляется работа с обновлением.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenMbUpdate открывает
 контекст для работы с обновлением репозитория.


## Комментарии


Для выполнения операции укажите в поле tMb
 моникёр соединения с репозиторием, в рамках которого осуществляется работа
 с обновлением, а в поле tArg.metaGet
 шаблон получения информации об обновлении. Результатом работы операции
 будет моникёр, который в дальнейшем будет использоваться для настройки
 обновления, и запрошенная информация об обновлении.


Дальнейшая работа осуществляется с помощью операций [GetMbUpdate](GetMbUpdate.htm) и [SetMbUpdate](SetMbUpdate.htm).


Для закрытия обновления используйте операцию [CloseMbUpdate](CloseMbUpdate.htm).


## Пример


Ниже приведён пример открытия контекста для работы с обновлением объектов
 репозитория. В запросе передаётся моникёр соединения с репозиторием. В
 ответе приходит моникёр для работы с обновлением.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenMbUpdate xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xmlns="****">
  <id>S1!M</id>  </tMb>
  <tArg xmlns="****" />
  </OpenMbUpdate>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenMbUpdateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!MbUpd1</id>  </id>
  </OpenMbUpdateResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenMbUpdate" :
  {
   "tMb" :
    {
     "id" : "S1!M"
    },
   "tArg" : ""
  }
}

### JSON-ответ:


{
 "OpenMbUpdateResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!MbUpd1"
    }
  }
}


public static OpenMbUpdateResult OpenUpdate(string mb)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenMbUpdate()
    {
        tArg = new OpenMbUpdateArg(),
        tMb = new MbId() { id = mb }
    };
    //Открытие обновления
    var result = somClient.OpenMbUpdate(tOpen);
    return result;
}


См. также:


[Операции
 для работы с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
