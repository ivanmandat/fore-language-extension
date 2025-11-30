# Добавление переменных в модель

Добавление переменных в модель
-


**


# Добавление переменных в модель


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для добавления переменных в модель. В запросе передаются: экземпляр
 открытого контейнера моделирования, шаблон для извлечения данных
 и срезы данных, соответствующие добавляемым переменным. В ответе приходят
 переменные, которые не входят ни в одно уравнение модели.


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


										  <id>S57!M!S!C1</id>


									  </tMs>


								[-](../../../#)
								 <tArg
								 xmlns="">


										[-](../../../#)
										 <pattern>


												  <obInst>true</obInst>


												[-](../../../#)
												 <item>


														  <key>4412</key>


														[-](../../../#)
														 <metaModel>


																  <tag>false</tag>


																[-](../../../#)
																 <visualControllerPattern>


																		  <freeVariables>true</freeVariables>


																	  </visualControllerPattern>


															  </metaModel>


													  </item>


											  </pattern>


										[-](../../../#)
										 <execParams>


												[-](../../../#)
												 <slices>


														[-](../../../#)
														 <its>


																[-](../../../#)
																 <Item>


																		  <k>0</k>


																		  <id>261</id>


																		  <n>MyInputVavable</n>


																		  <vis>true</vis>


																		  <variableKey>5350</variableKey>


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


																								  <variant>261</variant>


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


													  </slices>


												  <execSaveMetaModel>true</execSaveMetaModel>


												  <execSaveProblem>true</execSaveProblem>


												  <execCreateVariables>true</execCreateVariables>


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


										  <id>S57!M!S!C1</id>


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


												  <k>4412</k>


												  <id>MODEL_DEL_METAMODEL</id>


												  <n>model_del</n>


												  <vis>1</vis>


												  <type>MetaModel</type>


												[-](../../../#)
												 <metaModelMd>


														  <k>4412</k>


														[-](../../../#)
														 <visualController>


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


																				[-](../../../#)
																				 <Item>


																						  <k>0</k>


																						  <id>261</id>


																						  <n>MyInputVavable</n>


																						  <vis>1</vis>


																						  <variableKey>5375</variableKey>


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


																												  <variant>261</variant>


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


													  </metaModelMd>


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
         "id" : "S38!M!S!C1"
        },
       "tArg" :
        {
         "pattern" :
          {
           "obInst" : "true",
           "item" :
            {

             "key" : "4412",
             "metaModel" :
              {
               "tag" : "false",
               "visualControllerPattern" :
                {
                 "freeVariables" : "true"
                }
              }
            }

          },
         "execParams" :
          {
           "slices" :
            {
             "its" :
              {
               "Item" :
                {
                 "k" : "0",

                 "id" : "261",
                 "n" : "MyInputVavable",
                 "vis" : "true",
                 "variableKey" : "5156",
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
                }

              }
            },
           "execSaveMetaModel" : "true",
           "execSaveProblem" : "true",
           "execCreateVariables" : "true"
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
         "id" : "S38!M!S!C1"
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
           "k" : "4412",
           "id" : "MODEL_DEL_METAMODEL",
           "n" : "model_del",
           "vis" : "1",
           "type" : "MetaModel",
           "metaModelMd" :

            {
             "k" : "4412",
             "visualController" :
              {
               "freeVariables" :
                {
                 "its" :
                  {
                   "Item" :
                    {

                     "k" : "0",
                     "id" : "261",
                     "n" : "MyInputVavable",
                     "vis" : "1",
                     "variableKey" : "5179",
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

                    }
                  }
                }
              }
            }
          }
        }


public static MsItem GetMsAddVars(MsId ms, ulong metaModelKey, MsFormulaTransformSlices slices)
{
    var getMsOp = new GetMs();
    getMsOp.tMs = ms;
    getMsOp.tArg = new GetMsArg()
    {  // Задаем шаблон изменения данных
        pattern = new MsMdPattern()
        {
            item = new MsItemPattern()
            {
                key = metaModelKey,
                metaModel = new MsMetaModelPattern()
                {
                    tag = false,
                    visualControllerPattern = new MsMetaModelVisualControllerPattern()
                    { freeVariables=true }
                }
            }
        },
        execParams = new MsMdExecParams()
        {
            slices = slices,
            execCreateVariables = true,
            execSaveProblem = true,
            execSaveMetaModel = true
        }
    }; // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Задаем параметры выполнения операции
    var result = somClient.GetMs(getMsOp);
    return result.meta.item;
}


См. также:


[GetMs: операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
