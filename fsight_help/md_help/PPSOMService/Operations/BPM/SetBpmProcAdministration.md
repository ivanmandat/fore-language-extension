# SetBpmProcAdministration: Операция

SetBpmProcAdministration: Операция
-


**


# SetBpmProcAdministration


## Синтаксис


SetBpmProcAdministrationResult SetBpmProcAdministration(OdId
 tObject, BpmProcAdministrationPageArg tPage, BpmProcAdministrationInfo
 tArg)


## Параметры


tObject. Моникёр
 компонента Бизнес-процессы.


tPage.
 Параметры выполнения операции.


tArg. Обновлённые настройки
 администрирования, которые необходимо применить.


## Описание


Операция SetBpmProcAdministration
 изменяет настройки администрирования для бизнес-процессов.


## Комментарии


Данная операция должна выполняться для компонента репозитория - Бизнесс-процессы
 (идентификатор: BPM_COMPONENT). Выполнение операции должно осуществляться
 пользователем, который является владельцем базы данных (схемы) репозитория
 или входит в группу Администраторы.


Для выполнения операции укажите в поле tObject
 моникёр компонента Бизнесс-процессы, а в поле tPage
 раздел настроек администрирования, которые необходимо получить. Моникёр
 может быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).


Результатом операции будут полученные настройки администрирования.


## Пример


Ниже приведён пример изменения настроек планировщика процессов. В запросе
 передаётся моникёр компонента Бизнес-процесс и устанавливаемые настройки
 серверного выполнения. В ответе возвращается признак успешного применения
 новых настроек.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetBpmProcAdministration xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>BPAEMDDLNENAGOAEACLJJOFEKIJHADNEIIMIFGGIJKIJCJOK!M!143520</id>  </tObject>
[![](../../minus.gif)](../../#)<tPage xmlns="****">
  <page>Sch</page>  </tPage>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<schInf>
  <clEx>false</clEx>[![](../../minus.gif)](../../#)<biInf>
  <servEx>false</servEx>  </biInf>
[![](../../minus.gif)](../../#)<srvExecInf>
  <taskCnt>5</taskCnt>  <taskIntrv>5</taskIntrv>  <deadF>true</deadF>  <deadInterv>15</deadInterv>  </srvExecInf>
  </schInf>
  </tArg>
  </SetBpmProcAdministration>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetBpmProcAdministrationResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <res xmlns="****">1</res>  </SetBpmProcAdministrationResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetBpmProcAdministration" :
  {
   "tObject" :
    {
     "id" : "BPAEMDDLNENAGOAEACLJJOFEKIJHADNEIIMIFGGIJKIJCJOK!M!143520"
    },
   "tPage" :
    {
     "page" : "Sch"
    },
   "tArg" :
    {
     "schInf" :
      {
       "clEx" : "false",
       "biInf" :
        {
         "servEx" : "false"
        },
       "srvExecInf" :
        {
         "taskCnt" : "5",
         "taskIntrv" : "5",
         "deadF" : "true",
         "deadInterv" : "15"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetBpmProcAdministrationResult" :
  {
   "res" : "1"
  }
}


public static SetBpmProcAdministrationResult SetBpmProcAdministration(MbId mb)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetBpmProcAdministration()
    {
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, "BPM_COMPONENT").k },
        tPage = new BpmProcAdministrationPageArg()
        {
            page = BpmProcAdministrationInfoPage.Sch
        },
        tArg = new BpmProcAdministrationInfo()
        {
            schInf = new BpmSchedulerInfo()
            {
                clEx = false,
                srvExecInf = new BpmSchedulerServExecInfo()
                {
                    taskCnt = 5,
                    taskIntrv = 5,
                    deadF = true,
                    deadInterv = 15
                },
                biInf = new BpmSchedulerBiServiceInfo()
            }
        }
    };
    // Изменение настроек планировщика
    var result = somClient.SetBpmProcAdministration(tSet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
