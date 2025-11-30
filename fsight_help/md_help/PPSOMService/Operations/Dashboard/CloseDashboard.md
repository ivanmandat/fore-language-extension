# CloseDashboard: Операция

CloseDashboard: Операция
-


**


# CloseDashboard


## Синтаксис


bool CloseDashboard(string mon)


## Параметры


mon. Моникёр
 открытого экземпляра информационной панели.


## Описание


Операция CloseDashboard закрывает
 экземпляр информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели. Моникёр может быть
 получен при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет логическое значение true,
 если закрытие экземпляра информационной панели завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра информационной панели. В запросе
 передаётся моникёр открытого экземпляра информационной панели. В ответе
 возвращается признак успешного закрытия.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseDashboard xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI</mon>  </CloseDashboard>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseDashboardResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseDashboardResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseDashboard" :
  {
   "mon" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI"
  }
}

### JSON-ответ:


{
 "CloseDashboardResult" : "1"
}


public static bool CloseDashboard(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операций
    var tClose = new CloseDashboard()
    {
        mon = moniker
    };
    // Закрытие экземпляра информационной панели
    var b = somClient.CloseDashboard(tClose);
    return b;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
