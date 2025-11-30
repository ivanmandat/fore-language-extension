# DebugModule: Операция

DebugModule: Операция
-


**


# DebugModule


## Синтаксис


DebugStateResult DebugModule(OdId tObject, DebugModuleArg
 tArg)


## Параметры


tObject. Моникёр
 объекта среды разработки, процессом отладки которого необходимо управлять.


tArg. Параметры выполнения
 операции.


## Описание


Операция DebugModule позволяет
 управлять процессом отладки кода модуля.


## Комментарии


Операция позволяет запускать на отладку прикладной код, а также управлять
 процессом отладки. Для выполнения операции укажите в поле tObject
 моникёр объекта репозитория, являющегося модулем. Моникёр объекта может
 быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).
 В поле tArg.command укажите команду,
 выполняемую для отлаживаемого объекта.


Результатом выполнения операции будет информация о текущем статусе выполнения
 отладки объекта.


## Пример


Ниже приведён пример запуска кода модуля на отладку. В запросе передаётся
 моникёр объекта репозитория, являющегося модулем. В ответе возвращается
 текущий статус выполнения отладки.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DebugModule xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <command>Start</command>  </tArg>
  </DebugModule>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DebugModuleResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <debugState xmlns="****">Running</debugState>  </DebugModuleResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DebugModule" :
  {
   "tObject" :
    {
     "id" : "CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490"
    },
   "tArg" :
    {
     "command" : "Start"
    }
  }
}

### JSON-ответ:


{
 "DebugModuleResult" :
  {
   "debugState" : "Running"
  }
}


public static DebugStateResult DebugModule(MbId mb, string modId, DebugCommand dCommand)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new DebugModule()
    {
        tArg = new DebugModuleArg()
        {
            command = dCommand
        },
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    // Управление отладкой модуля
    var result = somClient.DebugModule(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
