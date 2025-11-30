# Передача объектов в качестве значений параметров: Операция ForeExec

Передача объектов в качестве значений параметров: Операция ForeExec
-


**


# Передача объектов в качестве значений параметров


Ниже приведен пример использования операции [ForeExec](../ForeExec.htm)
 для выполнения метода с передачей объектов репозитория в качестве значений
 параметров. В запросе передаётся наименование выполняемого метода и моникёр
 объекта среды разработки, содержащего его реализацию. В значениях параметров
 передаются моникёры соединения с репозиторием и какого-либо объекта репозитория.
 Выполняемый метод имеет следующий синтаксис:


[![](../../../Opened.gif)![](../../../Closed.gif)Метод](javascript:TextPopup(this))


	Function WorkWithObject(Metabase: Object; MBObj: Object): String;

	Var

	    MB: IMetabase;

	    ObjStream: IIOStream;

	    Result: String;

	Begin

	    //Получение контекста репозитория

	    If Metabase Is IMetabase Then

	        MB := Metabase As IMetabase;

	    End If;

	    //Проверка типа второго параметра

	    If MBObj Is IEaxAnalyzer Then

	        //...

	        //Приведение к IEaxAnalyzer и работа с ним

	        //...

	    Elseif MBObj Is IPrxReport Then

	        //...

	        //Приведение к IPrxReport и работа с ним

	        //...

	    //Elseif < Проверка на соответствие другим типам объектов > Then

	        //...

	    Elseif MBObj Is IBinary Then

	        ObjStream := (MBObj As IBinary).Stream;

	        ObjStream.Seek(0, SeekOrigin.Beginning);

	        //...

	        //Дальнейшая работа с потоком

	        //...

	    End If;

	    //...

	    //Работа с объектом

	    //...

	    Return Result;

	End Function WorkWithObject;


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<ForeExec xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tFore xmlns="****">
  <id>OFOMADGBDDDFGOAEMBGBIAEKAJPBNMNEJKDFELDOIMPMLNDA!M!7360</id>  </tFore>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <methodName>WorkWithObject</methodName>[![](../../../minus.gif)](../../../#)<args>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <value>OFOMADGBDDDFGOAEMBGBIAEKAJPBNMNEJKDFELDOIMPMLNDA!M</value>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <value>OFOMADGBDDDFGOAEMBGBIAEKAJPBNMNEJKDFELDOIMPMLNDA!M!S!EJBBMDGGBDDDFGOAEIAJALLMHHKLAKEMEOLDFCEDHOKFABHCE</value>  </it>
  </args>
  </tArg>
  </ForeExec>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<ForeExecResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****" />
  </ForeExecResult>
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
     "methodName" : "WorkWithObject",
     "args" :
      {
       "it" :
        [
          {
           "k" : "1",
           "value" : "OFOMADGBDDDFGOAEMBGBIAEKAJPBNMNEJKDFELDOIMPMLNDA!M"
          },
          {
           "k" : "2",
           "value" : "OFOMADGBDDDFGOAEMBGBIAEKAJPBNMNEJKDFELDOIMPMLNDA!M!S!EJBBMDGGBDDDFGOAEIAJALLMHHKLAKEMEOLDFCEDHOKFABHCE"
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
   "result" : ""
  }
}


public static ForeExecResult ExecMethodWithObject(MbId mb, string assmId, string methodName, string objMoniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tExec = new ForeExec()
    {
        tArg = new ForeExecArg()
        {
            methodName = methodName,
            // Моникёры в качестве значений параметров
            args = new OdArg[2]
            {
                new OdArg(){ k = 1, value = mb.id },
                new OdArg(){ k = 2, value = objMoniker }
            }
        },
        // Моникёр объекта среды разработки с реализацией метода
        tFore = new ForeId()
        {
            id = mb.id + "!" + FindObjectById(mb, assmId).k
        }
    };
    // Выполнение метода
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
