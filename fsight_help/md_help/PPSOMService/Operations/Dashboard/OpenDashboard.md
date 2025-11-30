# OpenDashboard: Операция

OpenDashboard: Операция
-


**


# OpenDashboard


## Синтаксис


DashboardMetaResult Operation(OdId tObject, OpenDashboardMetaArg
 tArg)


## Параметры


tObject. Моникёр
 объекта репозитория, являющегося информационной панелью.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenDashboard открывает
 информационную панель.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр объекта, являющегося информационной панелью, а в поле tArg
 параметры открытия. В поле tArg.args
 указывается режим открытия информационной панели. В поле tArg.meta
 задайте пустые значения или значения по умолчанию для тех полей с метаданными,
 значения которых необходимо получить. Результатом работы операции будет
 моникёр открытого экземпляра информационной панели, а также полученные
 метаданные, если были определены соответствующие поля.


Дальнейшая работа с информационной панелью осуществляется с помощью
 операций [GetDashboardMeta](GetDashboardMeta.htm), [SetDashboardMeta](SetDashboardMeta.htm),
 а также ряда специфических операций, предназначенных для выполнения определённых
 действий. Для закрытия открытого экземпляра информационной панели используйте
 операцию [CloseDashboard](CloseDashboard.htm).


## Пример


Ниже приведён пример открытия экземпляра информационной панели на редактирование.
 В запросе передаётся моникёр объекта репозитория, являющегося информационной
 панелью. В ответе возвращается моникёр открытого экземпляра информационной
 панели. Какие-либо дополнительные метаданные не извлекаются.


В примере C# используется функция FindObjectById, код которой приведён
 в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenDashboard xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!358093</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenDashboard>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenDashboardResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI</id>  </id>
  </OpenDashboardResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenDashboard" :
  {
   "tObject" :
    {
     "id" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!358093"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenDashboardResult" :
  {
   "id" :
    {
     "id" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI"
    }
  }
}


public static DashboardMetaResult OpenDashboard(MbId mb, string dashboardId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenDashboard()
    {
        tArg = new OpenDashboardMetaArg()
        {
            args = new DashboardMetaOpenArgs()
            {
                openForEdit = true
            }
        },
        // Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, dashboardId).k }
    };
    // Открытие информационной панели
    var result = somClient.OpenDashboard(tOpen);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
