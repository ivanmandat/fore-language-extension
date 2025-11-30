# DashboardSlideResetFilterSelection: Операция

DashboardSlideResetFilterSelection: Операция
-


**


# DashboardSlideResetFilterSelection


## Синтаксис


bool DashboardSlideResetFilterSelection(string mon)


## Параметры


mon. Моникёр
 для работы со слайдом информационной панели.


## Описание


Операция DashboardSlideResetFilterSelection
 сбрасывает выделение, в соответствии с которым синхронизируются визуализаторы
 текущего и других слайдов.


## Комментарии


При выполнении операции будет сброшена фильтрующая отметка у визуализаторов,
 для которых включена синхронизация. Для выполнения оперцаии укажите в
 поле mon моникёр открытого экземпляра
 информационной панели с постфиксом «!Slides!ключ
 слайда».


Результатом выполнения операции будет логическое значение true,
 если сброс выделения у визуализаторов завершился успешно.


## Пример


Ниже приведён пример сброса фильтрующей отметки у визуализаторов слайда
 информационной панели. В запросе передаётся моникёр слайда. В ответе возвращается
 признак успешного сброса отметки.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardSlideResetFilterSelection xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LMGDDNGEFDIFGOAEIGCANAEEEOBLIOHEBICOKPMHEJEIFPOB!M!S!PGLCIBOGEFDIFGOAEHHDBAHHNAGHEIMPENKHHCMJLGBPHJAEM!Slides!1</mon>  </DashboardSlideResetFilterSelection>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardSlideResetFilterSelectionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardSlideResetFilterSelectionResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardSlideResetFilterSelection" :
  {
   "mon" : "LMGDDNGEFDIFGOAEIGCANAEEEOBLIOHEBICOKPMHEJEIFPOB!M!S!PGLCIBOGEFDIFGOAEHHDBAHHNAGHEIMPENKHHCMJLGBPHJAEM!Slides!1"
  }
}

### JSON-ответ:


{
 "DashboardSlideResetFilterSelectionResult" : "1"
}


public static bool DashboardSlideResetFilterSelection(string moniker, uint slideKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tReset = new DashboardSlideResetFilterSelection()
    {
        // Моникёр для работы с визуализатором
        mon = moniker + "!Slides!" + slideKey
    };
    // Сброс выделения у визуализаторов слайда
    var result = somClient.DashboardSlideResetFilterSelection(tReset);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
