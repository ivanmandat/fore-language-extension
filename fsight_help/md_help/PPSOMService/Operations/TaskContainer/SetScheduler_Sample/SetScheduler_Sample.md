# Запуск задачи на выполнение: Операция SetScheduler

Запуск задачи на выполнение: Операция SetScheduler
-


**


# Запуск задачи на выполнение


Ниже приведен пример использования операции [SetScheduler](../SetScheduler.htm)
 для запуска задач на выполнение. В запросе передается моникёр контейнера
 запланированных задач и шаблон, указывающий необходимость запуска задач.
 Также передается список запускаемых задач. В ответе приходит результат
 выполнения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetScheduler xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tScheduler xmlns="****">
  <id>S1!M!6445</id>  </tScheduler>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <execTasks>true</execTasks>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<tasks>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>6449</k>  <id>RUN_MODULE</id>  <n>Выполнение модуля</n>  <vis>true</vis>  <type>ExecuteSub</type>  <ds />
[![](../../../minus.gif)](../../../#)<properties>
[![](../../../minus.gif)](../../../#)<period>
  <type>Daily</type>  <startDateTime>1999-12-31T23:00:00</startDateTime>  <stopDateTime>2009-12-31T23:00:00</stopDateTime>  <everyDays>1</everyDays>  </period>
  <active>false</active>  <queueing>false</queueing>  <userTag>ADMIN</userTag>  <threadClass>1</threadClass>[![](../../../minus.gif)](../../../#)<publishing>
  <SendMail>false</SendMail>  <mailAddress />
  <mailSubject>&[TASK_RESULT] - &[TASK_FINISH] : &[TASK_NAME]</mailSubject>  <mailBody>&[TASK_RESULT] - &[TASK_FINISH] : &[TASK_NAME]</mailBody>  <ftpAddress />
  <appendAttachment>true</appendAttachment>  <dynamicMailListMacro />
  <dynamicMailListModule />
  <UseDynamicMailList>false</UseDynamicMailList>  </publishing>
  <paramValues />
  <eventId />
  </properties>
[![](../../../minus.gif)](../../../#)<settings>
[![](../../../minus.gif)](../../../#)<fore>
[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**false**" isLink="**false**" ds="****" ver="**0**" hf="**false**">
  <i>TASK_MODULE</i>  <n>Модуль</n>  <k>6447</k>  <c>1537</c>  <p>6444</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  <trackElementDependents>false</trackElementDependents>  </obDesc>
  <subName>Run</subName>  </fore>
  </settings>
  </it>
  </its>
  </tasks>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <tasks>Get</tasks>[![](../../../minus.gif)](../../../#)<task>
  <result>true</result>  </task>
  </metaGet>
  </tArg>
  </SetScheduler>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetSchedulerResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!6445</id>  </id>
[![](../../../minus.gif)](../../../#)<execResults xmlns="****">
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>6449</k>  <id>RUN_MODULE</id>  <startDate>2020-11-12T14:50:51.000</startDate>  <finishDate>2020-11-12T14:50:52.000</finishDate>  <state>Succeeded</state>  <messages />
  </it>
  </its>
  </execResults>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>TASKS_CONTAINTER</i>  <n>Контейнер запланированных задач</n>  <k>6445</k>  <c>5378</c>  <p>6444</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
[![](../../../minus.gif)](../../../#)<tasks>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>6449</k>  <id>RUN_MODULE</id>  <n>Выполнение модуля</n>  <vis>1</vis>  <type>ExecuteSub</type>  <ds />
[![](../../../minus.gif)](../../../#)<result>
  <k>6449</k>  <id>RUN_MODULE</id>  <startDate>2020-11-12T14:50:51.000</startDate>  <finishDate>2020-11-12T14:50:52.000</finishDate>  <state>Succeeded</state>  <messages />
  </result>
  </it>
  </its>
  </tasks>
  </meta>
  </SetSchedulerResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetScheduler" :
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
       "execTasks" : "true"
      },
     "meta" :
      {
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
               "vis" : "true",
               "type" : "ExecuteSub",
               "ds" : "",
               "properties" :
                {
                 "period" :
                  {
                   "type" : "Daily",
                   "startDateTime" : "1999-12-31T23:00:00",
                   "stopDateTime" : "2009-12-31T23:00:00",
                   "everyDays" : "1"
                  },
                 "active" : "false",
                 "queueing" : "false",
                 "userTag" : "ADMIN",
                 "threadClass" : "1",
                 "publishing" :
                  {
                   "SendMail" : "false",
                   "mailAddress" : "",
                   "mailSubject" : "&[TASK_RESULT] - &[TASK_FINISH] : &[TASK_NAME]",
                   "mailBody" : "&[TASK_RESULT] - &[TASK_FINISH] : &[TASK_NAME]",
                   "ftpAddress" : "",
                   "appendAttachment" : "true",
                   "dynamicMailListMacro" : "",
                   "dynamicMailListModule" : "",
                   "UseDynamicMailList" : "false"
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
                     "@isShortcut" : "false",
                     "@isLink" : "false",
                     "@ver" : "0",
                     "@hf" : "false",
                     "i" : "TASK_MODULE",
                     "n" : "Модуль",
                     "k" : "6447",
                     "c" : "1537",
                     "p" : "6444",
                     "h" : "false",
                     "hasPrv" : "false",
                     "ic" : "false",
                     "trackElementDependents" : "false"
                    },
                   "subName" : "Run"
                  }
                }
              }
            ]
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "tasks" : "Get",
       "task" :
        {
         "result" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetSchedulerResult" :
  {
   "id" :
    {
     "id" : "S1!M!6445"
    },
   "execResults" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "6449",
           "id" : "RUN_MODULE",
           "startDate" : "2020-11-12T14:50:51.000",
           "finishDate" : "2020-11-12T14:50:52.000",
           "state" : "Succeeded",
           "messages" : ""
          }
        ]
      }
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
             "result" :
              {
               "k" : "6449",
               "id" : "RUN_MODULE",
               "startDate" : "2020-11-12T14:50:51.000",
               "finishDate" : "2020-11-12T14:50:52.000",
               "state" : "Succeeded",
               "messages" : ""
              }
            }
          ]
        }
      }
    }
  }
}


public static SetSchedulerResult ExecuteTasks(SchedulerId moniker, SchedulerTasks tasks)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    //Параметры выполнения операции
    var tSet = new SetScheduler()
    {
        tScheduler = moniker,
        tArg = new SetSchedulerArg()
        {
            pattern = new SchedulerMdPattern // Шаблон получения метаданных
            {
                execTasks = true,
            },
            meta = new SchedulerMd()
            {
                tasks = tasks
            },
            metaGet = new SchedulerMdPattern()
            {
                tasks = ListOperation.Get,
                task = new SchedulerTaskPattern()
                {
                    result = true
                }
            }
        }
    };
    //Выполнение задач
    var tResult = somClient.SetScheduler(tSet);
    return tResult;
}


См. также:


[SetScheduler](../SetScheduler.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
