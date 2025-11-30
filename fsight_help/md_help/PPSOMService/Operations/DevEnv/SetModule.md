# SetModule: Операция

SetModule: Операция
-


**


# SetModule


## Синтаксис


SetModuleResult SetModule(OdId tObject, SetModuleArg
 tArg)


## Параметры


tObject. Моникёр
 модуля.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetModule используется
 для настройки модуля и запуска алгоритмов, которые в нём реализованы.


## Комментарии


Для выполнения операции укажите в параметре tObject
 моникёр объекта репозитория, являющегося модулем. Моникёр объекта может
 быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).
 В параметре tArg.meta указываются
 новые метаданные модуля, которые необходимо применить. Операция позволяет
 изменить список ссылок на другие сборки. Сохранение изменений осуществляется
 при выполнении операции. Параметр tArg.run
 позволяет запустить [точку
 входа](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/entry_point.htm), которая должна быть реализована в модуле.


Результатом выполнения операции будет список сообщений, которые могут
 выводиться выполняемым кодом в консоль, а также сообщения компилятора.


## Пример


Ниже приведён пример использования операции SetModule
 для запуска на выполнение модуля. В запросе передаётся моникёр модуля
 в репозитории. В ответе приходит текст сообщений, которые выводятся в
 консоль при выполнении. В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetModule xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!172002</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <dontCompile>true</dontCompile>  <run>true</run>  </tArg>
  </SetModule>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetModuleResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <consoleOutput xmlns="****">The main procedure is running. The object is created.
</consoleOutput>  </SetModuleResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetModule" :
  {
   "tObject" :
    {
     "id" : "S1!M!172002"
    },
   "tArg" :
    {
     "dontCompile" : "true",
     "run" : "true"
    }
  }
}

### JSON-ответ:


{
 "SetModuleResult" :
  {
   "consoleOutput" : "The main procedure is running. The object is created.
"
  }
}


public static SetModuleResult RunModule(MbId mb, string modId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetModule()
    {
        tArg = new SetModuleArg()
        {
            dontCompile = true,
            run = true
        },
        //Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    //Запустить модуль
    var result = somClient.SetModule(tSet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
