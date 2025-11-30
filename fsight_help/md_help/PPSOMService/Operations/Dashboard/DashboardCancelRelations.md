# DashboardCancelRelations: Операция

DashboardCancelRelations: Операция
-


**


# DashboardCancelRelations


## Синтаксис


bool DashboardCancelRelations(string mon)


## Параметры


mon. Моникёр
 источника информационной панели.


## Описание


Операция DashboardCancelRelations
 отменяет изменения, внесённые в настройки отношений, используемых вычисляемыми
 фактами.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника». Моникёр
 может быть получен при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет логическое значение true,
 если отмена изменений завершилось успешно.


## Пример


Ниже приведён пример отмены изменений, внесённых в настройки отношений.
 В запросе передаётся моникёр источника информационной панели. В ответе
 возвращается признак успешной отмены изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardCancelRelations xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1</mon>  </DashboardCancelRelations>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardCancelRelationsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardCancelRelationsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardCancelRelations" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1"
  }
}

### JSON-ответ:


{
 "DashboardCancelRelationsResult" : "1"
}


public static bool DashboardCancelRelations(string moniker, uint sourceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tCancel = new DashboardCancelRelations()
    {
        // Моникёр для работы с отношениями
        mon = moniker + "!Sources!" + sourceKey
    };
    // Отмена изменений в настройках отношений
    var result = somClient.DashboardCancelRelations(tCancel);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
