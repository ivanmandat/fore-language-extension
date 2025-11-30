# GetScheduler: Операция

GetScheduler: Операция
-


**


# GetScheduler


## Синтаксис


GetSchedulerResult GetScheduler(SchedulerId tScheduler,
 GetSchedulerArg tArg)


## Параметры


tScheduler. Моникёр экземпляра
 контейнера запланированных задач.


tArg. Параметры извлечения
 метаданных.


## Описание


Операция GetScheduler извлекает
 метаданные контейнера запланированных задач.


## Комментарии


Операция позволяет получить информацию о задачах, которые созданы в
 контейнере, и информацию о состоянии планировщика задач. Для выполнения
 операции необходимо в параметре tScheduler
 указать моникёр открытого экземпляра контейнера запланированных задач,
 а в параметре tArg указать параметры
 извлечения. Моникёр может быть получен при выполнении операции [OpenScheduler](OpenScheduler.htm). Результатом работы операции
 будут запрошенные метаданные.


## Пример


Ниже приведён пример получения общих и специфических настроек задач,
 расположенных в контейнере запланированных задач. В запросе передаётся
 моникёр открытого экземпляра контейнера задач и шаблон, указывающий необходимость
 получить настройки задач. В ответе приходит полученная информация.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetScheduler xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tScheduler xmlns="****">
  <id>S1!M!6445</id>  </tScheduler>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <all>true</all>[![](../../minus.gif)](../../#)<task>
  <properties>true</properties>  <settings>true</settings>  </task>
  </pattern>
  </tArg>
  </GetScheduler>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetSchedulerResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!6445</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>TASKS_CONTAINTER</i>  <n>Контейнер запланированных задач</n>  <k>6445</k>  <c>5378</c>  <p>6444</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
[![](../../minus.gif)](../../#)<tasks>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>6449</k>  <id>RUN_MODULE</id>  <n>Выполнение модуля</n>  <vis>1</vis>  <type>ExecuteSub</type>  <ds />
[![](../../minus.gif)](../../#)<properties>
[![](../../minus.gif)](../../#)<period>
  <type>Daily</type>  <startDateTime>1999-12-31T23:00:00.000</startDateTime>  <stopDateTime>2009-12-31T23:00:00.000</stopDateTime>  <everyDays>1</everyDays>  </period>
  <active>0</active>  <queueing>0</queueing>  <userTag>ADMIN</userTag>  <threadClass>1</threadClass>[![](../../minus.gif)](../../#)<publishing>
  <SendMail>0</SendMail>  <mailAddress />
  <mailSubject>&[TASK_RESULT] - &[TASK_FINISH] : &[TASK_NAME]</mailSubject>  <mailBody>&[TASK_RESULT] - &[TASK_FINISH] : &[TASK_NAME]</mailBody>  <ftpAddress />
  <appendAttachment>1</appendAttachment>  <dynamicMailListMacro />
  <dynamicMailListModule />
  <UseDynamicMailList>0</UseDynamicMailList>  </publishing>
  <paramValues />
  <eventId />
  </properties>
[![](../../minus.gif)](../../#)<settings>
[![](../../minus.gif)](../../#)<fore>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>TASK_MODULE</i>  <n>Модуль</n>  <k>6447</k>  <c>1537</c>  <p>6444</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </obDesc>
  <subName>Run</subName>  </fore>
  </settings>
  </it>
  </its>
  </tasks>
  </meta>
  </GetSchedulerResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetScheduler" :
  {
   "tScheduler" :
    {
     "id" : "S1!M!6445"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "all" : "true",
       "task" :
        {
         "properties" : "true",
         "settings" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetSchedulerResult" :
  {
   "id" :
    {
     "id" : "S1!M!6445"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "0",
         "@hf" : "0",
         "i" : "TASKS_CONTAINTER",
         "n" : "Контейнер запланированных задач",
         "k" : "6445",
         "c" : "5378",
         "p" : "6444",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "tasks" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "6449",
             "id" : "RUN_MODULE",
             "n" : "Выполнение модуля",
             "vis" : "1",
             "type" : "ExecuteSub",
             "ds" : "",
             "properties" :
              {
               "period" :
                {
                 "type" : "Daily",
                 "startDateTime" : "1999-12-31T23:00:00.000",
                 "stopDateTime" : "2009-12-31T23:00:00.000",
                 "everyDays" : "1"
                },
               "active" : "0",
               "queueing" : "0",
               "userTag" : "ADMIN",
               "threadClass" : "1",
               "publishing" :
                {
                 "SendMail" : "0",
                 "mailAddress" : "",
                 "mailSubject" : "&[TASK_RESULT] - &[TASK_FINISH] : &[TASK_NAME]",
                 "mailBody" : "&[TASK_RESULT] - &[TASK_FINISH] : &[TASK_NAME]",
                 "ftpAddress" : "",
                 "appendAttachment" : "1",
                 "dynamicMailListMacro" : "",
                 "dynamicMailListModule" : "",
                 "UseDynamicMailList" : "0"
                },
               "paramValues" : "",
               "eventId" : ""
              },
             "settings" :
              {
               "fore" :
                {
                 "obDesc" :
                  {
                   "@ds" : "",
                   "@isShortcut" : "0",
                   "@isLink" : "0",
                   "@ver" : "0",
                   "@hf" : "0",
                   "i" : "TASK_MODULE",
                   "n" : "Модуль",
                   "k" : "6447",
                   "c" : "1537",
                   "p" : "6444",
                   "h" : "0",
                   "hasPrv" : "0",
                   "ic" : "0",
                   "trackElementDependents" : "0"
                  },
                 "subName" : "Run"
                }
              }
            }
          ]
        }
      }
    }
  }
}


public static GetSchedulerResult GetTasksContainernMd(SchedulerId moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    //Параметры выполнения операции
    var tGet = new GetScheduler()
    {
        tScheduler = moniker,
        tArg = new GetSchedulerArg()
        {
            pattern = new SchedulerMdPattern // Шаблон получения метаданных
            {
                all = true,
                task = new SchedulerTaskPattern()
                {
                    properties = true,
                    settings = true
                }
            }
        }
    };
    //Получаем метаданные контейнера запланированных задач
    var tResult = somClient.GetScheduler(tGet);
    return tResult;
}


См. также:


[Работа
 с контейнером моделирования](TaskContainer_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
