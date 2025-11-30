# SetEaxGridHeaderSettings: Операция

SetEaxGridHeaderSettings: Операция
-


**


# SetEaxGridHeaderSettings


## Синтаксис


bool SetEaxGridHeaderSettings(string mon, EaxGridHeaderSettings
 tArg)


## Параметры


mon. Моникёр
 заголовка таблицы, для которого необходимо получить настройки.


tArg. Настройки заголовка,
 которые необходимо установить.


## Описание


Операция SetEaxGridHeaderSettings
 изменяет настройки заголовка визуализатора Таблицы.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «DataArea!Views!ключ
 таблицы!Settings!тип заголовка», в качестве типа заголовка указывается:


	- TopSettings. Шапка таблицы.


	- LeftSettings. Боковик
	 таблицы.


Моникёр экземпляра регламентного отчёта может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm). В поле tArg
 задайте значения настроек, которые необходимо установить.


Результатом выполнения операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек боковика таблицы. В запросе
 передаётся моникёр боковика и устанавливаемые значения настроек. В ответе
 возвращается признак успешного изменения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetEaxGridHeaderSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PBOIFFGDEBBGOFOAEGDIGBMJIIJJDBBDEFLPHAOFEMBCDFFIK!DataArea!Views!1!Settings!LeftSettings</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <displaySortIcons>true</displaySortIcons>  <hierarchyIndent>2.5</hierarchyIndent>  <placement>1</placement>  </tArg>
  </SetEaxGridHeaderSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetEaxGridHeaderSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetEaxGridHeaderSettingsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetEaxGridHeaderSettings" :
  {
   "mon" : "FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PBOIFFGDEBBGOFOAEGDIGBMJIIJJDBBDEFLPHAOFEMBCDFFIK!DataArea!Views!1!Settings!LeftSettings",
   "tArg" :
    {
     "displaySortIcons" : "true",
     "hierarchyIndent" : "2.5",
     "placement" : "1"
    }
  }
}

### JSON-ответ:


{
 "SetEaxGridHeaderSettingsResult" : "1"
}


public static bool SetEaxGridHeaderSettings(string moniker, uint viewKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetEaxGridHeaderSettings()
    {
        tArg = new EaxGridHeaderSettings()
        {
            displaySortIcons = true,
            hierarchyIndent = 2.5,
            placement = 1
        },
        mon = moniker + "!DataArea!Views!" + viewKey.ToString() + "!Settings!LeftSettings"
    };
    // Изменение настроек заголовка
    var result = somClient.SetEaxGridHeaderSettings(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
