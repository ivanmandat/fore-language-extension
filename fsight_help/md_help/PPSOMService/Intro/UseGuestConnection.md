# Использование гостевого подключения

Использование гостевого подключения
-


**


# Использование гостевого подключения


Для ознакомительной работы с веб-сервисом может быть организована работа
 через гостевое соединение. Для работы такого соединения предварительно
 сохраните на BI-сервере учётные данные пользователя, которые будут использоваться
 для авторизации в репозитории:


	- в ОС Linux в файле настроек репозиториев [Metabases.xml](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm)
	 в разделе [Credentials](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#credentials),
	 соответствующем идентификатору репозитория, и в [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm)
	 в разделе [Audit](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm#audit);


	- в ОС Windows в разделе реестра [HKLM\SOFTWARE\Foresight Analytics Platform\10.0\Metabases\<идентификатор репозитория>]
	 и в файле [Metabases.xml](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm),
	 если он используется.


Для этого в командной строке от имени администратора запустите утилиту
 [PP.Util](Setup.chm::/05_RepoMngr/Service_Applications/PP_Util.htm)
 с параметрами /save_creds <id репозитория>
 /gc <имя пользователя>. Введите пароль и нажмите клавишу
 ENTER для завершения процедуры сохранения учётных данных.


После того, как учётные данные сохранены, имеется два варианта создания
 гостевого соединения:


	- Использовать в операциях фиксированный
	 моникёр. Фиксированный моникёр основан на идентификаторе описания
	 репозитория и имеет следующий формат: <id
	 описания репозитория>!Guest!M. При первом выполнении любой
	 операции с моникёром данного вида на BI-сервере создаётся гостевое
	 соединение. Используйте данный моникёр в качестве префикса для выполнения
	 других операций;


	- Создать гостевое соединение
	 с помощью операции [OpenMetabase](../Operations/Repository/OpenMetabase.htm).
	 Для выполнения операции укажите в поле tDef.id
	 идентификатор описания репозитория, в учётных данных пользователя
	 в поле tCreds.useGuestCreds
	 укажите значение true, а в
	 обязательном поле tCreds.pass
	 пустое значение. При выполнении операции будет создано гостевое соединение
	 и возвращён моникёр для дальнейшей работы.


При работе через гостевое соединение возможность выполнять операции
 будет для тех объектов, на которые имеются права у сохранённого пользователя.
 Для закрытия гостевого соединения используйте операцию [CloseMetabase](../Operations/Repository/CloseMetabase.htm).


## Пример


Пример получения информации о гостевом соединении. Если гостевое соединение
 еще не создано, то оно будет создано автоматически при выполнении операции
 GetSystemInfo.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../minus.gif)](../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../minus.gif)](../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../minus.gif)](../#)<GetSystemInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../minus.gif)](../#)<tArg xmlns="****">
[![](../minus.gif)](../#)<metabase>
  <id>WAREHOUSE!Guest!M</id>  </metabase>
  </tArg>
  </GetSystemInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../minus.gif)](../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../minus.gif)](../#)<soapenv:Body>
[![](../minus.gif)](../#)<GetSystemInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <version xmlns="****">Релиз 10.6.10067.0 Master x64</version>  <release xmlns="****">10.6</release>  <platformInfo xmlns="****">x64</platformInfo>  <osType xmlns="****">Windows</osType>  <osInfo xmlns="****">Windows 10 x64</osInfo>  <metabaseSessionTimeout xmlns="****">00:30:00.000</metabaseSessionTimeout>  <metabaseStoreBinaryCount xmlns="****">0</metabaseStoreBinaryCount>  <metabaseLocale xmlns="****">1049</metabaseLocale>  <metabaseConnectionPoolMaxCount xmlns="****">50</metabaseConnectionPoolMaxCount>  </GetSystemInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetSystemInfo" :
  {
   "tArg" :
    {
     "metabase" :
      {
       "id" : "WAREHOUSE!Guest!M"
      }
    }
  }
}

### JSON-ответ:


{
 "GetSystemInfoResult" :
  {
   "version" : "Релиз 10.6.10067.0 Master x64",
   "release" : "10.6",
   "platformInfo" : "x64",
   "osType" : "Windows",
   "osInfo" : "Windows 10 x64",
   "metabaseSessionTimeout" : "00:30:00.000",
   "metabaseStoreBinaryCount" : "0",
   "metabaseLocale" : "1049",
   "metabaseConnectionPoolMaxCount" : "50"
  }
}


public static GetSystemInfoResult SimpleGuestConnect(string mbDefinitionId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetSystemInfo()
    {
        tArg = new GetSystemInfoArg()
        {
            metabase = new MbId() { id = mbDefinitionId + "!Guest!M" }
        }
    };
    // Получение информации о веб-сервисе
    var result = somClient.GetSystemInfo(tGet);
    return result;
}


Пример создания гостевого соединения с помощью операции OpenMetabase:


	SOAP
	  JSON C#


### SOAP-запрос:


[![](../minus.gif)](../#)<s:Envelope xmlns:s="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../minus.gif)](../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../minus.gif)](../#)<OpenMetabase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../minus.gif)](../#)<tDef xmlns="****">
  <id>WAREHOUSE</id>  </tDef>
[![](../minus.gif)](../#)<tCreds xmlns="****">
  <pass />
  <useGuestCreds>true</useGuestCreds>  </tCreds>
  <tArg xmlns="****" />
  </OpenMetabase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../minus.gif)](../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../minus.gif)](../#)<soapenv:Body>
[![](../minus.gif)](../#)<OpenMetabaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <id xmlns="****">ABMDEDIPOAODGOAEILNHAJACNGILILPEMLBKDENDDGHECHAJ!M</id>  <sessKey xmlns="****">339878</sessKey>  <sessCookie xmlns="****">C2</sessCookie>  <version xmlns="****">163</version>  <defLocale xmlns="****">1049</defLocale>  <driver xmlns="****">2</driver>  </OpenMetabaseResult>
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
     "useGuestCreds" : "true"
    },
   "tArg" : ""
  }
}

### JSON-ответ:


{
 "OpenMetabaseResult" :
  {
   "id" : "ABMDEDIPOAODGOAEILNHAJACNGILILPEMLBKDENDDGHECHAJ!M",
   "sessKey" : "339878",
   "sessCookie" : "C2",
   "version" : "163",
   "defLocale" : "1049",
   "driver" : "2"
  }
}


public static OpenMetabaseResult GuestConnectByOpenMetabase(string mbDefinitionId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenMetabase()
    {
        tArg = new OpenMetabaseArg(),
        tCreds = new UserCreds()
        {
            useGuestCreds = true, // Признак использования гостевого соединения
            pass = string.Empty // Пустой пароль т.к. поле обязательное
        },
        tDef = new MbDef()
        {
            id = mbDefinitionId // Идентификатор описание репозитория, к которому производится подключение
        }
    };
    // Создание гостевого соединения
    var result = somClient.OpenMetabase(tOpen);
    return result;
}


См. также:


[Подключение
 к веб-сервису](PP7Service_Using.htm) | [Настройка
 гостевого входа](Setup.chm::/UiWebSetup/Authentication/Guest_login.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
