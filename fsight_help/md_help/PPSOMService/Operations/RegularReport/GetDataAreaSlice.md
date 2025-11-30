# GetDataAreaSlice: Операция

GetDataAreaSlice: Операция
-


**


# GetDataAreaSlice


## Синтаксис


DataAreaSlice GetDataAreaSlice(string mon, DataAreaSlice
 tArg)


## Параметры


mon. Моникёр
 для работы со срезом аналитической области данных.


tArg. Настройки среза, которые
 необходимо получить.


## Описание


Операция GetDataAreaSlice получает
 информацию о срезе аналитической области данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «DataArea!DataSources!ключ
 источника!DataSourceSlices!ключ среза» для работы с настройками
 среза, а в поле tArg задайте
 пустые значения или значения по умолчанию для тех полей, значения которых
 необходимо получить. Моникёр может быть получен при выполнении операции
 [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будут полученные настройки среза аналитической
 области данных.


## Пример


Ниже приведён пример получения информации о измерениях среза данных.
 В запросе передаётся моникёр среза аналитической области данных и список
 получаемых полей. В ответе возвращается полученная информация об измерениях.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDataAreaSlice xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">MFMABINKFPPDGOAEOBOOGFNHBKBGDINECKCPBCDFBECFODJM!M!S!PJGOCAMNKFPPDGOAEBKLCKKHMBCAFDKDEMLAJMEJFLDNGLJMJ!DataArea!DataSources!1!DataSourceSlices!1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>1</k>[![](../../minus.gif)](../../#)<pivotSlice>
[![](../../minus.gif)](../../#)<pivot>
[![](../../minus.gif)](../../#)<dims>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id />
  <n />
[![](../../minus.gif)](../../#)<dimMetadata>
[![](../../minus.gif)](../../#)<id>
  <id />
  </id>
[![](../../minus.gif)](../../#)<data>
[![](../../minus.gif)](../../#)<selection>
  <selectedCount>-1</selectedCount>  </selection>
  </data>
[![](../../minus.gif)](../../#)<els>
[![](../../minus.gif)](../../#)<id>
  <id />
  </id>
  </els>
  </dimMetadata>
  </it>
  </its>
  </dims>
  </pivot>
  </pivotSlice>
  </tArg>
  </GetDataAreaSlice>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDataAreaSliceResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">1</k>[![](../../minus.gif)](../../#)<pivotSlice xmlns="****">
[![](../../minus.gif)](../../#)<pivot>
[![](../../minus.gif)](../../#)<dims>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>339501</k>  <id>FACTS</id>  <n>Факты</n>[![](../../minus.gif)](../../#)<dimMetadata>
[![](../../minus.gif)](../../#)<id>
  <id />
  </id>
[![](../../minus.gif)](../../#)<data>
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>FACTS</i>  <n>Факты</n>  <k>339501</k>  <c>1028</c>  <p>339499</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  <openArgs />
  </obInst>
[![](../../minus.gif)](../../#)<selection>
  <selectedCount>1</selectedCount>[![](../../minus.gif)](../../#)<schema>
  <k>-1</k>  <vis>1</vis>  <applyOnlyOnce>0</applyOnlyOnce>  <onceApplied>1</onceApplied>  <applyOnRebuild>0</applyOnRebuild>  </schema>
  <allowToChangeElementGroup>1</allowToChangeElementGroup>  </selection>
  <isAbacSecured>0</isAbacSecured>  </data>
[![](../../minus.gif)](../../#)<els>
  <els />
  <totalCount>1</totalCount>[![](../../minus.gif)](../../#)<id>
  <id />
  </id>
[![](../../minus.gif)](../../#)<selectionInfo>
[![](../../minus.gif)](../../#)<firstSelected>
  <n>Значение</n>  <k>1</k>  <h>0</h>  <o>0</o>  </firstSelected>
[![](../../minus.gif)](../../#)<lastSelected>
  <n>Значение</n>  <k>1</k>  <h>0</h>  <o>0</o>  </lastSelected>
  <selectedCount>1</selectedCount>[![](../../minus.gif)](../../#)<schema>
  <k>-1</k>  <vis>1</vis>  <applyOnlyOnce>0</applyOnlyOnce>  <onceApplied>1</onceApplied>  <applyOnRebuild>0</applyOnRebuild>  </schema>
  </selectionInfo>
  </els>
  </dimMetadata>
  </it>
[![](../../minus.gif)](../../#)<it>
  <k>339497</k>  <id>OBJ339497</id>  <n>Календарь</n>[![](../../minus.gif)](../../#)<dimMetadata>
[![](../../minus.gif)](../../#)<id>
  <id />
  </id>
[![](../../minus.gif)](../../#)<data>
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>OBJ339497</i>  <n>Календарь</n>  <k>339497</k>  <c>1026</c>  <p>339494</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  <openArgs />
  </obInst>
[![](../../minus.gif)](../../#)<selection>
  <selectedCount>11</selectedCount>[![](../../minus.gif)](../../#)<schema>
  <k>-1</k>  <vis>1</vis>  <applyOnlyOnce>0</applyOnlyOnce>  <onceApplied>1</onceApplied>  <applyOnRebuild>0</applyOnRebuild>  </schema>
  <allowToChangeElementGroup>1</allowToChangeElementGroup>  </selection>
  <isAbacSecured>0</isAbacSecured>  </data>
[![](../../minus.gif)](../../#)<els>
  <els />
  <totalCount>11</totalCount>[![](../../minus.gif)](../../#)<id>
  <id />
  </id>
[![](../../minus.gif)](../../#)<selectionInfo>
[![](../../minus.gif)](../../#)<firstSelected>
  <n>2010</n>  <k>YEARS:2010</k>  <h>0</h>  <o>0</o>  </firstSelected>
[![](../../minus.gif)](../../#)<lastSelected>
  <n>2020</n>  <k>YEARS:2020</k>  <h>0</h>  <o>0</o>  </lastSelected>
  <selectedCount>11</selectedCount>[![](../../minus.gif)](../../#)<calendarPeriod>
  <active>0</active>  <start>2010-01-01</start>  <end>2020-12-31</end>[![](../../minus.gif)](../../#)<levels>
  <it>Year</it>  </levels>
  </calendarPeriod>
[![](../../minus.gif)](../../#)<schema>
  <k>-1</k>  <vis>1</vis>  <applyOnlyOnce>0</applyOnlyOnce>  <onceApplied>1</onceApplied>  <applyOnRebuild>0</applyOnRebuild>  </schema>
  </selectionInfo>
  </els>
  </dimMetadata>
  </it>
[![](../../minus.gif)](../../#)<it>
  <k>339495</k>  <id>OBJ339495</id>  <n>Справочник</n>[![](../../minus.gif)](../../#)<dimMetadata>
[![](../../minus.gif)](../../#)<id>
  <id />
  </id>
[![](../../minus.gif)](../../#)<data>
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**3**" hf="**0**">
  <i>OBJ339495</i>  <n>Справочник</n>  <k>339495</k>  <c>3076</c>  <p>339494</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  <openArgs />
  </obInst>
[![](../../minus.gif)](../../#)<selection>
  <selectedCount>3</selectedCount>[![](../../minus.gif)](../../#)<schema>
  <k>-1</k>  <vis>1</vis>  <applyOnlyOnce>0</applyOnlyOnce>  <onceApplied>1</onceApplied>  <applyOnRebuild>0</applyOnRebuild>  </schema>
  <allowToChangeElementGroup>1</allowToChangeElementGroup>  </selection>
  <isAbacSecured>0</isAbacSecured>  </data>
[![](../../minus.gif)](../../#)<els>
  <els />
  <totalCount>3</totalCount>[![](../../minus.gif)](../../#)<id>
  <id />
  </id>
[![](../../minus.gif)](../../#)<selectionInfo>
[![](../../minus.gif)](../../#)<firstSelected>
  <n>Приход</n>  <k>1</k>  <h>0</h>  <o>0</o>  </firstSelected>
[![](../../minus.gif)](../../#)<lastSelected>
  <n>Остаток</n>  <k>3</k>  <h>0</h>  <o>0</o>  </lastSelected>
  <selectedCount>3</selectedCount>[![](../../minus.gif)](../../#)<schema>
  <k>-1</k>  <vis>1</vis>  <applyOnlyOnce>0</applyOnlyOnce>  <onceApplied>1</onceApplied>  <applyOnRebuild>0</applyOnRebuild>  </schema>
  </selectionInfo>
  </els>
  </dimMetadata>
  </it>
  </its>
  </dims>
  <drillThrough>0</drillThrough>  </pivot>
  </pivotSlice>
  </GetDataAreaSliceResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDataAreaSlice" :
  {
   "mon" : "MFMABINKFPPDGOAEOBOOGFNHBKBGDINECKCPBCDFBECFODJM!M!S!PJGOCAMNKFPPDGOAEBKLCKKHMBCAFDKDEMLAJMEJFLDNGLJMJ!DataArea!DataSources!1!DataSourceSlices!1",
   "tArg" :
    {
     "k" : "1",
     "pivotSlice" :
      {
       "pivot" :
        {
         "dims" :
          {
           "its" :
            {
             "it" :
              [
                {
                 "k" : "-1",
                 "id" : "",
                 "n" : "",
                 "dimMetadata" :
                  {
                   "id" :
                    {
                     "id" : ""
                    },
                   "data" :
                    {
                     "selection" :
                      {
                       "selectedCount" : "-1"
                      }
                    },
                   "els" :
                    {
                     "id" :
                      {
                       "id" : ""
                      }
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

### JSON-ответ:


{
 "GetDataAreaSliceResult" :
  {
   "k" : "1",
   "pivotSlice" :
    {
     "pivot" :
      {
       "dims" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "339501",
               "id" : "FACTS",
               "n" : "Факты",
               "dimMetadata" :
                {
                 "id" :
                  {
                   "id" : ""
                  },
                 "data" :
                  {
                   "obInst" :
                    {
                     "obDesc" :
                      {
                       "@ds" : "",
                       "@isShortcut" : "0",
                       "@isLink" : "0",
                       "@ver" : "2",
                       "@hf" : "0",
                       "i" : "FACTS",
                       "n" : "Факты",
                       "k" : "339501",
                       "c" : "1028",
                       "p" : "339499",
                       "h" : "0",
                       "hasPrv" : "0",
                       "ic" : "0",
                       "trackElementDependents" : "0",
                       "isPermanent" : "1",
                       "isTemp" : "0"
                      },
                     "openArgs" : ""
                    },
                   "selection" :
                    {
                     "selectedCount" : "1",
                     "schema" :
                      {
                       "k" : "4294967295",
                       "vis" : "1",
                       "applyOnlyOnce" : "0",
                       "onceApplied" : "1",
                       "applyOnRebuild" : "0"
                      },
                     "allowToChangeElementGroup" : "1"
                    },
                   "isAbacSecured" : "0"
                  },
                 "els" :
                  {
                   "els" : "",
                   "totalCount" : "1",
                   "id" :
                    {
                     "id" : ""
                    },
                   "selectionInfo" :
                    {
                     "firstSelected" :
                      {
                       "n" : "Значение",
                       "k" : "1",
                       "h" : "0",
                       "o" : "0"
                      },
                     "lastSelected" :
                      {
                       "n" : "Значение",
                       "k" : "1",
                       "h" : "0",
                       "o" : "0"
                      },
                     "selectedCount" : "1",
                     "schema" :
                      {
                       "k" : "4294967295",
                       "vis" : "1",
                       "applyOnlyOnce" : "0",
                       "onceApplied" : "1",
                       "applyOnRebuild" : "0"
                      }
                    }
                  }
                }
              },
              {
               "k" : "339497",
               "id" : "OBJ339497",
               "n" : "Календарь",
               "dimMetadata" :
                {
                 "id" :
                  {
                   "id" : ""
                  },
                 "data" :
                  {
                   "obInst" :
                    {
                     "obDesc" :
                      {
                       "@ds" : "",
                       "@isShortcut" : "0",
                       "@isLink" : "0",
                       "@ver" : "1",
                       "@hf" : "0",
                       "i" : "OBJ339497",
                       "n" : "Календарь",
                       "k" : "339497",
                       "c" : "1026",
                       "p" : "339494",
                       "h" : "0",
                       "hasPrv" : "0",
                       "ic" : "0",
                       "trackElementDependents" : "0",
                       "isPermanent" : "1",
                       "isTemp" : "0"
                      },
                     "openArgs" : ""
                    },
                   "selection" :
                    {
                     "selectedCount" : "11",
                     "schema" :
                      {
                       "k" : "4294967295",
                       "vis" : "1",
                       "applyOnlyOnce" : "0",
                       "onceApplied" : "1",
                       "applyOnRebuild" : "0"
                      },
                     "allowToChangeElementGroup" : "1"
                    },
                   "isAbacSecured" : "0"
                  },
                 "els" :
                  {
                   "els" : "",
                   "totalCount" : "11",
                   "id" :
                    {
                     "id" : ""
                    },
                   "selectionInfo" :
                    {
                     "firstSelected" :
                      {
                       "n" : "2010",
                       "k" : "YEARS:2010",
                       "h" : "0",
                       "o" : "0"
                      },
                     "lastSelected" :
                      {
                       "n" : "2020",
                       "k" : "YEARS:2020",
                       "h" : "0",
                       "o" : "0"
                      },
                     "selectedCount" : "11",
                     "calendarPeriod" :
                      {
                       "active" : "0",
                       "start" : "2010-01-01",
                       "end" : "2020-12-31",
                       "levels" :
                        {
                         "it" : "Year"
                        }
                      },
                     "schema" :
                      {
                       "k" : "4294967295",
                       "vis" : "1",
                       "applyOnlyOnce" : "0",
                       "onceApplied" : "1",
                       "applyOnRebuild" : "0"
                      }
                    }
                  }
                }
              },
              {
               "k" : "339495",
               "id" : "OBJ339495",
               "n" : "Справочник",
               "dimMetadata" :
                {
                 "id" :
                  {
                   "id" : ""
                  },
                 "data" :
                  {
                   "obInst" :
                    {
                     "obDesc" :
                      {
                       "@ds" : "",
                       "@isShortcut" : "0",
                       "@isLink" : "0",
                       "@ver" : "3",
                       "@hf" : "0",
                       "i" : "OBJ339495",
                       "n" : "Справочник",
                       "k" : "339495",
                       "c" : "3076",
                       "p" : "339494",
                       "h" : "0",
                       "hasPrv" : "0",
                       "ic" : "0",
                       "trackElementDependents" : "0",
                       "isPermanent" : "1",
                       "isTemp" : "0"
                      },
                     "openArgs" : ""
                    },
                   "selection" :
                    {
                     "selectedCount" : "3",
                     "schema" :
                      {
                       "k" : "4294967295",
                       "vis" : "1",
                       "applyOnlyOnce" : "0",
                       "onceApplied" : "1",
                       "applyOnRebuild" : "0"
                      },
                     "allowToChangeElementGroup" : "1"
                    },
                   "isAbacSecured" : "0"
                  },
                 "els" :
                  {
                   "els" : "",
                   "totalCount" : "3",
                   "id" :
                    {
                     "id" : ""
                    },
                   "selectionInfo" :
                    {
                     "firstSelected" :
                      {
                       "n" : "Приход",
                       "k" : "1",
                       "h" : "0",
                       "o" : "0"
                      },
                     "lastSelected" :
                      {
                       "n" : "Остаток",
                       "k" : "3",
                       "h" : "0",
                       "o" : "0"
                      },
                     "selectedCount" : "3",
                     "schema" :
                      {
                       "k" : "4294967295",
                       "vis" : "1",
                       "applyOnlyOnce" : "0",
                       "onceApplied" : "1",
                       "applyOnRebuild" : "0"
                      }
                    }
                  }
                }
              }
            ]
          }
        },
       "drillThrough" : "0"
      }
    }
  }
}


public static DataAreaSlice GetDataAreaSlice(string moniker, uint sourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new GetDataAreaSlice()
    {
        tArg = new DataAreaSlice()
        {
            k = sliceKey,
            pivotSlice = new DataAreaPivotSlice()
            {
                pivot = new PivotMetaData()
                {
                    dims = new PivotDimensions()
                    {
                        its = new PivotDimension[]
                        {
                            new PivotDimension()
                            {
                                id = string.Empty,
                                n = string.Empty,
                                k = uint.MaxValue,
                                dimMetadata = new GetDimMetadataResult()
                                {
                                    data = new DmMetadata()
                                    {
                                        selection = new DmSelectionMeta()
                                        {
                                            selectedCount = -1
                                        }
                                    },
                                    els = new GetDimElementsResult()
                                    {
                                        id = new DmId() { id = string.Empty }
                                    },
                                    id = new DmId(){ id = string.Empty }
                                }
                            }
                        }
                    }
                }
            }
        },
        mon = moniker + "!DataArea!DataSources!" + sourceKey + "!DataSourceSlices!" + sliceKey
    };
    // Получение настроек среза аналитической области данных
    var result = somClient.GetDataAreaSlice(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
