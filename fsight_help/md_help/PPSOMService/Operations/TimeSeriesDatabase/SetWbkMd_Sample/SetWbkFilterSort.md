# Фильтрация и сортировка данных

Фильтрация и сортировка данных
-


**


# Фильтрация и сортировка данных


Ниже приведен пример использования операции [SetWbkMd](../SetWbkMd.htm) для изменения параметров
 сортировки и фильтрации данных в рабочей книге. В запросе передаются:
 экземпляр открытой рабочей книги, изменяемые параметры сортировки и фильтрации,
 шаблоны изменения и извлечения данных.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetWbkMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWbk xmlns="****">
  <id>S1!M!S!W5</id>  </tWbk>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <refresh />
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <filter>true</filter>  <sorting>true</sorting>  <useGridAutoAdjust>true</useGridAutoAdjust>  <lanerFilter>true</lanerFilter>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<sorting>
  <reverseHeader>false</reverseHeader>[![](../../../minus.gif)](../../../#)<data>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it direction="**Desc**">
[![](../../../minus.gif)](../../../#)<element>
  <key>YEARS:1.1.2000</key>  </element>
  </it>
  </its>
  </data>
  </sorting>
[![](../../../minus.gif)](../../../#)<lanerFilter>
  <suppressEmpty>true</suppressEmpty>  <suppressEmptyArea>SerieBounds</suppressEmptyArea>  </lanerFilter>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  </metaGet>
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
  <id>S1!M!S!W5</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>WBK_AD_FS</i>  <n>Годовые данные для фильтрации и сортировки</n>  <k>5520</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**3**">
  <its />
  </series>
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
     "id" : "S1!M!S!W5"
    },
   "tArg" :
    {
     "refresh" : "",
     "pattern" :
      {
       "obInst" : "true",
       "filter" : "true",
       "sorting" : "true",
       "useGridAutoAdjust" : "true",
       "lanerFilter" : "true"
      },
     "meta" :
      {
       "sorting" :
        {
         "reverseHeader" : "false",
         "data" :
          {
           "its" :
            {
             "it" :
              [
                {
                 "@direction" : "Desc",
                 "element" :
                  {
                   "key" : "YEARS:1.1.2000"
                  }
                }
              ]
            }
          }
        },
       "lanerFilter" :
        {
         "suppressEmpty" : "true",
         "suppressEmptyArea" : "SerieBounds"
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "useGridAutoAdjust" : "true"
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
     "id" : "S1!M!S!W5"
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
         "i" : "WBK_AD_FS",
         "n" : "Годовые данные для фильтрации и сортировки",
         "k" : "5520",
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
       "its" : ""
      }
    }
  }
}


public static SetWbkMdResult SetWbkFilterSort(WbkId wbk, Boolean saveAfter)
{// Задаём параметры выполнения операции
    var tOp = new SetWbkMd
    {
        tWbk = wbk,
        tArg = new SetWbkMdArg
        {   // Задаём шаблон изменения данных
            pattern = new WbkMdPattern
            {
                sorting = true,
                lanerFilter = true,
                filter = true,
            },
            // Задаём изменяемые данные
            meta = new WbkMd()
            {// Задаём параметры сортировки
                sorting = new LnSorting()
                {
                    reverseHeader = false,
                    data = new LnDataSorting()
                    {
                        its = new LnDataElSort[]
                        {
                            new LnDataElSort()
                            {
                                direction = SortDirection.Desc,
                                directionSpecified = true,
                                element = new ElKey(){key = "YEARS:1.1.2000"}
                            }
                        }
                    }
                },
                lanerFilter = new LnFilter()
                {
                    suppressEmpty = true,
                    suppressEmptyArea = LnSuppressEmptyArea.SerieBounds
                }
            },
            // Задаём шаблон извлечения и обновления изменённых данных
            metaGet = new WbkMdPattern(),
            refresh = new EaxRefresh()
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполнение операции
    var sRes = somClient.SetWbkMd(tOp);
    Console.WriteLine("Изменена рабочая книга: " + sRes.meta.obInst.obDesc.n);
    if (saveAfter)
    {
        SaveObject(sRes.id.id);
    }
    return sRes;
}


См. также:


[SetWbkMd:
 Операция](../SetWbkMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
