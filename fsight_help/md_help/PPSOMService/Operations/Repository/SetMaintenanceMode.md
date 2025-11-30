# SetMaintenanceMode: Операция

SetMaintenanceMode: Операция
-


**


# SetMaintenanceMode


## Синтаксис


MaintenanceModeState SetMaintenanceMode(MbId tMb,
 MaintenanceModeState tArg)


## Параметры


tMb. Моникёр
 открытого соединения с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetMaintenanceMode
 изменяет состояние режима обслуживания в репозитории.


## Комментарии


Для выполнения операции укажите в поле tMb
 моникёр открытого соединения с репозиторием, а в поле tArg.active
 устанавливаемый режим обслуживания:


	- True. Режим обслуживания
	 активирован;


	- False. Режим обслуживания
	 не активирован.


Моникёр может быть получен при выполнении операции [OpenMetabase](OpenMetabase.htm).


Результатом выполнения операции будет информация о состоянии режима
 обслуживания: активирован или не активирован.


## Пример


Ниже приведён пример включения режима обслуживания в репозитории. В
 запросе передаётся моникёр открытого соединения с репозиторием и признак
 необходимости включить режим обслуживания. В ответе возвращается информация
 о состоянии режима обслуживания.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetMaintenanceMode xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xmlns="****">
  <id>NEJOFNHNBNFGGOAEGABOLMDNHJDHEPEEHIDONAKOKJMGBMEK!M</id>  </tMb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <active>true</active>  </tArg>
  </SetMaintenanceMode>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetMaintenanceModeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <active xmlns="****">1</active>  </SetMaintenanceModeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetMaintenanceMode" :
  {
   "tMb" :
    {
     "id" : "NEJOFNHNBNFGGOAEGABOLMDNHJDHEPEEHIDONAKOKJMGBMEK!M"
    },
   "tArg" :
    {
     "active" : "true"
    }
  }
}

### JSON-ответ:


{
 "SetMaintenanceModeResult" :
  {
   "active" : "1"
  }
}


public static MaintenanceModeState SetMaintenanceMode(string moniker, bool maintenanceMode)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetMaintenanceMode()
    {
        tArg = new MaintenanceModeState() { active = maintenanceMode },
        tMb = new MbId() { id = moniker }
    };
    // Изменение состояния режима обслуживания
    var result = somClient.SetMaintenanceMode(tSet);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
