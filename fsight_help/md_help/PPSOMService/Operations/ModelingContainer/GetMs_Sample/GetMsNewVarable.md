# Создание переменной

Создание переменной
-


**


# Создание переменной


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для создания переменной моделирования. В запросе передаются: экземпляр
 открытого контейнера моделирования, шаблон создания переменной и параметры
 выполнения операции. В ответе приходит экземпляр созданной переменной.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>PNFNKEBJINJBFOAEPBFMMOMJFBKHLMJEJJOCFGDCJFPIKDAA!M!S!CIBNLEFBJINJBFOAEPAMCIOMNKJACDBEEHJCOCFBOLMEFOMMM</id>  </tMs>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>[![](../../../minus.gif)](../../../#)<item>
  <key>89669</key>[![](../../../minus.gif)](../../../#)<problem>
[![](../../../minus.gif)](../../../#)<metamodel>
  <calculationChain>Get</calculationChain>  </metamodel>
  </problem>
  </item>
  </pattern>
[![](../../../minus.gif)](../../../#)<execParams>
  <k>0</k>[![](../../../minus.gif)](../../../#)<execCreateVariable>
  <name>MyInputVavable</name>  <level>Year</level>  </execCreateVariable>
  </execParams>
  </tArg>
  </GetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>PNFNKEBJINJBFOAEPBFMMOMJFBKHLMJEJJOCFGDCJFPIKDAA!M!S!CIBNLEFBJINJBFOAEPAMCIOMNKJACDBEEHJCOCFBOLMEFOMMM</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**0**" isLink="**0**" fullUrl="**http://v-shp-development.dev.fs.fsight.world/**" ver="**1**" hf="**0**">
  <i>MODELSPACE</i>  <n>Контейнер моделирования</n>  <k>1581</k>  <c>5121</c>  <p>1580</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<item>
  <k>89669</k>  <id>MODEL_NEW</id>  <n>MODEL_NEW</n>  <vis>1</vis>  <type>Problem</type>[![](../../../minus.gif)](../../../#)<problemMd>
[![](../../../minus.gif)](../../../#)<metamodel>
  <k>89670</k>[![](../../../minus.gif)](../../../#)<calculationChain>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>1</k>  <n>MyInputVavable</n>  <vis>1</vis>  <type>Variable</type>  <excluded>0</excluded>  <graphMeta />
[![](../../../minus.gif)](../../../#)<chainVariable>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>MyInputVavable|A</id>  <n>MyInputVavable|A</n>  <vis>1</vis>  <variableKey>1</variableKey>  <stubKey>89671</stubKey>[![](../../../minus.gif)](../../../#)<selections>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
[![](../../../minus.gif)](../../../#)<id>
  <id>89683</id>  </id>
  <variant>1</variant>  </Item>
  </its>
  </selections>
  <aggregator>None</aggregator>[![](../../../minus.gif)](../../../#)<parametrizedDimensions>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <dimension>0</dimension>  <parameter>0</parameter>  </Item>
  </its>
  </parametrizedDimensions>
[![](../../../minus.gif)](../../../#)<unitInfo>
  <unit>4294967295</unit>  <measure>4294967295</measure>  <baseUnit>4294967295</baseUnit>  <unitsDimensionKey>0</unitsDimensionKey>  </unitInfo>
  <level>Year</level>  </slice>
  <fullName>MyInputVavable|A</fullName>  <originalName>MyInputVavable</originalName>  <originalShortName>MyInputVavable</originalShortName>  <useCustomName>0</useCustomName>  </chainVariable>
  </Item>
  </its>
  </calculationChain>
[![](../../../minus.gif)](../../../#)<visualController>
[![](../../../minus.gif)](../../../#)<chainEntry>
  <k>1</k>  <n>MyInputVavable</n>  <vis>1</vis>  <type>Variable</type>  <excluded>0</excluded>  <graphMeta />
[![](../../../minus.gif)](../../../#)<chainVariable>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>MyInputVavable|A</id>  <n>MyInputVavable|A</n>  <vis>1</vis>  <variableKey>1</variableKey>  <stubKey>89671</stubKey>[![](../../../minus.gif)](../../../#)<selections>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
[![](../../../minus.gif)](../../../#)<id>
  <id>89683</id>  </id>
  <variant>1</variant>  </Item>
  </its>
  </selections>
  <aggregator>None</aggregator>[![](../../../minus.gif)](../../../#)<parametrizedDimensions>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <dimension>0</dimension>  <parameter>0</parameter>  </Item>
  </its>
  </parametrizedDimensions>
[![](../../../minus.gif)](../../../#)<unitInfo>
  <unit>4294967295</unit>  <measure>4294967295</measure>  <baseUnit>4294967295</baseUnit>  <unitsDimensionKey>0</unitsDimensionKey>  </unitInfo>
  <level>Year</level>  </slice>
  <fullName>MyInputVavable|A</fullName>  <originalName>MyInputVavable</originalName>  <originalShortName>MyInputVavable</originalShortName>  <useCustomName>0</useCustomName>  <variableExists>0</variableExists>  </chainVariable>
  </chainEntry>
  <userRPath />
  <isRExist>0</isRExist>  </visualController>
[![](../../../minus.gif)](../../../#)<suppressEmptyFilter>
  <suppressEmpty>0</suppressEmpty>  <suppressEmptyArea>SerieBounds</suppressEmptyArea>  </suppressEmptyFilter>
  <readOnly>0</readOnly>  <variableTestUseR>0</variableTestUseR>  <calculateIdentOnFact>0</calculateIdentOnFact>  </metamodel>
  <useScenarios>0</useScenarios>  <readOnly>0</readOnly>  </problemMd>
  </item>
  </meta>
  </GetMsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetMs" :
  {
   "tMs" :
    {
     "id" : "PNFNKEBJINJBFOAEPBFMMOMJFBKHLMJEJJOCFGDCJFPIKDAA!M!S!CIBNLEFBJINJBFOAEPAMCIOMNKJACDBEEHJCOCFBOLMEFOMMM"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "item" :
        {
         "key" : "89669",
         "problem" :
          {
           "metamodel" :
            {
             "calculationChain" : "Get"
            }
          }
        }
      },
     "execParams" :
      {
       "k" : "0",
       "execCreateVariable" :
        {
         "name" : "MyInputVavable",
         "level" : "Year"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetMsResult" :
  {
   "id" :
    {
     "id" : "PNFNKEBJINJBFOAEPBFMMOMJFBKHLMJEJJOCFGDCJFPIKDAA!M!S!CIBNLEFBJINJBFOAEPAMCIOMNKJACDBEEHJCOCFBOLMEFOMMM"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@fullUrl" : "http:\/\/v-shp-development.dev.fs.fsight.world\/",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "1",
         "@hf" : "0",
         "i" : "MODELSPACE",
         "n" : "Контейнер моделирования",
         "k" : "1581",
         "c" : "5121",
         "p" : "1580",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "item" :
      {
       "k" : "89669",
       "id" : "MODEL_NEW",
       "n" : "MODEL_NEW",
       "vis" : "1",
       "type" : "Problem",
       "problemMd" :
        {
         "metamodel" :
          {
           "k" : "89670",
           "calculationChain" :
            {
             "its" :
              {
               "Item" :
                {
                 "k" : "1",
                 "n" : "MyInputVavable",
                 "vis" : "1",
                 "type" : "Variable",
                 "excluded" : "0",
                 "graphMeta" : "",
                 "chainVariable" :
                  {
                   "slice" :
                    {
                     "k" : "0",
                     "id" : "MyInputVavable|A",
                     "n" : "MyInputVavable|A",
                     "vis" : "1",
                     "variableKey" : "1",
                     "stubKey" : "89671",
                     "selections" :
                      {
                       "its" :
                        {
                         "Item" :
                          {
                           "id" :
                            {
                             "id" : "89683"
                            },
                           "variant" : "1"
                          }
                        }
                      },
                     "aggregator" : "None",
                     "parametrizedDimensions" :
                      {
                       "its" :
                        {
                         "Item" :
                          {
                           "dimension" : "0",
                           "parameter" : "0"
                          }
                        }
                      },
                     "unitInfo" :
                      {
                       "unit" : "4294967295",
                       "measure" : "4294967295",
                       "baseUnit" : "4294967295",
                       "unitsDimensionKey" : "0"
                      },
                     "level" : "Year"
                    },
                   "fullName" : "MyInputVavable|A",
                   "originalName" : "MyInputVavable",
                   "originalShortName" : "MyInputVavable",
                   "useCustomName" : "0"
                  }
                }
              }
            },
           "visualController" :
            {
             "chainEntry" :
              {
               "k" : "1",
               "n" : "MyInputVavable",
               "vis" : "1",
               "type" : "Variable",
               "excluded" : "0",
               "graphMeta" : "",
               "chainVariable" :
                {
                 "slice" :
                  {
                   "k" : "0",
                   "id" : "MyInputVavable|A",
                   "n" : "MyInputVavable|A",
                   "vis" : "1",
                   "variableKey" : "1",
                   "stubKey" : "89671",
                   "selections" :
                    {
                     "its" :
                      {
                       "Item" :
                        {
                         "id" :
                          {
                           "id" : "89683"
                          },
                         "variant" : "1"
                        }
                      }
                    },
                   "aggregator" : "None",
                   "parametrizedDimensions" :
                    {
                     "its" :
                      {
                       "Item" :
                        {
                         "dimension" : "0",
                         "parameter" : "0"
                        }
                      }
                    },
                   "unitInfo" :
                    {
                     "unit" : "4294967295",
                     "measure" : "4294967295",
                     "baseUnit" : "4294967295",
                     "unitsDimensionKey" : "0"
                    },
                   "level" : "Year"
                  },
                 "fullName" : "MyInputVavable|A",
                 "originalName" : "MyInputVavable",
                 "originalShortName" : "MyInputVavable",
                 "useCustomName" : "0",
                 "variableExists" : "0"
                }
              },
             "userRPath" : "",
             "isRExist" : "0"
            },
           "suppressEmptyFilter" :
            {
             "suppressEmpty" : "0",
             "suppressEmptyArea" : "SerieBounds"
            },
           "readOnly" : "0",
           "variableTestUseR" : "0",
           "calculateIdentOnFact" : "0"
          },
         "useScenarios" : "0",
         "readOnly" : "0"
        }
      }
    }
  }
}


public static MsFormulaTransformSlice GetMsNewVarable(MsId ms, uint modelKey, string varName)
{
    // Задаём параметры выполнения операции
    var getMsOp = new GetMs()
    {
        tArg = new GetMsArg()
        {
            execParams = new MsMdExecParams()
            {
                execCreateVariable = new MsMdExecCreateVariable()
                {
                    level = DimCalendarLvl.Year,
                    name = varName
                },
                k = 0
            },
            pattern = new MsMdPattern()
            {
                item = new MsItemPattern()
                {   // Задаём ключ модели, содержащей переменную
                    key = modelKey,
                    problem = new MsProblemPattern()
                    {
                        metamodel = new MsMetaModelPattern()
                        {
                            visualControllerPattern = new MsMetaModelVisualControllerPattern()
                            {
                                levelFormat = MsLevelFormat.Short,
                                useSourceName = false,
                                variableRubricatorKey = true
                            }
                        }
                    }
                }
            }
        },
        tMs = ms
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    var result = somClient.GetMs(getMsOp);
    var newVarable = result.meta.item;
    var visualController = newVarable.problemMd.metamodel.visualController;
    var varSlice = visualController.chainEntry.chainVariable.slice;
    return varSlice;
}


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
