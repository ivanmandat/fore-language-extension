# SetPythonModule: Операция

SetPythonModule: Операция
-


**


# SetPythonModule


## Синтаксис


SetPythonModuleResult SetPythonModule(OdId tObject,
 SetPythonModuleArg tArg)


## Параметры


tObject. Моникёр
 объекта репозитория, являющегося Python-модулем.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetPythonModule используется
 для изменения кода Python-модуля и запуска его на выполнение.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр объекта репозитория, являющегося Python-модулем. Моникёр объекта
 может быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).
 В поле tArg.meta указываются
 новые метаданные модуля, которые необходимо применить. Сохранение изменений
 осуществляется при выполнении операции.


Параметр tArg.run позволяет
 запустить Python-модуль на выполнение.


Результатом выполнения операции будет информация о результатах компиляции
 и выполнения модуля.


## Пример


Ниже приведён пример запуска на выполнение Python-модуля. В запросе
 передаётся моникёр модуля в репозитории. В ответе приходит текст сообщений,
 которые выводятся в консоль при выполнении. В примере C# используется
 функция FindObjectById, код которой
 приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPythonModule xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>LGAABCFKMMJNFOAEJHAJNCGDICAAELAEKLDHEEPJJFLLCAAC!M!304842</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <run>true</run>  </tArg>
  </SetPythonModule>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetPythonModuleResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <consoleOutput xmlns="****">
Today: 08-Jul-2022</consoleOutput>  </SetPythonModuleResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPythonModule" :
  {
   "tObject" :
    {
     "id" : "LGAABCFKMMJNFOAEJHAJNCGDICAAELAEKLDHEEPJJFLLCAAC!M!304842"
    },
   "tArg" :
    {
     "run" : "true"
    }
  }
}

### JSON-ответ:


{
 "SetPythonModuleResult" :
  {
   "consoleOutput" : "
Today: 08-Jul-2022"
  }
}


public static SetPythonModuleResult RunPythonModule(MbId mb, string modId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetPythonModule()
    {
        tArg = new SetPythonModuleArg()
        {
            run = true
        },
        // Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    // Запустить Python-модуль
    var result = somClient.SetPythonModule(tSet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
