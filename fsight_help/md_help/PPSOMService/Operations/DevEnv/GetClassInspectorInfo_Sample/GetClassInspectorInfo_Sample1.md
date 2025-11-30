# Получение информации о свойстве интерфейса

Получение информации о свойстве интерфейса
-


**


# Получение информации о свойстве интерфейса


Ниже приведён пример использования операции [GetClassInspectorInfo](../GetClassInspectorInfo.htm)
 для получения информации о свойстве интерфейса. В запросе передаётся наименование
 сборки, интерфейса и свойстве. Также передаётся адрес справочной системы.
 В ответе возвращается полученная информация о свойстве.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetClassInspectorInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMb xsi:type="**q1:OpenMetabaseResult**" xmlns="****" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**">
  <id>COAALKJJBFIOFOAEOHJHMAKDHKFCMMDEEKIEPDMEAHENJCAH!M</id>  <sessKey>272175</sessKey>  <sessCookie>C1</sessCookie>  <version>163</version>  <defLocale>1049</defLocale>  <driver>2</driver>  </tMb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <path>System.IException</path>  <member>Message</member>  <helpAddress>https://help.fsight.ru/ru/</helpAddress>  </tArg>
  </GetClassInspectorInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetClassInspectorInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <subNodes xmlns="****" />
  <description xmlns="****">https://help.fsight.ru/ru//MergedProjects/ForeSys/Interface/IException/IException.Message.htm</description>  </GetClassInspectorInfoResult>
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
     "member" : "Message",
     "helpAddress" : "https:\/\/help.fsight.ru\/ru\/"
    }
  }
}

### JSON-ответ:


{
 "GetClassInspectorInfoResult" :
  {
   "subNodes" : "",
   "description" : "https:\/\/help.fsight.ru\/ru\/\/MergedProjects\/ForeSys\/Interface\/IException\/IException.Message.htm"
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
