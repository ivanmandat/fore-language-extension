# Настройка агрегации в кубе: Операция SetCube

Настройка агрегации в кубе: Операция SetCube
-


**


# Настройка агрегации в кубе


Ниже приведён пример использования операции [SetCube](../SetCube.htm)
 для настройки агрегации по уровням календарного измерения куба. В запросе
 передаются моникёр куба, шаблон, указывающий необходимость добавить настройки
 агрегации по измерению и обновленные метаданные, содержащие эти настройки.
 В ответе приходит обновленная информация о вариантах отображения куба.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetCube xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCube xmlns="****">
  <id>S1!M!S!C1</id>  </tCube>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <dests>Change</dests>[![](../../../minus.gif)](../../../#)<dest>
  <dims>Change</dims>[![](../../../minus.gif)](../../../#)<dim>
  <aggregations>Add</aggregations>  </dim>
  </dest>
  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<dests>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>[![](../../../minus.gif)](../../../#)<dims>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>112</k>[![](../../../minus.gif)](../../../#)<aggs>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <factKey>1</factKey>  <isChrono>true</isChrono>[![](../../../minus.gif)](../../../#)<chronoAggregator>
[![](../../../minus.gif)](../../../#)<dimLevelsAggregators>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <operation>UniformDisaggregation</operation>[![](../../../minus.gif)](../../../#)<sourceLevel>
  <k>1</k>  <id>YEARS</id>  <n>Годы</n>  <vis>true</vis>  </sourceLevel>
  </it>
  </its>
  </dimLevelsAggregators>
  </chronoAggregator>
  </it>
  </its>
  </aggs>
  </it>
  </its>
  </dims>
  </it>
  </its>
  </dests>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <dests>Get</dests>[![](../../../minus.gif)](../../../#)<dest>
  <all>true</all>  </dest>
  </metaGet>
  </tArg>
  </SetCube>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetCubeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!C1</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**34**" hf="**0**">
  <i>STD_CUBE</i>  <n>Куб</n>  <k>5857</k>  <c>1281</c>  <p>5845</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<dests>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>STD_CUBE</id>  <n>Куб</n>  <vis>1</vis>  <isDefault>1</isDefault>  <hideTrivialFactDimension>0</hideTrivialFactDimension>  <selSetOriginalOnly>0</selSetOriginalOnly>  <useMultiAttrTable>0</useMultiAttrTable>[![](../../../minus.gif)](../../../#)<datasets>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>5878</k>  <id>OBJ5877</id>  <n>Таблица</n>  <vis>1</vis>  <aggrType>Server</aggrType>  <useSubqueryOptimization>1</useSubqueryOptimization>  </it>
  </its>
  </datasets>
[![](../../../minus.gif)](../../../#)<dims>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>5858</k>  <id>FACTS</id>  <n>Факты</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**34**" hf="**0**">
  <i>FACTS</i>  <n>Факты</n>  <k>5858</k>  <c>1028</c>  <p>5857</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </obDesc>
  <aggsPresent>0</aggsPresent>  <hierAggsPresent>0</hierAggsPresent>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>112</k>  <id>CALENDAR</id>  <n>Календарь</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**6**" hf="**0**">
  <i>CALENDAR</i>  <n>Календарь</n>  <k>112</k>  <c>1026</c>  <p>103</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </obDesc>
[![](../../../minus.gif)](../../../#)<aggs>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>4294967295</k>  <id>CHRONOLOGICALMATRIXAGGREGATOR</id>  <n>Хронологический агрегатор</n>  <vis>1</vis>  <factKey>1</factKey>  <isChrono>1</isChrono>[![](../../../minus.gif)](../../../#)<operations>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <n>Нет</n>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <n>Среднее хронологическое</n>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <n>Равномерная дезагрегация</n>  </it>
  </its>
  </operations>
[![](../../../minus.gif)](../../../#)<chronoAggregator>
[![](../../../minus.gif)](../../../#)<defaultLevelAggregation>
  <k>4294967295</k>  <vis>1</vis>  <includeChildren>1</includeChildren>  <useDefaultLevelAggregation>0</useDefaultLevelAggregation>  <operation>None</operation>  <resultToSourceLevel>1</resultToSourceLevel>  <resultToThisLevel>1</resultToThisLevel>  </defaultLevelAggregation>
[![](../../../minus.gif)](../../../#)<dimLevelsAggregators>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>HALF_YEARS</id>  <n>Полугодия</n>  <vis>1</vis>  <includeChildren>0</includeChildren>  <useDefaultLevelAggregation>0</useDefaultLevelAggregation>  <operation>UniformDisaggregation</operation>[![](../../../minus.gif)](../../../#)<sourceLevel>
  <k>1</k>  <id>YEARS</id>  <n>Годы</n>  <vis>1</vis>  </sourceLevel>
  <resultToSourceLevel>1</resultToSourceLevel>  <resultToThisLevel>0</resultToThisLevel>  </it>
  </its>
  </dimLevelsAggregators>
  <levelAggsPresent>1</levelAggsPresent>  </chronoAggregator>
  </it>
  </its>
  </aggs>
  <aggsPresent>1</aggsPresent>  <hierAggsPresent>0</hierAggsPresent>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>116</k>  <id>DIM_1</id>  <n>Dim_1</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**3**" hf="**0**">
  <i>DIM_1</i>  <n>Dim_1</n>  <k>116</k>  <c>1025</c>  <p>103</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </obDesc>
  <aggsPresent>0</aggsPresent>  <hierAggsPresent>0</hierAggsPresent>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>991</k>  <id>DIM_2</id>  <n>Dim_2</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>DIM_2</i>  <n>Dim_2</n>  <k>991</k>  <c>1025</c>  <p>10529</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </obDesc>
  <aggsPresent>0</aggsPresent>  <hierAggsPresent>0</hierAggsPresent>  </it>
  </its>
  </dims>
[![](../../../minus.gif)](../../../#)<dimBinds>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <dimKey>5858</dimKey>[![](../../../minus.gif)](../../../#)<datasets>
[![](../../../minus.gif)](../../../#)<it>
  <dsKey>5878</dsKey>  </it>
  </datasets>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <dimKey>112</dimKey>[![](../../../minus.gif)](../../../#)<datasets>
[![](../../../minus.gif)](../../../#)<it>
  <dsKey>5878</dsKey>  <indexKey>7</indexKey>  <indexBlockKey>3</indexBlockKey>[![](../../../minus.gif)](../../../#)<attrs>
[![](../../../minus.gif)](../../../#)<it>
  <attrKey>2</attrKey>  <fieldId>V_DATE</fieldId>  <formula>OBJ5877.V_DATE</formula>  </it>
  </attrs>
  </it>
  </datasets>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <dimKey>116</dimKey>[![](../../../minus.gif)](../../../#)<datasets>
[![](../../../minus.gif)](../../../#)<it>
  <dsKey>5878</dsKey>  <indexKey>121</indexKey>  <indexBlockKey>120</indexBlockKey>[![](../../../minus.gif)](../../../#)<attrs>
[![](../../../minus.gif)](../../../#)<it>
  <attrKey>118</attrKey>  <fieldId>DIM1_ID</fieldId>  <formula>OBJ5877.DIM1_ID</formula>  </it>
  </attrs>
  </it>
  </datasets>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <dimKey>991</dimKey>[![](../../../minus.gif)](../../../#)<datasets>
[![](../../../minus.gif)](../../../#)<it>
  <dsKey>5878</dsKey>  <indexKey>1001</indexKey>  <indexBlockKey>1000</indexBlockKey>[![](../../../minus.gif)](../../../#)<attrs>
[![](../../../minus.gif)](../../../#)<it>
  <attrKey>993</attrKey>  <fieldId>DIM2_ID</fieldId>  <formula>OBJ5877.DIM2_ID</formula>  </it>
  </attrs>
  </it>
  </datasets>
  </it>
  </its>
  </dimBinds>
[![](../../../minus.gif)](../../../#)<factBinds>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <factKey>1</factKey>  <dsKey>5878</dsKey>  <formula>OBJ5877.VALUE</formula>  <aggrType>None</aggrType>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <factKey>1</factKey>  <dsKey>5878</dsKey>  <formula />
  <aggrType>None</aggrType>  </it>
  </its>
  </factBinds>
[![](../../../minus.gif)](../../../#)<calcBinds>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <factKey>1</factKey>  <formula />
  <revFactKey />
  <revFormula />
  <timeLagLevel>None</timeLagLevel>  <timeForwardLag>0</timeForwardLag>  <timeBackwardLag>0</timeBackwardLag>  <includeInSelection>0</includeInSelection>  <calcMethod>BySelection</calcMethod>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <factKey>1</factKey>  <formula />
  <revFactKey />
  <revFormula />
  <timeLagLevel>None</timeLagLevel>  <timeForwardLag>0</timeForwardLag>  <timeBackwardLag>0</timeBackwardLag>  <includeInSelection>0</includeInSelection>  <calcMethod>ByMatrix</calcMethod>  </it>
  </its>
  </calcBinds>
[![](../../../minus.gif)](../../../#)<relations>
  <its />
  </relations>
[![](../../../minus.gif)](../../../#)<selControl>
  <its />
  <options />
  <isEmpty>1</isEmpty>  </selControl>
  </it>
  </its>
  </dests>
  <supportsRub>0</supportsRub>  </meta>
  </SetCubeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetCube" :
  {
   "tCube" :
    {
     "id" : "S1!M!S!C1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "dests" : "Change",
       "dest" :
        {
         "dims" : "Change",
         "dim" :
          {
           "aggregations" : "Add"
          }
        }
      },
     "meta" :
      {
       "dests" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "1",
               "dims" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "k" : "112",
                       "aggs" :
                        {
                         "its" :
                          {
                           "it" :
                            [
                              {
                               "k" : "0",
                               "factKey" : "1",
                               "isChrono" : "true",
                               "chronoAggregator" :
                                {
                                 "dimLevelsAggregators" :
                                  {
                                   "its" :
                                    {
                                     "it" :
                                      [
                                        {
                                         "k" : "2",
                                         "operation" : "UniformDisaggregation",
                                         "sourceLevel" :
                                          {
                                           "k" : "1",
                                           "id" : "YEARS",
                                           "n" : "Годы",
                                           "vis" : "true"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
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
       "dests" : "Get",
       "dest" :
        {
         "all" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetCubeResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!C1"
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
         "@ver" : "34",
         "@hf" : "0",
         "i" : "STD_CUBE",
         "n" : "Куб",
         "k" : "5857",
         "c" : "1281",
         "p" : "5845",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "dests" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "STD_CUBE",
             "n" : "Куб",
             "vis" : "1",
             "isDefault" : "1",
             "hideTrivialFactDimension" : "0",
             "selSetOriginalOnly" : "0",
             "useMultiAttrTable" : "0",
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
                     "vis" : "1",
                     "aggrType" : "Server",
                     "useSubqueryOptimization" : "1"
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
                     "vis" : "1",
                     "obDesc" :
                      {
                       "@ds" : "",
                       "@isShortcut" : "0",
                       "@isLink" : "0",
                       "@ver" : "34",
                       "@hf" : "0",
                       "i" : "FACTS",
                       "n" : "Факты",
                       "k" : "5858",
                       "c" : "1028",
                       "p" : "5857",
                       "h" : "0",
                       "hasPrv" : "0",
                       "ic" : "0"
                      },
                     "aggsPresent" : "0",
                     "hierAggsPresent" : "0"
                    },
                    {
                     "k" : "112",
                     "id" : "CALENDAR",
                     "n" : "Календарь",
                     "vis" : "1",
                     "obDesc" :
                      {
                       "@ds" : "",
                       "@isShortcut" : "0",
                       "@isLink" : "0",
                       "@ver" : "6",
                       "@hf" : "0",
                       "i" : "CALENDAR",
                       "n" : "Календарь",
                       "k" : "112",
                       "c" : "1026",
                       "p" : "103",
                       "h" : "0",
                       "hasPrv" : "0",
                       "ic" : "0"
                      },
                     "aggs" :
                      {
                       "its" :
                        {
                         "it" :
                          [
                            {
                             "k" : "4294967295",
                             "id" : "CHRONOLOGICALMATRIXAGGREGATOR",
                             "n" : "Хронологический агрегатор",
                             "vis" : "1",
                             "factKey" : "1",
                             "isChrono" : "1",
                             "operations" :
                              {
                               "its" :
                                {
                                 "it" :
                                  [
                                    {
                                     "k" : "0",
                                     "n" : "Нет"
                                    },
                                    {
                                     "k" : "1",
                                     "n" : "Среднее хронологическое"
                                    },
                                    {
                                     "k" : "2",
                                     "n" : "Равномерная дезагрегация"
                                    }
                                  ]
                                }
                              },
                             "chronoAggregator" :
                              {
                               "defaultLevelAggregation" :
                                {
                                 "k" : "4294967295",
                                 "vis" : "1",
                                 "includeChildren" : "1",
                                 "useDefaultLevelAggregation" : "0",
                                 "operation" : "None",
                                 "resultToSourceLevel" : "1",
                                 "resultToThisLevel" : "1"
                                },
                               "dimLevelsAggregators" :
                                {
                                 "its" :
                                  {
                                   "it" :
                                    [
                                      {
                                       "k" : "2",
                                       "id" : "HALF_YEARS",
                                       "n" : "Полугодия",
                                       "vis" : "1",
                                       "includeChildren" : "0",
                                       "useDefaultLevelAggregation" : "0",
                                       "operation" : "UniformDisaggregation",
                                       "sourceLevel" :
                                        {
                                         "k" : "1",
                                         "id" : "YEARS",
                                         "n" : "Годы",
                                         "vis" : "1"
                                        },
                                       "resultToSourceLevel" : "1",
                                       "resultToThisLevel" : "0"
                                      }
                                    ]
                                  }
                                },
                               "levelAggsPresent" : "1"
                              }
                            }
                          ]
                        }
                      },
                     "aggsPresent" : "1",
                     "hierAggsPresent" : "0"
                    },
                    {
                     "k" : "116",
                     "id" : "DIM_1",
                     "n" : "Dim_1",
                     "vis" : "1",
                     "obDesc" :
                      {
                       "@ds" : "",
                       "@isShortcut" : "0",
                       "@isLink" : "0",
                       "@ver" : "3",
                       "@hf" : "0",
                       "i" : "DIM_1",
                       "n" : "Dim_1",
                       "k" : "116",
                       "c" : "1025",
                       "p" : "103",
                       "h" : "0",
                       "hasPrv" : "0",
                       "ic" : "0"
                      },
                     "aggsPresent" : "0",
                     "hierAggsPresent" : "0"
                    },
                    {
                     "k" : "991",
                     "id" : "DIM_2",
                     "n" : "Dim_2",
                     "vis" : "1",
                     "obDesc" :
                      {
                       "@ds" : "",
                       "@isShortcut" : "0",
                       "@isLink" : "0",
                       "@ver" : "0",
                       "@hf" : "0",
                       "i" : "DIM_2",
                       "n" : "Dim_2",
                       "k" : "991",
                       "c" : "1025",
                       "p" : "10529",
                       "h" : "0",
                       "hasPrv" : "0",
                       "ic" : "0"
                      },
                     "aggsPresent" : "0",
                     "hierAggsPresent" : "0"
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
                    },
                    {
                     "factKey" : "1",
                     "dsKey" : "5878",
                     "formula" : "",
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
                     "includeInSelection" : "0",
                     "calcMethod" : "BySelection"
                    },
                    {
                     "factKey" : "1",
                     "formula" : "",
                     "revFactKey" : "",
                     "revFormula" : "",
                     "timeLagLevel" : "None",
                     "timeForwardLag" : "0",
                     "timeBackwardLag" : "0",
                     "includeInSelection" : "0",
                     "calcMethod" : "ByMatrix"
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
               "isEmpty" : "1"
              }
            }
          ]
        }
      },
     "supportsRub" : "0"
    }
  }
}


public static SetCubeResult AddAggregation(CubeId moniker, DmMetadata calendarDim)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetCube()
    {
        tArg = new SetCubeArg()
        {
            //Шаблон, указывающий необходимость настроить агрегацию в кубе
            pattern = new CubeMdPattern()
            {
                dests = ListOperation.Change,
                dest = new CubeDestPattern()
                {
                    dims = ListOperation.Change,
                    dim = new CubeDimPattern()
                    {
                        aggregations = ListOperation.Add
                    }
                }
            },
            //Обновленные метаданные, содержащие параметры агрегации: равномерная дезагризация с уровня календаря
            meta = new CubeMd
            {
                dests = new CubeDests()
                {
                    its = new CubeDest[]
                    {
                        new  CubeDest()
                        {
                            k = 1,
                            dims = new CubeDims()
                            {
                                its = new CubeDim[]
                                {
                                    new CubeDim()
                                    {
                                        k = calendarDim.descr.k,
                                        aggs = new MatrixAggregators()
                                        {
                                            its = new MatrixAggregator[]
                                            {
                                                new MatrixAggregator()
                                                {
                                                    factKey = "1",
                                                    isChrono = true,
                                                    chronoAggregator = new ChronoMatrixAggregator()
                                                    {
                                                        dimLevelsAggregators = new ChronoDimLevelAggregators()
                                                        {
                                                            its= new ChronoDimLevelAggregator[]
                                                            {
                                                                new ChronoDimLevelAggregator()
                                                                {
                                                                    k = calendarDim.levs[1].k, // Уровень-приёмник
                                                                    operation = ChronologicalAggregatorOper.UniformDisaggregation,
                                                                    sourceLevel = calendarDim.levs[0] //Уровень-источник
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            metaGet = new CubeMdPattern()
            {
                dests = ListOperation.Get,
                dest = new CubeDestPattern()
                {
                    all = true
                }
            }
        },
        tCube = moniker
    };
    //Изменение куба
    var result = somClient.SetCube(tSet);
    return result;
}


См. также:


[SetCube:
 Операция](../SetCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
