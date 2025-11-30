# DashboardApplyRelations: Операция

DashboardApplyRelations: Операция
-


**


# DashboardApplyRelations


## Синтаксис


bool DashboardApplyRelations(string mon)


## Параметры


mon. Моникёр
 источника информационной панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция DashboardApplyRelations
 применяет изменения, внесённые в настройки отношений, используемых вычисляемыми
 фактами.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника». Моникёр
 может быть получен при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет логическое значение true,
 если сохранение изменений завершилось успешно.


## Пример


Ниже приведён пример применения изменений, внесённых в настройки отношений.
 В запросе передаётся моникёр источника информационной панели. В ответе
 возвращается признак успешного применение изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardApplyRelations xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1</mon>  </DashboardApplyRelations>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardApplyRelationsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardApplyRelationsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardApplyRelations" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1"
  }
}

### JSON-ответ:


{
 "DashboardApplyRelationsResult" : "1"
}


public static bool DashboardApplyRelations(string moniker, uint sourceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tApply = new DashboardApplyRelations()
    {
        // Моникёр для работы с отношениями
        mon = moniker + "!Sources!" + sourceKey
    };
    // Применение изменений в настройках отношений
    var result = somClient.DashboardApplyRelations(tApply);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
