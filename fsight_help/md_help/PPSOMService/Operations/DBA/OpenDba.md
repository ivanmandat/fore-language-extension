# OpenDba: Операция

OpenDba: Операция
-


**


# OpenDba


## Синтаксис


OpenDbaResult OpenDba(OdId tOb, OpenDbaArg tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося бизнес-приложением.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenDba открывает бизнес-приложение.


## Комментарии


Для выполнения операции укажите в поле tOb
 моникёр объекта, являющегося бизнес-приложением, а в поле tArg
 параметры открытия. Моникёр объекта может быть получен при выполнении
 операции [GetObjects](../Repository/GetObjects.htm). Результатом
 работы операции будет моникёр открытого экземпляра бизнес-приложения,
 а также метаданные, если при выполнении операции в поле tArg.metaGet
 был задан соответствующий шаблон. Дальнейшая работа с открытым экземпляром
 задачи осуществляется с помощью операций [GetDba](GetDba.htm)
 и [SetDba](SetDba.htm).


Для закрытия открытого экземпляра бизнес-приложения используйте операцию
 [CloseDba](CloseDba.htm).


## Пример


Ниже приведён пример открытия бизнес-приложения репозитория. В запросе
 передаётся моникёр объекта репозитория, являющегося бизнес-приложением.
 В ответе возвращается моникёр открытого экземпляра.


В примере C# используется функция FindObjectById, код которой приведён
 в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenDba xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>EMMHJHJLCLPAGOAECIKJAHOPCNJHGJDEKIODNPHMALBNJDDP!M!340435</id>  </tOb>
  <tArg xmlns="****" />
  </OpenDba>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenDbaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>EMMHJHJLCLPAGOAECIKJAHOPCNJHGJDEKIODNPHMALBNJDDP!M!S!CBPKMIAKLCLPAGOAEHNHNGELNMKNCKMNEEIHLOAJKJEAJIHDJ</id>  </id>
  </OpenDbaResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenDba" :
  {
   "tOb" :
    {
     "id" : "EMMHJHJLCLPAGOAECIKJAHOPCNJHGJDEKIODNPHMALBNJDDP!M!340435"
    },
   "tArg" : ""
  }
}

### JSON-ответ:


{
 "OpenDbaResult" :
  {
   "id" :
    {
     "id" : "EMMHJHJLCLPAGOAECIKJAHOPCNJHGJDEKIODNPHMALBNJDDP!M!S!CBPKMIAKLCLPAGOAEHNHNGELNMKNCKMNEEIHLOAJKJEAJIHDJ"
    }
  }
}


public static OpenDbaResult OpenDba(MbId mb, string dbaId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenDba()
    {
        tArg =  new OpenDbaArg(),
        // Формирование моникёра объекта
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, dbaId).k }
    };
    // Открытие процесса
    var result = somClient.OpenDba(tOpen);
    return result;
}


См. также:


[Работа с
 бизнес-приложениями](DBA_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
