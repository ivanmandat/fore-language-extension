# GetPythonIntelliSenseTooltip: Операция

GetPythonIntelliSenseTooltip: Операция
-


**


# GetPythonIntelliSenseTooltip


## Синтаксис


GetPythonIntelliSenseTooltipResult GetPythonIntelliSenseTooltip(OdId
 tObject, GetPythonIntelliSenseArg tArg)


## Параметры


tObject. Моникёр
 Python-модуля, с кодом которого осуществляется работа.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetPythonIntelliSenseTooltip
 получает информацию, используемую при формировании всплывающей подсказки
 для типа/члена типа в коде Python-модуля.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр модуля, а в поле tArg.cursor
 координаты расположения курсора в коде. Если модуль был изменён но еще
 не сохранялся, то его код может быть передан в поле tArg.text.


Результатом операции будет коллекция элементов кода, которые могут быть
 использованы в указанной координате в коде.


## Пример


Ниже приведён пример получения всплывающей подсказки в указанной координате
 кода. В запросе передаётся моникёр Python-модуля, его изменённый текст
 и координата в коде. В ответе возвращается полученная всплывающая подсказка.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPythonIntelliSenseTooltip xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>PNPCCFAPCFEAGOAENJNHNIHKMPIHDHKEJJACNBBIDLGLMMMC!M!304842</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <text>from datetime import date;def SimpleProcedure(d):	print("Today: " + d.strftime("%d-%b-%Y"))	current_date = date.today()SimpleProcedure(current_date)</text>[![](../../minus.gif)](../../#)<cursor>
  <col>16</col>  <row>6</row>  </cursor>
  </tArg>
  </GetPythonIntelliSenseTooltip>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPythonIntelliSenseTooltipResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <tooltip xmlns="****">SimpleProcedure(**d**)</tooltip>  </GetPythonIntelliSenseTooltipResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPythonIntelliSenseTooltip" :
  {
   "tObject" :
    {
     "id" : "PNPCCFAPCFEAGOAENJNHNIHKMPIHDHKEJJACNBBIDLGLMMMC!M!304842"
    },
   "tArg" :
    {
     "text" : "from datetime import date;def SimpleProcedure(d):\tprint("Today: " + d.strftime("%d-%b-%Y"))\tcurrent_date = date.today()SimpleProcedure(current_date)",
     "cursor" :
      {
       "col" : "16",
       "row" : "6"
      }
    }
  }
}

### JSON-ответ:


{
 "GetPythonIntelliSenseTooltipResult" :
  {
   "tooltip" : "SimpleProcedure(**d**)"
  }
}


public static GetPythonIntelliSenseTooltipResult GetPythonIntelliSenseTooltip(MbId mb, string pythonModuleId, string pythonText)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetPythonIntelliSenseTooltip()
    {
        tArg = new GetPythonIntelliSenseArg()
        {
            cursor = new CodePoint()
            {
                row = 6,
                col = 16
            },
            text = pythonText
        },
        // Моникёр Python-модуля
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, pythonModuleId).k }
    };
    // Получение информации
    var result = somClient.GetPythonIntelliSenseTooltip(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
