# UpdCubeCache: Операция

UpdCubeCache: Операция
-


**


# UpdCubeCache


## Синтаксис


bool UpdCubeCache(CubeId tCube, UpdCubeCacheArg
 tArg)


## Параметры


tMon. Моникёр
 куба.


tArg. Параметры выполнения
 операции.


## Описание


Операция UpdCubeCache создаёт
 новый или обновляет существующий кеш In-Memory для указанного куба.


## Комментарии


Операция позволяет создать новый кеш или обновить файлы существующего
 кеша In-Memory куба на BI-сервере, с которым осуществляется работа. Если
 осуществляется попытка одновременно выполнить несколько обновлений кеша
 для одного и того же куба, то операции будут выполнены последовательно.
 Обновление кеша производится по указанной отметке куба (поле tArg.sels)
 и для заданного варианта отображения куба (поле tArg.dest).
 Операция возвращает значение True,
 если обновление прошло удачно и False,
 если во время обновления возникли какие-либо ошибки.


Примечание.
 Для корректной работы операции необходимо, чтобы файлы кеша использовались
 только текущим BI-сервером.


## Пример


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<UpdCubeCache xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tCube xmlns="****">
  <id>S1!M!S!C1</id>  </tCube>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<sels>
[![](../../minus.gif)](../../#)<it>
  <k>5858</k>  <id>FACTS</id>[![](../../minus.gif)](../../#)<sel>
  <elSelectOp>Select</elSelectOp>  <elRelative>All</elRelative>  </sel>
  </it>
[![](../../minus.gif)](../../#)<it>
  <k>112</k>  <id>CALENDAR</id>[![](../../minus.gif)](../../#)<sel>
  <elSelectOp>Unknown</elSelectOp>  <elRelative>Unknown</elRelative>[![](../../minus.gif)](../../#)<setCalendarPeriod>
  <active>true</active>  <start>2000-01-01</start>  <end>2000-12-01</end>[![](../../minus.gif)](../../#)<levels>
  <it>Quarter</it>  </levels>
  <append>false</append>  <findOutActive>false</findOutActive>  </setCalendarPeriod>
  </sel>
  </it>
[![](../../minus.gif)](../../#)<it>
  <k>116</k>  <id>DIM_1</id>[![](../../minus.gif)](../../#)<sel>
  <elSelectOp>Select</elSelectOp>  <elRelative>All</elRelative>  </sel>
  </it>
[![](../../minus.gif)](../../#)<it>
  <k>991</k>  <id>DIM_2</id>[![](../../minus.gif)](../../#)<sel>
  <elSelectOp>Select</elSelectOp>  <elRelative>All</elRelative>  </sel>
  </it>
  </sels>
[![](../../minus.gif)](../../#)<dest xsi:type="**q1:CubeDest**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**">
  <k>1</k>  <id>STD_CUBE</id>  <n>Куб</n>  <vis>true</vis>  <isDefault>true</isDefault>  <hideTrivialFactDimension>false</hideTrivialFactDimension>  <selSetOriginalOnly>false</selSetOriginalOnly>  <useMultiAttrTable>false</useMultiAttrTable>[![](../../minus.gif)](../../#)<datasets>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>5878</k>  <id>OBJ5877</id>  <n>Таблица</n>  <vis>true</vis>  <aggrType>Server</aggrType>  <useSubqueryOptimization>true</useSubqueryOptimization>  </it>
  </its>
  </datasets>
[![](../../minus.gif)](../../#)<dims>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>5858</k>  <id>FACTS</id>  <n>Факты</n>  <vis>true</vis>[![](../../minus.gif)](../../#)<obDesc isShortcut="**false**" isLink="**false**" ds="****" ver="**1**" hf="**false**">
  <i>FACTS</i>  <n>Факты</n>  <k>5858</k>  <c>1028</c>  <p>5857</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </obDesc>
  <aggsPresent>false</aggsPresent>  <hierAggsPresent>false</hierAggsPresent>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>112</k>  <id>CALENDAR</id>  <n>Календарь</n>  <vis>true</vis>[![](../../minus.gif)](../../#)<obDesc isShortcut="**false**" isLink="**false**" ds="****" ver="**6**" hf="**false**">
  <i>CALENDAR</i>  <n>Календарь</n>  <k>112</k>  <c>1026</c>  <p>103</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </obDesc>
  <aggsPresent>false</aggsPresent>  <hierAggsPresent>false</hierAggsPresent>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>116</k>  <id>DIM_1</id>  <n>Dim_1</n>  <vis>true</vis>[![](../../minus.gif)](../../#)<obDesc isShortcut="**false**" isLink="**false**" ds="****" ver="**3**" hf="**false**">
  <i>DIM_1</i>  <n>Dim_1</n>  <k>116</k>  <c>1025</c>  <p>103</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </obDesc>
  <aggsPresent>false</aggsPresent>  <hierAggsPresent>false</hierAggsPresent>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>991</k>  <id>DIM_2</id>  <n>Dim_2</n>  <vis>true</vis>[![](../../minus.gif)](../../#)<obDesc isShortcut="**false**" isLink="**false**" ds="****" ver="**0**" hf="**false**">
  <i>DIM_2</i>  <n>Dim_2</n>  <k>991</k>  <c>1025</c>  <p>10529</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </obDesc>
  <aggsPresent>false</aggsPresent>  <hierAggsPresent>false</hierAggsPresent>  </it>
  </its>
  </dims>
[![](../../minus.gif)](../../#)<dimBinds>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <dimKey>5858</dimKey>[![](../../minus.gif)](../../#)<datasets>
[![](../../minus.gif)](../../#)<it>
  <dsKey>5878</dsKey>  </it>
  </datasets>
  </it>
[![](../../minus.gif)](../../#)<it>
  <dimKey>112</dimKey>[![](../../minus.gif)](../../#)<datasets>
[![](../../minus.gif)](../../#)<it>
  <dsKey>5878</dsKey>  <indexKey>7</indexKey>  <indexBlockKey>3</indexBlockKey>[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<it>
  <attrKey>2</attrKey>  <fieldId>V_DATE</fieldId>  <formula>OBJ5877.V_DATE</formula>  </it>
  </attrs>
  </it>
  </datasets>
  </it>
[![](../../minus.gif)](../../#)<it>
  <dimKey>116</dimKey>[![](../../minus.gif)](../../#)<datasets>
[![](../../minus.gif)](../../#)<it>
  <dsKey>5878</dsKey>  <indexKey>121</indexKey>  <indexBlockKey>120</indexBlockKey>[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<it>
  <attrKey>118</attrKey>  <fieldId>DIM1_ID</fieldId>  <formula>OBJ5877.DIM1_ID</formula>  </it>
  </attrs>
  </it>
  </datasets>
  </it>
[![](../../minus.gif)](../../#)<it>
  <dimKey>991</dimKey>[![](../../minus.gif)](../../#)<datasets>
[![](../../minus.gif)](../../#)<it>
  <dsKey>5878</dsKey>  <indexKey>1001</indexKey>  <indexBlockKey>1000</indexBlockKey>[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<it>
  <attrKey>993</attrKey>  <fieldId>DIM2_ID</fieldId>  <formula>OBJ5877.DIM2_ID</formula>  </it>
  </attrs>
  </it>
  </datasets>
  </it>
  </its>
  </dimBinds>
[![](../../minus.gif)](../../#)<factBinds>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <factKey>1</factKey>  <dsKey>5878</dsKey>  <formula>OBJ5877.VALUE</formula>  <aggrType>None</aggrType>  </it>
  </its>
  </factBinds>
[![](../../minus.gif)](../../#)<calcBinds>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <factKey>1</factKey>  <formula />
  <revFactKey />
  <revFormula />
  <timeLagLevel>None</timeLagLevel>  <timeForwardLag>0</timeForwardLag>  <timeBackwardLag>0</timeBackwardLag>  <includeInSelection>false</includeInSelection>  <calcMethod>BySelection</calcMethod>  </it>
  </its>
  </calcBinds>
[![](../../minus.gif)](../../#)<relations>
  <its />
  </relations>
[![](../../minus.gif)](../../#)<selControl>
  <its />
  <options />
  <isEmpty>true</isEmpty>  </selControl>
  </dest>
  </tArg>
  </UpdCubeCache>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <UpdCubeCacheResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</UpdCubeCacheResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "UpdCubeCache" :
  {
   "tCube" :
    {
     "id" : "S1!M!S!C1"
    },
   "tArg" :
    {
     "sels" :
      {
       "it" :
        [
          {
           "k" : "5858",
           "id" : "FACTS",
           "sel" :
            {
             "elSelectOp" : "Select",
             "elRelative" : "All"
            }
          },
          {
           "k" : "112",
           "id" : "CALENDAR",
           "sel" :
            {
             "elSelectOp" : "Unknown",
             "elRelative" : "Unknown",
             "setCalendarPeriod" :
              {
               "active" : "true",
               "start" : "2000-01-01",
               "end" : "2000-12-01",
               "levels" :
                {
                 "it" : "Quarter"
                },
               "append" : "false",
               "findOutActive" : "false"
              }
            }
          },
          {
           "k" : "116",
           "id" : "DIM_1",
           "sel" :
            {
             "elSelectOp" : "Select",
             "elRelative" : "All"
            }
          },
          {
           "k" : "991",
           "id" : "DIM_2",
           "sel" :
            {
             "elSelectOp" : "Select",
             "elRelative" : "All"
            }
          }
        ]
      },
     "dest" :
      {
       "@type" : "q1:CubeDest",
       "k" : "1",
       "id" : "STD_CUBE",
       "n" : "Куб",
       "vis" : "true",
       "isDefault" : "true",
       "hideTrivialFactDimension" : "false",
       "selSetOriginalOnly" : "false",
       "useMultiAttrTable" : "false",
       "datasets" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "5878",
               "id" : "OBJ5877",
               "n" : "Таблица",
               "vis" : "true",
               "aggrType" : "Server",
               "useSubqueryOptimization" : "true"
              }
            ]
          }
        },
       "dims" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "5858",
               "id" : "FACTS",
               "n" : "Факты",
               "vis" : "true",
               "obDesc" :
                {
                 "@ds" : "",
                 "@isShortcut" : "false",
                 "@isLink" : "false",
                 "@ver" : "1",
                 "@hf" : "false",
                 "i" : "FACTS",
                 "n" : "Факты",
                 "k" : "5858",
                 "c" : "1028",
                 "p" : "5857",
                 "h" : "false",
                 "hasPrv" : "false",
                 "ic" : "false"
                },
               "aggsPresent" : "false",
               "hierAggsPresent" : "false"
              },
              {
               "k" : "112",
               "id" : "CALENDAR",
               "n" : "Календарь",
               "vis" : "true",
               "obDesc" :
                {
                 "@ds" : "",
                 "@isShortcut" : "false",
                 "@isLink" : "false",
                 "@ver" : "6",
                 "@hf" : "false",
                 "i" : "CALENDAR",
                 "n" : "Календарь",
                 "k" : "112",
                 "c" : "1026",
                 "p" : "103",
                 "h" : "false",
                 "hasPrv" : "false",
                 "ic" : "false"
                },
               "aggsPresent" : "false",
               "hierAggsPresent" : "false"
              },
              {
               "k" : "116",
               "id" : "DIM_1",
               "n" : "Dim_1",
               "vis" : "true",
               "obDesc" :
                {
                 "@ds" : "",
                 "@isShortcut" : "false",
                 "@isLink" : "false",
                 "@ver" : "3",
                 "@hf" : "false",
                 "i" : "DIM_1",
                 "n" : "Dim_1",
                 "k" : "116",
                 "c" : "1025",
                 "p" : "103",
                 "h" : "false",
                 "hasPrv" : "false",
                 "ic" : "false"
                },
               "aggsPresent" : "false",
               "hierAggsPresent" : "false"
              },
              {
               "k" : "991",
               "id" : "DIM_2",
               "n" : "Dim_2",
               "vis" : "true",
               "obDesc" :
                {
                 "@ds" : "",
                 "@isShortcut" : "false",
                 "@isLink" : "false",
                 "@ver" : "0",
                 "@hf" : "false",
                 "i" : "DIM_2",
                 "n" : "Dim_2",
                 "k" : "991",
                 "c" : "1025",
                 "p" : "10529",
                 "h" : "false",
                 "hasPrv" : "false",
                 "ic" : "false"
                },
               "aggsPresent" : "false",
               "hierAggsPresent" : "false"
              }
            ]
          }
        },
       "dimBinds" :
        {
         "its" :
          {
           "it" :
            [
              {
               "dimKey" : "5858",
               "datasets" :
                {
                 "it" :
                  {
                   "dsKey" : "5878"
                  }
                }
              },
              {
               "dimKey" : "112",
               "datasets" :
                {
                 "it" :
                  {
                   "dsKey" : "5878",
                   "indexKey" : "7",
                   "indexBlockKey" : "3",
                   "attrs" :
                    {
                     "it" :
                      {
                       "attrKey" : "2",
                       "fieldId" : "V_DATE",
                       "formula" : "OBJ5877.V_DATE"
                      }
                    }
                  }
                }
              },
              {
               "dimKey" : "116",
               "datasets" :
                {
                 "it" :
                  {
                   "dsKey" : "5878",
                   "indexKey" : "121",
                   "indexBlockKey" : "120",
                   "attrs" :
                    {
                     "it" :
                      {
                       "attrKey" : "118",
                       "fieldId" : "DIM1_ID",
                       "formula" : "OBJ5877.DIM1_ID"
                      }
                    }
                  }
                }
              },
              {
               "dimKey" : "991",
               "datasets" :
                {
                 "it" :
                  {
                   "dsKey" : "5878",
                   "indexKey" : "1001",
                   "indexBlockKey" : "1000",
                   "attrs" :
                    {
                     "it" :
                      {
                       "attrKey" : "993",
                       "fieldId" : "DIM2_ID",
                       "formula" : "OBJ5877.DIM2_ID"
                      }
                    }
                  }
                }
              }
            ]
          }
        },
       "factBinds" :
        {
         "its" :
          {
           "it" :
            [
              {
               "factKey" : "1",
               "dsKey" : "5878",
               "formula" : "OBJ5877.VALUE",
               "aggrType" : "None"
              }
            ]
          }
        },
       "calcBinds" :
        {
         "its" :
          {
           "it" :
            [
              {
               "factKey" : "1",
               "formula" : "",
               "revFactKey" : "",
               "revFormula" : "",
               "timeLagLevel" : "None",
               "timeForwardLag" : "0",
               "timeBackwardLag" : "0",
               "includeInSelection" : "false",
               "calcMethod" : "BySelection"
              }
            ]
          }
        },
       "relations" :
        {
         "its" : ""
        },
       "selControl" :
        {
         "its" : "",
         "options" : "",
         "isEmpty" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "UpdCubeCacheResult" : "1"
}


public static bool UpdateCache(CubeId moniker, List sels, ItKey destination)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tUpd = new UpdCubeCache()
    {
        tArg = new UpdCubeCacheArg()
        {
            sels = sels.ToArray(),
            dest = destination
        },
        tCube = moniker
    };
    //Обновление кеша
    var result = somClient.UpdCubeCache(tUpd);
    return result;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
