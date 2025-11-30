# GetBpmWorkspace: Операция

GetBpmWorkspace: Операция
-


**


# GetBpmWorkspace


## Синтаксис


BpmProcessInfoResult GetBpmWorkspace(BpmProcessId
 tBpmProcess)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


## Описание


Операция GetBpmWorkspace получает
 информацию о структуре процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm).


Результатом выполнения операции будут полученные составы этапов, настройки
 шагов, условия шлюзов.


## Пример


Ниже приведён пример получения структуры процесса. В запросе передаётся
 моникёр открытого процесса. В ответе возвращается полученная информация.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetBpmWorkspace xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>HBBODBAFBDNAGOAEMMDKMLHCADEHCLGEKJHCKBIALPJCLPHF!M!S!BPNDIADGAFBDNAGOAEHGKIOKHBHBJIJMIELINEGEDPGAGEIEAP</id>  </tBpmProcess>
  </GetBpmWorkspace>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetBpmWorkspaceResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <name xmlns="****">Процесс 1</name>[![](../../minus.gif)](../../#)<stages xmlns="****">
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<stage>
  <name>Этап 1</name>  <index>0</index>  <guid>{D198A63E-B5BD-4791-88F3-3E60C9DE7A54}</guid>  </stage>
  <gtwType>No_gateway</gtwType>  <isCondActive>0</isCondActive>[![](../../minus.gif)](../../#)<stGroups>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<stGroup>
  <index>0</index>  <guid>{322DDF61-B291-42CB-A075-53B7F4337743}</guid>  </stGroup>
[![](../../minus.gif)](../../#)<steps>
[![](../../minus.gif)](../../#)<it>
  <isEnabled>1</isEnabled>  <name>Ручной ввод данных</name>  <type>ManualTask</type>  <index>0</index>  <guid>{13F3BEEB-009D-4FF7-88CC-F3C41A025A99}</guid>  <roleId>PS-1-144122</roleId>[![](../../minus.gif)](../../#)<maxDur>
  <periodType>Week</periodType>  <amount>1</amount>  </maxDur>
  <minDeadline>17:00</minDeadline>  <checkDeadline>1</checkDeadline>  </it>
[![](../../minus.gif)](../../#)<it>
  <isEnabled>1</isEnabled>  <name>Согласование изменений</name>  <type>Approval</type>  <index>1</index>  <guid>{0CF6521D-F5DB-48EB-A310-3897914390A6}</guid>  <roleId>PS-1-1</roleId>[![](../../minus.gif)](../../#)<maxDur>
  <periodType>Day</periodType>  <amount>1</amount>  </maxDur>
  <minDeadline>18:00</minDeadline>  <bindObjKey>340033</bindObjKey>  <checkDeadline>1</checkDeadline>[![](../../minus.gif)](../../#)<data>
  <writeAccess>0</writeAccess>  <authObjKey>317058</authObjKey>  </data>
  </it>
[![](../../minus.gif)](../../#)<it>
  <isEnabled>1</isEnabled>  <name>Ввод данных</name>  <type>DataInput</type>  <index>2</index>  <guid>{6334B0E6-1E9F-45AA-BBA1-7F69C53F08C3}</guid>  <roleId>PS-1-1</roleId>[![](../../minus.gif)](../../#)<maxDur>
  <periodType>Day</periodType>  <amount>1</amount>  </maxDur>
  <minDeadline>18:00</minDeadline>  <bindObjKey>340033</bindObjKey>  <checkDeadline>0</checkDeadline>[![](../../minus.gif)](../../#)<data>
  <authObjKey>302417</authObjKey>  </data>
  </it>
[![](../../minus.gif)](../../#)<it>
  <isEnabled>1</isEnabled>  <name>Задача ETL</name>  <type>EtlTask</type>  <index>3</index>  <guid>{97A8F45A-9E05-414C-91E5-5281769669C7}</guid>  <roleId>PS-1-1</roleId>[![](../../minus.gif)](../../#)<maxDur>
  <periodType>Day</periodType>  <amount>1</amount>  </maxDur>
  <minDeadline>18:00</minDeadline>  <bindObjKey>340040</bindObjKey>  <checkDeadline>0</checkDeadline>  </it>
  </steps>
  <isDefaultFlow>0</isDefaultFlow>  </it>
  </stGroups>
  </it>
  </stages>
[![](../../minus.gif)](../../#)<stEv xmlns="****">
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<per>
  <type>Monthly</type>[![](../../minus.gif)](../../#)<mPer>
[![](../../minus.gif)](../../#)<ms>
  <it>8</it>  </ms>
[![](../../minus.gif)](../../#)<wM>
  <wOfM>5</wOfM>  <dOfW>1</dOfW>  </wM>
  </mPer>
  </per>
  <rep>1</rep>  <id>START_TIMER_EVENT</id>  <stCom />
  <stDT>2023-08-23T09:36:18.000</stDT>[![](../../minus.gif)](../../#)<dims>
[![](../../minus.gif)](../../#)<it>
  <pKey>338159</pKey>[![](../../minus.gif)](../../#)<dimS>
  <mnk>HBBODBAFBDNAGOAEMMDKMLHCADEHCLGEKJHCKBIALPJCLPHF!M!S!SOMJIMIAFBDNAGOAEEGJKDPPLPDBDLAJEFLMFLGHLADJGIHMM</mnk>  </dimS>
  </it>
  </dims>
  </it>
  </stEv>
  </GetBpmWorkspaceResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetBpmWorkspace" :
  {
   "tBpmProcess" :
    {
     "id" : "HBBODBAFBDNAGOAEMMDKMLHCADEHCLGEKJHCKBIALPJCLPHF!M!S!BPNDIADGAFBDNAGOAEHGKIOKHBHBJIJMIELINEGEDPGAGEIEAP"
    }
  }
}

### JSON-ответ:


{
 "GetBpmWorkspaceResult" :
  {
   "name" : "Процесс 1",
   "stages" :
    {
     "it" :
      {
       "stage" :
        {
         "name" : "Этап 1",
         "index" : "0",
         "guid" : "{D198A63E-B5BD-4791-88F3-3E60C9DE7A54}"
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
             "guid" : "{322DDF61-B291-42CB-A075-53B7F4337743}"
            },
           "steps" :
            {
             "it" :
              [
                {
                 "isEnabled" : "1",
                 "name" : "Ручной ввод данных",
                 "type" : "ManualTask",
                 "index" : "0",
                 "guid" : "{13F3BEEB-009D-4FF7-88CC-F3C41A025A99}",
                 "roleId" : "PS-1-144122",
                 "maxDur" :
                  {
                   "periodType" : "Week",
                   "amount" : "1"
                  },
                 "minDeadline" : "17:00",
                 "checkDeadline" : "1"
                },
                {
                 "isEnabled" : "1",
                 "name" : "Согласование изменений",
                 "type" : "Approval",
                 "index" : "1",
                 "guid" : "{0CF6521D-F5DB-48EB-A310-3897914390A6}",
                 "roleId" : "PS-1-1",
                 "maxDur" :
                  {
                   "periodType" : "Day",
                   "amount" : "1"
                  },
                 "minDeadline" : "18:00",
                 "bindObjKey" : "340033",
                 "checkDeadline" : "1",
                 "data" :
                  {
                   "writeAccess" : "0",
                   "authObjKey" : "317058"
                  }
                },
                {
                 "isEnabled" : "1",
                 "name" : "Ввод данных",
                 "type" : "DataInput",
                 "index" : "2",
                 "guid" : "{6334B0E6-1E9F-45AA-BBA1-7F69C53F08C3}",
                 "roleId" : "PS-1-1",
                 "maxDur" :
                  {
                   "periodType" : "Day",
                   "amount" : "1"
                  },
                 "minDeadline" : "18:00",
                 "bindObjKey" : "340033",
                 "checkDeadline" : "0",
                 "data" :
                  {
                   "authObjKey" : "302417"
                  }
                },
                {
                 "isEnabled" : "1",
                 "name" : "Задача ETL",
                 "type" : "EtlTask",
                 "index" : "3",
                 "guid" : "{97A8F45A-9E05-414C-91E5-5281769669C7}",
                 "roleId" : "PS-1-1",
                 "maxDur" :
                  {
                   "periodType" : "Day",
                   "amount" : "1"
                  },
                 "minDeadline" : "18:00",
                 "bindObjKey" : "340040",
                 "checkDeadline" : "0"
                }
              ]
            },
           "isDefaultFlow" : "0"
          }
        }
      }
    },
   "stEv" :
    {
     "it" :
      {
       "per" :
        {
         "type" : "Monthly",
         "mPer" :
          {
           "ms" :
            {
             "it" : "8"
            },
           "wM" :
            {
             "wOfM" : "5",
             "dOfW" : "1"
            }
          }
        },
       "rep" : "1",
       "id" : "START_TIMER_EVENT",
       "stCom" : "",
       "stDT" : "2023-08-23T09:36:18.000",
       "dims" :
        {
         "it" :
          {
           "pKey" : "338159",
           "dimS" :
            {
             "mnk" : "HBBODBAFBDNAGOAEMMDKMLHCADEHCLGEKJHCKBIALPJCLPHF!M!S!SOMJIMIAFBDNAGOAEEGJKDPPLPDBDLAJEFLMFLGHLADJGIHMM"
            }
          }
        }
      }
    }
  }
}


public static BpmProcessInfoResult GetBpmWorkspace(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetBpmWorkspace()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker }
    };
    // Получение информации о содержимом рабочего пространства
    var result = somClient.GetBpmWorkspace(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
