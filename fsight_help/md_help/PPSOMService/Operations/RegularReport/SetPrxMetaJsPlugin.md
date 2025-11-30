# SetPrxMetaJsPlugin: Операция

SetPrxMetaJsPlugin: Операция
-


**


# SetPrxMetaJsPlugin


## Синтаксис


bool SetPrxMetaJsPlugin(string mon, PrxMetaJsPlugin
 tArg)


## Параметры


mon. Моникёр
 для работы с листом регламентного отчёта.


tArg. Устанавливаемые настройки
 листа.


## Описание


Операция SetPrxMetaJsPlugin
 изменяет настройки листа регламентного отчёта, который формируется с помощью
 JS-плагина.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа», а в поле tArg
 изменяемые настройки листа. Моникёр экземпляра регламентного отчёта может
 быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек листа, который формируется с
 помощью JS-плагина. В запросе передаётся моникёр листа и идентификатор
 JS-плагина, который необходимо установить. В ответе приходит признак удачного
 применения настроек.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPrxMetaJsPlugin xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">GEMJCGFIGFENFOAEBGOFPOLHGGHEJKBELLCABGHLCFCOJLNN!M!S!PMNHKFJFIGFENFOAENKOBPFBMPBEAOCHEFJCELFBNBEJLDIGK!Sheets!2</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>0</k>  <pluginId>PP.Ui.Prx.PrxPlugin</pluginId>  </tArg>
  </SetPrxMetaJsPlugin>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPrxMetaJsPluginResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPrxMetaJsPluginResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPrxMetaJsPlugin" :
  {
   "mon" : "GEMJCGFIGFENFOAEBGOFPOLHGGHEJKBELLCABGHLCFCOJLNN!M!S!PMNHKFJFIGFENFOAENKOBPFBMPBEAOCHEFJCELFBNBEJLDIGK!Sheets!2",
   "tArg" :
    {
     "k" : "0",
     "pluginId" : "PP.Ui.Prx.PrxPlugin"
    }
  }
}

### JSON-ответ:


{
 "SetPrxMetaJsPluginResult" : "1"
}


public static bool SetPrxMetaJsPlugin(string moniker, string sheetKey, string plugin)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetPrxMetaJsPlugin()
    {
        tArg = new PrxMetaJsPlugin()
        {
            pluginId = plugin
        },
        mon = moniker + "!Sheets!" + sheetKey
    };
    // Изменение настроек листа
    var result = somClient.SetPrxMetaJsPlugin(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
