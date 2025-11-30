# Создание копии сценария моделирования

Создание копии сценария моделирования
-


**


# Создание копии сценария моделирования


Ниже приведен пример использования операции [SetMs](../SetMs.htm)
 для создания копии сценария моделирования. В запросе передаются: экземпляр
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


										  <id>S57!M!S!C1</id>


									  </tMs>


								[-](../../../#)
								 <tArg
								 xmlns="">


										[-](../../../#)
										 <pattern>


												  <obInst>true</obInst>


												  <scenarios>Add</scenarios>


											  </pattern>


										[-](../../../#)
										 <meta>


												[-](../../../#)
												 <scenarios>


														[-](../../../#)
														 <nodes>


																[-](../../../#)
																 <it
																 isFolder="**false**">


																		  <k>0</k>


																		  <id
																		 />


																		  <n>Базовый
																		 (копия1)</n>


																		  <vis>true</vis>


																		[-](../../../#)
																		 <scenDesc
																		 isShortcut="**false**">


																				  <i>OBJ1628</i>


																				  <n>Базовый</n>


																				  <k>1628</k>


																				  <c>5124</c>


																				  <p>1627</p>


																				  <h>false</h>


																			  </scenDesc>


																	  </it>


															  </nodes>


													  </scenarios>


											  </meta>


										[-](../../../#)
										 <metaGet>


												  <obInst>true</obInst>


												  <scenarios>Get</scenarios>


											  </metaGet>


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


														[-](../../../#)
														 <it
														 isFolder="**0**">


																  <k>5371</k>


																  <id>OBJ5371</id>


																  <n>Базовый
																 (копия1)</n>


																  <vis>1</vis>


																[-](../../../#)
																 <scenDesc
																 isShortcut="**0**">


																		  <i>OBJ5371</i>


																		  <n>Базовый
																		 (копия1)</n>


																		  <k>5371</k>


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
         "id" : "S3!M!S!C1"
        },
       "tArg" :
        {
         "pattern" :

          {
           "obInst" : "true",
           "scenarios" : "Add"
          },
         "meta" :
          {
           "scenarios" :
            {
             "nodes" :
              {

               "it" :
                {
                 "@isFolder" : "false",
                 "k" : "0",
                 "id" : "",
                 "n" : "Базовый (копия)",
                 "vis" : "true",
                 "scenDesc" :
                  {
                   "@isShortcut" : "false",

                   "i" : "OBJ1628",
                   "n" : "Базовый",
                   "k" : "1628",
                   "c" : "5124",
                   "p" : "1627",
                   "h" : "false"
                  }
                }
              }
            }

          },
         "metaGet" :
          {
           "obInst" : "true",
           "scenarios" : "Get"
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
         "id" : "S3!M!S!C1"
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
              [
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
                },
                {
                 "@isFolder" : "0",
                 "k" : "5131",
                 "id" : "OBJ5131",
                 "n" : "Базовый (копия)",
                 "vis" : "1",
                 "scenDesc" :
                  {

                   "@isShortcut" : "0",
                   "i" : "OBJ5131",
                   "n" : "Базовый (копия)",
                   "k" : "5131",
                   "c" : "5124",
                   "p" : "1627",
                   "h" : "0"
                  }
                },
                {

                 "@isFolder" : "0",
                 "k" : "5133",
                 "id" : "OBJ5133",
                 "n" : "Базовый (копия)",
                 "vis" : "1",
                 "scenDesc" :
                  {
                   "@isShortcut" : "0",
                   "i" : "OBJ5133",
                   "n" : "Базовый (копия)",

                   "k" : "5133",
                   "c" : "5124",
                   "p" : "1627",
                   "h" : "0"
                  }
                },
                {
                 "@isFolder" : "0",
                 "k" : "5135",
                 "id" : "OBJ5135",

                 "n" : "Базовый (копия)",
                 "vis" : "1",
                 "scenDesc" :
                  {
                   "@isShortcut" : "0",
                   "i" : "OBJ5135",
                   "n" : "Базовый (копия)",
                   "k" : "5135",
                   "c" : "5124",
                   "p" : "1627",

                   "h" : "0"
                  }
                }
              ]
            }
          }
        }


public static MsScenarioTree SetMsScenarioCopy(MsId ms, ulong modelKey, MsScenarioNode sc)
{
    sc.isFolder = false;
    sc.k = 0;
    sc.n = sc.n + " (копия)";
    sc.vis = true;
    sc.id = "";
    sc.p = 0;
    sc.moveTo = null;
    var setMsOp = new SetMs();
    // Задаем параметры выполнения операции
    setMsOp.tMs = ms;
    setMsOp.tArg = new SetMsArg()
    {
        pattern = new MsMdPattern()
        {scenarios = ListOperation.Add},
        meta = new MsMd()
        {
            scenarios = new MsScenarioTree
            {
                nodes = new MsScenarioNode[] { sc }
            }
        },
        metaGet = new MsMdPattern() { scenarios = ListOperation.Get }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполняем операцию
    var result = somClient.SetMs(setMsOp);
    return result.meta.scenarios;
}


См. также:


[SetMs: Операция](../SetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
