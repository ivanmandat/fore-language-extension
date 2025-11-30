# SetAssembly: Операция

SetAssembly: Операция
-


**


# SetAssembly


## Синтаксис


SetAssemblyResult SetAssembly(OdId tObject, SetAssemblyArg
 tArg)


## Параметры


tObject. Моникёр
 сборки.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetAssembly используется
 для настройки сборки и запуска алгоритмов, которые в ней реализованы.


## Комментарии


Для выполнения операции укажите в параметре tObject
 моникёр объекта репозитория, являющегося сборкой. Моникёр объекта может
 быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).
 В параметре tArg.meta указываются
 новые метаданные сборки, которые необходимо применить. Операция позволяет
 изменить список ссылок на другие сборки. Сохранение изменений осуществляется
 при выполнении операции. Параметр tArg.run
 позволяет запустить [точку
 входа](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/entry_point.htm), которая должна быть реализована в сборке.


Результатом выполнения операции будет список сообщений, которые могут
 выводиться выполняемым кодом в консоль, а также сообщения компилятора.


## Пример


Ниже приведён пример использования операции SetAssembly
 для запуска на выполнение сборки. В запросе передаётся моникёр сборки
 в репозитории. В ответе приходит текст сообщений, которые выводятся в
 консоль при выполнении. В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetAssembly xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!172000</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <run>true</run>  </tArg>
  </SetAssembly>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetAssemblyResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <consoleOutput xmlns="****">Hello World!!!
Current date: 11 августа 2020 г.
Current time: 11:42:12.
Current repository: Warehouse
</consoleOutput>  </SetAssemblyResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetAssembly" :
  {
   "tObject" :
    {
     "id" : "S1!M!172000"
    },
   "tArg" :
    {
     "run" : "true"
    }
  }
}

### JSON-ответ:


{
 "SetAssemblyResult" :
  {
   "consoleOutput" : "Hello World!!!
Current date: 11 августа 2020 г.
Current time: 11:42:12.
Current repository: Warehouse
"
  }
}


public static SetAssemblyResult RunAssembly(MbId mb, string assmId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetAssembly()
    {
        tArg = new SetAssemblyArg()
        {
            run = true
        },
        //Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, assmId).k }
    };
    //Запустить сборку
    var result = somClient.SetAssembly(tSet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
