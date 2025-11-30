# Расчёт метода «Фильтр Ходрика-Прескотта»

Расчёт метода «Фильтр Ходрика-Прескотта»
-


**


# Расчёт метода «Фильтр Ходрика-Прескотта»


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для расчёта уравнения. В запросе передаются: экземпляр открытого контейнера
 моделирования, шаблон расчёта уравнения и параметры выполнения операции.
 В ответе приходит экземпляр модели, содержащей уравнение с результатами
 расчёта.


Для выполнения примера уравнение должно рассчитываться методом «Фильтр Ходрика-Прескотта».


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
  <id>PELGIOLKGDNBFOAEMPCPNCBIABJENAHENIJLOHGDPPOCJNCA!M!S!CBHOPGCMKGDNBFOAECKKFBPJGBCNNGAHENIINDPGAMOCGIBAG</id>  </tMs>
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
  <execMethod>true</execMethod>  <execEvaluateSeries>true</execEvaluateSeries>  </execParams>
  </tArg>
  </GetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>PELGIOLKGDNBFOAEMPCPNCBIABJENAHENIJLOHGDPPOCJNCA!M!S!CBHOPGCMKGDNBFOAECKKFBPJGBCNNGAHENIINDPGAMOCGIBAG</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<item>
  <k>89669</k>  <id>MODEL_NEW</id>  <n>MODEL_NEW</n>  <vis>1</vis>  <type>Problem</type>[![](../../../minus.gif)](../../../#)<problemMd>
[![](../../../minus.gif)](../../../#)<metamodel>
  <k>89670</k>[![](../../../minus.gif)](../../../#)<calculationChain>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>4</k>  <id>OBJ4</id>  <n>MyOutputVavable|A[t] = HPFilter(MyInputVavable[t], Лямбда = 100.000), (От родителя)-(От родителя)</n>  <vis>1</vis>  <type>Model</type>  <excluded>0</excluded>  <graphMeta />
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
  <k>0</k>  <kind>HodrickPrescottFilter</kind>[![](../../../minus.gif)](../../../#)<method>
[![](../../../minus.gif)](../../../#)<hodrickPrescottFilter>
[![](../../../minus.gif)](../../../#)<missingData>
  <specifiedVector />
  <method>None</method>  <methodParameter>5</methodParameter>  <specifiedValue>0</specifiedValue>[![](../../../minus.gif)](../../../#)<specifiedTerm>
  <k>4294967295</k>  </specifiedTerm>
  </missingData>
  <smoothingParameter>100</smoothingParameter>  <smoothingParameterMode>EditDirectly</smoothingParameterMode>  <power>2</power>  <smSmoothingParameter>100</smSmoothingParameter>[![](../../../minus.gif)](../../../#)<explained>
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
  </hodrickPrescottFilter>
  <name>HPFilter(X, Лямбда = 100.000)</name>[![](../../../minus.gif)](../../../#)<series>
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
  </series>
[![](../../../minus.gif)](../../../#)<evaluateSeries>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <scenarioKey>4294967295</scenarioKey>[![](../../../minus.gif)](../../../#)<fact>
  <d>1</d>  <d>4</d>  <d>2</d>  <d>7</d>  <d>7.5</d>  <d>9.1</d>  <d>10.7</d>  <d>12.3</d>  <d>13.9</d>  <d>15.5</d>  <d>17.1</d>  <d>18.7</d>  <d>20.3</d>  <d>21.9</d>  <d>23.5</d>  <d>25.1</d>  <d>26.7</d>  <d>28.3</d>  <d>29.9</d>  <d>31.5</d>  <d>33.1</d>  <d>34.7</d>  <d>36.3</d>  <d>37.9</d>  <d>39.5</d>  <d>41.1</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </fact>
[![](../../../minus.gif)](../../../#)<modelling>
  <d>1.110301648779354</d>  <d>2.702470023930953</d>  <d>4.293535382594759</d>  <d>5.895370008043668</d>  <d>7.496910829724635</d>  <d>9.098141077004177</d>  <d>10.69907487095158</d>  <d>12.29974492186606</d>  <d>13.90019319133736</d>  <d>15.50046419173652</d>  <d>17.10060050352123</d>  <d>18.70064006523181</d>  <d>20.30061481037338</d>  <d>21.90055027179873</d>  <d>23.50046583425696</d>  <d>25.10037537977917</d>  <d>26.70028813205387</d>  <d>28.30020956097182</d>  <d>29.90014225510319</d>  <d>31.50008670740845</d>  <d>33.10004198829701</d>  <d>34.7000063011042</d>  <d>36.29997742928238</d>  <d>37.89995309327283</d>  <d>39.49993123922401</d>  <d>41.09991028235167</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </modelling>
[![](../../../minus.gif)](../../../#)<residuals>
  <d>-0.1103016487793536</d>  <d>1.297529976069047</d>  <d>-2.293535382594759</d>  <d>1.104629991956332</d>  <d>0.003089170275365483</d>  <d>0.001858922995822354</d>  <d>0.0009251290484222352</d>  <d>0.0002550781339358821</d>  <d>-0.000193191337361398</d>  <d>-0.0004641917365209025</d>  <d>-0.0006005035212304222</d>  <d>-0.0006400652318099276</d>  <d>-0.0006148103733742971</d>  <d>-0.0005502717987297956</d>  <d>-0.0004658342569570095</d>  <d>-0.0003753797791645752</d>  <d>-0.00028813205387479</d>  <d>-0.0002095609718217872</d>  <d>-0.0001422551031957653</d>  <d>-8.670740845317937e-05</d>  <d>-4.198829700641227e-05</d>  <d>-6.301104193084939e-06</d>  <d>2.257071761846419e-05</d>  <d>4.690672717089228e-05</d>  <d>6.876077598860775e-05</d>  <d>8.971764832921281e-05</d>  <d>NaN</d>  <d>NaN</d>  <d>NaN</d>  </residuals>
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
  <isExclusive>1</isExclusive>  <useAutoPeriod>1</useAutoPeriod>  <generatedName>MyOutputVavable|A[t] = HPFilter(MyInputVavable[t], Лямбда = 100.000)</generatedName>  <warnings />
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
     "id" : "PELGIOLKGDNBFOAEMPCPNCBIABJENAHENIJLOHGDPPOCJNCA!M!S!CBHOPGCMKGDNBFOAECKKFBPJGBCNNGAHENIINDPGAMOCGIBAG"
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
       "execEvaluateSeries" : "true"
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
     "id" : "PELGIOLKGDNBFOAEMPCPNCBIABJENAHENIJLOHGDPPOCJNCA!M!S!CBHOPGCMKGDNBFOAECKKFBPJGBCNNGAHENIINDPGAMOCGIBAG"
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
                 "n" : "MyOutputVavable|A[t] = HPFilter(MyInputVavable[t], Лямбда = 100.000), (От родителя)-(От родителя)",
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
                             "kind" : "HodrickPrescottFilter",
                             "method" :
                              {
                               "hodrickPrescottFilter" :
                                {
                                 "missingData" :
                                  {
                                   "specifiedVector" : "",
                                   "method" : "None",
                                   "methodParameter" : "5",
                                   "specifiedValue" : "0",
                                   "specifiedTerm" :
                                    {
                                     "k" : "4294967295"
                                    }
                                  },
                                 "smoothingParameter" : "100",
                                 "smoothingParameterMode" : "EditDirectly",
                                 "power" : "2",
                                 "smSmoothingParameter" : "100",
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
                               "name" : "HPFilter(X, Лямбда = 100.000)",
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
                                          "1.110301648779354",
                                          "2.702470023930953",
                                          "4.293535382594759",
                                          "5.895370008043668",
                                          "7.496910829724635",
                                          "9.098141077004177",
                                          "10.69907487095158",
                                          "12.29974492186606",
                                          "13.90019319133736",
                                          "15.50046419173652",
                                          "17.10060050352123",
                                          "18.70064006523181",
                                          "20.30061481037338",
                                          "21.90055027179873",
                                          "23.50046583425696",
                                          "25.10037537977917",
                                          "26.70028813205387",
                                          "28.30020956097182",
                                          "29.90014225510319",
                                          "31.50008670740845",
                                          "33.10004198829701",
                                          "34.7000063011042",
                                          "36.29997742928238",
                                          "37.89995309327283",
                                          "39.49993123922401",
                                          "41.09991028235167",
                                          "NaN",
                                          "NaN",
                                          "NaN"
                                        ]
                                      },
                                     "residuals" :
                                      {
                                       "d" :
                                        [
                                          "-0.1103016487793536",
                                          "1.297529976069047",
                                          "-2.293535382594759",
                                          "1.104629991956332",
                                          "0.003089170275365483",
                                          "0.001858922995822354",
                                          "0.0009251290484222352",
                                          "0.0002550781339358821",
                                          "-0.000193191337361398",
                                          "-0.0004641917365209025",
                                          "-0.0006005035212304222",
                                          "-0.0006400652318099276",
                                          "-0.0006148103733742971",
                                          "-0.0005502717987297956",
                                          "-0.0004658342569570095",
                                          "-0.0003753797791645752",
                                          "-0.00028813205387479",
                                          "-0.0002095609718217872",
                                          "-0.0001422551031957653",
                                          "-8.670740845317937e-05",
                                          "-4.198829700641227e-05",
                                          "-6.301104193084939e-06",
                                          "2.257071761846419e-05",
                                          "4.690672717089228e-05",
                                          "6.876077598860775e-05",
                                          "8.971764832921281e-05",
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
                   "generatedName" : "MyOutputVavable|A[t] = HPFilter(MyInputVavable[t], Лямбда = 100.000)",
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


public static MsCalculationChainEntry GetMsHpf(MsId ms, ulong modelKey, ulong eqKey)
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
        }, // Задаем параметры расчёта уравнения
        execParams = new MsMdExecParams()
        {
            k = 0,
            execMethod = true,
            execEvaluateSeries = true,
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
    if (eq.warnings != null)
    {
        Console.WriteLine("-- Предупреждения --");
        Console.WriteLine("".PadRight(3) + printArray(eq.warnings));
    }
    if (eq.error == null) //Проверяем, возникли ли ошибки при расчёте уравнения
    {   // Уравнение рассчитано без ошибок
        // Получаем результаты расчёта
        TsFormula formula = eq.transform.formulas.its.GetValue(0) as TsFormula;
        TsHodrickPrescottFilterMethod hpf = formula.method.hodrickPrescottFilter;
        // Получаем значение параметра сглаживания и выводим в окно консоли
        Console.WriteLine("-- Параметр сглаживания --");
        Console.WriteLine(hpf.smSmoothingParameter);
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
 [Фильтр
 Ходрика-Прескотта](Lib.chm::/02_Time_series_analysis/UiModelling_HodrickPrescottFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
