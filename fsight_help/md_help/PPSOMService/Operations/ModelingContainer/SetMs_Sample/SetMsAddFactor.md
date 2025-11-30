# Добавление переменной в уравнение

Добавление переменной в уравнение
-


**


# Добавление переменной в уравнение


Ниже приведен пример использования операции [SetMs](../SetMs.htm)
 для добавления переменной в уравнение. В запросе передаются: экземпляр
 открытого контейнера моделирования, параметры выполнения операции и добавляемая
 переменная. В результате выполнения операция возвращает изменённое уравнение.


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


										  <id>S52!M!S!C1</id>


									  </tMs>


								[-](../../../#)
								 <tArg
								 xmlns="">


										[-](../../../#)
										 <pattern>


												  <obInst>true</obInst>


											  </pattern>


										  <meta
										 />


										[-](../../../#)
										 <metaGet>


												  <obInst>true</obInst>


												[-](../../../#)
												 <item>


														  <key>4411</key>


														[-](../../../#)
														 <problem>


																[-](../../../#)
																 <metamodel>


																		  <calculationChain>Get</calculationChain>


																		  <tag>false</tag>


																		[-](../../../#)
																		 <calcChainPattern>


																				[-](../../../#)
																				 <modelPattern>


																						  <generatedName>true</generatedName>


																					  </modelPattern>


																			  </calcChainPattern>


																	  </metamodel>


															  </problem>


													  </item>


											  </metaGet>


										[-](../../../#)
										 <execParams>


												  <k>5326</k>


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


												  <execSaveProblem>true</execSaveProblem>


												  <execAddFactor>true</execAddFactor>


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
																 <calculationChain>


																		[-](../../../#)
																		 <its>


																				[-](../../../#)
																				 <Item>


																						  <k>5326</k>


																						  <id>OBJ5326</id>


																						  <n>Output
																						 Varable[t]
																						 =
																						 A1*Var[t]</n>


																						  <vis>1</vis>


																						  <type>Model</type>


																						  <excluded>0</excluded>


																						[-](../../../#)
																						 <model>


																								  <generatedName>Modelling
																								 Varable[t]
																								 =
																								 A1*Var[t]
																								 +
																								 A2*OutputVar[t]</generatedName>


																							  </model>


																					  </Item>


																			  </its>


																	  </calculationChain>


																  <visualController
																 />


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
         "id" : "S109!M!S!C1"
        },
       "tArg" :
        {
         "pattern" :

          {
           "obInst" : "true"
          },
         "meta" : "",
         "metaGet" :
          {
           "obInst" : "true",
           "item" :
            {
             "key" : "4411",

             "problem" :
              {
               "metamodel" :
                {
                 "calculationChain" : "Get",
                 "tag" : "false",
                 "calcChainPattern" :
                  {
                   "modelPattern" :
                    {

                     "generatedName" : "true"
                    }
                  }
                }
              }
            }
          },
         "execParams" :
          {
           "k" : "4936",

           "slice" :
            {
             "k" : "0",
             "id" : "OBJ_TSDB!313",
             "n" : "БД временных рядов!d12",
             "vis" : "true",
             "variableKey" : "4939",
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
           "execSaveProblem" : "true",
           "execAddFactor" : "true"
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
         "id" : "S109!M!S!C1"
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
               "calculationChain" :
                {
                 "its" :
                  {
                   "Item" :
                    {
                     "k" : "4936",

                     "id" : "OBJ4936",
                     "n" : "Varable[t] = A1*Varable[t]",
                     "vis" : "1",
                     "type" : "Model",
                     "excluded" : "0",
                     "model" :
                      {
                       "generatedName" : "Varable[t] = A1*Varable[t] + A2*БД временных рядов!d12[t]"
                      }
                    }

                  }
                },
               "visualController" : ""
              }
            }
          }
        }


public static MsItem SetMsAddFactor(MsId ms, ulong modelKey, ulong eqKey, MsFormulaTransformSlice factor)
{
    var setMsOp = new SetMs();
    setMsOp.tMs = ms;
    setMsOp.tArg = new SetMsArg()
    {  // Задаем шаблон изменения данных
        pattern = new MsMdPattern() { },
        meta = new MsMd() { },
        // Задаём шаблон извлечения данных
        metaGet = new MsMdPattern()
        {
            item = new MsItemPattern()

            {
                key = modelKey,
                problem = new MsProblemPattern()
                {
                    metamodel = new MsMetaModelPattern()
                    {
                        tag = false,
                        calculationChain = ListOperation.Get,
                        calcChainPattern = new MsCalculationChainPattern()
                        {

                            modelPattern = new MsModelPattern()
                            {generatedName = true}
                        }
                    }
                }
            }
        },// Задаём параметры выполнения операции
        execParams = new MsMdExecParams()
        {   // Задаём ключ уравнения
            k = eqKey,

            // Задаём срез, соответствующий ряду
            slice = factor,
            execAddFactor = true,
            execSaveProblem = true
        }
    }; // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполняем операцию
    var result = somClient.SetMs(setMsOp);
    return result.meta.item;
}


См. также:


[SetMs: Операция](../SetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
