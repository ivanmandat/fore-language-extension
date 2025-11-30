# CreateOAuthState: Операция

CreateOAuthState: Операция
-


**


# CreateOAuthState


## Синтаксис


CreateOAuthStateResult CreateOAuthState(CreateOAuthStateArg
 tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция CreateOAuthState получает
 адрес сервиса аутентификации, по которому будет запрашиваться токен доступа.


## Комментарии


Для выполнения операции укажите в поле tArg.svcKey
 ключ сервиса авторизации. Ключ может быть получен в результате выполнения
 операции [GetOAuthSettings](GetOAuthSettings.htm).


Результатом выполнения операции будет адрес сервиса аутентификации,
 который дополнен сгенерированным параметром state
 для защиты от потенциальных атак типа CSRF при получении кода авторизации.
 Для получения подробной информации обратитесь к разделу «[Настройка
 аутентификации через внешние сервисы](setup.chm::/UiWebSetup/Authentication/login_settings_using_external_services.htm#oauth_parameters)».


## Пример


Ниже приведён пример получения адреса сервиса авторизации. В запросе
 передаётся ключ сервиса авторизации. В ответе возвращается сформированный
 адрес.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CreateOAuthState xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <svcKey>0</svcKey>  </tArg>
  </CreateOAuthState>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<CreateOAuthStateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <authUrl xmlns="****">https://accounts.google.com/o/oauth2/auth/authorize?client_id=214433571309-nl9btulcqc3u05d8128uaei3fjrdni8r.apps.googleusercontent.com&response_type=code&access_type=offline&scope=https%3A//www.googleapis.com/auth/userinfo.profile&response_mode=query&state=ED9F5DF6E55440CDA86561A87A71CD33&redirect_uri=</authUrl>  </CreateOAuthStateResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CreateOAuthState" :
  {
   "tArg" :
    {
     "svcKey" : "0"
    }
  }
}

### JSON-ответ:


{
 "CreateOAuthStateResult" :
  {
   "authUrl" : "https:\/\/accounts.google.com\/o\/oauth2\/auth\/authorize?client_id=214433571309-nl9btulcqc3u05d8128uaei3fjrdni8r.apps.googleusercontent.com&response_type=code&access_type=offline&scope=https%3A\/\/www.googleapis.com\/auth\/userinfo.profile&response_mode=query&state=ED9F5DF6E55440CDA86561A87A71CD33&redirect_uri="
  }
}


public static CreateOAuthStateResult CreateOAuthState(uint key)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tCreate = new CreateOAuthState()
    {
        tArg = new CreateOAuthStateArg()
        {
            svcKey = key
        }
    };
    // Получение адреса сервиса авторизации
    var result = somClient.CreateOAuthState(tCreate);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
