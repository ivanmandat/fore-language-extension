# Удаление уравнения

Удаление уравнения
-


**


# Удаление уравнения


Ниже приведен пример использования операции [GetMs](../GetMs.htm) для удаления уравнения. В запросе
 передаются: экземпляр открытого контейнера моделирования, параметры выполнения
 операции и шаблон получения измененных данных. В результате выполнения
 операция возвращает модель без уравнения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>CEOHFIGABHNBFOAEACLDIHAAFIBLHLNEJJHHIHEGOIMCAOGA!M!S!CPOKJBJGABHNBFOAEFABNMBGBLLNHOPAEHKDKCJFDLLMFBFKJ</id>  </tMs>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <scenarios>Get</scenarios>[![](../../../minus.gif)](../../../#)<item>
  <key>92145</key>[![](../../../minus.gif)](../../../#)<problem>
[![](../../../minus.gif)](../../../#)<metamodel>
  <calculationChain>Get</calculationChain>  <mmParams>Get</mmParams>  <tag>true</tag>[![](../../../minus.gif)](../../../#)<calcChainPattern>
[![](../../../minus.gif)](../../../#)<modelPattern>
[![](../../../minus.gif)](../../../#)<transform>
[![](../../../minus.gif)](../../../#)<transformVariable>
  <slices>Get</slices>[![](../../../minus.gif)](../../../#)<transformSlice>
  <selection>Get</selection>  </transformSlice>
  </transformVariable>
  </transform>
  </modelPattern>
  </calcChainPattern>
[![](../../../minus.gif)](../../../#)<visualControllerPattern>
  <variableRubricatorKey>true</variableRubricatorKey>  <useSourceName>false</useSourceName>  <levelFormat>Short</levelFormat>  </visualControllerPattern>
  </metamodel>
  <scenarios>Get</scenarios>  <details>true</details>  <useSavedCoefficients>true</useSavedCoefficients>  </problem>
  </item>
  </pattern>
[![](../../../minus.gif)](../../../#)<execParams>
[![](../../../minus.gif)](../../../#)<modelKeys>
  <l>3</l>  </modelKeys>
  <execRemoveModel>true</execRemoveModel>  </execParams>
  </tArg>
  </GetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>CEOHFIGABHNBFOAEACLDIHAAFIBLHLNEJJHHIHEGOIMCAOGA!M!S!CPOKJBJGABHNBFOAEFABNMBGBLLNHOPAEHKDKCJFDLLMFBFKJ</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**0**" isLink="**0**" fullUrl="**http://v-shp-development.dev.fs.fsight.world/**" ver="**6**" hf="**0**">
  <i>MODELSPACE</i>  <n>Контейнер моделирования</n>  <k>1581</k>  <c>5121</c>  <p>1580</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<scenarios>
[![](../../../minus.gif)](../../../#)<nodes>
[![](../../../minus.gif)](../../../#)<it isFolder="**0**">
  <k>1628</k>  <id>OBJ1628</id>  <n>Базовый</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<scenDesc isShortcut="**0**" isLink="**0**" fullUrl="**http://v-shp-development.dev.fs.fsight.world/**" ver="**0**" hf="**0**">
  <i>OBJ1628</i>  <n>Базовый</n>  <k>1628</k>  <c>5124</c>  <p>1627</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </scenDesc>
  <internalKey>1629</internalKey>  </it>
[![](../../../minus.gif)](../../../#)<it isFolder="**0**">
  <k>5371</k>  <id>OBJ5371</id>  <n>Базовый (копия1)</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<scenDesc isShortcut="**0**" isLink="**0**" fullUrl="**http://v-shp-development.dev.fs.fsight.world/**" ver="**0**" hf="**0**">
  <i>OBJ5371</i>  <n>Базовый (копия1)</n>  <k>5371</k>  <c>5124</c>  <p>1627</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </scenDesc>
  <internalKey>5372</internalKey>  </it>
  </nodes>
  </scenarios>
[![](../../../minus.gif)](../../../#)<item>
  <k>92145</k>  <id>MODEL_DEL</id>  <n>MODEL_DEL</n>  <vis>1</vis>  <type>Problem</type>[![](../../../minus.gif)](../../../#)<problemMd>
[![](../../../minus.gif)](../../../#)<metamodel>
  <k>92146</k>[![](../../../minus.gif)](../../../#)<calculationChain>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>1</k>  <n>Переменная моделирования 1</n>  <vis>1</vis>  <type>Variable</type>  <excluded>0</excluded>  <graphMeta>{"Geometry":{"x":10,"y":10,"width":150,"height":50}}</graphMeta>[![](../../../minus.gif)](../../../#)<chainVariable>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>Переменная моделирования 1|A</id>  <n>Переменная моделирования 1|A</n>  <vis>1</vis>  <variableKey>1</variableKey>  <stubKey>92147</stubKey>[![](../../../minus.gif)](../../../#)<selections>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
[![](../../../minus.gif)](../../../#)<id>
  <id>92159</id>  </id>
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
  <fullName>Переменная моделирования 1|A</fullName>  <originalName>Переменная моделирования 1</originalName>  <originalShortName>Переменная моделирования 1</originalShortName>  <useCustomName>0</useCustomName>  </chainVariable>
  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <k>3</k>  <n>Переменная моделирования 2</n>  <vis>1</vis>  <type>Variable</type>  <excluded>0</excluded>  <graphMeta>{"Geometry":{"x":10,"y":70,"width":150,"height":50}}</graphMeta>[![](../../../minus.gif)](../../../#)<chainVariable>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>Переменная моделирования 2|A</id>  <n>Переменная моделирования 2|A</n>  <vis>1</vis>  <variableKey>2</variableKey>  <stubKey>92147</stubKey>[![](../../../minus.gif)](../../../#)<selections>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
[![](../../../minus.gif)](../../../#)<id>
  <id>92159</id>  </id>
  <variant>2</variant>  </Item>
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
  <fullName>Переменная моделирования 2|A</fullName>  <originalName>Переменная моделирования 2</originalName>  <originalShortName>Переменная моделирования 2</originalShortName>  <useCustomName>0</useCustomName>  </chainVariable>
  </Item>
  </its>
  </calculationChain>
[![](../../../minus.gif)](../../../#)<mmParams>
  <its />
  </mmParams>
[![](../../../minus.gif)](../../../#)<visualController>
  <variableRubricatorKey>92147</variableRubricatorKey>  <userRPath />
  <isRExist>0</isRExist>  </visualController>
[![](../../../minus.gif)](../../../#)<suppressEmptyFilter>
  <suppressEmpty>0</suppressEmpty>  <suppressEmptyArea>SerieBounds</suppressEmptyArea>  </suppressEmptyFilter>
  <readOnly>0</readOnly>  <variableTestUseR>0</variableTestUseR>  <calculateIdentOnFact>0</calculateIdentOnFact>  </metamodel>
[![](../../../minus.gif)](../../../#)<scenarios>
  <its />
  </scenarios>
[![](../../../minus.gif)](../../../#)<details>
[![](../../../minus.gif)](../../../#)<period>
  <identificationStartDate>1969-01-01</identificationStartDate>  <identificationEndDate>2018-05-23</identificationEndDate>  <forecastStartDate>2018-05-24</forecastStartDate>  <forecastEndDate>2020-12-31</forecastEndDate>  <identificationStartDateParamID />
  <identificationEndDateParamID />
  <forecastStartDateParamID />
  <forecastEndDateParamID />
  <autoPeriod>0</autoPeriod>  <identificationStartOffset>0</identificationStartOffset>  <identificationEndOffset>0</identificationEndOffset>  <forecastEndOffset>0</forecastEndOffset>  <isIdentStartCorrect>1</isIdentStartCorrect>  <isIdentEndCorrect>1</isIdentEndCorrect>  <isForecastEndCorrect>1</isForecastEndCorrect>  </period>
  <currentPoint>2018-05-24</currentPoint>  </details>
  <useSavedCoefficients>0</useSavedCoefficients>  <useScenarios>0</useScenarios>  <readOnly>0</readOnly>  </problemMd>
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
     "id" : "CEOHFIGABHNBFOAEACLDIHAAFIBLHLNEJJHHIHEGOIMCAOGA!M!S!CPOKJBJGABHNBFOAEFABNMBGBLLNHOPAEHKDKCJFDLLMFBFKJ"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "scenarios" : "Get",
       "item" :
        {
         "key" : "92145",
         "problem" :
          {
           "metamodel" :
            {
             "calculationChain" : "Get",
             "mmParams" : "Get",
             "tag" : "true",
             "calcChainPattern" :
              {
               "modelPattern" :
                {
                 "transform" :
                  {
                   "transformVariable" :
                    {
                     "slices" : "Get",
                     "transformSlice" :
                      {
                       "selection" : "Get"
                      }
                    }
                  }
                }
              },
             "visualControllerPattern" :
              {
               "variableRubricatorKey" : "true",
               "useSourceName" : "false",
               "levelFormat" : "Short"
              }
            },
           "scenarios" : "Get",
           "details" : "true",
           "useSavedCoefficients" : "true"
          }
        }
      },
     "execParams" :
      {
       "modelKeys" :
        {
         "l" : "3"
        },
       "execRemoveModel" : "true"
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
     "id" : "CEOHFIGABHNBFOAEACLDIHAAFIBLHLNEJJHHIHEGOIMCAOGA!M!S!CPOKJBJGABHNBFOAEFABNMBGBLLNHOPAEHKDKCJFDLLMFBFKJ"
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
         "@ver" : "6",
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
     "scenarios" :
      {
       "nodes" :
        {
         "it" :
          [
            {
             "@isFolder" : "0",
             "k" : "1628",
             "id" : "OBJ1628",
             "n" : "Базовый",
             "vis" : "1",
             "scenDesc" :
              {
               "@fullUrl" : "http:\/\/v-shp-development.dev.fs.fsight.world\/",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "0",
               "@hf" : "0",
               "i" : "OBJ1628",
               "n" : "Базовый",
               "k" : "1628",
               "c" : "5124",
               "p" : "1627",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0"
              },
             "internalKey" : "1629"
            },
            {
             "@isFolder" : "0",
             "k" : "5371",
             "id" : "OBJ5371",
             "n" : "Базовый (копия1)",
             "vis" : "1",
             "scenDesc" :
              {
               "@fullUrl" : "http:\/\/v-shp-development.dev.fs.fsight.world\/",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "0",
               "@hf" : "0",
               "i" : "OBJ5371",
               "n" : "Базовый (копия1)",
               "k" : "5371",
               "c" : "5124",
               "p" : "1627",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0"
              },
             "internalKey" : "5372"
            }
          ]
        }
      },
     "item" :
      {
       "k" : "92145",
       "id" : "MODEL_DEL",
       "n" : "MODEL_DEL",
       "vis" : "1",
       "type" : "Problem",
       "problemMd" :
        {
         "metamodel" :
          {
           "k" : "92146",
           "calculationChain" :
            {
             "its" :
              {
               "Item" :
                [
                  {
                   "k" : "1",
                   "n" : "Переменная моделирования 1",
                   "vis" : "1",
                   "type" : "Variable",
                   "excluded" : "0",
                   "graphMeta" : "{"Geometry":{"x":10,"y":10,"width":150,"height":50}}",
                   "chainVariable" :
                    {
                     "slice" :
                      {
                       "k" : "0",
                       "id" : "Переменная моделирования 1|A",
                       "n" : "Переменная моделирования 1|A",
                       "vis" : "1",
                       "variableKey" : "1",
                       "stubKey" : "92147",
                       "selections" :
                        {
                         "its" :
                          {
                           "Item" :
                            {
                             "id" :
                              {
                               "id" : "92159"
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
                     "fullName" : "Переменная моделирования 1|A",
                     "originalName" : "Переменная моделирования 1",
                     "originalShortName" : "Переменная моделирования 1",
                     "useCustomName" : "0"
                    }
                  },
                  {
                   "k" : "3",
                   "n" : "Переменная моделирования 2",
                   "vis" : "1",
                   "type" : "Variable",
                   "excluded" : "0",
                   "graphMeta" : "{"Geometry":{"x":10,"y":70,"width":150,"height":50}}",
                   "chainVariable" :
                    {
                     "slice" :
                      {
                       "k" : "0",
                       "id" : "Переменная моделирования 2|A",
                       "n" : "Переменная моделирования 2|A",
                       "vis" : "1",
                       "variableKey" : "2",
                       "stubKey" : "92147",
                       "selections" :
                        {
                         "its" :
                          {
                           "Item" :
                            {
                             "id" :
                              {
                               "id" : "92159"
                              },
                             "variant" : "2"
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
                     "fullName" : "Переменная моделирования 2|A",
                     "originalName" : "Переменная моделирования 2",
                     "originalShortName" : "Переменная моделирования 2",
                     "useCustomName" : "0"
                    }
                  }
                ]
              }
            },
           "mmParams" :
            {
             "its" : ""
            },
           "visualController" :
            {
             "variableRubricatorKey" : "92147",
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
         "scenarios" :
          {
           "its" : ""
          },
         "details" :
          {
           "period" :
            {
             "identificationStartDate" : "1969-01-01",
             "identificationEndDate" : "2018-05-23",
             "forecastStartDate" : "2018-05-24",
             "forecastEndDate" : "2020-12-31",
             "identificationStartDateParamID" : "",
             "identificationEndDateParamID" : "",
             "forecastStartDateParamID" : "",
             "forecastEndDateParamID" : "",
             "autoPeriod" : "0",
             "identificationStartOffset" : "0",
             "identificationEndOffset" : "0",
             "forecastEndOffset" : "0",
             "isIdentStartCorrect" : "1",
             "isIdentEndCorrect" : "1",
             "isForecastEndCorrect" : "1"
            },
           "currentPoint" : "2018-05-24"
          },
         "useSavedCoefficients" : "0",
         "useScenarios" : "0",
         "readOnly" : "0"
        }
      }
    }
  }
}


public static MsItem GetMsDelEq(MsId ms, ulong modelKey, long eqKey)
{
    var getMsOp = new GetMs();
    getMsOp.tMs = ms;
    getMsOp.tArg = new GetMsArg()
    {  // Задаем шаблон изменения данных
        pattern = new MsMdPattern()
        {
            item = new MsItemPattern()
            {
                key = modelKey,
                problem = new MsProblemPattern()
                {
                    details = true,
                    scenarios = ListOperation.Get,
                    useSavedCoefficients = true,
                    metamodel = new MsMetaModelPattern()
                    {
                        tag = true,
                        calculationChain = ListOperation.Get,
                        mmParams = ListOperation.Get,
                        calcChainPattern = new MsCalculationChainPattern()
                        {
                            modelPattern = new MsModelPattern()
                            {
                                transform = new MsFormulaTransformPattern()
                                {
                                    transformVariable = new MsFormulaTransformVariablePattern()
                                    {
                                        slices = ListOperation.Get,
                                        transformSlice = new MsFormulaTransformSlicePattern()
                                        {
                                            selection = ListOperation.Get
                                        }
                                    }
                                }
                            }
                        },
                        visualControllerPattern = new MsMetaModelVisualControllerPattern()
                        {
                            levelFormat = MsLevelFormat.Short,
                            useSourceName = false,
                            variableRubricatorKey = true
                        }
                    }
                }
            },
            scenarios = ListOperation.Get
        },
        execParams = new MsMdExecParams()
        {
            modelKeys = new long[]
            {
                eqKey
            },
            execRemoveModel = true
        }
    }; // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Задаем параметры выполнения операции
    var result = somClient.GetMs(getMsOp);
    return result.meta.item;
}


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
