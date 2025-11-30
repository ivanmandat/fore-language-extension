# Выполнение Fore-метода: Операция ForeExec

Выполнение Fore-метода: Операция ForeExec
-


**


# Выполнение Fore-метода


Ниже приведен пример использования операции [ForeExec](../ForeExec.htm)
 для выполнения метода, реализованного в Fore
 модуле/сборке. В запросе передается наименование выполняемого метода и
 моникёр объекта среды разработки, содержащего его реализацию. В ответе
 приходит результат выполнения метода.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<ForeExec xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tFore xmlns="****">
  <id>OFOMADGBDDDFGOAEMBGBIAEKAJPBNMNEJKDFELDOIMPMLNDA!M!7360</id>  </tFore>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <methodName>Sum</methodName>[![](../../../minus.gif)](../../../#)<args>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <value>100</value>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <value>200</value>  </it>
  </args>
  </tArg>
  </ForeExec>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<ForeExecResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">300</result>  </ForeExecResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ForeExec" :
  {
   "tFore" :
    {
     "id" : "OFOMADGBDDDFGOAEMBGBIAEKAJPBNMNEJKDFELDOIMPMLNDA!M!7360"
    },
   "tArg" :
    {
     "methodName" : "Sum",
     "args" :
      {
       "it" :
        [
          {
           "k" : "1",
           "value" : "100"
          },
          {
           "k" : "2",
           "value" : "200"
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "ForeExecResult" :
  {
   "result" : "300"
  }
}


public static ForeExecResult ExecMethod(MbId mb, string assmId, string methodName, OdArg[] methodArgs)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tExec = new ForeExec()
    {
        tArg = new ForeExecArg()
        {
            methodName = methodName,
            args = methodArgs
        },
        //Моникёр объекта среды разработки с реализацией метода
        tFore = new ForeId()
        {
            id = mb.id + "!" + FindObjectById(mb, assmId).k
        }
    };
    //Выполнение метода
    var result = somClient.ForeExec(tExec);
    return result;
}


См. также:


[ForeExec:
 Операция](../ForeExec.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
