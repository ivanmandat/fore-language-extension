# SetTabSheetDisplayPaper: Операция

SetTabSheetDisplayPaper: Операция
-


**


# SetTabSheetDisplayPaper


## Синтаксис


bool SetTabSheetDisplayPaper(TabSheetId tTabSheet,
 TabSheetDisplayPaperArg tArg)


## Параметры


mon. Моникёр
 листа, для которого выполнялась операция.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetTabSheetDisplayPaper
 изменяет настройку отображения границ страниц.


## Комментарии


Для выполнения операции укажите в поле tTabSheet
 моникёр листа, а в поле tArg
 устанавливаемое значение настройки. Моникёр может быть сформирован на
 основании моникёра открытого экземпляра объекта, с которым осуществляется
 работа.


Результатом выполнения операции будет логическое значение true,
 если изменение настройки завершилось успешно.


## Пример


Ниже приведён пример изменения настройки отображения границ страниц.
 В запросе передаётся моникёр листа, который разбивается на страницы, и
 устанавливаемое значение настройки. В ответе возвращается признак успешного
 изменения настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetTabSheetDisplayPaper xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTabSheet xmlns="****">
  <id>JONPGPOBGHLNFOAEKLBMKJOPCDGDDHPEFJNDMKCLCALFLGLI!M!S!PNCJKHHPBGHLNFOAECCLLPOGCOBIIAJFEAIMHNHBJIBCIKHKO!Sheets!1</id>  </tTabSheet>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <dp>true</dp>  </tArg>
  </SetTabSheetDisplayPaper>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <SetTabSheetDisplayPaperResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetTabSheetDisplayPaperResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetTabSheetDisplayPaper" :
  {
   "tTabSheet" :
    {
     "id" : "JONPGPOBGHLNFOAEKLBMKJOPCDGDDHPEFJNDMKCLCALFLGLI!M!S!PNCJKHHPBGHLNFOAECCLLPOGCOBIIAJFEAIMHNHBJIBCIKHKO!Sheets!1"
    },
   "tArg" :
    {
     "dp" : "true"
    }
  }
}

### JSON-ответ:


{
 "SetTabSheetDisplayPaperResult" : "1"
}


public static bool SetTabSheetDisplayPaper(string moniker, string sheetKey, bool DisplayPaperOut)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetTabSheetDisplayPaper()
    {
        tArg = new TabSheetDisplayPaperArg()
        {
            dp = DisplayPaperOut
        },
        tTabSheet = new TabSheetId() { id = moniker + "!Sheets!" + sheetKey }
    };
    // Изменение настройки отображения границ страниц
    var result = somClient.SetTabSheetDisplayPaper(tSet);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
