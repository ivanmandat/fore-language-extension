# Расчёт метода «Нелинейная регрессия»

Расчёт метода «Нелинейная регрессия»
-


**


# Расчёт метода «Нелинейная регрессия»


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для расчёта уравнения. В запросе передаются: экземпляр открытого контейнера
 моделирования, шаблон расчёта уравнения и параметры выполнения операции.
 В ответе приходит экземпляр модели, содержащей уравнение с результатами
 расчёта.


Для выполнения примера уравнение должно рассчитываться методом «Нелинейная регрессия».


В примере C# для вывода результатов используются вспомогательные процедуры:
 PrintArray, PrintSeries,
 описанные в разделе «[Расчёт уравнения](GetMsCalcEq.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>CGNGLNJJAFNBFOAEAMLDKJBMDFDMIKBECLCCPAGGMMNHDHAO!M!S!CCFELIOJJAFNBFOAEGCJLMLPJNCHIHJEEHKPLONIGDEKIBJDL</id>  </tMs>
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
  <scenarioKeys />
  <execMethod>true</execMethod>  <execEvaluateSeries>true</execEvaluateSeries>  <execIsCoefficientsSaved>true</execIsCoefficientsSaved>  <execStatCoefficients>true</execStatCoefficients>  </execParams>
  </tArg>
  </GetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>CGNGLNJJAFNBFOAEAMLDKJBMDFDMIKBECLCCPAGGMMNHDHAO!M!S!CCFELIOJJAFNBFOAEGCJLMLPJNCHIHJEEHKPLONIGDEKIBJDL</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<item>
  <k>89669</k>  <id>MODEL_NEW</id>  <n>MODEL_NEW</n>  <vis>1</vis>  <type>Problem</type>[![](../../../minus.gif)](../../../#)<problemMd>
[![](../../../minus.gif)](../../../#)<metamodel>
  <k>89670</k>[![](../../../minus.gif)](../../../#)<calculationChain>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>4</k>  <id>OBJ4</id>  <n>MyOutputVavable|A[t] = MyInputVavable|A[t] * a + b, 1990A1-2010A1</n>  <vis>1</vis>  <type>Model</type>  <excluded>0</excluded>  <graphMeta />
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
  <k>0</k>  <kind>NonLinearRegression</kind>[![](../../../minus.gif)](../../../#)<method>
[![](../../../minus.gif)](../../../#)<nonLinearRegression>
[![](../../../minus.gif)](../../../#)<missingData>
  <specifiedVector />
  <method>LinTrend</method>  <methodParameter>5</methodParameter>  <specifiedValue>0</specifiedValue>[![](../../../minus.gif)](../../../#)<specifiedTerm>
  <k>4294967295</k>  </specifiedTerm>
  </missingData>
  <confidenceLevel>0.9</confidenceLevel>  <useDerivatives>1</useDerivatives>[![](../../../minus.gif)](../../../#)<initialApproximation>
  <d>0.15</d>  <d>0.09</d>  </initialApproximation>
  <maxIterations>500</maxIterations>  <maxStep>0.4</maxStep>  <dampingFactorTolerance>0.6</dampingFactorTolerance>  <expression>@_2:0[] * a + b</expression>[![](../../../minus.gif)](../../../#)<result>
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
  <included>0</included>  </result>
[![](../../../minus.gif)](../../../#)<operands>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>0</k>[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>MyInputVavable|A</id>  <n>MyInputVavable|A</n>  <vis>1</vis>  <variableKey>2</variableKey>  <stubKey>89671</stubKey>[![](../../../minus.gif)](../../../#)<selections>
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
  <lag>1</lag>  <key>1</key>  <termToText>{TS(MyInputVavable|A[t+1], Linear)}</termToText>  <termToInnerText>@_2:0[1][9:0]</termToInnerText>[![](../../../minus.gif)](../../../#)<termInfo>
  <k>4294967295</k>  <lag>1</lag>[![](../../../minus.gif)](../../../#)<inversion>
  <type>TS</type>  <lag>PrecidingValue</lag>  <previousLag>-1</previousLag>  <seasonality>None</seasonality>  <dependence>Linear</dependence>  <K>3</K>  </inversion>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>MyInputVavable|A</id>  <n>MyInputVavable|A</n>  <vis>1</vis>  <variableKey>2</variableKey>  <stubKey>89671</stubKey>[![](../../../minus.gif)](../../../#)<selections>
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
  <date>1899-12-30</date>  </termInfo>
[![](../../../minus.gif)](../../../#)<unitInfo>
  <unit>4294967295</unit>  <measure>4294967295</measure>  <baseUnit>4294967295</baseUnit>  <unitsDimensionKey>0</unitsDimensionKey>  </unitInfo>
  <included>0</included>  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <k>1</k>[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>MyInputVavable|A</id>  <n>MyInputVavable|A</n>  <vis>1</vis>  <variableKey>2</variableKey>  <stubKey>89671</stubKey>[![](../../../minus.gif)](../../../#)<selections>
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
  <lag>0</lag>  <key>2</key>  <termToText>{MyInputVavable|A[t]}</termToText>  <termToInnerText>@_2:0[]</termToInnerText>[![](../../../minus.gif)](../../../#)<termInfo>
  <k>4294967295</k>  <lag>0</lag>[![](../../../minus.gif)](../../../#)<inversion>
  <type>None</type>  <lag>PrecidingValue</lag>  <previousLag>-1</previousLag>  <seasonality>None</seasonality>  <dependence>Linear</dependence>  <K>3</K>  </inversion>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>MyInputVavable|A</id>  <n>MyInputVavable|A</n>  <vis>1</vis>  <variableKey>2</variableKey>  <stubKey>89671</stubKey>[![](../../../minus.gif)](../../../#)<selections>
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
  <date>1899-12-30</date>  </termInfo>
[![](../../../minus.gif)](../../../#)<unitInfo>
  <unit>4294967295</unit>  <measure>4294967295</measure>  <baseUnit>4294967295</baseUnit>  <unitsDimensionKey>0</unitsDimensionKey>  </unitInfo>
  <included>1</included>  </Item>
  </its>
  </operands>
[![](../../../minus.gif)](../../../#)<coefficients>
  <it>a</it>  <it>b</it>  </coefficients>
  <isCoefficientsSaved>0</isCoefficientsSaved>[![](../../../minus.gif)](../../../#)<statCoefficients>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <estimate>-0.07833068250940456</estimate>  <standardError>0.04307364909196183</standardError>  <tStatistic>-1.818529058036604</tStatistic>  <probability>0.08900474700852867</probability>  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <estimate>4.374510772763077</estimate>  <standardError>0.6880094965630595</standardError>  <tStatistic>6.358212778480349</tStatistic>  <probability>1.285011021923133e-05</probability>  </Item>
  </its>
  </statCoefficients>
  <optimizationMethod>LevenbergMarquardt</optimizationMethod>  <tolerance>0.0001</tolerance>  <useDefaultInitValues>0</useDefaultInitValues>  </nonLinearRegression>
  <name>X2 * (-0.0783) + 4.3745</name>[![](../../../minus.gif)](../../../#)<series>
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
  <d>3</d>  <d>7</d>  <d>2</d>  <d>6</d>  <d>4</d>  <d>1</d>  <d>5</d>  <d>3.42857143</d>  <d>3.28571429</d>  <d>3.14285714</d>  <d>3</d>  <d>2.85714286</d>  <d>2.71428571</d>  <d>2.57142857</d>  <d>2.42857143</d>  <d>2.28571429</d>  <d>2.14285714</d>  </fact>
[![](../../../minus.gif)](../../../#)<modelling>
  <d>4.296180090253672</d>  <d>4.061188042725458</d>  <d>4.217849407744268</d>  <d>3.826195995197245</d>  <d>3.787030653942542</d>  <d>3.661701561927495</d>  <d>3.536372469912448</d>  <d>3.4110433778974</d>  <d>3.285714285882353</d>  <d>3.160385193867306</d>  <d>3.035056101852258</d>  <d>2.909727009837211</d>  <d>2.784397917822164</d>  <d>2.659068825807117</d>  <d>2.53373973379207</d>  <d>2.408410641777022</d>  <d>2.283081549761975</d>  </modelling>
[![](../../../minus.gif)](../../../#)<residuals>
  <d>-1.296180090253672</d>  <d>2.938811957274542</d>  <d>-2.217849407744268</d>  <d>2.173804004802755</d>  <d>0.2129693460574575</d>  <d>-2.661701561927495</d>  <d>1.463627530087552</d>  <d>0.01752805210259956</d>  <d>4.117647112167333e-09</d>  <d>-0.01752805386730616</d>  <d>-0.03505610185225816</d>  <d>-0.05258414983721105</d>  <d>-0.07011220782216387</d>  <d>-0.08764025580711676</d>  <d>-0.1051683037920697</d>  <d>-0.1226963517770217</d>  <d>-0.1402244097619749</d>  </residuals>
[![](../../../minus.gif)](../../../#)<input>
  <d>3</d>  <d>7</d>  <d>2</d>  <d>6</d>  <d>4</d>  <d>1</d>  <d>5</d>  <d>3.42857143</d>  <d>3.28571429</d>  <d>3.14285714</d>  <d>3</d>  <d>2.85714286</d>  <d>2.71428571</d>  <d>2.57142857</d>  <d>2.42857143</d>  <d>2.28571429</d>  <d>2.14285714</d>  <d>2</d>  <d>1.85714286</d>  <d>1.71428571</d>  <d>1.57142857</d>  </input>
[![](../../../minus.gif)](../../../#)<factors>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <termToText>{MyInputVavable|A[t]}</termToText>[![](../../../minus.gif)](../../../#)<serie>
  <d>1</d>  <d>4</d>  <d>2</d>  <d>7</d>  <d>7.5</d>  <d>9.1</d>  <d>10.7</d>  <d>12.3</d>  <d>13.9</d>  <d>15.5</d>  <d>17.1</d>  <d>18.7</d>  <d>20.3</d>  <d>21.9</d>  <d>23.5</d>  <d>25.1</d>  <d>26.7</d>  <d>28.3</d>  <d>29.9</d>  <d>31.5</d>  <d>33.1</d>  </serie>
[![](../../../minus.gif)](../../../#)<inversion>
  <type>None</type>  <lag>PrecidingValue</lag>  <previousLag>-1</previousLag>  <seasonality>None</seasonality>  <dependence>Linear</dependence>  <K>3</K>  </inversion>
  <entryKey>1</entryKey>  </it>
  </its>
  </factors>
  </Item>
  </its>
[![](../../../minus.gif)](../../../#)<dates>
  <it>1990A1</it>  <it>1991A1</it>  <it>1992A1</it>  <it>1993A1</it>  <it>1994A1</it>  <it>1995A1</it>  <it>1996A1</it>  <it>1997A1</it>  <it>1998A1</it>  <it>1999A1</it>  <it>2000A1</it>  <it>2001A1</it>  <it>2002A1</it>  <it>2003A1</it>  <it>2004A1</it>  <it>2005A1</it>  <it>2006A1</it>  <it>2007A1</it>  <it>2008A1</it>  <it>2009A1</it>  <it>2010A1</it>  </dates>
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
  <identificationStartDate>1990-01-01</identificationStartDate>  <identificationEndDate>2006-01-01</identificationEndDate>  <forecastStartDate>2006-01-02</forecastStartDate>  <forecastEndDate>2010-01-01</forecastEndDate>  <identificationStartDateParamID />
  <identificationEndDateParamID />
  <forecastStartDateParamID />
  <forecastEndDateParamID />
  <autoPeriod>0</autoPeriod>  <identificationStartOffset>0</identificationStartOffset>  <identificationEndOffset>0</identificationEndOffset>  <forecastEndOffset>0</forecastEndOffset>  <isIdentStartCorrect>1</isIdentStartCorrect>  <isIdentEndCorrect>1</isIdentEndCorrect>  <isForecastEndCorrect>1</isForecastEndCorrect>  </period>
  <isExclusive>1</isExclusive>  <useAutoPeriod>0</useAutoPeriod>  <generatedName>MyOutputVavable|A[t] = MyInputVavable|A[t] * a + b</generatedName>  <warnings />
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
     "id" : "CGNGLNJJAFNBFOAEAMLDKJBMDFDMIKBECLCCPAGGMMNHDHAO!M!S!CCFELIOJJAFNBFOAEGCJLMLPJNCHIHJEEHKPLONIGDEKIBJDL"
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
       "scenarioKeys" : "",
       "execMethod" : "true",
       "execEvaluateSeries" : "true",
       "execIsCoefficientsSaved" : "true",
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
     "id" : "CGNGLNJJAFNBFOAEAMLDKJBMDFDMIKBECLCCPAGGMMNHDHAO!M!S!CCFELIOJJAFNBFOAEGCJLMLPJNCHIHJEEHKPLONIGDEKIBJDL"
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
                 "n" : "MyOutputVavable|A[t] = MyInputVavable|A[t] * a + b, 1990A1-2010A1",
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
                             "kind" : "NonLinearRegression",
                             "method" :
                              {
                               "nonLinearRegression" :
                                {
                                 "missingData" :
                                  {
                                   "specifiedVector" : "",
                                   "method" : "LinTrend",
                                   "methodParameter" : "5",
                                   "specifiedValue" : "0",
                                   "specifiedTerm" :
                                    {
                                     "k" : "4294967295"
                                    }
                                  },
                                 "confidenceLevel" : "0.9",
                                 "useDerivatives" : "1",
                                 "initialApproximation" :
                                  {
                                   "d" :
                                    [
                                      "0.15",
                                      "0.09"
                                    ]
                                  },
                                 "maxIterations" : "500",
                                 "maxStep" : "0.4",
                                 "dampingFactorTolerance" : "0.6",
                                 "expression" : "@_2:0[] * a + b",
                                 "result" :
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
                                 "operands" :
                                  {
                                   "its" :
                                    {
                                     "Item" :
                                      [
                                        {
                                         "k" : "0",
                                         "slice" :
                                          {
                                           "k" : "0",
                                           "id" : "MyInputVavable|A",
                                           "n" : "MyInputVavable|A",
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
                                         "lag" : "1",
                                         "key" : "1",
                                         "termToText" : "{TS(MyInputVavable|A[t+1], Linear)}",
                                         "termToInnerText" : "@_2:0[1][9:0]",
                                         "termInfo" :
                                          {
                                           "k" : "4294967295",
                                           "lag" : "1",
                                           "inversion" :
                                            {
                                             "type" : "TS",
                                             "lag" : "PrecidingValue",
                                             "previousLag" : "-1",
                                             "seasonality" : "None",
                                             "dependence" : "Linear",
                                             "K" : "3"
                                            },
                                           "slice" :
                                            {
                                             "k" : "0",
                                             "id" : "MyInputVavable|A",
                                             "n" : "MyInputVavable|A",
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
                                         "unitInfo" :
                                          {
                                           "unit" : "4294967295",
                                           "measure" : "4294967295",
                                           "baseUnit" : "4294967295",
                                           "unitsDimensionKey" : "0"
                                          },
                                         "included" : "0"
                                        },
                                        {
                                         "k" : "1",
                                         "slice" :
                                          {
                                           "k" : "0",
                                           "id" : "MyInputVavable|A",
                                           "n" : "MyInputVavable|A",
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
                                         "lag" : "0",
                                         "key" : "2",
                                         "termToText" : "{MyInputVavable|A[t]}",
                                         "termToInnerText" : "@_2:0[]",
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
                                             "id" : "MyInputVavable|A",
                                             "n" : "MyInputVavable|A",
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
                                         "unitInfo" :
                                          {
                                           "unit" : "4294967295",
                                           "measure" : "4294967295",
                                           "baseUnit" : "4294967295",
                                           "unitsDimensionKey" : "0"
                                          },
                                         "included" : "1"
                                        }
                                      ]
                                    }
                                  },
                                 "coefficients" :
                                  {
                                   "it" :
                                    [
                                      "a",
                                      "b"
                                    ]
                                  },
                                 "isCoefficientsSaved" : "0",
                                 "statCoefficients" :
                                  {
                                   "its" :
                                    {
                                     "Item" :
                                      [
                                        {
                                         "estimate" : "-0.07833068250940456",
                                         "standardError" : "0.04307364909196183",
                                         "tStatistic" : "-1.818529058036604",
                                         "probability" : "0.08900474700852867"
                                        },
                                        {
                                         "estimate" : "4.374510772763077",
                                         "standardError" : "0.6880094965630595",
                                         "tStatistic" : "6.358212778480349",
                                         "probability" : "1.285011021923133e-05"
                                        }
                                      ]
                                    }
                                  },
                                 "optimizationMethod" : "LevenbergMarquardt",
                                 "tolerance" : "0.0001",
                                 "useDefaultInitValues" : "0"
                                },
                               "name" : "X2 * (-0.0783) + 4.3745",
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
                                          "2.14285714"
                                        ]
                                      },
                                     "modelling" :
                                      {
                                       "d" :
                                        [
                                          "4.296180090253672",
                                          "4.061188042725458",
                                          "4.217849407744268",
                                          "3.826195995197245",
                                          "3.787030653942542",
                                          "3.661701561927495",
                                          "3.536372469912448",
                                          "3.4110433778974",
                                          "3.285714285882353",
                                          "3.160385193867306",
                                          "3.035056101852258",
                                          "2.909727009837211",
                                          "2.784397917822164",
                                          "2.659068825807117",
                                          "2.53373973379207",
                                          "2.408410641777022",
                                          "2.283081549761975"
                                        ]
                                      },
                                     "residuals" :
                                      {
                                       "d" :
                                        [
                                          "-1.296180090253672",
                                          "2.938811957274542",
                                          "-2.217849407744268",
                                          "2.173804004802755",
                                          "0.2129693460574575",
                                          "-2.661701561927495",
                                          "1.463627530087552",
                                          "0.01752805210259956",
                                          "4.117647112167333e-09",
                                          "-0.01752805386730616",
                                          "-0.03505610185225816",
                                          "-0.05258414983721105",
                                          "-0.07011220782216387",
                                          "-0.08764025580711676",
                                          "-0.1051683037920697",
                                          "-0.1226963517770217",
                                          "-0.1402244097619749"
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
                                          "1.57142857"
                                        ]
                                      },
                                     "factors" :
                                      {
                                       "its" :
                                        {
                                         "it" :
                                          [
                                            {
                                             "termToText" : "{MyInputVavable|A[t]}",
                                             "serie" :
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
                                                  "33.1"
                                                ]
                                              },
                                             "inversion" :
                                              {
                                               "type" : "None",
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
                                      "2010A1"
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
                     "identificationEndDate" : "2006-01-01",
                     "forecastStartDate" : "2006-01-02",
                     "forecastEndDate" : "2010-01-01",
                     "identificationStartDateParamID" : "",
                     "identificationEndDateParamID" : "",
                     "forecastStartDateParamID" : "",
                     "forecastEndDateParamID" : "",
                     "autoPeriod" : "0",
                     "identificationStartOffset" : "0",
                     "identificationEndOffset" : "0",
                     "forecastEndOffset" : "0",
                     "isIdentStartCorrect" : "1",
                     "isIdentEndCorrect" : "1",
                     "isForecastEndCorrect" : "1"
                    },
                   "isExclusive" : "1",
                   "useAutoPeriod" : "0",
                   "generatedName" : "MyOutputVavable|A[t] = MyInputVavable|A[t] * a + b",
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


public static MsCalculationChainEntry GetMsNonLinearRegr(MsId ms, ulong modelKey, ulong eqKey)
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
            execStatCoefficients = true,
            execIsCoefficientsSaved = true,
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
        TsNonLinearRegressionMethod nonLinR = formula.method.nonLinearRegression;
        Console.WriteLine("-- Коэффициенты --");
        Console.WriteLine("".PadRight(3) + printArray(nonLinR.coefficients));
        Console.WriteLine("".PadRight(3) + "- сохранены: " + nonLinR.isCoefficientsSaved);
        Console.WriteLine("-- Значения коэффициентов --");
        Console.WriteLine("".PadRight(3) + printArray(nonLinR.coefficientsData));
        // Получаем значения коэффициентов уравнения и выводим в окно консоли
        Console.WriteLine("-- Подробное описание коэффициентов --");
        StatConstCoefficientsArr cArr = nonLinR.statCoefficients;
        Console.WriteLine("".PadRight(3) + "- точность вычислений: " + cArr.precision);
        int i = 0;
        foreach (StatConstCoefficients n in cArr.its)
        {
            Console.WriteLine("".PadRight(3) + "Коэффициент '" + nonLinR.coefficients.GetValue(i) + "'");
            Console.WriteLine("".PadRight(6) + " - значение: " + n.estimate);
            Console.WriteLine("".PadRight(6) + " - стандартная ошибка: " + n.standardError);
            Console.WriteLine("".PadRight(6) + " - t-статистика: " + n.tStatistic);
            Console.WriteLine("".PadRight(6) + " - вероятность: " + n.probability);
            i++;
        }
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


[GetMs: Операция](../GetMs.htm) |
 Метод «[Нелинейная
 регрессия](lib.chm::/01_Regression_models/UiModelling_NonLinearRegr.htm)»


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
