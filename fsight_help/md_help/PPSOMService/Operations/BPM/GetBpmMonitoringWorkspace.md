# GetBpmMonitoringWorkspace: Операция

GetBpmMonitoringWorkspace: Операция
-


**


# GetBpmMonitoringWorkspace


## Синтаксис


GetBpmMonitoringWorkspaceResult GetBpmMonitoringWorkspace(BpmProcessId
 tBpmProcess, GetBpmMonitoringWorkspaceArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetBpmMonitoringWorkspace
 получает информацию о структуре экземпляра процесса во время его выполнения.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm). В поле tArg.id укажите уникальный ключ
 запущенного экземпляра процесса. Ключ можно получить в коллекции list, которая доступна в результате
 выполнения операции [GetProcessInstances](GetProcessInstances.htm).


Результатом выполнения операции будет структура процесса с информацией
 о состоянии выполнения отдельных этапов и шагов.


## Пример


Ниже приведён пример получения информации о структуре выполняемого экземпляра
 процесса. В запросе передаётся моникёр процесса и уникальный ключ выполняемого
 экземпляра процесса. В ответе возвращается полученная информация о структуре
 процесса.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetBpmMonitoringWorkspace xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>MMDKCJLDFPEFGOAEJDFICNAECCEDDNNEFKFPIDCLMIKHNLIA!M!S!BPPAOJOMLDFPEFGOAEPAGCHIFHOLJLCFOEOLAIDEHDFGJILEGI</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <id>134656</id>  </tArg>
  </GetBpmMonitoringWorkspace>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetBpmMonitoringWorkspaceResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<proc xmlns="****">
  <name>Схема разбивки DEFAULT</name>[![](../../minus.gif)](../../#)<stages>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<stage>
  <name>Этап 1</name>  <index>0</index>  <guid>{50C1F437-8467-4FC3-BBD3-0D2C85C84A66}</guid>  <id>169434*0</id>[![](../../minus.gif)](../../#)<states>
  <it>2</it>  </states>
  </stage>
  <gtwType>No_gateway</gtwType>  <isCondActive>0</isCondActive>[![](../../minus.gif)](../../#)<stGroups>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<stGroup>
  <index>0</index>  <guid>{4AE94945-652C-40EE-A1FB-7482B2DBECCF}</guid>  </stGroup>
[![](../../minus.gif)](../../#)<steps>
[![](../../minus.gif)](../../#)<it>
  <isEnabled>1</isEnabled>  <name>Ручное действие 1</name>  <type>ManualTask</type>  <index>0</index>  <guid>{B10D5260-24FE-46D5-8CAA-61D9C9A38FD4}</guid>  <descr />
  <roleId>PS-1-1</roleId>  <roleName>ADMIN</roleName>  <deadline>2025-03-20T10:55:33.000</deadline>[![](../../minus.gif)](../../#)<maxDur>
  <periodType>Day</periodType>  <amount>1</amount>  </maxDur>
  <id>169434*0@0^0</id>[![](../../minus.gif)](../../#)<states>
  <it>2</it>  </states>
  <canChangeExec>0</canChangeExec>  </it>
[![](../../minus.gif)](../../#)<it>
  <isEnabled>1</isEnabled>  <name>Вызов подпроцесса 1</name>  <type>SubStart</type>  <index>1</index>  <guid>{BFBEAA95-F1ED-4AAC-A164-D3AAB4F1049A}</guid>  <descr />
  <roleId>PS-1-1</roleId>  <roleName>ADMIN</roleName>[![](../../minus.gif)](../../#)<maxDur>
  <periodType>Day</periodType>  <amount>1</amount>  </maxDur>
  <bindObjKey>168054</bindObjKey>  <autoExec>0</autoExec>  <id>169434*0@0^1</id>[![](../../minus.gif)](../../#)<states>
  <it>1</it>  </states>
  <canChangeExec>0</canChangeExec>[![](../../minus.gif)](../../#)<subproc>
  <procVer>2025-02-04T11:57:13.851</procVer>  <rollbackType>FirstStep</rollbackType>  </subproc>
  </it>
[![](../../minus.gif)](../../#)<it>
  <isEnabled>1</isEnabled>  <name>Ручное действие 2</name>  <type>ManualTask</type>  <index>2</index>  <guid>{A376BBCD-E0BE-4889-9C3C-89782ED3AC8D}</guid>  <descr />
  <roleId>PS-2-1</roleId>  <roleName>АДМИНИСТРАТОРЫ</roleName>[![](../../minus.gif)](../../#)<maxDur>
  <periodType>Day</periodType>  <amount>1</amount>  </maxDur>
  <id>169434*0@0^2</id>[![](../../minus.gif)](../../#)<states>
  <it>1</it>  </states>
[![](../../minus.gif)](../../#)<execGroup>
  <sid>PS-2-1</sid>  <name>АДМИНИСТРАТОРЫ</name>  </execGroup>
  <canChangeExec>1</canChangeExec>  </it>
  </steps>
  <isDefaultFlow>0</isDefaultFlow>  </it>
  </stGroups>
  </it>
  </stages>
  </proc>
  <instId xmlns="****">{43347D17-DEC3-449B-81FF-ABD522F3909E}</instId>  </GetBpmMonitoringWorkspaceResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetBpmMonitoringWorkspace" :
  {
   "tBpmProcess" :
    {
     "id" : "MMDKCJLDFPEFGOAEJDFICNAECCEDDNNEFKFPIDCLMIKHNLIA!M!S!BPPAOJOMLDFPEFGOAEPAGCHIFHOLJLCFOEOLAIDEHDFGJILEGI"
    },
   "tArg" :
    {
     "id" : "134656"
    }
  }
}

### JSON-ответ:


{
 "GetBpmMonitoringWorkspaceResult" :
  {
   "proc" :
    {
     "name" : "Схема разбивки DEFAULT",
     "stages" :
      {
       "it" :
        {
         "stage" :
          {
           "name" : "Этап 1",
           "index" : "0",
           "guid" : "{50C1F437-8467-4FC3-BBD3-0D2C85C84A66}",
           "id" : "169434*0",
           "states" :
            {
             "it" : "2"
            }
          },
         "gtwType" : "No_gateway",
         "isCondActive" : "0",
         "stGroups" :
          {
           "it" :
            {
             "stGroup" :
              {
               "index" : "0",
               "guid" : "{4AE94945-652C-40EE-A1FB-7482B2DBECCF}"
              },
             "steps" :
              {
               "it" :
                [
                  {
                   "isEnabled" : "1",
                   "name" : "Ручное действие 1",
                   "type" : "ManualTask",
                   "index" : "0",
                   "guid" : "{B10D5260-24FE-46D5-8CAA-61D9C9A38FD4}",
                   "descr" : "",
                   "roleId" : "PS-1-1",
                   "roleName" : "ADMIN",
                   "deadline" : "2025-03-20T10:55:33.000",
                   "maxDur" :
                    {
                     "periodType" : "Day",
                     "amount" : "1"
                    },
                   "id" : "169434*0@0^0",
                   "states" :
                    {
                     "it" : "2"
                    },
                   "canChangeExec" : "0"
                  },
                  {
                   "isEnabled" : "1",
                   "name" : "Вызов подпроцесса 1",
                   "type" : "SubStart",
                   "index" : "1",
                   "guid" : "{BFBEAA95-F1ED-4AAC-A164-D3AAB4F1049A}",
                   "descr" : "",
                   "roleId" : "PS-1-1",
                   "roleName" : "ADMIN",
                   "maxDur" :
                    {
                     "periodType" : "Day",
                     "amount" : "1"
                    },
                   "bindObjKey" : "168054",
                   "autoExec" : "0",
                   "id" : "169434*0@0^1",
                   "states" :
                    {
                     "it" : "1"
                    },
                   "canChangeExec" : "0",
                   "subproc" :
                    {
                     "procVer" : "2025-02-04T11:57:13.851",
                     "rollbackType" : "FirstStep"
                    }
                  },
                  {
                   "isEnabled" : "1",
                   "name" : "Ручное действие 2",
                   "type" : "ManualTask",
                   "index" : "2",
                   "guid" : "{A376BBCD-E0BE-4889-9C3C-89782ED3AC8D}",
                   "descr" : "",
                   "roleId" : "PS-2-1",
                   "roleName" : "АДМИНИСТРАТОРЫ",
                   "maxDur" :
                    {
                     "periodType" : "Day",
                     "amount" : "1"
                    },
                   "id" : "169434*0@0^2",
                   "states" :
                    {
                     "it" : "1"
                    },
                   "execGroup" :
                    {
                     "sid" : "PS-2-1",
                     "name" : "АДМИНИСТРАТОРЫ"
                    },
                   "canChangeExec" : "1"
                  }
                ]
              },
             "isDefaultFlow" : "0"
            }
          }
        }
      }
    },
   "instId" : "{43347D17-DEC3-449B-81FF-ABD522F3909E}"
  }
}


public static GetBpmMonitoringWorkspaceResult GetBpmMonitoringWorkspace(string moniker, uint instanceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetBpmMonitoringWorkspace()
    {
        tArg = new GetBpmMonitoringWorkspaceArg()
        {
            id = instanceKey
        },
        tBpmProcess = new BpmProcessId() { id = moniker }
    };
    // Получение информацию о структуре выполняемого экземпляра процесса
    var result = somClient.GetBpmMonitoringWorkspace(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
