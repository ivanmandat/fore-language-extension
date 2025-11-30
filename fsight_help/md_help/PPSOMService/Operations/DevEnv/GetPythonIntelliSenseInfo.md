# GetPythonIntelliSenseInfo: Операция

GetPythonIntelliSenseInfo: Операция
-


**


# GetPythonIntelliSenseInfo


## Синтаксис


GetPythonIntelliSenseInfoResult GetPythonIntelliSenseInfo(OdId
 tObject, GetPythonIntelliSenseArg tArg)


## Параметры


tObject. Моникёр
 Python-модуля, с кодом которого осуществляется работа.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetPythonIntelliSenseInfo
 получает список типов и членов типов, доступных для использования в текущей
 точке Python-кода.


## Комментарии


Операция позволяет получить тот список, который в дальнейшем отображается
 при использовании технологии IntelliSense во время разработки кода Python-модуля.
 Для выполнения операции укажите в поле tObject
 моникёр Python-модуля, а в поле tArg.cursor
 координаты расположения курсора в коде. Если модуль был изменён, но еще
 не сохранялся, то его код может быть передан в поле tArg.text.


Результатом операции будет коллекция элементов кода, которые могут быть
 использованы в указанной координате в коде.


## Пример


Ниже приведён пример получения списка типов и членов типов, доступных
 для использования в указанной координате кода. В запросе передаётся моникёр
 Python-модуля, его изменённый текст и координата в коде. В ответе возвращается
 полученный список типов и членов типов.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPythonIntelliSenseInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>AFPDLADJINDAGOAEPHGKIBADCCNPCKBEKJPAEJFODGCJCBAD!M!304842</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <text>from datetime import date;def SimpleProcedure(d):	print("Today: " + d.strftime("%d-%b-%Y"))	current_date = date.today()SimpleProcedure(current_date)</text>[![](../../minus.gif)](../../#)<cursor>
  <col>20</col>  <row>5</row>  </cursor>
  </tArg>
  </GetPythonIntelliSenseInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPythonIntelliSenseInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<items xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>ctime</name>  <signature>(*args)</signature>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Property</type>  <name>day</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>fromisoformat</name>  <signature>(*args)</signature>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>fromordinal</name>  <signature>(*args)</signature>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>fromtimestamp</name>  <signature>(*args)</signature>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>isocalendar</name>  <signature>(*args)</signature>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>isoformat</name>  <signature>(*args)</signature>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>isoweekday</name>  <signature>(*args)</signature>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Member</type>  <name>max</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Member</type>  <name>min</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Property</type>  <name>month</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>replace</name>  <signature>(*args)</signature>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Member</type>  <name>resolution</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>strftime</name>  <signature>(*args)</signature>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>timetuple</name>  <signature>(*args)</signature>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>today</name>  <signature>(*args)</signature>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>toordinal</name>  <signature>(*args)</signature>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>weekday</name>  <signature>(*args)</signature>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Property</type>  <name>year</name>  </it>
  </items>
  </GetPythonIntelliSenseInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPythonIntelliSenseInfo" :
  {
   "tObject" :
    {
     "id" : "AFPDLADJINDAGOAEPHGKIBADCCNPCKBEKJPAEJFODGCJCBAD!M!304842"
    },
   "tArg" :
    {
     "text" : "from datetime import date;def SimpleProcedure(d):\tprint("Today: " + d.strftime("%d-%b-%Y"))\tcurrent_date = date.today()SimpleProcedure(current_date)",
     "cursor" :
      {
       "col" : "20",
       "row" : "5"
      }
    }
  }
}

### JSON-ответ:


{
 "GetPythonIntelliSenseInfoResult" :
  {
   "items" :
    {
     "it" :
      [
        {
         "type" : "Function",
         "name" : "ctime",
         "signature" : "(*args)"
        },
        {
         "type" : "Property",
         "name" : "day"
        },
        {
         "type" : "Function",
         "name" : "fromisoformat",
         "signature" : "(*args)"
        },
        {
         "type" : "Function",
         "name" : "fromordinal",
         "signature" : "(*args)"
        },
        {
         "type" : "Function",
         "name" : "fromtimestamp",
         "signature" : "(*args)"
        },
        {
         "type" : "Function",
         "name" : "isocalendar",
         "signature" : "(*args)"
        },
        {
         "type" : "Function",
         "name" : "isoformat",
         "signature" : "(*args)"
        },
        {
         "type" : "Function",
         "name" : "isoweekday",
         "signature" : "(*args)"
        },
        {
         "type" : "Member",
         "name" : "max"
        },
        {
         "type" : "Member",
         "name" : "min"
        },
        {
         "type" : "Property",
         "name" : "month"
        },
        {
         "type" : "Function",
         "name" : "replace",
         "signature" : "(*args)"
        },
        {
         "type" : "Member",
         "name" : "resolution"
        },
        {
         "type" : "Function",
         "name" : "strftime",
         "signature" : "(*args)"
        },
        {
         "type" : "Function",
         "name" : "timetuple",
         "signature" : "(*args)"
        },
        {
         "type" : "Function",
         "name" : "today",
         "signature" : "(*args)"
        },
        {
         "type" : "Function",
         "name" : "toordinal",
         "signature" : "(*args)"
        },
        {
         "type" : "Function",
         "name" : "weekday",
         "signature" : "(*args)"
        },
        {
         "type" : "Property",
         "name" : "year"
        }
      ]
    }
  }
}


public static GetPythonIntelliSenseInfoResult GetPythonIntelliSenseInfo(MbId mb, string pythonModuleId, string pythonText)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetPythonIntelliSenseInfo()
    {
        tArg = new GetPythonIntelliSenseArg()
        {
            cursor = new CodePoint()
            {
                row = 5,
                col = 20
            },
            text = pythonText
        },
        // Моникёр Python-модуля
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, pythonModuleId).k }
    };
    // Получение информации
    var result = somClient.GetPythonIntelliSenseInfo(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
