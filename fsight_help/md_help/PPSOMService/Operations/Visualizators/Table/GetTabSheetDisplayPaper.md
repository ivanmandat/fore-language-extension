# GetTabSheetDisplayPaper: Операция

GetTabSheetDisplayPaper: Операция
-


**


# GetTabSheetDisplayPaper


## Синтаксис


TabSheetDisplayPaperResult GetTabSheetDisplayPaper(TabSheetId
 tTabSheet)


## Параметры


tTabSheet. Моникёр
 листа, для которого выполнялась операция.


## Описание


Операция GetTabSheetDisplayPaper
 получает настройку отображения границ страниц.


## Комментарии


Для выполнения операции укажите в поле tTabSheet
 моникёр листа. Моникёр может быть сформирован на основании моникёра открытого
 экземпляра объекта, с которым осуществляется работа.


Результатом выполнения операции будет настройка отображения границ страниц.


## Пример


Ниже приведён пример получения настройки отображения границ страниц.
 В запросе передаётся моникёр листа, который разбивается на страницы. В
 ответе возвращается значение настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetTabSheetDisplayPaper xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTabSheet xmlns="****">
  <id>JONPGPOBGHLNFOAEKLBMKJOPCDGDDHPEFJNDMKCLCALFLGLI!M!S!PNCJKHHPBGHLNFOAECCLLPOGCOBIIAJFEAIMHNHBJIBCIKHKO!Sheets!1</id>  </tTabSheet>
  </GetTabSheetDisplayPaper>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetTabSheetDisplayPaperResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <dp xmlns="****">0</dp>  </GetTabSheetDisplayPaperResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTabSheetDisplayPaper" :
  {
   "tTabSheet" :
    {
     "id" : "JONPGPOBGHLNFOAEKLBMKJOPCDGDDHPEFJNDMKCLCALFLGLI!M!S!PNCJKHHPBGHLNFOAECCLLPOGCOBIIAJFEAIMHNHBJIBCIKHKO!Sheets!1"
    }
  }
}

### JSON-ответ:


{
 "GetTabSheetDisplayPaperResult" :
  {
   "dp" : "0"
  }
}


public static TabSheetDisplayPaperResult GetTabSheetDisplayPaper(string moniker, string sheetKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetTabSheetDisplayPaper()
    {
        tTabSheet = new TabSheetId() { id = moniker + "!Sheets!" + sheetKey }
    };
    // Получение настройки отображения границ страниц
    var result = somClient.GetTabSheetDisplayPaper(tGet);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
