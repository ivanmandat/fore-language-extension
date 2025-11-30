# Создание модели

Создание модели
-


**


# Создание модели


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для создания модели. В запросе передается экземпляр открытого контейнера
 моделирования и шаблон метаданных для создания модели. В ответе приходит
 созданная модель.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE</id>  </tMs>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <scenarios>Get</scenarios>  <period>true</period>[![](../../../minus.gif)](../../../#)<item>
[![](../../../minus.gif)](../../../#)<problem>
[![](../../../minus.gif)](../../../#)<metamodel>
  <calculationChain>Get</calculationChain>  <mmParams>Get</mmParams>  <tag>true</tag>[![](../../../minus.gif)](../../../#)<calcChainPattern>
[![](../../../minus.gif)](../../../#)<modelPattern>
[![](../../../minus.gif)](../../../#)<transform>
  <inputs>Get</inputs>  <outputs>Get</outputs>  <formulaCount>true</formulaCount>[![](../../../minus.gif)](../../../#)<formulas>
  <method />
  </formulas>
  <displayId>true</displayId>[![](../../../minus.gif)](../../../#)<equationsFormula>
  <method />
  </equationsFormula>
  <series>Get</series>  <kind>true</kind>  <displaySettings>true</displaySettings>  <additionalAttributes>true</additionalAttributes>  <calculationType>true</calculationType>  <calculationDirection>true</calculationDirection>[![](../../../minus.gif)](../../../#)<transformVariable>
  <slices>Get</slices>[![](../../../minus.gif)](../../../#)<transformSlice>
  <selection>Get</selection>  </transformSlice>
  </transformVariable>
  </transform>
  <stochastic>true</stochastic>  <calculationPeriod>true</calculationPeriod>  <useModelPeriod>true</useModelPeriod>  <useExistingData>true</useExistingData>  <treatNullsAsZeros>true</treatNullsAsZeros>  <autoName>true</autoName>  <generatedName>true</generatedName>  <period>true</period>  <isExclusive>true</isExclusive>  <useAutoPeriod>true</useAutoPeriod>  </modelPattern>
  </calcChainPattern>
[![](../../../minus.gif)](../../../#)<visualControllerPattern>
  <variableRubricatorKey>true</variableRubricatorKey>  <useSourceName>true</useSourceName>  <levelFormat>Short</levelFormat>  </visualControllerPattern>
  </metamodel>
  <scenarios>Get</scenarios>  <details>true</details>  <useSavedCoefficients>true</useSavedCoefficients>  </problem>
  </item>
  </pattern>
[![](../../../minus.gif)](../../../#)<execParams>
[![](../../../minus.gif)](../../../#)<execCreateProblem>
  <parent>1581</parent>  <id />
  <name>Модель</name>  </execCreateProblem>
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
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="**ключ 306480**" isShortcut="**0**" isLink="**0**" ver="**6**" hf="**0**">
  <i>MODELSPACE</i>  <n>Контейнер моделирования</n>  <k>306480</k>  <c>5121</c>  <p>1580</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<period>
  <start>1968-12-08</start>  <end>2022-12-31</end>  </period>
[![](../../../minus.gif)](../../../#)<scenarios>
[![](../../../minus.gif)](../../../#)<nodes>
[![](../../../minus.gif)](../../../#)<it isFolder="**0**">
  <k>306497</k>  <id>OBJ306497</id>  <n>Базовый</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<scenDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>OBJ306497</i>  <n>Базовый</n>  <k>306497</k>  <c>5124</c>  <p>306485</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </scenDesc>
  <internalKey>306497</internalKey>  </it>
  </nodes>
  </scenarios>
[![](../../../minus.gif)](../../../#)<item>
  <k>306669</k>  <id>OBJ306669</id>  <n>Модель</n>  <vis>1</vis>  <type>Problem</type>[![](../../../minus.gif)](../../../#)<problemMd>
[![](../../../minus.gif)](../../../#)<metamodel>
  <k>306670</k>[![](../../../minus.gif)](../../../#)<calculationChain>
  <its />
  </calculationChain>
[![](../../../minus.gif)](../../../#)<mmParams>
  <its />
  </mmParams>
[![](../../../minus.gif)](../../../#)<visualController>
  <userRPath />
  <isRExist>0</isRExist>  </visualController>
[![](../../../minus.gif)](../../../#)<suppressEmptyFilter>
  <suppressEmpty>0</suppressEmpty>  <suppressEmptyArea>SerieBounds</suppressEmptyArea>  </suppressEmptyFilter>
  <readOnly>0</readOnly>  <variableTestUseR>0</variableTestUseR>  <calculateIdentOnFact>0</calculateIdentOnFact>  </metamodel>
[![](../../../minus.gif)](../../../#)<scenarios>
  <its />
  </scenarios>
[![](../../../minus.gif)](../../../#)<details>
[![](../../../minus.gif)](../../../#)<period>
  <identificationStartDate>1968-01-01</identificationStartDate>  <identificationEndDate>2020-12-31</identificationEndDate>  <forecastStartDate>2020-12-31</forecastStartDate>  <forecastEndDate>2020-12-31</forecastEndDate>  <identificationStartDateParamID />
  <identificationEndDateParamID />
  <forecastStartDateParamID />
  <forecastEndDateParamID />
  <autoPeriod>0</autoPeriod>  <identificationStartOffset>0</identificationStartOffset>  <identificationEndOffset>0</identificationEndOffset>  <forecastEndOffset>0</forecastEndOffset>  <isIdentStartCorrect>1</isIdentStartCorrect>  <isIdentEndCorrect>1</isIdentEndCorrect>  <isForecastEndCorrect>1</isForecastEndCorrect>  </period>
  <currentPoint>2020-12-31</currentPoint>  </details>
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
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "scenarios" : "Get",
       "period" : "true",
       "item" :
        {
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
                   "inputs" : "Get",
                   "outputs" : "Get",
                   "formulaCount" : "true",
                   "formulas" :
                    {
                     "method" : ""
                    },
                   "displayId" : "true",
                   "equationsFormula" :
                    {
                     "method" : ""
                    },
                   "series" : "Get",
                   "kind" : "true",
                   "displaySettings" : "true",
                   "additionalAttributes" : "true",
                   "calculationType" : "true",
                   "calculationDirection" : "true",
                   "transformVariable" :
                    {
                     "slices" : "Get",
                     "transformSlice" :
                      {
                       "selection" : "Get"
                      }
                    }
                  },
                 "stochastic" : "true",
                 "calculationPeriod" : "true",
                 "useModelPeriod" : "true",
                 "useExistingData" : "true",
                 "treatNullsAsZeros" : "true",
                 "autoName" : "true",
                 "generatedName" : "true",
                 "period" : "true",
                 "isExclusive" : "true",
                 "useAutoPeriod" : "true"
                }
              },
             "visualControllerPattern" :
              {
               "variableRubricatorKey" : "true",
               "useSourceName" : "true",
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
       "execCreateProblem" :
        {
         "parent" : "1581",
         "id" : "",
         "name" : "Модель"
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
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "ключ 306480",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "6",
         "@hf" : "0",
         "i" : "MODELSPACE",
         "n" : "Контейнер моделирования",
         "k" : "306480",
         "c" : "5121",
         "p" : "1580",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "period" :
      {
       "start" : "1968-12-08",
       "end" : "2022-12-31"
      },
     "scenarios" :
      {
       "nodes" :
        {
         "it" :
          {
           "@isFolder" : "0",
           "k" : "306497",
           "id" : "OBJ306497",
           "n" : "Базовый",
           "vis" : "1",
           "scenDesc" :
            {
             "@ds" : "",
             "@isShortcut" : "0",
             "@isLink" : "0",
             "@ver" : "2",
             "@hf" : "0",
             "i" : "OBJ306497",
             "n" : "Базовый",
             "k" : "306497",
             "c" : "5124",
             "p" : "306485",
             "h" : "0",
             "hasPrv" : "0",
             "ic" : "0",
             "trackElementDependents" : "0"
            },
           "internalKey" : "306497"
          }
        }
      },
     "item" :
      {
       "k" : "306669",
       "id" : "OBJ306669",
       "n" : "Модель",
       "vis" : "1",
       "type" : "Problem",
       "problemMd" :
        {
         "metamodel" :
          {
           "k" : "306670",
           "calculationChain" :
            {
             "its" : ""
            },
           "mmParams" :
            {
             "its" : ""
            },
           "visualController" :
            {
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
             "identificationStartDate" : "1968-01-01",
             "identificationEndDate" : "2020-12-31",
             "forecastStartDate" : "2020-12-31",
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
           "currentPoint" : "2020-12-31"
          },
         "useSavedCoefficients" : "0",
         "useScenarios" : "0",
         "readOnly" : "0"
        }
      }
    }
  }
}


public static string GetMsNewModel(MsId ms, uint msKey, string id, string modelName)
{
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Параметры выполнения операции
    var getMsOp = new GetMs()
    {
        tArg = new GetMsArg()
        {
            // Шаблон извлечения метаданных
            pattern = new MsMdPattern()
            {
                scenarios = ListOperation.Get,
                period = true,
                item = new MsItemPattern()
                {   // Шаблон метаданных модели
                    problem = new MsProblemPattern()
                    {
                        details = true,
                        scenarios = ListOperation.Get,
                        useSavedCoefficients = true,
                        // Шаблон метаданных метамодели
                        metamodel = new MsMetaModelPattern()
                        {
                            calculationChain = ListOperation.Get,
                            mmParams = ListOperation.Get,
                            tag = true,
                            // Шаблон метаданных для цепочки расчёта
                            calcChainPattern = new MsCalculationChainPattern()
                            {
                                modelPattern = new MsModelPattern()
                                {
                                    transform = new MsFormulaTransformPattern()
                                    {
                                        inputs = ListOperation.Get,
                                        outputs = ListOperation.Get,
                                        kind = true,
                                        formulaCount = true,
                                        formulas = new TsFormulaPattern()
                                        {
                                            method = new TsMethodPattern()
                                        },
                                        displayId = true,
                                        equationsFormula = new TsFormulaPattern()
                                        {
                                            method = new TsMethodPattern()
                                        },
                                        series = ListOperation.Get,
                                        displaySettings = true,
                                        additionalAttributes = true,
                                        calculationType = true,
                                        calculationDirection = true,
                                        transformVariable = new MsFormulaTransformVariablePattern()
                                        {
                                            slices = ListOperation.Get,
                                            transformSlice = new MsFormulaTransformSlicePattern()
                                            {
                                                selection = ListOperation.Get
                                            }
                                        }
                                    },
                                    stochastic = true,
                                    calculationPeriod = true,
                                    useModelPeriod = true,
                                    useExistingData = true,
                                    treatNullsAsZeros = true,
                                    autoName = true,
                                    period = true,
                                    isExclusive = true,
                                    useAutoPeriod = true,
                                    generatedName = true
                                }
                            },
                            visualControllerPattern = new MsMetaModelVisualControllerPattern()
                            {
                                variableRubricatorKey = true,
                                levelFormat = MsLevelFormat.Short,
                                useSourceName = true
                            }
                        }
                    }
                }
            },
            execParams = new MsMdExecParams()
            {
                execCreateProblem = new MsMdExecCreateProblem()
                {
                    id = id,
                    name = modelName,
                    key = null,
                    parent = msKey
                }
            }
        },
        tMs = ms
    };
    // Создание модели
    var result = somClient.GetMs(getMsOp);
    return result.meta.item.id;
}


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
