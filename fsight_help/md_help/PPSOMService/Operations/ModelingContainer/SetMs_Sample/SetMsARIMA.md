# Настройка параметров метода «ARIMA»

Настройка параметров метода «ARIMA»
-


**


# Настройка параметров метода «ARIMA»


Ниже приведен пример использования операции [SetMs](../SetMs.htm) для изменения параметров уравнения.
 В запросе передаются: экземпляр открытого контейнера моделирования, параметры
 выполнения операции, настройки уравнения для метода «ARIMA»
 и шаблон получения измененных данных. В результате выполнения операция
 возвращает модель, содержащую измененное уравнение.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>ONDFKOICJHLBFOAEMAMOIGEBJKAFNFKELKAMBGOCBIMLMHNP!M!S!CBPKKEPICJHLBFOAEKGAEHCFEAMLKMLFELJEKHGMDDGIFELEG</id>  </tMs>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>[![](../../../minus.gif)](../../../#)<item>
  <key>89669</key>[![](../../../minus.gif)](../../../#)<problem>
[![](../../../minus.gif)](../../../#)<metamodel>
  <calculationChain>Change</calculationChain>  </metamodel>
  </problem>
  </item>
  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<item>
  <k>89669</k>  <type>Problem</type>[![](../../../minus.gif)](../../../#)<problemMd>
[![](../../../minus.gif)](../../../#)<metamodel>
[![](../../../minus.gif)](../../../#)<calculationChain>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>3</k>  <type>Model</type>[![](../../../minus.gif)](../../../#)<model>
[![](../../../minus.gif)](../../../#)<transform>
[![](../../../minus.gif)](../../../#)<formulas>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <kind>Arima</kind>[![](../../../minus.gif)](../../../#)<method>
[![](../../../minus.gif)](../../../#)<arima>
  <maxIteration>600</maxIteration>  <constantMode>ManualEstimate</constantMode>  <constantValue>5.7</constantValue>[![](../../../minus.gif)](../../../#)<missingData>
  <method>SpecifiedValue</method>  <specifiedValue>4.7</specifiedValue>  </missingData>
  <confidenceLevel>0.96</confidenceLevel>[![](../../../minus.gif)](../../../#)<ARMA>
[![](../../../minus.gif)](../../../#)<parseAR>
  <value>1-3</value>  <assignOrder>true</assignOrder>  </parseAR>
[![](../../../minus.gif)](../../../#)<parseMA>
  <value>1-3</value>  <assignOrder>true</assignOrder>  </parseMA>
[![](../../../minus.gif)](../../../#)<parseARSeas>
  <value>1,4</value>  <assignOrder>true</assignOrder>  </parseARSeas>
[![](../../../minus.gif)](../../../#)<parseMASeas>
  <value>1,3</value>  <assignOrder>true</assignOrder>  </parseMASeas>
[![](../../../minus.gif)](../../../#)<initAR>
  <d>0.0025</d>  </initAR>
[![](../../../minus.gif)](../../../#)<initMA>
  <d>0.0025</d>  </initMA>
  <initIntercept>3</initIntercept>  <estimationMethod>GaussNewton</estimationMethod>  <diff>2</diff>  <diffSeas>0</diffSeas>[![](../../../minus.gif)](../../../#)<initARSeas>
  <d>0.003</d>  </initARSeas>
[![](../../../minus.gif)](../../../#)<initMASeas>
  <d>0.0015</d>  </initMASeas>
  <periodSeas>4</periodSeas>  <useAnalyticDeriv>true</useAnalyticDeriv>  <useBackCast>false</useBackCast>  </ARMA>
  </arima>
  <name>ARIMA</name>[![](../../../minus.gif)](../../../#)<inversionInfo>
  <type>PCH</type>  <lag>PrecidingValue</lag>  <previousLag>2</previousLag>  </inversionInfo>
  </method>
  </it>
  </its>
  </formulas>
  </transform>
  </model>
  </Item>
  </its>
  </calculationChain>
  </metamodel>
  </problemMd>
  </item>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <scenarios>Get</scenarios>  <period>true</period>[![](../../../minus.gif)](../../../#)<item>
  <key>89669</key>[![](../../../minus.gif)](../../../#)<problem>
[![](../../../minus.gif)](../../../#)<metamodel>
  <calculationChain>Get</calculationChain>  <mmParams>Get</mmParams>  <tag>true</tag>[![](../../../minus.gif)](../../../#)<calcChainPattern>
[![](../../../minus.gif)](../../../#)<modelPattern>
[![](../../../minus.gif)](../../../#)<transform>
  <inputs>Get</inputs>  <outputs>Get</outputs>  <formulaCount>true</formulaCount>[![](../../../minus.gif)](../../../#)<formulas>
  <method />
  </formulas>
[![](../../../minus.gif)](../../../#)<equationsFormula>
  <method />
  </equationsFormula>
  <series>Get</series>  <kind>true</kind>[![](../../../minus.gif)](../../../#)<transformVariable>
  <slices>Get</slices>[![](../../../minus.gif)](../../../#)<transformSlice>
  <selection>Get</selection>  </transformSlice>
  </transformVariable>
  </transform>
  </modelPattern>
  </calcChainPattern>
[![](../../../minus.gif)](../../../#)<visualControllerPattern>
  <variableRubricatorKey>true</variableRubricatorKey>  <useSourceName>false</useSourceName>  <levelFormat>Short</levelFormat>  </visualControllerPattern>
  </metamodel>
  <scenarios>Get</scenarios>  <details>true</details>  <useSavedCoefficients>false</useSavedCoefficients>  </problem>
  </item>
  </metaGet>
  </tArg>
  </SetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>ONDFKOICJHLBFOAEMAMOIGEBJKAFNFKELKAMBGOCBIMLMHNP!M!S!CBPKKEPICJHLBFOAEKGAEHCFEAMLKMLFELJEKHGMDDGIFELEG</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**0**" isLink="**0**" fullUrl="**http://v-shp-development.dev.fs.fsight.world/**" ver="**3**" hf="**0**">
  <i>MODELSPACE</i>  <n>Контейнер моделирования</n>  <k>1581</k>  <c>5121</c>  <p>1580</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<period>
  <start>1990-01-01</start>  <end>2020-12-31</end>  </period>
[![](../../../minus.gif)](../../../#)<scenarios>
[![](../../../minus.gif)](../../../#)<nodes>
[![](../../../minus.gif)](../../../#)<it isFolder="**0**">
  <k>1628</k>  <id>OBJ1628</id>  <n>Базовый</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<scenDesc isShortcut="**0**" isLink="**0**" fullUrl="**http://v-shp-development.dev.fs.fsight.world/**" ver="**0**" hf="**0**">
  <i>OBJ1628</i>  <n>Базовый</n>  <k>1628</k>  <c>5124</c>  <p>1627</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </scenDesc>
  <internalKey>1629</internalKey>  </it>
[![](../../../minus.gif)](../../../#)<it isFolder="**0**">
  <k>5371</k>  <id>OBJ5371</id>  <n>Базовый (копия1)</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<scenDesc isShortcut="**0**" isLink="**0**" fullUrl="**http://v-shp-development.dev.fs.fsight.world/**" ver="**0**" hf="**0**">
  <i>OBJ5371</i>  <n>Базовый (копия1)</n>  <k>5371</k>  <c>5124</c>  <p>1627</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </scenDesc>
  <internalKey>5372</internalKey>  </it>
  </nodes>
  </scenarios>
[![](../../../minus.gif)](../../../#)<item>
  <k>89669</k>  <id>MODEL_NEW</id>  <n>MODEL_NEW</n>  <vis>1</vis>  <type>Problem</type>[![](../../../minus.gif)](../../../#)<problemMd>
[![](../../../minus.gif)](../../../#)<metamodel>
  <k>89670</k>[![](../../../minus.gif)](../../../#)<calculationChain>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>1</k>  <n>MyInputVavable</n>  <vis>1</vis>  <type>Variable</type>  <excluded>0</excluded>  <graphMeta>{"Geometry":{"x":20,"y":10,"width":150,"height":50}}</graphMeta>[![](../../../minus.gif)](../../../#)<chainVariable>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>MyInputVavable|A</id>  <n>MyInputVavable|A</n>  <vis>1</vis>  <variableKey>1</variableKey>  <stubKey>89671</stubKey>[![](../../../minus.gif)](../../../#)<selections>
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
  <fullName>MyInputVavable|A</fullName>  <originalName>MyInputVavable</originalName>  <originalShortName>MyInputVavable</originalShortName>  <useCustomName>0</useCustomName>  </chainVariable>
  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <k>2</k>  <n>MyOutputVavable</n>  <vis>1</vis>  <type>Variable</type>  <excluded>0</excluded>  <graphMeta>{"Geometry":{"x":30,"y":140,"width":150,"height":50}}</graphMeta>[![](../../../minus.gif)](../../../#)<chainVariable>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>MyOutputVavable|A</id>  <n>MyOutputVavable|A</n>  <vis>1</vis>  <variableKey>2</variableKey>  <stubKey>89671</stubKey>[![](../../../minus.gif)](../../../#)<selections>
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
  <fullName>MyOutputVavable|A</fullName>  <originalName>MyOutputVavable</originalName>  <originalShortName>MyOutputVavable</originalShortName>  <useCustomName>0</useCustomName>  </chainVariable>
  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <k>3</k>  <id>OBJ3</id>  <n>MyOutputVavable|A[t] = A0, (От родителя)-(От родителя)</n>  <vis>1</vis>  <type>Model</type>  <excluded>0</excluded>  <graphMeta />
[![](../../../minus.gif)](../../../#)<model>
[![](../../../minus.gif)](../../../#)<transform>
[![](../../../minus.gif)](../../../#)<inputs>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>2</k>  <id>VARIABLES_89670</id>  <n>Variables</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<slices>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
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
  <level>Year</level>  </Item>
  </its>
  </slices>
  <variableStubKey>89671</variableStubKey>  <parameterID />
  <kind>Stub</kind>  <attributeId />
  <attributeType>Series</attributeType>  </Item>
  </its>
  </inputs>
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
  <k>0</k>  <kind>Arima</kind>[![](../../../minus.gif)](../../../#)<method>
[![](../../../minus.gif)](../../../#)<arima>
  <maxIteration>600</maxIteration>  <constantMode>ManualEstimate</constantMode>  <constantValue>5.7</constantValue>[![](../../../minus.gif)](../../../#)<missingData>
  <specifiedVector />
  <method>SpecifiedValue</method>  <methodParameter>5</methodParameter>  <specifiedValue>4.7</specifiedValue>[![](../../../minus.gif)](../../../#)<specifiedTerm>
  <k>4294967295</k>  </specifiedTerm>
  </missingData>
  <confidenceLevel>0.96</confidenceLevel>[![](../../../minus.gif)](../../../#)<ARMA>
[![](../../../minus.gif)](../../../#)<orderAR>
  <l>1</l>  <l>2</l>  <l>3</l>  </orderAR>
[![](../../../minus.gif)](../../../#)<orderMA>
  <l>1</l>  <l>2</l>  <l>3</l>  </orderMA>
  <calcInitMode>Auto</calcInitMode>[![](../../../minus.gif)](../../../#)<initAR>
  <d>0.0025</d>  </initAR>
[![](../../../minus.gif)](../../../#)<initMA>
  <d>0.0025</d>  </initMA>
  <initIntercept>3</initIntercept>  <estimationMethod>GaussNewton</estimationMethod>  <tolerance>0.0001</tolerance>  <maxIteration>600</maxIteration>[![](../../../minus.gif)](../../../#)<coefficientsAR>
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
  <diff>2</diff>  <diffSeas>0</diffSeas>[![](../../../minus.gif)](../../../#)<orderARSeas>
  <l>1</l>  <l>4</l>  </orderARSeas>
[![](../../../minus.gif)](../../../#)<orderMASeas>
  <l>1</l>  <l>3</l>  </orderMASeas>
[![](../../../minus.gif)](../../../#)<initARSeas>
  <d>0.003</d>  </initARSeas>
[![](../../../minus.gif)](../../../#)<initMASeas>
  <d>0.0015</d>  </initMASeas>
  <periodSeas>4</periodSeas>[![](../../../minus.gif)](../../../#)<coefficientsARSeas>
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
  <useARMAasInstrums>1</useARMAasInstrums>  <useAnalyticDeriv>1</useAnalyticDeriv>  <useBackCast>0</useBackCast>  </ARMA>
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
  </arima>
[![](../../../minus.gif)](../../../#)<inversionInfo>
  <type>PCH</type>  <lag>PrecidingValue</lag>  <previousLag>2</previousLag>  <seasonality>None</seasonality>  <dependence>Linear</dependence>  <K>3</K>  </inversionInfo>
  <doUseR>0</doUseR>  <supportsR>1</supportsR>  </method>
  <calendarLevel>Year</calendarLevel>  <outputSliceKey>0</outputSliceKey>  </it>
  </its>
  </formulas>
[![](../../../minus.gif)](../../../#)<series>
  <its />
  </series>
  <kind>Simple</kind>  </transform>
  <warnings />
  <readOnly>0</readOnly>  </model>
  </Item>
  </its>
  </calculationChain>
[![](../../../minus.gif)](../../../#)<mmParams>
  <its />
  </mmParams>
[![](../../../minus.gif)](../../../#)<visualController>
  <variableRubricatorKey>89671</variableRubricatorKey>  <userRPath />
  <isRExist>0</isRExist>  </visualController>
[![](../../../minus.gif)](../../../#)<suppressEmptyFilter>
  <suppressEmpty>0</suppressEmpty>  <suppressEmptyArea>SerieBounds</suppressEmptyArea>  </suppressEmptyFilter>
  <readOnly>0</readOnly>  <variableTestUseR>0</variableTestUseR>  <calculateIdentOnFact>0</calculateIdentOnFact>  </metamodel>
[![](../../../minus.gif)](../../../#)<scenarios>
  <its />
  </scenarios>
[![](../../../minus.gif)](../../../#)<details>
[![](../../../minus.gif)](../../../#)<period>
  <identificationStartDate>1990-01-01</identificationStartDate>  <identificationEndDate>2018-04-24</identificationEndDate>  <forecastStartDate>2018-04-25</forecastStartDate>  <forecastEndDate>2020-01-01</forecastEndDate>  <identificationStartDateParamID />
  <identificationEndDateParamID />
  <forecastStartDateParamID />
  <forecastEndDateParamID />
  <autoPeriod>0</autoPeriod>  <identificationStartOffset>0</identificationStartOffset>  <identificationEndOffset>0</identificationEndOffset>  <forecastEndOffset>0</forecastEndOffset>  <isIdentStartCorrect>1</isIdentStartCorrect>  <isIdentEndCorrect>1</isIdentEndCorrect>  <isForecastEndCorrect>1</isForecastEndCorrect>  </period>
  <currentPoint>2018-04-25</currentPoint>  </details>
  <useScenarios>0</useScenarios>  <readOnly>0</readOnly>  </problemMd>
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
     "id" : "ONDFKOICJHLBFOAEMAMOIGEBJKAFNFKELKAMBGOCBIMLMHNP!M!S!CBPKKEPICJHLBFOAEKGAEHCFEAMLKMLFELJEKHGMDDGIFELEG"
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
             "calculationChain" : "Change"
            }
          }
        }
      },
     "meta" :
      {
       "item" :
        {
         "k" : "89669",
         "type" : "Problem",
         "problemMd" :
          {
           "metamodel" :
            {
             "calculationChain" :
              {
               "its" :
                {
                 "Item" :
                  {
                   "k" : "3",
                   "type" : "Model",
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
                                   "maxIteration" : "600",
                                   "constantMode" : "ManualEstimate",
                                   "constantValue" : "5.7",
                                   "missingData" :
                                    {
                                     "method" : "SpecifiedValue",
                                     "specifiedValue" : "4.7"
                                    },
                                   "confidenceLevel" : "0.96",
                                   "ARMA" :
                                    {
                                     "parseAR" :
                                      {
                                       "value" : "1-3",
                                       "assignOrder" : "true"
                                      },
                                     "parseMA" :
                                      {
                                       "value" : "1-3",
                                       "assignOrder" : "true"
                                      },
                                     "parseARSeas" :
                                      {
                                       "value" : "1,4",
                                       "assignOrder" : "true"
                                      },
                                     "parseMASeas" :
                                      {
                                       "value" : "1,3",
                                       "assignOrder" : "true"
                                      },
                                     "initAR" :
                                      {
                                       "d" : "0.0025"
                                      },
                                     "initMA" :
                                      {
                                       "d" : "0.0025"
                                      },
                                     "initIntercept" : "3",
                                     "estimationMethod" : "GaussNewton",
                                     "diff" : "2",
                                     "diffSeas" : "0",
                                     "initARSeas" :
                                      {
                                       "d" : "0.003"
                                      },
                                     "initMASeas" :
                                      {
                                       "d" : "0.0015"
                                      },
                                     "periodSeas" : "4",
                                     "useAnalyticDeriv" : "true",
                                     "useBackCast" : "false"
                                    }
                                  },
                                 "name" : "ARIMA",
                                 "inversionInfo" :
                                  {
                                   "type" : "PCH",
                                   "lag" : "PrecidingValue",
                                   "previousLag" : "2"
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
            }
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "scenarios" : "Get",
       "period" : "true",
       "item" :
        {
         "key" : "89669",
         "problem" :
          {
           "metamodel" :
            {
             "calculationChain" : "Get",
             "mmParams" : "Get",
             "tag" : "true",
             "calcChainPattern" :
              {
               "modelPattern" :
                {
                 "transform" :
                  {
                   "inputs" : "Get",
                   "outputs" : "Get",
                   "formulaCount" : "true",
                   "formulas" :
                    {
                     "method" : ""
                    },
                   "equationsFormula" :
                    {
                     "method" : ""
                    },
                   "series" : "Get",
                   "kind" : "true",
                   "transformVariable" :
                    {
                     "slices" : "Get",
                     "transformSlice" :
                      {
                       "selection" : "Get"
                      }
                    }
                  }
                }
              },
             "visualControllerPattern" :
              {
               "variableRubricatorKey" : "true",
               "useSourceName" : "false",
               "levelFormat" : "Short"
              }
            },
           "scenarios" : "Get",
           "details" : "true",
           "useSavedCoefficients" : "false"
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
     "id" : "ONDFKOICJHLBFOAEMAMOIGEBJKAFNFKELKAMBGOCBIMLMHNP!M!S!CBPKKEPICJHLBFOAEKGAEHCFEAMLKMLFELJEKHGMDDGIFELEG"
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
         "@ver" : "3",
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
     "period" :
      {
       "start" : "1990-01-01",
       "end" : "2020-12-31"
      },
     "scenarios" :
      {
       "nodes" :
        {
         "it" :
          [
            {
             "@isFolder" : "0",
             "k" : "1628",
             "id" : "OBJ1628",
             "n" : "Базовый",
             "vis" : "1",
             "scenDesc" :
              {
               "@fullUrl" : "http:\/\/v-shp-development.dev.fs.fsight.world\/",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "0",
               "@hf" : "0",
               "i" : "OBJ1628",
               "n" : "Базовый",
               "k" : "1628",
               "c" : "5124",
               "p" : "1627",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0"
              },
             "internalKey" : "1629"
            },
            {
             "@isFolder" : "0",
             "k" : "5371",
             "id" : "OBJ5371",
             "n" : "Базовый (копия1)",
             "vis" : "1",
             "scenDesc" :
              {
               "@fullUrl" : "http:\/\/v-shp-development.dev.fs.fsight.world\/",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "0",
               "@hf" : "0",
               "i" : "OBJ5371",
               "n" : "Базовый (копия1)",
               "k" : "5371",
               "c" : "5124",
               "p" : "1627",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0"
              },
             "internalKey" : "5372"
            }
          ]
        }
      },
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
                [
                  {
                   "k" : "1",
                   "n" : "MyInputVavable",
                   "vis" : "1",
                   "type" : "Variable",
                   "excluded" : "0",
                   "graphMeta" : "{"Geometry":{"x":20,"y":10,"width":150,"height":50}}",
                   "chainVariable" :
                    {
                     "slice" :
                      {
                       "k" : "0",
                       "id" : "MyInputVavable|A",
                       "n" : "MyInputVavable|A",
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
                     "fullName" : "MyInputVavable|A",
                     "originalName" : "MyInputVavable",
                     "originalShortName" : "MyInputVavable",
                     "useCustomName" : "0"
                    }
                  },
                  {
                   "k" : "2",
                   "n" : "MyOutputVavable",
                   "vis" : "1",
                   "type" : "Variable",
                   "excluded" : "0",
                   "graphMeta" : "{"Geometry":{"x":30,"y":140,"width":150,"height":50}}",
                   "chainVariable" :
                    {
                     "slice" :
                      {
                       "k" : "0",
                       "id" : "MyOutputVavable|A",
                       "n" : "MyOutputVavable|A",
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
                     "fullName" : "MyOutputVavable|A",
                     "originalName" : "MyOutputVavable",
                     "originalShortName" : "MyOutputVavable",
                     "useCustomName" : "0"
                    }
                  },
                  {
                   "k" : "3",
                   "id" : "OBJ3",
                   "n" : "MyOutputVavable|A[t] = A0, (От родителя)-(От родителя)",
                   "vis" : "1",
                   "type" : "Model",
                   "excluded" : "0",
                   "graphMeta" : "",
                   "model" :
                    {
                     "transform" :
                      {
                       "inputs" :
                        {
                         "its" :
                          {
                           "Item" :
                            {
                             "k" : "2",
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
                               "kind" : "Arima",
                               "method" :
                                {
                                 "arima" :
                                  {
                                   "maxIteration" : "600",
                                   "constantMode" : "ManualEstimate",
                                   "constantValue" : "5.7",
                                   "missingData" :
                                    {
                                     "specifiedVector" : "",
                                     "method" : "SpecifiedValue",
                                     "methodParameter" : "5",
                                     "specifiedValue" : "4.7",
                                     "specifiedTerm" :
                                      {
                                       "k" : "4294967295"
                                      }
                                    },
                                   "confidenceLevel" : "0.96",
                                   "ARMA" :
                                    {
                                     "orderAR" :
                                      {
                                       "l" :
                                        [
                                          "1",
                                          "2",
                                          "3"
                                        ]
                                      },
                                     "orderMA" :
                                      {
                                       "l" :
                                        [
                                          "1",
                                          "2",
                                          "3"
                                        ]
                                      },
                                     "calcInitMode" : "Auto",
                                     "initAR" :
                                      {
                                       "d" : "0.0025"
                                      },
                                     "initMA" :
                                      {
                                       "d" : "0.0025"
                                      },
                                     "initIntercept" : "3",
                                     "estimationMethod" : "GaussNewton",
                                     "tolerance" : "0.0001",
                                     "maxIteration" : "600",
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
                                     "diff" : "2",
                                     "diffSeas" : "0",
                                     "orderARSeas" :
                                      {
                                       "l" :
                                        [
                                          "1",
                                          "4"
                                        ]
                                      },
                                     "orderMASeas" :
                                      {
                                       "l" :
                                        [
                                          "1",
                                          "3"
                                        ]
                                      },
                                     "initARSeas" :
                                      {
                                       "d" : "0.003"
                                      },
                                     "initMASeas" :
                                      {
                                       "d" : "0.0015"
                                      },
                                     "periodSeas" : "4",
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
                                     "useBackCast" : "0"
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
                                    }
                                  },
                                 "inversionInfo" :
                                  {
                                   "type" : "PCH",
                                   "lag" : "PrecidingValue",
                                   "previousLag" : "2",
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
                       "series" :
                        {
                         "its" : ""
                        },
                       "kind" : "Simple"
                      },
                     "warnings" : "",
                     "readOnly" : "0"
                    }
                  }
                ]
              }
            },
           "mmParams" :
            {
             "its" : ""
            },
           "visualController" :
            {
             "variableRubricatorKey" : "89671",
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
         "scenarios" :
          {
           "its" : ""
          },
         "details" :
          {
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
             "autoPeriod" : "0",
             "identificationStartOffset" : "0",
             "identificationEndOffset" : "0",
             "forecastEndOffset" : "0",
             "isIdentStartCorrect" : "1",
             "isIdentEndCorrect" : "1",
             "isForecastEndCorrect" : "1"
            },
           "currentPoint" : "2018-04-25"
          },
         "useScenarios" : "0",
         "readOnly" : "0"
        }
      }
    }
  }
}


public static MsItem SetMsARIMA(MsId ms, ulong modelKey, ulong eqKey)
{
    var setMsOp = new SetMs();
    // Задаем параметры выполнения операции
    setMsOp.tMs = ms;
    setMsOp.tArg = new SetMsArg()
    {  // Задаем шаблон изменения данных
        pattern = new MsMdPattern()
        {
            item = new MsItemPattern()
            {  // Указываем ключ уравнения
                key = modelKey,
                problem = new MsProblemPattern()
                {
                    metamodel = new MsMetaModelPattern()
                    {
                        calculationChain = ListOperation.Change
                    }
                }
            }
        },
        // Задаем данные, которые необходимо изменить
        meta = new MsMd()
        {
            item = new MsItem()
            {  // Указываем ключ уравнения
                k = modelKey,
                type = MsItemType.Problem,
                problemMd = new MsProblem()
                {
                    metamodel = new MsMetaModel()
                    {
                        calculationChain = new MsCalculationChainEntries()
                        {
                            its = new MsCalculationChainEntry[]
                            {
                               new  MsCalculationChainEntry()
                               {
                                   k = eqKey,
                                   type = MsCalculationChainType.Model,
                                   model = new MsModel()
                                   {
                                        transform = new MsFormulaTransform()
                                        {
                                            formulas = new TsFormulas()
                                            {
                                                its = new TsFormula[]
                                                {
                                                    new TsFormula()
                                                    {
                                                        kind = TsFormulaKind.Arima,
                                                        method = new TsMethod()
                                                        {   // Задаем параметры метода «ARIMA»
                                                            arima = new TsArimaMethod()
                                                            {  // Задаем значимость доверительных границ
                                                                confidenceLevel = 0.96,
                                                                // Задаем константу
                                                                constantMode = StatInterceptMode.ManualEstimate,
                                                                constantValue = 5.7,
                                                                // Задаем максимальное число итераций
                                                                maxIteration = 600,
                                                                // Задаем метод обработки пропусков
                                                                missingData = new StatMissingData()
                                                                {
                                                                    method = StatMissingDataMethod.SpecifiedValue,
                                                                    specifiedValue = 4.7
                                                                },
                                                                // Задаем параметры авторегрессии и скользящего среднего
                                                                ARMA = new SlARMA()
                                                                {  // Задаем порядок авторегрессии
                                                                    parseAR = new SlParseStr()
                                                                    {
                                                                        value = "1-3",
                                                                        assignOrder = true,
                                                                    }, // Задаем порядок сезонной авторегрессии
                                                                    parseARSeas = new SlParseStr()
                                                                    {
                                                                        value = "1,4",
                                                                        assignOrder = true
                                                                    }, // Задаем порядок скользящего среднего
                                                                    parseMA = new SlParseStr()
                                                                    {
                                                                        value = "1-3",
                                                                        assignOrder = true,
                                                                    }, // Задаем порядок сезонного скользящего среднего
                                                                    parseMASeas = new SlParseStr()
                                                                    {
                                                                        value = "1,3",
                                                                        assignOrder = true
                                                                    },
                                                                    // Задаем разность и сезонную разность
                                                                    diff = 2,
                                                                    diffSeas = 0,
                                                                    // Задаем значение периода сезонности
                                                                    periodSeas = 4,
                                                                    // Задаем начальные приближения и прочие параметры
                                                                    initAR = new double[] {0.0025},
                                                                    initARSeas = new double[] {0.0030},
                                                                    initMA= new double[] {0.0025},
                                                                    initMASeas = new double[] {0.0015},
                                                                    initIntercept = 3,
                                                                    // Задаем параметры оценки коэффициентов
                                                                    useBackCast = false,
                                                                    useAnalyticDeriv = true,
                                                                    estimationMethod = ARMAEstimationMethodType.GaussNewton
                                                                }
                                                            }, // Задаем преобразование моделируемой переменной
                                                            inversionInfo = new TsInversion()
                                                            {
                                                                type = TsInversionType.PCH,
                                                                previousLag = 2,
                                                                lag = TsInversionLag.PrecidingValue
                                                            },
                                                            name = "ARIMA"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, // Задаем шаблон извлечения измененных данных
        metaGet = new MsMdPattern()
        {
            period = true,
            scenarios = ListOperation.Get,
            item = new MsItemPattern()
            {
                key = modelKey,
                problem = new MsProblemPattern()
                {
                    useSavedCoefficients = false,
                    scenarios = ListOperation.Get,
                    details = true,
                    metamodel = new MsMetaModelPattern()
                    {
                        calculationChain = ListOperation.Get,
                        tag = true,
                        mmParams = ListOperation.Get,
                        calcChainPattern = new MsCalculationChainPattern()
                        {
                            modelPattern = new MsModelPattern()
                            {
                                transform = new MsFormulaTransformPattern()
                                {
                                    inputs = ListOperation.Get,
                                    outputs = ListOperation.Get,
                                    kind = true,
                                    formulaCount = true,
                                    formulas = new TsFormulaPattern()
                                    {
                                        method = new TsMethodPattern() { }
                                    },
                                    equationsFormula = new TsFormulaPattern()
                                    {
                                        method = new TsMethodPattern() { }
                                    },
                                    series = ListOperation.Get,
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
                        },
                        visualControllerPattern = new MsMetaModelVisualControllerPattern()
                        {
                            variableRubricatorKey = true,
                            levelFormat = MsLevelFormat.Short,
                            useSourceName = false
                        }
                    }
                }
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Задаем параметры выполнения операции
    var result = somClient.SetMs(setMsOp);
    return result.meta.item;
}


См. также:


[SetMs: Операция](../SetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
