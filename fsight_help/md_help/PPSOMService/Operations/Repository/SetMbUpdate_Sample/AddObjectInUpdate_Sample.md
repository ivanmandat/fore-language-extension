# Добавление объектов в обновление: Операция SetMbUpdate

Добавление объектов в обновление: Операция SetMbUpdate
-


**


# Добавление объектов в обновление


Ниже приведён пример использования операции [SetMbUpdate](../SetMbUpdate.htm)
 для добавления новых объектов в обновление. В запросе передаётся список
 новых объектов, параметры их обновления и шаблон, указывающий необходимость
 добавить новые объекты. В ответе приходит обновлённая информация о дереве
 элементов обновления.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetMbUpdate xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbUpdate xmlns="****">
  <id>S1!M!S!MbUpd1</id>  </tMbUpdate>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
[![](../../../minus.gif)](../../../#)<changeNodesPattern>
  <operation>Add</operation>  <addObjectWithChildren>true</addObjectWithChildren>  </changeNodesPattern>
  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<changeNodes>
[![](../../../minus.gif)](../../../#)<it>
  <type>Folder</type>  <label>Folder for Object</label>  <enabled>true</enabled>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Object</type>  <parentNode>1</parentNode>[![](../../../minus.gif)](../../../#)<object>
[![](../../../minus.gif)](../../../#)<object isShortcut="**false**" isLink="**false**" hf="**false**">
  <i>M_UPDATE</i>  <n>Модуль обновления</n>  <k>198414</k>  <c>1537</c>  <p>198413</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </object>
  <updatePart>Metadata</updatePart>  <boundType>ById</boundType>  </object>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Object</type>  <parentNode>1</parentNode>[![](../../../minus.gif)](../../../#)<object>
[![](../../../minus.gif)](../../../#)<object isShortcut="**false**" isLink="**false**" hf="**false**">
  <i>D_COMPANY</i>  <n>Справочник</n>  <k>198421</k>  <c>3076</c>  <p>198413</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </object>
  <updatePart>DataMetadata</updatePart>  <includeData>true</includeData>  <boundType>ById</boundType>  </object>
  </it>
  </changeNodes>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <node>true</node>[![](../../../minus.gif)](../../../#)<nodePattern>
  <customProperties>false</customProperties>[![](../../../minus.gif)](../../../#)<folder>
  <children>true</children>  <childrenRecursive>true</childrenRecursive>  </folder>
[![](../../../minus.gif)](../../../#)<object>
  <extendedParams />
  </object>
  </nodePattern>
  </metaGet>
  </tArg>
  </SetMbUpdate>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetMbUpdateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!MbUpd1</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<rootFolder>
  <k>-1</k>  <index>-1</index>  <type>Folder</type>  <label />
  <condition />
  <enabled>1</enabled>[![](../../../minus.gif)](../../../#)<folder>
  <childrenCount>1</childrenCount>[![](../../../minus.gif)](../../../#)<children>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <index>0</index>  <type>Folder</type>  <label>Folder for Object</label>  <condition />
  <parentNode>-1</parentNode>  <enabled>1</enabled>[![](../../../minus.gif)](../../../#)<folder>
  <childrenCount>2</childrenCount>[![](../../../minus.gif)](../../../#)<children>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <index>0</index>  <type>Object</type>  <label>Модуль обновления</label>  <condition />
  <parentNode>1</parentNode>  <enabled>1</enabled>[![](../../../minus.gif)](../../../#)<folder>
  <childrenCount>0</childrenCount>  <children />
  </folder>
[![](../../../minus.gif)](../../../#)<object>
[![](../../../minus.gif)](../../../#)<object ts="**2020-04-14T10:19:08.502Z**" ds="****" isShortcut="**0**" isLink="**0**" ver="**3**" hf="**0**">
  <i>M_UPDATE</i>  <n>Модуль обновления</n>  <k>198414</k>  <c>1537</c>  <p>198413</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </object>
  <isSaved>0</isSaved>  <updatePart>Metadata</updatePart>[![](../../../minus.gif)](../../../#)<updateType>
  <it>Bound</it>  <it>BindById</it>  </updateType>
  <parent>3</parent>  <includeChildrenDependencies>2</includeChildrenDependencies>  <updateOrder>Default</updateOrder>  <includeData>0</includeData>  <alterType>Default</alterType>  <objectId>M_UPDATE</objectId>  <objectName>Модуль обновления</objectName>  <objectOldKey>198414</objectOldKey>  <constraint>None</constraint>  <boundType>ById</boundType>  <unboundType>Bound</unboundType>  <forceUniqueId>0</forceUniqueId>  <forceKeepId>0</forceKeepId>  <accessTokenOptions>Default</accessTokenOptions>  <sdApplyLog />
  <version>0</version>  <originalMetabase />
  </object>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>5</k>  <index>1</index>  <type>DataObject</type>  <label>Справочник</label>  <condition />
  <parentNode>1</parentNode>  <enabled>1</enabled>[![](../../../minus.gif)](../../../#)<folder>
  <childrenCount>0</childrenCount>  <children />
  </folder>
[![](../../../minus.gif)](../../../#)<object>
[![](../../../minus.gif)](../../../#)<object ts="**2020-04-14T10:49:39.000Z**" ds="****" isShortcut="**0**" isLink="**0**" ver="**3**" hf="**0**">
  <i>D_COMPANY</i>  <n>Справочник</n>  <k>198421</k>  <c>3076</c>  <p>198413</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </object>
  <isSaved>0</isSaved>  <updatePart>DataMetadata</updatePart>[![](../../../minus.gif)](../../../#)<updateType>
  <it>Bound</it>  <it>BindById</it>  </updateType>
  <parent>3</parent>  <includeChildrenDependencies>2</includeChildrenDependencies>  <updateOrder>Default</updateOrder>  <includeData>1</includeData>  <alterType>Default</alterType>  <objectId>D_COMPANY</objectId>  <objectName>Справочник</objectName>  <objectOldKey>198421</objectOldKey>  <constraint>None</constraint>  <boundType>ById</boundType>  <unboundType>Bound</unboundType>  <forceUniqueId>0</forceUniqueId>  <forceKeepId>0</forceKeepId>  <accessTokenOptions>Default</accessTokenOptions>  <sdApplyLog />
  <version>0</version>  <originalMetabase />
[![](../../../minus.gif)](../../../#)<dataObject>
  <method>All</method>  <primaryKey />
  <referenceConstraintsHandling>Default</referenceConstraintsHandling>  <batchMode>Override</batchMode>  <updateRdsSequence>0</updateRdsSequence>  <requestAdminCredentials>0</requestAdminCredentials>  <isIdentity>0</isIdentity>  <allowExistingRubricatorUpdate>0</allowExistingRubricatorUpdate>  </dataObject>
  </object>
  </it>
  </children>
  </folder>
  </it>
  </children>
  </folder>
  </rootFolder>
  </meta>
  </SetMbUpdateResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetMbUpdate" :
  {
   "tMbUpdate" :
    {
     "id" : "S1!M!S!MbUpd1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "changeNodesPattern" :
        {
         "operation" : "Add",
         "addObjectWithChildren" : "true"
        }
      },
     "meta" :
      {
       "changeNodes" :
        {
         "it" :
          [
            {
             "type" : "Folder",
             "label" : "Folder for Object",
             "enabled" : "true"
            },
            {
             "type" : "Object",
             "parentNode" : "1",
             "object" :
              {
               "object" :
                {
                 "@isShortcut" : "false",
                 "@isLink" : "false",
                 "@hf" : "false",
                 "i" : "M_UPDATE",
                 "n" : "Модуль обновления",
                 "k" : "198414",
                 "c" : "1537",
                 "p" : "198413",
                 "h" : "false",
                 "hasPrv" : "false",
                 "ic" : "false"
                },
               "updatePart" : "Metadata",
               "boundType" : "ById"
              }
            },
            {
             "type" : "Object",
             "parentNode" : "1",
             "object" :
              {
               "object" :
                {
                 "@isShortcut" : "false",
                 "@isLink" : "false",
                 "@hf" : "false",
                 "i" : "D_COMPANY",
                 "n" : "Справочник",
                 "k" : "198421",
                 "c" : "3076",
                 "p" : "198413",
                 "h" : "false",
                 "hasPrv" : "false",
                 "ic" : "false"
                },
               "updatePart" : "DataMetadata",
               "includeData" : "true",
               "boundType" : "ById"
              }
            }
          ]
        }
      },
     "metaGet" :
      {
       "node" : "true",
       "nodePattern" :
        {
         "customProperties" : "false",
         "folder" :
          {
           "children" : "true",
           "childrenRecursive" : "true"
          },
         "object" :
          {
           "extendedParams" : ""
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetMbUpdateResult" :
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
         "childrenCount" : "1",
         "children" :
          {
           "it" :
            {
             "k" : "1",
             "index" : "0",
             "type" : "Folder",
             "label" : "Folder for Object",
             "condition" : "",
             "parentNode" : "4294967295",
             "enabled" : "1",
             "folder" :
              {
               "childrenCount" : "2",
               "children" :
                {
                 "it" :
                  [
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
                       "childrenCount" : "0",
                       "children" : ""
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
                       "parent" : "3",
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
                       "version" : "0",
                       "originalMetabase" : ""
                      }
                    },
                    {
                     "k" : "5",
                     "index" : "1",
                     "type" : "DataObject",
                     "label" : "Справочник",
                     "condition" : "",
                     "parentNode" : "1",
                     "enabled" : "1",
                     "folder" :
                      {
                       "childrenCount" : "0",
                       "children" : ""
                      },
                     "object" :
                      {
                       "object" :
                        {
                         "@ts" : "2020-04-14T10:49:39.000Z",
                         "@ds" : "",
                         "@isShortcut" : "0",
                         "@isLink" : "0",
                         "@ver" : "3",
                         "@hf" : "0",
                         "i" : "D_COMPANY",
                         "n" : "Справочник",
                         "k" : "198421",
                         "c" : "3076",
                         "p" : "198413",
                         "h" : "0",
                         "hasPrv" : "0",
                         "ic" : "0"
                        },
                       "isSaved" : "0",
                       "updatePart" : "DataMetadata",
                       "updateType" :
                        {
                         "it" :
                          [
                            "Bound",
                            "BindById"
                          ]
                        },
                       "parent" : "3",
                       "includeChildrenDependencies" : "2",
                       "updateOrder" : "Default",
                       "includeData" : "1",
                       "alterType" : "Default",
                       "objectId" : "D_COMPANY",
                       "objectName" : "Справочник",
                       "objectOldKey" : "198421",
                       "constraint" : "None",
                       "boundType" : "ById",
                       "unboundType" : "Bound",
                       "forceUniqueId" : "0",
                       "forceKeepId" : "0",
                       "accessTokenOptions" : "Default",
                       "sdApplyLog" : "",
                       "version" : "0",
                       "originalMetabase" : "",
                       "dataObject" :
                        {
                         "method" : "All",
                         "primaryKey" : "",
                         "referenceConstraintsHandling" : "Default",
                         "batchMode" : "Override",
                         "updateRdsSequence" : "0",
                         "requestAdminCredentials" : "0",
                         "isIdentity" : "0",
                         "allowExistingRubricatorUpdate" : "0"
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    }
  }
}


public static SetMbUpdateResult AddObjectInUpdate(MbId mb,  string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetMbUpdate()
    {
        tArg = new SetMbUpdateArg()
        {
            pattern = new MbUpdateMdPattern()
            {
                changeNodesPattern = new MbUpdateSetNodePattern()
                {
                    operation = ListOperation.Add,
                    addObjectWithChildren = true
                }
            },
            meta = new MbUpdateMd()
            {
                changeNodes = new MbUpdateNode[]
                {
                    new MbUpdateNode() // Папка
                    {
                        type = MbUpdateNodeType.Folder,
                        label = "Folder for Object",
                        enabled = true
                    },
                    new MbUpdateNode() //Модуль, будет использоваться как модуль обновления
                    {
                        type = MbUpdateNodeType.Object,
                        parentNode = 1,
                        @object = new MbUpdateObjectNode()
                        {
                            @object = FindObjectById(mb, "M_UPDATE"),
                            updatePart = MbObjectUpdatePart.Metadata,
                            boundType = MbObjectUpdateBoundType.ById
                        }
                    },
                    new MbUpdateNode() //Табличный справочник НСИ
                    {
                        type = MbUpdateNodeType.Object,
                        parentNode = 1,
                        @object = new MbUpdateObjectNode()
                        {
                            @object = FindObjectById(mb, "D_COMPANY"),
                            updatePart = MbObjectUpdatePart.DataMetadata,
                            includeData = true,
                            boundType = MbObjectUpdateBoundType.ById
                        }
                    }
                }
            },
            metaGet = new MbUpdateMdPattern()
            {
                node = true,
                nodePattern = new MbUpdateNodePattern()
                {
                    customProperties = false,
                    folder = new MbUpdateFolderNodePattern()
                    {
                        children = true,
                        childrenRecursive = true
                    },
                    @object = new MbUpdateObjectNodePattern()
                    {
                        extendedParams = new MbUpdateObjectNodeExtendedParamsPattern()
                    }
                }
            }
        },
        tMbUpdate = new MbUpdateId() { id = moniker }
    };
    //Настройка обновления
    var result = somClient.SetMbUpdate(tSet);
    return result;
}


См. также:


[SetMbUpdate](../SetMbUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
