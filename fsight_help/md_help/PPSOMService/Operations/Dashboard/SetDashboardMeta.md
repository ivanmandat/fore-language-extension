# SetDashboardMeta: Операция

SetDashboardMeta: Операция
-


**


# SetDashboardMeta


## Синтаксис


bool SetDashboardMeta(string mon, DashboardMetaArg
 tArg)


## Параметры


mon. Моникёр
 открытого экземпляра информационной панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDashboardMeta изменяет
 метаданные информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели, а в поле tArg.meta
 обновлённые метаданные. В текущей реализации операция используется для
 изменения визуальных настроек информационной панели. Моникёр может быть
 получен при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение метаданных завершилось успешно.


## Пример


Ниже приведён пример изменения визуальных настроек информационной панели.
 В запросе передаётся моникёр открытого экземпляра информационной панели
 и устанавливаемые визуальные настройки. В ответе возвращается признак
 успешного применения изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDashboardMeta xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<meta>
  <viewSettings>{"version":"2","isDataAndFieldsVisible":true,"isSettingsVisible":false,"zoom":0.75,"visibleArea":{"x":-200.17760487144778,"y":-93.49644790257105,"height":838,"width":771,"offsetX":560,"offsetY":48}}</viewSettings>  </meta>
  </tArg>
  </SetDashboardMeta>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetDashboardMetaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetDashboardMetaResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDashboardMeta" :
  {
   "mon" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI",
   "tArg" :
    {
     "meta" :
      {
       "viewSettings" : "{"version":"2","isDataAndFieldsVisible":true,"isSettingsVisible":false,"zoom":0.75,"visibleArea":{"x":-200.17760487144778,"y":-93.49644790257105,"height":838,"width":771,"offsetX":560,"offsetY":48}}"
      }
    }
  }
}

### JSON-ответ:


{
 "SetDashboardMetaResult" : "1"
}


public static bool SetDashboardMeta(string moniker, string newViewSettings)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDashboardMeta()
    {
        tArg = new DashboardMetaArg()
        {
            meta = new DashboardMetaData()
            {
                viewSettings = newViewSettings
            }
        },
        // Моникёр открытого экземпляра информационной панели
        mon = moniker
    };
    // Изменение информации об информационной панели
    var result = somClient.SetDashboardMeta(tSet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
