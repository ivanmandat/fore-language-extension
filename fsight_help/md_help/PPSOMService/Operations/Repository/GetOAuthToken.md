# GetOAuthToken: Операция

GetOAuthToken: Операция
-


**


# GetOAuthToken


## Синтаксис


GetOAuthTokenResult GetOAuthToken(GetOAuthTokenArg
 tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция GetOAuthToken получает
 токен с OAuth-сервера, который используется при аутентификации пользователя
 на этом сервере.


## Комментарии


Данная операция используется, если авторизация пользователя в репозитории
 осуществляется за счёт аутентификации пользователя на OAuth-сервере. Предварительно
 необходимо настроить веб-приложение. Если используется веб-приложение
 «Форсайт. Аналитическая платформа», то произведите настройки в соответствии
 с описанием, представленным в подразделе «[Настройка
 аутентификации через внешние сервисы](Setup.chm::/UiWebSetup/Authentication/login_settings_using_external_services.htm)».


Если веб-приложение не используется, но разрабатываемое приложение после
 аутентификации на OAuth-сервере должно будет авторизоваться в репозитории
 посредством BI-сервера, то необходимо разрабатываемое веб-приложение зарегистрировать
 на соответствующем OAuth-сервере. Ключ и секретный код приложения должны
 быть сохранены на BI-сервере в [реестре](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm#oauth)/[файле
 settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm#system) в подразделе OAuth.


Перед операцией GetOAuthToken
 выполните следующие шаги:


	- Выполните операцию [GetOAuthSettings](GetOAuthSettings.htm),
	 в её параметрах полю svcKey
	 укажите значение -1. В результате операции будет получен список серверов
	 аутентификации, созданных в разделе OAuth в реестре/файле settings.xml.
	 Для каждого элемента списка будет доступен идентификатор, ключ и пиктограмма
	 - поля id, key
	 и icon соответственно.


	- Выполните операцию [CreateOAuthState](CreateOAuthState.htm),
	 в поле svcKey укажите ключ
	 настроек одного из серверов аутентификации. Во время выполнения операции
	 BI-сервер сгенерирует параметр state
	 для защиты от потенциальных атак типа CSRF при получении кода авторизации.
	 В результате операции в поле authUrl
	 будет URL-адрес сервиса аутентификации, дополненный параметром state. Значение адреса формируется
	 на основании настроек, заданных в [реестре](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm#oauth)/[файле
	 settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm#system) , должно содержать параметр redirect_uri. Адрес, указанный
	 в redirect_uri, должен быть
	 прописан в настройках внешнего сервиса аутентификации. Также в ответе
	 через заголовок Set-Cookie BI-сервер устанавливает в браузере cookie
	 со значением параметра state.
	 Cookie имеет время жизни 5 минут, имеет атрибуты HttpOnly и Secure.


Важно. Cookie
 с атрибутом Secure передаются только по HTTPS-соединению, поэтому взаимодействие
 BI-сервера и веб-приложения обязательно должны быть настроены на [работу по HTTPS](Setup.chm::/UiWebSetup/04_FAQ/setting_https.htm), иначе OAuth-аутентификация будет невозможна.


	- Веб-приложение должно осуществить перенаправление по полученному
	 адресу authUrl. Пользователь
	 проходит аутентификацию на внешнем сервисе. При успешной аутентификации
	 внешний сервис осуществляет обратное перенаправление в веб-приложение
	 по адресу, который был задан в параметре redirect_uri
	 с указанием параметров code
	 и state.


	- Выполните операцию GetOAuthToken, в поле svcKey
	 укажите использованный ранее ключ настроек сервера аутентификации,
	 в поле applicationUrl укажите
	 значение параметра redirect_uri,
	 в полях loginCode и state значения полученных параметров
	 code и state соответственно. При выполнении BI-сервер по значению
	 параметра state осуществит
	 проверку происхождения запроса и обратится к внешнему серверу аутентификации
	 для формирования токена. Если все завершилось успешно, то полученный
	 токен будет доступен в поле oauth_token
	 результата выполнения операции. Полученый токен указывается в поле
	 tCreds.oauth.oauth_token
	 при выполнении операции [OpenMetabase](OpenMetabase.htm).


## Пример


Ниже приведён пример получения токена с OAuth сервера. Предполагается,
 что все необходимые операции уже выполнены и получены результаты их работы.
 В запросе отправляется URL-адрес страницы, на которую будет осуществляться
 переадресация после аутентификации, код, полученный при аутентификации,
 ключ настроек сервиса аутентификации и сгенерированный BI-сервером код
 для проверки подлинности запросов. В ответе возвращается полученный токен.


	SOAP
	 JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetOAuthToken xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <applicationUrl>https://myserver.com/FP_App_v10.x/r/#/redirect</applicationUrl>  <loginCode>g0ZGZmNjVmOWI</loginCode>  <svcKey>0</svcKey>  <state>ED9F5DF6E55440CDA86561A87A71CD33</state>  </tArg>
  </GetOAuthToken>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetOAuthTokenResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <oauth_token xmlns="****">1d019c96-32ab-4966-b484-58cf303f4fe1.14acbe5a-0442-4897-9396-4f7bd85edd89.df1bb917-39c4-402e-a218-af78d215be74</oauth_token>  </GetOAuthTokenResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetOAuthToken" :
  {
   "tArg" :
    {
     "applicationUrl" : "https:\/\/myserver.com\/FP_App_v10.x\/r\/#\/redirect",
     "loginCode" : "g0ZGZmNjVmOWI",
     "svcKey" : "0",
     "state" : "ED9F5DF6E55440CDA86561A87A71CD33"
    }
  }
}

### JSON-ответ:


{
 "GetOAuthTokenResult" :
  {
   "oauth_token" : "1d019c96-32ab-4966-b484-58cf303f4fe1.14acbe5a-0442-4897-9396-4f7bd85edd89.df1bb917-39c4-402e-a218-af78d215be74"
  }
}


public static GetOAuthTokenResult GetOAuthToken(string url, string code, uint key, string checkState)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetOAuthToken()
    {
        tArg = new GetOAuthTokenArg()
        {
            applicationUrl = url,
            loginCode = code,
            svcKey = key,
            state = checkState
        }
    };
    // Получение токена
    var result = somClient.GetOAuthToken(tGet);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
