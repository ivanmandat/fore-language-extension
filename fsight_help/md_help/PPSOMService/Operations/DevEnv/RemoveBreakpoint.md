# RemoveBreakpoint: Операция

RemoveBreakpoint: Операция
-


**


# RemoveBreakpoint


## Синтаксис


bool RemoveBreakpoint(OdId tObject, RemoveBreakpointArg
 tArg)


## Параметры


tObject. Моникёр
 модуля, в котором осуществляется отладка кода.


tArg. Параметры выполнения
 операции.


## Описание


Операция RemoveBreakpoint удаляет
 точку останова из отлаживаемого кода.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр объекта, запускаемого на отладку или находящегося в режиме отладки,
 а в поле tArg параметры удаляемой
 точки останова.


Результатом выполнения операции будет логическое значение true,
 если удаление точки останова завершилась успешно.


## Пример


Ниже приведён пример удаления точки останова из разрабатываемого кода.
 В запросе передаётся моникёр отлаживаемого модуля информация о месте расположения
 удаляемой точки останова. В ответе возвращается признак успешного удаления
 точки останова.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<RemoveBreakpoint xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<bp>
  <moduleKey>302490</moduleKey>  <lineNumber>16</lineNumber>  <enabled>false</enabled>  </bp>
  </tArg>
  </RemoveBreakpoint>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <RemoveBreakpointResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</RemoveBreakpointResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RemoveBreakpoint" :
  {
   "tObject" :
    {
     "id" : "CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490"
    },
   "tArg" :
    {
     "bp" :
      {
       "moduleKey" : "302490",
       "lineNumber" : "16",
       "enabled" : "false"
      }
    }
  }
}

### JSON-ответ:


{
 "RemoveBreakpointResult" : "1"
}


public static bool RemoveBreakpoint(MbId mb, string modId, BreakpointStruct deletedBp)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new RemoveBreakpoint()
    {
        tArg = new RemoveBreakpointArg()
        {
            bp = deletedBp
        },
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k },
    };
    // Удаление точки останова
    var result = somClient.RemoveBreakpoint(tDel);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
