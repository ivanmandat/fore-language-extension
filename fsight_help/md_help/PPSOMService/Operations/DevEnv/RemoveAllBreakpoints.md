# RemoveAllBreakpoints: Операция

RemoveAllBreakpoints: Операция
-


**


# RemoveAllBreakpoints


## Синтаксис


bool RemoveAllBreakpoints(OdId tObject)


## Параметры


tObject. Моникёр
 модуля, в котором осуществляется отладка кода.


## Описание


Операция RemoveAllBreakpoints
 удаляет все точки останова из отлаживаемого кода.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр объекта, запускаемого на отладку или находящегося в режиме отладки.


Результатом выполнения операции будет логическое значение true,
 если удаление всех точек останова завершилась успешно.


## Пример


Ниже приведён пример удаления всех точек останова из разрабатываемого
 кода. В запросе передаётся моникёр отлаживаемого модуля. В ответе возвращается
 признак успешного удаления точек останова.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<RemoveAllBreakpoints xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490</id>  </tObject>
  </RemoveAllBreakpoints>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <RemoveAllBreakpointsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</RemoveAllBreakpointsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RemoveAllBreakpoints" :
  {
   "tObject" :
    {
     "id" : "CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490"
    }
  }
}

### JSON-ответ:


{
 "RemoveAllBreakpointsResult" : "1"
}


public static bool RemoveAllBreakpoints(MbId mb, string modId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new RemoveAllBreakpoints()
    {
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    // Удаление всех точек останова
    var result = somClient.RemoveAllBreakpoints(tDel);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
