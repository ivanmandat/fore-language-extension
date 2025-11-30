# Переименование переменной

Переименование переменной
-


**


# Переименование переменной


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для переименования переменной моделирования. В запросе передаются: экземпляр
 открытого контейнера моделирования, шаблон получения изменённых данных,
 параметры выполнения операции и срез данных, соответствующий переменной.
 В ответе приходит описание переименованной переменной.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[-](../../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[-](../../../#)
				 <s:Body
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[-](../../../#)
						 <GetMs
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[-](../../../#)
								 <tMs
								 xmlns="">


										  <id>S52!M!S!C1</id>


									  </tMs>


								[-](../../../#)
								 <tArg
								 xmlns="">


										[-](../../../#)
										 <pattern>


												  <obInst>true</obInst>


												[-](../../../#)
												 <item>


														  <key>4411</key>


														[-](../../../#)
														 <problem>


																[-](../../../#)
																 <metamodel>


																		  <calcChainPattern
																		 />


																		[-](../../../#)
																		 <visualControllerPattern>


																				  <variableRubricatorKey>true</variableRubricatorKey>


																				  <chainWorkbookKey>true</chainWorkbookKey>


																				  <freeVariables>true</freeVariables>


																			  </visualControllerPattern>


																	  </metamodel>


															  </problem>


													  </item>


											  </pattern>


										[-](../../../#)
										 <execParams>


												  <name>OutputVar (переименованная)</name>


												[-](../../../#)
												 <slice>


														  <k>0</k>


														  <id>389</id>


														  <n>OutputVar</n>


														  <vis>true</vis>


														  <variableKey>5309</variableKey>


														  <stubKey>4413</stubKey>


														[-](../../../#)
														 <selections>


																[-](../../../#)
																 <its>


																		[-](../../../#)
																		 <Item>


																				[-](../../../#)
																				 <id>


																						  <id>4426</id>


																					  </id>


																				  <variant>389</variant>


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


												  <execRenameVariable>true</execRenameVariable>


											  </execParams>


									  </tArg>


							  </GetMs>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[-](../../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[-](../../../#)
				 <soapenv:Body>


						[-](../../../#)
						 <GetMsResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


								[-](../../../#)
								 <id
								 xmlns="">


										  <id>S52!M!S!C1</id>


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
										 <item>


												  <k>4411</k>


												  <id>MODEL_DEL</id>


												  <n>model_del</n>


												  <vis>1</vis>


												  <type>Problem</type>


												[-](../../../#)
												 <problemMd>


														[-](../../../#)
														 <metamodel>


																  <k>4412</k>


																[-](../../../#)
																 <visualController>


																		  <variableRubricatorKey>4413</variableRubricatorKey>


																		  <chainWorkbookKey>4445</chainWorkbookKey>


																		[-](../../../#)
																		 <freeVariables>


																				[-](../../../#)
																				 <its>


																						[-](../../../#)
																						 <Item>


																								  <k>0</k>


																								  <id>389</id>


																								  <n>OutputVar
																								 (переименованная)</n>


																								  <vis>1</vis>


																								  <variableKey>5309</variableKey>


																								  <stubKey>4413</stubKey>


																								[-](../../../#)
																								 <selections>


																										[-](../../../#)
																										 <its>


																												[-](../../../#)
																												 <Item>


																														[-](../../../#)
																														 <id>


																																  <id>4426</id>


																															  </id>


																														  <variant>389</variant>


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


																							  </Item>


																					  </its>


																			  </freeVariables>


																	  </visualController>


															  </metamodel>


													  </problemMd>


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
         "id" : "S84!M!S!C1"
        },
       "tArg" :
        {
         "pattern" :
          {
           "obInst" : "true",

           "item" :
            {
             "key" : "4411",
             "problem" :
              {
               "metamodel" :
                {
                 "calcChainPattern" : "",
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

           "name" : "Переменная моделирования 3 (переименованная)",
           "slice" :
            {
             "k" : "0",
             "id" : "360",
             "n" : "Переменная моделирования 3",
             "vis" : "true",
             "variableKey" : "4590",
             "stubKey" : "4413",
             "selections" :

              {
               "its" :
                {
                 "Item" :
                  {
                   "id" :
                    {
                     "id" : "4426"
                    },
                   "variant" : "360"

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
           "execRenameVariable" : "true"
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
         "id" : "S84!M!S!C1"

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
         "item" :
          {
           "k" : "4411",

           "id" : "MODEL_DEL",
           "n" : "model_del",
           "vis" : "1",
           "type" : "Problem",
           "problemMd" :
            {
             "metamodel" :
              {
               "k" : "4412",
               "visualController" :

                {
                 "variableRubricatorKey" : "4413",
                 "chainWorkbookKey" : "4445",
                 "freeVariables" :
                  {
                   "its" :
                    {
                     "Item" :
                      {
                       "k" : "0",

                       "id" : "360",
                       "n" : "Переменная моделирования 3 (переименованная)",
                       "vis" : "1",
                       "variableKey" : "4590",
                       "stubKey" : "4413",
                       "selections" :
                        {
                         "its" :
                          {
                           "Item" :

                            {
                             "id" :
                              {
                               "id" : "4426"
                              },
                             "variant" : "360"
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


public static MsItem GetMsRenameVar(MsId ms, ulong modelKey, MsFormulaTransformSlice varSlice)
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
                    metamodel = new MsMetaModelPattern()
                    {
                        calcChainPattern = new MsCalculationChainPattern()
                        {
                        },
                        visualControllerPattern = new MsMetaModelVisualControllerPattern()

                        {
                            variableRubricatorKey = true,
                            chainWorkbookKey = true,
                            freeVariables = true
                        }
                    }
                }
            }
        },
        execParams = new MsMdExecParams()

        {
            name = varSlice.n + " (переименованная)";,
            slice = varSlice,
            execRenameVariable = true
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
