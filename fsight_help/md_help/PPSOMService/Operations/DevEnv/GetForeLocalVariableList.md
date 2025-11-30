# GetForeLocalVariableList: Операция

GetForeLocalVariableList: Операция
-


**


# GetForeLocalVariableList


## Синтаксис


GetForeLocalVariableListResult GetForeLocalVariableList(GetForeLocalVariableListArg
 tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция GetForeLocalVariableList
 получает информацию о локальных переменных, доступных во время отладки
 блока кода.


## Комментарии


Для выполнения операции укажите в поле tArg
 информацию об отлаживаемом модуле.


Результатом операции будет список наименований локальных переменных,
 доступных в отлаживаемом блоке кода.


## Пример


Ниже приведён пример получения списка локальных переменных. В запросе
 передаётся моникёр модуля, предварительно запущенного на отладку, и номер
 строки в коде. В ответе возвращается список локальных переменных, которые
 определены в отлаживаемом блоке кода. В примере C# используется функция
 FindObjectById, код которой приведен
 в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetForeLocalVariableList xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<module>
  <id>CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490</id>  </module>
  <line>17</line>  </tArg>
  </GetForeLocalVariableList>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetForeLocalVariableListResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<varList xmlns="****">
  <it>ci</it>  <it>i</it>  <it>t1</it>  <it>t2</it>  </varList>
  </GetForeLocalVariableListResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetForeLocalVariableList" :
  {
   "tArg" :
    {
     "module" :
      {
       "id" : "CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490"
      },
     "line" : "17"
    }
  }
}

### JSON-ответ:


{
 "GetForeLocalVariableListResult" :
  {
   "varList" :
    {
     "it" :
      [
        "ci",
        "i",
        "t1",
        "t2"
      ]
    }
  }
}


public static GetForeLocalVariableListResult GetForeLocalVariableList(MbId mb, string modId, int stopLineNumber = 0)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetForeLocalVariableList()
    {
        tArg = new GetForeLocalVariableListArg()
        {
            module = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k },
            line = stopLineNumber
        }
    };
    // Получение информации о локальных переменных
    var result = somClient.GetForeLocalVariableList(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
