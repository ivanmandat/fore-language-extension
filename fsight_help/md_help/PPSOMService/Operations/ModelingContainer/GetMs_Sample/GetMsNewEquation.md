# Создание уравнения

Создание уравнения
-


**


# Создание уравнения


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для создания уравнения. В запросе передаются: экземпляр открытого контейнера
 моделирования, шаблон создания уравнения и параметры выполнения операции.
 В ответе приходит экземпляр модели, содержащей уравнение.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>LOFBIHDIFHLBFOAEHGBJDCBENJMKNIBEBKHPFEBMNLDGJINB!M!S!CKOEKCIDIFHLBFOAEJICHGBIIPBAMMPBEAKJNEIIALPAOJIOD</id>  </tMs>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <scenarios>Get</scenarios>  <period>true</period>[![](../../../minus.gif)](../../../#)<item>
  <key>89669</key>[![](../../../minus.gif)](../../../#)<problem>
[![](../../../minus.gif)](../../../#)<metamodel>
  <calculationChain>Get</calculationChain>  <mmParams>Get</mmParams>  <tag>true</tag>[![](../../../minus.gif)](../../../#)<calcChainPattern>
[![](../../../minus.gif)](../../../#)<modelPattern>
[![](../../../minus.gif)](../../../#)<transform>
  <inputs>Get</inputs>  <outputs>Get</outputs>  <formulaCount>true</formulaCount>[![](../../../minus.gif)](../../../#)<formulas>
  <method />
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
  </calcChainPattern>
[![](../../../minus.gif)](../../../#)<visualControllerPattern>
  <variableRubricatorKey>true</variableRubricatorKey>  <useSourceName>true</useSourceName>  <levelFormat>Short</levelFormat>  </visualControllerPattern>
  </metamodel>
  <scenarios>Get</scenarios>  <details>true</details>  <useSavedCoefficients>true</useSavedCoefficients>  </problem>
  </item>
  </pattern>
[![](../../../minus.gif)](../../../#)<execParams>
[![](../../../minus.gif)](../../../#)<execCreateSimpleModel>
  <outputEntryKey>2</outputEntryKey>[![](../../../minus.gif)](../../../#)<inputEntryKeys>
  <l>1</l>  </inputEntryKeys>
  <kind>LinearRegression</kind>  <doUseR>false</doUseR>  </execCreateSimpleModel>
  </execParams>
  </tArg>
  </GetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>LOFBIHDIFHLBFOAEHGBJDCBENJMKNIBEBKHPFEBMNLDGJINB!M!S!CKOEKCIDIFHLBFOAEJICHGBIIPBAMMPBEAKJNEIIALPAOJIOD</id>  </id>
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
  <k>3</k>  <id>OBJ3</id>  <n>Модель</n>  <vis>1</vis>  <type>Model</type>  <excluded>0</excluded>  <graphMeta />
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
  <k>0</k>  <kind>LinearRegression</kind>[![](../../../minus.gif)](../../../#)<method>
[![](../../../minus.gif)](../../../#)<linearRegression>
  <constantMode>AutoEstimate</constantMode>  <constantValue>0</constantValue>  <confidenceLevel>0.95</confidenceLevel>[![](../../../minus.gif)](../../../#)<ARMA>
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
[![](../../../minus.gif)](../../../#)<missingData>
  <specifiedVector />
  <method>Casewise</method>  <methodParameter>5</methodParameter>  <specifiedValue>0</specifiedValue>[![](../../../minus.gif)](../../../#)<specifiedTerm>
  <k>4294967295</k>  </specifiedTerm>
  </missingData>
  </linearRegression>
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
  <isExclusive>1</isExclusive>  <useAutoPeriod>1</useAutoPeriod>  <generatedName>MyOutputVavable|A[t] = A0 + A1*MyInputVavable|A[t]</generatedName>  <warnings />
  <readOnly>0</readOnly>  </model>
  </Item>
  </its>
  </calculationChain>
[![](../../../minus.gif)](../../../#)<mmParams>
  <its />
  </mmParams>
[![](../../../minus.gif)](../../../#)<visualController>
  <variableRubricatorKey>89671</variableRubricatorKey>[![](../../../minus.gif)](../../../#)<createSimpleModelResult>
  <modelKey>3</modelKey>  </createSimpleModelResult>
  <userRPath />
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
  <useSavedCoefficients>0</useSavedCoefficients>  <useScenarios>0</useScenarios>  <readOnly>0</readOnly>  </problemMd>
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
     "id" : "LOFBIHDIFHLBFOAEHGBJDCBENJMKNIBEBKHPFEBMNLDGJINB!M!S!CKOEKCIDIFHLBFOAEJICHGBIIPBAMMPBEAKJNEIIALPAOJIOD"
    },
   "tArg" :
    {
     "pattern" :
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
                }
              },
             "visualControllerPattern" :
              {
               "variableRubricatorKey" : "true",
               "useSourceName" : "true",
               "levelFormat" : "Short"
              }
            },
           "scenarios" : "Get",
           "details" : "true",
           "useSavedCoefficients" : "true"
          }
        }
      },
     "execParams" :
      {
       "execCreateSimpleModel" :
        {
         "outputEntryKey" : "2",
         "inputEntryKeys" :
          {
           "l" : "1"
          },
         "kind" : "LinearRegression",
         "doUseR" : "false"
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
     "id" : "LOFBIHDIFHLBFOAEHGBJDCBENJMKNIBEBKHPFEBMNLDGJINB!M!S!CKOEKCIDIFHLBFOAEJICHGBIIPBAMMPBEAKJNEIIALPAOJIOD"
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
                   "n" : "Модель",
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
                               "kind" : "LinearRegression",
                               "method" :
                                {
                                 "linearRegression" :
                                  {
                                   "constantMode" : "AutoEstimate",
                                   "constantValue" : "0",
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
                     "generatedName" : "MyOutputVavable|A[t] = A0 + A1*MyInputVavable|A[t]",
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
             "createSimpleModelResult" :
              {
               "modelKey" : "3"
              },
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
         "useSavedCoefficients" : "0",
         "useScenarios" : "0",
         "readOnly" : "0"
        }
      }
    }
  }
}


public static MsProblem GetMsNewEquation(MsId ms, uint modelKey, MsFormulaTransformSlice inpVar, MsFormulaTransformSlice outVar)
{
    var getMsOp = new GetMs();
    // Задаём параметры выполнения операции
    getMsOp.tMs = ms;
    getMsOp.tArg = new GetMsArg()
    {// Задаём параметры создания уравнения
        execParams = new MsMdExecParams()
        {
            execCreateSimpleModel = new MsMdExecCreateSimpleModel()
            {
                doUseR = false,
                kind = TsFormulaKind.LinearRegression,
                inputEntryKeys = new long[]
                {
                    (long)inpVar.k
                    //1

                },
                outputEntryKey = outVar.k
                //outputEntryKey = 2
            }
        },
        pattern = new MsMdPattern()
        {
            scenarios = ListOperation.Get,
            period = true,
            item = new MsItemPattern()
            {   // Задаём ключ модели, содержащей уравнение
                key = modelKey,
                // Задаём шаблон извлечения данных модели
                problem = new MsProblemPattern()
                {
                    details = true,
                    scenarios = ListOperation.Get,
                    useSavedCoefficients = true,
                    // Задаём шаблон извлечения данных метамодели
                    metamodel = new MsMetaModelPattern()
                    {
                        calculationChain = ListOperation.Get,
                        mmParams = ListOperation.Get,
                        tag = true,
                        // Задаём шаблон извлечения данных цепочки расчёта
                        calcChainPattern = new MsCalculationChainPattern()
                        {
                            modelPattern = new MsModelPattern()
                            {  // Задаём шаблон извлечения данных метода расчёта модели
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
                                    displayId = true,
                                    equationsFormula = new TsFormulaPattern()
                                    {
                                        method = new TsMethodPattern()
                                    },
                                    series = ListOperation.Get,
                                    displaySettings = true,
                                    additionalAttributes = true,
                                    calculationType = true,
                                    calculationDirection = true,
                                    // Задаём шаблон извлечения данных переменных модели
                                    transformVariable = new MsFormulaTransformVariablePattern()
                                    {
                                        slices = ListOperation.Get,
                                        transformSlice = new MsFormulaTransformSlicePattern()
                                        {
                                            selection = ListOperation.Get
                                        }
                                    }
                                },
                                stochastic = true,
                                calculationPeriod = true,
                                useModelPeriod = true,
                                useExistingData = true,
                                treatNullsAsZeros = true,
                                autoName = true,
                                period = true,
                                isExclusive = true,
                                useAutoPeriod = true,
                                generatedName = true
                            }
                        },
                        // Задаём шаблон извлечения данных для визуального построения метамодели
                        visualControllerPattern = new MsMetaModelVisualControllerPattern()
                        {
                            variableRubricatorKey = true,
                            levelFormat = MsLevelFormat.Short,
                            useSourceName = true
                        }
                    }
                }
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    var result = somClient.GetMs(getMsOp);
    var problem = result.meta.item.problemMd;
    var mc = problem.metamodel.visualController;
    Console.WriteLine("Ключ уравнения: " + mc.createSimpleModelResult.modelKey);
    return problem;
}


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
