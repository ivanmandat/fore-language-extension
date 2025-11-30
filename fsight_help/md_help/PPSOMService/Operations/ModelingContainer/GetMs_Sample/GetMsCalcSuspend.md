# Приостановка расчёта модели

Приостановка расчёта модели
-


**


# Приостановка расчёта модели


Ниже приведен пример использования операции [GetMs](../GetMs.htm) для приостановки расчёта модели.
 В запросе передаются: экземпляр открытого контейнера моделирования, шаблон
 и параметры расчёта модели. В ответе приходит информация о расчёте.


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
  <calcAction>Suspend</calcAction>  <calculationState />
  </problemCalculation>
  <problemCalculationKey>0</problemCalculationKey>  </problem>
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
  <pointCount>0</pointCount>  <pointPassed>0</pointPassed>  <saveData>1</saveData>  <copyFact>0</copyFact>  <treatNullsAsZeros>0</treatNullsAsZeros>  <isRunning>0</isRunning>[![](../../../minus.gif)](../../../#)<calculationState>
  <message>Расчет задачи окончен. Время расчета составило 00:00:00</message>  </calculationState>
  <isSuspend>1</isSuspend>  <saveZeros>1</saveZeros>  <overwriteSameValues>0</overwriteSameValues>  </calculation>
  <problemCalculationKey>2</problemCalculationKey>  <useScenarios>1</useScenarios>  <readOnly>0</readOnly>  </problemMd>
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
             "calcAction" : "Suspend",
             "calculationState" : ""
            },
           "problemCalculationKey" : "0"
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
           "calculationState" :
            {
             "message" : "Расчет задачи окончен. Время расчета составило 00:00:00"
            },
           "isSuspend" : "1",
           "saveZeros" : "1",
           "overwriteSameValues" : "0"
          },
         "problemCalculationKey" : "2",
         "useScenarios" : "1",
         "readOnly" : "0"
        }
      }
    }
  }
}


public static MsItem GetMsCalcSuspend(MsId ms, uint modelKey, uint? prCalcKey)
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
                    // Задаём шаблон расчёта данных
                    problem = new MsProblemPattern()
                    {
                        problemCalculation = new MsProblemCalculationPattern()
                        {
                            calcAction = CalcAction.Suspend,
                            calculationState = new MsCalculationStatePattern()
                        },
                        problemCalculationKey = prCalcKey
                    }
                }
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Приостанавливаем расчёт
    var result = somClient.GetMs(getMsOp);
    return result.meta.item;
}


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
