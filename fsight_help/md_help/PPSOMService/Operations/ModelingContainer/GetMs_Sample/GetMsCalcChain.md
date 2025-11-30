# Открытие метамодели

Открытие метамодели
-


**


# Открытие метамодели


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для открытия метамодели. В запросе передаются: экземпляр открытого
 контейнера моделирования и шаблон для открытия метамодели. В ответе
 приходит открытая метамодель.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>CGKEECJHPGLBFOAENHCHCNMCBALKLKEEEKBNGDKPHJENHLDI!M!S!CHPOBOCJHPGLBFOAEIBNAJLANGNCFIOLENLIGJEOCACFCIOLB</id>  </tMs>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <scenarios>None</scenarios>[![](../../../minus.gif)](../../../#)<item>
  <key>89990</key>[![](../../../minus.gif)](../../../#)<problem>
[![](../../../minus.gif)](../../../#)<metamodel>
  <calculationChain>Get</calculationChain>[![](../../../minus.gif)](../../../#)<calcChainPattern>
[![](../../../minus.gif)](../../../#)<metaModelPattern>
  <calculationChain>Get</calculationChain>[![](../../../minus.gif)](../../../#)<calcChainPattern>
[![](../../../minus.gif)](../../../#)<modelPattern>
  <generatedName>true</generatedName>  </modelPattern>
  </calcChainPattern>
  </metaModelPattern>
[![](../../../minus.gif)](../../../#)<modelPattern>
  <generatedName>true</generatedName>  </modelPattern>
  </calcChainPattern>
[![](../../../minus.gif)](../../../#)<visualControllerPattern>
  <variableRubricatorKey>true</variableRubricatorKey>  <freeVariables>true</freeVariables>  </visualControllerPattern>
  </metamodel>
  </problem>
  </item>
  </pattern>
  </tArg>
  </GetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>CGKEECJHPGLBFOAENHCHCNMCBALKLKEEEKBNGDKPHJENHLDI!M!S!CHPOBOCJHPGLBFOAEIBNAJLANGNCFIOLENLIGJEOCACFCIOLB</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**0**" isLink="**0**" fullUrl="**http://v-shp-development.dev.fs.fsight.world/**" ver="**2**" hf="**0**">
  <i>MODELSPACE</i>  <n>Контейнер моделирования</n>  <k>1581</k>  <c>5121</c>  <p>1580</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<item>
  <k>89990</k>  <id>MODEL</id>  <n>MODEL</n>  <vis>1</vis>  <type>Problem</type>[![](../../../minus.gif)](../../../#)<problemMd>
[![](../../../minus.gif)](../../../#)<metamodel>
  <k>89991</k>[![](../../../minus.gif)](../../../#)<calculationChain>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>1</k>  <n>Моделируемая переменная</n>  <vis>1</vis>  <type>Variable</type>  <excluded>0</excluded>  <graphMeta>{"Geometry":{"x":10,"y":10,"width":150,"height":50}}</graphMeta>[![](../../../minus.gif)](../../../#)<chainVariable>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>Моделируемая переменная|A</id>  <n>Моделируемая переменная|A</n>  <vis>1</vis>  <variableKey>1</variableKey>  <stubKey>89992</stubKey>[![](../../../minus.gif)](../../../#)<selections>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
[![](../../../minus.gif)](../../../#)<id>
  <id>90004</id>  </id>
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
  <fullName>Моделируемая переменная|A</fullName>  <originalName>Моделируемая переменная</originalName>  <originalShortName>Моделируемая переменная</originalShortName>  <useCustomName>0</useCustomName>  </chainVariable>
  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <k>2</k>  <n>Входная переменная</n>  <vis>1</vis>  <type>Variable</type>  <excluded>0</excluded>  <graphMeta>{"Geometry":{"x":10,"y":70,"width":150,"height":50}}</graphMeta>[![](../../../minus.gif)](../../../#)<chainVariable>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>Входная переменная|A</id>  <n>Входная переменная|A</n>  <vis>1</vis>  <variableKey>2</variableKey>  <stubKey>89992</stubKey>[![](../../../minus.gif)](../../../#)<selections>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
[![](../../../minus.gif)](../../../#)<id>
  <id>90004</id>  </id>
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
  <fullName>Входная переменная|A</fullName>  <originalName>Входная переменная</originalName>  <originalShortName>Входная переменная</originalShortName>  <useCustomName>0</useCustomName>  </chainVariable>
  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <k>3</k>  <id>OBJ3</id>  <n>Моделируемая переменная|A[t] = A0 + A1*Входная переменная|A[t], (От родителя)-(От родителя)</n>  <vis>1</vis>  <type>Model</type>  <excluded>0</excluded>  <graphMeta />
[![](../../../minus.gif)](../../../#)<model>
  <generatedName>Моделируемая переменная|A[t] = A0 + A1*Входная переменная|A[t]</generatedName>  <readOnly>0</readOnly>  </model>
  </Item>
  </its>
  </calculationChain>
[![](../../../minus.gif)](../../../#)<visualController>
  <variableRubricatorKey>89992</variableRubricatorKey>[![](../../../minus.gif)](../../../#)<freeVariables>
  <its />
  </freeVariables>
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
     "id" : "CGKEECJHPGLBFOAENHCHCNMCBALKLKEEEKBNGDKPHJENHLDI!M!S!CHPOBOCJHPGLBFOAEIBNAJLANGNCFIOLENLIGJEOCACFCIOLB"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "scenarios" : "None",
       "item" :
        {
         "key" : "89990",
         "problem" :
          {
           "metamodel" :
            {
             "calculationChain" : "Get",
             "calcChainPattern" :
              {
               "metaModelPattern" :
                {
                 "calculationChain" : "Get",
                 "calcChainPattern" :
                  {
                   "modelPattern" :
                    {
                     "generatedName" : "true"
                    }
                  }
                },
               "modelPattern" :
                {
                 "generatedName" : "true"
                }
              },
             "visualControllerPattern" :
              {
               "variableRubricatorKey" : "true",
               "freeVariables" : "true"
              }
            }
          }
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
     "id" : "CGKEECJHPGLBFOAENHCHCNMCBALKLKEEEKBNGDKPHJENHLDI!M!S!CHPOBOCJHPGLBFOAEIBNAJLANGNCFIOLENLIGJEOCACFCIOLB"
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
         "@ver" : "2",
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
       "k" : "89990",
       "id" : "MODEL",
       "n" : "MODEL",
       "vis" : "1",
       "type" : "Problem",
       "problemMd" :
        {
         "metamodel" :
          {
           "k" : "89991",
           "calculationChain" :
            {
             "its" :
              {
               "Item" :
                [
                  {
                   "k" : "1",
                   "n" : "Моделируемая переменная",
                   "vis" : "1",
                   "type" : "Variable",
                   "excluded" : "0",
                   "graphMeta" : "{"Geometry":{"x":10,"y":10,"width":150,"height":50}}",
                   "chainVariable" :
                    {
                     "slice" :
                      {
                       "k" : "0",
                       "id" : "Моделируемая переменная|A",
                       "n" : "Моделируемая переменная|A",
                       "vis" : "1",
                       "variableKey" : "1",
                       "stubKey" : "89992",
                       "selections" :
                        {
                         "its" :
                          {
                           "Item" :
                            {
                             "id" :
                              {
                               "id" : "90004"
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
                     "fullName" : "Моделируемая переменная|A",
                     "originalName" : "Моделируемая переменная",
                     "originalShortName" : "Моделируемая переменная",
                     "useCustomName" : "0"
                    }
                  },
                  {
                   "k" : "2",
                   "n" : "Входная переменная",
                   "vis" : "1",
                   "type" : "Variable",
                   "excluded" : "0",
                   "graphMeta" : "{"Geometry":{"x":10,"y":70,"width":150,"height":50}}",
                   "chainVariable" :
                    {
                     "slice" :
                      {
                       "k" : "0",
                       "id" : "Входная переменная|A",
                       "n" : "Входная переменная|A",
                       "vis" : "1",
                       "variableKey" : "2",
                       "stubKey" : "89992",
                       "selections" :
                        {
                         "its" :
                          {
                           "Item" :
                            {
                             "id" :
                              {
                               "id" : "90004"
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
                     "fullName" : "Входная переменная|A",
                     "originalName" : "Входная переменная",
                     "originalShortName" : "Входная переменная",
                     "useCustomName" : "0"
                    }
                  },
                  {
                   "k" : "3",
                   "id" : "OBJ3",
                   "n" : "Моделируемая переменная|A[t] = A0 + A1*Входная переменная|A[t], (От родителя)-(От родителя)",
                   "vis" : "1",
                   "type" : "Model",
                   "excluded" : "0",
                   "graphMeta" : "",
                   "model" :
                    {
                     "generatedName" : "Моделируемая переменная|A[t] = A0 + A1*Входная переменная|A[t]",
                     "readOnly" : "0"
                    }
                  }
                ]
              }
            },
           "visualController" :
            {
             "variableRubricatorKey" : "89992",
             "freeVariables" :
              {
               "its" : ""
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


public static MsMetaModel GetMsCalcChain(MsId ms, ulong modelKey)
{
    var getMsOp = new GetMs();
    // Задаем параметры выполнения операции
    getMsOp.tMs = ms;
    getMsOp.tArg = new GetMsArg()
    {  // Задаем общий шаблон извлечения данных

        pattern = new MsMdPattern()
        {
            scenarios = ListOperation.None,
            item = new MsItemPattern()
            {   // Задаем ключ открываемой модели
                key = modelKey,
                // Задаем шаблон извлечения данных модели
                problem = new MsProblemPattern()
                {   // Задаем шаблон извлечения данных метамодели
                    metamodel = new MsMetaModelPattern()

                    {   // Задаем шаблон извлечения данных цепочки расчёта
                        calculationChain = ListOperation.Get,
                        calcChainPattern = new MsCalculationChainPattern()
                        {
                            metaModelPattern = new MsMetaModelPattern()
                            {   // Задаем шаблон извлечения данных цепочки расчёта
                                calculationChain = ListOperation.Get,
                                calcChainPattern = new MsCalculationChainPattern()
                                {
                                    modelPattern = new MsModelPattern() { generatedName = true}

                                }
                            },
                            modelPattern = new MsModelPattern(){ generatedName = true}
                        },
                        // Задаем шаблон извлечения данных для визуального построения метамодели
                        visualControllerPattern = new MsMetaModelVisualControllerPattern()
                        {
                            variableRubricatorKey = true,
                            freeVariables = true

                        }
                    }
                }
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Открываем модель
    GetMsResult getMsResult = somClient.GetMs(getMsOp);

    MsMetaModel mModel = getMsResult.meta.item.problemMd.metamodel;
    // Получаем цепочку расчёта
    MsCalculationChainEntries calcChain = mModel.calculationChain;
    // Выводим данные о цепочке в окно консоли
    Console.WriteLine("Цепочка расчёта: ");
    foreach (MsCalculationChainEntry calcEl in calcChain.its)
    {
        switch(calcEl.type)
        {
            case MsCalculationChainType.Model:

                Console.WriteLine("".PadRight(2) + "модель: " + calcEl.model.generatedName);
                break;
            case MsCalculationChainType.MetaModel:
                Console.WriteLine("".PadRight(2) + "метамодель с ключом: " + calcEl.metaModel.k);
                break;
        };
        Console.WriteLine("".PadRight(4) + "элемент исключён из расчёта: " + calcEl.excluded);
        Console.WriteLine("".PadRight(4) + "ключ родительского элемента: " + calcEl.parentKey);
    }
    return mModel;
}


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
