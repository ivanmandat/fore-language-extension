# GetPrxMetaJsPlugin: Операция

GetPrxMetaJsPlugin: Операция
-


**


# GetPrxMetaJsPlugin


## Синтаксис


PrxMetaJsPlugin GetPrxMetaJsPlugin(string mon, PrxMetaJsPlugin
 tArg)


## Параметры


mon. Моникёр
 для работы с листом регламентного отчёта.


tArg. Извлекаемые настройки
 листа.


## Описание


Операция GetPrxMetaJsPlugin
 получает настройки листа регламентного отчёта, который формируется с помощью
 JS-плагина.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа», а в поле tArg
 извлекаемые настройки листа. Моникёр экземпляра регламентного отчёта может
 быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).
 В поле tArg задайте пустые значения
 или значения по умолчанию для тех полей, значения которых необходимо получить.


## Пример


Ниже приведён пример получения настроек листа, который формируется с
 помощью JS-плагина. В запросе передаётся моникёр листа и пустые значения
 полей, для которых необходимо получить заданные настройки. В ответе приходит
 полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPrxMetaJsPlugin xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">GEMJCGFIGFENFOAEBGOFPOLHGGHEJKBELLCABGHLCFCOJLNN!M!S!PMNHKFJFIGFENFOAENKOBPFBMPBEAOCHEFJCELFBNBEJLDIGK!Sheets!2</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>-1</k>  <n />
  <pluginId />
  </tArg>
  </GetPrxMetaJsPlugin>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPrxMetaJsPluginResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">2</k>  <n xmlns="****">Лист с плагином</n>  <pluginId xmlns="****">PP.Ui.Prx.TestPrxPlugin</pluginId>  </GetPrxMetaJsPluginResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPrxMetaJsPlugin" :
  {
   "mon" : "GEMJCGFIGFENFOAEBGOFPOLHGGHEJKBELLCABGHLCFCOJLNN!M!S!PMNHKFJFIGFENFOAENKOBPFBMPBEAOCHEFJCELFBNBEJLDIGK!Sheets!2",
   "tArg" :
    {
     "k" : "-1",
     "n" : "",
     "pluginId" : ""
    }
  }
}

### JSON-ответ:


{
 "GetPrxMetaJsPluginResult" :
  {
   "k" : "2",
   "n" : "Лист с плагином",
   "pluginId" : "PP.Ui.Prx.TestPrxPlugin"
  }
}


public static PrxMetaJsPlugin GetPrxMetaJsPlugin(string moniker, string sheetKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetPrxMetaJsPlugin()
    {
        tArg = new PrxMetaJsPlugin()
        {
            pluginId = string.Empty,
            k = uint.MaxValue,
            n = string.Empty
        },
        mon = moniker + "!Sheets!" + sheetKey
    };
    // Получение настроек листа
    var result = somClient.GetPrxMetaJsPlugin(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
