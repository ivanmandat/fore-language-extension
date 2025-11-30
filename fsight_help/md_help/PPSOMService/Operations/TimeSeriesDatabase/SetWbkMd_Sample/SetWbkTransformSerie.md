# Применение преобразования к ряду

Применение преобразования к ряду
-


**


# Применение преобразования к ряду


Ниже приведен пример использования операции [SetWbkMd](../SetWbkMd.htm)
 для преобразования значений ряда. В запросе передаются: экземпляр открытой
 рабочей книги, шаблон изменения данных, параметры преобразования ряда
 и шаблон извлечения изменённых данных. В ответе приходит описание рядов
 в рабочей книге.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetWbkMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWbk xmlns="****">
  <id>S1!M!S!W12</id>  </tWbk>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <refresh />
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>false</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  <series>Change</series>  <seriesDisplayParams>true</seriesDisplayParams>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<series>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>OBJ2</id>  <n>USA|A</n>  <vis>true</vis>  <kind>Calculate</kind>  <dependencies />
  <selectedUnit />
[![](../../../minus.gif)](../../../#)<displayParams>
  <inversion>Diff</inversion>  <inversionLag>PrecidingYear</inversionLag>  <previousInversionLag>3</previousInversionLag>  <setDefault>false</setDefault>  </displayParams>
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
  <id>S1!M!S!W12</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>WBK_AD</i>  <n>Годовые данные</n>  <k>5505</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**3**">
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
     "id" : "S1!M!S!W12"
    },
   "tArg" :
    {
     "refresh" : "",
     "pattern" :
      {
       "obInst" : "false",
       "useGridAutoAdjust" : "true",
       "series" : "Change",
       "seriesDisplayParams" : "true"
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
               "k" : "2",
               "id" : "OBJ2",
               "n" : "USA|A",
               "vis" : "true",
               "kind" : "Calculate",
               "dependencies" : "",
               "selectedUnit" : "",
               "displayParams" :
                {
                 "inversion" : "Diff",
                 "inversionLag" : "PrecidingYear",
                 "previousInversionLag" : "3",
                 "setDefault" : "false"
                },
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
     "id" : "S1!M!S!W12"
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
        }
      },
     "dirty" : "1",
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
      }
    }
  }
}


public static SetWbkMdResult SetWbkTransformSerie(WbkId wbkId, WbkMd wbk)
{
    if (!wbk.hasLaner.Value) { return null; };
    // Поулчаем 1-й ряд в рабочей книге
    LnSerie transfSerie = wbk.series.its.GetValue(0) as LnSerie;
    // Задаём параметры преобразования значений ряда
    transfSerie.displayParams = new LnSerieDisplayParams();
    LnSerieDisplayParams par = transfSerie.displayParams;
    par.inversion = TsInversionType.Diff;
    par.inversionLag = TsInversionLag.PrecidingYear;
    par.previousInversionLag = 3;
    par.setDefault = false;
    // Задаём параметры выполнения операции
    var tOp = new SetWbkMd
    {   // Указываем изменяемую рабочую книгу
        tWbk = wbkId,
        tArg = new SetWbkMdArg()
        {   // Задаём шаблон изменения данных
            pattern = new WbkMdPattern()
            {
                obInst = false,
                series = ListOperation.Change,
                seriesDisplayParams = true
            },// Задаём параметры изменения данных
            meta = new WbkMd()
            {   // Задаём параметры преобразования данных
                series = new LnSeries()
                {
                    its = new LnSerie[]{transfSerie}
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
