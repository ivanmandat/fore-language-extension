# EvaluateExpressions: Операция

EvaluateExpressions: Операция
-


**


# EvaluateExpressions


## Синтаксис


EvaluateExpressionsResult EvaluateExpressions(OdId
 tObject, EvaluateExpressionsArg tArg)


## Параметры


tObject. Моникёр
 объекта среды разработки, для которого запущен процесс отладки.


tArg. Параметры выполнения
 операции.


## Описание


Операция EvaluateExpressions
 вычисляет выражения во время отладки кода.


## Комментарии


Операция позволяет в режиме отладки вычислить одно или несколько выражений,
 результатом которых будут значения простого типа. Для выполнения операции
 укажите в поле tObject моникёр
 объекта, находящегося в режиме отладки, а в поле tArg
 параметры вычисления выражений.


Результатом выполнения операции будут полученные значения и коллекция
 связанных с ними свойств.


## Пример


Ниже приведён пример вычисления значений для двух выражений во время
 отладки кода. В запросе передаётся моникёр объекта, находящегося в режиме
 отладки, и список вычисляемых выражений. В ответе возвращаются полученные
 значения выражений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<EvaluateExpressions xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>PBIOBPCAEDCOFOAEFFEFLOBMFDKGKIMENIGAAFCLHCNIIEAC!M!305559</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<expressions>
  <it>count</it>  <it>value</it>  </expressions>
  <withProperties>true</withProperties>  </tArg>
  </EvaluateExpressions>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<EvaluateExpressionsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<evaluatedExpressions xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <name>count</name>  <className>System.Integer</className>  <value>5</value>[![](../../minus.gif)](../../#)<properties>
  <it>ToString</it>  </properties>
  </it>
[![](../../minus.gif)](../../#)<it>
  <name>value</name>  <className>System.Double</className>  <value>100.5</value>[![](../../minus.gif)](../../#)<properties>
  <it>ToString</it>  </properties>
  </it>
  </evaluatedExpressions>
  </EvaluateExpressionsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "EvaluateExpressions" :
  {
   "tObject" :
    {
     "id" : "PBIOBPCAEDCOFOAEFFEFLOBMFDKGKIMENIGAAFCLHCNIIEAC!M!305559"
    },
   "tArg" :
    {
     "expressions" :
      {
       "it" :
        [
          "count",
          "value"
        ]
      },
     "withProperties" : "true"
    }
  }
}

### JSON-ответ:


{
 "EvaluateExpressionsResult" :
  {
   "evaluatedExpressions" :
    {
     "it" :
      [
        {
         "name" : "count",
         "className" : "System.Integer",
         "value" : "5",
         "properties" :
          {
           "it" : "ToString"
          }
        },
        {
         "name" : "value",
         "className" : "System.Double",
         "value" : "100.5",
         "properties" :
          {
           "it" : "ToString"
          }
        }
      ]
    }
  }
}


public static EvaluateExpressionsResult EvaluateExpressions(MbId mb, string modId, string[] evaluateExpressions)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new EvaluateExpressions()
    {
        tArg = new EvaluateExpressionsArg()
        {
            expressions = evaluateExpressions,
            withProperties = true
        },
        // Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    // Вычисление выражений
    var result = somClient.EvaluateExpressions(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
