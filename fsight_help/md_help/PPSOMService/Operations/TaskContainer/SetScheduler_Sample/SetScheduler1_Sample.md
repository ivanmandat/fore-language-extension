# Изменение параметров существующей задачи: Операция SetScheduler

Изменение параметров существующей задачи: Операция SetScheduler
-


**


# Изменение параметров существующей задачи


Ниже приведен пример использования операции [SetScheduler](../SetScheduler.htm)
 для изменения параметров задачи. В запросе передается моникёр контейнера
 запланированных задач и шаблон, указывающий необходимость изменить свойства
 задач. Также передается задача с новым периодом выполнения.


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
  <obInst>true</obInst>  <tasks>Change</tasks>[![](../../../minus.gif)](../../../#)<task>
  <properties>true</properties>  </task>
  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<tasks>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>6449</k>  <id>RUN_MODULE</id>  <type>Unknown</type>[![](../../../minus.gif)](../../../#)<properties>
[![](../../../minus.gif)](../../../#)<period>
  <type>Daily</type>  <startDateTime>2000-01-01T00:00:00</startDateTime>  <stopDateTime>2010-01-01T00:00:00</stopDateTime>  </period>
  <active>false</active>  </properties>
  </it>
  </its>
  </tasks>
  </meta>
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
       "tasks" : "Change",
       "task" :
        {
         "properties" : "true"
        }
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
               "type" : "Unknown",
               "properties" :
                {
                 "period" :
                  {
                   "type" : "Daily",
                   "startDateTime" : "2000-01-01T00:00:00",
                   "stopDateTime" : "2010-01-01T00:00:00"
                  },
                 "active" : "false"
                }
              }
            ]
          }
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
    }
  }
}


public static SetSchedulerResult ChangeTaskProperty(SchedulerId moniker, SchedulerTask task)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    //Параметры выполнения операции
    var tSet = new SetScheduler()
    {
        tScheduler = moniker,
        tArg = new SetSchedulerArg()
        {
            //Шаблон, указывающий необходимость изменить задачи
            pattern = new SchedulerMdPattern
            {
                tasks = ListOperation.Change,
                task = new SchedulerTaskPattern()
                {
                    properties = true
                }
            },
            meta = new SchedulerMd()
            {
                tasks = new SchedulerTasks()
                {
                    its = new SchedulerTask[]
                    {
                        new SchedulerTask()
                        {
                            id = task.id,
                            k = task.k,
                            //Обновляемые свойства задачи
                            properties = new SchedulerTaskProperties()
                            {
                                active = false,
                                period = new SchedulerTaskPeriod()
                                {
                                    type = SchedulerTaskPeriodType.Daily,
                                    startDateTime = DateTime.Parse("01.01.2000"),
                                    stopDateTime = DateTime.Parse("01.01.2010")
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    //Запуск планировщика задач
    var tResult = somClient.SetScheduler(tSet);
    return tResult;
}


См. также:


[SetScheduler](../SetScheduler.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
