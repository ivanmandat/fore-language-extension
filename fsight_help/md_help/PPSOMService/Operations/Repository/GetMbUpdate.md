# GetMbUpdate: Операция

GetMbUpdate: Операция
-


**


# GetMbUpdate


## Синтаксис


GetMbUpdateResult GetMbUpdate(MbUpdateId tMbUpdate,
 GetMbUpdateArg tArg)


## Параметры


tMbUpdate. Моникёр
 для работы с обновлением.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetMbUpdate получает
 информацию об обновлении.


## Комментарии


Операция позволяет получить информацию о дереве элементов обновления,
 различные параметры, заданные для элементов дерева и самого обновления,
 а также информацию о процессе применения обновления. Для выполнения операции
 укажите в поле tMbUpdate моникёр
 обновления, а в поле tArg параметры
 получения информации об обновлении. Моникёр может быть получен при выполнении
 операции [OpenMbUpdate](OpenMbUpdate.htm).


Результатом выполнения операции будет запрошенная информация.


## Пример


Ниже приведён пример получения информации об обновлении. В запросе передаётся
 моникёр для работы с обновлением и шаблон, указывающий необходимость получить
 всю информацию об обновлении. В ответе приходит полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetMbUpdate xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMbUpdate xmlns="****">
  <id>S1!M!S!MbUpd1</id>  </tMbUpdate>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <all>true</all>  </pattern>
  </tArg>
  </GetMbUpdate>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetMbUpdateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!MbUpd1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<rootFolder>
  <k>-1</k>  <index>-1</index>  <type>Folder</type>  <label />
  <condition />
  <enabled>1</enabled>[![](../../minus.gif)](../../#)<folder>
  <childrenCount>1</childrenCount>  </folder>
  </rootFolder>
[![](../../minus.gif)](../../#)<properties>
  <its />
  </properties>
[![](../../minus.gif)](../../#)<eventsNode>
  <k>2</k>  <index>0</index>  <type>Object</type>  <label>Модуль обновления</label>  <condition />
  <parentNode>1</parentNode>  <enabled>1</enabled>[![](../../minus.gif)](../../#)<folder>
  <childrenCount>0</childrenCount>  </folder>
[![](../../minus.gif)](../../#)<object>
[![](../../minus.gif)](../../#)<object ts="**2020-04-14T10:19:08.502Z**" ds="****" isShortcut="**0**" isLink="**0**" ver="**3**" hf="**0**">
  <i>M_UPDATE</i>  <n>Модуль обновления</n>  <k>198414</k>  <c>1537</c>  <p>198413</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </object>
  <isSaved>0</isSaved>  <updatePart>Metadata</updatePart>[![](../../minus.gif)](../../#)<updateType>
  <it>Bound</it>  <it>BindById</it>  </updateType>
  <parent>9</parent>  <includeChildrenDependencies>2</includeChildrenDependencies>  <updateOrder>Default</updateOrder>  <includeData>0</includeData>  <alterType>Default</alterType>  <objectId>M_UPDATE</objectId>  <objectName>Модуль обновления</objectName>  <objectOldKey>198414</objectOldKey>  <constraint>None</constraint>  <boundType>ById</boundType>  <unboundType>Bound</unboundType>  <forceUniqueId>0</forceUniqueId>  <forceKeepId>0</forceKeepId>  <accessTokenOptions>Default</accessTokenOptions>  <sdApplyLog />
  <version>3</version>  <originalMetabase />
  </object>
  </eventsNode>
[![](../../minus.gif)](../../#)<reflectObjectsRights>
  <it>Ask</it>  <it>AfterEach</it>  </reflectObjectsRights>
[![](../../minus.gif)](../../#)<applyOptions>
  <it>SetCurrentStamp</it>  <it>AutoCheckConflicts</it>  </applyOptions>
[![](../../minus.gif)](../../#)<updateType>
  <it>Bound</it>  <it>BindByKey</it>  </updateType>
  <description />
  <constraint>None</constraint>  <boundType>ByKey</boundType>  <localCopy>0</localCopy>  <useLocalVcsFiles>1</useLocalVcsFiles>[![](../../minus.gif)](../../#)<subjects>
  <its />
  </subjects>
  <allowReplaceSD>0</allowReplaceSD>[![](../../minus.gif)](../../#)<mandatoryAccess>
  <isValid>1</isValid>  <isSimple>0</isSimple>  </mandatoryAccess>
  <securityConflictsLog />
  <accessAllowed>Full</accessAllowed>  <requireUserUpdateMessage>0</requireUserUpdateMessage>  <priorDataLinkDependentsClear>0</priorDataLinkDependentsClear>[![](../../minus.gif)](../../#)<customProperties>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <id>CREATEUSERNAME</id>  <name>ITEM</name>  <value>ADMIN</value>  </it>
[![](../../minus.gif)](../../#)<it>
  <id>CREATEUSERSID</id>  <name>ITEM</name>  <value>PS-1-1</value>  </it>
[![](../../minus.gif)](../../#)<it>
  <id>CREATEWORKSTATION</id>  <name>ITEM</name>  <value>FS\IVANOV</value>  </it>
[![](../../minus.gif)](../../#)<it>
  <id>CREATEMETABASE</id>  <name>ITEM</name>  <value />
  </it>
[![](../../minus.gif)](../../#)<it>
  <id>CREATEPLATFORMVERSION</id>  <name>ITEM</name>  <value>Предварительная версия 9.7.55459.459 Master x64</value>  </it>
[![](../../minus.gif)](../../#)<it>
  <id>CREATETIMESTAMP</id>  <name>ITEM</name>  <value>2020-04-15T07:25:32.299Z</value>  </it>
  </its>
  </customProperties>
  <createUserName>ADMIN</createUserName>  <createUserSID>PS-1-1</createUserSID>  <createWorkstation>FS\IVANOV</createWorkstation>  <createTimestamp>2020-04-15T12:25:32.299</createTimestamp>  <createMetabase />
  <createPlatformVersion>Предварительная версия 9.7.55459.459 Master x64</createPlatformVersion>[![](../../minus.gif)](../../#)<log>
  <updateUserName />
  <updateUserSid />
  <updateWorkstation />
  <updateStartTimestamp>1899-12-30T00:00:00.000</updateStartTimestamp>  <updateFinishTimestamp>1899-12-30T00:00:00.000</updateFinishTimestamp>  <updateMetabase />
  <hasErrors>0</hasErrors>  <hasConflicts>0</hasConflicts>  <hasOnResolve>0</hasOnResolve>  <isFinished>0</isFinished>  <inProgress>0</inProgress>  <hasErrorSkipped>0</hasErrorSkipped>  </log>
[![](../../minus.gif)](../../#)<execute>
  <resolveTimeout>600000</resolveTimeout>  <state>None</state>  </execute>
  </meta>
  </GetMbUpdateResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetMbUpdate" :
  {
   "tMbUpdate" :
    {
     "id" : "S1!M!S!MbUpd1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "all" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetMbUpdateResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!MbUpd1"
    },
   "meta" :
    {
     "rootFolder" :
      {
       "k" : "4294967295",
       "index" : "-1",
       "type" : "Folder",
       "label" : "",
       "condition" : "",
       "enabled" : "1",
       "folder" :
        {
         "childrenCount" : "1"
        }
      },
     "properties" :
      {
       "its" : ""
      },
     "eventsNode" :
      {
       "k" : "2",
       "index" : "0",
       "type" : "Object",
       "label" : "Модуль обновления",
       "condition" : "",
       "parentNode" : "1",
       "enabled" : "1",
       "folder" :
        {
         "childrenCount" : "0"
        },
       "object" :
        {
         "object" :
          {
           "@ts" : "2020-04-14T10:19:08.502Z",
           "@ds" : "",
           "@isShortcut" : "0",
           "@isLink" : "0",
           "@ver" : "3",
           "@hf" : "0",
           "i" : "M_UPDATE",
           "n" : "Модуль обновления",
           "k" : "198414",
           "c" : "1537",
           "p" : "198413",
           "h" : "0",
           "hasPrv" : "0",
           "ic" : "0"
          },
         "isSaved" : "0",
         "updatePart" : "Metadata",
         "updateType" :
          {
           "it" :
            [
              "Bound",
              "BindById"
            ]
          },
         "parent" : "9",
         "includeChildrenDependencies" : "2",
         "updateOrder" : "Default",
         "includeData" : "0",
         "alterType" : "Default",
         "objectId" : "M_UPDATE",
         "objectName" : "Модуль обновления",
         "objectOldKey" : "198414",
         "constraint" : "None",
         "boundType" : "ById",
         "unboundType" : "Bound",
         "forceUniqueId" : "0",
         "forceKeepId" : "0",
         "accessTokenOptions" : "Default",
         "sdApplyLog" : "",
         "version" : "3",
         "originalMetabase" : ""
        }
      },
     "reflectObjectsRights" :
      {
       "it" :
        [
          "Ask",
          "AfterEach"
        ]
      },
     "applyOptions" :
      {
       "it" :
        [
          "SetCurrentStamp",
          "AutoCheckConflicts"
        ]
      },
     "updateType" :
      {
       "it" :
        [
          "Bound",
          "BindByKey"
        ]
      },
     "description" : "",
     "constraint" : "None",
     "boundType" : "ByKey",
     "localCopy" : "0",
     "useLocalVcsFiles" : "1",
     "subjects" :
      {
       "its" : ""
      },
     "allowReplaceSD" : "0",
     "mandatoryAccess" :
      {
       "isValid" : "1",
       "isSimple" : "0"
      },
     "securityConflictsLog" : "",
     "accessAllowed" : "Full",
     "requireUserUpdateMessage" : "0",
     "priorDataLinkDependentsClear" : "0",
     "customProperties" :
      {
       "its" :
        {
         "it" :
          [
            {
             "id" : "CREATEUSERNAME",
             "name" : "ITEM",
             "value" : "ADMIN"
            },
            {
             "id" : "CREATEUSERSID",
             "name" : "ITEM",
             "value" : "PS-1-1"
            },
            {
             "id" : "CREATEWORKSTATION",
             "name" : "ITEM",
             "value" : "FS\IVANOV"
            },
            {
             "id" : "CREATEMETABASE",
             "name" : "ITEM",
             "value" : ""
            },
            {
             "id" : "CREATEPLATFORMVERSION",
             "name" : "ITEM",
             "value" : "Предварительная версия 9.2.55459.459 Master x64"
            },
            {
             "id" : "CREATETIMESTAMP",
             "name" : "ITEM",
             "value" : "2020-04-15T07:25:32.299Z"
            }
          ]
        }
      },
     "createUserName" : "ADMIN",
     "createUserSID" : "PS-1-1",
     "createWorkstation" : "FS\IVANOV",
     "createTimestamp" : "2020-04-15T12:25:32.299",
     "createMetabase" : "",
     "createPlatformVersion" : "Предварительная версия 9.2.55459.459 Master x64",
     "log" :
      {
       "updateUserName" : "",
       "updateUserSid" : "",
       "updateWorkstation" : "",
       "updateStartTimestamp" : "1899-12-30T00:00:00.000",
       "updateFinishTimestamp" : "1899-12-30T00:00:00.000",
       "updateMetabase" : "",
       "hasErrors" : "0",
       "hasConflicts" : "0",
       "hasOnResolve" : "0",
       "isFinished" : "0",
       "inProgress" : "0",
       "hasErrorSkipped" : "0"
      },
     "execute" :
      {
       "resolveTimeout" : "600000",
       "state" : "None"
      }
    }
  }
}


public static GetMbUpdateResult GetUpdateInfo(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetMbUpdate()
    {
        tArg = new GetMbUpdateArg()
        {
            pattern = new MbUpdateMdPattern()
            {
                all = true
            }
        },
        tMbUpdate = new MbUpdateId() { id = moniker }
    };
    //Получение информации об обновлении
    var result = somClient.GetMbUpdate(tGet);
    return result;
}


См. также:


[Операции
 для работы с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
