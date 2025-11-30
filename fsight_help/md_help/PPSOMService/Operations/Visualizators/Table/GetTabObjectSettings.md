# GetTabObjectSettings: Операция

GetTabObjectSettings: Операция
-


**


# GetTabObjectSettings


## Синтаксис


TabObjectSettings GetTabObjectSettings(TabObjId
 tTabObject)


## Параметры


tTabObject. Моникёр
 объекта таблицы.


## Описание


Операция GetTabObjectSettings
 получает настройки объекта таблицы.


## Комментарии


Для выполнения операции укажите в поле tTabObject
 моникёр объекта таблицы. Моникёр формируется в следующем формате: «моникёр листа рег.отчёта»!Objects!«идентификатор
 объекта».


Результатом операции будут полученные настройки объекта.


## Пример


Ниже приведён пример получения настроек диаграммы, расположенной на
 листе регламентного отчёта. В запросе передаётся моникёр для работы с
 настройками диаграммы. В ответе возвращаются полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetTabObjectSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTabObject xmlns="****">
  <id>GELCPBJDAHMNFOAEOGANNOOIMCBDPMLEFKAFDIFHOKGGDEFD!M!S!PLBMFNEJDAHMNFOAEKCMNMAJAJPHAFBGEILMEHGGEFPOMHMFJ!Sheets!1!Objects!PrxChart1</id>  </tTabObject>
  </GetTabObjectSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetTabObjectSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <tot xmlns="****" />
  <tomm xmlns="****">5</tomm>  <toam xmlns="****">2</toam>  <prn xmlns="****">1</prn>  <trp xmlns="****">0</trp>  <a xmlns="****">0</a>  </GetTabObjectSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTabObjectSettings" :
  {
   "tTabObject" :
    {
     "id" : "GELCPBJDAHMNFOAEOGANNOOIMCBDPMLEFKAFDIFHOKGGDEFD!M!S!PLBMFNEJDAHMNFOAEKCMNMAJAJPHAFBGEILMEHGGEFPOMHMFJ!Sheets!1!Objects!PrxChart1"
    }
  }
}

### JSON-ответ:


{
 "GetTabObjectSettingsResult" :
  {
   "tot" : "",
   "tomm" : "5",
   "toam" : "2",
   "prn" : "1",
   "trp" : "0",
   "a" : "0"
  }
}


public static TabObjectSettings GetTabObjectSettings(string reportMoniker, string sheetKey, string objectId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetTabObjectSettings()
    {
        tTabObject = new TabObjId() { id = reportMoniker + "!Sheets!" + sheetKey + "!Objects!" + objectId}
    };
    // Получение настроек объекта таблицы
    var result = somClient.GetTabObjectSettings(tGet);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
