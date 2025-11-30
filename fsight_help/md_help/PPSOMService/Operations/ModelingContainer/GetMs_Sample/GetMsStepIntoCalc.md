# Пошаговый расчёт модели

Пошаговый расчёт модели
-


**


# Пошаговый расчёт модели


Ниже приведен пример использования операции [GetMs](../GetMs.htm) для пошагового расчёта модели.
 В запросе передаются: экземпляр открытого контейнера моделирования, шаблон
 и параметры расчёта модели. В ответе приходит информация о расчёте.


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


										  <id>S54!M!S!C1</id>


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
																 <calculation>


																		[-](../../../#)
																		 <calculationState>


																				[-](../../../#)
																				 <model>


																						  <generatedName>true</generatedName>


																					  </model>


																			  </calculationState>


																	  </calculation>


															  </problem>


													  </item>


											  </pattern>


										[-](../../../#)
										 <execParams>


												  <level>Year</level>


												  <problemCalculationKey>0</problemCalculationKey>


												[-](../../../#)
												 <slices>


														  <its
														 />


													  </slices>


												  <execStepInto>false</execStepInto>


												  <execStepOver>true</execStepOver>


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


										  <id>S54!M!S!C1</id>


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
														 <calculation>


																  <pointCount>0</pointCount>


																  <pointPassed>0</pointPassed>


																  <saveData>1</saveData>


																  <copyFact>0</copyFact>


																  <treatNullsAsZeros>0</treatNullsAsZeros>


																  <isRunning>0</isRunning>


																[-](../../../#)
																 <calculationState>


																		  <model
																		 />


																		  <scenarioKey>4294967295</scenarioKey>


																		  <currentPoint>1899-12-30</currentPoint>


																		  <message>Расчет
																		 задачи
																		 окончен.
																		 Время
																		 расчета
																		 составило
																		 00:00:01</message>


																	  </calculationState>


																  <isSuspend>0</isSuspend>


															  </calculation>


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

         "id" : "S30!M!S!C1"
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
               "calculation" :
                {
                 "calculationState" :
                  {
                   "model" :
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
           "level" : "Year",
           "problemCalculationKey" : "0",
           "slices" :

            {
             "its" : ""
            },
           "execStepInto" : "false",
           "execStepOver" : "true"
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

         "id" : "S30!M!S!C1"
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
             "calculation" :
              {
               "pointCount" : "0",

               "pointPassed" : "0",
               "saveData" : "1",
               "copyFact" : "0",
               "treatNullsAsZeros" : "0",
               "isRunning" : "0",
               "calculationState" :
                {
                 "model" : "",
                 "scenarioKey" : "4294967295",
                 "currentPoint" : "1899-12-30",

                 "message" : "Расчет задачи окончен. Время расчета составило 00:00:01"
                },
               "isSuspend" : "0"
              }
            }
          }
        }


public static bool GetMsStepIntoCalc(MsId ms, ulong modelKey, ulong? prCalcKey, MsFormulaTransformSlice outSlice)
 {
     var getMsOp = new GetMs();
     //Задаем параметры выполнения операции
     getMsOp.tMs = ms;
     getMsOp.tArg = new GetMsArg()
     {  //Задаем общий шаблон извлечения данных
         pattern = new MsMdPattern()
         {
             item = new MsItemPattern()
             {   //Задаем ключ рассчитываемой модели

                 key = modelKey,
                 //Задаем шаблон расчёта данных
                 problem = new MsProblemPattern()
                 {
                     calculation = new MsProblemCalculationPattern()
                     {
                         calculationState = new MsCalculationStatePattern()
                         {
                             model = new MsModelPattern() { generatedName = true }
                         }

                     }
                 }
             }
         },//Задаём параметры расчёта
         execParams = new MsMdExecParams()
         {
             execStepInto = false,
             execStepOver = true,
             problemCalculationKey = prCalcKey,
             slices = new MsFormulaTransformSlices()

             {
                 its = new MsFormulaTransformSlice[] { outSlice }
             },
             level = DimCalendarLvl.Year
         }
     };
     //Создаем прокси-объект для выполнения операции
     var somClient = new SomPortTypeClient();
     //Выполняем шаг расчёта
     GetMsResult getMsResult = somClient.GetMs(getMsOp);

     MsProblemCalculation calc = getMsResult.meta.item.problemMd.calculation;
     //Выводим данные о расчёте в окно консоли
     if ((calc.pointPassed == 0) && (calc.pointCount !=0))
     {
         Console.WriteLine("Информация о расчёте задачи:");
         Console.WriteLine("".PadRight(3) + "- количество шагов расчёта: " + calc.pointCount);
         Console.WriteLine("".PadRight(3) + "- данные выгружаются в выходные переменные после окончания расчёта: " + calc.saveData);
         Console.WriteLine("".PadRight(3) + "- данные на период идентификации копируются из сценария «Факт»: " + calc.copyFact);
         Console.WriteLine("".PadRight(3) + "- пустые значения в данных заполняются нулями: " + calc.treatNullsAsZeros);
         Console.WriteLine("".PadRight(3) + "- модель в процессе расчёта: " + calc.isRunning);

     };
     Console.WriteLine("Расчёт задачи. Шаг '" + calc.pointPassed + "' из '" + calc.pointCount + "'");
     MsCalculationState calcState = calc.calculationState;
     Console.WriteLine("".PadRight(3) + "- действие: " + calcState.message);
     Console.WriteLine("".PadRight(3) + "- уравнение: " + calcState.model.generatedName);
     Console.WriteLine("".PadRight(3) + "- ключ сценария расчёта: "+calcState.scenarioKey);
     Console.WriteLine("".PadRight(3) + "- точка расчёта: " + calcState.currentPoint);
     Console.WriteLine("".PadRight(3) + "- значения: " + printArray(calcState.values));
     bool continueCalc = calc.isSuspend.Value;
     return continueCalc;
 }


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
