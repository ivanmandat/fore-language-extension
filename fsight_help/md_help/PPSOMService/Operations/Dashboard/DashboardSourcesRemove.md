# DashboardSourcesRemove: Операция

DashboardSourcesRemove: Операция
-


**


# DashboardSourcesRemove


## Синтаксис


bool DashboardSourcesRemove(string mon, ItKey tArg)


## Параметры


mon. Моникёр
 для работы с источниками данных информационной панели.


tArg. Ключ удаляемого источника
 данных в информационной панели.


## Описание


Операция DashboardSourcesRemove
 удаляет источник данных информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра информационной панели с постфиксом «!Sources»,
 а в поле tArg ключ удаляемого
 источника информационной панели. Моникёр может быть получен при выполнении
 операции [OpenDashboard](OpenDashboard.htm). Необходимый ключ
 источника можно получить, запросив информацию об источниках с помощью
 операции [GetDashboardMeta](GetDashboardMeta.htm).


Результатом операции будет признак успешного удаления источника данных.


## Пример


Ниже приведён пример удаления источника данных из информационной панели.
 В запросе передаётся моникёр для работы с источниками данных и ключ удаляемого
 источника. В ответе возвращается признак успешного удаления источника.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardSourcesRemove xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Sources</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>2</k>  </tArg>
  </DashboardSourcesRemove>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardSourcesRemoveResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardSourcesRemoveResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardSourcesRemove" :
  {
   "mon" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Sources",
   "tArg" :
    {
     "k" : "2"
    }
  }
}

### JSON-ответ:


{
 "DashboardSourcesRemoveResult" : "1"
}


public static bool DashboardSourcesRemove(string moniker, uint sourceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new DashboardSourcesRemove()
    {
        tArg = new ItKey()
        {
            k = sourceKey
        },
        // Моникёр для работы с источниками данных информационной панели
        mon = moniker + "!Sources"
    };
    // Удаление источника данных
    var result = somClient.DashboardSourcesRemove(tDel);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
