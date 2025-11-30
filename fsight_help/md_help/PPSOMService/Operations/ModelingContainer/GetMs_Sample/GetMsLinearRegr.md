# Расчёт метода «Линейная регрессия»

Расчёт метода «Линейная регрессия»
-


**


# Расчёт метода «Линейная регрессия»


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для расчёта уравнения. В запросе передаются: экземпляр открытого контейнера
 моделирования, шаблон расчёта уравнения и параметры выполнения операции.
 В ответе приходит экземпляр модели, содержащей уравнение с результатами
 расчёта.


Для выполнения примера уравнение должно рассчитываться методом «Линейная регрессия».


В примере C# для вывода результатов используются вспомогательные процедуры:
 printPDL, PrintSeries
 описанные в данном разделе; PrintCoef,
 printARMA, PrintArray,
 PrintSeries, описанные в разделе
 «[Расчёт уравнения](GetMsCalcEq.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>IEHFOKNBPENBFOAEDMNIFBMAGBJFMILEEKEMODKJPMDBDAAN!M!S!CKILIGLNBPENBFOAEGCFPILNFBENOEAEENLANPEIMKOMICGHG</id>  </tMs>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>false</obInst>  <all>false</all>[![](../../../minus.gif)](../../../#)<item>
  <key>89669</key>[![](../../../minus.gif)](../../../#)<problem>
[![](../../../minus.gif)](../../../#)<metamodel>
  <calculationChain>Get</calculationChain>[![](../../../minus.gif)](../../../#)<calcChainPattern>
[![](../../../minus.gif)](../../../#)<modelPattern>
[![](../../../minus.gif)](../../../#)<transform>
  <outputs>Get</outputs>  <formulaCount>true</formulaCount>[![](../../../minus.gif)](../../../#)<formulas>
[![](../../../minus.gif)](../../../#)<method>
  <series>true</series>  </method>
  </formulas>
  <displayId>true</displayId>[![](../../../minus.gif)](../../../#)<equationsFormula>
  <method />
  </equationsFormula>
  <series>Get</series>  <kind>true</kind>  <displaySettings>true</displaySettings>  <additionalAttributes>true</additionalAttributes>  <calculationType>true</calculationType>  <calculationDirection>true</calculationDirection>[![](../../../minus.gif)](../../../#)<transformVariable>
  <slices>Get</slices>[![](../../../minus.gif)](../../../#)<transformSlice>
  <selection>Get</selection>  </transformSlice>
  </transformVariable>
  </transform>
  <stochastic>true</stochastic>  <calculationPeriod>true</calculationPeriod>  <useModelPeriod>true</useModelPeriod>  <useExistingData>true</useExistingData>  <treatNullsAsZeros>true</treatNullsAsZeros>  <autoName>true</autoName>  <generatedName>true</generatedName>  <period>true</period>  <isExclusive>true</isExclusive>  <useAutoPeriod>true</useAutoPeriod>  </modelPattern>
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
  <pdlIndex>1</pdlIndex>  <scenarioKeys />
  <execMethod>true</execMethod>  <execCoefficients>true</execCoefficients>  <execEvaluateSeries>true</execEvaluateSeries>  <execPairCorrelationMatrix>true</execPairCorrelationMatrix>  <execARMACoefficients>true</execARMACoefficients>  <execPDLStatCoefficients>true</execPDLStatCoefficients>  <execStatCoefficients>true</execStatCoefficients>  </execParams>
  </tArg>
  </GetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>IEHFOKNBPENBFOAEDMNIFBMAGBJFMILEEKEMODKJPMDBDAAN!M!S!CKILIGLNBPENBFOAEGCFPILNFBENOEAEENLANPEIMKOMICGHG</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<item>
  <k>89669</k>  <id>MODEL_NEW</id>  <n>MODEL_NEW</n>  <vis>1</vis>  <type>Problem</type>[![](../../../minus.gif)](../../../#)<problemMd>
[![](../../../minus.gif)](../../../#)<metamodel>
  <k>89670</k>[![](../../../minus.gif)](../../../#)<calculationChain>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>4</k>  <id>OBJ4</id>  <n>MyOutputVavable|A[t] = A0 + PDL(TS(MyInputVavable[t+1] * 8, Linear), 1, 1) + [AR(1)=A1], (От родителя)-(От родителя)</n>  <vis>1</vis>  <type>Model</type>  <excluded>0</excluded>  <graphMeta />
[![](../../../minus.gif)](../../../#)<model>
[![](../../../minus.gif)](../../../#)<transform>
[![](../../../minus.gif)](../../../#)<outputs>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>1</k>  <id>VARIABLES_89670</id>  <n>Variables</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<slices>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
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
  <level>Year</level>  </Item>
  </its>
  </slices>
  <variableStubKey>89671</variableStubKey>  <parameterID />
  <kind>Stub</kind>  <attributeId />
  <attributeType>Series</attributeType>  </Item>
  </its>
  </outputs>
  <formulaCount>1</formulaCount>[![](../../../minus.gif)](../../../#)<formulas>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <kind>LinearRegression</kind>[![](../../../minus.gif)](../../../#)<method>
[![](../../../minus.gif)](../../../#)<linearRegression>
  <constantMode>ManualEstimate</constantMode>  <constantValue>0.5</constantValue>  <confidenceLevel>0.85</confidenceLevel>[![](../../../minus.gif)](../../../#)<ARMA>
[![](../../../minus.gif)](../../../#)<orderAR>
  <l>1</l>  </orderAR>
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
[![](../../../minus.gif)](../../../#)<missingData>
  <specifiedVector />
  <method>Casewise</method>  <methodParameter>5</methodParameter>  <specifiedValue>0</specifiedValue>[![](../../../minus.gif)](../../../#)<specifiedTerm>
  <k>4294967295</k>  </specifiedTerm>
  </missingData>
[![](../../../minus.gif)](../../../#)<coefficients>
  <d>-0.08396406739747959</d>  </coefficients>
[![](../../../minus.gif)](../../../#)<pairCorrelationMatrix>
[![](../../../minus.gif)](../../../#)<data>
  <d>1</d>  <d>-0.7626332420071756</d>  <d>-0.7626332420071756</d>  <d>1</d>  </data>
  </pairCorrelationMatrix>
[![](../../../minus.gif)](../../../#)<armaCoefficients>
[![](../../../minus.gif)](../../../#)<orderAR>
  <l>1</l>  </orderAR>
  <orderMA />
[![](../../../minus.gif)](../../../#)<coefficientsAR>
[![](../../../minus.gif)](../../../#)<estimate>
  <d>0.8682687093029638</d>  </estimate>
[![](../../../minus.gif)](../../../#)<standardError>
  <d>0.07799376856974333</d>  </standardError>
[![](../../../minus.gif)](../../../#)<tStatistic>
  <d>11.13253949931325</d>  </tStatistic>
[![](../../../minus.gif)](../../../#)<probability>
  <d>2.867720505506099e-10</d>  </probability>
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
[![](../../../minus.gif)](../../../#)<pdlStatCoefficients>
  <estimatesSum>0</estimatesSum>  <stdErrSum>0</stdErrSum>  <tStatSum>0</tStatSum>  </pdlStatCoefficients>
[![](../../../minus.gif)](../../../#)<statCoefficients>
[![](../../../minus.gif)](../../../#)<intercept>
  <mode>ManualEstimate</mode>  <estimate>0.5</estimate>  <standardError>NaN</standardError>  <tStatistic>NaN</tStatistic>  <probability>NaN</probability>  </intercept>
[![](../../../minus.gif)](../../../#)<coefficients>
[![](../../../minus.gif)](../../../#)<estimate>
  <d>-0.08396406739747959</d>  </estimate>
[![](../../../minus.gif)](../../../#)<standardError>
  <d>0.02130633695023525</d>  </standardError>
[![](../../../minus.gif)](../../../#)<tStatistic>
  <d>-3.94080256937608</d>  </tStatistic>
[![](../../../minus.gif)](../../../#)<probability>
  <d>0.0007483835396404626</d>  </probability>
  </coefficients>
  </statCoefficients>
  </linearRegression>
  <name>0.5000 + PDL(X1, 1, 1) + [AR(1)=0.8683]</name>[![](../../../minus.gif)](../../../#)<series>
[![](../../../minus.gif)](../../../#)<input>
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
  <date>1899-12-30</date>  </input>
[![](../../../minus.gif)](../../../#)<addFactor>
  <k>4294967295</k>  </addFactor>
  </series>
[![](../../../minus.gif)](../../../#)<evaluateSeries>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <scenarioKey>4294967295</scenarioKey>[![](../../../minus.gif)](../../../#)<fact>
  <d>3</d>  <d>7</d>  <d>2</d>  <d>6</d>  <d>4</d>  <d>1</d>  <d>5</d>  <d>3.42857143</d>  <d>3.28571429</d>  <d>3.14285714</d>  <d>3</d>  <d>2.85714286</d>  <d>2.71428571</d>  <d>2.57142857</d>  <d>2.42857143</d>  <d>2.28571429</d>  <d>2.14285714</d>  <d>2</d>  <d>1.85714286</d>  <d>1.71428571</d>  <d>1.57142857</d>  <d>1.42857143</d>  <d>1.28571429</d>  <d>1.14285714</d>  <d>1</d>  <d>0.85714286</d>  <d>0.71428571</d>  <d>0.57142857</d>  <d>NaN</d>  </fact>
[![](../../../minus.gif)](../../../#)<modelling>
  <d>NaN</d>  <d>6.796910634289292</d>  <d>1.14416876286019</d>  <d>4.975957312453287</d>  <d>4.442458519583021</d>  <d>3.514234055349136</d>  <d>0.9217015149591798</d>  <d>4.40704993968997</d>  <d>3.0549012709732</d>  <d>2.943136473929621</d>  <d>2.831371668203355</d>  <d>2.71960687115977</d>  <d>2.607842074116201</d>  <d>2.496077268389927</d>  <d>2.384312471346351</d>  <d>2.272547674302773</d>  <d>2.160782877259189</d>  <d>2.049018071532927</d>  <d>1.937253274489343</d>  <d>1.825488477445767</d>  <d>1.713723671719501</d>  <d>1.601958874675926</d>  <d>1.490194077632337</d>  <d>1.378429280588761</d>  <d>1.266664474862499</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </modelling>
[![](../../../minus.gif)](../../../#)<residuals>
  <d>NaN</d>  <d>0.2030893657107082</d>  <d>0.8558312371398105</d>  <d>1.024042687546713</d>  <d>-0.4424585195830213</d>  <d>-2.514234055349136</d>  <d>4.07829848504082</d>  <d>-0.9784785096899702</d>  <d>0.2308130190268001</d>  <d>0.199720666070379</d>  <d>0.1686283317966448</d>  <d>0.1375359888402303</d>  <d>0.106443635883799</d>  <d>0.07535130161007286</d>  <d>0.04425895865364904</d>  <d>0.01316661569722655</d>  <d>-0.01792573725918922</d>  <d>-0.04901807153292737</d>  <d>-0.0801104144893432</d>  <d>-0.1112027674457667</d>  <d>-0.1422951017195007</d>  <d>-0.1733874446759258</d>  <d>-0.2044797876323372</d>  <d>-0.2355721405887614</d>  <d>-0.2666644748624989</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </residuals>
[![](../../../minus.gif)](../../../#)<input>
  <d>3</d>  <d>7</d>  <d>2</d>  <d>6</d>  <d>4</d>  <d>1</d>  <d>5</d>  <d>3.42857143</d>  <d>3.28571429</d>  <d>3.14285714</d>  <d>3</d>  <d>2.85714286</d>  <d>2.71428571</d>  <d>2.57142857</d>  <d>2.42857143</d>  <d>2.28571429</d>  <d>2.14285714</d>  <d>2</d>  <d>1.85714286</d>  <d>1.71428571</d>  <d>1.57142857</d>  <d>1.42857143</d>  <d>1.28571429</d>  <d>1.14285714</d>  <d>1</d>  <d>0.85714286</d>  <d>0.71428571</d>  <d>0.57142857</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </input>
[![](../../../minus.gif)](../../../#)<factors>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <termToText>{MyInputVavable[t+1]}</termToText>[![](../../../minus.gif)](../../../#)<serie>
  <d>32</d>  <d>16</d>  <d>56</d>  <d>60</d>  <d>72.8</d>  <d>85.59999999999999</d>  <d>98.40000000000001</d>  <d>111.2</d>  <d>124</d>  <d>136.8</d>  <d>149.6</d>  <d>162.4</d>  <d>175.2</d>  <d>188</d>  <d>200.8</d>  <d>213.6</d>  <d>226.4</d>  <d>239.2</d>  <d>252</d>  <d>264.8</d>  <d>277.6</d>  <d>290.4</d>  <d>303.2</d>  <d>316</d>  <d>328.8</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </serie>
[![](../../../minus.gif)](../../../#)<transformedSerie>
  <d>-28.54510344827582</d>  <d>-52.73702463054184</d>  <d>-20.92894581280785</d>  <d>-25.12086699507387</d>  <d>-20.51278817733989</d>  <d>-15.90470935960589</d>  <d>-11.29663054187189</d>  <d>-6.688551724137909</d>  <d>-2.080472906403926</d>  <d>2.527605911330056</d>  <d>7.135684729064025</d>  <d>11.74376354679805</d>  <d>16.35184236453202</d>  <d>20.95992118226602</d>  <d>25.56800000000001</d>  <d>30.17607881773398</d>  <d>34.78415763546798</d>  <d>39.39223645320195</d>  <d>44.00031527093594</d>  <d>48.60839408866994</d>  <d>53.21647290640394</d>  <d>57.82455172413788</d>  <d>62.43263054187187</d>  <d>67.0407093596059</d>  <d>71.6487881773399</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </transformedSerie>
[![](../../../minus.gif)](../../../#)<inversion>
  <type>TS</type>  <lag>PrecidingValue</lag>  <previousLag>-1</previousLag>  <seasonality>None</seasonality>  <dependence>Linear</dependence>  <K>3</K>  </inversion>
  <entryKey>1</entryKey>  </it>
  </its>
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
  <displayId>0</displayId>[![](../../../minus.gif)](../../../#)<series>
  <its />
  </series>
  <kind>Simple</kind>[![](../../../minus.gif)](../../../#)<displaySettings>
  <displayTermsAs>Derive</displayTermsAs>  </displaySettings>
  <additionalAttributes />
  <calculationType>Serie</calculationType>  <calculationDirection>Forward</calculationDirection>  </transform>
  <stochastic>1</stochastic>  <calculationPeriod>Forecast</calculationPeriod>  <useModelPeriod>1</useModelPeriod>  <useExistingData>0</useExistingData>  <treatNullsAsZeros>0</treatNullsAsZeros>  <autoName>1</autoName>[![](../../../minus.gif)](../../../#)<period>
  <identificationStartDate>1990-01-01</identificationStartDate>  <identificationEndDate>2018-04-24</identificationEndDate>  <forecastStartDate>2018-04-25</forecastStartDate>  <forecastEndDate>2020-01-01</forecastEndDate>  <identificationStartDateParamID />
  <identificationEndDateParamID />
  <forecastStartDateParamID />
  <forecastEndDateParamID />
  <autoPeriod>28672</autoPeriod>  <identificationStartOffset>0</identificationStartOffset>  <identificationEndOffset>0</identificationEndOffset>  <forecastEndOffset>0</forecastEndOffset>  <isIdentStartCorrect>1</isIdentStartCorrect>  <isIdentEndCorrect>1</isIdentEndCorrect>  <isForecastEndCorrect>1</isForecastEndCorrect>  </period>
  <isExclusive>1</isExclusive>  <useAutoPeriod>1</useAutoPeriod>  <generatedName>MyOutputVavable|A[t] = A0 + PDL(TS(MyInputVavable[t+1] * 8, Linear), 1, 1) + [AR(1)=A1]</generatedName>  <warnings />
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
     "id" : "IEHFOKNBPENBFOAEDMNIFBMAGBJFMILEEKEMODKJPMDBDAAN!M!S!CKILIGLNBPENBFOAEGCFPILNFBENOEAEENLANPEIMKOMICGHG"
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
                   "outputs" : "Get",
                   "formulaCount" : "true",
                   "formulas" :
                    {
                     "method" :
                      {
                       "series" : "true"
                      }
                    },
                   "displayId" : "true",
                   "equationsFormula" :
                    {
                     "method" : ""
                    },
                   "series" : "Get",
                   "kind" : "true",
                   "displaySettings" : "true",
                   "additionalAttributes" : "true",
                   "calculationType" : "true",
                   "calculationDirection" : "true",
                   "transformVariable" :
                    {
                     "slices" : "Get",
                     "transformSlice" :
                      {
                       "selection" : "Get"
                      }
                    }
                  },
                 "stochastic" : "true",
                 "calculationPeriod" : "true",
                 "useModelPeriod" : "true",
                 "useExistingData" : "true",
                 "treatNullsAsZeros" : "true",
                 "autoName" : "true",
                 "generatedName" : "true",
                 "period" : "true",
                 "isExclusive" : "true",
                 "useAutoPeriod" : "true"
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
       "pdlIndex" : "1",
       "scenarioKeys" : "",
       "execMethod" : "true",
       "execCoefficients" : "true",
       "execEvaluateSeries" : "true",
       "execPairCorrelationMatrix" : "true",
       "execARMACoefficients" : "true",
       "execPDLStatCoefficients" : "true",
       "execStatCoefficients" : "true"
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
     "id" : "IEHFOKNBPENBFOAEDMNIFBMAGBJFMILEEKEMODKJPMDBDAAN!M!S!CKILIGLNBPENBFOAEGCFPILNFBENOEAEENLANPEIMKOMICGHG"
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
                 "n" : "MyOutputVavable|A[t] = A0 + PDL(TS(MyInputVavable[t+1] * 8, Linear), 1, 1) + [AR(1)=A1], (От родителя)-(От родителя)",
                 "vis" : "1",
                 "type" : "Model",
                 "excluded" : "0",
                 "graphMeta" : "",
                 "model" :
                  {
                   "transform" :
                    {
                     "outputs" :
                      {
                       "its" :
                        {
                         "Item" :
                          {
                           "k" : "1",
                           "id" : "VARIABLES_89670",
                           "n" : "Variables",
                           "vis" : "1",
                           "slices" :
                            {
                             "its" :
                              {
                               "Item" :
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
                                }
                              }
                            },
                           "variableStubKey" : "89671",
                           "parameterID" : "",
                           "kind" : "Stub",
                           "attributeId" : "",
                           "attributeType" : "Series"
                          }
                        }
                      },
                     "formulaCount" : "1",
                     "formulas" :
                      {
                       "its" :
                        {
                         "it" :
                          [
                            {
                             "k" : "0",
                             "kind" : "LinearRegression",
                             "method" :
                              {
                               "linearRegression" :
                                {
                                 "constantMode" : "ManualEstimate",
                                 "constantValue" : "0.5",
                                 "confidenceLevel" : "0.85",
                                 "ARMA" :
                                  {
                                   "orderAR" :
                                    {
                                     "l" : "1"
                                    },
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
                                 "coefficients" :
                                  {
                                   "d" : "-0.08396406739747959"
                                  },
                                 "pairCorrelationMatrix" :
                                  {
                                   "data" :
                                    {
                                     "d" :
                                      [
                                        "1",
                                        "-0.7626332420071756",
                                        "-0.7626332420071756",
                                        "1"
                                      ]
                                    }
                                  },
                                 "armaCoefficients" :
                                  {
                                   "orderAR" :
                                    {
                                     "l" : "1"
                                    },
                                   "orderMA" : "",
                                   "coefficientsAR" :
                                    {
                                     "estimate" :
                                      {
                                       "d" : "0.8682687093029638"
                                      },
                                     "standardError" :
                                      {
                                       "d" : "0.07799376856974333"
                                      },
                                     "tStatistic" :
                                      {
                                       "d" : "11.13253949931325"
                                      },
                                     "probability" :
                                      {
                                       "d" : "2.867720505506099e-10"
                                      }
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
                                 "pdlStatCoefficients" :
                                  {
                                   "estimatesSum" : "0",
                                   "stdErrSum" : "0",
                                   "tStatSum" : "0"
                                  },
                                 "statCoefficients" :
                                  {
                                   "intercept" :
                                    {
                                     "mode" : "ManualEstimate",
                                     "estimate" : "0.5",
                                     "standardError" : "NaN",
                                     "tStatistic" : "NaN",
                                     "probability" : "NaN"
                                    },
                                   "coefficients" :
                                    {
                                     "estimate" :
                                      {
                                       "d" : "-0.08396406739747959"
                                      },
                                     "standardError" :
                                      {
                                       "d" : "0.02130633695023525"
                                      },
                                     "tStatistic" :
                                      {
                                       "d" : "-3.94080256937608"
                                      },
                                     "probability" :
                                      {
                                       "d" : "0.0007483835396404626"
                                      }
                                    }
                                  }
                                },
                               "name" : "0.5000 + PDL(X1, 1, 1) + [AR(1)=0.8683]",
                               "series" :
                                {
                                 "input" :
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
                                 "addFactor" :
                                  {
                                   "k" : "4294967295"
                                  }
                                },
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
                                          "NaN"
                                        ]
                                      },
                                     "modelling" :
                                      {
                                       "d" :
                                        [
                                          "NaN",
                                          "6.796910634289292",
                                          "1.14416876286019",
                                          "4.975957312453287",
                                          "4.442458519583021",
                                          "3.514234055349136",
                                          "0.9217015149591798",
                                          "4.40704993968997",
                                          "3.0549012709732",
                                          "2.943136473929621",
                                          "2.831371668203355",
                                          "2.71960687115977",
                                          "2.607842074116201",
                                          "2.496077268389927",
                                          "2.384312471346351",
                                          "2.272547674302773",
                                          "2.160782877259189",
                                          "2.049018071532927",
                                          "1.937253274489343",
                                          "1.825488477445767",
                                          "1.713723671719501",
                                          "1.601958874675926",
                                          "1.490194077632337",
                                          "1.378429280588761",
                                          "1.266664474862499",
                                          "NaN",
                                          "NaN",
                                          "NaN",
                                          "NaN"
                                        ]
                                      },
                                     "residuals" :
                                      {
                                       "d" :
                                        [
                                          "NaN",
                                          "0.2030893657107082",
                                          "0.8558312371398105",
                                          "1.024042687546713",
                                          "-0.4424585195830213",
                                          "-2.514234055349136",
                                          "4.07829848504082",
                                          "-0.9784785096899702",
                                          "0.2308130190268001",
                                          "0.199720666070379",
                                          "0.1686283317966448",
                                          "0.1375359888402303",
                                          "0.106443635883799",
                                          "0.07535130161007286",
                                          "0.04425895865364904",
                                          "0.01316661569722655",
                                          "-0.01792573725918922",
                                          "-0.04901807153292737",
                                          "-0.0801104144893432",
                                          "-0.1112027674457667",
                                          "-0.1422951017195007",
                                          "-0.1733874446759258",
                                          "-0.2044797876323372",
                                          "-0.2355721405887614",
                                          "-0.2666644748624989",
                                          "NaN",
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
                                       "its" :
                                        {
                                         "it" :
                                          [
                                            {
                                             "termToText" : "{MyInputVavable[t+1]}",
                                             "serie" :
                                              {
                                               "d" :
                                                [
                                                  "32",
                                                  "16",
                                                  "56",
                                                  "60",
                                                  "72.8",
                                                  "85.59999999999999",
                                                  "98.40000000000001",
                                                  "111.2",
                                                  "124",
                                                  "136.8",
                                                  "149.6",
                                                  "162.4",
                                                  "175.2",
                                                  "188",
                                                  "200.8",
                                                  "213.6",
                                                  "226.4",
                                                  "239.2",
                                                  "252",
                                                  "264.8",
                                                  "277.6",
                                                  "290.4",
                                                  "303.2",
                                                  "316",
                                                  "328.8",
                                                  "NaN",
                                                  "NaN",
                                                  "NaN",
                                                  "NaN",
                                                  "NaN",
                                                  "NaN"
                                                ]
                                              },
                                             "transformedSerie" :
                                              {
                                               "d" :
                                                [
                                                  "-28.54510344827582",
                                                  "-52.73702463054184",
                                                  "-20.92894581280785",
                                                  "-25.12086699507387",
                                                  "-20.51278817733989",
                                                  "-15.90470935960589",
                                                  "-11.29663054187189",
                                                  "-6.688551724137909",
                                                  "-2.080472906403926",
                                                  "2.527605911330056",
                                                  "7.135684729064025",
                                                  "11.74376354679805",
                                                  "16.35184236453202",
                                                  "20.95992118226602",
                                                  "25.56800000000001",
                                                  "30.17607881773398",
                                                  "34.78415763546798",
                                                  "39.39223645320195",
                                                  "44.00031527093594",
                                                  "48.60839408866994",
                                                  "53.21647290640394",
                                                  "57.82455172413788",
                                                  "62.43263054187187",
                                                  "67.0407093596059",
                                                  "71.6487881773399",
                                                  "NaN",
                                                  "NaN",
                                                  "NaN",
                                                  "NaN",
                                                  "NaN",
                                                  "NaN"
                                                ]
                                              },
                                             "inversion" :
                                              {
                                               "type" : "TS",
                                               "lag" : "PrecidingValue",
                                               "previousLag" : "-1",
                                               "seasonality" : "None",
                                               "dependence" : "Linear",
                                               "K" : "3"
                                              },
                                             "entryKey" : "1"
                                            }
                                          ]
                                        }
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
                     "series" :
                      {
                       "its" : ""
                      },
                     "kind" : "Simple",
                     "displaySettings" :
                      {
                       "displayTermsAs" : "Derive"
                      },
                     "additionalAttributes" : "",
                     "calculationType" : "Serie",
                     "calculationDirection" : "Forward"
                    },
                   "stochastic" : "1",
                   "calculationPeriod" : "Forecast",
                   "useModelPeriod" : "1",
                   "useExistingData" : "0",
                   "treatNullsAsZeros" : "0",
                   "autoName" : "1",
                   "period" :
                    {
                     "identificationStartDate" : "1990-01-01",
                     "identificationEndDate" : "2018-04-24",
                     "forecastStartDate" : "2018-04-25",
                     "forecastEndDate" : "2020-01-01",
                     "identificationStartDateParamID" : "",
                     "identificationEndDateParamID" : "",
                     "forecastStartDateParamID" : "",
                     "forecastEndDateParamID" : "",
                     "autoPeriod" : "28672",
                     "identificationStartOffset" : "0",
                     "identificationEndOffset" : "0",
                     "forecastEndOffset" : "0",
                     "isIdentStartCorrect" : "1",
                     "isIdentEndCorrect" : "1",
                     "isForecastEndCorrect" : "1"
                    },
                   "isExclusive" : "1",
                   "useAutoPeriod" : "1",
                   "generatedName" : "MyOutputVavable|A[t] = A0 + PDL(TS(MyInputVavable[t+1] * 8, Linear), 1, 1) + [AR(1)=A1]",
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


public static MsCalculationChainEntry GetMsLinearRegr(MsId ms, ulong modelKey, ulong eqKey)
        {
    var getMsOp = new GetMs();
    // Задаём параметры выполнения операции
    getMsOp.tMs = ms;
    getMsOp.tArg = new GetMsArg()
    {  // Задаём шаблон извлечения данных
        pattern = new MsMdPattern()
        {
            obInst = false,
            all = false,
            item = new MsItemPattern()
            {  // Указываем ключ рассчитываемой модели
                key = modelKey,
                problem = new MsProblemPattern()
                {
                    metamodel = new MsMetaModelPattern()
                    {
                        calculationChain = ListOperation.Get,
                        calcChainPattern = new MsCalculationChainPattern()
                        {
                            // Указываем ключ рассчитываемого уравнения
                            entryKeys = new long[] { (long)eqKey },
                            modelPattern = new MsModelPattern()
                            {
                                autoName = true,
                                calculationPeriod = true,
                                generatedName = true,
                                isExclusive = true,
                                period = true,
                                stochastic = true,
                                treatNullsAsZeros = true,
                                useAutoPeriod = true,
                                useExistingData = true,
                                useModelPeriod = true,
                                transform = new MsFormulaTransformPattern()
                                {
                                    additionalAttributes = true,
                                    calculationDirection = true,
                                    calculationType = true,
                                    displayId = true,
                                    displaySettings = true,
                                    formulaCount = true,
                                    outputs = ListOperation.Get,
                                    series = ListOperation.Get,
                                    kind = true,
                                    formulas = new TsFormulaPattern()
                                    {
                                        method = new TsMethodPattern()
                                        {
                                            series = true
                                        }
                                    },
                                    equationsFormula = new TsFormulaPattern()
                                    {
                                        method = new TsMethodPattern() { }
                                    },
                                    transformVariable = new MsFormulaTransformVariablePattern()
                                    {
                                        slices = ListOperation.Get,
                                        transformSlice = new MsFormulaTransformSlicePattern()
                                        {
                                            selection = ListOperation.Get
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, // Задаём параметры расчёта уравнения
        execParams = new MsMdExecParams()
        {
            k = 0,
            execMethod = true,
            execEvaluateSeries = true,
            scenarioKeys = new long[] { },
            execPDLStatCoefficients = true,
            pdlIndex = 1,
            execPairCorrelationMatrix = true,
            execStatCoefficients = true,
            execCoefficients = true,
            execARMACoefficients = true,
            modelKeys = new long[] { (long)eqKey }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    GetMsResult getMsResult = somClient.GetMs(getMsOp);
    MsMetaModel meta = getMsResult.meta.item.problemMd.metamodel;
    MsCalculationChainEntry chainEntry = meta.calculationChain.its.GetValue(0) as MsCalculationChainEntry;
    // Выводим ошибки и предупреждения
    MsModel eq = chainEntry.model;
    if (eq.warnings != null)
    {
        Console.WriteLine("-- Предупреждения --");
        Console.WriteLine("".PadRight(3) + printArray(eq.warnings));
    }
    if (eq.error == null) //Проверяем, возникли ли ошибки при расчёте уравнения
    {   // Уравнение рассчитано без ошибок, получаем результаты расчёта
        TsFormula formula = eq.transform.formulas.its.GetValue(0) as TsFormula;
        TsLinearRegressionMethod linR = formula.method.linearRegression;
        Console.WriteLine("-- Значения коэффициентов уравнения --");
        Console.WriteLine("".PadRight(3) + printArray(linR.coefficients));
        // Получаем значения коэффициентов уравнения и выводим в окно консоли
        PrintCoef(linR.statCoefficients);
        // Получаем значения коэффициентов авторегрессии, скользящего среднего и выводим в окно консоли
        printARMA(linR.armaCoefficients);
        Console.WriteLine("-- Матрица корреляции --");
        MsPairCorrelationMatrix pm = linR.pairCorrelationMatrix;
        if (pm.error != null) { Console.WriteLine("".PadRight(3) + "ошибка: " + pm.error); }
        Console.WriteLine("".PadRight(3) + printArray(pm.data));
        Console.WriteLine("-- Коэффициенты лаговых переменных --");
        MsPDLCoefficients pdl = linR.pdlStatCoefficients;
        printPDL(pdl);
        // Выводим ряды, которые были рассчитаны
        Console.WriteLine("-- Доступные ряды данных --");
        printSeries(formula.method.series);
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
// Процедура вывода значений коэффициентов для лаговых переменных
public static void printPDL(MsPDLCoefficients pdl)
{
    Console.WriteLine("".PadRight(3) + " - cумма коэффициентов: " + pdl.estimatesSum);
    Console.WriteLine("".PadRight(3) + " - cумма стандартных ошибок: " + pdl.stdErrSum);
    Console.WriteLine("".PadRight(3) + " - cумма t-статистик: " + pdl.tStatSum);
    Console.WriteLine("".PadRight(3) + " - Коэффициенты -");
    PrintStatCoef(6, pdl as StatCoefficients);
}
// Процедура вывода идентификаторов рассчитанных рядов
public static void printSeries(MsMethodSeries series)
{
    if (series.input != null)
        {Console.WriteLine("".PadRight(3) + " - входной ряд");};
    if (series.fitted != null)
        { Console.WriteLine("".PadRight(3) + " - сглаженный ряд"); };
    if (series.forecast != null)
        { Console.WriteLine("".PadRight(3) + " - прогнозный ряд"); };
    if (series.residuals != null)
        { Console.WriteLine("".PadRight(3) + " - ряд остатков"); };
    if (series.lowerConfidenceLevel != null)
        { Console.WriteLine("".PadRight(3) + " - нижняя доверительная граница"); };
    if (series.upperConfidenceLevel != null)
        { Console.WriteLine("".PadRight(3) + " - верхняя доверительная граница"); };
    if (series.dynamicLowerConfidenceLevel != null)
        { Console.WriteLine("".PadRight(3) + " - нижняя динамическая доверительная граница"); };
    if (series.dynamicUpperConfidenceLevel != null)
        { Console.WriteLine("".PadRight(3) + " - верхняя динамическая доверительная граница"); };
    if (series.addFactor != null)
        { Console.WriteLine("".PadRight(3) + " - фактор корректировки прогноза"); };
}


См. также:


[Работа
 с контейнером моделирования](../ModelingContainer_List.htm) | Метод «[Линейная
 регрессия](Lib.chm::/01_Regression_models/Line_Regression.htm)»


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
