# SetPrxMetaSheetPageSettings: Операция

SetPrxMetaSheetPageSettings: Операция
-


**


# SetPrxMetaSheetPageSettings


## Синтаксис


bool SetPrxMetaSheetPageSettings(string mon, PrxMetaSheetPageSettings
 settings)


## Параметры


mon. Моникёр
 для работы с листом регламентного отчёта.


settings. Изменяемые настройки
 печати.


## Описание


Операция SetPrxMetaSheetPageSettings
 изменяет настройки печати листа регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа», а в поле settings
 изменяемые параметры печати. Моникёр экземпляра регламентного отчёта может
 быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек печати листа регламентного отчёта.
 В запросе передаётся моникёр листа и изменяемые настройки печати. В ответе
 приходит признак удачного применения настроек.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPrxMetaSheetPageSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1</mon>[![](../../minus.gif)](../../#)<settings xmlns="****">
  <useSheetPageCount>true</useSheetPageCount>  <startPageNumber>2</startPageNumber>[![](../../minus.gif)](../../#)<tabPageSettings>
  <blackAndWhite>false</blackAndWhite>[![](../../minus.gif)](../../#)<gxPageSettings>
  <paperOrientation>Landscape</paperOrientation>  <paperFormat>A3</paperFormat>[![](../../minus.gif)](../../#)<margins>
  <left>20</left>  <top>10</top>  <right>10</right>  <bottom>10</bottom>  <units>Mm</units>  </margins>
  </gxPageSettings>
  </tabPageSettings>
  </settings>
  </SetPrxMetaSheetPageSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPrxMetaSheetPageSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPrxMetaSheetPageSettingsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPrxMetaSheetPageSettings" :
  {
   "mon" : "S1!M!S!P1!Sheets!1",
   "settings" :
    {
     "useSheetPageCount" : "true",
     "startPageNumber" : "2",
     "tabPageSettings" :
      {
       "blackAndWhite" : "false",
       "gxPageSettings" :
        {
         "paperOrientation" : "Landscape",
         "paperFormat" : "A3",
         "margins" :
          {
           "left" : "20",
           "top" : "10",
           "right" : "10",
           "bottom" : "10",
           "units" : "Mm"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetPrxMetaSheetPageSettingsResult" : "1"
}


public static bool SetSheetSettings(string moniker, uint sheetKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetPrxMetaSheetPageSettings()
    {
        settings = new PrxMetaSheetPageSettings()
        {
            startPageNumber = 2,
            useSheetPageCount = true,
            tabPageSettings = new TabMetaPageSettings()
            {
                blackAndWhite = false,
                gxPageSettings = new GxMetaPageSettings()
                {
                    margins = new GxPageMargins()
                    {
                        bottom = 10,
                        left = 20,
                        right = 10,
                        top = 10
                    },
                    paperFormat = GxPaperFormat.A3,
                    paperOrientation = GxPaperOrientation.Landscape,
                }
            }
        },
        mon = moniker + "!Sheets!" + sheetKey.ToString()
    };
    //Изменение настроек печати страницы
    var result = somClient.SetPrxMetaSheetPageSettings(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
