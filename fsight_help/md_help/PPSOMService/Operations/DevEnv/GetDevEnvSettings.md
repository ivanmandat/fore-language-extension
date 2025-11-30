# GetDevEnvSettings: Операция

GetDevEnvSettings: Операция
-


**


# GetDevEnvSettings


## Синтаксис


GetDevEnvSettingsResult GetDevEnvSettings(MbId tMb)


## Параметры


tMb. Моникёр
 соединения с репозиторием.


## Описание


Операция GetDevEnvSettings получает
 параметры среды разработки.


## Комментарии


Для выполнения операции укажите в поле tMb
 моникёр соединения с репозиторием. Моникёр может быть получен при выполнении
 операции [OpenMetabase](../Repository/OpenMetabase.htm).


Результатом операции будут параметры среды разработки.


## Пример


Ниже приведён пример получения параметров среды разработки. В запросе
 передаётся моникёр соединения с репозиторием. В ответе возвращаются значения
 параметров.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDevEnvSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xsi:type="**q1:OpenMetabaseResult**" xmlns="****" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**">
  <id>S1!M</id>  <sessKey>182301</sessKey>  <sessCookie>C1</sessCookie>  <version>163</version>  <defLocale>1049</defLocale>  </tMb>
  </GetDevEnvSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDevEnvSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<settings xmlns="****">
  <tabSize>4</tabSize>  </settings>
  </GetDevEnvSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDevEnvSettings" :
  {
   "tMb" :
    {
     "@type" : "q1:OpenMetabaseResult",
     "id" : "S1!M",
     "sessKey" : "182301",
     "sessCookie" : "C1",
     "version" : "163",
     "defLocale" : "1049"
    }
  }
}

### JSON-ответ:


{
 "GetDevEnvSettingsResult" :
  {
   "settings" :
    {
     "tabSize" : "4"
    }
  }
}


public static GetDevEnvSettingsResult GetDevEnvSettings(MbId mb)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetDevEnvSettings()
    {
        //Моникёр соединения с репозиторием
        tMb = mb
    };
    //Получение параметров среды разработки
    var result = somClient.GetDevEnvSettings(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
