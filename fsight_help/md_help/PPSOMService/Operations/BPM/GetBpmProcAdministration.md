# GetBpmProcAdministration: Операция

GetBpmProcAdministration: Операция
-


**


# GetBpmProcAdministration


## Синтаксис


GetBpmProcAdministrationResult GetBpmProcAdministration(OdId
 tObject, BpmProcAdministrationPageArg tPage)


## Параметры


tObject. Моникёр
 компонента Бизнес-процессы.


tPage. Параметры выполнения
 операции.


## Описание


Операция GetBpmProcAdministration
 получает настройки администрирования для бизнес-процессов.


## Комментарии


Данная операция должна выполняться для компонента репозитория - Бизнесс-процессы
 (идентификатор: BPM_COMPONENT). Выполнение операции должно осуществляться
 пользователем, который является владельцем базы данных (схемы) репозитория
 и входит в группу Администраторы.


Для выполнения операции укажите в поле tObject
 моникёр компонента Бизнесс-процессы, а в поле tPage
 раздел настроек администрирования, которые необходимо получить. Моникёр
 может быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).


Результатом операции будут полученные настройки администрирования.


## Пример


Ниже приведён пример получения настроек работы планировщика бизнесс-процессев.
 В запросе передаётся моникёр компонента Бизнесс-процесс и тип получаемых
 настроек. В ответе возвращаются полученные настройки.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetBpmProcAdministration xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>ELHOHPDLNENAGOAEFOGOLNDDNBMLBBJEDIEOJBLHMOGKOKLK!M!143520</id>  </tObject>
[![](../../minus.gif)](../../#)<tPage xmlns="****">
  <page>Sch</page>  </tPage>
  </GetBpmProcAdministration>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetBpmProcAdministrationResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <res xmlns="****">1</res>[![](../../minus.gif)](../../#)<prAdmInf xmlns="****">
[![](../../minus.gif)](../../#)<schInf>
  <clEx>0</clEx>[![](../../minus.gif)](../../#)<biInf>
  <servEx>0</servEx>  </biInf>
[![](../../minus.gif)](../../#)<srvExecInf>
  <taskCnt>5</taskCnt>  <taskIntrv>5</taskIntrv>  <deadF>1</deadF>  <deadInterv>15</deadInterv>  </srvExecInf>
  </schInf>
  </prAdmInf>
  </GetBpmProcAdministrationResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetBpmProcAdministration" :
  {
   "tObject" :
    {
     "id" : "ELHOHPDLNENAGOAEFOGOLNDDNBMLBBJEDIEOJBLHMOGKOKLK!M!143520"
    },
   "tPage" :
    {
     "page" : "Sch"
    }
  }
}

### JSON-ответ:


{
 "GetBpmProcAdministrationResult" :
  {
   "res" : "1",
   "prAdmInf" :
    {
     "schInf" :
      {
       "clEx" : "0",
       "biInf" :
        {
         "servEx" : "0"
        },
       "srvExecInf" :
        {
         "taskCnt" : "5",
         "taskIntrv" : "5",
         "deadF" : "1",
         "deadInterv" : "15"
        }
      }
    }
  }
}


public static GetBpmProcAdministrationResult GetBpmProcAdministration(MbId mb)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetBpmProcAdministration()
    {
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, "BPM_COMPONENT").k },
        tPage = new BpmProcAdministrationPageArg()
        {
            page = BpmProcAdministrationInfoPage.Sch
        }
    };
    // Получение настроек планировщика
    var result = somClient.GetBpmProcAdministration(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
