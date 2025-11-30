# Создание параметра метамодели

Создание параметра метамодели
-


**


# Создание параметра метамодели


Ниже приведен пример использования операции [SetMs](../SetMs.htm)
 для создания параметра метамодели. В запросе передаются: экземпляр открытого
 контейнера моделирования, параметры выполнения операции и параметры создаваемого
 параметра. В результате выполнения операция возвращает метамодель, содержащую
 параметры.


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


														  <key>2804</key>


														[-](../../../#)
														 <metaModel>


																  <mmParams>Add</mmParams>


															  </metaModel>


													  </item>


											  </pattern>


										[-](../../../#)
										 <meta>


												[-](../../../#)
												 <item>


														  <k>0</k>


														  <type>Unknown</type>


														[-](../../../#)
														 <metaModelMd>


																[-](../../../#)
																 <mmParams>


																		[-](../../../#)
																		 <its>


																				[-](../../../#)
																				 <Item>


																						  <k>0</k>


																						  <n>testParam</n>


																						  <dataType>3</dataType>


																						  <defaultValue>0</defaultValue>


																						  <hidden>false</hidden>


																					  </Item>


																			  </its>


																	  </mmParams>


															  </metaModelMd>


													  </item>


											  </meta>


										[-](../../../#)
										 <metaGet>


												  <obInst>true</obInst>


												[-](../../../#)
												 <item>


														  <key>2804</key>


														[-](../../../#)
														 <metaModel>


																  <mmParams>Get</mmParams>


															  </metaModel>


													  </item>


											  </metaGet>


										[-](../../../#)
										 <execParams>


												  <execSaveMetaModel>true</execSaveMetaModel>


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
														 <mmParams>


																[-](../../../#)
																 <its>


																		[-](../../../#)
																		 <Item>


																				  <k>1</k>


																				  <id>ITEM1</id>


																				  <n>testParam</n>


																				  <vis>1</vis>


																				  <dataType>3</dataType>


																				  <defaultValue>0</defaultValue>


																				  <hidden>0</hidden>


																				  <tag
																				 />


																			  </Item>


																	  </its>


															  </mmParams>


														  <visualController
														 />


													  </metaModelMd>


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
         "id" : "S11!M!S!C1"

        },
       "tArg" :
        {
         "pattern" :
          {
           "obInst" : "true",
           "item" :
            {
             "key" : "2804",
             "metaModel" :

              {
               "mmParams" : "Add"
              }
            }
          },
         "meta" :
          {
           "item" :
            {
             "k" : "0",

             "type" : "Unknown",
             "metaModelMd" :
              {
               "mmParams" :
                {
                 "its" :
                  {
                   "Item" :
                    {
                     "k" : "0",

                     "n" : "testParam",
                     "dataType" : "3",
                     "defaultValue" : "0",
                     "hidden" : "false"
                    }
                  }
                }
              }
            }
          },

         "metaGet" :
          {
           "obInst" : "true",
           "item" :
            {
             "key" : "2804",
             "metaModel" :
              {
               "mmParams" : "Get"
              }

            }
          },
         "execParams" :
          {
           "execSaveMetaModel" : "true"
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
         "id" : "S11!M!S!C1"
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
           "k" : "2804",
           "id" : "OBJ2804",
           "n" : "Модель",
           "vis" : "1",

           "type" : "MetaModel",
           "metaModelMd" :
            {
             "k" : "2804",
             "mmParams" :
              {
               "its" :
                {
                 "Item" :
                  [

                    {
                     "k" : "1",
                     "id" : "ITEM1",
                     "n" : "testParam",
                     "vis" : "1",
                     "dataType" : "3",
                     "defaultValue" : "0",
                     "hidden" : "0",
                     "tag" : ""
                    }

                  ]
                }
              },
             "visualController" : ""
            }
          }
        }


 public static void SetMsAddParam(MsId ms, ulong mModelKey)
 {
     var setMsOp = new SetMs();
     setMsOp.tMs = ms;
     setMsOp.tArg = new SetMsArg()
     {  // Задаем шаблон изменения данных
         pattern = new MsMdPattern()
         {
             item = new MsItemPattern()
             {   // Задаём ключ метамодели
                 key = mModelKey,
                 metaModel = new MsMetaModelPattern()
                    {mmParams = ListOperation.Add}

             }
         },
         // Задаем данные, которые необходимо изменить
         meta = new MsMd
         {
             item = new MsItem
             {
                 metaModelMd = new MsMetaModel
                 {
                     mmParams = new MsModelParams

                     {
                         its = new MsModelParam[]
                        {
                            new MsModelParam
                            {
                                n = "testParam",
                                dataType = 3,
                                defaultValue = "0",
                                linkedObjectKey = null,
                                hidden = false,

                                tag = null
                            }
                        }
                     }
                 }
             }
         },
         metaGet = new MsMdPattern()
         {
             item = new MsItemPattern()

             {
                 key = mModelKey,
                 metaModel = new MsMetaModelPattern() { mmParams = ListOperation.Get }
             }
         },
         execParams = new MsMdExecParams() { execSaveMetaModel = true }
     }; // Создаем прокси-объект для выполнения операции
     var somClient = new SomPortTypeClient();
     // Задаем параметры выполнения операции
     var result = somClient.SetMs(setMsOp);
 }


См. также:


[SetMs: Операция](../SetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
