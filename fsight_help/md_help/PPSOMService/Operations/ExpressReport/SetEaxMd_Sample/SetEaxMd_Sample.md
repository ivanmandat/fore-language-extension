# Настройка итогов: Операция SetEaxMd

Настройка итогов: Операция SetEaxMd
-


**


# Настройка итогов


Ниже приведен пример использования операции [SetEaxMd](../SetEaxMd.htm)
 для настройки итогов. В запросе передается моникёр открытого экземпляра
 экспресс-отчета, шаблон, указывающий необходимость настроить итоги, и
 метаданные, содержащие параметры итогов и стиль оформления итоговых данных.
 Результатом работы операции является моникёр измененного экспресс-отчета.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../../minus.gif)](../../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../../minus.gif)](../../../#) <s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[![](../../../minus.gif)](../../../#) <SetEaxMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[![](../../../minus.gif)](../../../#) <tEax
								 xmlns="** **">


										  <id>S12!M!S!E1</id>


									  </tEax>


								[![](../../../minus.gif)](../../../#) <tArg
								 xmlns="** **">


										[![](../../../minus.gif)](../../../#)
										 <pattern>


												  <obInst>false</obInst>


												  <totals>true</totals>


												[![](../../../minus.gif)](../../../#) <gridStyle>


														[![](../../../minus.gif)](../../../#)
														 <parts>


																  <it>Totals</it>


															  </parts>


													  </gridStyle>


											  </pattern>


										[![](../../../minus.gif)](../../../#)
										 <meta>


												[![](../../../minus.gif)](../../../#) <pivot>


														[![](../../../minus.gif)](../../../#)
														 <evaluator>


																[![](../../../minus.gif)](../../../#)
																 <totals>


																		  <byHierarchy>true</byHierarchy>


																		  <byLevels>false</byLevels>


																		[![](../../../minus.gif)](../../../#)
																		 <rowTypes>


																				  <t>Sum</t>


																			  </rowTypes>


																		  <enabled>true</enabled>


																	  </totals>


															  </evaluator>


													  </pivot>


												[![](../../../minus.gif)](../../../#) <grid>


														[![](../../../minus.gif)](../../../#)
														 <style>


																[![](../../../minus.gif)](../../../#)
																 <totals>


																		  <Font
																		 F="**Calibri**"
																		 C="**#FF0000**"
																		 I="**true**"
																		 B="**true**"
																		 />


																	  </totals>


															  </style>


													  </grid>


											  </meta>


									  </tArg>


							  </SetEaxMd>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[![](../../../minus.gif)](../../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../../minus.gif)](../../../#) <soapenv:Body>


						[![](../../../minus.gif)](../../../#) <SetEaxMdResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


								[![](../../../minus.gif)](../../../#) <id xmlns="** **">


										  <id>S12!M!S!E1</id>


									  </id>


							  </SetEaxMdResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


### JSON-запрос:


{
 "SetEaxMd" :
  {
   "tEax" :
    {
     "id" : "S1!M!S!E2"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "false",
       "totals" : "true",
       "gridStyle" :
        {
         "parts" :
          {
           "it" : "Totals"
          }
        }
      },
     "meta" :
      {
       "pivot" :
        {
         "evaluator" :
          {
           "totals" :
            {
             "byHierarchy" : "true",
             "byLevels" : "false",
             "rowTypes" :
              {
               "t" : "Sum"
              },
             "enabled" : "true"
            }
          }
        },
       "grid" :
        {
         "style" :
          {
           "totals" :
            {
             "Font" :
              {
               "@B" : "true",
               "@C" : "#FF0000",
               "@F" : "Calibri",
               "@I" : "true"
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
 "SetEaxMdResult" :
  {
   "changedDims" : "",
   "id" :
    {
     "id" : "S1!M!S!E2"
    }
  }
}


    public static SetEaxMdResult SetEaxTotals(EaxId moniker)
    {
        var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
        //Параметры выполнения операции
        var tEaxMd = new SetEaxMd()
        {
            tArg = new SetEaxMdArg()
            {
                pattern = new EaxMdPattern() //Шаблон, в соответствии с которым будут изменяться метаданные
                {
                    obInst = false,
                    totals = true, //Изменение параметров рассчитываемых итогов
                    gridStyle = new EaxGridStylePattern() //Изменение стиля оформления итогов
                    {
                        parts = new EaxGridStylePart[]
                        {
                            EaxGridStylePart.Totals
                        }
                    },
                },
                //Изменяемые метаданные
                meta = new EaxMd()
                {
                    pivot = new EaxPivot()
                    {
                        evaluator = new PvtEvaluator()
                        {
                            totals = new PvtTotals() //Итоги, рассчитываемые в таблице
                            {
                                byHierarchy = true,
                                byLevels = false,
                                rowTypes = new PvtEvaluatorElementType[]
                                {
                                    PvtEvaluatorElementType.Sum
                                },
                                enabled = true
                            }
                        }
                    },
                    grid = new EaxGrid()
                    {
                        style = new EaxGridStyle() //Стили таблицы
                        {
                            totals = new TabStyle() //Стиль оформления итогов
                            {
                                Font = new TabFontStyle()
                                {
                                    B = true,
                                    BSpecified = true,
                                    I = true,
                                    ISpecified = true,
                                    C = "#FF0000",
                                    F = "Calibri",
                                }
                            }
                        }
                    }
                }
            },
            tEax = moniker
        };
        //Изменение параметров итогов
        var result = somClient.SetEaxMd(tEaxMd);
        return result;
    }


См. также:


[SetEaxMd:
 Операция](../SetEaxMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
