# GetMaintenanceMode: Операция

GetMaintenanceMode: Операция
-


**


# GetMaintenanceMode


## Синтаксис


MaintenanceModeState GetMaintenanceMode(MbId tMb)


## Параметры


tMb. Моникёр
 открытого соединения с репозиторием.


## Описание


Операция GetMaintenanceMode
 получает информацию о состоянии режима обслуживания в репозитории.


## Комментарии


Для выполнения операции укажите в поле tMb
 моникёр открытого соединения с репозиторием. Моникёр может быть получен
 при выполнении операции [OpenMetabase](OpenMetabase.htm).


В результате выполнения операции в поле active
 будет информация о состоянии режима обслуживания:


	- True. Режим обслуживания
	 активирован;


	- False. Режим обслуживания
	 не активирован.


## Пример


Ниже приведён пример получения состояния режима обслуживания в репозитории.
 В запросе передаётся моникёр открытого соединения с репозиторием. В ответе
 возвращается полученное состояние режима обслуживания.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetMaintenanceMode xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xmlns="****">
  <id>NEJOFNHNBNFGGOAEGABOLMDNHJDHEPEEHIDONAKOKJMGBMEK!M</id>  </tMb>
  </GetMaintenanceMode>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetMaintenanceModeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <active xmlns="****">1</active>  </GetMaintenanceModeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetMaintenanceMode" :
  {
   "tMb" :
    {
     "id" : "NEJOFNHNBNFGGOAEGABOLMDNHJDHEPEEHIDONAKOKJMGBMEK!M"
    }
  }
}

### JSON-ответ:


{
 "GetMaintenanceModeResult" :
  {
   "active" : "1"
  }
}


public static MaintenanceModeState GetMaintenanceMode(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetMaintenanceMode()
    {
        tMb = new MbId() { id = moniker }
    };
    // Получение информации о состоянии режима обслуживания
    var result = somClient.GetMaintenanceMode(tGet);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
