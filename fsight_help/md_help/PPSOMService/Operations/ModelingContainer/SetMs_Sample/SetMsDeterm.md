# Настройка параметров метода «Детерминированное уравнение»

Настройка параметров метода «Детерминированное уравнение»
-


**


# Настройка параметров метода «Детерминированное уравнение»


Ниже приведен пример использования операции [SetMs](../SetMs.htm) для изменения параметров уравнения.
 В запросе передаются: экземпляр открытого контейнера моделирования, параметры
 выполнения операции, настройки уравнения для метода «Детерминированное
 уравнение» и шаблон получения измененных данных. В результате выполнения
 операция возвращает модель, содержащую измененное уравнение.


Для выполнения примера уравнение должно содержать входную и выходную
 переменные.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>PCHOEAAGHDNBFOAEDIPCJPLCLBKHODLELJPBHIDPMNHOLLLO!M!S!CKGHHOAAGHDNBFOAEPHOKOAECABEHOFHEIILLAJMKFLIHCFNI</id>  </tMs>
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
  <k>4</k>  <type>Model</type>[![](../../../minus.gif)](../../../#)<model>
[![](../../../minus.gif)](../../../#)<transform>
[![](../../../minus.gif)](../../../#)<formulas>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <kind>Deterministic</kind>[![](../../../minus.gif)](../../../#)<method>
[![](../../../minus.gif)](../../../#)<deterministic>
  <modifyType>Replace</modifyType>  <expression>10 -@_2:0[] * 3.14</expression>[![](../../../minus.gif)](../../../#)<operands>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>1</id>  <n>MyInputVavable</n>  <vis>true</vis>  <variableKey>2</variableKey>  <stubKey>89671</stubKey>[![](../../../minus.gif)](../../../#)<selections>
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
  </Item>
  </its>
  </operands>
[![](../../../minus.gif)](../../../#)<aggregateOperands>
  <its />
  </aggregateOperands>
  </deterministic>
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
  <calculationChain>Get</calculationChain>[![](../../../minus.gif)](../../../#)<calcChainPattern>
[![](../../../minus.gif)](../../../#)<modelPattern>
[![](../../../minus.gif)](../../../#)<transform>
  <formulaCount>true</formulaCount>[![](../../../minus.gif)](../../../#)<formulas>
  <method />
  </formulas>
[![](../../../minus.gif)](../../../#)<equationsFormula>
  <method />
  </equationsFormula>
  <kind>true</kind>  </transform>
  </modelPattern>
  </calcChainPattern>
[![](../../../minus.gif)](../../../#)<visualControllerPattern>
  <variableRubricatorKey>true</variableRubricatorKey>  <useSourceName>false</useSourceName>  <freeVariables>true</freeVariables>  <levelFormat>Short</levelFormat>  </visualControllerPattern>
  </metamodel>
  <scenarios>Get</scenarios>  <details>true</details>  <useSavedCoefficients>true</useSavedCoefficients>  </problem>
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
  <id>PCHOEAAGHDNBFOAEDIPCJPLCLBKHODLELJPBHIDPMNHOLLLO!M!S!CKGHHOAAGHDNBFOAEPHOKOAECABEHOFHEIILLAJMKFLIHCFNI</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**0**" isLink="**0**" fullUrl="**http://v-shp-development.dev.fs.fsight.world/**" ver="**4**" hf="**0**">
  <i>MODELSPACE</i>  <n>Контейнер моделирования</n>  <k>1581</k>  <c>5121</c>  <p>1580</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<period>
  <start>1970-01-01</start>  <end>2020-12-31</end>  </period>
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
  <k>1</k>  <n>MyInputVavable</n>  <vis>1</vis>  <type>Variable</type>  <excluded>0</excluded>  <graphMeta>{"Geometry":{"x":20,"y":10,"width":150,"height":50},"ChartOptions":{"chart":{"defaultSeriesType":"line","mixed":true,"backgroundColor":"rgba(0, 0, 0, 0.000000)"},"plotOptions":{"series":{"dataLabels":{"formatter":"%Autovalue","dataFormat":"#,##0.00"}}},"tooltip":{"formatter":"Значение: %Autovalue\nДата: %PointName","enabled":true,"backgroundType":"none","style":{"fontFamily":"Arial","fontSize":"12px","color":"#000000"}},"yAxis":[{"labels":{"enabled":true,"dataFormat":"#,##0.00"},"title":{"text":""}}],"xAxis":{"tickInterval":2,"labels":{},"title":{}},"series":[{"entryKey":1,"scenarioKey":4294967295,"serieType":"fact","showInLegend":true,"type":"line","color":"rgba(129, 129, 129, 1)","borderColor":"rgba(129, 129, 129, 1)","borderWidth":0,"lineColor":"rgba(129, 129, 129, 1)","zIndex":1,"legendIndex":0,"visible":true,"background":{"color":"rgba(129, 129, 129, 1)","type":"color"},"marker":{"enabled":false,"symbol":"circle","fillColor":"#FFFFFF","lineWidth":1.5,"lineColor":null},"dataLabels":{"formatter":"%Autovalue"},"trendLine":{}}]}}</graphMeta>[![](../../../minus.gif)](../../../#)<chainVariable>
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
  <k>4</k>  <id>OBJ4</id>  <n>MyOutputVavable|A[t] = MyInputVavable[t], (От родителя)-(От родителя)</n>  <vis>1</vis>  <type>Model</type>  <excluded>0</excluded>  <graphMeta />
[![](../../../minus.gif)](../../../#)<model>
[![](../../../minus.gif)](../../../#)<transform>
  <formulaCount>1</formulaCount>[![](../../../minus.gif)](../../../#)<formulas>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <kind>Deterministic</kind>[![](../../../minus.gif)](../../../#)<method>
[![](../../../minus.gif)](../../../#)<deterministic>
  <modifyType>Replace</modifyType>  <expression>10 - @_2:0[] * 3.14</expression>[![](../../../minus.gif)](../../../#)<result>
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
  <lag />
  <key>1</key>  <termToText>{MyInputVavable[t]}</termToText>  <termToInnerText>@_2:0[]</termToInnerText>[![](../../../minus.gif)](../../../#)<termInfo>
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
  <date>1899-12-30</date>  </termInfo>
[![](../../../minus.gif)](../../../#)<unitInfo>
  <unit>4294967295</unit>  <measure>4294967295</measure>  <baseUnit>4294967295</baseUnit>  <unitsDimensionKey>0</unitsDimensionKey>  </unitInfo>
  <included>1</included>  </Item>
  </its>
  </operands>
  </deterministic>
[![](../../../minus.gif)](../../../#)<inversionInfo>
  <type>None</type>  <lag>PrecidingValue</lag>  <previousLag>-1</previousLag>  <seasonality>None</seasonality>  <dependence>Linear</dependence>  <K>3</K>  </inversionInfo>
  <doUseR>0</doUseR>  <supportsR>0</supportsR>  </method>
  <calendarLevel>Year</calendarLevel>  <outputSliceKey>0</outputSliceKey>  </it>
  </its>
  </formulas>
  <kind>Simple</kind>  </transform>
  <warnings />
  <readOnly>0</readOnly>  </model>
  </Item>
  </its>
  </calculationChain>
[![](../../../minus.gif)](../../../#)<visualController>
  <variableRubricatorKey>89671</variableRubricatorKey>[![](../../../minus.gif)](../../../#)<freeVariables>
  <its />
  </freeVariables>
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
  </SetMsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetMs" :
  {
   "tMs" :
    {
     "id" : "PCHOEAAGHDNBFOAEDIPCJPLCLBKHODLELJPBHIDPMNHOLLLO!M!S!CKGHHOAAGHDNBFOAEPHOKOAECABEHOFHEIILLAJMKFLIHCFNI"
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
                   "k" : "4",
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
                               "kind" : "Deterministic",
                               "method" :
                                {
                                 "deterministic" :
                                  {
                                   "modifyType" : "Replace",
                                   "expression" : "10 -@_2:0[] * 3.14",
                                   "operands" :
                                    {
                                     "its" :
                                      {
                                       "Item" :
                                        {
                                         "slice" :
                                          {
                                           "k" : "0",
                                           "id" : "1",
                                           "n" : "MyInputVavable",
                                           "vis" : "true",
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
                                      }
                                    },
                                   "aggregateOperands" :
                                    {
                                     "its" : ""
                                    }
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
             "calcChainPattern" :
              {
               "modelPattern" :
                {
                 "transform" :
                  {
                   "formulaCount" : "true",
                   "formulas" :
                    {
                     "method" : ""
                    },
                   "equationsFormula" :
                    {
                     "method" : ""
                    },
                   "kind" : "true"
                  }
                }
              },
             "visualControllerPattern" :
              {
               "variableRubricatorKey" : "true",
               "useSourceName" : "false",
               "freeVariables" : "true",
               "levelFormat" : "Short"
              }
            },
           "scenarios" : "Get",
           "details" : "true",
           "useSavedCoefficients" : "true"
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
     "id" : "PCHOEAAGHDNBFOAEDIPCJPLCLBKHODLELJPBHIDPMNHOLLLO!M!S!CKGHHOAAGHDNBFOAEPHOKOAECABEHOFHEIILLAJMKFLIHCFNI"
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
     "period" :
      {
       "start" : "1970-01-01",
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
                   "graphMeta" : "{"Geometry":{"x":20,"y":10,"width":150,"height":50},"ChartOptions":{"chart":{"defaultSeriesType":"line","mixed":true,"backgroundColor":"rgba(0, 0, 0, 0.000000)"},"plotOptions":{"series":{"dataLabels":{"formatter":"%Autovalue","dataFormat":"#,##0.00"}}},"tooltip":{"formatter":"Значение: %Autovalue\nДата: %PointName","enabled":true,"backgroundType":"none","style":{"fontFamily":"Arial","fontSize":"12px","color":"#000000"}},"yAxis":[{"labels":{"enabled":true,"dataFormat":"#,##0.00"},"title":{"text":""}}],"xAxis":{"tickInterval":2,"labels":{},"title":{}},"series":[{"entryKey":1,"scenarioKey":4294967295,"serieType":"fact","showInLegend":true,"type":"line","color":"rgba(129, 129, 129, 1)","borderColor":"rgba(129, 129, 129, 1)","borderWidth":0,"lineColor":"rgba(129, 129, 129, 1)","zIndex":1,"legendIndex":0,"visible":true,"background":{"color":"rgba(129, 129, 129, 1)","type":"color"},"marker":{"enabled":false,"symbol":"circle","fillColor":"#FFFFFF","lineWidth":1.5,"lineColor":null},"dataLabels":{"formatter":"%Autovalue"},"trendLine":{}}]}}",
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
                   "k" : "4",
                   "id" : "OBJ4",
                   "n" : "MyOutputVavable|A[t] = MyInputVavable[t], (От родителя)-(От родителя)",
                   "vis" : "1",
                   "type" : "Model",
                   "excluded" : "0",
                   "graphMeta" : "",
                   "model" :
                    {
                     "transform" :
                      {
                       "formulaCount" : "1",
                       "formulas" :
                        {
                         "its" :
                          {
                           "it" :
                            [
                              {
                               "k" : "0",
                               "kind" : "Deterministic",
                               "method" :
                                {
                                 "deterministic" :
                                  {
                                   "modifyType" : "Replace",
                                   "expression" : "10 - @_2:0[] * 3.14",
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
                                        {
                                         "k" : "0",
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
                                         "lag" : "",
                                         "key" : "1",
                                         "termToText" : "{MyInputVavable[t]}",
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
                                         "unitInfo" :
                                          {
                                           "unit" : "4294967295",
                                           "measure" : "4294967295",
                                           "baseUnit" : "4294967295",
                                           "unitsDimensionKey" : "0"
                                          },
                                         "included" : "1"
                                        }
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
                                 "supportsR" : "0"
                                },
                               "calendarLevel" : "Year",
                               "outputSliceKey" : "0"
                              }
                            ]
                          }
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
           "visualController" :
            {
             "variableRubricatorKey" : "89671",
             "freeVariables" :
              {
               "its" : ""
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


public static MsItem SetMsDeterm(MsId ms, ulong modelKey, ulong eqKey, MsModel eq)
{   // Получаем входную переменную
    MsFormulaTransformVariable inp = eq.transform.inputs.its.GetValue(0) as MsFormulaTransformVariable;
    // Задаем параметры выполнения операции
    var setMsOp = new SetMs();
    setMsOp.tMs = ms;
    setMsOp.tArg = new SetMsArg()
    {  // Задаем шаблон изменения данных
        pattern = new MsMdPattern()
        {
            item = new MsItemPattern()
            {  // Указываем ключ модели
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
            {  // Указываем ключ модели
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
                                new MsCalculationChainEntry()
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
                                                        kind = TsFormulaKind.Deterministic,
                                                        method = new TsMethod()
                                                        {   // Задаём параметры расчёта метода
                                                            deterministic = new TsDeterministicMethod()
                                                            {   // Задаём элементы выражения
                                                                operands = new MsFormulaTerms()
                                                                {
                                                                    its = new MsFormulaTerm[]
                                                                    {
                                                                        new MsFormulaTerm()
                                                                            {slice = inp.slices.its.GetValue(0) as MsFormulaTransformSlice}
                                                                    }
                                                                },
                                                                // Задаём выражение для расчёта
                                                                expression = "10 -" + "@_"+inp.k + ":0[]" + " * 3.14",
                                                                // Задаём способ формирования выходного ряда
                                                                modifyType = TsMethodModifyType.Replace,
                                                                // Указываем, что не используем агрегацию
                                                                aggregateOperands = new MsCompositeFormulaTerms()
                                                                    {its = new MsCompositeFormulaTerm[]{}},
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
            }
        }, // Задаём шаблон извлечения измененных данных
        metaGet = new MsMdPattern()
        {
            scenarios = ListOperation.Get,
            period = true,
            item = new MsItemPattern()
            {
                key = modelKey,
                problem = new MsProblemPattern()
                {
                    details = true,
                    scenarios = ListOperation.Get,
                    useSavedCoefficients = true,
                    metamodel = new MsMetaModelPattern()
                    {
                        calculationChain = ListOperation.Get,
                        calcChainPattern = new MsCalculationChainPattern()
                        {
                            modelPattern = new MsModelPattern()
                            {
                                transform = new MsFormulaTransformPattern()
                                {
                                    kind = true,
                                    formulaCount = true,
                                    formulas = new TsFormulaPattern()
                                    {
                                        method = new TsMethodPattern() { }
                                    },
                                    equationsFormula = new TsFormulaPattern()
                                    {
                                        method = new TsMethodPattern() { }
                                    }
                                }
                            }
                        },
                        visualControllerPattern = new MsMetaModelVisualControllerPattern()
                        {
                            variableRubricatorKey = true,
                            levelFormat = MsLevelFormat.Short,
                            useSourceName = false,
                            freeVariables = true
                        }
                    }
                }
            }
        }
    }; // Создаем прокси-объект для выполнения операции
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
