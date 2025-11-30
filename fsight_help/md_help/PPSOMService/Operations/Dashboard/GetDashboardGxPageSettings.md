# GetDashboardGxPageSettings: Операция

GetDashboardGxPageSettings: Операция
-


**


# GetDashboardGxPageSettings


## Синтаксис


DashboardExportPageSettings GetDashboardGxPageSettings(string
 mon)


## Параметры


mon. Моникёр
 открытого экземпляра аналитической панели.


## Описание


Операция GetDashboardGxPageSettings
 получает настройки печати информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели. Моникёр может быть
 получен при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будут полученные настройки печати.


## Пример


Ниже приведён пример получения настроек печати информационной панели.
 В запросе передаётся моникёр открытого экземпляра информационной панели.
 В ответе возвращаются полученные настройки.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDashboardGxPageSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">DBKCMEPAFHGGGOAEOMNHDEKIAPJLIFDEKIHGCJBHPKMFNJEM!M!S!PDACBALPAFHGGGOAEICMCFDBNGDDKBIPEKLCGKIOKAKHGGDPG</mon>  </GetDashboardGxPageSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDashboardGxPageSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<paperSize xmlns="****">
  <width>210000</width>  <height>297000</height>  <units>Mkm</units>  </paperSize>
[![](../../minus.gif)](../../#)<margins xmlns="****">
  <left>30</left>  <top>20</top>  <right>20</right>  <bottom>20</bottom>  <units>Mm</units>  </margins>
  <paperFormat xmlns="****">A4</paperFormat>  <paperOrientation xmlns="****">Portrait</paperOrientation>  <centerHorizontal xmlns="****">1</centerHorizontal>  <centerVertical xmlns="****">1</centerVertical>[![](../../minus.gif)](../../#)<scale xmlns="****">
  <value>0.8</value>  <fitToPages>0</fitToPages>  <pageWidth>1</pageWidth>  <pageHeight>1</pageHeight>  </scale>
  </GetDashboardGxPageSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDashboardGxPageSettings" :
  {
   "mon" : "DBKCMEPAFHGGGOAEOMNHDEKIAPJLIFDEKIHGCJBHPKMFNJEM!M!S!PDACBALPAFHGGGOAEICMCFDBNGDDKBIPEKLCGKIOKAKHGGDPG"
  }
}

### JSON-ответ:


{
 "GetDashboardGxPageSettingsResult" :
  {
   "paperSize" :
    {
     "width" : "210000",
     "height" : "297000",
     "units" : "Mkm"
    },
   "margins" :
    {
     "left" : "30",
     "top" : "20",
     "right" : "20",
     "bottom" : "20",
     "units" : "Mm"
    },
   "paperFormat" : "A4",
   "paperOrientation" : "Portrait",
   "centerHorizontal" : "1",
   "centerVertical" : "1",
   "scale" :
    {
     "value" : "0.8",
     "fitToPages" : "0",
     "pageWidth" : "1",
     "pageHeight" : "1"
    }
  }
}


public static DashboardExportPageSettings GetDashboardGxPageSettings(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDashboardGxPageSettings()
    {
        // Моникёр для работы с визуализатором
        mon = moniker
    };
    // Получение настроек печати информационной панели
    var result = somClient.GetDashboardGxPageSettings(tGet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
