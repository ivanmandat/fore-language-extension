# GetPythonModule: Операция

GetPythonModule: Операция
-


**


# GetPythonModule


## Синтаксис


GetPythonModuleResult GetPythonModule(OdId tObject)


## Параметры


tObject. Моникёр
 объекта репозитория, являющегося Python-модулем.


## Описание


Операция GetPythonModule получает
 метаданные Python-модуля репозитория.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр объекта репозитория, являющегося Python-модулем. Моникёр объекта
 может быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).


Результатом операции будут полученные метаданные Python-модуля.


## Пример


Ниже приведён пример получения информации о Python-модуле. В запросе
 передаётся моникёр модуля в репозитории. В ответе приходит текст кода
 Python-модуля, а также описание модуля как объекта репозитория. В примере
 C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPythonModule xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>LGAABCFKMMJNFOAEJHAJNCGDICAAELAEKLDHEEPJJFLLCAAC!M!304842</id>  </tObject>
  </GetPythonModule>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPythonModuleResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<meta xmlns="****">
  <text>from datetime import date;

def SimpleProcedure(d):
	print("Today: " + d.strftime("%d-%b-%Y"))

current_date = date.today()
SimpleProcedure(current_date)</text>[![](../../minus.gif)](../../#)<desc ds="****" isShortcut="**0**" isLink="**0**" ver="**6**" hf="**0**">
  <i>M_PYTHON</i>  <n>Python-модуль</n>  <k>304842</k>  <c>9473</c>  <p>171999</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </desc>
  </meta>
  </GetPythonModuleResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPythonModule" :
  {
   "tObject" :
    {
     "id" : "LGAABCFKMMJNFOAEJHAJNCGDICAAELAEKLDHEEPJJFLLCAAC!M!304842"
    }
  }
}

### JSON-ответ:


{
 "GetPythonModuleResult" :
  {
   "meta" :
    {
     "text" : "from datetime import date;

def SimpleProcedure(d):
\tprint("Today: " + d.strftime("%d-%b-%Y"))
\t
current_date = date.today()
SimpleProcedure(current_date)",
     "desc" :
      {
       "@ds" : "",
       "@isShortcut" : "0",
       "@isLink" : "0",
       "@ver" : "6",
       "@hf" : "0",
       "i" : "M_PYTHON",
       "n" : "Python-модуль",
       "k" : "304842",
       "c" : "9473",
       "p" : "171999",
       "h" : "0",
       "hasPrv" : "0",
       "ic" : "0",
       "trackElementDependents" : "0"
      }
    }
  }
}


public static GetPythonModuleResult GetPythonModuleInfo(MbId mb, string modId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetPythonModule()
    {
        // Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    // Получение информации о Python-модуле
    var result = somClient.GetPythonModule(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
