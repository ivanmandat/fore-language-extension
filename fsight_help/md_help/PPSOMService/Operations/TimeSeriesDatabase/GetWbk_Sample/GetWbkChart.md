# Получение различных видов диаграмм для рабочей книги

Получение различных видов диаграмм для рабочей книги
-


**


# Получение различных видов диаграмм для рабочей книги


Ниже приведен пример использования операции [GetWbkMd](../GetWbkMd.htm) для получения диаграммы
 рабочей книги. В запросе передаются: экземпляр открытой рабочей книги,
 параметры получения различных видов диаграмм для рабочей книги. В ответе
 приходят запрошенные диаграммы.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetWbkMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWbk xmlns="****">
  <id>S1!M!S!W7</id>  </tWbk>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  <lanerChart>true</lanerChart>[![](../../../minus.gif)](../../../#)<getLanerChart>
[![](../../../minus.gif)](../../../#)<pattern>
  <data>false</data>  <decoration>false</decoration>  <hiChart>false</hiChart>[![](../../../minus.gif)](../../../#)<asImage>
  <width>400</width>  <height>300</height>  <dpi>96</dpi>  <format>image/png</format>  </asImage>
  </pattern>
  </getLanerChart>
[![](../../../minus.gif)](../../../#)<getModellingChart>
[![](../../../minus.gif)](../../../#)<pattern>
  <data>false</data>  <decoration>false</decoration>  <hiChart>false</hiChart>[![](../../../minus.gif)](../../../#)<asImage>
  <width>400</width>  <height>300</height>  <dpi>96</dpi>  <format>image/png</format>  </asImage>
  </pattern>
  </getModellingChart>
  </pattern>
  </tArg>
  </GetWbkMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetWbkMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!W7</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>WBK_CALC</i>  <n>Вычисляемые ряды</n>  <k>5541</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**4**">
  <its />
  </series>
[![](../../../minus.gif)](../../../#)<lanerChart>
  <type>Simple</type>[![](../../../minus.gif)](../../../#)<series>
[![](../../../minus.gif)](../../../#)<it>
  <type>Simple</type>  <available>0</available>  <visible>0</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Factor</type>  <available>0</available>  <visible>0</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Fact</type>  <available>0</available>  <visible>1</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Modeling</type>  <available>0</available>  <visible>1</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Forecast</type>  <available>0</available>  <visible>1</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Residuals</type>  <available>0</available>  <visible>1</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>UpperConfidenceLevel</type>  <available>0</available>  <visible>0</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>LowerConfidenceLevel</type>  <available>0</available>  <visible>0</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>DUpperConfidenceLevel</type>  <available>0</available>  <visible>0</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>DLowerConfidenceLevel</type>  <available>0</available>  <visible>0</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>B01</type>  <available>0</available>  <visible>1</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>D10</type>  <available>0</available>  <visible>1</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>D11</type>  <available>0</available>  <visible>1</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>D12</type>  <available>0</available>  <visible>1</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>D13</type>  <available>0</available>  <visible>1</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Aggregation</type>  <available>0</available>  <visible>1</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Factors</type>  <available>0</available>  <visible>1</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>Weights</type>  <available>0</available>  <visible>1</visible>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <type>CompositionRelevance</type>  <available>0</available>  <visible>1</visible>  </it>
  </series>
  </lanerChart>
[![](../../../minus.gif)](../../../#)<getLanerChart>
[![](../../../minus.gif)](../../../#)<id>
  <id>S1!M!S!W7!wbkChart</id>  </id>
[![](../../../minus.gif)](../../../#)<meta>
  <asImage>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</asImage>  <toolTipImageMap />
  </meta>
  </getLanerChart>
[![](../../../minus.gif)](../../../#)<getModellingChart>
[![](../../../minus.gif)](../../../#)<id>
  <id>S1!M!S!W7!wbkModChart</id>  </id>
[![](../../../minus.gif)](../../../#)<meta>
  <asImage>iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAYAAADtt+XCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARgSURBVHhe7dfBCQMxEARBh67Mz2/9lgYLn6iCiaGZzwMAgYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkLwmIGstMzM7tIlXBQSA3xMQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQAJIrA2JmZmc24YEAsBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBILkyIGZmdmYTHggAGwEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBILkyIGZmdmYTHggAGwEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBILkyIGZmdmYTHggAGwEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAkisDYmZmZzbhgQCwERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAkisDYmZmZzbxmoAA8F8EBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAACJ7nC5J42aycBqolAAAAAElFTkSuQmCC</asImage>  <toolTipImageMap />
  </meta>
  </getModellingChart>
  </meta>
  </GetWbkMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetWbkMd" :
  {
   "tWbk" :
    {
     "id" : "S1!M!S!W7"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "useGridAutoAdjust" : "true",
       "lanerChart" : "true",
       "getLanerChart" :
        {
         "pattern" :
          {
           "data" : "false",
           "decoration" : "false",
           "hiChart" : "false",
           "asImage" :
            {
             "width" : "400",
             "height" : "300",
             "dpi" : "96",
             "format" : "image\/png"
            }
          }
        },
       "getModellingChart" :
        {
         "pattern" :
          {
           "data" : "false",
           "decoration" : "false",
           "hiChart" : "false",
           "asImage" :
            {
             "width" : "400",
             "height" : "300",
             "dpi" : "96",
             "format" : "image\/png"
            }
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetWbkMdResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!W7"
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
         "@ver" : "2",
         "@hf" : "0",
         "i" : "WBK_CALC",
         "n" : "Вычисляемые ряды",
         "k" : "5541",
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
       "@count" : "4",
       "its" : ""
      },
     "lanerChart" :
      {
       "type" : "Simple",
       "series" :
        {
         "it" :
          [
            {
             "type" : "Simple",
             "available" : "0",
             "visible" : "0"
            },
            {
             "type" : "Factor",
             "available" : "0",
             "visible" : "0"
            },
            {
             "type" : "Fact",
             "available" : "0",
             "visible" : "1"
            },
            {
             "type" : "Modeling",
             "available" : "0",
             "visible" : "1"
            },
            {
             "type" : "Forecast",
             "available" : "0",
             "visible" : "1"
            },
            {
             "type" : "Residuals",
             "available" : "0",
             "visible" : "1"
            },
            {
             "type" : "UpperConfidenceLevel",
             "available" : "0",
             "visible" : "0"
            },
            {
             "type" : "LowerConfidenceLevel",
             "available" : "0",
             "visible" : "0"
            },
            {
             "type" : "DUpperConfidenceLevel",
             "available" : "0",
             "visible" : "0"
            },
            {
             "type" : "DLowerConfidenceLevel",
             "available" : "0",
             "visible" : "0"
            },
            {
             "type" : "B01",
             "available" : "0",
             "visible" : "1"
            },
            {
             "type" : "D10",
             "available" : "0",
             "visible" : "1"
            },
            {
             "type" : "D11",
             "available" : "0",
             "visible" : "1"
            },
            {
             "type" : "D12",
             "available" : "0",
             "visible" : "1"
            },
            {
             "type" : "D13",
             "available" : "0",
             "visible" : "1"
            },
            {
             "type" : "Aggregation",
             "available" : "0",
             "visible" : "1"
            },
            {
             "type" : "Factors",
             "available" : "0",
             "visible" : "1"
            },
            {
             "type" : "Weights",
             "available" : "0",
             "visible" : "1"
            },
            {
             "type" : "CompositionRelevance",
             "available" : "0",
             "visible" : "1"
            }
          ]
        }
      },
     "getLanerChart" :
      {
       "id" :
        {
         "id" : "S1!M!S!W7!wbkChart"
        },
       "meta" :
        {
         "asImage" : "iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAYAAADtt+XCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAmJSURBVHhe7drhkdo6G4ZhmqELmqAGGskfOqADKqACGqABGqABCvA3r2eVwzLeg3kSK9nvXNeMRlha\/809srIaACAgIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBIBIHJDz+Txcr9ePp8\/2+\/2w3W7H0f7mdDqNzzUD8P1FAal4rFar4XK5fKx8ttlsxr0a9\/t9jEhbq\/mr8ADwfUQBqRNGjamA3G63YbfbjaeNw+EwrtVc0Sk1t3UAvq\/4E1ZFYCog7ZRRc\/tk9fi3NScB+fHjh2EYhtFpzPHbA1InkBqlxeJ3BQSA5f2xgNSJo60fj8dxtFNIqTm5SBcQgD66BqQuxetOpNTpY71ej5+v6lNWXaLXqEv3x7V3CQhAH4sHpELRQlC\/W0BKrVdcHkMxtfYOAQHoY\/GAPEvDMJeAAPTRPSBLExCAPgQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACKLB+R8Pg\/X6\/Xj6bPT6TRst9txbqbW3iEgAH0sGpCKx2q1Gi6Xy8fKPyoqm81m3Ku5nqfW3iUgAH0sGpD9fj+OqYAcDocxMKXmep5ae5eAAPSxaEBKReCrgLT1mltAntfeJSAAfQgIAJE\/FpC6JG+BqLmep9beJSAAfXQNSF2K151Iud\/v4wV7\/Y+rujCv56m1dwkIQB+LB+R2u\/0MQf1uASm1XnF5DMXU2jsEBKCPxQPyLA3DXAIC0Ef3gCxNQAD6EBAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAZNGAnE6nYbvdjvOU\/X4\/7te4Xq\/j2qt3XhEQgD4WC0gFYbPZDJfLZZxbIB61\/Rr3+33WO68ICEAfiwXkcDgM5\/N5\/F1zPT+63W7DbrcbTxtt79U7cwgIQB+LBqROEqXm5xi0U0bN7ZPVq3fmEBCAPv5YQOoEUqO0fQEB+D4WC0g7UZSany\/F67nF4ng8juPVO3MICEAfiwWkLsVXq9X4eao+VbVL8vqfV6VOH+v1+tP+1DvvEhCAPhYLSKkA1CmjhaCi0QJSnvfL1No7BASgj0UDMiUNw1wCAtBH94AsTUAA+hAQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgsGpDT6TRst9txnjK1\/+qdVwQEoI\/FAnK9XofNZjNcLpdxrudHU\/uv3plDQAD6WCwgh8NhOJ\/P4++a6\/nR1P6rd+YQEIA+Fg1InSRKzc8xmNp\/9c4cAgLQh4AAEFksIHUJ3gJQ8\/Ol+NT+q3fmEBCAPhYLyP1+H1ar1fg\/qupCvJ7rUny\/33+5P7X2LgEB6GOxgJQKQH2KaiG43W4\/A1Ke98vU2jsEBKCPRQMyJQ3DXAIC0Ef3gCxNQAD6EBAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiHQJyOl0Grbb7ThP2e\/3436N6\/U6rr165ysCAtDH4gGpIGw2m+FyuYxzC8Sjtl\/jfr\/PeucrAgLQx+IBORwOw\/l8Hn\/XXM+PbrfbsNvtxtNG23v1zr8REIA+ugSkThKl5ucYtFNGze2T1at3\/o2AAPSxSEDanUbNr2JQJ5Aape0LCMDfb5GA1J1F\/cNfcztRlJqfL8XrucXieDyO49U7\/0ZAAPpYJCCP6lJ8tVqNJ5L6VNUuyet0Uur0sV6vP+1PvTOXgAD0sXhASgWgThktBBWNFpDyvF+m1uYQEIA+ugRkyrthmEtAAPr4YwFZioAA9CEgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgEi3gJzP5+F6vX48fXY6nYbtdjvOzdTaHAIC0EeXgFQ8VqvVcLlcPlb+UVHZbDbjXs31PLU2l4AA9NElIPv9fhxTATkcDmNgSs31PLU2l4AA9NElIKUi8FVA2nrNLSDPa3MJCEAfiwSkTht1f1FzIyAA\/18WCUjdWdQ\/\/I93F18FpC7JWyBqrueptbkEBKCPRQIy5TEgFZZ2Ornf7+MFe51Y6sK8nqfW5hIQgD66BeR2u\/0MQf1+\/LxV6xWXx1BMrc0hIAB9dAvIs3fDMJeAAPTxxwKyFAEB6ENAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASDSLSDn83m4Xq8fT5\/t9\/thu92Oo\/3N6XQan2t+h4AA9NElIBWP1Wo1XC6Xj5XPNpvNuFfjfr+PEWlrNX8VnikCAtBHl4DUCaPGVEBut9uw2+3G08bhcBjXaq7olJrb+hwCAtBHl4CUisBUQNopo+b2yerxb2t+NyCGYRhGnzHHWwFpdxo1N18FpE4gNUqLxa8EBIC\/y1sBqTuL+of\/8e7iq4DUiaOtH4\/HcbRTSKn53Yt0AP4ev\/UTVoWlnU7q9LFer8cTS33Kqkv0GnXp\/rgGwPf0ywGpULQQ1O\/Hz1u1XnF5DMXUGgDfzy8H5JkwAPw3\/PaAAPDfICAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBiG\/wEMwTTdmqzdXAAAAABJRU5ErkJggg==",
         "toolTipImageMap" : ""
        }
      },
     "getModellingChart" :
      {
       "id" :
        {
         "id" : "S1!M!S!W7!wbkModChart"
        },
       "meta" :
        {
         "asImage" : "iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAYAAADtt+XCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARgSURBVHhe7dfBCQMxEARBh67Mz2\/9lgYLn6iCiaGZzwMAgYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkLwmIGstMzM7tIlXBQSA3xMQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQAJIrA2JmZmc24YEAsBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBILkyIGZmdmYTHggAGwEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBILkyIGZmdmYTHggAGwEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBILkyIGZmdmYTHggAGwEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAkisDYmZmZzbhgQCwERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAkisDYmZmZzbxmoAA8F8EBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAACJ7nC5J42aycBqolAAAAAElFTkSuQmCC",
         "toolTipImageMap" : ""
        }
      }
    }
  }
}


public static GetWbkMdResult GetWbkChart(WbkId wbk)
{   // Задаем параметры получения диаграммы
    GetChartArg ChartPtn = new GetChartArg()
    {
        pattern = new ChartMdPattern()
        {
            data = false,
            decoration = false,
            hiChart = false,
            asImage = new ImageProperties()
            {
                format = "image/png",
                width = 400,
                height = 300,
                dpi = 96.0
            }
        }
    };
    // Задаём параметры выполнения операции
    var tOp = new GetWbkMd
    {
        tWbk = wbk,
        tArg = new GetWbkMdArg
        {// Задаём шаблон извлечения данных
            pattern = new WbkMdPattern
            {
                getLanerChart = ChartPtn,
                lanerChart = true,
                getModellingChart = ChartPtn
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполнение операции
    var gRes = somClient.GetWbkMd(tOp);
    // Сохрянем диаграммы в виде изображений
    if (chartSave(gRes.meta.getLanerChart.meta.asImage, "D:\\LanerChart.png"))
    { Console.WriteLine("Диаграмма рабочей книги сохранена в файл 'LanerChart.png'"); }
    else { Console.WriteLine("Диаграмма рабочей книги отсутствует"); };
    if (chartSave(gRes.meta.getModellingChart.meta.asImage, "D:\\ModellingChart.png"))
    { Console.WriteLine("Диаграмма вычисляемого ряда сохранена в файл 'ModellingChart.png'"); }
    else { Console.WriteLine("Диаграмма вычисляемого ряда отсутствует"); };
    // Выводим данные о диаграмме рабочей книги в окно консоли
    WbkChart lanerCh = gRes.meta.lanerChart;
    switch (lanerCh.type)
    {
        case WbkChartType.DetermAggregation:
            Console.WriteLine("Диаграмма для данных, полученных в результате расчёта агрегации");
            break;
        case WbkChartType.Simple:
            Console.WriteLine("Диаграмма для данных в таблице");
            break;
        case WbkChartType.SpliceMethod:
            Console.WriteLine("Диаграмма для данных, полученных в результате сращивания рядов");
            break;
        case WbkChartType.StatMethod:
            Console.WriteLine("Диаграмма для данных, полученных в результате расчёта статистического метода");
            break;
    };
    int avable = 0;
    int vivsible = 0;
    List series = new List();
    foreach (WbkChartSerie ser in lanerCh.series)
    {
        if (ser.available.Value) { avable++; series.Add(ser.type.ToString()); };
        if (ser.visible.Value) { vivsible++; };
    };
    Console.WriteLine("Общее количество рядов, доступных для отображения: " + vivsible);
    Console.WriteLine("Из них в текущей диаграмме доступны:");
    foreach (string s in series) { Console.WriteLine("".PadRight(3) + s); }
    Console.WriteLine("".PadRight(3) + "Итого рядов: " + avable);
    return gRes;
}
// Функция сохранения диаграммы в файл
public static bool chartSave(byte[] chart, string name)
{
    if (chart.Length !=0)
    {
        MemoryStream fs = new MemoryStream(chart);
        Bitmap img = new Bitmap(fs);
        img.Save(name, System.Drawing.Imaging.ImageFormat.Png);
        img.Dispose(); fs.Dispose();
        return true;
    }
    else { return false; };
}


См. также:


[GetWbkMd:
 Операция](../GetWbkMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
