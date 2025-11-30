# Настройка параметров метода «Фильтр Бакстера-Кинга»

Настройка параметров метода «Фильтр Бакстера-Кинга»
-


**


# Настройка параметров метода «Фильтр Бакстера-Кинга»


Ниже приведен пример использования операции [SetMs](../SetMs.htm) для изменения параметров уравнения.
 В запросе передаются: экземпляр открытого контейнера моделирования, параметры
 выполнения операции, настройки уравнения для метода «Фильтр
 Бакстера-Кинга» и шаблон получения измененных данных. В результате
 выполнения операция возвращает модель, содержащую измененное уравнение.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[-](../../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[-](../../../#)
				 <s:Body
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[-](../../../#)
						 <SetMs
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[-](../../../#)
								 <tMs
								 xmlns="">


										  <id>S46!M!S!C1</id>


									  </tMs>


								[-](../../../#)
								 <tArg
								 xmlns="">


										[-](../../../#)
										 <pattern>


												  <obInst>true</obInst>


												[-](../../../#)
												 <item>


														  <key>5241</key>


														[-](../../../#)
														 <model>


																[-](../../../#)
																 <transform>


																		  <formulas
																		 />


																	  </transform>


															  </model>


													  </item>


											  </pattern>


										[-](../../../#)
										 <meta>


												[-](../../../#)
												 <item>


														  <k>5241</k>


														  <type>Model</type>


														[-](../../../#)
														 <modelMd>


																[-](../../../#)
																 <transform>


																		[-](../../../#)
																		 <formulas>


																				[-](../../../#)
																				 <its>


																						[-](../../../#)
																						 <it>


																								  <k>0</k>


																								  <kind>BandpassFilter</kind>


																								[-](../../../#)
																								 <method>


																										[-](../../../#)
																										 <bandpassFilter>


																												  <missingData
																												 />


																												  <width>3</width>


																												  <frequencyLow>2</frequencyLow>


																												  <frequencyHigh>8</frequencyHigh>


																												  <outputType>CycleSeries</outputType>


																											  </bandpassFilter>


																									  </method>


																							  </it>


																					  </its>


																			  </formulas>


																	  </transform>


															  </modelMd>


													  </item>


											  </meta>


										[-](../../../#)
										 <metaGet>


												  <obInst>true</obInst>


												  <scenarios>Get</scenarios>


												[-](../../../#)
												 <item>


														  <key>2803</key>


														[-](../../../#)
														 <problem>


																[-](../../../#)
																 <metamodel>


																		  <calculationChain>Get</calculationChain>


																		[-](../../../#)
																		 <calcChainPattern>


																				[-](../../../#)
																				 <modelPattern>


																						[-](../../../#)
																						 <transform>


																								  <formulaCount>true</formulaCount>


																								[-](../../../#)
																								 <formulas>


																										  <method
																										 />


																									  </formulas>


																								[-](../../../#)
																								 <equationsFormula>


																										  <method
																										 />


																									  </equationsFormula>


																								  <kind>true</kind>


																							  </transform>


																					  </modelPattern>


																			  </calcChainPattern>


																		[-](../../../#)
																		 <visualControllerPattern>


																				  <variableRubricatorKey>true</variableRubricatorKey>


																				  <chainWorkbookKey>true</chainWorkbookKey>


																				  <freeVariables>true</freeVariables>


																			  </visualControllerPattern>


																	  </metamodel>


															  </problem>


													  </item>


											  </metaGet>


										[-](../../../#)
										 <execParams>


												  <execSaveModel>true</execSaveModel>


											  </execParams>


									  </tArg>


							  </SetMs>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[-](../../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[-](../../../#)
				 <soapenv:Body>


						[-](../../../#)
						 <SetMsResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


								[-](../../../#)
								 <id
								 xmlns="">


										  <id>S46!M!S!C1</id>


									  </id>


								[-](../../../#)
								 <meta
								 xmlns="">


										[-](../../../#)
										 <obInst>


												[-](../../../#)
												 <obDesc
												 isShortcut="**0**">


														  <i>MODELSPACE</i>


														  <n>Контейнер
														 моделирования</n>


														  <k>1581</k>


														  <c>5121</c>


														  <p>1580</p>


														  <h>0</h>


													  </obDesc>


											  </obInst>


										  <dirty>0</dirty>


										[-](../../../#)
										 <scenarios>


												[-](../../../#)
												 <nodes>


														[-](../../../#)
														 <it
														 isFolder="**0**">


																  <k>1628</k>


																  <id>OBJ1628</id>


																  <n>Базовый</n>


																  <vis>1</vis>


																[-](../../../#)
																 <scenDesc
																 isShortcut="**0**">


																		  <i>OBJ1628</i>


																		  <n>Базовый</n>


																		  <k>1628</k>


																		  <c>5124</c>


																		  <p>1627</p>


																		  <h>0</h>


																	  </scenDesc>


															  </it>


													  </nodes>


											  </scenarios>


										[-](../../../#)
										 <item>


												  <k>2803</k>


												  <id>TEMP_MODEL</id>


												  <n>TEMP_MODEL</n>


												  <vis>1</vis>


												  <type>Problem</type>


												[-](../../../#)
												 <problemMd>


														[-](../../../#)
														 <metamodel>


																  <k>2804</k>


																[-](../../../#)
																 <calculationChain>


																		[-](../../../#)
																		 <its>


																				[-](../../../#)
																				 <Item>


																						  <k>5241</k>


																						  <id>OBJ5241</id>


																						  <n>MyOutputVavable[t]
																						 =
																						 A1*MyInputVavable[t]</n>


																						  <vis>1</vis>


																						  <type>Model</type>


																						  <excluded>0</excluded>


																						[-](../../../#)
																						 <model>


																								[-](../../../#)
																								 <transform>


																										  <formulaCount>1</formulaCount>


																										[-](../../../#)
																										 <formulas>


																												[-](../../../#)
																												 <its>


																														[-](../../../#)
																														 <it>


																																  <k>0</k>


																																  <kind>BandpassFilter</kind>


																																[-](../../../#)
																																 <method>


																																		[-](../../../#)
																																		 <bandpassFilter>


																																				[-](../../../#)
																																				 <missingData>


																																						  <specifiedVector
																																						 />


																																						  <method>None</method>


																																						  <methodParameter>5</methodParameter>


																																						  <specifiedValue>0</specifiedValue>


																																					  </missingData>


																																				  <width>3</width>


																																				  <frequencyLow>2.000000</frequencyLow>


																																				  <frequencyHigh>8.000000</frequencyHigh>


																																				  <outputType>CycleSeries</outputType>


																																				[-](../../../#)
																																				 <explained>


																																						[-](../../../#)
																																						 <slice>


																																								  <k>0</k>


																																								  <id>262</id>


																																								  <n>MyOutputVavable</n>


																																								  <vis>1</vis>


																																								  <variableKey>5243</variableKey>


																																								  <stubKey>2805</stubKey>


																																								[-](../../../#)
																																								 <selections>


																																										[-](../../../#)
																																										 <its>


																																												[-](../../../#)
																																												 <Item>


																																														[-](../../../#)
																																														 <id>


																																																  <id>2818</id>


																																															  </id>


																																														  <variant>262</variant>


																																													  </Item>


																																											  </its>


																																									  </selections>


																																								  <aggregator>None</aggregator>


																																								[-](../../../#)
																																								 <parametrizedDimensions>


																																										[-](../../../#)
																																										 <its>


																																												[-](../../../#)
																																												 <Item>


																																														  <dimension>0</dimension>


																																														  <parameter>0</parameter>


																																													  </Item>


																																											  </its>


																																									  </parametrizedDimensions>


																																								[-](../../../#)
																																								 <unitInfo>


																																										  <unit>4294967295</unit>


																																										  <measure>4294967295</measure>


																																										  <baseUnit>4294967295</baseUnit>


																																										  <unitsDimensionKey>0</unitsDimensionKey>


																																									  </unitInfo>


																																								  <level>None</level>


																																							  </slice>


																																						  <lag
																																						 />


																																						  <key>0</key>


																																						  <termToText>{MyOutputVavable[t]}</termToText>


																																						  <termToInnerText>@_5243:0[]</termToInnerText>


																																						[-](../../../#)
																																						 <termInfo>


																																								  <k>4294967295</k>


																																								  <lag>0</lag>


																																								[-](../../../#)
																																								 <inversion>


																																										  <type>None</type>


																																										  <lag>PrecidingValue</lag>


																																										  <previousLag>-1</previousLag>


																																										  <seasonality>None</seasonality>


																																										  <dependence>Linear</dependence>


																																										  <K>3</K>


																																									  </inversion>


																																							  </termInfo>


																																						[-](../../../#)
																																						 <unitInfo>


																																								  <unit>4294967295</unit>


																																								  <measure>4294967295</measure>


																																								  <baseUnit>4294967295</baseUnit>


																																								  <unitsDimensionKey>0</unitsDimensionKey>


																																							  </unitInfo>


																																					  </explained>


																																				[-](../../../#)
																																				 <cycleTerm>


																																						  <k>4294967295</k>


																																					  </cycleTerm>


																																				[-](../../../#)
																																				 <nonCyclicalTerm>


																																						  <k>4294967295</k>


																																					  </nonCyclicalTerm>


																																			  </bandpassFilter>


																																		[-](../../../#)
																																		 <inversionInfo>


																																				  <type>None</type>


																																				  <lag>PrecidingValue</lag>


																																				  <previousLag>-1</previousLag>


																																				  <seasonality>None</seasonality>


																																				  <dependence>Linear</dependence>


																																				  <K>3</K>


																																			  </inversionInfo>


																																	  </method>


																																  <calendarLevel>Year</calendarLevel>


																																  <outputSliceKey>0</outputSliceKey>


																															  </it>


																													  </its>


																											  </formulas>


																										  <kind>Simple</kind>


																									  </transform>


																							  </model>


																					  </Item>


																			  </its>


																	  </calculationChain>


																[-](../../../#)
																 <visualController>


																		  <variableRubricatorKey>2805</variableRubricatorKey>


																		  <chainWorkbookKey>2837</chainWorkbookKey>


																		[-](../../../#)
																		 <freeVariables>


																				  <its
																				 />


																			  </freeVariables>


																	  </visualController>


															  </metamodel>


													  </problemMd>


											  </item>


									  </meta>


							  </SetMsResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


### JSON-запрос:


    {
     "SetMs" :
      {
       "tMs" :
        {
         "id" : "S20!M!S!C1"
        },
       "tArg" :
        {
         "pattern" :
          {

           "obInst" : "true",
           "item" :
            {
             "key" : "3317",
             "model" :
              {
               "transform" :
                {
                 "formulas" : ""
                }

              }
            }
          },
         "meta" :
          {
           "item" :
            {
             "k" : "3317",
             "type" : "Model",
             "modelMd" :

              {
               "transform" :
                {
                 "formulas" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {

                         "k" : "0",
                         "kind" : "BandpassFilter",
                         "method" :
                          {
                           "bandpassFilter" :
                            {
                             "missingData" : "",
                             "width" : "3",
                             "frequencyLow" : "2",
                             "frequencyHigh" : "8",

                             "outputType" : "CycleSeries"
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              }
            }

          },
         "metaGet" :
          {
           "obInst" : "true",
           "scenarios" : "Get",
           "item" :
            {
             "key" : "2803",
             "problem" :
              {

               "metamodel" :
                {
                 "calculationChain" : "Get",
                 "calcChainPattern" :
                  {
                   "modelPattern" :
                    {
                     "transform" :
                      {
                       "formulaCount" : "true",

                       "formulas" :
                        {
                         "method" : ""
                        },
                       "equationsFormula" :
                        {
                         "method" : ""
                        },
                       "kind" : "true"
                      }

                    }
                  },
                 "visualControllerPattern" :
                  {
                   "variableRubricatorKey" : "true",
                   "chainWorkbookKey" : "true",
                   "freeVariables" : "true"
                  }
                }
              }

            }
          },
         "execParams" :
          {
           "execSaveModel" : "true"
          }
        }
      }
    }
  }
}

### JSON-ответ:


    {
     "SetMsResult" :
      {

       "id" :
        {
         "id" : "S20!M!S!C1"
        },
       "meta" :
        {
         "obInst" :
          {
           "obDesc" :
            {

             "@isShortcut" : "0",
             "i" : "MODELSPACE",
             "n" : "Контейнер моделирования",
             "k" : "1581",
             "c" : "5121",
             "p" : "1580",
             "h" : "0"
            }
          },
         "dirty" : "0",

         "scenarios" :
          {
           "nodes" :
            {
             "it" :
              {
               "@isFolder" : "0",
               "k" : "1628",
               "id" : "OBJ1628",
               "n" : "Базовый",

               "vis" : "1",
               "scenDesc" :
                {
                 "@isShortcut" : "0",
                 "i" : "OBJ1628",
                 "n" : "Базовый",
                 "k" : "1628",
                 "c" : "5124",
                 "p" : "1627",
                 "h" : "0"

                }
              }
            }
          },
         "item" :
          {
           "k" : "2803",
           "id" : "TEMP_MODEL",
           "n" : "TEMP_MODEL",
           "vis" : "1",

           "type" : "Problem",
           "problemMd" :
            {
             "metamodel" :
              {
               "k" : "2804",
               "calculationChain" :
                {
                 "its" :
                  {

                   "Item" :
                    {
                     "k" : "3317",
                     "id" : "OBJ3317",
                     "n" : "MyInputVavable[t] = HPFilter(MyInputVavable[t], Степень = 2.000)",
                     "vis" : "1",
                     "type" : "Model",
                     "excluded" : "0",
                     "model" :
                      {

                       "transform" :
                        {
                         "formulaCount" : "1",
                         "formulas" :
                          {
                           "its" :
                            {
                             "it" :
                              [
                                {

                                 "k" : "0",
                                 "kind" : "BandpassFilter",
                                 "method" :
                                  {
                                   "bandpassFilter" :
                                    {
                                     "missingData" :
                                      {
                                       "specifiedVector" : "",
                                       "method" : "None",

                                       "methodParameter" : "5",
                                       "specifiedValue" : "0"
                                      },
                                     "width" : "3",
                                     "frequencyLow" : "2.000000",
                                     "frequencyHigh" : "8.000000",
                                     "outputType" : "CycleSeries",
                                     "explained" :
                                      {
                                       "slice" :

                                        {
                                         "k" : "0",
                                         "id" : "261",
                                         "n" : "MyInputVavable",
                                         "vis" : "1",
                                         "variableKey" : "3319",
                                         "stubKey" : "2805",
                                         "selections" :
                                          {
                                           "its" :

                                            {
                                             "Item" :
                                              {
                                               "id" :
                                                {
                                                 "id" : "2818"
                                                },
                                               "variant" : "261"
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

                                         "level" : "None"
                                        },
                                       "lag" : "",
                                       "key" : "0",
                                       "termToText" : "{MyInputVavable[t]}",
                                       "termToInnerText" : "@_3319:0[]",
                                       "termInfo" :
                                        {
                                         "k" : "4294967295",
                                         "lag" : "0",

                                         "inversion" :
                                          {
                                           "type" : "None",
                                           "lag" : "PrecidingValue",
                                           "previousLag" : "-1",
                                           "seasonality" : "None",
                                           "dependence" : "Linear",
                                           "K" : "3"
                                          }
                                        },

                                       "unitInfo" :
                                        {
                                         "unit" : "4294967295",
                                         "measure" : "4294967295",
                                         "baseUnit" : "4294967295",
                                         "unitsDimensionKey" : "0"
                                        }
                                      },
                                     "cycleTerm" :
                                      {

                                       "k" : "4294967295"
                                      },
                                     "nonCyclicalTerm" :
                                      {
                                       "k" : "4294967295"
                                      }
                                    },
                                   "inversionInfo" :
                                    {
                                     "type" : "None",

                                     "lag" : "PrecidingValue",
                                     "previousLag" : "-1",
                                     "seasonality" : "None",
                                     "dependence" : "Linear",
                                     "K" : "3"
                                    }
                                  },
                                 "calendarLevel" : "Year",
                                 "outputSliceKey" : "0"
                                }

                              ]
                            }
                          },
                         "kind" : "Simple"
                        }
                      }
                    }
                  }
                },
               "visualController" :

                {
                 "variableRubricatorKey" : "2805",
                 "chainWorkbookKey" : "2837",
                 "freeVariables" :
                  {
                   "its" :
                    {
                     "Item" :
                      {
                       "k" : "0",

                       "id" : "262",
                       "n" : "MyOutputVavable",
                       "vis" : "1",
                       "variableKey" : "2840",
                       "stubKey" : "2805",
                       "selections" :
                        {
                         "its" :
                          {
                           "Item" :

                            {
                             "id" :
                              {
                               "id" : "2818"
                              },
                             "variant" : "262"
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
                       "level" : "None"
                      }

                    }
                  }
                }
              }
            }
          }
        }


public static MsItem SetMsBpf(MsId ms, ulong modelKey, ulong eqKey)
{
    //  vars.its.Length
    var setMsOp = new SetMs();
    // Задаем параметры выполнения операции
    setMsOp.tMs = ms;
    setMsOp.tArg = new SetMsArg()
    {  // Задаем шаблон изменения данных
        pattern = new MsMdPattern()
        {
            item = new MsItemPattern()
            {  // Указываем ключ модели
                key = modelKey,
                problem = new MsProblemPattern()
                {
                    metamodel = new MsMetaModelPattern()
                    {
                        calculationChain = ListOperation.Change
                    }
                }
            }
        },
        // Задаем данные, которые необходимо изменить
        meta = new MsMd()
        {
            item = new MsItem()
            {
                k = modelKey,
                type = MsItemType.Problem,
                problemMd = new MsProblem()
                {
                    metamodel = new MsMetaModel()
                    {
                        calculationChain = new MsCalculationChainEntries()
                        {
                            its = new MsCalculationChainEntry[]
                            {
                                new MsCalculationChainEntry()
                                {
                                    k = eqKey,
                                    type = MsCalculationChainType.Model,
                                    model = new MsModel()
                                    {
                                        transform = new MsFormulaTransform()
                                        {
                                            formulas = new TsFormulas()
                                            {
                                                its = new TsFormula[]
                                                {
                                                    new TsFormula()
                                                    {
                                                        kind = TsFormulaKind.BandpassFilter,
                                                        method = new TsMethod()
                                                        {   // Задаем параметры метода «Фильтр Бакстера-Кинга»
                                    bandpassFilter = new TsBandpassFilterMethod()
                                                            {
                                    // Задаём метод обработки пропусков
                                    missingData = new StatMissingData(){},
                                    // Задаём параметры периода цикличности
                                    width = 3,
                                                                frequencyLow = 2,
                                                                frequencyHigh = 8,
                                    // Задаём компоненту, выгружаемую в моделируемую переменную
                                    outputType = TsBPFOutputType.CycleSeries,
                                    // Циклическую и нециклическую компоненты дополнительно не выгружаем
                                    cycleTerm = null,
                                                                nonCyclicalTerm = null
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
        }, // Задаем шаблон извлечения измененных данных
        metaGet = new MsMdPattern()
        {
            scenarios = ListOperation.Get,
            period = true,
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
                        calculationChain = ListOperation.Get,
                        calcChainPattern = new MsCalculationChainPattern()
                        {
                            modelPattern = new MsModelPattern()
                            {
                                transform = new MsFormulaTransformPattern()
                                {
                                    kind = true,
                                    formulaCount = true,
                                    formulas = new TsFormulaPattern()
                                    {
                                        method = new TsMethodPattern() { }
                                    },
                                    equationsFormula = new TsFormulaPattern()
                                    {
                                        method = new TsMethodPattern() { }
                                    }
                                }
                            }
                        },
                        visualControllerPattern = new MsMetaModelVisualControllerPattern()
                        {
                            variableRubricatorKey = true,
                            levelFormat = MsLevelFormat.Short,
                            useSourceName = false,
                            freeVariables = true
                        }
                    }
                }
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Задаем параметры выполнения операции
    var result = somClient.SetMs(setMsOp);
    return result.meta.item;
}


См. также:


[SetMs: Операция](../SetMs.htm)
 | [Фильтр
 Бакстера-Кинга](lib.chm::/02_Time_series_analysis/UiModelling_BaxterKingFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
