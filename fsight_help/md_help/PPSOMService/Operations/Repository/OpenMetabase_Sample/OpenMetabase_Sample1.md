# Подключение к репозиторию с использованием цифровой подписи: Операция OpenMetabase

Подключение к репозиторию с использованием цифровой подписи: Операция OpenMetabase
-


**


# Подключение к репозиторию с использованием цифровой подписи


Ниже приведен пример использования операции [OpenMetabase](../OpenMetabase.htm)
 для подключения к репозиторию с использованием цифровой подписи. В репозитории
 должен быть сохранён сертификат с идентификатором «SPCERT». Запрашиваемый
 блок данных подписывается с помощью pfx-сертификата с наименованием «sp.pfx».


	SOAP
	 JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenMetabase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDef xmlns="****">
  <id>WAREHOUSE</id>  </tDef>
[![](../../../minus.gif)](../../../#)<tCreds xmlns="****">
  <pass />
[![](../../../minus.gif)](../../../#)<verifier>
[![](../../../minus.gif)](../../../#)<mbUser>
  <id>Warehouse</id>  </mbUser>
[![](../../../minus.gif)](../../../#)<user>
  <id>user@test.ru</id>  </user>
  <certificate>SPCERT</certificate>  <cookie>2779294529</cookie>  <signature>PwTWQtVXVKrNoSG9qPRBGMWDR12LzqGacyf6NZtSMqg5V0GT4HEsO40VphTRgvlmtK4DYRNGGHx8epHgSilqu+SAoD0DOskZt7WF/GOvq0ZkWdHwRgw4ZquT3o2Y7W5Xk0SKAoADUGwdYVGzRpqRKg+83GxqFIN1giJ78p7zvQuR0CW2Y4kCa9xouaRK52x1KNDLoz/g/H3cfplM5BfNGegAvBzcsmB2KsVGJHUImQSc3SngjqM5bvmYq2YAhHzMfveK+H9swb0zKjuobvnkNniXGAojDX74yzdHJ4ds/DxWIaEdP1l9jvXFLBruG2j9czFodYQAnhrAj4P9pxFLPA==</signature>  </verifier>
  </tCreds>
  <tArg xmlns="****" />
  </OpenMetabase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenMetabaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <id xmlns="****">LNNLODHMGFHGGOAEFFNCIFONDFGMMCLEPKEFMGPIJIAKGMHC!M</id>  <sessKey xmlns="****">394184</sessKey>  <sessCookie xmlns="****">C4</sessCookie>  <version xmlns="****">163</version>  <defLocale xmlns="****">1049</defLocale>  <driver xmlns="****">2</driver>  </OpenMetabaseResult>
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
     "pass" : "",
     "verifier" :
      {
       "mbUser" :
        {
         "id" : "Warehouse"
        },
       "user" :
        {
         "id" : "user@test.ru"
        },
       "certificate" : "SPCERT",
       "cookie" : "2779294529",
       "signature" : "PwTWQtVXVKrNoSG9qPRBGMWDR12LzqGacyf6NZtSMqg5V0GT4HEsO40VphTRgvlmtK4DYRNGGHx8epHgSilqu+SAoD0DOskZt7WF\/GOvq0ZkWdHwRgw4ZquT3o2Y7W5Xk0SKAoADUGwdYVGzRpqRKg+83GxqFIN1giJ78p7zvQuR0CW2Y4kCa9xouaRK52x1KNDLoz\/g\/H3cfplM5BfNGegAvBzcsmB2KsVGJHUImQSc3SngjqM5bvmYq2YAhHzMfveK+H9swb0zKjuobvnkNniXGAojDX74yzdHJ4ds\/DxWIaEdP1l9jvXFLBruG2j9czFodYQAnhrAj4P9pxFLPA=="
      }
    },
   "tArg" : ""
  }
}

### JSON-ответ:


{
 "OpenMetabaseResult" :
  {
   "id" : "LNNLODHMGFHGGOAEFFNCIFONDFGMMCLEPKEFMGPIJIAKGMHC!M",
   "sessKey" : "394184",
   "sessCookie" : "C4",
   "version" : "163",
   "defLocale" : "1049",
   "driver" : "2"
  }
}


public static MbId MetabaseConnectWithDigitalSign(string mbDefinitionId, string repoUser, string dbLoginUser)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Получение блока данных, который будет подписан цифровой подписью
    var verifierCode = somClient.GetVerifierCode(new GetVerifierCode() { });
    // Открытие pfx-сертификата и получение из него ключа подписи
    var x509 = new X509Certificate2(@"../../sp.pfx");
    RSACryptoServiceProvider rsa = x509.PrivateKey as RSACryptoServiceProvider;
    // Вычисление MD5-хеш от полученных ранее данных и подписание этого хеша цифровой подписью RSA
    var sign = rsa.SignData(verifierCode.verifierCode, new MD5CryptoServiceProvider());
    // Параметры выполнения операции
    var tOpen = new OpenMetabase()
    {
        tArg = new OpenMetabaseArg() { },
        tCreds = new UserCreds() // Учётные данные, с которыми производится подключение
        {
            verifier = new VerifierCodeLogonData()
            {
                // Пользователь, под которым входим в репозиторий. Этого пользователя может не быть в СУБД
                user = new UserId() { id = repoUser },
                // Пользователь, под которым подключаемся к БД репозитория. Пароль защищённо хранится в реестре на BI-сервере
                mbUser = new UserId() { id = dbLoginUser },
                // Ранее полученное значение, используемое для установления соответствия между цифровой подписью и блоком данных
                cookie = verifierCode.cookie,
                // Цифровая подпись, которую должен проверить сервер
                signature = sign,
                // Сертификат, который будет использоваться для проверки цифровой подписи. Должен быть сохранён в базе репозитория
                certificate = "SPCERT"
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
