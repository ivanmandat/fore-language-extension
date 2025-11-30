# Создание вычисляемого ряда

Создание вычисляемого ряда
-


**


# Создание вычисляемого ряда


Ниже приведен пример использования операции [SetWbkMd](../SetWbkMd.htm) для создания вычисляемого
 ряда. В запросе передаются: моникёр открытой рабочей книги, параметры
 вычисления значений ряда с помощью лага, шаблоны изменения и получения
 изменённых данных. в ответе приходит описание всех рядов в рабочей книге.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetWbkMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWbk xmlns="****">
  <id>S1!M!S!W10</id>  </tWbk>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <refresh />
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  <series>Add</series>  <seriesDisplayParams>true</seriesDisplayParams>  <period>true</period>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<series>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <kind>Calculate</kind>  <hint>Вычисляемый ряд</hint>[![](../../../minus.gif)](../../../#)<atts>
  <its />
  </atts>
[![](../../../minus.gif)](../../../#)<calc>
[![](../../../minus.gif)](../../../#)<formula>
  <k>0</k>  <kind>Deterministic</kind>[![](../../../minus.gif)](../../../#)<exprs>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <innerText>@2@</innerText>[![](../../../minus.gif)](../../../#)<terms>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>[![](../../../minus.gif)](../../../#)<source>
  <kind>VarSource</kind>[![](../../../minus.gif)](../../../#)<varSource>
  <kind>LanerSerie</kind>[![](../../../minus.gif)](../../../#)<serie>
  <k>2</k>  </serie>
  </varSource>
  </source>
  <lag>-1</lag>[![](../../../minus.gif)](../../../#)<inversion>
  <type>None</type>  </inversion>
  </it>
  </its>
  </terms>
  </it>
  </its>
  </exprs>
  </formula>
[![](../../../minus.gif)](../../../#)<formulaPeriod>
  <startDate>2000-01-01</startDate>  <endDate>2015-12-31</endDate>  <startOffset>0</startOffset>  <endOffset>0</endOffset>  <identificationEndOffset>0</identificationEndOffset>[![](../../../minus.gif)](../../../#)<periodSet>
  <it>StartDate</it>  <it>EndDate</it>  </periodSet>
[![](../../../minus.gif)](../../../#)<autoPeriod>
  <it>IdentStartByFact</it>  <it>ForecastEndByFact</it>  </autoPeriod>
  </formulaPeriod>
  <displayDataAs>CalculatedValues</displayDataAs>  <hasDiscrepancies>false</hasDiscrepancies>  <createDerivedSeries>true</createDerivedSeries>  </calc>
  <calculate>true</calculate>[![](../../../minus.gif)](../../../#)<moveAfter>
  <k>-1</k>  </moveAfter>
  <tag>Выполнили сдвиг значений на одну точку вперед</tag>  <index>1</index>  <expanded>true</expanded>  <level>Year</level>  <flags>20</flags>  </it>
  </its>
  <displayDataAs>CalculatedValues</displayDataAs>  <autoRecalc>true</autoRecalc>  </series>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <title>false</title>  <useGridAutoAdjust>true</useGridAutoAdjust>  <series>Get</series>  <seriesDependencies>true</seriesDependencies>  <seriesDependents>true</seriesDependents>  <seriesAtts>false</seriesAtts>  <seriesPrimaryAttsForEmpty>false</seriesPrimaryAttsForEmpty>  <seriesDisplayParams>true</seriesDisplayParams>  <seriesCalc>true</seriesCalc>  </metaGet>
  </tArg>
  </SetWbkMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetWbkMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <refresh xmlns="****" />
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!W10</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>WBK_NEW_SERIE</i>  <n>Годовые данные (вычисления)</n>  <k>5738</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**6**">
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>76</k>  <id>OBJ76</id>  <n>USA|A[t-1]</n>  <vis>1</vis>  <kind>Calculate</kind>[![](../../../minus.gif)](../../../#)<calc>
  <rubKey>5472</rubKey>  <rubShortcutKey>5472</rubShortcutKey>  <revKey>-1</revKey>[![](../../../minus.gif)](../../../#)<fact>
  <k>-1</k>  <id>OBJ76</id>  <n>USA|A[t-1]</n>  <vis>1</vis>  </fact>
[![](../../../minus.gif)](../../../#)<formula>
  <k>-1</k>  <kind>Deterministic</kind>[![](../../../minus.gif)](../../../#)<method>
[![](../../../minus.gif)](../../../#)<deterministic>
  <modifyType>Replace</modifyType>  <expression>@_1:0[-1]</expression>[![](../../../minus.gif)](../../../#)<operands>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>0</k>[![](../../../minus.gif)](../../../#)<slice>
  <k>0</k>  <id>OBJ2</id>  <n>USA|A</n>  <vis>1</vis>  <variableKey>1</variableKey>  <stubKey>1</stubKey>[![](../../../minus.gif)](../../../#)<selections>
  <its />
  </selections>
  <aggregator>None</aggregator>[![](../../../minus.gif)](../../../#)<parametrizedDimensions>
  <its />
  </parametrizedDimensions>
  <level>None</level>  </slice>
  <lag>-1</lag>  <key>1</key>  <termToText>USA|A[t-1]</termToText>  <termToInnerText>@_1:0[-1]</termToInnerText>[![](../../../minus.gif)](../../../#)<termInfo>
  <k>-1</k>  <lag>-1</lag>[![](../../../minus.gif)](../../../#)<inversion>
  <type>None</type>  <lag>PrecidingValue</lag>  <previousLag>-1</previousLag>  <seasonality>None</seasonality>  <dependence>Linear</dependence>  <K>3</K>  </inversion>
  <date>1899-12-30</date>  </termInfo>
  </Item>
  </its>
  </operands>
  </deterministic>
  <doUseR>0</doUseR>  <supportsR>0</supportsR>  </method>
[![](../../../minus.gif)](../../../#)<exprs>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>-1</k>  <id>input</id>  <innerText>@_1:0[-1]</innerText>[![](../../../minus.gif)](../../../#)<terms>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>[![](../../../minus.gif)](../../../#)<source>
  <kind>VarSource</kind>[![](../../../minus.gif)](../../../#)<varSource>
  <kind>LanerSerie</kind>[![](../../../minus.gif)](../../../#)<serie>
  <k>2</k>  <id>OBJ2</id>  </serie>
  </varSource>
[![](../../../minus.gif)](../../../#)<var>
  <k>1</k>  <id>OBJ2</id>  </var>
  </source>
  <lag>-1</lag>[![](../../../minus.gif)](../../../#)<inversion>
  <type>None</type>  <lag>PrecidingValue</lag>  <previousLag>-1</previousLag>  <seasonality>None</seasonality>  <dependence>Linear</dependence>  <K>3</K>  </inversion>
  <innerText>@_1:0[-1]</innerText>  <date>1899-12-30</date>  </it>
  </its>
  </terms>
  </it>
  </its>
  </exprs>
  <calculationType>Serie</calculationType>  <calculationDirection>Forward</calculationDirection>  </formula>
[![](../../../minus.gif)](../../../#)<formulaPeriod>
  <startDate>2000-01-01</startDate>  <endDate>2015-12-31</endDate>  <identificationEndDate>1899-12-30</identificationEndDate>  <startOffset>0</startOffset>  <endOffset>0</endOffset>  <identificationEndOffset>0</identificationEndOffset>[![](../../../minus.gif)](../../../#)<periodSet>
  <it>StartDate</it>  <it>EndDate</it>  </periodSet>
[![](../../../minus.gif)](../../../#)<autoPeriod>
  <it>IdentStartByFact</it>  <it>ForecastEndByFact</it>  </autoPeriod>
  </formulaPeriod>
  <displayDataAs>CalculatedValues</displayDataAs>  <sourceStubKey>8</sourceStubKey>  <createDerivedSeries>1</createDerivedSeries>  <strictlyDefined>0</strictlyDefined>  <userFormat />
  </calc>
[![](../../../minus.gif)](../../../#)<dependencies>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>OBJ2</id>  </it>
  </dependencies>
  <dependents />
  <selectedUnit />
[![](../../../minus.gif)](../../../#)<displayParams>
  <inversion>None</inversion>  <inversionLag>PrecidingValue</inversionLag>  <previousInversionLag>1</previousInversionLag>  </displayParams>
  <tag>Выполнили сдвиг значений на одну точку вперед</tag>  <hasChildren>1</hasChildren>  <index>0</index>  <expanded>1</expanded>  <level>Year</level>  <childrenCount>1</childrenCount>  <visibleChildrenCount>1</visibleChildrenCount>  <flags>20</flags>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>77</k>  <id>OBJ77</id>  <n>USA|A[t-1]</n>  <vis>1</vis>  <kind>Derived</kind>  <dependencies />
  <dependents />
  <selectedUnit />
[![](../../../minus.gif)](../../../#)<displayParams>
  <inversion>None</inversion>  <inversionLag>PrecidingValue</inversionLag>  <previousInversionLag>1</previousInversionLag>  </displayParams>
[![](../../../minus.gif)](../../../#)<parent>
  <k>76</k>  <id>OBJ76</id>  </parent>
  <tag />
  <index>0</index>  <level>Year</level>  <flags>0</flags>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>OBJ2</id>  <n>USA|A</n>  <vis>1</vis>  <kind>Calculate</kind>[![](../../../minus.gif)](../../../#)<calc>
  <rubKey>5472</rubKey>  <rubShortcutKey>5472</rubShortcutKey>  <revKey>-1</revKey>[![](../../../minus.gif)](../../../#)<fact>
  <k>10249</k>  <id>OBJ2</id>  <n>USA|A</n>  <vis>1</vis>  </fact>
[![](../../../minus.gif)](../../../#)<formulaPeriod>
  <startDate>1899-12-30</startDate>  <endDate>1899-12-30</endDate>  <identificationEndDate>1899-12-30</identificationEndDate>  <startOffset>0</startOffset>  <endOffset>0</endOffset>  <identificationEndOffset>0</identificationEndOffset>  <periodSet />
[![](../../../minus.gif)](../../../#)<autoPeriod>
  <it>None</it>  </autoPeriod>
  </formulaPeriod>
  <displayDataAs>CalculatedValues</displayDataAs>  <sourceStubKey>2</sourceStubKey>  <createDerivedSeries>1</createDerivedSeries>  <strictlyDefined>1</strictlyDefined>  <userFormat />
  </calc>
  <dependencies />
[![](../../../minus.gif)](../../../#)<dependents>
[![](../../../minus.gif)](../../../#)<it>
  <k>76</k>  <id>OBJ76</id>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>77</k>  <id>OBJ77</id>  </it>
  </dependents>
  <selectedUnit />
[![](../../../minus.gif)](../../../#)<displayParams>
  <inversion>None</inversion>  <inversionLag>PrecidingValue</inversionLag>  <previousInversionLag>1</previousInversionLag>  </displayParams>
  <tag />
  <hasChildren>0</hasChildren>  <index>1</index>  <expanded>0</expanded>  <level>Year</level>  <childrenCount>0</childrenCount>  <visibleChildrenCount>0</visibleChildrenCount>  <flags>0</flags>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>24</k>  <id>OBJ24</id>  <n>Группа стран</n>  <vis>1</vis>  <kind>UserGroup</kind>[![](../../../minus.gif)](../../../#)<dependencies>
[![](../../../minus.gif)](../../../#)<it>
  <k>4</k>  <id>OBJ4</id>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>23</k>  <id>OBJ23</id>  </it>
  </dependencies>
  <dependents />
  <selectedUnit />
[![](../../../minus.gif)](../../../#)<displayParams>
  <inversion>None</inversion>  <inversionLag>PrecidingValue</inversionLag>  <previousInversionLag>1</previousInversionLag>  </displayParams>
  <tag />
  <hasChildren>1</hasChildren>  <index>2</index>  <expanded>1</expanded>  <level>Root</level>  <childrenCount>2</childrenCount>  <visibleChildrenCount>2</visibleChildrenCount>  <flags>0</flags>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>4</k>  <id>OBJ4</id>  <n>Canada|A</n>  <vis>1</vis>  <kind>Calculate</kind>[![](../../../minus.gif)](../../../#)<calc>
  <rubKey>5472</rubKey>  <rubShortcutKey>5472</rubShortcutKey>  <revKey>-1</revKey>[![](../../../minus.gif)](../../../#)<fact>
  <k>10250</k>  <id>OBJ4</id>  <n>Canada|A</n>  <vis>1</vis>  </fact>
[![](../../../minus.gif)](../../../#)<formulaPeriod>
  <startDate>1899-12-30</startDate>  <endDate>1899-12-30</endDate>  <identificationEndDate>1899-12-30</identificationEndDate>  <startOffset>0</startOffset>  <endOffset>0</endOffset>  <identificationEndOffset>0</identificationEndOffset>  <periodSet />
[![](../../../minus.gif)](../../../#)<autoPeriod>
  <it>None</it>  </autoPeriod>
  </formulaPeriod>
  <displayDataAs>CalculatedValues</displayDataAs>  <sourceStubKey>5</sourceStubKey>  <createDerivedSeries>1</createDerivedSeries>  <strictlyDefined>1</strictlyDefined>  <userFormat />
  </calc>
  <dependencies />
  <dependents />
  <selectedUnit />
[![](../../../minus.gif)](../../../#)<displayParams>
  <inversion>None</inversion>  <inversionLag>PrecidingValue</inversionLag>  <previousInversionLag>1</previousInversionLag>  </displayParams>
[![](../../../minus.gif)](../../../#)<parent>
  <k>24</k>  <id>OBJ24</id>  </parent>
  <tag />
  <hasChildren>0</hasChildren>  <index>0</index>  <expanded>0</expanded>  <level>Year</level>  <childrenCount>0</childrenCount>  <visibleChildrenCount>0</visibleChildrenCount>  <flags>0</flags>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>23</k>  <id>OBJ23</id>  <n>Russia|A</n>  <vis>1</vis>  <kind>Calculate</kind>[![](../../../minus.gif)](../../../#)<calc>
  <rubKey>5472</rubKey>  <rubShortcutKey>5472</rubShortcutKey>  <revKey>-1</revKey>[![](../../../minus.gif)](../../../#)<fact>
  <k>10251</k>  <id>OBJ23</id>  <n>Russia|A</n>  <vis>1</vis>  </fact>
[![](../../../minus.gif)](../../../#)<formulaPeriod>
  <startDate>1899-12-30</startDate>  <endDate>1899-12-30</endDate>  <identificationEndDate>1899-12-30</identificationEndDate>  <startOffset>0</startOffset>  <endOffset>0</endOffset>  <identificationEndOffset>0</identificationEndOffset>  <periodSet />
[![](../../../minus.gif)](../../../#)<autoPeriod>
  <it>None</it>  </autoPeriod>
  </formulaPeriod>
  <displayDataAs>CalculatedValues</displayDataAs>  <sourceStubKey>7</sourceStubKey>  <createDerivedSeries>1</createDerivedSeries>  <strictlyDefined>1</strictlyDefined>  <userFormat />
  </calc>
  <dependencies />
  <dependents />
  <selectedUnit />
[![](../../../minus.gif)](../../../#)<displayParams>
  <inversion>None</inversion>  <inversionLag>PrecidingValue</inversionLag>  <previousInversionLag>1</previousInversionLag>  </displayParams>
[![](../../../minus.gif)](../../../#)<parent>
  <k>24</k>  <id>OBJ24</id>  </parent>
  <tag />
  <hasChildren>0</hasChildren>  <index>1</index>  <expanded>0</expanded>  <level>Year</level>  <childrenCount>0</childrenCount>  <visibleChildrenCount>0</visibleChildrenCount>  <flags>0</flags>  </it>
  </its>
  <displayDataAs>CalculatedValues</displayDataAs>  <autoRecalc>1</autoRecalc>  <createDerivedSeries>Default</createDerivedSeries>  <permanentData>0</permanentData>  </series>
  </meta>
  </SetWbkMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetWbkMd" :
  {
   "tWbk" :
    {
     "id" : "S1!M!S!W10"
    },
   "tArg" :
    {
     "refresh" : "",
     "pattern" :
      {
       "obInst" : "true",
       "useGridAutoAdjust" : "true",
       "series" : "Add",
       "seriesDisplayParams" : "true",
       "period" : "true"
      },
     "meta" :
      {
       "series" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "0",
               "kind" : "Calculate",
               "hint" : "Вычисляемый ряд",
               "atts" :
                {
                 "its" : ""
                },
               "calc" :
                {
                 "formula" :
                  {
                   "k" : "0",
                   "kind" : "Deterministic",
                   "exprs" :
                    {
                     "its" :
                      {
                       "it" :
                        [
                          {
                           "k" : "0",
                           "innerText" : "@2@",
                           "terms" :
                            {
                             "its" :
                              {
                               "it" :
                                [
                                  {
                                   "k" : "2",
                                   "source" :
                                    {
                                     "kind" : "VarSource",
                                     "varSource" :
                                      {
                                       "kind" : "LanerSerie",
                                       "serie" :
                                        {
                                         "k" : "2"
                                        }
                                      }
                                    },
                                   "lag" : "-1",
                                   "inversion" :
                                    {
                                     "type" : "None"
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                 "formulaPeriod" :
                  {
                   "startDate" : "2000-01-01",
                   "endDate" : "2015-12-31",
                   "startOffset" : "0",
                   "endOffset" : "0",
                   "identificationEndOffset" : "0",
                   "periodSet" :
                    {
                     "it" :
                      [
                        "StartDate",
                        "EndDate"
                      ]
                    },
                   "autoPeriod" :
                    {
                     "it" :
                      [
                        "IdentStartByFact",
                        "ForecastEndByFact"
                      ]
                    }
                  },
                 "displayDataAs" : "CalculatedValues",
                 "hasDiscrepancies" : "false",
                 "createDerivedSeries" : "true"
                },
               "calculate" : "true",
               "moveAfter" :
                {
                 "k" : "-1"
                },
               "tag" : "Выполнили сдвиг значений на одну точку вперед",
               "index" : "1",
               "expanded" : "true",
               "level" : "Year",
               "flags" : "20"
              }
            ]
          },
         "displayDataAs" : "CalculatedValues",
         "autoRecalc" : "true"
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "title" : "false",
       "useGridAutoAdjust" : "true",
       "series" : "Get",
       "seriesDependencies" : "true",
       "seriesDependents" : "true",
       "seriesAtts" : "false",
       "seriesPrimaryAttsForEmpty" : "false",
       "seriesDisplayParams" : "true",
       "seriesCalc" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetWbkMdResult" :
  {
   "refresh" : "",
   "id" :
    {
     "id" : "S1!M!S!W10"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "1",
         "@hf" : "0",
         "i" : "WBK_NEW_SERIE",
         "n" : "Годовые данные (вычисления)",
         "k" : "5738",
         "c" : "2827",
         "p" : "5471",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "1",
     "windowsPosition" : "Vertical",
     "hasPivot" : "0",
     "hasLaner" : "1",
     "series" :
      {
       "@count" : "6",
       "its" :
        {
         "it" :
          [
            {
             "k" : "76",
             "id" : "OBJ76",
             "n" : "USA|A[t-1]",
             "vis" : "1",
             "kind" : "Calculate",
             "calc" :
              {
               "rubKey" : "5472",
               "rubShortcutKey" : "5472",
               "revKey" : "4294967295",
               "fact" :
                {
                 "k" : "4294967295",
                 "id" : "OBJ76",
                 "n" : "USA|A[t-1]",
                 "vis" : "1"
                },
               "formula" :
                {
                 "k" : "4294967295",
                 "kind" : "Deterministic",
                 "method" :
                  {
                   "deterministic" :
                    {
                     "modifyType" : "Replace",
                     "expression" : "@_1:0[-1]",
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
                             "id" : "OBJ2",
                             "n" : "USA|A",
                             "vis" : "1",
                             "variableKey" : "1",
                             "stubKey" : "1",
                             "selections" :
                              {
                               "its" : ""
                              },
                             "aggregator" : "None",
                             "parametrizedDimensions" :
                              {
                               "its" : ""
                              },
                             "level" : "None"
                            },
                           "lag" : "-1",
                           "key" : "1",
                           "termToText" : "USA|A[t-1]",
                           "termToInnerText" : "@_1:0[-1]",
                           "termInfo" :
                            {
                             "k" : "4294967295",
                             "lag" : "-1",
                             "inversion" :
                              {
                               "type" : "None",
                               "lag" : "PrecidingValue",
                               "previousLag" : "-1",
                               "seasonality" : "None",
                               "dependence" : "Linear",
                               "K" : "3"
                              },
                             "date" : "1899-12-30"
                            }
                          }
                        }
                      }
                    },
                   "doUseR" : "0",
                   "supportsR" : "0"
                  },
                 "exprs" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "k" : "4294967295",
                         "id" : "input",
                         "innerText" : "@_1:0[-1]",
                         "terms" :
                          {
                           "its" :
                            {
                             "it" :
                              [
                                {
                                 "k" : "0",
                                 "source" :
                                  {
                                   "kind" : "VarSource",
                                   "varSource" :
                                    {
                                     "kind" : "LanerSerie",
                                     "serie" :
                                      {
                                       "k" : "2",
                                       "id" : "OBJ2"
                                      }
                                    },
                                   "var" :
                                    {
                                     "k" : "1",
                                     "id" : "OBJ2"
                                    }
                                  },
                                 "lag" : "-1",
                                 "inversion" :
                                  {
                                   "type" : "None",
                                   "lag" : "PrecidingValue",
                                   "previousLag" : "-1",
                                   "seasonality" : "None",
                                   "dependence" : "Linear",
                                   "K" : "3"
                                  },
                                 "innerText" : "@_1:0[-1]",
                                 "date" : "1899-12-30"
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  },
                 "calculationType" : "Serie",
                 "calculationDirection" : "Forward"
                },
               "formulaPeriod" :
                {
                 "startDate" : "2000-01-01",
                 "endDate" : "2015-12-31",
                 "identificationEndDate" : "1899-12-30",
                 "startOffset" : "0",
                 "endOffset" : "0",
                 "identificationEndOffset" : "0",
                 "periodSet" :
                  {
                   "it" :
                    [
                      "StartDate",
                      "EndDate"
                    ]
                  },
                 "autoPeriod" :
                  {
                   "it" :
                    [
                      "IdentStartByFact",
                      "ForecastEndByFact"
                    ]
                  }
                },
               "displayDataAs" : "CalculatedValues",
               "sourceStubKey" : "8",
               "createDerivedSeries" : "1",
               "strictlyDefined" : "0",
               "userFormat" : ""
              },
             "dependencies" :
              {
               "it" :
                {
                 "k" : "2",
                 "id" : "OBJ2"
                }
              },
             "dependents" : "",
             "selectedUnit" : "",
             "displayParams" :
              {
               "inversion" : "None",
               "inversionLag" : "PrecidingValue",
               "previousInversionLag" : "1"
              },
             "tag" : "Выполнили сдвиг значений на одну точку вперед",
             "hasChildren" : "1",
             "index" : "0",
             "expanded" : "1",
             "level" : "Year",
             "childrenCount" : "1",
             "visibleChildrenCount" : "1",
             "flags" : "20"
            },
            {
             "k" : "77",
             "id" : "OBJ77",
             "n" : "USA|A[t-1]",
             "vis" : "1",
             "kind" : "Derived",
             "dependencies" : "",
             "dependents" : "",
             "selectedUnit" : "",
             "displayParams" :
              {
               "inversion" : "None",
               "inversionLag" : "PrecidingValue",
               "previousInversionLag" : "1"
              },
             "parent" :
              {
               "k" : "76",
               "id" : "OBJ76"
              },
             "tag" : "",
             "index" : "0",
             "level" : "Year",
             "flags" : "0"
            },
            {
             "k" : "2",
             "id" : "OBJ2",
             "n" : "USA|A",
             "vis" : "1",
             "kind" : "Calculate",
             "calc" :
              {
               "rubKey" : "5472",
               "rubShortcutKey" : "5472",
               "revKey" : "4294967295",
               "fact" :
                {
                 "k" : "10249",
                 "id" : "OBJ2",
                 "n" : "USA|A",
                 "vis" : "1"
                },
               "formulaPeriod" :
                {
                 "startDate" : "1899-12-30",
                 "endDate" : "1899-12-30",
                 "identificationEndDate" : "1899-12-30",
                 "startOffset" : "0",
                 "endOffset" : "0",
                 "identificationEndOffset" : "0",
                 "periodSet" : "",
                 "autoPeriod" :
                  {
                   "it" : "None"
                  }
                },
               "displayDataAs" : "CalculatedValues",
               "sourceStubKey" : "2",
               "createDerivedSeries" : "1",
               "strictlyDefined" : "1",
               "userFormat" : ""
              },
             "dependencies" : "",
             "dependents" :
              {
               "it" :
                [
                  {
                   "k" : "76",
                   "id" : "OBJ76"
                  },
                  {
                   "k" : "77",
                   "id" : "OBJ77"
                  }
                ]
              },
             "selectedUnit" : "",
             "displayParams" :
              {
               "inversion" : "None",
               "inversionLag" : "PrecidingValue",
               "previousInversionLag" : "1"
              },
             "tag" : "",
             "hasChildren" : "0",
             "index" : "1",
             "expanded" : "0",
             "level" : "Year",
             "childrenCount" : "0",
             "visibleChildrenCount" : "0",
             "flags" : "0"
            },
            {
             "k" : "24",
             "id" : "OBJ24",
             "n" : "Группа стран",
             "vis" : "1",
             "kind" : "UserGroup",
             "dependencies" :
              {
               "it" :
                [
                  {
                   "k" : "4",
                   "id" : "OBJ4"
                  },
                  {
                   "k" : "23",
                   "id" : "OBJ23"
                  }
                ]
              },
             "dependents" : "",
             "selectedUnit" : "",
             "displayParams" :
              {
               "inversion" : "None",
               "inversionLag" : "PrecidingValue",
               "previousInversionLag" : "1"
              },
             "tag" : "",
             "hasChildren" : "1",
             "index" : "2",
             "expanded" : "1",
             "level" : "Root",
             "childrenCount" : "2",
             "visibleChildrenCount" : "2",
             "flags" : "0"
            },
            {
             "k" : "4",
             "id" : "OBJ4",
             "n" : "Canada|A",
             "vis" : "1",
             "kind" : "Calculate",
             "calc" :
              {
               "rubKey" : "5472",
               "rubShortcutKey" : "5472",
               "revKey" : "4294967295",
               "fact" :
                {
                 "k" : "10250",
                 "id" : "OBJ4",
                 "n" : "Canada|A",
                 "vis" : "1"
                },
               "formulaPeriod" :
                {
                 "startDate" : "1899-12-30",
                 "endDate" : "1899-12-30",
                 "identificationEndDate" : "1899-12-30",
                 "startOffset" : "0",
                 "endOffset" : "0",
                 "identificationEndOffset" : "0",
                 "periodSet" : "",
                 "autoPeriod" :
                  {
                   "it" : "None"
                  }
                },
               "displayDataAs" : "CalculatedValues",
               "sourceStubKey" : "5",
               "createDerivedSeries" : "1",
               "strictlyDefined" : "1",
               "userFormat" : ""
              },
             "dependencies" : "",
             "dependents" : "",
             "selectedUnit" : "",
             "displayParams" :
              {
               "inversion" : "None",
               "inversionLag" : "PrecidingValue",
               "previousInversionLag" : "1"
              },
             "parent" :
              {
               "k" : "24",
               "id" : "OBJ24"
              },
             "tag" : "",
             "hasChildren" : "0",
             "index" : "0",
             "expanded" : "0",
             "level" : "Year",
             "childrenCount" : "0",
             "visibleChildrenCount" : "0",
             "flags" : "0"
            },
            {
             "k" : "23",
             "id" : "OBJ23",
             "n" : "Russia|A",
             "vis" : "1",
             "kind" : "Calculate",
             "calc" :
              {
               "rubKey" : "5472",
               "rubShortcutKey" : "5472",
               "revKey" : "4294967295",
               "fact" :
                {
                 "k" : "10251",
                 "id" : "OBJ23",
                 "n" : "Russia|A",
                 "vis" : "1"
                },
               "formulaPeriod" :
                {
                 "startDate" : "1899-12-30",
                 "endDate" : "1899-12-30",
                 "identificationEndDate" : "1899-12-30",
                 "startOffset" : "0",
                 "endOffset" : "0",
                 "identificationEndOffset" : "0",
                 "periodSet" : "",
                 "autoPeriod" :
                  {
                   "it" : "None"
                  }
                },
               "displayDataAs" : "CalculatedValues",
               "sourceStubKey" : "7",
               "createDerivedSeries" : "1",
               "strictlyDefined" : "1",
               "userFormat" : ""
              },
             "dependencies" : "",
             "dependents" : "",
             "selectedUnit" : "",
             "displayParams" :
              {
               "inversion" : "None",
               "inversionLag" : "PrecidingValue",
               "previousInversionLag" : "1"
              },
             "parent" :
              {
               "k" : "24",
               "id" : "OBJ24"
              },
             "tag" : "",
             "hasChildren" : "0",
             "index" : "1",
             "expanded" : "0",
             "level" : "Year",
             "childrenCount" : "0",
             "visibleChildrenCount" : "0",
             "flags" : "0"
            }
          ]
        },
       "displayDataAs" : "CalculatedValues",
       "autoRecalc" : "1",
       "createDerivedSeries" : "Default",
       "permanentData" : "0"
      }
    }
  }
}


public static SetWbkMdResult SetWbkCalcSerie(WbkId wbk)
{   // Задаём параметры выполнения операции
    var tOp = new SetWbkMd
    {   // Указываем изменямую рабочую книгу
        tWbk = wbk,
        tArg = new SetWbkMdArg()
        {   // Задаём шаблон изменения данных
            pattern = new WbkMdPattern()
            {
                obInst = true,
                period = true,
                series = ListOperation.Add,
                seriesDisplayParams = true
            },// Задаём параметры изменения данных
            meta = new WbkMd()
            {   // Задаём параметры всех рядов
                series = new LnSeries()
                {
                    autoRecalc = true,
                    displayDataAs = LnDataDisplayType.CalculatedValues,
                    its = new LnSerie[]
                    {// Задаём параметры вычисляемого ряда
                        new LnSerie()
                        {
                            k = 0,
                            kind = LnSerieKind.Calculate,
                            hint = "Вычисляемый ряд",
                            atts = new RubAtts(){its = new RubAtt[]{}},
                            moveAfter = new ItKey { k = uint.MaxValue, id = null },
                            // Задаем параметры вычисления значений
                            calc = new LnSerieCalc()
                            {
                                fact = null,
                                formula = new TsFormula()
                                {
                                    k = 0,
                                    kind = TsFormulaKind.Deterministic,
                                    method = null,
                                    exprs = new TsExprs()
                                    {
                                        its = new TsExpr[]
                                        {
                                            new TsExpr()
                                            {
                                                k = 0,
                                                innerText = "@2@",
                                                terms = new TsTerms()
                                                {
                                                    its = new TsTerm[]
                                                    {
                                                        new TsTerm()
                                                        {
                                                            k = 2,
                                                            inversion = new TsInversion{},
                                                            source = new TsTermSource
                                                            {
                                                                kind = TsTermSourceKind.VarSource,
                                                                varSource = new TsVarSource()
                                                                {
                                                                    kind = TsVarSourceKind.LanerSerie,
                                                                    serie = new ItKey()
                                                                    {k = 2}
                                                                }
                                                            },
                                                            lag = "-1"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },// Задаем параметры отображения вычисляемого ряда
                                displayDataAs = LnDataDisplayType.CalculatedValues,
                                hasDiscrepancies = false,
                                createDerivedSeries = true,
                                // Задаём границы периода расчёта значений
                                formulaPeriod = new LnTransformPeriod()
                                {
                                    startDate = DateTime.Parse("2000-01-01"),
                                    startOffset = 0,
                                    endDate = DateTime.Parse("2015-12-31"),
                                    endOffset = 0,
                                    periodSet = new LnTransformPeriodPart[]
                                    {
                                        LnTransformPeriodPart.StartDate,
                                        LnTransformPeriodPart.EndDate
                                    },
                                    autoPeriod = new TsAutoPeriodOption[]
                                    {
                                        TsAutoPeriodOption.IdentStartByFact,
                                        TsAutoPeriodOption.ForecastEndByFact
                                    },
                                    identificationEndDate = null,
                                    identificationEndOffset = 0
                                }
                            },
                        calculate = true,
                        index = 1,
                        flags = 20,
                        expanded = true,
                        level = DimCalendarLvl.Year,
                        tag = "Выполнили сдвиг значений на одну точку вперед"
                        }
                    }
                }
            },
            refresh = new EaxRefresh(),
            //Задаем шаблон извлечения изменённых данных
            metaGet = new WbkMdPattern
            {
                title = false,
                seriesCalc = true,
                series = ListOperation.Get,
                seriesAtts = false,
                seriesPrimaryAttsForEmpty = false,
                seriesDependencies = true,
                seriesDependents = true,
                seriesDisplayParams = true
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполнение операции
    var sRes = somClient.SetWbkMd(tOp);
    // Выводим информацию о рядах в окно консоли
    LnSeries series = sRes.meta.series;
    Console.WriteLine("Общее количество рядов: " + series.count);
    foreach (LnSerie serie in series.its)
    {
        Console.WriteLine("Ряд '" + serie.n+"'");
        Console.WriteLine("".PadRight(3) + "ключ: " + serie.k);
        Console.WriteLine("".PadRight(3) + "единица измерения: " + serie.selectedUnit);
        if (serie.parent != null)
        {Console.WriteLine("".PadRight(3) + "ряд является дочерним. Ключ родительского ряда: " + serie.parent.k);};
        Console.WriteLine("".PadRight(3) + "количество зависящих рядов: " + serie.dependents.Length);
        if ((serie.hasChildren != null) && (serie.childrenCount != 0))
        {
            Console.WriteLine("".PadRight(3) + "количество дочерних рядов: " + serie.childrenCount);
            string s = "".PadRight(3) + "ключи дочерних рядов: ";
            foreach (ItKey it in serie.dependencies) { s = s + it.k + ";"; };
            Console.WriteLine(s);
        }
        else {Console.WriteLine("".PadRight(3) + "дочерних рядов нет");};

        if (serie.kind == LnSerieKind.Calculate)
        {
            LnSerieCalc calcS = serie.calc;
            Console.WriteLine("".PadRight(3) + "ряд вычисляемый. Параметры расчёта: ");
            Console.WriteLine("".PadRight(6) + "ключ источника данных: " + calcS.rubKey);
            Console.WriteLine("".PadRight(6) + "ключ ярлыка для источника данных: " + calcS.rubShortcutKey);
            Console.WriteLine("".PadRight(6) + "ключ источника данных для ряда-источника: " + calcS.sourceStubKey);
            Console.WriteLine("".PadRight(6) + "ключ ревизии: " + calcS.revKey);
            Console.WriteLine("".PadRight(6) + "ключ сценария: " + calcS.scenKey);
            Console.WriteLine("".PadRight(6) + "ключ показателя: " + calcS.fact.k);
        };
        Console.WriteLine("");
    };
    return sRes;
}


См. также:


[SetWbkMd:
 Операция](../SetWbkMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
