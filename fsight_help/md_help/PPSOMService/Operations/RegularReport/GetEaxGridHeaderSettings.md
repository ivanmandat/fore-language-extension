# GetEaxGridHeaderSettings: Операция

GetEaxGridHeaderSettings: Операция
-


**


# GetEaxGridHeaderSettings


## Синтаксис


EaxGridHeaderSettings GetEaxGridHeaderSettings(string
 mon, EaxGridHeaderSettings tArg)


## Параметры


mon. Моникёр
 заголовка таблицы, для которого необходимо получить настройки.


tArg. Настройки заголовка,
 которые необходимо получить.


## Описание


Операция GetEaxGridHeaderSettings
 получает настройки заголовка визуализатора Таблицы.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «DataArea!Views!ключ
 таблицы!Settings!тип заголовка», в качестве типа заголовка указывается:


	- TopSettings. Шапка таблицы.


	- LeftSettings. Боковик
	 таблицы.


Моникёр экземпляра регламентного отчёта может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm). В поле tArg
 задайте пустые значения или значения по умолчанию для тех полей, значения
 которых необходимо получить.


Результатом операции будут полученные настройки заголовка таблицы.


## Пример


Ниже приведён пример получения настроек боковика таблицы. В запросе
 передаётся моникёр боковика и список получаемых настроек. В ответе возвращаются
 полученные значения настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetEaxGridHeaderSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PBOIFFGDEBBGOFOAEGDIGBMJIIJJDBBDEFLPHAOFEMBCDFFIK!DataArea!Views!1!Settings!LeftSettings</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <displaySortIcons>false</displaySortIcons>  <hierarchyIndent>0</hierarchyIndent>  <placement>0</placement>  </tArg>
  </GetEaxGridHeaderSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetEaxGridHeaderSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <displaySortIcons xmlns="****">0</displaySortIcons>  <hierarchyIndent xmlns="****">-1</hierarchyIndent>  <placement xmlns="****">2</placement>  </GetEaxGridHeaderSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetEaxGridHeaderSettings" :
  {
   "mon" : "FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PBOIFFGDEBBGOFOAEGDIGBMJIIJJDBBDEFLPHAOFEMBCDFFIK!DataArea!Views!1!Settings!LeftSettings",
   "tArg" :
    {
     "displaySortIcons" : "false",
     "hierarchyIndent" : "0",
     "placement" : "0"
    }
  }
}

### JSON-ответ:


{
 "GetEaxGridHeaderSettingsResult" :
  {
   "displaySortIcons" : "0",
   "hierarchyIndent" : "-1",
   "placement" : "2"
  }
}


public static EaxGridHeaderSettings GetEaxGridHeaderSettings(string moniker, uint viewKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetEaxGridHeaderSettings()
    {
        tArg = new EaxGridHeaderSettings()
        {
            displaySortIcons = new bool(),
            hierarchyIndent = new double(),
            placement = new int()
        },
        mon = moniker + "!DataArea!Views!" + viewKey.ToString() + "!Settings!LeftSettings"
    };
    // Получение настроек заголовка
    var result = somClient.GetEaxGridHeaderSettings(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
