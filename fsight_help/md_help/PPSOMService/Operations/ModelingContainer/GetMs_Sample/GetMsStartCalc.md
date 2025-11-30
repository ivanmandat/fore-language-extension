# Создание объекта для расчёта модели

Создание объекта для расчёта модели
-


**


# Создание объекта для расчёта модели


Ниже приведен пример использования операции [GetMs](../GetMs.htm) для создания объекта, выполняющего
 расчёт модели. В запросе передаются: экземпляр открытого контейнера моделирования, шаблон
 и параметры расчёта модели. В ответе приходят параметры расчёта.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE</id>  </tMs>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>[![](../../../minus.gif)](../../../#)<item>
  <key>306496</key>[![](../../../minus.gif)](../../../#)<problem>
[![](../../../minus.gif)](../../../#)<problemCalculation>
  <calculationState />
  </problemCalculation>
[![](../../../minus.gif)](../../../#)<calculate>
  <includedScenarioKeys />
  <factIncluded>true</factIncluded>[![](../../../minus.gif)](../../../#)<paramValues>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>0</k>  <id>ITEM1</id>  <value>5</value>  </Item>
  </its>
  </paramValues>
[![](../../../minus.gif)](../../../#)<period>
  <identificationStartDate>1990-01-01</identificationStartDate>  <identificationEndDate>2005-01-01</identificationEndDate>  <forecastStartDate>2006-01-01</forecastStartDate>  <forecastEndDate>2015-01-01</forecastEndDate>  </period>
[![](../../../minus.gif)](../../../#)<dataLoadingPeriod>
  <useDefault>false</useDefault>  <startDate>1990-01-01</startDate>  <endDate>2006-01-01</endDate>  </dataLoadingPeriod>
  <defaultLevel>Year</defaultLevel>  <breakOnError>true</breakOnError>  <clearSeriesOnWarning>true</clearSeriesOnWarning>  <filterWarnings>true</filterWarnings>  </calculate>
  </problem>
  </item>
  </pattern>
  </tArg>
  </GetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="**ключ 306480**" isShortcut="**0**" isLink="**0**" ver="**6**" hf="**0**">
  <i>MODELSPACE</i>  <n>Контейнер моделирования</n>  <k>306480</k>  <c>5121</c>  <p>1580</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<item>
  <k>306496</k>  <id>OBJ306496</id>  <n>Задача моделирования</n>  <vis>1</vis>  <type>Problem</type>[![](../../../minus.gif)](../../../#)<problemMd>
[![](../../../minus.gif)](../../../#)<calculation>
  <pointCount>0</pointCount>  <pointPassed>0</pointPassed>  <saveData>1</saveData>  <copyFact>0</copyFact>  <treatNullsAsZeros>0</treatNullsAsZeros>  <isRunning>0</isRunning>  <isSuspend>0</isSuspend>  <saveZeros>1</saveZeros>  <overwriteSameValues>0</overwriteSameValues>  </calculation>
  <problemCalculationKey>0</problemCalculationKey>  <useScenarios>1</useScenarios>  <readOnly>0</readOnly>  </problemMd>
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
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "item" :
        {
         "key" : "306496",
         "problem" :
          {
           "problemCalculation" :
            {
             "calculationState" : ""
            },
           "calculate" :
            {
             "includedScenarioKeys" : "",
             "factIncluded" : "true",
             "paramValues" :
              {
               "its" :
                {
                 "Item" :
                  {
                   "k" : "0",
                   "id" : "ITEM1",
                   "value" : "5"
                  }
                }
              },
             "period" :
              {
               "identificationStartDate" : "1990-01-01",
               "identificationEndDate" : "2005-01-01",
               "forecastStartDate" : "2006-01-01",
               "forecastEndDate" : "2015-01-01"
              },
             "dataLoadingPeriod" :
              {
               "useDefault" : "false",
               "startDate" : "1990-01-01",
               "endDate" : "2006-01-01"
              },
             "defaultLevel" : "Year",
             "breakOnError" : "true",
             "clearSeriesOnWarning" : "true",
             "filterWarnings" : "true"
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
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "ключ 306480",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "6",
         "@hf" : "0",
         "i" : "MODELSPACE",
         "n" : "Контейнер моделирования",
         "k" : "306480",
         "c" : "5121",
         "p" : "1580",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "item" :
      {
       "k" : "306496",
       "id" : "OBJ306496",
       "n" : "Задача моделирования",
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
           "isSuspend" : "0",
           "saveZeros" : "1",
           "overwriteSameValues" : "0"
          },
         "problemCalculationKey" : "0",
         "useScenarios" : "1",
         "readOnly" : "0"
        }
      }
    }
  }
}


public static uint? GetMsStartCalc(MsId ms, uint modelKey)
{
    var getMsOp = new GetMs()
    {
        // Задаём параметры выполнения операции
        tMs = ms,
        tArg = new GetMsArg()
        {  // Задаём общий шаблон извлечения данных
            pattern = new MsMdPattern()
            {
                item = new MsItemPattern()
                {   // Задаём ключ рассчитываемой модели
                    key = modelKey,
                    problem = new MsProblemPattern()
                    {  // Задаём шаблон расчёта данных
                        problemCalculation = new MsProblemCalculationPattern()
                        {
                            calculationState = new MsCalculationStatePattern() { }
                        },
                        calculate = new MsProblemCalculationSettings()
                        {
                            includedScenarioKeys = new long[] { },
                            factIncluded = true,
                            // Задаём значения параметров метамодели
                            paramValues = new MsModelParamValues()
                            {
                                its = new MsModelParamValue[]
                                {
                                new MsModelParamValue()
                                {
                                    id = "ITEM1",
                                    value = "5"
                                }
                                }
                            },
                            // Задаём периоды расчёта
                            period = new MsModelPeriod()
                            {
                                identificationStartDate = DateTime.Parse("01.01.1990"),
                                identificationEndDate = DateTime.Parse("01.01.2005"),
                                forecastStartDate = DateTime.Parse("01.01.2006"),
                                forecastEndDate = DateTime.Parse("01.01.2015")
                            },
                            // Задаём периоды загрузки данных
                            dataLoadingPeriod = new MsDataLoadingPeriod()
                            {
                                useDefault = false,
                                startDate = DateTime.Parse("01.01.1990"),
                                endDate = DateTime.Parse("01.01.2006")
                            },
                            // Задаём календарную динамику и прочие параметры
                            defaultLevel = DimCalendarLvl.Year,
                            breakOnError = true,
                            clearSeriesOnWarning = true,
                            filterWarnings = true
                        }
                    }
                }
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Запускаем расчёт
    GetMsResult getMsResult = somClient.GetMs(getMsOp);
    uint? prCalcKey = getMsResult.meta.item.problemMd.problemCalculationKey;
    return prCalcKey;
}


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
