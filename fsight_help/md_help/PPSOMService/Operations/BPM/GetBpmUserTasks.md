# GetBpmUserTasks: Операция

GetBpmUserTasks: Операция
-


**


# GetBpmUserTasks


## Синтаксис


GetBpmUserTasksResult GetBpmUserTasks(BpmProcessId
 tBpmProcess, GetBpmUserTasksArg arg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


arg.
 Параметры выполнения операции.


## Описание


Операция GetBpmUserTasks получения
 списка шагов, доступных пользователю.


## Комментарии


Актуально при работе под пользователем, не являющимся администратором
 или ответственным за процесс. Операция позволяет получить шаги, к которым
 у пользователя имеется доступ. Шаги могут быть получены как в рамках всех
 запущенных экземпляров процесса, так и в рамках только отдельных экземпляров,
 запущенных с определёнными значениями параметров.


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm). В поле arg.mode определите режим отбора
 шагов. По умолчанию отбираются шаги, ожидающие выполнения пользователем.
 Для фильтрации экземпляров процесса определите в поле arg.filters
 значения параметров, с которыми был запущен процесс.


Результатом выполнения операции будет полученный список шагов, доступных
 пользователю.


## Пример


Предполагается, что подключение к репозиторию осуществлено под пользователем,
 который не является администратором или куратором процесса.


Ниже приведён пример получения списка шагов, доступных пользователю
 в рамках экземпляра процесса, запущенного с определённым значением параметра.
 В запросе передаётся моникёр открытого процесса и моникёр отметки параметра,
 по которой будут фильтроваться экземпляры процесса. В ответе возвращается
 полученный список шагов.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetBpmUserTasks xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>EJPAONFCDNGFGOAEDHEINLNGGNKIPDEEIJIBGLHHBJLIOLEH!M!S!BPJCJGLOFCDNGFGOAEJHPPCPHOBNLEHIOELLOEGJHOBENCCKGL</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<arg xmlns="****">
  <mode>1</mode>[![](../../minus.gif)](../../#)<filters>
[![](../../minus.gif)](../../#)<params>
[![](../../minus.gif)](../../#)<it>
  <mnk>EJPAONFCDNGFGOAEDHEINLNGGNKIPDEEIJIBGLHHBJLIOLEH!M!S!SNPLAAPFCDNGFGOAEOOLPOKJJEAJBNDMEGKCGKOGPHCBGOGPD</mnk>  </it>
  </params>
  </filters>
  </arg>
  </GetBpmUserTasks>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetBpmUserTasksResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<list xmlns="****">
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<inst>
  <key>1166</key>  <startDate>2025-04-03T03:03:43.000Z</startDate>  <comment />
  <prms>Отрасли производства = 'Электроэнергетика'</prms>[![](../../minus.gif)](../../#)<crtr>
  <sid>PS-1-1</sid>  <name>ADMIN</name>  </crtr>
  </inst>
[![](../../minus.gif)](../../#)<usrTsks>
[![](../../minus.gif)](../../#)<it>
  <name>Ручное действие</name>  <type>ManualTask</type>  <guid>{02EFEFEE-E18C-409C-AE74-81CA3B4839F4}</guid>  <descr />
  <deadline>2025-04-04T08:03:44.000Z</deadline>  <autoExec>0</autoExec>[![](../../minus.gif)](../../#)<states>
  <it>2</it>  </states>
[![](../../minus.gif)](../../#)<usr>
  <sid>PS-1-60936</sid>  <name>IVANOV</name>  </usr>
  </it>
  </usrTsks>
  </it>
  </list>
  </GetBpmUserTasksResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetBpmUserTasks" :
  {
   "tBpmProcess" :
    {
     "id" : "EJPAONFCDNGFGOAEDHEINLNGGNKIPDEEIJIBGLHHBJLIOLEH!M!S!BPJCJGLOFCDNGFGOAEJHPPCPHOBNLEHIOELLOEGJHOBENCCKGL"
    },
   "arg" :
    {
     "mode" : "1",
     "filters" :
      {
       "params" :
        {
         "it" :
          {
           "mnk" : "EJPAONFCDNGFGOAEDHEINLNGGNKIPDEEIJIBGLHHBJLIOLEH!M!S!SNPLAAPFCDNGFGOAEOOLPOKJJEAJBNDMEGKCGKOGPHCBGOGPD"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetBpmUserTasksResult" :
  {
   "list" :
    {
     "it" :
      {
       "inst" :
        {
         "key" : "1166",
         "startDate" : "2025-04-03T03:03:43.000Z",
         "comment" : "",
         "prms" : "Отрасли производства = 'Электроэнергетика'",
         "crtr" :
          {
           "sid" : "PS-1-1",
           "name" : "ADMIN"
          }
        },
       "usrTsks" :
        {
         "it" :
          {
           "name" : "Ручное действие",
           "type" : "ManualTask",
           "guid" : "{02EFEFEE-E18C-409C-AE74-81CA3B4839F4}",
           "descr" : "",
           "deadline" : "2025-04-04T08:03:44.000Z",
           "autoExec" : "0",
           "states" :
            {
             "it" : "2"
            },
           "usr" :
            {
             "sid" : "PS-1-60936",
             "name" : "IVANOV"
            }
          }
        }
      }
    }
  }
}


public static GetBpmUserTasksResult GetBpmUserTasks(string moniker, string filterParamSelection)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetBpmUserTasks()
    {
        arg = new GetBpmUserTasksArg()
        {
            filters = new BpmUserTasksFilters()
            {
                @params = new BpmDimSelection[]
                {
                    new BpmDimSelection()
                    {
                        mnk = filterParamSelection
                    }
                }
            },
            mode = 1 // Все задачи, доступные пользователю
        },
        tBpmProcess = new BpmProcessId() { id = moniker }
    };
    // Получение экземпляров процесса, отфильтрованных по значению параметра, указанному при запуске
    var result = somClient.GetBpmUserTasks(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
