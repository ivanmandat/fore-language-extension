# Создание переменной на основе ряда из БД временных рядов

Создание переменной на основе ряда из БД временных рядов
-


**


# Создание переменной на основе ряда из БД временных рядов


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для создания переменной на основе ряда из БД временных рядов. В запросе
 передается экземпляр открытого контейнера моделирования, шаблон для изменения
 модели и временной ряд. В ответе приходит описание созданной переменной.


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


										  <id>S51!M!S!C1</id>


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


																  <visualControllerPattern
																 />


															  </metaModel>


													  </item>


											  </pattern>


										[-](../../../#)
										 <execParams>


												[-](../../../#)
												 <rubFacts>


														[-](../../../#)
														 <it>


																  <k>10113</k>


																  <vis>true</vis>


																[-](../../../#)
																 <atts>


																		[-](../../../#)
																		 <its>


																				[-](../../../#)
																				 <it>


																						  <k>9</k>


																						  <id>COUNTRY</id>


																						  <n>Страна</n>


																						  <vis>true</vis>


																						  <value>313</value>


																					  </it>


																			  </its>


																	  </atts>


															  </it>


													  </rubFacts>


												  <inputRubKey>2940</inputRubKey>


												  <execSaveProblem>true</execSaveProblem>


												  <execGetVariablesByFactors>true</execGetVariablesByFactors>


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


										  <id>S51!M!S!C1</id>


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
																 <variablesByFactors>


																		[-](../../../#)
																		 <its>


																				[-](../../../#)
																				 <Item>


																						[-](../../../#)
																						 <slice>


																								  <k>0</k>


																								  <id>OBJ_TSDB!313</id>


																								  <n>БД
																								 временных
																								 рядов!d12</n>


																								  <vis>1</vis>


																								  <variableKey>5320</variableKey>


																								  <stubKey>2940</stubKey>


																								[-](../../../#)
																								 <selections>


																										[-](../../../#)
																										 <its>


																												[-](../../../#)
																												 <Item>


																														[-](../../../#)
																														 <id>


																																  <id>208</id>


																															  </id>


																														  <variant>313</variant>


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


																						  <variableExists>0</variableExists>


																					  </Item>


																			  </its>


																	  </variablesByFactors>


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
         "id" : "S70!M!S!C1"

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
               "visualControllerPattern" : ""
              }
            }
          },
         "execParams" :
          {
           "rubFacts" :
            {

             "it" :
              {
               "k" : "10113",
               "vis" : "true",
               "atts" :
                {
                 "its" :
                  {
                   "it" :
                    [

                      {
                       "k" : "9",
                       "id" : "COUNTRY",
                       "n" : "Страна",
                       "vis" : "true",
                       "value" : "313"
                      }
                    ]
                  }
                }

              }
            },
           "inputRubKey" : "2940",
           "execSaveProblem" : "true",
           "execGetVariablesByFactors" : "true"
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

         "id" : "S70!M!S!C1"
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

               "variablesByFactors" :
                {
                 "its" :
                  {
                   "Item" :
                    {
                     "slice" :
                      {
                       "k" : "0",
                       "id" : "OBJ_TSDB!313",

                       "n" : "БД временных рядов!d12",
                       "vis" : "1",
                       "variableKey" : "4563",
                       "stubKey" : "2940",
                       "selections" :
                        {
                         "its" :
                          {
                           "Item" :
                            {

                             "id" :
                              {
                               "id" : "208"
                              },
                             "variant" : "313"
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
                     "variableExists" : "0"

                    }
                  }
                }
              }
            }
          }
        }


public static MsItem GetMsRubVar(MsId ms, uint metaModelKey, RubFact varRub, uint rubKey)
{
    var getMsOp = new GetMs()
    {
        tMs = ms,
        tArg = new GetMsArg()
        {
            pattern = new MsMdPattern()
            {
                item = new MsItemPattern()
                {
                    key = metaModelKey,
                    metaModel = new MsMetaModelPattern()
                    {
                        tag = false,
                        visualControllerPattern = new MsMetaModelVisualControllerPattern() { }
                    }
                }
            },
            execParams = new MsMdExecParams()
            {
                execGetVariablesByFactors = new MsMdExecGetVariablesByFactors()
                {
                    rubFacts = new RubFact[] { varRub },
                    inputRubKey = rubKey
                }
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Добавление переменной из БД временных рядов
    var result = somClient.GetMs(getMsOp);
    var metaVC = result.meta.item.metaModelMd.visualController;
    var vars = metaVC.variablesByFactors;
    foreach (MsVariableByFactor vbf in vars.its)
    {
        Console.WriteLine("Добавлена переменная: " + vbf.chainEntry.n);
        Console.WriteLine("   - переменная существует: " + vbf.variableExists);
    };
    return result.meta.item;
}


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
