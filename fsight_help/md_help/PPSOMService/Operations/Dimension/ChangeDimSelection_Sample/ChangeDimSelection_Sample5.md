# Отметка элементов в заданном календарном периоде: Операция ChangeDimSelection

Отметка элементов в заданном календарном периоде: Операция ChangeDimSelection
-


**


# Отметка элементов в заданном календарном периоде


Ниже приведен пример использования операции [ChangeDimSelection](../ChangeDimSelection.htm)
 для отметки элементов в заданном календарном периоде. В запросе передается
 моникёр открытого экземпляра календарного справочника, даты начала и окончания
 периода и уровни элементов, которые необходимо отметить. В ответе приходит
 сводная информация об отмеченных элементах.


В примере C# моникёр, даты начала и окончания периода передаются в качестве
 входных параметров функции.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<ChangeDimSelection xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S2</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <elSelectOp>Set</elSelectOp>  <elRelative>Unknown</elRelative>[![](../../../minus.gif)](../../../#)<setCalendarPeriod>
  <active>true</active>  <start>2000-01-01</start>  <end>2000-07-01</end>[![](../../../minus.gif)](../../../#)<levels>
  <it>Year</it>  <it>Quarter</it>  </levels>
  <append>true</append>  </setCalendarPeriod>
  </tArg>
  </ChangeDimSelection>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<ChangeDimSelectionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <id xmlns="****">S1!M!S!S2</id>[![](../../../minus.gif)](../../../#)<selectionInfo xmlns="****">
[![](../../../minus.gif)](../../../#)<firstSelected>
  <n>2000</n>[![](../../../minus.gif)](../../../#)<a>
  <it>1</it>  <it>2000-01-01</it>  <it>2000</it>  <it>YEARS:2000</it>  <it>1</it>  <it><A T="A" V="2"><A T="D" V="36526"/><A T="D" V="36891"/></A></it>  <it>2000</it>  <it />
  <it />
  <it />
  <it />
  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**1**" />
  <it v="**2000-01-01**" />
  <it v="**2000**" />
  <it v="**YEARS:2000**" />
  <it v="**1**" />
  <it v="****" />
  <it v="**2000**" />
  <it />
  <it />
  <it />
  <it />
  </ea>
  <k>YEARS:2000</k>  <h>0</h>  <o>0</o>  </firstSelected>
[![](../../../minus.gif)](../../../#)<lastSelected>
  <n>III квартал 2000</n>[![](../../../minus.gif)](../../../#)<a>
  <it>3</it>  <it>2000-07-01</it>  <it>III квартал 2000</it>  <it>QUARTERS:3.2000</it>  <it>6</it>  <it><A T="A" V="2"><A T="D" V="36708"/><A T="D" V="36799"/></A></it>  <it>2000</it>  <it>2</it>  <it>3</it>  <it />
  <it />
  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**3**" />
  <it v="**2000-07-01**" />
  <it v="**III квартал 2000**" />
  <it v="**QUARTERS:3.2000**" />
  <it v="**6**" />
  <it v="****" />
  <it v="**2000**" />
  <it v="**2**" />
  <it v="**3**" />
  <it />
  <it />
  </ea>
  <k>QUARTERS:3.2000</k>  <h>0</h>  <o>2</o>  </lastSelected>
  <selectedCount>6</selectedCount>[![](../../../minus.gif)](../../../#)<calendarPeriod>
  <active>1</active>  <start>2000-01-01</start>  <end>2000-07-01</end>[![](../../../minus.gif)](../../../#)<levels>
  <it>Year</it>  <it>HalfYear</it>  <it>Quarter</it>  </levels>
  </calendarPeriod>
[![](../../../minus.gif)](../../../#)<schema>
  <k>4294967295</k>  <vis>1</vis>  <applyOnlyOnce>0</applyOnlyOnce>  <onceApplied>0</onceApplied>  <applyOnRebuild>0</applyOnRebuild>  </schema>
  </selectionInfo>
  </ChangeDimSelectionResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ChangeDimSelection" :
  {
   "tDim" :
    {
     "id" : "S1!M!S!S2"
    },
   "tArg" :
    {
     "elSelectOp" : "Set",
     "elRelative" : "Unknown",
     "setCalendarPeriod" :
      {
       "active" : "true",
       "start" : "2000-01-01",
       "end" : "2000-07-01",
       "levels" :
        {
         "it" :
          [
            "Year",
            "Quarter"
          ]
        },
       "append" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "ChangeDimSelectionResult" :
  {
   "id" : "S1!M!S!S2",
   "selectionInfo" :
    {
     "firstSelected" :
      {
       "n" : "2000",
       "a" :
        {
         "it" :
          [
            "1",
            "2000-01-01",
            "2000",
            "YEARS:2000",
            "1",
            "<A T="A" V="2"><A T="D" V="36526"\/><A T="D" V="36891"\/><\/A>",
            "2000",
            "",
            "",
            "",
            ""
          ]
        },
       "ea" :
        {
         "it" :
          [
            {
             "@v" : "1"
            },
            {
             "@v" : "2000-01-01"
            },
            {
             "@v" : "2000"
            },
            {
             "@v" : "YEARS:2000"
            },
            {
             "@v" : "1"
            },
            {
             "@v" : "<A T="A" V="2"><A T="D" V="36526"\/><A T="D" V="36891"\/><\/A>"
            },
            {
             "@v" : "2000"
            },
            "",
            "",
            "",
            ""
          ]
        },
       "k" : "YEARS:2000",
       "h" : "0",
       "o" : "0"
      },
     "lastSelected" :
      {
       "n" : "III квартал 2000",
       "a" :
        {
         "it" :
          [
            "3",
            "2000-07-01",
            "III квартал 2000",
            "QUARTERS:3.2000",
            "6",
            "<A T="A" V="2"><A T="D" V="36708"\/><A T="D" V="36799"\/><\/A>",
            "2000",
            "2",
            "3",
            "",
            ""
          ]
        },
       "ea" :
        {
         "it" :
          [
            {
             "@v" : "3"
            },
            {
             "@v" : "2000-07-01"
            },
            {
             "@v" : "III квартал 2000"
            },
            {
             "@v" : "QUARTERS:3.2000"
            },
            {
             "@v" : "6"
            },
            {
             "@v" : "<A T="A" V="2"><A T="D" V="36708"\/><A T="D" V="36799"\/><\/A>"
            },
            {
             "@v" : "2000"
            },
            {
             "@v" : "2"
            },
            {
             "@v" : "3"
            },
            "",
            ""
          ]
        },
       "k" : "QUARTERS:3.2000",
       "h" : "0",
       "o" : "2"
      },
     "selectedCount" : "6",
     "calendarPeriod" :
      {
       "active" : "1",
       "start" : "2000-01-01",
       "end" : "2000-07-01",
       "levels" :
        {
         "it" :
          [
            "Year",
            "HalfYear",
            "Quarter"
          ]
        }
      },
     "schema" :
      {
       "k" : "4294967295",
       "vis" : "1",
       "applyOnlyOnce" : "0",
       "onceApplied" : "0",
       "applyOnRebuild" : "0"
      }
    }
  }
}


public static ChangeDimSelectionResult SelectCalendarPeriod(DmId moniker, DateTime StartPeriod, DateTime EndPeriod)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSel = new ChangeDimSelection()
    {
        tArg = new ChangeDimSelectionArg()
        {
            //newInstance = true,
            elSelectOp = DmElSelectOp.Set,
            elRelative = DmElRelative.Unknown,
            setCalendarPeriod = new DmCalendarSelectionPeriodArg()
            {
                active = true,
                start = StartPeriod,
                end = EndPeriod,
                levels = new DimCalendarLvl[2] {DimCalendarLvl.Year, DimCalendarLvl.Quarter},
                append = true
            },
        },
        tDim = moniker
    };
    //Применение альтернативной иерархии и отметка элементов
    var result = somClient.ChangeDimSelection(tSel);
    return result;
}


См. также:


[ChangeDimSelection](../ChangeDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
