# Открытие рабочей книги для чтения

Открытие рабочей книги для чтения
-


**


# Открытие рабочей книги для чтения


Ниже приведен пример использования операции [OpenWbk](../OpenWbk.htm) для открытия рабочей книги
 только для чтения. В запросе передаются: экземпляр рабочей книги и шаблон
 извлечения данных. В ответе приходят запрошенные данные.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenWbk xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tOb xmlns="****">
  <id>S1!M!5505</id>  </tOb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<args>
  <openForEdit>false</openForEdit>  </args>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  <series>Get</series>[![](../../../minus.gif)](../../../#)<seriesFilter>
  <includeCollapsed>true</includeCollapsed>  </seriesFilter>
  <period>true</period>  <rubrs>true</rubrs>[![](../../../minus.gif)](../../../#)<rubrArg>
  <obInst>true</obInst>  <period>true</period>  </rubrArg>
  </metaGet>
  </tArg>
  </OpenWbk>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenWbkResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!W4</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>WBK_AD</i>  <n>Годовые данные</n>  <k>5505</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  <openArgs />
  </obInst>
  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**3**">
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>OBJ2</id>  <n>USA|A</n>  <vis>1</vis>  <kind>Calculate</kind>  <selectedUnit />
  <tag />
  <hasChildren>0</hasChildren>  <index>0</index>  <expanded>0</expanded>  <level>Year</level>  <childrenCount>0</childrenCount>  <visibleChildrenCount>0</visibleChildrenCount>  <flags>0</flags>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>4</k>  <id>OBJ4</id>  <n>Canada|A</n>  <vis>1</vis>  <kind>Calculate</kind>  <selectedUnit />
  <tag />
  <hasChildren>0</hasChildren>  <index>1</index>  <expanded>0</expanded>  <level>Year</level>  <childrenCount>0</childrenCount>  <visibleChildrenCount>0</visibleChildrenCount>  <flags>0</flags>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>6</k>  <id>OBJ6</id>  <n>Russia|A</n>  <vis>1</vis>  <kind>Calculate</kind>  <selectedUnit />
  <tag />
  <hasChildren>0</hasChildren>  <index>2</index>  <expanded>0</expanded>  <level>Year</level>  <childrenCount>0</childrenCount>  <visibleChildrenCount>0</visibleChildrenCount>  <flags>0</flags>  </it>
  </its>
  <displayDataAs>CalculatedValues</displayDataAs>  <autoRecalc>1</autoRecalc>  <createDerivedSeries>Default</createDerivedSeries>  <permanentData>0</permanentData>  </series>
[![](../../../minus.gif)](../../../#)<period>
  <start>1995-01-01</start>  <end>2015-01-01</end>  </period>
[![](../../../minus.gif)](../../../#)<rubrs>
[![](../../../minus.gif)](../../../#)<def>
  <k>5472</k>  <id>TS_DB</id>  <n>БД временных рядов</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<rubId>
  <id>S1!M!S!W4!Rubs!5472</id>  </rubId>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>TS_DB</i>  <n>БД временных рядов</n>  <k>5472</k>  <c>2822</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  <openArgs />
  </obInst>
[![](../../../minus.gif)](../../../#)<period>
  <startYear>1980</startYear>  <endYear>2020</endYear>  </period>
  </meta>
  </def>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>5472</k>  <id>TS_DB</id>  <n>БД временных рядов</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<rubId>
  <id>S1!M!S!W4!Rubs!5472</id>  </rubId>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>TS_DB</i>  <n>БД временных рядов</n>  <k>5472</k>  <c>2822</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  <openArgs />
  </obInst>
[![](../../../minus.gif)](../../../#)<period>
  <startYear>1980</startYear>  <endYear>2020</endYear>  </period>
  </meta>
  </it>
  </its>
  </rubrs>
  </meta>
  </OpenWbkResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenWbk" :
  {
   "tOb" :
    {
     "id" : "S1!M!5505"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "false"
      },
     "metaGet" :
      {
       "obInst" : "true",
       "useGridAutoAdjust" : "true",
       "series" : "Get",
       "seriesFilter" :
        {
         "includeCollapsed" : "true"
        },
       "period" : "true",
       "rubrs" : "true",
       "rubrArg" :
        {
         "obInst" : "true",
         "period" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "OpenWbkResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!W4"
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
         "i" : "WBK_AD",
         "n" : "Годовые данные",
         "k" : "5505",
         "c" : "2827",
         "p" : "5471",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        },
       "openArgs" : ""
      },
     "windowsPosition" : "Vertical",
     "hasPivot" : "0",
     "hasLaner" : "1",
     "series" :
      {
       "@count" : "3",
       "its" :
        {
         "it" :
          [
            {
             "k" : "2",
             "id" : "OBJ2",
             "n" : "USA|A",
             "vis" : "1",
             "kind" : "Calculate",
             "selectedUnit" : "",
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
             "k" : "4",
             "id" : "OBJ4",
             "n" : "Canada|A",
             "vis" : "1",
             "kind" : "Calculate",
             "selectedUnit" : "",
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
             "k" : "6",
             "id" : "OBJ6",
             "n" : "Russia|A",
             "vis" : "1",
             "kind" : "Calculate",
             "selectedUnit" : "",
             "tag" : "",
             "hasChildren" : "0",
             "index" : "2",
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
      },
     "period" :
      {
       "start" : "1995-01-01",
       "end" : "2015-01-01"
      },
     "rubrs" :
      {
       "def" :
        {
         "k" : "5472",
         "id" : "TS_DB",
         "n" : "БД временных рядов",
         "vis" : "1",
         "rubId" :
          {
           "id" : "S1!M!S!W4!Rubs!5472"
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
               "@ver" : "4",
               "@hf" : "0",
               "i" : "TS_DB",
               "n" : "БД временных рядов",
               "k" : "5472",
               "c" : "2822",
               "p" : "5471",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0",
               "trackElementDependents" : "0",
               "isPermanent" : "1",
               "isTemp" : "0"
              },
             "openArgs" : ""
            },
           "period" :
            {
             "startYear" : "1980",
             "endYear" : "2020"
            }
          }
        },
       "its" :
        {
         "it" :
          [
            {
             "k" : "5472",
             "id" : "TS_DB",
             "n" : "БД временных рядов",
             "vis" : "1",
             "rubId" :
              {
               "id" : "S1!M!S!W4!Rubs!5472"
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
                   "@ver" : "4",
                   "@hf" : "0",
                   "i" : "TS_DB",
                   "n" : "БД временных рядов",
                   "k" : "5472",
                   "c" : "2822",
                   "p" : "5471",
                   "h" : "0",
                   "hasPrv" : "0",
                   "ic" : "0",
                   "trackElementDependents" : "0",
                   "isPermanent" : "1",
                   "isTemp" : "0"
                  },
                 "openArgs" : ""
                },
               "period" :
                {
                 "startYear" : "1980",
                 "endYear" : "2020"
                }
              }
            }
          ]
        }
      }
    }
  }
}


public static OpenWbkResult OpenWbkForRead(MbId mb, string wbkId)
{
    var tWbk = new OpenWbk()
    { // Задаём параметры выполнения операции
        tArg = new OpenWbkArg()
        {// Указываем, что открываем рабочую книгу для чтения
            args = new WbkOpenArgs()
            {
                openForEdit = false
            },// Задаём шаблон извлечения данных
            metaGet = new WbkMdPattern()
            {
                //viewMode = true, // режим просмотра
                series = ListOperation.Get, // ряды данных
                seriesFilter = new LnSeriesFilter()
                {// Извлекаем свернутые ряды
                    includeCollapsed = true
                },
                period = true, // параметры периода отображения данных
                rubrs = true, // источники данных
                rubrArg = new RubMdPattern() {period = true}
            }
        },// Указываем рабочую книгу, с которой Выполнение операции
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, wbkId).k }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполнение операции
    var tResult = somClient.OpenWbk(tWbk);
    Console.WriteLine("Открыта рабочая книга: " + tResult.id.id);
    WbkMd openWbk = tResult.meta;
    LnPeriod period = openWbk.period;
    Console.WriteLine("Период отображения данных:");
    Console.WriteLine("".PadRight(3) + "- начало: " + period.start.ToShortDateString());
    Console.WriteLine("".PadRight(3) + "- окончание: " + period.end.ToShortDateString());
    //Console.WriteLine("Режим отображения рабочей книги: " + openWbk.viewMode.Value);
    Console.WriteLine("Количество рядов: " + openWbk.series.count.ToString());
    LnRubs rubrs = openWbk.rubrs;
    Console.WriteLine("Идентификатор источника, используемого по умолчанию: " + rubrs.def.id);
    Console.WriteLine("Все источники данных:");
    foreach (LnRub rub in (rubrs.its))
    {
        Console.Write("".PadRight(3) + "- имя '" + rub.n);
        Console.WriteLine("'; идентификатор '" + rub.id + "'");
        Console.WriteLine("".PadRight(6) + "начало календаря: " + rub.meta.period.startYear.ToString());
        Console.WriteLine("".PadRight(6) + "окончание календаря: " + rub.meta.period.endYear.ToString());
    }
    return tResult;
}


См. также:


[OpenWbk:
 операция](../OpenWbk.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
