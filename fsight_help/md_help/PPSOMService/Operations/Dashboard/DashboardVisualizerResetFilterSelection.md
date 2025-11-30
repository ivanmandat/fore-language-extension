# DashboardVisualizerResetFilterSelection: Операция

DashboardVisualizerResetFilterSelection: Операция
-


**


# DashboardVisualizerResetFilterSelection


## Синтаксис


bool DashboardVisualizerResetFilterSelection(string
 mon)


## Параметры


mon. Моникёр
 для работы с визуализатором информационной панели.


## Описание


Операция DashboardVisualizerResetFilterSelection
 сбрасывает выделение у визуализатора информационной панели.


## Комментарии


При выполнении операции будет сброшена фильтрующая отметка у визуализатора,
 для которого включена синхронизация. Для выполнения оперцаии укажите в
 поле mon моникёр открытого экземпляра
 информационной панели с постфиксом «!Slides!ключ
 слайда!Visualizers!ключ визуализатора».


Результатом выполнения операции будет логическое значение true,
 если сброс выделения у визуализатора завершился успешно.


## Пример


Ниже приведён пример сброса фильтрующей отметки у визуализатора информационной
 панели. В запросе передаётся моникёр визуализатора. В ответе возвращается
 признак успешного сброса отметки.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardVisualizerResetFilterSelection xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LMGDDNGEFDIFGOAEIGCANAEEEOBLIOHEBICOKPMHEJEIFPOB!M!S!PGLCIBOGEFDIFGOAEHHDBAHHNAGHEIMPENKHHCMJLGBPHJAEM!Slides!1!Visualizers!1</mon>  </DashboardVisualizerResetFilterSelection>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardVisualizerResetFilterSelectionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardVisualizerResetFilterSelectionResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardVisualizerResetFilterSelection" :
  {
   "mon" : "LMGDDNGEFDIFGOAEIGCANAEEEOBLIOHEBICOKPMHEJEIFPOB!M!S!PGLCIBOGEFDIFGOAEHHDBAHHNAGHEIMPENKHHCMJLGBPHJAEM!Slides!1!Visualizers!1"
  }
}

### JSON-ответ:


{
 "DashboardVisualizerResetFilterSelectionResult" : "1"
}


public static bool DashboardVisualizerResetFilterSelection(string moniker, uint slideKey, uint visKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tReset = new DashboardVisualizerResetFilterSelection()
    {
        // Моникёр для работы с визуализатором
        mon = moniker + "!Slides!" + slideKey + "!Visualizers!" + visKey
    };
    // Сброс выделения у визуализатора
    var result = somClient.DashboardVisualizerResetFilterSelection(tReset);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
