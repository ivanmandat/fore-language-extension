# Удаление ряда из рабочей книги

Удаление ряда из рабочей книги
-


**


# Удаление ряда из рабочей книги


Ниже приведен пример использования операции [SetWbkMd](../SetWbkMd.htm)
 для удаления ряда из рабочей книги. В запросе передаются: экземпляр открытой
 рабочей книги, шаблон изменения данных, удаляемый ряд и шаблон извлечения
 изменённых данных. В ответе приходят ряды, оставшиеся в рабочей книге.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetWbkMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWbk xmlns="****">
  <id>S1!M!S!W11</id>  </tWbk>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <refresh />
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>false</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  <series>Remove</series>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<series>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>6</k>  <id>OBJ6</id>  <n>Russia|A</n>  <vis>true</vis>  <kind>Calculate</kind>  <dependencies />
  <selectedUnit />
  <tag />
  <hasChildren>false</hasChildren>  <index>0</index>  <expanded>false</expanded>  <level>Year</level>  <childrenCount>0</childrenCount>  <visibleChildrenCount>0</visibleChildrenCount>  <flags>0</flags>  </it>
  </its>
  </series>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <title>false</title>  <useGridAutoAdjust>true</useGridAutoAdjust>  <series>Get</series>  <seriesDependencies>false</seriesDependencies>  <seriesDependents>false</seriesDependents>  <seriesAtts>false</seriesAtts>  <seriesPrimaryAttsForEmpty>false</seriesPrimaryAttsForEmpty>  <seriesDisplayParams>false</seriesDisplayParams>  </metaGet>
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
  <id>S1!M!S!W11</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>WBK_DEL</i>  <n>Данные по регионам</n>  <k>5772</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**1**">
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>10</k>  <id>OBJ10</id>  <n>Geometric trend(France|A)</n>  <vis>1</vis>  <kind>Calculate</kind>  <selectedUnit />
  <tag />
  <hasChildren>0</hasChildren>  <index>0</index>  <expanded>0</expanded>  <level>Year</level>  <childrenCount>0</childrenCount>  <visibleChildrenCount>0</visibleChildrenCount>  <flags>0</flags>  </it>
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
     "id" : "S1!M!S!W11"
    },
   "tArg" :
    {
     "refresh" : "",
     "pattern" :
      {
       "obInst" : "false",
       "useGridAutoAdjust" : "true",
       "series" : "Remove"
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
               "k" : "6",
               "id" : "OBJ6",
               "n" : "Russia|A",
               "vis" : "true",
               "kind" : "Calculate",
               "dependencies" : "",
               "selectedUnit" : "",
               "tag" : "",
               "hasChildren" : "false",
               "index" : "0",
               "expanded" : "false",
               "level" : "Year",
               "childrenCount" : "0",
               "visibleChildrenCount" : "0",
               "flags" : "0"
              }
            ]
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "title" : "false",
       "useGridAutoAdjust" : "true",
       "series" : "Get",
       "seriesDependencies" : "false",
       "seriesDependents" : "false",
       "seriesAtts" : "false",
       "seriesPrimaryAttsForEmpty" : "false",
       "seriesDisplayParams" : "false"
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
     "id" : "S1!M!S!W11"
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
         "i" : "WBK_DEL",
         "n" : "Данные по регионам",
         "k" : "5772",
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
       "@count" : "1",
       "its" :
        {
         "it" :
          [
            {
             "k" : "10",
             "id" : "OBJ10",
             "n" : "Geometric trend(France|A)",
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


public static SetWbkMdResult SetWbkDelSerie(WbkId wbkId, WbkMd wbk)
{
    if (!wbk.hasLaner.Value){return null;};
    // Поулчаем 1-й ряд в рабочей книге
    LnSerie delSserie = wbk.series.its.GetValue(0) as LnSerie;

    // Задаём параметры выполнения операции
    var tOp = new SetWbkMd
    {   // Указываем изменямую рабочую книгу
        tWbk = wbkId,
        tArg = new SetWbkMdArg()
        {   // Задаём шаблон изменения данных
            pattern = new WbkMdPattern()
            {
                obInst = false,
                series = ListOperation.Remove
            },// Задаём параметры изменения данных
            meta = new WbkMd()
            {   // Задаём удаляемый ряд
                series = new LnSeries()
                {
                    its = new LnSerie[]{delSserie}
                }
            },
            refresh = new EaxRefresh { },
            // Задаем шаблон извлечения изменённых данных
            metaGet = new WbkMdPattern
            {
                title = false,
                series = ListOperation.Get,
                seriesAtts = false,
                seriesPrimaryAttsForEmpty = false,
                seriesDependencies = false,
                seriesDependents = false,
                seriesDisplayParams = false
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполнение операции
    var sRes = somClient.SetWbkMd(tOp);
    return sRes;
}


См. также:


[SetWbkMd:
 Операция](../SetWbkMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
