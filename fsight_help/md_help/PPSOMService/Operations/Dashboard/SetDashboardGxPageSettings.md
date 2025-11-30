# SetDashboardGxPageSettings: Операция

SetDashboardGxPageSettings: Операция
-


**


# SetDashboardGxPageSettings


## Синтаксис


bool SetDashboardGxPageSettings(string mon, DashboardExportPageSettings
 tArg)


## Параметры


mon. Моникёр
 открытого экземпляра аналитической панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDashboardGxPageSettings
 изменяет настройки печати информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели, а в поле tArg
 устанавливаемые параметры печати. Моникёр может быть получен при выполнении
 операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будут логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек печати информационной панели.
 В запросе передаётся моникёр открытого экземпляра информационной панели
 и устанавливаемые настройки. В ответе возвращаются признак успешного изменения
 настроек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDashboardGxPageSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">DBKCMEPAFHGGGOAEOMNHDEKIAPJLIFDEKIHGCJBHPKMFNJEM!M!S!PDACBALPAFHGGGOAEICMCFDBNGDDKBIPEKLCGKIOKAKHGGDPG</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <centerHorizontal>true</centerHorizontal>  <centerVertical>true</centerVertical>[![](../../minus.gif)](../../#)<scale>
  <value>0.8</value>  <fitToPages>false</fitToPages>  </scale>
  </tArg>
  </SetDashboardGxPageSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetDashboardGxPageSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetDashboardGxPageSettingsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDashboardGxPageSettings" :
  {
   "mon" : "DBKCMEPAFHGGGOAEOMNHDEKIAPJLIFDEKIHGCJBHPKMFNJEM!M!S!PDACBALPAFHGGGOAEICMCFDBNGDDKBIPEKLCGKIOKAKHGGDPG",
   "tArg" :
    {
     "centerHorizontal" : "true",
     "centerVertical" : "true",
     "scale" :
      {
       "value" : "0.8",
       "fitToPages" : "false"
      }
    }
  }
}

### JSON-ответ:


{
 "SetDashboardGxPageSettingsResult" : "1"
}


public static bool SetDashboardGxPageSettings(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDashboardGxPageSettings()
    {
        // Моникёр для работы с визуализатором
        mon = moniker,
        tArg = new DashboardExportPageSettings()
        {
            centerHorizontal = true,
            centerVertical = true,
            scale = new TabPrintScale()
            {
                fitToPages = false,
                value = 0.8 // Масштаб - 80%
            }
        }
    };
    // Изменение настроек печати информационной панели
    var result = somClient.SetDashboardGxPageSettings(tSet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
