# Поиск фактора модели по срезу данных

Поиск фактора модели по срезу данных
-


**


# Поиск фактора модели по срезу данных


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для поиска фактора модели. В запросе передаются: экземпляр открытого
 контейнера моделирования, шаблон для извлечения данных и срез данных,
 соответствующий искомому фактору. В ответе приходят: ключ фактора и ключ
 модели, которая его содержит.


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


														  <key>2803</key>


														[-](../../../#)
														 <problem>


																[-](../../../#)
																 <metamodel>


																		  <tag>false</tag>


																		  <visualControllerPattern
																		 />


																	  </metamodel>


															  </problem>


													  </item>


											  </pattern>


										[-](../../../#)
										 <execParams>


												[-](../../../#)
												 <slice>


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


													  </slice>


												  <execGetFactorByVariable>true</execGetFactorByVariable>


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
																 <visualController>


																		  <factorKey>10095</factorKey>


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
         "id" : "S27!M!S!C1"

        },
       "tArg" :
        {
         "pattern" :
          {
           "obInst" : "true",
           "item" :
            {
             "key" : "2803",
             "problem" :

              {
               "metamodel" :
                {
                 "tag" : "false",
                 "visualControllerPattern" : ""
                }
              }
            }
          },
         "execParams" :

          {
           "slice" :
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
            },
           "execGetFactorByVariable" : "true"
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
         "id" : "S27!M!S!C1"

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
               "visualController" :

                {
                 "factorKey" : "10095"
                }
              }
            }
          }
        }


public static ulong? GetMsFactorByVarable(MsId ms, ulong modelKey, MsFormulaTransformSlice slice)
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
                        tag = false,
                        visualControllerPattern = new MsMetaModelVisualControllerPattern() { }
                    }
                }
            }
        },
        execParams = new MsMdExecParams()
        {
            slice = slice,
            execGetFactorByVariable = true
        }
    }; // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Задаем параметры выполнения операции
    var result = somClient.GetMs(getMsOp);
    MsMetaModelVisualController metaVC = result.meta.item.problemMd.metamodel.visualController;
    ulong? fc = metaVC.factorKey;
    if (fc != null) {Console.WriteLine("Ключ фактора: " + fc);};
    return fc;
}


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
