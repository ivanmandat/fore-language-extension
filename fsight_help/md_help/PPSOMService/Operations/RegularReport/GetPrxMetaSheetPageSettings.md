# GetPrxMetaSheetPageSettings: Операция

GetPrxMetaSheetPageSettings: Операция
-


**


# GetPrxMetaSheetPageSettings


## Синтаксис


PrxMetaSheetPageSettings GetPrxMetaSheetPageSettings(string
 mon, PrxMetaSheetPageSettings settings)


## Параметры


mon. Моникёр
 для работы с листом регламентного отчёта.


settings. Извлекаемые настройки
 печати.


## Описание


Операция GetPrxMetaSheetPageSettings
 получает настройки печати, заданные для листа регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа», а в поле settings
 извлекаемые параметры печати. Моникёр экземпляра регламентного отчёта
 может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


В поле settings задайте пустые
 значения или значения по умолчанию для тех полей, значения которых необходимо
 получить. Для коллекций укажите один элемент. Для получения информации
 о каком-либо конкретном элементе регламентного отчёта укажите его ключ
 в метаданных. При указании в качестве ключа значения «-1» будет получена
 информация обо всех элементах данного типа.


## Пример


Ниже приведён пример получения настроек печати листа регламентного отчёта.
 В запросе передаётся моникёр листа и пустые значения полей, для которых
 необходимо получить заданные настройки. В ответе приходит полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPrxMetaSheetPageSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1</mon>[![](../../minus.gif)](../../#)<settings xmlns="****">
  <useSheetPageCount>false</useSheetPageCount>  <startPageNumber>0</startPageNumber>[![](../../minus.gif)](../../#)<tabPageSettings>
[![](../../minus.gif)](../../#)<scale>
  <value>0</value>  <fitToPages>false</fitToPages>  <pageWidth>0</pageWidth>  <pageHeight>0</pageHeight>  </scale>
  <blackAndWhite>false</blackAndWhite>[![](../../minus.gif)](../../#)<gxPageSettings>
[![](../../minus.gif)](../../#)<paperSize>
  <width>0</width>  <height>0</height>  <units>Mm</units>  </paperSize>
  <paperOrientation>Portrait</paperOrientation>  <paperFormat>Custom</paperFormat>[![](../../minus.gif)](../../#)<margins>
  <left>0</left>  <top>0</top>  <right>0</right>  <bottom>0</bottom>  <units>Mm</units>  </margins>
  </gxPageSettings>
  </tabPageSettings>
  </settings>
  </GetPrxMetaSheetPageSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPrxMetaSheetPageSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <useSheetPageCount xmlns="****">0</useSheetPageCount>  <startPageNumber xmlns="****">0</startPageNumber>[![](../../minus.gif)](../../#)<tabPageSettings xmlns="****">
[![](../../minus.gif)](../../#)<scale>
  <value>1</value>  <fitToPages>0</fitToPages>  <pageWidth>-1</pageWidth>  <pageHeight>-1</pageHeight>  </scale>
  <blackAndWhite>0</blackAndWhite>[![](../../minus.gif)](../../#)<gxPageSettings>
[![](../../minus.gif)](../../#)<paperSize>
  <width>210000</width>  <height>297000</height>  <units>Mkm</units>  </paperSize>
  <paperOrientation>Portrait</paperOrientation>  <paperFormat>A4</paperFormat>[![](../../minus.gif)](../../#)<margins>
  <left>17</left>  <top>19</top>  <right>17</right>  <bottom>19</bottom>  <units>Mm</units>  </margins>
  </gxPageSettings>
  </tabPageSettings>
  </GetPrxMetaSheetPageSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPrxMetaSheetPageSettings" :
  {
   "mon" : "S1!M!S!P1!Sheets!1",
   "settings" :
    {
     "useSheetPageCount" : "false",
     "startPageNumber" : "0",
     "tabPageSettings" :
      {
       "scale" :
        {
         "value" : "0",
         "fitToPages" : "false",
         "pageWidth" : "0",
         "pageHeight" : "0"
        },
       "blackAndWhite" : "false",
       "gxPageSettings" :
        {
         "paperSize" :
          {
           "width" : "0",
           "height" : "0",
           "units" : "Mm"
          },
         "paperOrientation" : "Portrait",
         "paperFormat" : "Custom",
         "margins" :
          {
           "left" : "0",
           "top" : "0",
           "right" : "0",
           "bottom" : "0",
           "units" : "Mm"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetPrxMetaSheetPageSettingsResult" :
  {
   "useSheetPageCount" : "0",
   "startPageNumber" : "0",
   "tabPageSettings" :
    {
     "scale" :
      {
       "value" : "1",
       "fitToPages" : "0",
       "pageWidth" : "-1",
       "pageHeight" : "-1"
      },
     "blackAndWhite" : "0",
     "gxPageSettings" :
      {
       "paperSize" :
        {
         "width" : "210000",
         "height" : "297000",
         "units" : "Mkm"
        },
       "paperOrientation" : "Portrait",
       "paperFormat" : "A4",
       "margins" :
        {
         "left" : "17",
         "top" : "19",
         "right" : "17",
         "bottom" : "19",
         "units" : "Mm"
        }
      }
    }
  }
}


public static PrxMetaSheetPageSettings GetSheetSettings(string moniker, uint sheetKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetPrxMetaSheetPageSettings()
    {
        settings = new PrxMetaSheetPageSettings()
        {
            startPageNumber = new long(),
            useSheetPageCount = new bool(),
            tabPageSettings = new TabMetaPageSettings()
            {
                blackAndWhite = new bool(),
                gxPageSettings = new GxMetaPageSettings()
                {
                    margins = new GxPageMargins(),
                    paperFormat = new GxPaperFormat(),
                    paperOrientation = new GxPaperOrientation(),
                    paperSize = new SizeU()
                },
                scale = new TabPrintScale()
                {
                    fitToPages = new bool(),
                    pageHeight = new long(),
                    pageWidth = new long(),
                    value = new double()
                }
            }
        },
        mon = moniker + "!Sheets!" + sheetKey.ToString()
    };
    //Получение настроек печати страницы
    var result = somClient.GetPrxMetaSheetPageSettings(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
