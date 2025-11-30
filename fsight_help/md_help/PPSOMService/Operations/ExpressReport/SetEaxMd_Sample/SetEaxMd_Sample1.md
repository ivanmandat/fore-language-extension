# Настройка условного форматирования: Операция SetEaxMd

Настройка условного форматирования: Операция SetEaxMd
-


**


# Настройка условного форматирования


Ниже приведен пример использования операции [SetEaxMd](../SetEaxMd.htm)
 для настройки условного форматирования в таблице экспресс-отчета. В запросе
 передается моникёр открытого экземпляра экспресс-отчета, шаблон, указывающий
 необходимость изменить стили условных форматов, и метаданные, содержащие
 два условных формата. Первый условный формат подсвечивает максимальные
 значения, второй - минимальные. Каждый условный формат имеет собственный
 стиль оформления. Результатом работы операции является моникёр измененного
 экспресс-отчета.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../../minus.gif)](../../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../../minus.gif)](../../../#) <s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[![](../../../minus.gif)](../../../#) <SetEaxMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[![](../../../minus.gif)](../../../#) <tEax
								 xmlns="** **">


										  <id>S1!M!S!E1</id>


									  </tEax>


								[![](../../../minus.gif)](../../../#) <tArg
								 xmlns="** **">


										[![](../../../minus.gif)](../../../#)
										 <pattern>


												  <obInst>false</obInst>


												[![](../../../minus.gif)](../../../#) <gridStyle>


														[![](../../../minus.gif)](../../../#)
														 <ops>


																[![](../../../minus.gif)](../../../#)
																 <it>


																		  <Key>InternalFormatConditions</Key>


																		  <Value>Set</Value>


																	  </it>


															  </ops>


													  </gridStyle>


											  </pattern>


										[![](../../../minus.gif)](../../../#)
										 <meta>


												[![](../../../minus.gif)](../../../#) <grid>


														[![](../../../minus.gif)](../../../#)
														 <style>


																[![](../../../minus.gif)](../../../#)
																 <internalFormatConditions>


																		[![](../../../minus.gif)](../../../#)
																		 <Condition>


																				  <Key>0</Key>


																				  <Type>RankValues</Type>


																				  <Enabled>true</Enabled>


																				[![](../../../minus.gif)](../../../#)
																				 <Details>


																						[![](../../../minus.gif)](../../../#)
																						 <RankValues>


																								  <Type>0</Type>


																								  <Percent>0</Percent>


																								  <Count>3</Count>


																								[![](../../../minus.gif)](../../../#)
																								 <Style>


																										  <Font
																										 F="**Calibri**"
																										 C="**#00FF00**"
																										 B="**true**"
																										 />


																									  </Style>


																								  <PercentUsed>false</PercentUsed>


																							  </RankValues>


																					  </Details>


																			  </Condition>


																		[![](../../../minus.gif)](../../../#)
																		 <Condition>


																				  <Key>0</Key>


																				  <Type>RankValues</Type>


																				  <Enabled>true</Enabled>


																				[![](../../../minus.gif)](../../../#)
																				 <Details>


																						[![](../../../minus.gif)](../../../#)
																						 <RankValues>


																								  <Type>1</Type>


																								  <Percent>0</Percent>


																								  <Count>3</Count>


																								[![](../../../minus.gif)](../../../#)
																								 <Style>


																										  <Font
																										 F="**Calibri**"
																										 C="**#FF0000**"
																										 I="**true**"
																										 />


																									  </Style>


																								  <PercentUsed>false</PercentUsed>


																							  </RankValues>


																					  </Details>


																			  </Condition>


																	  </internalFormatConditions>


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


								  <changedDims
								 xmlns="** **" />


								[![](../../../minus.gif)](../../../#) <id xmlns="** **">


										  <id>S1!M!S!E1</id>


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
       "gridStyle" :
        {
         "ops" :
          {
           "it" :
            {
             "Key" : "InternalFormatConditions",
             "Value" : "Set"
            }
          }
        }
      },
     "meta" :
      {
       "grid" :
        {
         "style" :
          {
           "internalFormatConditions" :
            {
             "Condition" :
              [
                {
                 "Key" : "0",
                 "Type" : "RankValues",
                 "Enabled" : "true",
                 "Details" :
                  {
                   "RankValues" :
                    {
                     "Type" : "0",
                     "Percent" : "0",
                     "Count" : "3",
                     "Style" :
                      {
                       "Font" :
                        {
                         "@B" : "true",
                         "@C" : "#00FF00",
                         "@F" : "Calibri"
                        }
                      },
                     "PercentUsed" : "false"
                    }
                  }
                },
                {
                 "Key" : "0",
                 "Type" : "RankValues",
                 "Enabled" : "true",
                 "Details" :
                  {
                   "RankValues" :
                    {
                     "Type" : "1",
                     "Percent" : "0",
                     "Count" : "3",
                     "Style" :
                      {
                       "Font" :
                        {
                         "@C" : "#FF0000",
                         "@F" : "Calibri",
                         "@I" : "true"
                        }
                      },
                     "PercentUsed" : "false"
                    }
                  }
                }
              ]
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


    public static SetEaxMdResult SetEaxFormatConditions(EaxId moniker)
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
                    gridStyle = new EaxGridStylePattern() //Настройка условных форматов
                    {
                        ops = new EaxGridStylePartListOpsIT[]
                        {
                           new EaxGridStylePartListOpsIT() { Key = EaxGridStylePart.InternalFormatConditions, Value = ListOperation.Set },
                        }
                    }
                },
                //Изменяемые метаданные
                meta = new EaxMd()
                {
                    grid = new EaxGrid() //Настройка оформления итогов
                    {
                        style = new EaxGridStyle()
                        {
                            internalFormatConditions = new TabFormatCondition[]
                            {
                                new TabFormatCondition() //Формат подствеки максимального значения
                                {
                                    Type = TabConditionType.RankValues,
                                    Enabled = true,
                                    Details = new TabFormatConditionDetails()
                                    {
                                        RankValues = new TabFormatRankValues()
                                        {
                                            Count = 1,
                                            Type = 0, //Максимальные значения
                                            Style = new TabStyle()
                                            {
                                                Font = new TabFontStyle()
                                                {
                                                    B = true,
                                                    BSpecified = true,
                                                    C = "#00FF00",
                                                    F = "Calibri",
                                                }
                                            }
                                        }
                                    }
                                },
                                new TabFormatCondition() //Формат подствеки минимального значения
                                {
                                    Type = TabConditionType.RankValues,
                                    Enabled = true,
                                    Details = new TabFormatConditionDetails()
                                    {
                                        RankValues = new TabFormatRankValues()
                                        {
                                            Count = 1,
                                            Type = 1, //Минимальное значения
                                            Style = new TabStyle()
                                            {
                                                Font = new TabFontStyle()
                                                {
                                                    I = true,
                                                    ISpecified = true,
                                                    C = "#FF0000",
                                                    F = "Calibri",
                                                }
                                            }
                                        }
                                    }
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
