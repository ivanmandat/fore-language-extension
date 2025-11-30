# Подключение к репозиторию с аутентификацией на внешнем OAuth-сервере: Операция OpenMetabase

Подключение к репозиторию с аутентификацией на внешнем OAuth-сервере: Операция OpenMetabase
-


**


# Подключение к репозиторию с аутентификацией на внешнем OAuth-сервере


Ниже приведён пример использования операции [OpenMetabase](../OpenMetabase.htm)
 для подключения к репозиторию пользователя, прошедшего аутентификацию
 на внешнем OAuth-сервере. Предполагается, что все необходимые операции
 уже выполнены и получены результаты их работы. В запросе передаются идентификатор
 описания репозитория, полученный ранее токен и ключ настроек сервиса аутентификации.
 В ответе приходит моникёр соединения с репозиторием.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenMetabase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDef xmlns="****">
  <id>WAREHOUSE</id>  </tDef>
[![](../../../minus.gif)](../../../#)<tCreds xmlns="****">
[![](../../../minus.gif)](../../../#)<oauth>
  <oauth_token>1d019c96-32ab-4966-b484-58cf303f4fe1.14acbe5a-0442-4897-9396-4f7bd85edd89.df1bb917-39c4-402e-a218-af78d215be74</oauth_token>  <oauth_verifier />
  <svcKey>0</svcKey>  </oauth>
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
  <id xmlns="****">DPEAJGROMGHGGOAECDBOBOCJCPGMIIEEKJEBOPGBJKEJKAEH!M</id>  <sessKey xmlns="****">394186</sessKey>  <sessCookie xmlns="****">C1</sessCookie>  <version xmlns="****">166</version>  <defLocale xmlns="****">1049</defLocale>  <driver xmlns="****">2</driver>  </OpenMetabaseResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenMetabase" :
  {
   "tDef" :
    {
     "id" : "WAREHOUSE"
    },
   "tCreds" :
    {
     "oauth" :
      {
       "oauth_token" : "1d019c96-32ab-4966-b484-58cf303f4fe1.14acbe5a-0442-4897-9396-4f7bd85edd89.df1bb917-39c4-402e-a218-af78d215be74",
       "oauth_verifier" : "",
       "svcKey" : "0"
      },
     "pass" : ""
    },
   "tArg" : ""
  }
}

### JSON-ответ:


{
 "OpenMetabaseResult" :
  {
   "id" : "DPEAJGROMGHGGOAECDBOBOCJCPGMIIEEKJEBOPGBJKEJKAEH!M",
   "sessKey" : "394186",
   "sessCookie" : "C1",
   "version" : "166",
   "defLocale" : "1049",
   "driver" : "2"
  }
}


public static MbId MetabaseConnectWithOauth(string mbDefinitionId, string token, uint key)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenMetabase()
    {
        tArg = new OpenMetabaseArg() { },
        tCreds = new UserCreds() // Учётные данные, с которыми производится подключение
        {
            oauth = new OAuthLogonData()
            {
                oauth_token = token,
                oauth_verifier = "",
                svcKey = key
            },
            pass = string.Empty
        },
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
