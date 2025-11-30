# GetDebugState: Операция

GetDebugState: Операция
-


**


# GetDebugState


## Синтаксис


DebugStateResult GetDebugState(OdId tObject)


## Параметры


tObject. Моникёр
 объекта среды разработки, для которого запущен процесс отладки.


## Описание


Операция GetDebugState получает
 информацию о статусе отладки объекта.


## Комментарии


Запуск объекта на отладку может быть осуществлён с помощью операции
 [DebugModule](DebugModule.htm). Для выполнения операции GetDebugState укажите в поле tObject моникёр объекта, который
 был запущен на отладку. Моникёр объекта может быть получен при выполнении
 операции [GetObjects](../Repository/GetObjects.htm).


Результатом операции будет информация о текущем статусе отладки и текст,
 который мог быть выведен приложением во время выполнения.


## Пример


Ниже приведён пример получения статуса выполнения отладки модуля. В
 запросе передаётся моникёр объекта репозитория, запущенного на отладку.
 В ответе возвращается полученная информация. В примере C# используется
 функция FindObjectById, код которой
 приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDebugState xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490</id>  </tObject>
  </GetDebugState>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDebugStateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <debugState xmlns="****">Running</debugState>  <output xmlns="****">Приложение запущено. Время запуска: 14:41.
</output>  </GetDebugStateResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDebugState" :
  {
   "tObject" :
    {
     "id" : "CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490"
    }
  }
}

### JSON-ответ:


{
 "GetDebugStateResult" :
  {
   "debugState" : "Running",
   "output" : "Приложение запущено. Время запуска: 14:41.
"
  }
}


public static DebugStateResult GetDebugState(MbId mb, string modId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetDebugState()
    {
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    // Получение статуса отладки модуля
    var result = somClient.GetDebugState(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
