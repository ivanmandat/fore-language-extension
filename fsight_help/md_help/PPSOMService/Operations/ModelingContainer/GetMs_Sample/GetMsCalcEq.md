# Расчёт уравнения

Расчёт уравнения
-


**


# Расчёт уравнения


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для расчёта уравнения. В запросе передаются: экземпляр открытого контейнера
 моделирования, шаблон расчёта уравнения и параметры выполнения операции.
 В ответе приходит экземпляр модели, содержащей уравнение с результатами
 расчёта.


Для выполнения примера уравнение должно рассчитываться методом «ARIMA».


В примере C# для вывода результатов используются вспомогательные процедуры:
 PrintStat, PrintCoef,
 PrintStatCoef, printARMA,
 printSeries, printCorrel,
 printArray.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>FMCFHDKCILMBFOAEIPIHNADFKGINDLOELLPHABJCJOEOKJNL!M!S!CLICDCEKCILMBFOAENGEBOPHPJKKIMALEIIAELEOPFIDCCJFF</id>  </tMs>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>false</obInst>  <all>false</all>[![](../../../minus.gif)](../../../#)<item>
  <key>89669</key>[![](../../../minus.gif)](../../../#)<problem>
[![](../../../minus.gif)](../../../#)<metamodel>
  <calculationChain>Get</calculationChain>[![](../../../minus.gif)](../../../#)<calcChainPattern>
[![](../../../minus.gif)](../../../#)<modelPattern>
[![](../../../minus.gif)](../../../#)<transform>
[![](../../../minus.gif)](../../../#)<formulas>
  <method />
  </formulas>
  <displayId>true</displayId>[![](../../../minus.gif)](../../../#)<equationsFormula>
  <method />
  </equationsFormula>
  <kind>true</kind>  </transform>
  </modelPattern>
[![](../../../minus.gif)](../../../#)<entryKeys>
  <l>4</l>  </entryKeys>
  </calcChainPattern>
  </metamodel>
  </problem>
  </item>
  </pattern>
[![](../../../minus.gif)](../../../#)<execParams>
  <k>0</k>[![](../../../minus.gif)](../../../#)<modelKeys>
  <l>4</l>  </modelKeys>
  <scenarioKeys />
  <execMethod>true</execMethod>  <execSummaryStatistics>true</execSummaryStatistics>  <execCoefficients>true</execCoefficients>  <execEvaluateSeries>true</execEvaluateSeries>  <execARMACoefficients>true</execARMACoefficients>  <execAutoCorrelation>true</execAutoCorrelation>  <execInitDefault>true</execInitDefault>  <execStatCoefficients>true</execStatCoefficients>  <execGenerateName>true</execGenerateName>  </execParams>
  </tArg>
  </GetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>FMCFHDKCILMBFOAEIPIHNADFKGINDLOELLPHABJCJOEOKJNL!M!S!CLICDCEKCILMBFOAENGEBOPHPJKKIMALEIIAELEOPFIDCCJFF</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<item>
  <k>89669</k>  <id>MODEL_NEW</id>  <n>MODEL_NEW</n>  <vis>1</vis>  <type>Problem</type>[![](../../../minus.gif)](../../../#)<problemMd>
[![](../../../minus.gif)](../../../#)<metamodel>
  <k>89670</k>[![](../../../minus.gif)](../../../#)<calculationChain>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>4</k>  <id>OBJ4</id>  <n>MyOutputVavable|A[t] = A0, (От родителя)-(От родителя)</n>  <vis>1</vis>  <type>Model</type>  <excluded>0</excluded>  <graphMeta />
[![](../../../minus.gif)](../../../#)<model>
[![](../../../minus.gif)](../../../#)<transform>
[![](../../../minus.gif)](../../../#)<formulas>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <kind>Arima</kind>[![](../../../minus.gif)](../../../#)<method>
[![](../../../minus.gif)](../../../#)<arima>
  <maxIteration>500</maxIteration>  <constantMode>AutoEstimate</constantMode>  <constantValue>21.1</constantValue>[![](../../../minus.gif)](../../../#)<missingData>
  <specifiedVector />
  <method>Casewise</method>  <methodParameter>5</methodParameter>  <specifiedValue>0</specifiedValue>[![](../../../minus.gif)](../../../#)<specifiedTerm>
  <k>4294967295</k>  </specifiedTerm>
  </missingData>
  <confidenceLevel>0.95</confidenceLevel>[![](../../../minus.gif)](../../../#)<ARMA>
  <orderAR />
  <orderMA />
  <calcInitMode>Auto</calcInitMode>  <initAR />
  <initMA />
  <initIntercept>NaN</initIntercept>  <estimationMethod>LevenbergMarquardt</estimationMethod>  <tolerance>0.0001</tolerance>  <maxIteration>500</maxIteration>[![](../../../minus.gif)](../../../#)<coefficientsAR>
  <estimate />
  <standardError />
  <tStatistic />
  <probability />
  </coefficientsAR>
[![](../../../minus.gif)](../../../#)<coefficientsMA>
  <estimate />
  <standardError />
  <tStatistic />
  <probability />
  </coefficientsMA>
  <diff>0</diff>  <diffSeas>1</diffSeas>  <orderARSeas />
  <orderMASeas />
  <initARSeas />
  <initMASeas />
  <periodSeas>0</periodSeas>[![](../../../minus.gif)](../../../#)<coefficientsARSeas>
  <estimate />
  <standardError />
  <tStatistic />
  <probability />
  </coefficientsARSeas>
[![](../../../minus.gif)](../../../#)<coefficientsMASeas>
  <estimate />
  <standardError />
  <tStatistic />
  <probability />
  </coefficientsMASeas>
  <useARMAasInstrums>1</useARMAasInstrums>  <useAnalyticDeriv>1</useAnalyticDeriv>  <useBackCast>1</useBackCast>  </ARMA>
[![](../../../minus.gif)](../../../#)<explained>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>MyOutputVavable|A</id>  <n>MyOutputVavable|A</n>  <vis>1</vis>  <variableKey>1</variableKey>  <stubKey>89671</stubKey>[![](../../../minus.gif)](../../../#)<selections>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
[![](../../../minus.gif)](../../../#)<id>
  <id>89683</id>  </id>
  <variant>2</variant>  </Item>
  </its>
  </selections>
  <aggregator>None</aggregator>[![](../../../minus.gif)](../../../#)<parametrizedDimensions>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <dimension>0</dimension>  <parameter>0</parameter>  </Item>
  </its>
  </parametrizedDimensions>
[![](../../../minus.gif)](../../../#)<unitInfo>
  <unit>4294967295</unit>  <measure>4294967295</measure>  <baseUnit>4294967295</baseUnit>  <unitsDimensionKey>0</unitsDimensionKey>  </unitInfo>
  <level>Year</level>  </slice>
  <lag />
  <key>0</key>  <termToText>{MyOutputVavable|A[t]}</termToText>  <termToInnerText>@_1:0[]</termToInnerText>[![](../../../minus.gif)](../../../#)<termInfo>
  <k>4294967295</k>  <lag>0</lag>[![](../../../minus.gif)](../../../#)<inversion>
  <type>None</type>  <lag>PrecidingValue</lag>  <previousLag>-1</previousLag>  <seasonality>None</seasonality>  <dependence>Linear</dependence>  <K>3</K>  </inversion>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>MyOutputVavable|A</id>  <n>MyOutputVavable|A</n>  <vis>1</vis>  <variableKey>1</variableKey>  <stubKey>89671</stubKey>[![](../../../minus.gif)](../../../#)<selections>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
[![](../../../minus.gif)](../../../#)<id>
  <id>89683</id>  </id>
  <variant>2</variant>  </Item>
  </its>
  </selections>
  <aggregator>None</aggregator>[![](../../../minus.gif)](../../../#)<parametrizedDimensions>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <dimension>0</dimension>  <parameter>0</parameter>  </Item>
  </its>
  </parametrizedDimensions>
[![](../../../minus.gif)](../../../#)<unitInfo>
  <unit>4294967295</unit>  <measure>4294967295</measure>  <baseUnit>4294967295</baseUnit>  <unitsDimensionKey>0</unitsDimensionKey>  </unitInfo>
  <level>Year</level>  </slice>
  <date>1899-12-30</date>  </termInfo>
[![](../../../minus.gif)](../../../#)<unitInfo>
  <unit>4294967295</unit>  <measure>4294967295</measure>  <baseUnit>4294967295</baseUnit>  <unitsDimensionKey>0</unitsDimensionKey>  </unitInfo>
  <included>0</included>  </explained>
[![](../../../minus.gif)](../../../#)<autoCorrelation>
[![](../../../minus.gif)](../../../#)<acf>
  <d>0.8806007142476413</d>  <d>0.7755396833857469</d>  <d>0.6492537711209424</d>  <d>0.5441074569585843</d>  <d>0.4357976653696499</d>  <d>0.3308992057992645</d>  <d>0.230094344651138</d>  <d>0.1340653483289803</d>  <d>0.04349448323650126</d>  <d>-0.04093598422258941</d>  </acf>
[![](../../../minus.gif)](../../../#)<pacf>
  <d>0.8806007142476413</d>  <d>0.0003654786750526034</d>  <d>-0.1503469976514621</d>  <d>0.009199850923512483</d>  <d>-0.06627064694467796</d>  <d>-0.07473420934025392</d>  <d>-0.05207086459054212</d>  <d>-0.06025413480285589</d>  <d>-0.06127247771726842</d>  <d>-0.05803709524513948</d>  </pacf>
[![](../../../minus.gif)](../../../#)<qStatistics>
  <d>22.58132583422224</d>  <d>40.82566711623952</d>  <d>54.16802252411557</d>  <d>63.96468294205459</d>  <d>70.54856258696468</d>  <d>74.53415453907314</d>  <d>76.5627229925804</d>  <d>77.2896519275377</d>  <d>77.37066419885673</d>  <d>77.44691104245111</d>  </qStatistics>
[![](../../../minus.gif)](../../../#)<probability>
  <d>2.014330523714136e-06</d>  <d>1.364014567961647e-09</d>  <d>1.033195751176663e-11</d>  <d>4.251043961289724e-13</d>  <d>7.882583474838611e-14</d>  <d>4.785061236134425e-14</d>  <d>6.905587213168474e-14</d>  <d>1.714184350021242e-13</d>  <d>5.370148770111882e-13</d>  <d>1.585953590677036e-12</d>  </probability>
  <confidenceLevel>0.3779644730092272</confidenceLevel>  </autoCorrelation>
[![](../../../minus.gif)](../../../#)<armaCoefficients>
  <orderAR />
  <orderMA />
[![](../../../minus.gif)](../../../#)<coefficientsAR>
  <estimate />
  <standardError />
  <tStatistic />
  <probability />
  </coefficientsAR>
[![](../../../minus.gif)](../../../#)<coefficientsMA>
  <estimate />
  <standardError />
  <tStatistic />
  <probability />
  </coefficientsMA>
  <orderARSeas />
  <orderMASeas />
[![](../../../minus.gif)](../../../#)<coefficientsARSeas>
  <estimate />
  <standardError />
  <tStatistic />
  <probability />
  </coefficientsARSeas>
[![](../../../minus.gif)](../../../#)<coefficientsMASeas>
  <estimate />
  <standardError />
  <tStatistic />
  <probability />
  </coefficientsMASeas>
  </armaCoefficients>
[![](../../../minus.gif)](../../../#)<statCoefficients>
[![](../../../minus.gif)](../../../#)<intercept>
  <mode>AutoEstimate</mode>  <estimate>21.1</estimate>  <standardError>2.402626767647315</standardError>  <tStatistic>8.782054826044169</tStatistic>  <probability>4.117620577837044e-09</probability>  </intercept>
[![](../../../minus.gif)](../../../#)<coefficients>
  <estimate />
  <standardError />
  <tStatistic />
  <probability />
  </coefficients>
  </statCoefficients>
  </arima>
[![](../../../minus.gif)](../../../#)<summaryStatistics>
  <stR2>-2.220446049250313e-16</stR2>  <stAdjR2>-2.220446049250313e-16</stAdjR2>  <stR2_2>-2.220446049250313e-16</stR2_2>  <stAdjR2_2>-2.220446049250313e-16</stAdjR2_2>  <stSE>12.25104077211402</stSE>  <stSSR>3752.200000000001</stSSR>  <stLogL>-101.5284158459659</stLogL>  <stDW>0.02452161398646127</stDW>  <stDWLowerBound>5.059215779628777e-27</stDWLowerBound>  <stDWUpperBound>5.059215779628777e-27</stDWUpperBound>  <stSD>12.25104077211402</stSD>  <stAIC>7.886801218920452</stAIC>  <stSC>7.935189547305892</stSC>  <stFstat_2>-INF</stFstat_2>  <stProbFstat_2>NaN</stProbFstat_2>  <stFstat>-INF</stFstat>  <stProbFstat>NaN</stProbFstat>  <stME>-5.465713352000771e-15</stME>  <stMAE>10.4</stMAE>  <stMSE>144.3153846153846</stMSE>  <stMaxAE>20.1</stMaxAE>  <stSqMSE>12.01313383823658</stSqMSE>  <stVE>144.3153846153846</stVE>  <stSEE>12.01313383823657</stSEE>  <stMD>21.1</stMD>  <stHQcriterion>7.900735306675025</stHQcriterion>  <stAvgLogL>NaN</stAvgLogL>  <stMcFaddenRsquared>NaN</stMcFaddenRsquared>  <stRestrLogL>NaN</stRestrLogL>  <stLRstatistic>NaN</stLRstatistic>  <stLRprobability>NaN</stLRprobability>  <stIncludedObservations>26</stIncludedObservations>  <stJstat>NaN</stJstat>  <stProbJstat>NaN</stProbJstat>  <stNumOfIter>-1</stNumOfIter>  <stJBStat>1.524528747984945</stJBStat>  <stProbJBStat>0.4666086533649697</stProbJBStat>  </summaryStatistics>
  <name>21.1000</name>[![](../../../minus.gif)](../../../#)<evaluateSeries>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <scenarioKey>4294967295</scenarioKey>[![](../../../minus.gif)](../../../#)<fact>
  <d>1</d>  <d>4</d>  <d>2</d>  <d>7</d>  <d>7.5</d>  <d>9.1</d>  <d>10.7</d>  <d>12.3</d>  <d>13.9</d>  <d>15.5</d>  <d>17.1</d>  <d>18.7</d>  <d>20.3</d>  <d>21.9</d>  <d>23.5</d>  <d>25.1</d>  <d>26.7</d>  <d>28.3</d>  <d>29.9</d>  <d>31.5</d>  <d>33.1</d>  <d>34.7</d>  <d>36.3</d>  <d>37.9</d>  <d>39.5</d>  <d>41.1</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </fact>
[![](../../../minus.gif)](../../../#)<modelling>
  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>21.1</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </modelling>
[![](../../../minus.gif)](../../../#)<residuals>
  <d>-20.1</d>  <d>-17.1</d>  <d>-19.1</d>  <d>-14.1</d>  <d>-13.6</d>  <d>-12.00000000000001</d>  <d>-10.40000000000001</d>  <d>-8.800000000000004</d>  <d>-7.200000000000005</d>  <d>-5.600000000000005</d>  <d>-4.000000000000004</d>  <d>-2.400000000000006</d>  <d>-0.8000000000000043</d>  <d>0.7999999999999936</d>  <d>2.399999999999995</d>  <d>3.999999999999996</d>  <d>5.599999999999994</d>  <d>7.199999999999996</d>  <d>8.799999999999994</d>  <d>10.4</d>  <d>12</d>  <d>13.6</d>  <d>15.19999999999999</d>  <d>16.79999999999999</d>  <d>18.4</d>  <d>20</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </residuals>
[![](../../../minus.gif)](../../../#)<input>
  <d>3</d>  <d>7</d>  <d>2</d>  <d>6</d>  <d>4</d>  <d>1</d>  <d>5</d>  <d>3.42857143</d>  <d>3.28571429</d>  <d>3.14285714</d>  <d>3</d>  <d>2.85714286</d>  <d>2.71428571</d>  <d>2.57142857</d>  <d>2.42857143</d>  <d>2.28571429</d>  <d>2.14285714</d>  <d>2</d>  <d>1.85714286</d>  <d>1.71428571</d>  <d>1.57142857</d>  <d>1.42857143</d>  <d>1.28571429</d>  <d>1.14285714</d>  <d>1</d>  <d>0.85714286</d>  <d>0.71428571</d>  <d>0.57142857</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </input>
[![](../../../minus.gif)](../../../#)<factors>
  <its />
  </factors>
  </Item>
  </its>
[![](../../../minus.gif)](../../../#)<dates>
  <it>1990A1</it>  <it>1991A1</it>  <it>1992A1</it>  <it>1993A1</it>  <it>1994A1</it>  <it>1995A1</it>  <it>1996A1</it>  <it>1997A1</it>  <it>1998A1</it>  <it>1999A1</it>  <it>2000A1</it>  <it>2001A1</it>  <it>2002A1</it>  <it>2003A1</it>  <it>2004A1</it>  <it>2005A1</it>  <it>2006A1</it>  <it>2007A1</it>  <it>2008A1</it>  <it>2009A1</it>  <it>2010A1</it>  <it>2011A1</it>  <it>2012A1</it>  <it>2013A1</it>  <it>2014A1</it>  <it>2015A1</it>  <it>2016A1</it>  <it>2017A1</it>  <it>2018A1</it>  <it>2019A1</it>  <it>2020A1</it>  </dates>
  </evaluateSeries>
[![](../../../minus.gif)](../../../#)<inversionInfo>
  <type>None</type>  <lag>PrecidingValue</lag>  <previousLag>-1</previousLag>  <seasonality>None</seasonality>  <dependence>Linear</dependence>  <K>3</K>  </inversionInfo>
  <doUseR>0</doUseR>  <supportsR>1</supportsR>  </method>
  <calendarLevel>Year</calendarLevel>  <outputSliceKey>0</outputSliceKey>  </it>
  </its>
  </formulas>
  <displayId>0</displayId>  <kind>Simple</kind>  </transform>
  <warnings />
  <readOnly>0</readOnly>  </model>
  </Item>
  </its>
  </calculationChain>
[![](../../../minus.gif)](../../../#)<visualController>
  <userRPath />
  <isRExist>0</isRExist>  </visualController>
[![](../../../minus.gif)](../../../#)<suppressEmptyFilter>
  <suppressEmpty>0</suppressEmpty>  <suppressEmptyArea>SerieBounds</suppressEmptyArea>  </suppressEmptyFilter>
  <readOnly>0</readOnly>  <variableTestUseR>0</variableTestUseR>  <calculateIdentOnFact>0</calculateIdentOnFact>  </metamodel>
  <useScenarios>0</useScenarios>  <readOnly>0</readOnly>  </problemMd>
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
     "id" : "FMCFHDKCILMBFOAEIPIHNADFKGINDLOELLPHABJCJOEOKJNL!M!S!CLICDCEKCILMBFOAENGEBOPHPJKKIMALEIIAELEOPFIDCCJFF"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "false",
       "all" : "false",
       "item" :
        {
         "key" : "89669",
         "problem" :
          {
           "metamodel" :
            {
             "calculationChain" : "Get",
             "calcChainPattern" :
              {
               "modelPattern" :
                {
                 "transform" :
                  {
                   "formulas" :
                    {
                     "method" : ""
                    },
                   "displayId" : "true",
                   "equationsFormula" :
                    {
                     "method" : ""
                    },
                   "kind" : "true"
                  }
                },
               "entryKeys" :
                {
                 "l" : "4"
                }
              }
            }
          }
        }
      },
     "execParams" :
      {
       "k" : "0",
       "modelKeys" :
        {
         "l" : "4"
        },
       "scenarioKeys" : "",
       "execMethod" : "true",
       "execSummaryStatistics" : "true",
       "execCoefficients" : "true",
       "execEvaluateSeries" : "true",
       "execARMACoefficients" : "true",
       "execAutoCorrelation" : "true",
       "execInitDefault" : "true",
       "execStatCoefficients" : "true",
       "execGenerateName" : "true"
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
     "id" : "FMCFHDKCILMBFOAEIPIHNADFKGINDLOELLPHABJCJOEOKJNL!M!S!CLICDCEKCILMBFOAENGEBOPHPJKKIMALEIIAELEOPFIDCCJFF"
    },
   "meta" :
    {
     "item" :
      {
       "k" : "89669",
       "id" : "MODEL_NEW",
       "n" : "MODEL_NEW",
       "vis" : "1",
       "type" : "Problem",
       "problemMd" :
        {
         "metamodel" :
          {
           "k" : "89670",
           "calculationChain" :
            {
             "its" :
              {
               "Item" :
                {
                 "k" : "4",
                 "id" : "OBJ4",
                 "n" : "MyOutputVavable|A[t] = A0, (От родителя)-(От родителя)",
                 "vis" : "1",
                 "type" : "Model",
                 "excluded" : "0",
                 "graphMeta" : "",
                 "model" :
                  {
                   "transform" :
                    {
                     "formulas" :
                      {
                       "its" :
                        {
                         "it" :
                          [
                            {
                             "k" : "0",
                             "kind" : "Arima",
                             "method" :
                              {
                               "arima" :
                                {
                                 "maxIteration" : "500",
                                 "constantMode" : "AutoEstimate",
                                 "constantValue" : "21.1",
                                 "missingData" :
                                  {
                                   "specifiedVector" : "",
                                   "method" : "Casewise",
                                   "methodParameter" : "5",
                                   "specifiedValue" : "0",
                                   "specifiedTerm" :
                                    {
                                     "k" : "4294967295"
                                    }
                                  },
                                 "confidenceLevel" : "0.95",
                                 "ARMA" :
                                  {
                                   "orderAR" : "",
                                   "orderMA" : "",
                                   "calcInitMode" : "Auto",
                                   "initAR" : "",
                                   "initMA" : "",
                                   "initIntercept" : "NaN",
                                   "estimationMethod" : "LevenbergMarquardt",
                                   "tolerance" : "0.0001",
                                   "maxIteration" : "500",
                                   "coefficientsAR" :
                                    {
                                     "estimate" : "",
                                     "standardError" : "",
                                     "tStatistic" : "",
                                     "probability" : ""
                                    },
                                   "coefficientsMA" :
                                    {
                                     "estimate" : "",
                                     "standardError" : "",
                                     "tStatistic" : "",
                                     "probability" : ""
                                    },
                                   "diff" : "0",
                                   "diffSeas" : "1",
                                   "orderARSeas" : "",
                                   "orderMASeas" : "",
                                   "initARSeas" : "",
                                   "initMASeas" : "",
                                   "periodSeas" : "0",
                                   "coefficientsARSeas" :
                                    {
                                     "estimate" : "",
                                     "standardError" : "",
                                     "tStatistic" : "",
                                     "probability" : ""
                                    },
                                   "coefficientsMASeas" :
                                    {
                                     "estimate" : "",
                                     "standardError" : "",
                                     "tStatistic" : "",
                                     "probability" : ""
                                    },
                                   "useARMAasInstrums" : "1",
                                   "useAnalyticDeriv" : "1",
                                   "useBackCast" : "1"
                                  },
                                 "explained" :
                                  {
                                   "slice" :
                                    {
                                     "k" : "0",
                                     "id" : "MyOutputVavable|A",
                                     "n" : "MyOutputVavable|A",
                                     "vis" : "1",
                                     "variableKey" : "1",
                                     "stubKey" : "89671",
                                     "selections" :
                                      {
                                       "its" :
                                        {
                                         "Item" :
                                          {
                                           "id" :
                                            {
                                             "id" : "89683"
                                            },
                                           "variant" : "2"
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
                                     "level" : "Year"
                                    },
                                   "lag" : "",
                                   "key" : "0",
                                   "termToText" : "{MyOutputVavable|A[t]}",
                                   "termToInnerText" : "@_1:0[]",
                                   "termInfo" :
                                    {
                                     "k" : "4294967295",
                                     "lag" : "0",
                                     "inversion" :
                                      {
                                       "type" : "None",
                                       "lag" : "PrecidingValue",
                                       "previousLag" : "-1",
                                       "seasonality" : "None",
                                       "dependence" : "Linear",
                                       "K" : "3"
                                      },
                                     "slice" :
                                      {
                                       "k" : "0",
                                       "id" : "MyOutputVavable|A",
                                       "n" : "MyOutputVavable|A",
                                       "vis" : "1",
                                       "variableKey" : "1",
                                       "stubKey" : "89671",
                                       "selections" :
                                        {
                                         "its" :
                                          {
                                           "Item" :
                                            {
                                             "id" :
                                              {
                                               "id" : "89683"
                                              },
                                             "variant" : "2"
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
                                       "level" : "Year"
                                      },
                                     "date" : "1899-12-30"
                                    },
                                   "unitInfo" :
                                    {
                                     "unit" : "4294967295",
                                     "measure" : "4294967295",
                                     "baseUnit" : "4294967295",
                                     "unitsDimensionKey" : "0"
                                    },
                                   "included" : "0"
                                  },
                                 "autoCorrelation" :
                                  {
                                   "acf" :
                                    {
                                     "d" :
                                      [
                                        "0.8806007142476413",
                                        "0.7755396833857469",
                                        "0.6492537711209424",
                                        "0.5441074569585843",
                                        "0.4357976653696499",
                                        "0.3308992057992645",
                                        "0.230094344651138",
                                        "0.1340653483289803",
                                        "0.04349448323650126",
                                        "-0.04093598422258941"
                                      ]
                                    },
                                   "pacf" :
                                    {
                                     "d" :
                                      [
                                        "0.8806007142476413",
                                        "0.0003654786750526034",
                                        "-0.1503469976514621",
                                        "0.009199850923512483",
                                        "-0.06627064694467796",
                                        "-0.07473420934025392",
                                        "-0.05207086459054212",
                                        "-0.06025413480285589",
                                        "-0.06127247771726842",
                                        "-0.05803709524513948"
                                      ]
                                    },
                                   "qStatistics" :
                                    {
                                     "d" :
                                      [
                                        "22.58132583422224",
                                        "40.82566711623952",
                                        "54.16802252411557",
                                        "63.96468294205459",
                                        "70.54856258696468",
                                        "74.53415453907314",
                                        "76.5627229925804",
                                        "77.2896519275377",
                                        "77.37066419885673",
                                        "77.44691104245111"
                                      ]
                                    },
                                   "probability" :
                                    {
                                     "d" :
                                      [
                                        "2.014330523714136e-06",
                                        "1.364014567961647e-09",
                                        "1.033195751176663e-11",
                                        "4.251043961289724e-13",
                                        "7.882583474838611e-14",
                                        "4.785061236134425e-14",
                                        "6.905587213168474e-14",
                                        "1.714184350021242e-13",
                                        "5.370148770111882e-13",
                                        "1.585953590677036e-12"
                                      ]
                                    },
                                   "confidenceLevel" : "0.3779644730092272"
                                  },
                                 "armaCoefficients" :
                                  {
                                   "orderAR" : "",
                                   "orderMA" : "",
                                   "coefficientsAR" :
                                    {
                                     "estimate" : "",
                                     "standardError" : "",
                                     "tStatistic" : "",
                                     "probability" : ""
                                    },
                                   "coefficientsMA" :
                                    {
                                     "estimate" : "",
                                     "standardError" : "",
                                     "tStatistic" : "",
                                     "probability" : ""
                                    },
                                   "orderARSeas" : "",
                                   "orderMASeas" : "",
                                   "coefficientsARSeas" :
                                    {
                                     "estimate" : "",
                                     "standardError" : "",
                                     "tStatistic" : "",
                                     "probability" : ""
                                    },
                                   "coefficientsMASeas" :
                                    {
                                     "estimate" : "",
                                     "standardError" : "",
                                     "tStatistic" : "",
                                     "probability" : ""
                                    }
                                  },
                                 "statCoefficients" :
                                  {
                                   "intercept" :
                                    {
                                     "mode" : "AutoEstimate",
                                     "estimate" : "21.1",
                                     "standardError" : "2.402626767647315",
                                     "tStatistic" : "8.782054826044169",
                                     "probability" : "4.117620577837044e-09"
                                    },
                                   "coefficients" :
                                    {
                                     "estimate" : "",
                                     "standardError" : "",
                                     "tStatistic" : "",
                                     "probability" : ""
                                    }
                                  }
                                },
                               "summaryStatistics" :
                                {
                                 "stR2" : "-2.220446049250313e-16",
                                 "stAdjR2" : "-2.220446049250313e-16",
                                 "stR2_2" : "-2.220446049250313e-16",
                                 "stAdjR2_2" : "-2.220446049250313e-16",
                                 "stSE" : "12.25104077211402",
                                 "stSSR" : "3752.200000000001",
                                 "stLogL" : "-101.5284158459659",
                                 "stDW" : "0.02452161398646127",
                                 "stDWLowerBound" : "5.059215779628777e-27",
                                 "stDWUpperBound" : "5.059215779628777e-27",
                                 "stSD" : "12.25104077211402",
                                 "stAIC" : "7.886801218920452",
                                 "stSC" : "7.935189547305892",
                                 "stFstat_2" : "-INF",
                                 "stProbFstat_2" : "NaN",
                                 "stFstat" : "-INF",
                                 "stProbFstat" : "NaN",
                                 "stME" : "-5.465713352000771e-15",
                                 "stMAE" : "10.4",
                                 "stMSE" : "144.3153846153846",
                                 "stMaxAE" : "20.1",
                                 "stSqMSE" : "12.01313383823658",
                                 "stVE" : "144.3153846153846",
                                 "stSEE" : "12.01313383823657",
                                 "stMD" : "21.1",
                                 "stHQcriterion" : "7.900735306675025",
                                 "stAvgLogL" : "NaN",
                                 "stMcFaddenRsquared" : "NaN",
                                 "stRestrLogL" : "NaN",
                                 "stLRstatistic" : "NaN",
                                 "stLRprobability" : "NaN",
                                 "stIncludedObservations" : "26",
                                 "stJstat" : "NaN",
                                 "stProbJstat" : "NaN",
                                 "stNumOfIter" : "-1",
                                 "stJBStat" : "1.524528747984945",
                                 "stProbJBStat" : "0.4666086533649697"
                                },
                               "name" : "21.1000",
                               "evaluateSeries" :
                                {
                                 "its" :
                                  {
                                   "Item" :
                                    {
                                     "scenarioKey" : "4294967295",
                                     "fact" :
                                      {
                                       "d" :
                                        [
                                          "1",
                                          "4",
                                          "2",
                                          "7",
                                          "7.5",
                                          "9.1",
                                          "10.7",
                                          "12.3",
                                          "13.9",
                                          "15.5",
                                          "17.1",
                                          "18.7",
                                          "20.3",
                                          "21.9",
                                          "23.5",
                                          "25.1",
                                          "26.7",
                                          "28.3",
                                          "29.9",
                                          "31.5",
                                          "33.1",
                                          "34.7",
                                          "36.3",
                                          "37.9",
                                          "39.5",
                                          "41.1",
                                          "NaN",
                                          "NaN",
                                          "NaN"
                                        ]
                                      },
                                     "modelling" :
                                      {
                                       "d" :
                                        [
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "21.1",
                                          "NaN",
                                          "NaN",
                                          "NaN"
                                        ]
                                      },
                                     "residuals" :
                                      {
                                       "d" :
                                        [
                                          "-20.1",
                                          "-17.1",
                                          "-19.1",
                                          "-14.1",
                                          "-13.6",
                                          "-12.00000000000001",
                                          "-10.40000000000001",
                                          "-8.800000000000004",
                                          "-7.200000000000005",
                                          "-5.600000000000005",
                                          "-4.000000000000004",
                                          "-2.400000000000006",
                                          "-0.8000000000000043",
                                          "0.7999999999999936",
                                          "2.399999999999995",
                                          "3.999999999999996",
                                          "5.599999999999994",
                                          "7.199999999999996",
                                          "8.799999999999994",
                                          "10.4",
                                          "12",
                                          "13.6",
                                          "15.19999999999999",
                                          "16.79999999999999",
                                          "18.4",
                                          "20",
                                          "NaN",
                                          "NaN",
                                          "NaN"
                                        ]
                                      },
                                     "input" :
                                      {
                                       "d" :
                                        [
                                          "3",
                                          "7",
                                          "2",
                                          "6",
                                          "4",
                                          "1",
                                          "5",
                                          "3.42857143",
                                          "3.28571429",
                                          "3.14285714",
                                          "3",
                                          "2.85714286",
                                          "2.71428571",
                                          "2.57142857",
                                          "2.42857143",
                                          "2.28571429",
                                          "2.14285714",
                                          "2",
                                          "1.85714286",
                                          "1.71428571",
                                          "1.57142857",
                                          "1.42857143",
                                          "1.28571429",
                                          "1.14285714",
                                          "1",
                                          "0.85714286",
                                          "0.71428571",
                                          "0.57142857",
                                          "NaN",
                                          "NaN",
                                          "NaN"
                                        ]
                                      },
                                     "factors" :
                                      {
                                       "its" : ""
                                      }
                                    }
                                  },
                                 "dates" :
                                  {
                                   "it" :
                                    [
                                      "1990A1",
                                      "1991A1",
                                      "1992A1",
                                      "1993A1",
                                      "1994A1",
                                      "1995A1",
                                      "1996A1",
                                      "1997A1",
                                      "1998A1",
                                      "1999A1",
                                      "2000A1",
                                      "2001A1",
                                      "2002A1",
                                      "2003A1",
                                      "2004A1",
                                      "2005A1",
                                      "2006A1",
                                      "2007A1",
                                      "2008A1",
                                      "2009A1",
                                      "2010A1",
                                      "2011A1",
                                      "2012A1",
                                      "2013A1",
                                      "2014A1",
                                      "2015A1",
                                      "2016A1",
                                      "2017A1",
                                      "2018A1",
                                      "2019A1",
                                      "2020A1"
                                    ]
                                  }
                                },
                               "inversionInfo" :
                                {
                                 "type" : "None",
                                 "lag" : "PrecidingValue",
                                 "previousLag" : "-1",
                                 "seasonality" : "None",
                                 "dependence" : "Linear",
                                 "K" : "3"
                                },
                               "doUseR" : "0",
                               "supportsR" : "1"
                              },
                             "calendarLevel" : "Year",
                             "outputSliceKey" : "0"
                            }
                          ]
                        }
                      },
                     "displayId" : "0",
                     "kind" : "Simple"
                    },
                   "warnings" : "",
                   "readOnly" : "0"
                  }
                }
              }
            },
           "visualController" :
            {
             "userRPath" : "",
             "isRExist" : "0"
            },
           "suppressEmptyFilter" :
            {
             "suppressEmpty" : "0",
             "suppressEmptyArea" : "SerieBounds"
            },
           "readOnly" : "0",
           "variableTestUseR" : "0",
           "calculateIdentOnFact" : "0"
          },
         "useScenarios" : "0",
         "readOnly" : "0"
        }
      }
    }
  }
}


public static MsCalculationChainEntry GetMsCalcEq(MsId ms, ulong modelKey, ulong eqKey)
{
    var getMsOp = new GetMs();
    // Задаем параметры выполнения операции
    getMsOp.tMs = ms;
    getMsOp.tArg = new GetMsArg()
    {  // Задаем шаблон извлечения данных
        pattern = new MsMdPattern()
        {
            obInst = false,
            all = false,
            item = new MsItemPattern()
            {  // Указываем ключ модели
                key = modelKey,
                problem = new MsProblemPattern()
                {
                    metamodel = new MsMetaModelPattern()
                    {
                        calculationChain = ListOperation.Get,
                        calcChainPattern = new MsCalculationChainPattern()
                        {
                            entryKeys = new long[] { (long)eqKey },
                            modelPattern = new MsModelPattern()
                            {
                                transform = new MsFormulaTransformPattern()
                                {
                                    kind = true,
                                    formulas = new TsFormulaPattern()
                                    {
                                        method = new TsMethodPattern() { }
                                    },
                                    displayId = true,
                                    equationsFormula = new TsFormulaPattern()
                                    {
                                        method = new TsMethodPattern() { }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, // Задаем параметры расчёта уравнения
        execParams = new MsMdExecParams()
        {
            k = 0,
            execMethod = true,
            execEvaluateSeries = true,
            execGenerateName = true,
            execSummaryStatistics = true,
            execAutoCorrelation = true,
            execCoefficients = true,
            execStatCoefficients = true,
            execARMACoefficients = true,
            modelKeys = new long[] { (long)eqKey },
            scenarioKeys = new long[] { },
            execInitDefault = true,
            options = null
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    GetMsResult getMsResult = somClient.GetMs(getMsOp);
    MsCalculationChainEntry chainEntry = getMsResult.meta.item.problemMd.metamodel.calculationChain.its.GetValue(0) as MsCalculationChainEntry;
    // Выводим ошибки и предупреждения
    MsModel eq = chainEntry.model;
    if (eq.warnings != null)
    {
        Console.WriteLine("-- Предупреждения --");
        Console.WriteLine("".PadRight(3) +printArray(eq.warnings));
    }
    if (eq.error == null) //Проверяем, возникли ли ошибки при расчёте уравнения
    {   // Уравнение рассчитано без ошибок
        // Получаем результаты расчёта
        TsFormula formula = eq.transform.formulas.its.GetValue(0) as TsFormula;
        TsArimaMethod arima = formula.method.arima;
        // Получаем статистические характеристики и выводим в окно консоли
        StatSummaryStatistics stat = formula.method.summaryStatistics;
        PrintStat(stat);
        // Поучаем значения коэффициентов и выводим в окно консоли
        StatModelCoefficients coef = arima.statCoefficients;
        PrintCoef(coef);
        // Получаем значения коэффициентов авторегрессии, скользящего среднего и выводим в окно консоли
        SlARMA armaCoef = arima.armaCoefficients;
        printARMA(armaCoef);
        // Получаем значения автокорреляционного анализа
        MsAutoCorrelationResult corr = arima.autoCorrelation;
        printCorrel(corr);
        // Получаем рассчитанные значения и выводим в окно консоли
        MsEvaluateSeriesResult seriesRes = formula.method.evaluateSeries;
        printSeries(seriesRes);
    }
    else // При расчёте уравнения возникли ошибки
    {
        Console.WriteLine("-- Ошибки --");
        Console.WriteLine(eq.error);
    }
    // Возвращаем модель, содержащую уравнение
    return chainEntry;
}
//Процедура вывода в окно консоли значений статистических характеристик
public static void PrintStat(StatSummaryStatistics stat)
{
    Console.WriteLine("-- Статистические характеристики --");
    Console.WriteLine("".PadRight(3) + "- Критерии качества -");
    Console.WriteLine("".PadRight(6) + "- коэффициент детерминации: " + stat.stR2);
    Console.WriteLine("".PadRight(6) + "- скорректированный коэффициент детерминации: " + stat.stAdjR2);
    Console.WriteLine("".PadRight(6) + "- коэффициент детерминации (нецентрированный): " + stat.stR2_2);
    Console.WriteLine("".PadRight(6) + "- скорректированный коэффициент детерминации (нецентрированный): " + stat.stAdjR2_2);
    Console.WriteLine("".PadRight(6) + "- статистика Фишера: " + stat.stFstat);
    Console.WriteLine("".PadRight(6) + "- вероятность статистики Фишера: " + stat.stProbFstat);
    Console.WriteLine("".PadRight(6) + "- логарифм функции правдоподобия: " + stat.stLogL);
    Console.WriteLine("".PadRight(6) + "- информационный критерий Акаике: " + stat.stAIC);
    Console.WriteLine("".PadRight(6) + "- информационный критерий Шварца: " + stat.stSC);
    Console.WriteLine("".PadRight(6) + "- стандартная ошибка: " + stat.stSE);
    Console.WriteLine("".PadRight(6) + "- J-статистика: " + stat.stJstat);
    Console.WriteLine("".PadRight(6) + "- вероятность J-статистики: " + stat.stProbJstat);
    Console.WriteLine("".PadRight(3) + "- Диагностические критерии -");
    Console.WriteLine("".PadRight(6) + "- статистика Дарбина-Уотсона: " + stat.stDW);
    Console.WriteLine("".PadRight(9) + "- вероятность нижней границы: " + stat.stDWLowerBound);
    Console.WriteLine("".PadRight(9) + "- вероятность верхней границы: " + stat.stDWUpperBound);
    Console.WriteLine("".PadRight(6) + "- HQ-критерий: " + stat.stHQcriterion);
    Console.WriteLine("".PadRight(6) + "- среднее логарифма функции правдоподобия: " + stat.stAvgLogL);
    Console.WriteLine("".PadRight(6) + "- McFadden R-квадрат: " + stat.stMcFaddenRsquared);
    Console.WriteLine("".PadRight(6) + "- остаток логарифма функции правдоподобия: " + stat.stRestrLogL);
    Console.WriteLine("".PadRight(6) + "- LR-статистика: " + stat.stLRstatistic);
    Console.WriteLine("".PadRight(6) + "- р-значение вероятности для LR-статистики: " + stat.stLRprobability);
    Console.WriteLine("".PadRight(3) + "- Анализ остатков -");
    Console.WriteLine("".PadRight(6) + "- среднее остатков: " + stat.stME);
    Console.WriteLine("".PadRight(6) + "- среднее абсолютных величин остатков: " + stat.stMAE);
    Console.WriteLine("".PadRight(6) + "- среднее квадратов остатков: " + stat.stMSE);
    Console.WriteLine("".PadRight(6) + "- корень из среднего квадратов остатков: " + stat.stSqMSE);
    Console.WriteLine("".PadRight(6) + "- стандартное отклонение остатков: " + stat.stSEE);
    Console.WriteLine("".PadRight(6) + "- статистика Жака-Бэра: " + stat.stJBStat);
    Console.WriteLine("".PadRight(6) + "- сумма квадратов остатков: " + stat.stSSR);
    Console.WriteLine("".PadRight(6) + "- максимальная абсолютная ошибка: " + stat.stMaxAE);
    Console.WriteLine("".PadRight(3) + "- Общие -");
    Console.WriteLine("".PadRight(6) + "- число наблюдений: " + stat.stIncludedObservations);
    Console.WriteLine("".PadRight(6) + "- количество итераций, за которое сошёлся метод: " + stat.stNumOfIter);
    Console.WriteLine("".PadRight(6) + "- среднее зависимой переменной: " + stat.stMD);
    Console.WriteLine("".PadRight(6) + "- стандартное отклонение зависимой переменной: " + stat.stSD);
    Console.WriteLine("".PadRight(6) + "- дисперсия остатков: " + stat.stVE);
}
// Процедура вывода в окно консоли значений коэффициентов
public static void PrintCoef(StatModelCoefficients coef)
{
    Console.WriteLine("-- Коэффициенты --");
    StatIntercept constVal = coef.intercept;
    Console.WriteLine("".PadRight(3)+"- Константа -");
    Console.WriteLine("".PadRight(6)+" - режим расчёта: "+constVal.mode);
    Console.WriteLine("".PadRight(6)+" - значение: "+constVal.estimate);
    Console.WriteLine("".PadRight(6)+" - стандартная ошибка: "+constVal.standardError);
    Console.WriteLine("".PadRight(6)+" - t-статистика: "+constVal.tStatistic);
    Console.WriteLine("".PadRight(6)+" - вероятность: "+constVal.probability);
    Console.WriteLine("".PadRight(3) + "- Фактор -");
    PrintStatCoef(6, coef.coefficients);
}
public static void PrintStatCoef(int pad, StatCoefficients statCoef)
{
    Console.WriteLine("".PadRight(pad) + " - значение: " + printArray(statCoef.estimate));
    Console.WriteLine("".PadRight(pad) + " - стандартная ошибка: " + printArray(statCoef.standardError));
    Console.WriteLine("".PadRight(pad) + " - t-статистика: " + printArray(statCoef.tStatistic));
    Console.WriteLine("".PadRight(pad) + " - вероятность: " + printArray(statCoef.probability));
}
// Процедура вывода в окно консоли значений коэффициентов ARMA
public static void printARMA(SlARMA armaCoef)
{
    Console.WriteLine("-- Коэффициенты авторегрессии и скользящего среднего --");
    Console.WriteLine("".PadRight(3) + "- Коэффициенты авторегрессии -");
    PrintStatCoef(6, armaCoef.coefficientsAR);
    Console.WriteLine("".PadRight(3) + "- Коэффициенты сезонной авторегрессии -");
    PrintStatCoef(6, armaCoef.coefficientsARSeas);
    Console.WriteLine("".PadRight(3) + "- Коэффициенты скользящего среднего -");
    PrintStatCoef(6, armaCoef.coefficientsMA);
    Console.WriteLine("".PadRight(3) + "- Коэффициенты сезонного скользящего среднего -");
    PrintStatCoef(6, armaCoef.coefficientsMASeas);
}
// Процедура вывода рассчитанных значений
public static void printSeries(MsEvaluateSeriesResult seriesRes)
{
    Console.WriteLine("-- Рассчитанные значения --");
    MsEvaluateSeriesResultForScenario res = seriesRes.its.GetValue(0) as MsEvaluateSeriesResultForScenario;
    Console.WriteLine("".PadRight(3) + "- Данные о сценарии -");
    Console.WriteLine("".PadRight(6) + "- ключ: "+ res.scenarioKey);
    Console.WriteLine("".PadRight(3) + "- Даты расчёта -");
    Console.WriteLine("".PadRight(6) + printArray(seriesRes.dates));
    Console.WriteLine("".PadRight(3) + "- Исходный ряд -");
    Console.WriteLine("".PadRight(6) + printArray(res.fact));
    if (res.modelling != null)
    {
        Console.WriteLine("".PadRight(3) + "- Модельный ряд -");
        Console.WriteLine("".PadRight(6) + printArray(res.modelling));
    }
    if (res.forecast != null)
    {
        Console.WriteLine("".PadRight(3) + "- Прогнозный ряд -");
        Console.WriteLine("".PadRight(6) + printArray(res.forecast));
    }
    if (res.residuals != null)
    {
        Console.WriteLine("".PadRight(3) + "- Ряд остатков -");
        Console.WriteLine("".PadRight(6) + printArray(res.residuals));
    }
    if (res.lowerConfidenceLevel != null)
    {
        Console.WriteLine("".PadRight(3) + "- Нижняя доверительная граница -");
        Console.WriteLine("".PadRight(6) + printArray(res.lowerConfidenceLevel));
    }
    if (res.upperConfidenceLevel != null)
    {
        Console.WriteLine("".PadRight(3) + "- Нижняя доверительная граница -");
        Console.WriteLine("".PadRight(6) + printArray(res.upperConfidenceLevel));
    }
    if (res.dLowerConfidenceLevel != null)
    {
        Console.WriteLine("".PadRight(3) + "- Нижняя динамическая доверительная граница -");
        Console.WriteLine("".PadRight(6) + printArray(res.dLowerConfidenceLevel));
    }
    if (res.dUpperConfidenceLevel != null)
    {
        Console.WriteLine("".PadRight(3) + "- Нижняя динамическая доверительная граница -");
        Console.WriteLine("".PadRight(6) + printArray(res.dUpperConfidenceLevel));
    }
    if (res.factsMatrix != null)
    {
        Console.WriteLine("".PadRight(3) + "- Матрица факторов -");
        Console.WriteLine("".PadRight(6) + printArray(res.factsMatrix));
    }
}
// Процедура вывода в окно консоли результатов автокорреляционного анализа
public static void printCorrel(MsAutoCorrelationResult corr)
{
    Console.WriteLine("-- АКФ и ЧАКФ --");
    Console.WriteLine("".PadRight(3) + " - значимость доверительных границ: " + corr.confidenceLevel);
    Console.WriteLine("".PadRight(3) + " - q-статистика Льюнга-Бокса -");
    Console.WriteLine("".PadRight(6) + printArray(corr.qStatistics));
    Console.WriteLine("".PadRight(3) + " - Вероятность q-статистики -");
    Console.WriteLine("".PadRight(6) + printArray(corr.probability));
    Console.WriteLine("".PadRight(3) + " - Автокорреляционная функция - ");
    Console.WriteLine("".PadRight(6) + printArray(corr.acf));
    Console.WriteLine("".PadRight(3) + " - Частная автокорреляционная функция - ");
    Console.WriteLine("".PadRight(6) + printArray(corr.pacf));
}
// Процедура вывода в окно консоли массива значений
public static string printArray(Array arr)
{
    if (arr != null)
    {
        int rank = arr.Rank;
        string s = "";
        if (rank == 1)
        {
            for (int i = 0; i <= (arr.Length - 1); i++)
            {
                s = s + arr.GetValue(i) + "; ";
            };
        }
        else
        {
            for (int i = 0; i <= (arr.GetLength(0) - 1); i++)
            {
                for (int j = 0; j <= (arr.GetLength(1) - 1); j++)
                {
                    s = s + arr.GetValue(i, j) + "; ";
                };
                s = s + "\n\r";
            };
        };
        return s;
    }
    else { return "Значения отсутствуют"; };
}


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
