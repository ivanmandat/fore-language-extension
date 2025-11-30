# Получение информации об интерфейсе

Получение информации об интерфейсе
-


**


# Получение информации об интерфейсе


Ниже приведён пример использования операции [GetClassInspectorInfo](../GetClassInspectorInfo.htm)
 для получения информации о членах интерфейса. В запросе передаётся наименование
 сборки и интерфейса. В ответе возвращается список элементов кода и информация
 о них.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetClassInspectorInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMb xsi:type="**q1:OpenMetabaseResult**" xmlns="****" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**">
  <id>COAALKJJBFIOFOAEOHJHMAKDHKFCMMDEEKIEPDMEAHENJCAH!M</id>  <sessKey>272175</sessKey>  <sessCookie>C1</sessCookie>  <version>163</version>  <defLocale>1049</defLocale>  <driver>2</driver>  </tMb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <path>System.IException</path>  <member />
  <helpAddress />
  </tArg>
  </GetClassInspectorInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetClassInspectorInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <subNodes xmlns="****" />
[![](../../../minus.gif)](../../../#)<info xmlns="****">
[![](../../../minus.gif)](../../../#)<it>
  <type>Property</type>  <name>Line</name>  <typeName>Integer</typeName>  <access>Public</access>  <imask>0</imask>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Property</type>  <name>Message</name>  <typeName>String</typeName>  <access>Public</access>  <imask>0</imask>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Property</type>  <name>MessageID</name>  <typeName>Integer</typeName>  <access>Public</access>  <imask>0</imask>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Property</type>  <name>NestedException</name>  <typeName>IException</typeName>  <access>Public</access>  <imask>0</imask>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Sub</type>  <name>ReportError</name>  <access>Public</access>  <imask>0</imask>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Property</type>  <name>Source</name>  <typeName>String</typeName>  <access>Public</access>  <imask>0</imask>  </it>
  </info>
  <description xmlns="****"><b>Interface </b>IException<br />  Член модуля System</description>  </GetClassInspectorInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetClassInspectorInfo" :
  {
   "tMb" :
    {
     "@type" : "q1:OpenMetabaseResult",
     "id" : "COAALKJJBFIOFOAEOHJHMAKDHKFCMMDEEKIEPDMEAHENJCAH!M",
     "sessKey" : "272175",
     "sessCookie" : "C1",
     "version" : "163",
     "defLocale" : "1049",
     "driver" : "2"
    },
   "tArg" :
    {
     "path" : "System.IException",
     "member" : "",
     "helpAddress" : ""
    }
  }
}

### JSON-ответ:


{
 "GetClassInspectorInfoResult" :
  {
   "subNodes" : "",
   "info" :
    {
     "it" :
      [
        {
         "type" : "Property",
         "name" : "Line",
         "typeName" : "Integer",
         "access" : "Public",
         "imask" : "0"
        },
        {
         "type" : "Property",
         "name" : "Message",
         "typeName" : "String",
         "access" : "Public",
         "imask" : "0"
        },
        {
         "type" : "Property",
         "name" : "MessageID",
         "typeName" : "Integer",
         "access" : "Public",
         "imask" : "0"
        },
        {
         "type" : "Property",
         "name" : "NestedException",
         "typeName" : "IException",
         "access" : "Public",
         "imask" : "0"
        },
        {
         "type" : "Sub",
         "name" : "ReportError",
         "access" : "Public",
         "imask" : "0"
        },
        {
         "type" : "Property",
         "name" : "Source",
         "typeName" : "String",
         "access" : "Public",
         "imask" : "0"
        }
      ]
    },
   "description" : "<b>Interface <\/b>IException<br \/>  Член модуля System"
  }
}


public static GetClassInspectorInfoResult GetClassInspectorInfo(MbId mb, string assembly, string parentName = "", string classMember = "", string helpUrl = "")
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetClassInspectorInfo()
    {
        tMb = mb,
        tArg = new GetClassInspectorInfoArg()
        {
            path = assembly + (parentName == "" ? "" : '.' + parentName),
            member = classMember,
            helpAddress = helpUrl
        }
    };
    // Получение информации из инспектора классов
    var result = somClient.GetClassInspectorInfo(tGet);
    return result;
}


См. также:


[GetClassInspectorInfo:
 Операция](../GetClassInspectorInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
