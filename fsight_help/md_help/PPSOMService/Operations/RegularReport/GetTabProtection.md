# GetTabProtection: Операция

GetTabProtection: Операция
-


**


# GetTabProtection


## Синтаксис


GetTabProtectionResult GetTabProtection(TabSheetId
 tTabSheet, TabProtectionArg tArg)


## Параметры


tTabSheet. Моникёр
 таблицы листа.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetTabProtection получает
 информацию о защите таблицы листа регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле tTabSheet
 моникёр таблицы, а в поле tArg
 параметры извлечения информации о защите. Моникёр указывается в следующем
 формате: Моникёр экземпляра регламентного
 отчёта!Ключ листа. В поле tArg.protection
 укажите пустое значение.


Результатом выполнения операции будет полученная информация о защите
 таблицы листа.


## Пример


Ниже приведён пример получения информации о защите таблицы листа регламентного
 отчёта. В запросе передаётся моникёр листа. В ответе возвращается полученная
 информация об установленной защите.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetTabProtection xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTabSheet xmlns="****">
  <id>NIKLFCDENADGGOAEENCHFLADKBGCAHKEIJNDAILBBLMMBJMM!M!S!POJMOCFDENADGGOAELFPMGJIFMKJKLIFEMIAAHNPBJKILIHJL!Sheets!1</id>  </tTabSheet>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <protection>0</protection>  </tArg>
  </GetTabProtection>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetTabProtectionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<tabProtection xmlns="****">
  <protection>12739</protection>  </tabProtection>
  </GetTabProtectionResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTabProtection" :
  {
   "tTabSheet" :
    {
     "id" : "NIKLFCDENADGGOAEENCHFLADKBGCAHKEIJNDAILBBLMMBJMM!M!S!POJMOCFDENADGGOAELFPMGJIFMKJKLIFEMIAAHNPBJKILIHJL!Sheets!1"
    },
   "tArg" :
    {
     "protection" : "0"
    }
  }
}

### JSON-ответ:


{
 "GetTabProtectionResult" :
  {
   "tabProtection" :
    {
     "protection" : "12739"
    }
  }
}


public static GetTabProtectionResult GetTabProtection(string moniker, string sheetKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetTabProtection()
    {

        tArg = new TabProtectionArg() { protection = new int() },
        tTabSheet = new TabSheetId() { id = moniker + "!Sheets!" + sheetKey }
    };
    // Получение информации о защите листа
    var result = somClient.GetTabProtection(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
