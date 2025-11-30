# Извлечение ограниченного числа объектов

Извлечение ограниченного числа объектов
-


**


# Извлечение ограниченного числа объектов


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для извлечения из контейнера моделирования ограниченного числа объектов. В
 запросе передается экземпляр открытого контейнера моделирования, шаблон
 и фильтр для извлечения данных. В ответе приходят извлечённые объекты.


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


										  <id>S53!M!S!C1</id>


									  </tMs>


								[-](../../../#)
								 <tArg
								 xmlns="">


										[-](../../../#)
										 <pattern>


												  <obInst>true</obInst>


												  <items>Get</items>


												[-](../../../#)
												 <item>


														  <key>2804</key>


														[-](../../../#)
														 <metaModel>


																  <filter
																 />


																[-](../../../#)
																 <calcChainPattern>


																		[-](../../../#)
																		 <modelPattern>


																				[-](../../../#)
																				 <transform>


																						[-](../../../#)
																						 <transformVariable>


																								  <slices>Get</slices>


																								[-](../../../#)
																								 <transformSlice>


																										  <selection>Get</selection>


																									  </transformSlice>


																							  </transformVariable>


																					  </transform>


																			  </modelPattern>


																	  </calcChainPattern>


																[-](../../../#)
																 <visualControllerPattern>


																		  <variableRubricatorKey>true</variableRubricatorKey>


																		  <chainWorkbookKey>true</chainWorkbookKey>


																		  <freeVariables>true</freeVariables>


																	  </visualControllerPattern>


															  </metaModel>


													  </item>


											  </pattern>


										[-](../../../#)
										 <filter>


												[-](../../../#)
												 <items>


														[-](../../../#)
														 <range>


																  <count>2</count>


															  </range>


													  </items>


											  </filter>


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


										  <id>S53!M!S!C1</id>


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
										 <items>


												[-](../../../#)
												 <its>


														[-](../../../#)
														 <it>


																  <k>1627</k>


																  <id>SCEN$TREE</id>


																  <n>Дерево
																 сценариев</n>


																  <vis>1</vis>


																  <type>Folder</type>


															  </it>


														[-](../../../#)
														 <it>


																  <k>2564</k>


																  <id>OBJ2564</id>


																  <n>Модель</n>


																  <vis>1</vis>


																  <type>Problem</type>


															  </it>


													  </its>


											  </items>


										[-](../../../#)
										 <item>


												  <k>2804</k>


												  <id>OBJ2804</id>


												  <n>Модель</n>


												  <vis>1</vis>


												  <type>MetaModel</type>


												[-](../../../#)
												 <metaModelMd>


														  <k>2804</k>


														[-](../../../#)
														 <visualController>


																  <variableRubricatorKey>2805</variableRubricatorKey>


																  <chainWorkbookKey>2837</chainWorkbookKey>


																[-](../../../#)
																 <freeVariables>


																		[-](../../../#)
																		 <its>


																				[-](../../../#)
																				 <Item>


																						  <k>0</k>


																						  <id>261</id>


																						  <n>MyInputVavable</n>


																						  <vis>1</vis>


																						  <variableKey>2839</variableKey>


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
         "id" : "S111!M!S!C1"
        },
       "tArg" :
        {

         "pattern" :
          {
           "obInst" : "true",
           "items" : "Get",
           "item" :
            {
             "key" : "2804",
             "metaModel" :
              {
               "filter" : "",

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

                 "chainWorkbookKey" : "true",
                 "freeVariables" : "true"
                }
              }
            }
          },
         "filter" :
          {
           "items" :
            {

             "range" :
              {
               "count" : "2"
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
         "id" : "S111!M!S!C1"

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
         "items" :
          {
           "its" :

            {
             "it" :
              [
                {
                 "k" : "1627",
                 "id" : "SCEN$TREE",
                 "n" : "Дерево сценариев",
                 "vis" : "1",
                 "type" : "Folder"
                },

                {
                 "k" : "2564",
                 "id" : "OBJ2564",
                 "n" : "Модель",
                 "vis" : "1",
                 "type" : "Problem"
                }
              ]
            }
          },

         "item" :
          {
           "k" : "2804",
           "id" : "OBJ2804",
           "n" : "Модель",
           "vis" : "1",
           "type" : "MetaModel",
           "metaModelMd" :
            {
             "k" : "2804",

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
                     "id" : "261",
                     "n" : "MyInputVavable",
                     "vis" : "1",
                     "variableKey" : "2839",
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


public static MsItem GetMsFilter(MsId ms, ulong mModelKey)
{
    var getMsOp = new GetMs();
    getMsOp.tMs = ms;
    getMsOp.tArg = new GetMsArg()
    {  // Задаем шаблон извлечения данных
        pattern = new MsMdPattern()

        {
            items = ListOperation.Get,
            item = new MsItemPattern()
            {   // Задаём ключ цепочки расчёта
                key = mModelKey,
                metaModel = new MsMetaModelPattern()
                {   // Фильтрацию не используем
                    filter = new MsMetaModelFilter()
                    {
                        calculationChain = null,

                        mmParams = null
                    },  // Задаём шаблон извлечения цепочки расчёта
                    calcChainPattern = new MsCalculationChainPattern()
                    {
                        modelPattern = new MsModelPattern()
                        {
                            transform = new MsFormulaTransformPattern()
                            {
                                transformVariable = new MsFormulaTransformVariablePattern()
                                {

                                    slices = ListOperation.Get,
                                    transformSlice = new MsFormulaTransformSlicePattern() { selection = ListOperation.Get }
                                }
                            }
                        }
                    },
                    visualControllerPattern = new MsMetaModelVisualControllerPattern()
                    {
                        variableRubricatorKey = true,
                        chainWorkbookKey = true,

                        freeVariables = true
                    }
                }
            }
        },  // Задаём фильтр
        filter = new MsMdFilter()
        {   // Получаем только 3 объекта
            items = new ListFilter()
                {range = new ListRange() { count = 2}}
        }

    }; // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Задаем параметры выполнения операции
    var result = somClient.GetMs(getMsOp);
    MsItems its = result.meta.items;
    Console.WriteLine("Извлечены объекты:");
    foreach (MsItem it in its.its) {Console.WriteLine("".PadRight(3) + it.n);};
    Console.Write("Открыта цепочка расчёта из модели '");
    MsItem mModel = result.meta.item;
    Console.WriteLine(mModel.n + "'");

    MsFormulaTransformSlices fVars = mModel.metaModelMd.visualController.freeVariables;
    if (fVars.its.Length != 0)
    {
        Console.WriteLine("".PadRight(3) + "Свободные переменные:");
        foreach (MsFormulaTransformSlice slice in fVars.its)
            {Console.WriteLine("".PadRight(6) + slice.n);}
    }
    else
        {Console.WriteLine("".PadRight(3) + "В модели нет свободных переменных");}
    return mModel;
}


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
