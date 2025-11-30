# GetStackFrameList: Операция

GetStackFrameList: Операция
-


**


# GetStackFrameList


## Синтаксис


GetStackFrameListResult GetStackFrameList(OdId tObject)


## Параметры


tObject. Моникёр
 объекта среды разработки, для которого запущен процесс отладки.


## Описание


Операция GetStackFrameList получает
 стек вызовов во время отладки кода.


## Комментарии


Операция позволяет получить список всех подпрограмм, которые выполняются
 во время отладки приложения. Для выполнения операции укажите в поле tObject моникёр объекта, который
 был запущен на отладку. Моникёр объекта может быть получен при выполнении
 операции [GetObjects](../Repository/GetObjects.htm). Запуск
 объекта на отладку может быть осуществлён с помощью операции [DebugModule](DebugModule.htm).


Результатом операции будет коллекция элементов из стека вызовов.


## Пример


Ниже приведён пример получения стека вызовов во время отладки кода.
 В запросе передаётся моникёр отлаживаемого модуля. В ответе возвращается
 полученный стек вызова процедур/функций.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetStackFrameList xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>KDNGAKLFDHAOFOAEDIBJJNCFPBMEPGOEAKMGMFICJIGJLLAN!M!305352</id>  </tObject>
  </GetStackFrameList>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetStackFrameListResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<stackFrames xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <method>TObject.GetState</method>  <moduleName>M_STACKFRAMELIST</moduleName>  <line>21</line>  </it>
[![](../../minus.gif)](../../#)<it>
  <method>TObject.Run</method>  <moduleName>M_STACKFRAMELIST</moduleName>  <line>13</line>  </it>
[![](../../minus.gif)](../../#)<it>
  <method>Main</method>  <moduleName>M_STACKFRAMELIST</moduleName>  <line>5</line>  </it>
  </stackFrames>
  </GetStackFrameListResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetStackFrameList" :
  {
   "tObject" :
    {
     "id" : "KDNGAKLFDHAOFOAEDIBJJNCFPBMEPGOEAKMGMFICJIGJLLAN!M!305352"
    }
  }
}

### JSON-ответ:


{
 "GetStackFrameListResult" :
  {
   "stackFrames" :
    {
     "it" :
      [
        {
         "method" : "TObject.GetState",
         "moduleName" : "M_STACKFRAMELIST",
         "line" : "21"
        },
        {
         "method" : "TObject.Run",
         "moduleName" : "M_STACKFRAMELIST",
         "line" : "13"
        },
        {
         "method" : "Main",
         "moduleName" : "M_STACKFRAMELIST",
         "line" : "5"
        }
      ]
    }
  }
}


public static GetStackFrameListResult GetStackFrameList(MbId mb, string modId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetStackFrameList()
    {
        // Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    // Получить стек вызовов
    var result = somClient.GetStackFrameList(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
