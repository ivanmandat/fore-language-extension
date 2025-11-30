# Открытие рабочей книги с изменением периода отображения данных

Открытие рабочей книги с изменением периода отображения данных
-


**


# Открытие рабочей книги с изменением периода отображения данных


Ниже приведен пример использования операции [OpenWbk](../OpenWbk.htm) для открытия рабочей книги
 с заданием периода отображения данных. В запросе передаются: экземпляр
 рабочей книги и период, который необходимо установить. В ответе приходит
 моникёр открытого экземпляра рабочей книги.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenWbk xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tOb xmlns="****">
  <id>S1!M!5505</id>  </tOb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<args>
  <openForEdit>true</openForEdit>  </args>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  <period>true</period>  </metaGet>
[![](../../../minus.gif)](../../../#)<metaSet>
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  <period>true</period>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<period>
  <start>1995-01-01</start>  <end>2015-01-01</end>  </period>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  <period>true</period>  </metaGet>
  </metaSet>
  </tArg>
  </OpenWbk>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenWbkResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!W3</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>WBK_AD</i>  <n>Годовые данные</n>  <k>5505</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**3**">
  <its />
  </series>
[![](../../../minus.gif)](../../../#)<period>
  <start>1995-01-01</start>  <end>2015-01-01</end>  </period>
  </meta>
[![](../../../minus.gif)](../../../#)<metaSet xmlns="****">
[![](../../../minus.gif)](../../../#)<id>
  <id>S1!M!S!W3</id>  </id>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>WBK_AD</i>  <n>Годовые данные</n>  <k>5505</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**3**">
  <its />
  </series>
[![](../../../minus.gif)](../../../#)<period>
  <start>1995-01-01</start>  <end>2015-01-01</end>  </period>
  </meta>
  </metaSet>
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
       "openForEdit" : "true"
      },
     "metaGet" :
      {
       "obInst" : "true",
       "useGridAutoAdjust" : "true",
       "period" : "true"
      },
     "metaSet" :
      {
       "pattern" :
        {
         "obInst" : "true",
         "useGridAutoAdjust" : "true",
         "period" : "true"
        },
       "meta" :
        {
         "period" :
          {
           "start" : "1995-01-01",
           "end" : "2015-01-01"
          }
        },
       "metaGet" :
        {
         "obInst" : "true",
         "useGridAutoAdjust" : "true",
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
     "id" : "S1!M!S!W3"
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
     "dirty" : "0",
     "windowsPosition" : "Vertical",
     "hasPivot" : "0",
     "hasLaner" : "1",
     "series" :
      {
       "@count" : "3",
       "its" : ""
      },
     "period" :
      {
       "start" : "1995-01-01",
       "end" : "2015-01-01"
      }
    },
   "metaSet" :
    {
     "id" :
      {
       "id" : "S1!M!S!W3"
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
       "dirty" : "0",
       "windowsPosition" : "Vertical",
       "hasPivot" : "0",
       "hasLaner" : "1",
       "series" :
        {
         "@count" : "3",
         "its" : ""
        },
       "period" :
        {
         "start" : "1995-01-01",
         "end" : "2015-01-01"
        }
      }
    }
  }
}


public static OpenWbkResult OpenWbkForEdit(MbId mb, string wbkId)
{
    var tWbk = new OpenWbk()
    { // Задаём параметры выполнения операции
        tArg = new OpenWbkArg()
        {// Указываем, что открываем рабочую книгу для редактирования
            args = new WbkOpenArgs()
            {
                openForEdit = true
            },// Задаём шаблон извлечения данных
            metaGet = new WbkMdPattern()
            {
                period = true
            },// Задаём параметры изменения данных
            metaSet = new SetWbkMdArg()
            {   // Задаём шаблон изменения данных
                pattern = new WbkMdPattern()
                {
                    period = true
                },// Задаём изменяемые данные
                meta = new WbkMd()
                {// Задаём параметры изменения периода отображения
                    period = new LnPeriod()
                    {
                        start = DateTime.Parse("01.01.1995"),
                        end = DateTime.Parse("01.01.2015")
                    }
                },// Задаём шаблон извлечения изменённых данных
                metaGet = new WbkMdPattern()
                {
                    period = true
                }
            }
        },// Указываем рабочую книгу, с которой Выполнение операции
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, wbkId).k }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполнение операции
    var tResult = somClient.OpenWbk(tWbk);
    Console.WriteLine("Изменена рабочая книга: " + tResult.id.id);
    LnPeriod period = tResult.meta.period;
    Console.WriteLine("Прежний период отображения данных:");
    Console.WriteLine("".PadRight(3) + "- начало: " + period.start.ToShortDateString());
    Console.WriteLine("".PadRight(3) + "- окончание: " + period.end.ToShortDateString());
    period = tResult.metaSet.meta.period;
    Console.WriteLine("Новый период отображения данных:");
    Console.WriteLine("Прежний период отображения данных:");
    Console.WriteLine("".PadRight(3) + "- начало: " + period.start.ToShortDateString());
    Console.WriteLine("".PadRight(3) + "- окончание: " + period.end.ToShortDateString());
    return tResult;
}


См. также:


[OpenWbk:
 Операция](../OpenWbk.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
