# Расчёт метода «Подбор вида зависимости»

Расчёт метода «Подбор вида зависимости»
-


**


# Расчёт метода «Подбор вида зависимости»


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для расчёта уравнения. В запросе передаются: экземпляр открытого контейнера
 моделирования, шаблон расчёта уравнения и параметры выполнения операции.
 В ответе приходит экземпляр модели, содержащей уравнение с результатами
 расчёта.


Для выполнения примера уравнение должно рассчитываться методом «Подбор вида зависимости».


В примере C# для вывода результатов используются вспомогательные процедуры:
 PrintStat, PrintCoef,
 PrintSeries, описанные в разделе
 «[Расчёт уравнения](GetMsCalcEq.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>JNLCLHMGDNMBFOAELPKIJBHANNONPCBEIJFLOLMEADGBMGDH!M!S!CEOONGIMGDNMBFOAELALNGGIOBDBEJFMELJOJAOPDLFDOADIF</id>  </tMs>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>[![](../../../minus.gif)](../../../#)<item>
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
  <scenarioKeys />
  <execMethod>true</execMethod>  <execSummaryStatistics>true</execSummaryStatistics>  <execCoefficients>true</execCoefficients>  <execEvaluateSeries>true</execEvaluateSeries>  <execStatCoefficients>true</execStatCoefficients>  <execGenerateName>true</execGenerateName>  </execParams>
  </tArg>
  </GetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>JNLCLHMGDNMBFOAELPKIJBHANNONPCBEIJFLOLMEADGBMGDH!M!S!CEOONGIMGDNMBFOAELALNGGIOBDBEJFMELJOJAOPDLFDOADIF</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**0**" isLink="**0**" fullUrl="**http://v-shp-development.dev.fs.fsight.world/**" ver="**4**" hf="**0**">
  <i>MODELSPACE</i>  <n>Контейнер моделирования</n>  <k>1581</k>  <c>5121</c>  <p>1580</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<item>
  <k>89669</k>  <id>MODEL_NEW</id>  <n>MODEL_NEW</n>  <vis>1</vis>  <type>Problem</type>[![](../../../minus.gif)](../../../#)<problemMd>
[![](../../../minus.gif)](../../../#)<metamodel>
  <k>89670</k>[![](../../../minus.gif)](../../../#)<calculationChain>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>4</k>  <id>OBJ4</id>  <n>MyOutputVavable|A[t] = Trend(MyInputVavable[t]), (От родителя)-(От родителя)</n>  <vis>1</vis>  <type>Model</type>  <excluded>0</excluded>  <graphMeta />
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
  <k>0</k>  <kind>CurveEstimation</kind>[![](../../../minus.gif)](../../../#)<method>
[![](../../../minus.gif)](../../../#)<curveEstimation>
  <criterion>R2</criterion>  <dependenceForm>Linear</dependenceForm>[![](../../../minus.gif)](../../../#)<dependenceFormIncluded>
  <it>Linear</it>  <it>Polynomial</it>  <it>Logarithmic</it>  </dependenceFormIncluded>
  <polynomOrder>4</polynomOrder>[![](../../../minus.gif)](../../../#)<seasonalComponent>
  <mode>Additive</mode>  <cycle>4</cycle>  </seasonalComponent>
[![](../../../minus.gif)](../../../#)<missingData>
  <specifiedVector />
  <method>Casewise</method>  <methodParameter>5</methodParameter>  <specifiedValue>0</specifiedValue>[![](../../../minus.gif)](../../../#)<specifiedTerm>
  <k>4294967295</k>  </specifiedTerm>
  </missingData>
  <confidenceLevel>0.96</confidenceLevel>  <bestDependenceForm>Polynomial</bestDependenceForm>  <value>0</value>[![](../../../minus.gif)](../../../#)<explained>
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
[![](../../../minus.gif)](../../../#)<dependenceForms>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <dependenceForm>Linear</dependenceForm>  <expression>A1*t + A0</expression>[![](../../../minus.gif)](../../../#)<statCoefficients>
[![](../../../minus.gif)](../../../#)<intercept>
  <mode>AutoEstimate</mode>  <estimate>-0.4928571428571348</estimate>  <standardError>0.2910409353847357</standardError>  <tStatistic>-1.693428940522103</tStatistic>  <probability>0.1018820994993999</probability>  </intercept>
[![](../../../minus.gif)](../../../#)<coefficients>
[![](../../../minus.gif)](../../../#)<estimate>
  <d>1.598351648351648</d>  </estimate>
[![](../../../minus.gif)](../../../#)<standardError>
  <d>0.01498937077595134</d>  </standardError>
[![](../../../minus.gif)](../../../#)<tStatistic>
  <d>106.6323378240808</d>  </tStatistic>
[![](../../../minus.gif)](../../../#)<probability>
  <d>0</d>  </probability>
  </coefficients>
  </statCoefficients>
  <criterionValue>0.9981691131922996</criterionValue>[![](../../../minus.gif)](../../../#)<summaryStatistics>
  <stR2>0.9981691131922996</stR2>  <stAdjR2>0.9980928262419788</stAdjR2>  <stR2_2>0.9981691131922996</stR2_2>  <stAdjR2_2>0.9980928262419788</stAdjR2_2>  <stSE>0.5350176585813732</stSE>  <stSSR>6.869853479853474</stSSR>  <stLogL>-19.59000298921173</stLogL>  <stDW>3.366608997117618</stDW>  <stDWLowerBound>5.226173552036746e-05</stDWLowerBound>  <stDWUpperBound>6.112166540301281e-06</stDWUpperBound>  <stSD>12.25104077211402</stSD>  <stAIC>1.660769460708595</stAIC>  <stSC>1.757546117479478</stSC>  <stFstat_2>13084.40184060549</stFstat_2>  <stProbFstat_2>0</stProbFstat_2>  <stFstat>13084.40184060549</stFstat>  <stProbFstat>0</stProbFstat>  <stME>-3.552713678800501e-15</stME>  <stMAE>0.31025641025641</stMAE>  <stMSE>0.2642251338405183</stMSE>  <stMaxAE>1.933150183150188</stMaxAE>  <stSqMSE>0.5140283395305343</stSqMSE>  <stVE>0.2642251338405183</stVE>  <stSEE>0.5140283395305344</stSEE>  <stMD>21.1</stMD>  <stHQcriterion>1.688637636217742</stHQcriterion>  <stAvgLogL>NaN</stAvgLogL>  <stMcFaddenRsquared>NaN</stMcFaddenRsquared>  <stRestrLogL>NaN</stRestrLogL>  <stLRstatistic>NaN</stLRstatistic>  <stLRprobability>NaN</stLRprobability>  <stIncludedObservations>26</stIncludedObservations>  <stJstat>NaN</stJstat>  <stProbJstat>NaN</stProbJstat>  <stNumOfIter>-1</stNumOfIter>  <stJBStat>46.45284363973704</stJBStat>  <stProbJBStat>8.182632349473806e-11</stProbJBStat>  </summaryStatistics>
  <errors />
  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <dependenceForm>Polynomial</dependenceForm>  <expression>An*t^n + ... + A2*t^2 + A1*t + A0</expression>[![](../../../minus.gif)](../../../#)<statCoefficients>
[![](../../../minus.gif)](../../../#)<intercept>
  <mode>AutoEstimate</mode>  <estimate>-0.465181344869594</estimate>  <standardError>0.7871206378330464</standardError>  <tStatistic>-0.590991167694757</tStatistic>  <probability>0.5594417347097805</probability>  </intercept>
[![](../../../minus.gif)](../../../#)<coefficients>
[![](../../../minus.gif)](../../../#)<estimate>
  <d>1.582420928890241</d>  <d>0.001388551345301276</d>  <d>-4.994188660429374e-06</d>  <d>-1.199216706196811e-06</d>  </estimate>
[![](../../../minus.gif)](../../../#)<standardError>
  <d>0.392724727858397</d>  <d>0.05749696262512111</d>  <d>0.003169750766421726</d>  <d>5.829715944935267e-05</d>  </standardError>
[![](../../../minus.gif)](../../../#)<tStatistic>
  <d>4.029338660489969</d>  <d>0.02414999474588944</d>  <d>-0.001575577712082147</d>  <d>-0.02057075709218157</d>  </tStatistic>
[![](../../../minus.gif)](../../../#)<probability>
  <d>0.0007867132522725306</d>  <d>0.9809986801874817</d>  <d>0.9987602020207836</d>  <d>0.9838143840419024</d>  </probability>
  </coefficients>
  </statCoefficients>
  <criterionValue>0.9981742366165919</criterionValue>[![](../../../minus.gif)](../../../#)<summaryStatistics>
  <stR2>0.9981742366165919</stR2>  <stAdjR2>0.9978264721626093</stAdjR2>  <stR2_2>0.9981742366165919</stR2_2>  <stAdjR2_2>0.9978264721626093</stAdjR2_2>  <stSE>0.5711571115361268</stSE>  <stSSR>6.850629367224124</stSSR>  <stLogL>-19.55357371328806</stLogL>  <stDW>3.374546243247101</stDW>  <stDWLowerBound>0.000686446402999863</stDWLowerBound>  <stDWUpperBound>3.749894734120952e-09</stDWUpperBound>  <stSD>12.25104077211402</stSD>  <stAIC>1.888736439483697</stAIC>  <stSC>2.130678081410905</stSC>  <stFstat_2>2870.259525336149</stFstat_2>  <stProbFstat_2>0</stProbFstat_2>  <stFstat>2870.259525336149</stFstat>  <stProbFstat>0</stProbFstat>  <stME>-1.084602493287653e-15</stME>  <stMAE>0.3119376087872172</stMAE>  <stMSE>0.2634857448932355</stMSE>  <stMaxAE>1.920839385280324</stMaxAE>  <stSqMSE>0.5133086253836336</stSqMSE>  <stVE>0.2634857448932355</stVE>  <stSEE>0.5133086253836336</stSEE>  <stMD>21.1</stMD>  <stHQcriterion>1.958406878256565</stHQcriterion>  <stAvgLogL>NaN</stAvgLogL>  <stMcFaddenRsquared>NaN</stMcFaddenRsquared>  <stRestrLogL>NaN</stRestrLogL>  <stLRstatistic>NaN</stLRstatistic>  <stLRprobability>NaN</stLRprobability>  <stIncludedObservations>26</stIncludedObservations>  <stJstat>NaN</stJstat>  <stProbJstat>NaN</stProbJstat>  <stNumOfIter>-1</stNumOfIter>  <stJBStat>44.27599282059314</stJBStat>  <stProbJBStat>2.429910717083317e-10</stProbJBStat>  </summaryStatistics>
  <errors />
  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <dependenceForm>Logarithmic</dependenceForm>  <expression>A1*ln(t) + A0</expression>[![](../../../minus.gif)](../../../#)<statCoefficients>
[![](../../../minus.gif)](../../../#)<intercept>
  <mode>AutoEstimate</mode>  <estimate>-9.757959888305843</estimate>  <standardError>3.272527297090876</standardError>  <tStatistic>-2.981781052515655</tStatistic>  <probability>0.006007865777448607</probability>  </intercept>
[![](../../../minus.gif)](../../../#)<coefficients>
[![](../../../minus.gif)](../../../#)<estimate>
  <d>13.5959840407783</d>  </estimate>
[![](../../../minus.gif)](../../../#)<standardError>
  <d>1.206750999298278</d>  </standardError>
[![](../../../minus.gif)](../../../#)<tStatistic>
  <d>11.26660267833573</d>  </tStatistic>
[![](../../../minus.gif)](../../../#)<probability>
  <d>1.035826979745025e-11</d>  </probability>
  </coefficients>
  </statCoefficients>
  <criterionValue>0.8590172900274078</criterionValue>[![](../../../minus.gif)](../../../#)<summaryStatistics>
  <stR2>0.8590172900274078</stR2>  <stAdjR2>0.8531430104452165</stAdjR2>  <stR2_2>0.8590172900274078</stR2_2>  <stAdjR2_2>0.8531430104452165</stAdjR2_2>  <stSE>4.694834592219236</stSE>  <stSSR>528.9953243591607</stSSR>  <stLogL>-76.05988158036546</stLogL>  <stDW>0.2565964910183629</stDW>  <stDWLowerBound>1.273053136754938e-09</stDWLowerBound>  <stDWUpperBound>2.323162006230125e-11</stDWUpperBound>  <stSD>12.25104077211402</stSD>  <stAIC>6.004606275412727</stAIC>  <stSC>6.10138293218361</stSC>  <stFstat_2>146.2336407398165</stFstat_2>  <stProbFstat_2>1.065614263495718e-11</stProbFstat_2>  <stFstat>146.2336407398165</stFstat>  <stProbFstat>1.065614263495718e-11</stProbFstat>  <stME>-3.962642180200559e-15</stME>  <stMAE>3.81749483888947</stMAE>  <stMSE>20.34597401381387</stMSE>  <stMaxAE>10.75795988830584</stMaxAE>  <stSqMSE>4.510651174033953</stSqMSE>  <stVE>20.34597401381387</stVE>  <stSEE>4.510651174033953</stSEE>  <stMD>21.1</stMD>  <stHQcriterion>6.032474450921874</stHQcriterion>  <stAvgLogL>NaN</stAvgLogL>  <stMcFaddenRsquared>NaN</stMcFaddenRsquared>  <stRestrLogL>NaN</stRestrLogL>  <stLRstatistic>NaN</stLRstatistic>  <stLRprobability>NaN</stLRprobability>  <stIncludedObservations>26</stIncludedObservations>  <stJstat>NaN</stJstat>  <stProbJstat>NaN</stProbJstat>  <stNumOfIter>-1</stNumOfIter>  <stJBStat>1.964796154276888</stJBStat>  <stProbJBStat>0.374412152187965</stProbJBStat>  </summaryStatistics>
  <errors />
  </Item>
  </its>
  </dependenceForms>
  </curveEstimation>
[![](../../../minus.gif)](../../../#)<summaryStatistics>
  <stR2>0.9981742366165919</stR2>  <stAdjR2>0.9978264721626093</stAdjR2>  <stR2_2>0.9981742366165919</stR2_2>  <stAdjR2_2>0.9978264721626093</stAdjR2_2>  <stSE>0.5711571115361268</stSE>  <stSSR>6.850629367224124</stSSR>  <stLogL>-19.55357371328806</stLogL>  <stDW>3.374546243247101</stDW>  <stDWLowerBound>0.000686446402999863</stDWLowerBound>  <stDWUpperBound>3.749894734120952e-09</stDWUpperBound>  <stSD>12.25104077211402</stSD>  <stAIC>1.888736439483697</stAIC>  <stSC>2.130678081410905</stSC>  <stFstat_2>2870.259525336149</stFstat_2>  <stProbFstat_2>0</stProbFstat_2>  <stFstat>2870.259525336149</stFstat>  <stProbFstat>0</stProbFstat>  <stME>-1.084602493287653e-15</stME>  <stMAE>0.3119376087872172</stMAE>  <stMSE>0.2634857448932355</stMSE>  <stMaxAE>1.920839385280324</stMaxAE>  <stSqMSE>0.5133086253836336</stSqMSE>  <stVE>0.2634857448932355</stVE>  <stSEE>0.5133086253836336</stSEE>  <stMD>21.1</stMD>  <stHQcriterion>1.958406878256565</stHQcriterion>  <stAvgLogL>NaN</stAvgLogL>  <stMcFaddenRsquared>NaN</stMcFaddenRsquared>  <stRestrLogL>NaN</stRestrLogL>  <stLRstatistic>NaN</stLRstatistic>  <stLRprobability>NaN</stLRprobability>  <stIncludedObservations>26</stIncludedObservations>  <stJstat>NaN</stJstat>  <stProbJstat>NaN</stProbJstat>  <stNumOfIter>-1</stNumOfIter>  <stJBStat>44.27599282059314</stJBStat>  <stProbJBStat>2.429910717083317e-10</stProbJBStat>  </summaryStatistics>
  <name>An*t^n + ... + A2*t^2 + A1*t + A0</name>[![](../../../minus.gif)](../../../#)<series>
[![](../../../minus.gif)](../../../#)<input>
  <k>4294967295</k>  <lag>0</lag>[![](../../../minus.gif)](../../../#)<inversion>
  <type>None</type>  <lag>PrecidingValue</lag>  <previousLag>-1</previousLag>  <seasonality>None</seasonality>  <dependence>Linear</dependence>  <K>3</K>  </inversion>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>1</id>  <n>MyInputVavable</n>  <vis>1</vis>  <variableKey>2</variableKey>  <stubKey>89671</stubKey>[![](../../../minus.gif)](../../../#)<selections>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
[![](../../../minus.gif)](../../../#)<id>
  <id>89683</id>  </id>
  <variant>1</variant>  </Item>
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
  <d>1</d>  <d>4</d>  <d>2</d>  <d>7</d>  <d>7.5</d>  <d>9.1</d>  <d>10.7</d>  <d>12.3</d>  <d>13.9</d>  <d>15.5</d>  <d>17.1</d>  <d>18.7</d>  <d>20.3</d>  <d>21.9</d>  <d>23.5</d>  <d>25.1</d>  <d>26.7</d>  <d>28.3</d>  <d>29.9</d>  <d>31.5</d>  <d>33.1</d>  <d>34.7</d>  <d>36.3</d>  <d>37.9</d>  <d>39.5</d>  <d>41.1</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </fact>
[![](../../../minus.gif)](../../../#)<modelling>
  <d>1.118621941960582</d>  <d>2.913186226971609</d>  <d>3.920839385280324</d>  <d>6.083655743685077</d>  <d>7.480263299190218</d>  <d>9.284729796956913</d>  <d>10.30170480827827</d>  <d>12.47314753514884</d>  <d>13.87757084976917</d>  <d>15.68892737249664</d>  <d>16.71175154982057</d>  <d>18.8878874589317</d>  <d>20.2957328472268</d>  <d>22.10912521025945</d>  <d>23.13248386971516</d>  <d>25.30753777798089</d>  <d>26.71256955764962</d>  <d>28.52130157947111</d>  <d>29.53803804032711</d>  <d>31.70439276780075</d>  <d>33.09853325968123</d>  <d>34.89406676191454</d>  <d>35.89518234657857</d>  <d>38.04337871645274</d>  <d>39.4167082445224</d>  <d>41.18866305192973</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </modelling>
[![](../../../minus.gif)](../../../#)<residuals>
  <d>-0.1186219419605818</d>  <d>1.086813773028391</d>  <d>-1.920839385280324</d>  <d>0.9163442563149227</d>  <d>0.01973670080978174</d>  <d>-0.1847297969569137</d>  <d>0.398295191721731</d>  <d>-0.1731475351488356</d>  <d>0.02242915023083114</d>  <d>-0.1889273724966447</d>  <d>0.3882484501794323</d>  <d>-0.187887458931705</d>  <d>0.004267152773199001</d>  <d>-0.2091252102594545</d>  <d>0.3675161302848373</d>  <d>-0.2075377779808925</d>  <d>-0.01256955764961987</d>  <d>-0.2213015794711097</d>  <d>0.3619619596728931</d>  <d>-0.2043927678007549</d>  <d>0.0014667403187687</d>  <d>-0.1940667619145344</d>  <d>0.404817653421425</d>  <d>-0.1433787164527374</d>  <d>0.08329175547759604</d>  <d>-0.08866305192972845</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </residuals>
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
  <doUseR>0</doUseR>  <supportsR>0</supportsR>  </method>
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
  <stochastic>0</stochastic>  <calculationPeriod>Forecast</calculationPeriod>  <useModelPeriod>1</useModelPeriod>  <useExistingData>0</useExistingData>  <treatNullsAsZeros>0</treatNullsAsZeros>  <autoName>1</autoName>[![](../../../minus.gif)](../../../#)<period>
  <identificationStartDate>1990-01-01</identificationStartDate>  <identificationEndDate>2018-04-24</identificationEndDate>  <forecastStartDate>2018-04-25</forecastStartDate>  <forecastEndDate>2020-01-01</forecastEndDate>  <identificationStartDateParamID />
  <identificationEndDateParamID />
  <forecastStartDateParamID />
  <forecastEndDateParamID />
  <autoPeriod>28672</autoPeriod>  <identificationStartOffset>0</identificationStartOffset>  <identificationEndOffset>0</identificationEndOffset>  <forecastEndOffset>0</forecastEndOffset>  <isIdentStartCorrect>1</isIdentStartCorrect>  <isIdentEndCorrect>1</isIdentEndCorrect>  <isForecastEndCorrect>1</isForecastEndCorrect>  </period>
  <isExclusive>1</isExclusive>  <useAutoPeriod>1</useAutoPeriod>  <generatedName>MyOutputVavable|A[t] = An*t^n + ... + A2*t^2 + A1*t + A0</generatedName>  <warnings />
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
     "id" : "JNLCLHMGDNMBFOAELPKIJBHANNONPCBEIJFLOLMEADGBMGDH!M!S!CEOONGIMGDNMBFOAELALNGGIOBDBEJFMELJOJAOPDLFDOADIF"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
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
       "scenarioKeys" : "",
       "execMethod" : "true",
       "execSummaryStatistics" : "true",
       "execCoefficients" : "true",
       "execEvaluateSeries" : "true",
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
     "id" : "JNLCLHMGDNMBFOAELPKIJBHANNONPCBEIJFLOLMEADGBMGDH!M!S!CEOONGIMGDNMBFOAELALNGGIOBDBEJFMELJOJAOPDLFDOADIF"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@fullUrl" : "http:\/\/v-shp-development.dev.fs.fsight.world\/",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "4",
         "@hf" : "0",
         "i" : "MODELSPACE",
         "n" : "Контейнер моделирования",
         "k" : "1581",
         "c" : "5121",
         "p" : "1580",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
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
                 "n" : "MyOutputVavable|A[t] = Trend(MyInputVavable[t]), (От родителя)-(От родителя)",
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
                             "kind" : "CurveEstimation",
                             "method" :
                              {
                               "curveEstimation" :
                                {
                                 "criterion" : "R2",
                                 "dependenceForm" : "Linear",
                                 "dependenceFormIncluded" :
                                  {
                                   "it" :
                                    [
                                      "Linear",
                                      "Polynomial",
                                      "Logarithmic"
                                    ]
                                  },
                                 "polynomOrder" : "4",
                                 "seasonalComponent" :
                                  {
                                   "mode" : "Additive",
                                   "cycle" : "4"
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
                                 "confidenceLevel" : "0.96",
                                 "bestDependenceForm" : "Polynomial",
                                 "value" : "0",
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
                                 "dependenceForms" :
                                  {
                                   "its" :
                                    {
                                     "Item" :
                                      [
                                        {
                                         "dependenceForm" : "Linear",
                                         "expression" : "A1*t + A0",
                                         "statCoefficients" :
                                          {
                                           "intercept" :
                                            {
                                             "mode" : "AutoEstimate",
                                             "estimate" : "-0.4928571428571348",
                                             "standardError" : "0.2910409353847357",
                                             "tStatistic" : "-1.693428940522103",
                                             "probability" : "0.1018820994993999"
                                            },
                                           "coefficients" :
                                            {
                                             "estimate" :
                                              {
                                               "d" : "1.598351648351648"
                                              },
                                             "standardError" :
                                              {
                                               "d" : "0.01498937077595134"
                                              },
                                             "tStatistic" :
                                              {
                                               "d" : "106.6323378240808"
                                              },
                                             "probability" :
                                              {
                                               "d" : "0"
                                              }
                                            }
                                          },
                                         "criterionValue" : "0.9981691131922996",
                                         "summaryStatistics" :
                                          {
                                           "stR2" : "0.9981691131922996",
                                           "stAdjR2" : "0.9980928262419788",
                                           "stR2_2" : "0.9981691131922996",
                                           "stAdjR2_2" : "0.9980928262419788",
                                           "stSE" : "0.5350176585813732",
                                           "stSSR" : "6.869853479853474",
                                           "stLogL" : "-19.59000298921173",
                                           "stDW" : "3.366608997117618",
                                           "stDWLowerBound" : "5.226173552036746e-05",
                                           "stDWUpperBound" : "6.112166540301281e-06",
                                           "stSD" : "12.25104077211402",
                                           "stAIC" : "1.660769460708595",
                                           "stSC" : "1.757546117479478",
                                           "stFstat_2" : "13084.40184060549",
                                           "stProbFstat_2" : "0",
                                           "stFstat" : "13084.40184060549",
                                           "stProbFstat" : "0",
                                           "stME" : "-3.552713678800501e-15",
                                           "stMAE" : "0.31025641025641",
                                           "stMSE" : "0.2642251338405183",
                                           "stMaxAE" : "1.933150183150188",
                                           "stSqMSE" : "0.5140283395305343",
                                           "stVE" : "0.2642251338405183",
                                           "stSEE" : "0.5140283395305344",
                                           "stMD" : "21.1",
                                           "stHQcriterion" : "1.688637636217742",
                                           "stAvgLogL" : "NaN",
                                           "stMcFaddenRsquared" : "NaN",
                                           "stRestrLogL" : "NaN",
                                           "stLRstatistic" : "NaN",
                                           "stLRprobability" : "NaN",
                                           "stIncludedObservations" : "26",
                                           "stJstat" : "NaN",
                                           "stProbJstat" : "NaN",
                                           "stNumOfIter" : "-1",
                                           "stJBStat" : "46.45284363973704",
                                           "stProbJBStat" : "8.182632349473806e-11"
                                          },
                                         "errors" : ""
                                        },
                                        {
                                         "dependenceForm" : "Polynomial",
                                         "expression" : "An*t^n + ... + A2*t^2 + A1*t + A0",
                                         "statCoefficients" :
                                          {
                                           "intercept" :
                                            {
                                             "mode" : "AutoEstimate",
                                             "estimate" : "-0.465181344869594",
                                             "standardError" : "0.7871206378330464",
                                             "tStatistic" : "-0.590991167694757",
                                             "probability" : "0.5594417347097805"
                                            },
                                           "coefficients" :
                                            {
                                             "estimate" :
                                              {
                                               "d" :
                                                [
                                                  "1.582420928890241",
                                                  "0.001388551345301276",
                                                  "-4.994188660429374e-06",
                                                  "-1.199216706196811e-06"
                                                ]
                                              },
                                             "standardError" :
                                              {
                                               "d" :
                                                [
                                                  "0.392724727858397",
                                                  "0.05749696262512111",
                                                  "0.003169750766421726",
                                                  "5.829715944935267e-05"
                                                ]
                                              },
                                             "tStatistic" :
                                              {
                                               "d" :
                                                [
                                                  "4.029338660489969",
                                                  "0.02414999474588944",
                                                  "-0.001575577712082147",
                                                  "-0.02057075709218157"
                                                ]
                                              },
                                             "probability" :
                                              {
                                               "d" :
                                                [
                                                  "0.0007867132522725306",
                                                  "0.9809986801874817",
                                                  "0.9987602020207836",
                                                  "0.9838143840419024"
                                                ]
                                              }
                                            }
                                          },
                                         "criterionValue" : "0.9981742366165919",
                                         "summaryStatistics" :
                                          {
                                           "stR2" : "0.9981742366165919",
                                           "stAdjR2" : "0.9978264721626093",
                                           "stR2_2" : "0.9981742366165919",
                                           "stAdjR2_2" : "0.9978264721626093",
                                           "stSE" : "0.5711571115361268",
                                           "stSSR" : "6.850629367224124",
                                           "stLogL" : "-19.55357371328806",
                                           "stDW" : "3.374546243247101",
                                           "stDWLowerBound" : "0.000686446402999863",
                                           "stDWUpperBound" : "3.749894734120952e-09",
                                           "stSD" : "12.25104077211402",
                                           "stAIC" : "1.888736439483697",
                                           "stSC" : "2.130678081410905",
                                           "stFstat_2" : "2870.259525336149",
                                           "stProbFstat_2" : "0",
                                           "stFstat" : "2870.259525336149",
                                           "stProbFstat" : "0",
                                           "stME" : "-1.084602493287653e-15",
                                           "stMAE" : "0.3119376087872172",
                                           "stMSE" : "0.2634857448932355",
                                           "stMaxAE" : "1.920839385280324",
                                           "stSqMSE" : "0.5133086253836336",
                                           "stVE" : "0.2634857448932355",
                                           "stSEE" : "0.5133086253836336",
                                           "stMD" : "21.1",
                                           "stHQcriterion" : "1.958406878256565",
                                           "stAvgLogL" : "NaN",
                                           "stMcFaddenRsquared" : "NaN",
                                           "stRestrLogL" : "NaN",
                                           "stLRstatistic" : "NaN",
                                           "stLRprobability" : "NaN",
                                           "stIncludedObservations" : "26",
                                           "stJstat" : "NaN",
                                           "stProbJstat" : "NaN",
                                           "stNumOfIter" : "-1",
                                           "stJBStat" : "44.27599282059314",
                                           "stProbJBStat" : "2.429910717083317e-10"
                                          },
                                         "errors" : ""
                                        },
                                        {
                                         "dependenceForm" : "Logarithmic",
                                         "expression" : "A1*ln(t) + A0",
                                         "statCoefficients" :
                                          {
                                           "intercept" :
                                            {
                                             "mode" : "AutoEstimate",
                                             "estimate" : "-9.757959888305843",
                                             "standardError" : "3.272527297090876",
                                             "tStatistic" : "-2.981781052515655",
                                             "probability" : "0.006007865777448607"
                                            },
                                           "coefficients" :
                                            {
                                             "estimate" :
                                              {
                                               "d" : "13.5959840407783"
                                              },
                                             "standardError" :
                                              {
                                               "d" : "1.206750999298278"
                                              },
                                             "tStatistic" :
                                              {
                                               "d" : "11.26660267833573"
                                              },
                                             "probability" :
                                              {
                                               "d" : "1.035826979745025e-11"
                                              }
                                            }
                                          },
                                         "criterionValue" : "0.8590172900274078",
                                         "summaryStatistics" :
                                          {
                                           "stR2" : "0.8590172900274078",
                                           "stAdjR2" : "0.8531430104452165",
                                           "stR2_2" : "0.8590172900274078",
                                           "stAdjR2_2" : "0.8531430104452165",
                                           "stSE" : "4.694834592219236",
                                           "stSSR" : "528.9953243591607",
                                           "stLogL" : "-76.05988158036546",
                                           "stDW" : "0.2565964910183629",
                                           "stDWLowerBound" : "1.273053136754938e-09",
                                           "stDWUpperBound" : "2.323162006230125e-11",
                                           "stSD" : "12.25104077211402",
                                           "stAIC" : "6.004606275412727",
                                           "stSC" : "6.10138293218361",
                                           "stFstat_2" : "146.2336407398165",
                                           "stProbFstat_2" : "1.065614263495718e-11",
                                           "stFstat" : "146.2336407398165",
                                           "stProbFstat" : "1.065614263495718e-11",
                                           "stME" : "-3.962642180200559e-15",
                                           "stMAE" : "3.81749483888947",
                                           "stMSE" : "20.34597401381387",
                                           "stMaxAE" : "10.75795988830584",
                                           "stSqMSE" : "4.510651174033953",
                                           "stVE" : "20.34597401381387",
                                           "stSEE" : "4.510651174033953",
                                           "stMD" : "21.1",
                                           "stHQcriterion" : "6.032474450921874",
                                           "stAvgLogL" : "NaN",
                                           "stMcFaddenRsquared" : "NaN",
                                           "stRestrLogL" : "NaN",
                                           "stLRstatistic" : "NaN",
                                           "stLRprobability" : "NaN",
                                           "stIncludedObservations" : "26",
                                           "stJstat" : "NaN",
                                           "stProbJstat" : "NaN",
                                           "stNumOfIter" : "-1",
                                           "stJBStat" : "1.964796154276888",
                                           "stProbJBStat" : "0.374412152187965"
                                          },
                                         "errors" : ""
                                        }
                                      ]
                                    }
                                  }
                                },
                               "summaryStatistics" :
                                {
                                 "stR2" : "0.9981742366165919",
                                 "stAdjR2" : "0.9978264721626093",
                                 "stR2_2" : "0.9981742366165919",
                                 "stAdjR2_2" : "0.9978264721626093",
                                 "stSE" : "0.5711571115361268",
                                 "stSSR" : "6.850629367224124",
                                 "stLogL" : "-19.55357371328806",
                                 "stDW" : "3.374546243247101",
                                 "stDWLowerBound" : "0.000686446402999863",
                                 "stDWUpperBound" : "3.749894734120952e-09",
                                 "stSD" : "12.25104077211402",
                                 "stAIC" : "1.888736439483697",
                                 "stSC" : "2.130678081410905",
                                 "stFstat_2" : "2870.259525336149",
                                 "stProbFstat_2" : "0",
                                 "stFstat" : "2870.259525336149",
                                 "stProbFstat" : "0",
                                 "stME" : "-1.084602493287653e-15",
                                 "stMAE" : "0.3119376087872172",
                                 "stMSE" : "0.2634857448932355",
                                 "stMaxAE" : "1.920839385280324",
                                 "stSqMSE" : "0.5133086253836336",
                                 "stVE" : "0.2634857448932355",
                                 "stSEE" : "0.5133086253836336",
                                 "stMD" : "21.1",
                                 "stHQcriterion" : "1.958406878256565",
                                 "stAvgLogL" : "NaN",
                                 "stMcFaddenRsquared" : "NaN",
                                 "stRestrLogL" : "NaN",
                                 "stLRstatistic" : "NaN",
                                 "stLRprobability" : "NaN",
                                 "stIncludedObservations" : "26",
                                 "stJstat" : "NaN",
                                 "stProbJstat" : "NaN",
                                 "stNumOfIter" : "-1",
                                 "stJBStat" : "44.27599282059314",
                                 "stProbJBStat" : "2.429910717083317e-10"
                                },
                               "name" : "An*t^n + ... + A2*t^2 + A1*t + A0",
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
                                     "id" : "1",
                                     "n" : "MyInputVavable",
                                     "vis" : "1",
                                     "variableKey" : "2",
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
                                           "variant" : "1"
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
                                          "1.118621941960582",
                                          "2.913186226971609",
                                          "3.920839385280324",
                                          "6.083655743685077",
                                          "7.480263299190218",
                                          "9.284729796956913",
                                          "10.30170480827827",
                                          "12.47314753514884",
                                          "13.87757084976917",
                                          "15.68892737249664",
                                          "16.71175154982057",
                                          "18.8878874589317",
                                          "20.2957328472268",
                                          "22.10912521025945",
                                          "23.13248386971516",
                                          "25.30753777798089",
                                          "26.71256955764962",
                                          "28.52130157947111",
                                          "29.53803804032711",
                                          "31.70439276780075",
                                          "33.09853325968123",
                                          "34.89406676191454",
                                          "35.89518234657857",
                                          "38.04337871645274",
                                          "39.4167082445224",
                                          "41.18866305192973",
                                          "NaN",
                                          "NaN",
                                          "NaN"
                                        ]
                                      },
                                     "residuals" :
                                      {
                                       "d" :
                                        [
                                          "-0.1186219419605818",
                                          "1.086813773028391",
                                          "-1.920839385280324",
                                          "0.9163442563149227",
                                          "0.01973670080978174",
                                          "-0.1847297969569137",
                                          "0.398295191721731",
                                          "-0.1731475351488356",
                                          "0.02242915023083114",
                                          "-0.1889273724966447",
                                          "0.3882484501794323",
                                          "-0.187887458931705",
                                          "0.004267152773199001",
                                          "-0.2091252102594545",
                                          "0.3675161302848373",
                                          "-0.2075377779808925",
                                          "-0.01256955764961987",
                                          "-0.2213015794711097",
                                          "0.3619619596728931",
                                          "-0.2043927678007549",
                                          "0.0014667403187687",
                                          "-0.1940667619145344",
                                          "0.404817653421425",
                                          "-0.1433787164527374",
                                          "0.08329175547759604",
                                          "-0.08866305192972845",
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
                               "supportsR" : "0"
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
                   "stochastic" : "0",
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
                   "generatedName" : "MyOutputVavable|A[t] = An*t^n + ... + A2*t^2 + A1*t + A0",
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


public static MsCalculationChainEntry GetMsCurveEstimation(MsId ms, ulong modelKey, ulong eqKey)
{
    var getMsOp = new GetMs();
    // Задаем параметры выполнения операции
    getMsOp.tMs = ms;
    getMsOp.tArg = new GetMsArg()
    {  // Задаем шаблон извлечения данных
        pattern = new MsMdPattern()
        {
            item = new MsItemPattern()
            {  // Указываем ключ рассчитываемого уравнения
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
        }, // Задаем параметры расчёта уравнения
        execParams = new MsMdExecParams()
        {
            k = 0,
            execMethod = true,
            execEvaluateSeries = true,
            execGenerateName = true,
            execSummaryStatistics = true,
            execCoefficients = true,
            execStatCoefficients = true,
            scenarioKeys = new long[] { },
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
            if (eq.warnings.Length != 0)
    {
        Console.WriteLine("-- Предупреждения --");
        Console.WriteLine("".PadRight(3) + printArray(eq.warnings));
    }
    if (eq.error == null) //Проверяем, возникли ли ошибки при расчёте уравнения
    {   // Уравнение рассчитано без ошибок
        // Получаем результаты расчёта
        TsFormula formula = eq.transform.formulas.its.GetValue(0) as TsFormula;
        TsCurveEstimationMethod curve = formula.method.curveEstimation;
        // Выводим лучшую форму зависимости
        Console.WriteLine("Лучшая форма зависимости: "+curve.bestDependenceForm.Value);
        // Выводим данные о формах зависимости
        MsDependenceForms depForms = curve.dependenceForms;
        foreach (MsDependenceForm form in depForms.its)
        {
            Console.WriteLine("Исследуемая форма зависимости: "+ form.dependenceForm.ToString());
            if (form.errors == "")
            {
                Console.WriteLine("Значение критерия: ".PadRight(3) + form.criterionValue);
                Console.WriteLine("Уравнение: ".PadRight(3) + form.expression);
                // Получаем статистические характеристики и выводим в окно консоли
                StatSummaryStatistics stat = form.summaryStatistics;
                PrintStat(stat);
                // Поучаем значения коэффициентов и выводим в окно консоли
                StatModelCoefficients coef = form.statCoefficients;
                PrintCoef(coef);
            }
            else // Выводим ошибки, возникшие при подборе зависимости
            { Console.WriteLine("".PadRight(3)+form.errors);};
        };
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


См. также:


[GetMs: Операция](../GetMs.htm)
 | [Настройка параметров
 метода «Подбор вида зависимости»](../SetMs_Sample/SetMsCurveEstimation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
