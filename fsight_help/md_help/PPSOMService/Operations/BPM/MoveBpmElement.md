# MoveBpmElement: Операция

MoveBpmElement: Операция
-


**


# MoveBpmElement


## Синтаксис


MoveBpmElementResult MoveBpmElement(BpmProcessId
 tBpmProcess, MoveBpmElementArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры перемещения
 элемента в дереве процесса.


## Описание


Операция MoveBpmElement перемещает
 элемент в структуре процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, в поле tArg.elGuids
 GUID перемещаемого элемента, а в поле tArg.dest
 место куда осуществляется перемещение. Моникёр может быть получен при
 выполнении операции [OpenBpmProcess](OpenBpmProcess.htm).


Результатом выполнения операции будет обновлённая структура процесса,
 если было определено поле tBpmProcess.needTree.


## Пример


Ниже приведён пример перемещения шага в рамках этапа процесса. В запросе
 передаётся моникёр открытого процесса, GUID шага и индекс позиции, куда
 перемещается шаг. В ответе возвращается обновлённая структура процесса.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<MoveBpmElement xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>COAOPGKGCJKEGOAEIHPPEJNABOOGNDGENKOKNINMLFLJFBMK!M!S!BPHLNJFALGCJKEGOAEJPJLLKGPHKELIFIECLCHAGEBCDNFMELP</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <elType>Step</elType>[![](../../minus.gif)](../../#)<elGuids>
  <it>{F6158579-0B43-4DEC-9C8B-7AE2E70F15AA}</it>  </elGuids>
  <needTree>true</needTree>[![](../../minus.gif)](../../#)<dest>
  <guid>{433124F8-1861-4CA6-BFDE-B94C54F91652}</guid>  <index>1</index>  </dest>
  </tArg>
  </MoveBpmElement>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<MoveBpmElementResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <res xmlns="****">1</res>[![](../../minus.gif)](../../#)<procTree xmlns="****">
  <name>Процесс</name>[![](../../minus.gif)](../../#)<stages>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<stage>
  <name>Этап 1</name>  <index>0</index>  <guid>{0E3D2664-1DB4-42B9-A43F-B63CA721B186}</guid>  </stage>
  <gtwType>No_gateway</gtwType>  <isCondActive>0</isCondActive>[![](../../minus.gif)](../../#)<stGroups>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<stGroup>
  <index>0</index>  <guid>{D5F25EB4-CD78-451E-8308-2AC031D2B2C1}</guid>  </stGroup>
  <steps />
  <isDefaultFlow>0</isDefaultFlow>  </it>
  </stGroups>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<stage>
  <name>Дополнительный этап</name>  <index>1</index>  <guid>{94C3E46B-1BBC-4FFF-9600-49C6B5D344D7}</guid>  </stage>
  <gtwType>No_gateway</gtwType>  <isCondActive>0</isCondActive>[![](../../minus.gif)](../../#)<stGroups>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<stGroup>
  <index>0</index>  <guid>{433124F8-1861-4CA6-BFDE-B94C54F91652}</guid>  </stGroup>
[![](../../minus.gif)](../../#)<steps>
[![](../../minus.gif)](../../#)<it>
  <isEnabled>1</isEnabled>  <isValid>0</isValid>  <name>Согласовать</name>  <type>Approval</type>  <index>0</index>  <guid>{CC5B8608-26E7-4B24-ADE9-E4ECD917AED7}</guid>  <descr />
[![](../../minus.gif)](../../#)<maxDur>
  <periodType>Day</periodType>  <amount>1</amount>  </maxDur>
  <minDeadline>18:00</minDeadline>  <checkDeadline>0</checkDeadline>[![](../../minus.gif)](../../#)<data>
  <writeAccess>0</writeAccess>  <authObjKey>0</authObjKey>  </data>
  </it>
[![](../../minus.gif)](../../#)<it>
  <isEnabled>1</isEnabled>  <isValid>0</isValid>  <name>Выполнить метод</name>  <type>ForeMethod</type>  <index>1</index>  <guid>{F6158579-0B43-4DEC-9C8B-7AE2E70F15AA}</guid>  <descr />
  <roleId>PS-1-1</roleId>  <roleName>ADMIN</roleName>[![](../../minus.gif)](../../#)<maxDur>
  <periodType>Day</periodType>  <amount>1</amount>  </maxDur>
  <minDeadline>18:00</minDeadline>  <checkDeadline>0</checkDeadline>  <fore />
  </it>
  </steps>
  <isDefaultFlow>0</isDefaultFlow>  </it>
  </stGroups>
  </it>
  </stages>
  </procTree>
  </MoveBpmElementResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "MoveBpmElement" :
  {
   "tBpmProcess" :
    {
     "id" : "COAOPGKGCJKEGOAEIHPPEJNABOOGNDGENKOKNINMLFLJFBMK!M!S!BPHLNJFALGCJKEGOAEJPJLLKGPHKELIFIECLCHAGEBCDNFMELP"
    },
   "tArg" :
    {
     "elType" : "Step",
     "elGuids" :
      {
       "it" : "{F6158579-0B43-4DEC-9C8B-7AE2E70F15AA}"
      },
     "needTree" : "true",
     "dest" :
      {
       "guid" : "{433124F8-1861-4CA6-BFDE-B94C54F91652}",
       "index" : "1"
      }
    }
  }
}

### JSON-ответ:


{
 "MoveBpmElementResult" :
  {
   "res" : "1",
   "procTree" :
    {
     "name" : "Процесс",
     "stages" :
      {
       "it" :
        [
          {
           "stage" :
            {
             "name" : "Этап 1",
             "index" : "0",
             "guid" : "{0E3D2664-1DB4-42B9-A43F-B63CA721B186}"
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
                 "guid" : "{D5F25EB4-CD78-451E-8308-2AC031D2B2C1}"
                },
               "steps" : "",
               "isDefaultFlow" : "0"
              }
            }
          },
          {
           "stage" :
            {
             "name" : "Дополнительный этап",
             "index" : "1",
             "guid" : "{94C3E46B-1BBC-4FFF-9600-49C6B5D344D7}"
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
                 "guid" : "{433124F8-1861-4CA6-BFDE-B94C54F91652}"
                },
               "steps" :
                {
                 "it" :
                  [
                    {
                     "isEnabled" : "1",
                     "isValid" : "0",
                     "name" : "Согласовать",
                     "type" : "Approval",
                     "index" : "0",
                     "guid" : "{CC5B8608-26E7-4B24-ADE9-E4ECD917AED7}",
                     "descr" : "",
                     "maxDur" :
                      {
                       "periodType" : "Day",
                       "amount" : "1"
                      },
                     "minDeadline" : "18:00",
                     "checkDeadline" : "0",
                     "data" :
                      {
                       "writeAccess" : "0",
                       "authObjKey" : "0"
                      }
                    },
                    {
                     "isEnabled" : "1",
                     "isValid" : "0",
                     "name" : "Выполнить метод",
                     "type" : "ForeMethod",
                     "index" : "1",
                     "guid" : "{F6158579-0B43-4DEC-9C8B-7AE2E70F15AA}",
                     "descr" : "",
                     "roleId" : "PS-1-1",
                     "roleName" : "ADMIN",
                     "maxDur" :
                      {
                       "periodType" : "Day",
                       "amount" : "1"
                      },
                     "minDeadline" : "18:00",
                     "checkDeadline" : "0",
                     "fore" : ""
                    }
                  ]
                },
               "isDefaultFlow" : "0"
              }
            }
          }
        ]
      }
    }
  }
}


public static MoveBpmElementResult MoveBpmElement(string moniker, string elGUIDSource, string elGUIDDest, uint moveTo)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tMove = new MoveBpmElement()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new MoveBpmElementArg()
        {
            elGuids = new string[1] { elGUIDSource },
            dest = new MoveBpmElementDestination() { guid = elGUIDDest, index = moveTo},
            needTree = true,
            elType = BpmElementType.Step
        }
    };
    // Перемещение элемента процесса
    var result = somClient.MoveBpmElement(tMove);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
