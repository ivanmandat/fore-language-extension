# SetDevEnvSettings: Операция

SetDevEnvSettings: Операция
-


**


# SetDevEnvSettings


## Синтаксис


SetDevEnvSettingsResult SetDevEnvSettings(MbId tMb,
 SetDevEnvSettingsArg tArg)


## Параметры


tMb. Моникёр
 соединения с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDevEnvSettings изменяет
 параметры среды разработки.


## Комментарии


Для выполнения операции укажите в поле tMb
 моникёр соединения с репозиторием. Моникёр может быть получен при выполнении
 операции [OpenMetabase](../Repository/OpenMetabase.htm). В
 поле tArg.tabSize укажите новые
 параметры среды разработки, которые необходимо применить.


Результатом операции будут измененные параметры среды разработки.


## Пример


Ниже приведён пример изменения параметров среды разработки. В запросе
 передаётся моникёр соединения с репозиторием и новые параметры среды разработки.
 В ответе возвращаются измененные значения параметров.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDevEnvSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xsi:type="**q1:OpenMetabaseResult**" xmlns="****" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**">
  <id>S1!M</id>  <sessKey>182323</sessKey>  <sessCookie>C1</sessCookie>  <version>163</version>  <defLocale>1049</defLocale>  </tMb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<settings>
  <tabSize>5</tabSize>  </settings>
  </tArg>
  </SetDevEnvSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDevEnvSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<settings xmlns="****">
  <tabSize>5</tabSize>  </settings>
  </SetDevEnvSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDevEnvSettings" :
  {
   "tMb" :
    {
     "@type" : "q1:OpenMetabaseResult",
     "id" : "S1!M",
     "sessKey" : "182323",
     "sessCookie" : "C1",
     "version" : "163",
     "defLocale" : "1049"
    },
   "tArg" :
    {
     "settings" :
      {
       "tabSize" : "5"
      }
    }
  }
}

### JSON-ответ:


{
 "SetDevEnvSettingsResult" :
  {
   "settings" :
    {
     "tabSize" : "5"
    }
  }
}


public static SetDevEnvSettingsResult SetDevEnvSettings(MbId mb, long tabulationSize)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetDevEnvSettings()
    {
        tArg = new SetDevEnvSettingsArg()
        {
            settings = new DevEnvSettings()
            {
                tabSize = tabulationSize
            }
        },
        //Моникёр соединения с репозиторием
        tMb = mb
    };
    //Изменение параметров среды разработки
    var result = somClient.SetDevEnvSettings(tSet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
