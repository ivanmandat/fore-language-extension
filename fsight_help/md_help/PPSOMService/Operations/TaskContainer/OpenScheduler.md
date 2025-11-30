# OpenScheduler: Операция

OpenScheduler: Операция
-


**


# OpenScheduler


## Синтаксис


OpenSchedulerResult OpenScheduler(OdId tOb, OpenSchedulerArg
 tArg)


## Параметры


tOb. Моникёр объекта, являющегося
 контейнером запланированных задач.


tArg. Параметры открытия контейнера.


## Описание


Операция OpenScheduler открывает
 контейнер запланированных задач и возвращает контекст для работы с его
 содержимым.


## Комментарии


Операция позволяет получить доступ к контейнеру и задачам, которые в
 нем созданы. Для выполнения операции необходимо в параметре tOb
 указать моникёр объекта, являющегося контейнером запланированных задач,
 а в параметре tArg указать параметры
 открытия. Моникёр объекта может быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).
 В поле tArg.metaGet указывается
 шаблон, в соответствии с которым будут извлекаться метаданные контейнера
 при открытии. Если поле tArg.metaGet
 не задано, то результатом работы операции будет только моникёр открытого
 экземпляра контейнера запланированных задач.


Дальнейшая работа со структурой справочника осуществляется с помощью
 операций [GeScheduler](GetScheduler.htm)
 и [SetScheduler](SetScheduler.htm).
 Для закрытия экземпляра контейнера запланированных задач используйте операцию
 CloseScheduler.


## Пример


Ниже приведён пример открытия экземпляра контейнера запланированных
 задач. В запросе передаётся моникёр объекта репозитория, являющегося контейнером
 запланированных задач. В ответе приходит моникёр открытого экземпляра


В примере используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenScheduler xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!6445</id>  </tOb>
  <tArg xmlns="****" />
  </OpenScheduler>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenSchedulerResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!6445</id>  </id>
  </OpenSchedulerResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenScheduler" :
  {
   "tOb" :
    {
     "id" : "S1!M!6445"
    },
   "tArg" : ""
  }
}

### JSON-ответ:


{
 "OpenSchedulerResult" :
  {
   "id" :
    {
     "id" : "S1!M!6445"
    }
  }
}


public static OpenSchedulerResult OpenTasksContainern(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenScheduler()
    {
        tArg = new OpenSchedulerArg(),
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    //Открытие контейнера запланированных задач
    var tResult = somClient.OpenScheduler(tOpen);
    return tResult;
}


См. также:


[Работа
 с контейнером моделирования](TaskContainer_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
