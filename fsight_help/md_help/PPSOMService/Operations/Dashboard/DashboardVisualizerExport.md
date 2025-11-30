# DashboardVisualizerExport: Операция

DashboardVisualizerExport: Операция
-


**


# DashboardVisualizerExport


## Синтаксис


Result DashboardVisualizerExport(string mon, DashboardVisualizerExportSettings
 tArg)


## Параметры


mon. Моникёр
 для работы с визуализаторами информационной панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция DashboardVisualizerExport
 экспортирует визуализатор во внешний файл.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Visualizers», а в поле tArg
 ключ экспортируемого визуализатора, формат экспорта и, при необходимости,
 графические настройки. Моникёр может быть получен при выполнении операции
 [OpenDashboard](OpenDashboard.htm).


При экспорте файл будет сохранён в хранилище BI-сервера. В результате
 операции в поле storeId будет
 доступен моникёр созданного файла. Данный моникёр может быть передан в
 операцию [GetBin](../../Additional/GetBin.htm) для загрузки
 файла на клиентский компьютер.


## Пример


Ниже приведён пример экспорта визуализатора во внешний файл. В запросе
 передаётся моникёр для работы с визуализаторами, ключ экспортируемого
 визуализатора и формат, в который осуществляется экспорт. В ответе возвращается
 моникёр полученного файла в хранилище BI-сервера.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardVisualizerExport xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Visualizers</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>1</k>  <format>xlsx</format>  </tArg>
  </DashboardVisualizerExport>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DashboardVisualizerExportResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <format xmlns="****">xlsx</format>[![](../../minus.gif)](../../#)<storeId xmlns="****">
  <id>NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Bin!0</id>  </storeId>
  <warnings xmlns="****" />
  </DashboardVisualizerExportResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardVisualizerExport" :
  {
   "mon" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Visualizers",
   "tArg" :
    {
     "k" : "1",
     "format" : "xlsx"
    }
  }
}

### JSON-ответ:


{
 "DashboardVisualizerExportResult" :
  {
   "format" : "xlsx",
   "storeId" :
    {
     "id" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Bin!0"
    },
   "warnings" : ""
  }
}


public static ExportData DashboardVisualizerExport(string moniker, uint visKey, string exportFormat)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tExp = new DashboardVisualizerExport()
    {
        tArg = new DashboardVisualizerExportSettings()
        {
            k = visKey,
            format = exportFormat
        },
        // Моникёр для работы с визуализаторами информационной панели
        mon = moniker + "!Visualizers"
    };
    // Экспорт визуализатора
    var result = somClient.DashboardVisualizerExport(tExp);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
