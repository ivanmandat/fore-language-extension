# SetBreakpointList: Операция

SetBreakpointList: Операция
-


**


# SetBreakpointList


## Синтаксис


bool SetBreakpointList(OdId tObject, SetBreakpointListArg
 tArg)


## Параметры


tObject. Моникёр
 модуля, в котором осуществляется отладка кода.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetBreakpointList устанавливает
 точки останова в отлаживаемом коде.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр объекта, запускаемого на отладку или находящегося в режиме отладки,
 а в поле tArg параметры устанавливаемых
 точек останова.


Результатом выполнения операции будет логическое значение true,
 если установка точек останова завершилась успешно.


## Пример


Ниже приведён пример установки точки останова в коде. В запросе передаётся
 моникёр модуля, запущенного в режиме отладки, и информация об устанавливаемой
 точки останова. В ответе возвращается признак успешного создания точки
 останова.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetBreakpointList xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<breakpoints>
[![](../../minus.gif)](../../#)<it>
  <moduleKey>302490</moduleKey>  <lineNumber>8</lineNumber>  <enabled>true</enabled>  <condition>t1>DateTime.Now</condition>  <passCount>0</passCount>  </it>
  </breakpoints>
  </tArg>
  </SetBreakpointList>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetBreakpointListResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetBreakpointListResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetBreakpointList" :
  {
   "tObject" :
    {
     "id" : "CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490"
    },
   "tArg" :
    {
     "breakpoints" :
      {
       "it" :
        {
         "moduleKey" : "302490",
         "lineNumber" : "8",
         "enabled" : "true",
         "condition" : "t1>DateTime.Now",
         "passCount" : "0"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetBreakpointListResult" : "1"
}


public static bool SetBreakpoints(MbId mb, string modId, uint debugModKey, int stopLineNumber, string breakCondition = "")
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetBreakpointList()
    {
        tArg = new SetBreakpointListArg()
        {
            breakpoints = new BreakpointStruct[]
            {
                new BreakpointStruct
                {
                    moduleKey = debugModKey,
                    lineNumber = stopLineNumber,
                    enabled = true,
                    condition = breakCondition,
                    passCount = 0
                }
            }
        },
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k },
    };
    // Создание точки останова
    var result = somClient.SetBreakpointList(tSet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
