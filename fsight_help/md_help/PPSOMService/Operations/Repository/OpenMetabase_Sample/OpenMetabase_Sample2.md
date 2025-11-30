# Подключение к репозиторию с использованием интегрированной доменной аутентификации: Операция OpenMetabase

Подключение к репозиторию с использованием интегрированной доменной аутентификации: Операция OpenMetabase
-


**


# Подключение к репозиторию с использованием интегрированной доменной
 аутентификации


Ниже приведен пример использования операции [OpenMetabase](../OpenMetabase.htm)
 для подключения к репозиторию под текущим доменным пользователем. В запросе
 передается только идентификатор описания, содержащего настройки для подключения
 к репозиторию. В ответе приходит моникёр соединения с репозиторием.


	SOAP
	 JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenMetabase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDef xmlns="****">
  <id>WAREHOUSE_DOMAIN</id>  </tDef>
[![](../../../minus.gif)](../../../#)<tCreds xmlns="****">
  <pass />
  </tCreds>
  <tArg xmlns="****" />
  </OpenMetabase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenMetabaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <id xmlns="****">JINPKNBLFFHGGOAEMPGHKFFGDJMMFMGEIKMPMPCCPADDPPHJ!M</id>  <sessKey xmlns="****">150248</sessKey>  <sessCookie xmlns="****">C2</sessCookie>  <version xmlns="****">166</version>  <defLocale xmlns="****">1049</defLocale>  <driver xmlns="****">2</driver>  </OpenMetabaseResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenMetabase" :
  {
   "tDef" :
    {
     "id" : "WAREHOUSE_DOMAIN"
    },
   "tCreds" :
    {
     "pass" : ""
    },
   "tArg" : ""
  }
}

### JSON-ответ:


{
 "OpenMetabaseResult" :
  {
   "id" : "JINPKNBLFFHGGOAEMPGHKFFGDJMMFMGEIKMPMPCCPADDPPHJ!M",
   "sessKey" : "150248",
   "sessCookie" : "C2",
   "version" : "166",
   "defLocale" : "1049",
   "driver" : "2"
  }
}


public static MbId IntegratedDomainConnect(string mbDefinitionId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenMetabase()
    {
        tArg = new OpenMetabaseArg() { },
        // Пустые учётные данные, вместо которых будут переданы учётные данные доменного пользователя
        tCreds = new UserCreds() { pass = "" },
        tDef = new MbDef() // Описание репозитория, к которому производится подключение
        {
            id = mbDefinitionId
        }
    };
    // Подключение к репозиторию
    MbId mb = somClient.OpenMetabase(tOpen);
    return mb;
}


См. также:


[OpenMetabase](../OpenMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
