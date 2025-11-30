# Получение настроек для дерева рядов рабочей книги

Получение настроек для дерева рядов рабочей книги
-


**


# Получение настроек для дерева рядов рабочей книги


Ниже приведен пример использования операции [GetWbkMd](../GetWbkMd.htm)
 для получения настроек для дерева рядов рабочей книги. В запросе передаются:
 экземпляр открытой рабочей книги и шаблон извлечения данных. В ответе
 приходят запрошенные настройки.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetWbkMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWbk xmlns="****">
  <id>S1!M!S!W9</id>  </tWbk>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  <attrsTreeOptions>Get</attrsTreeOptions>  </pattern>
  </tArg>
  </GetWbkMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetWbkMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!W9</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>WBK_STYLE</i>  <n>Прогноз</n>  <k>5646</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**5**">
  <its />
  </series>
[![](../../../minus.gif)](../../../#)<attrsTreeOptions>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>5654</k>  <id>TS_DB_STAT</id>  <n>Данные статистики</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<rubricator ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>TS_DB_STAT</i>  <n>Данные статистики</n>  <k>5654</k>  <c>2822</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </rubricator>
  <hierAttrs><Breadcrumb><ITEMS VER="1"><ITEM Version="2" NAME="Страна (Отмечено: 5)" HASLEAF="FALSE" DATA="9" PERMANENT="FALSE" HINT="" USERDATA="0:" NAMINGS="" SORTTYPE="0" SORTATTRIBUTE="" SORTDIRECTION="0"><EXVAL ISARRAY="TRUE"><ITEM VALUE="3:36"/><ITEM VALUE="3:37"/><ITEM VALUE="3:38"/><ITEM VALUE="3:393"/><ITEM VALUE="3:394"/></EXVAL></ITEM></ITEMS></Breadcrumb>
</hierAttrs>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>5472</k>  <id>TS_DB</id>  <n>БД временных рядов</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<rubricator ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>TS_DB</i>  <n>БД временных рядов</n>  <k>5472</k>  <c>2822</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </rubricator>
  <hierAttrs><Breadcrumb><ITEMS VER="1"><ITEM Version="2" NAME="Страна" HASLEAF="FALSE" DATA="9" PERMANENT="FALSE" HINT="" USERDATA="0:" NAMINGS="" SORTTYPE="0" SORTATTRIBUTE="" SORTDIRECTION="0"/></ITEMS></Breadcrumb>
</hierAttrs>  </it>
  </its>
  <vis>1</vis>  </attrsTreeOptions>
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
     "id" : "S1!M!S!W9"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "useGridAutoAdjust" : "true",
       "attrsTreeOptions" : "Get"
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
     "id" : "S1!M!S!W9"
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
         "i" : "WBK_STYLE",
         "n" : "Прогноз",
         "k" : "5646",
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
       "@count" : "5",
       "its" : ""
      },
     "attrsTreeOptions" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "5654",
             "id" : "TS_DB_STAT",
             "n" : "Данные статистики",
             "vis" : "1",
             "rubricator" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "0",
               "@hf" : "0",
               "i" : "TS_DB_STAT",
               "n" : "Данные статистики",
               "k" : "5654",
               "c" : "2822",
               "p" : "5471",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0",
               "trackElementDependents" : "0"
              },
             "hierAttrs" : "<Breadcrumb><ITEMS VER="1"><ITEM Version="2" NAME="Страна (Отмечено: 5)" HASLEAF="FALSE" DATA="9" PERMANENT="FALSE" HINT="" USERDATA="0:" NAMINGS="" SORTTYPE="0" SORTATTRIBUTE="" SORTDIRECTION="0"><EXVAL ISARRAY="TRUE"><ITEM VALUE="3:36"\/><ITEM VALUE="3:37"\/><ITEM VALUE="3:38"\/><ITEM VALUE="3:393"\/><ITEM VALUE="3:394"\/><\/EXVAL><\/ITEM><\/ITEMS><\/Breadcrumb>
"
            },
            {
             "k" : "5472",
             "id" : "TS_DB",
             "n" : "БД временных рядов",
             "vis" : "1",
             "rubricator" :
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
               "trackElementDependents" : "0"
              },
             "hierAttrs" : "<Breadcrumb><ITEMS VER="1"><ITEM Version="2" NAME="Страна" HASLEAF="FALSE" DATA="9" PERMANENT="FALSE" HINT="" USERDATA="0:" NAMINGS="" SORTTYPE="0" SORTATTRIBUTE="" SORTDIRECTION="0"\/><\/ITEMS><\/Breadcrumb>
"
            }
          ]
        },
       "vis" : "1"
      }
    }
  }
}


public static GetWbkMdResult GetWbkAttTreeOpt(WbkId wbk)
{// Задаём параметры выполнения операции
    var tOp = new GetWbkMd
    {
        tWbk = wbk,
        tArg = new GetWbkMdArg
        {// Задаём шаблон извлечения данных
            pattern = new WbkMdPattern
            {
                attrsTreeOptions = ListOperation.Get
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполнение операции
    var gRes = somClient.GetWbkMd(tOp);
    // Выводим настройки дерева рядов в окно консоли
    WbkAttrsTreeOptions opt = gRes.meta.attrsTreeOptions;
    foreach (WbkAttrsTreeOption it in opt.its)
    {
        Console.WriteLine("Настройки для источника данных '"+it.rubricator.n+"':");
        Console.WriteLine("".PadRight(3) + it.hierAttrs);
    };
    return gRes;
}


См. также:


[GetWbkMd:
 Операция](../GetWbkMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
