# Добавление сценария в расчет модели

Добавление сценария в расчет модели
-


**


# Добавление сценария в расчет модели


Ниже приведен пример использования операции [SetMs](../SetMs.htm)
 для добавления сценария в расчет модели. В запросе передаются: экземпляр
 открытого контейнера моделирования, параметры выполнения операции и добавляемый
 сценарий. В результате выполнения операция возвращает дерево сценариев
 модели.


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


										  <id>S53!M!S!C1</id>


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


																  <scenarioKey>1628</scenarioKey>


																  <scenarios>Add</scenarios>


															  </problem>


													  </item>


											  </pattern>


										[-](../../../#)
										 <meta>


												[-](../../../#)
												 <item>


														  <k>2803</k>


														  <type>Problem</type>


														[-](../../../#)
														 <problemMd>


																[-](../../../#)
																 <scenarios>


																		[-](../../../#)
																		 <its>


																				[-](../../../#)
																				 <Item>


																						  <k>1628</k>


																						  <id>OBJ1628</id>


																						  <n>Базовый</n>


																						  <vis>true</vis>


																						  <isProtected>false</isProtected>


																					  </Item>


																			  </its>


																	  </scenarios>


															  </problemMd>


													  </item>


											  </meta>


										[-](../../../#)
										 <metaGet>


												  <obInst>true</obInst>


												  <scenarios>Get</scenarios>


											  </metaGet>


										[-](../../../#)
										 <execParams>


												  <execSaveProblem>true</execSaveProblem>


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
         "id" : "S115!M!S!C1"
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
               "scenarioKey" : "1628",
               "scenarios" : "Add"
              }

            }
          },
         "meta" :
          {
           "item" :
            {
             "k" : "2803",
             "type" : "Problem",
             "problemMd" :
              {

               "scenarios" :
                {
                 "its" :
                  {
                   "Item" :
                    {
                     "k" : "1628",
                     "id" : "OBJ1628",
                     "n" : "Базовый",
                     "vis" : "true",

                     "isProtected" : "false"
                    }
                  }
                }
              }
            }
          },
         "metaGet" :
          {
           "obInst" : "true",

           "scenarios" : "Get"
          },
         "execParams" :
          {
           "execSaveProblem" : "true"
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
         "id" : "S115!M!S!C1"
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
          }
        }


public static MsScenarioTree SetMsAddScenModel(MsId ms, ulong modelKey, MsScenarioNode scen)
{
    var setMsOp = new SetMs();
    setMsOp.tMs = ms;
    setMsOp.tArg = new SetMsArg()
    {  // Задаем шаблон изменения данных
        pattern = new MsMdPattern()
        {
            item = new MsItemPattern()
            {   // Задаём ключ модели
                key = modelKey,
                problem = new MsProblemPattern()
                {   // Задаём ключ сценария

                    scenarioKey = scen.k,
                    scenarios = ListOperation.Add
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
                    scenarios = new MsScenarioList()
                    {
                        its = new MsScenario[]
                        {
                            new MsScenario()
                            {

                                id = scen.id,
                                k = scen.k,
                                n = scen.n,
                                vis = scen.vis,
                                internalKey = null,
                                isProtected = false
                            }
                        }
                    }
                }

            }
        },
        // Задаём шаблон извлечения измененных данных
        metaGet = new MsMdPattern() {scenarios = ListOperation.Get},
        execParams = new MsMdExecParams() {execSaveProblem = true}
    }; // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Задаем параметры выполнения операции
    var result = somClient.SetMs(setMsOp);
    return result.meta.scenarios;
}


См. также:


[SetMs: Операция](../SetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
