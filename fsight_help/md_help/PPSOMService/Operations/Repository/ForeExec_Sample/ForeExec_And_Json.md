# Работа с объектами в JSON-формате

Работа с объектами в JSON-формате
-


**


# Работа с объектами в JSON-формате


Ниже приведен пример использования операции [ForeExec](../ForeExec.htm)
 для выполнения метода с передачей объекта в JSON-формате. В запросе передаётся
 наименование выполняемого метода и моникёр объекта среды разработки, содержащего
 его реализацию. В качестве значения параметра передаётся JSON-структура.
 Возвращаемый операцией результат также будет в JSON-формате. Выполняемый
 метод имеет следующий синтаксис:


[![](../../../Opened.gif)![](../../../Closed.gif)Метод](javascript:TextPopup(this))


	Function WorkWithJson(InObj: IJsonObject): IJsonObject;

	Var

	    NewJSON: IJsonObjectBuilder;

	    OutObj: IJsonObject;

	Begin

	    // Просмотр входного JSON-объекта

	    Debug.WriteLine("Входное значение: " + InObj.WriteToString(JsonFormatOptions.UnIndented));

	    // Формирование выходного JSON-объекта

	    NewJSON := New JsonObjectBuilder.Create;

	    NewJSON.AddBoolean("ExecResult", True);

	    NewJSON.AddString("ExecDay", DateTime.Today.ToString);

	    OutObj := NewJSON.Build;

	    Return OutObj;

	End Function WorkWithJson;


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
  <id>AHHCPKBHELFGGOAEJJPPPODMMPIBEDEEALGKJDIIBMIMFFJM!M!7360</id>  </tFore>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <methodName>WorkWithJson</methodName>[![](../../../minus.gif)](../../../#)<args>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>[![](../../../minus.gif)](../../../#)<jsonValue>
[![](../../../minus.gif)](../../../#)<Data>
  <IntValue>123</IntValue>  <DblValue>123.321</DblValue>  <StrValue>ABCDEF</StrValue>  </Data>
  </jsonValue>
  </it>
  </args>
  </tArg>
  </ForeExec>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <ForeExecResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">{"json":{"ExecResult":true,"ExecDay":"31.07.2025 00:00:00"}}"</ForeExecResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ForeExec" :
  {
   "tFore" :
    {
     "id" : "AHHCPKBHELFGGOAEJJPPPODMMPIBEDEEALGKJDIIBMIMFFJM!M!7360"
    },
   "tArg" :
    {
     "methodName" : "WorkWithJson",
     "args" :
      {
       "it" :
        {
         "k" : "1",
         "jsonValue" :
          {
           "Data" :
            {
             "IntValue" : "123",
             "DblValue" : "123.321",
             "StrValue" : "ABCDEF"
            }
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "ForeExecResult" : "{"json":{"ExecResult":true,"ExecDay":"31.07.2025 00:00:00"}}""
}


public static ForeExecResult ExecMethodWithJson(MbId mb, string assmId, string methodName)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tExec = new ForeExec()
    {
        tArg = new ForeExecArg()
        {
            methodName = methodName,
            // JSON-объект в качестве значения параметра
            args = new OdArg[1]
            {
                new OdArg(){ k = 1, jsonValue = new System.Xml.Linq.XElement("Data",
                    new System.Xml.Linq.XElement("IntValue", "123"),
                    new System.Xml.Linq.XElement("DblValue", "123.321"),
                    new System.Xml.Linq.XElement("StrValue", "ABCDEF")).ObjectToXml() }
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
