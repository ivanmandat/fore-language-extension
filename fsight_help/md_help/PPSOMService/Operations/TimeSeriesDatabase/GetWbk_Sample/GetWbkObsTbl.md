# Получение значений рядов

Получение значений рядов
-


**


# Получение значений рядов


Ниже приведен пример использования операции [GetWbkMd](../GetWbkMd.htm) для получения значений
 для рядов из рабочей книги. В запросе передаются: экземпляр открытой рабочей
 книги, шаблоны извлечения данных из рабочей книги. В ответе приходят запрашиваемые
 данные.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetWbkMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWbk xmlns="****">
  <id>S1!M!S!W8</id>  </tWbk>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>[![](../../../minus.gif)](../../../#)<observationsTable>
  <cells>true</cells>  <emptyCells>false</emptyCells>  <getCellDate>false</getCellDate>[![](../../../minus.gif)](../../../#)<attributes>
[![](../../../minus.gif)](../../../#)<it>
  <k>-1</k>  <id>DL</id>  </it>
  </attributes>
  <getCellText>true</getCellText>  </observationsTable>
[![](../../../minus.gif)](../../../#)<cellsTable>
  <cells>true</cells>  <emptyCells>false</emptyCells>  <getCellDate>true</getCellDate>  </cellsTable>
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
  <id>S1!M!S!W8</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>WBK_OBS</i>  <n>Смешанные данные</n>  <k>5624</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**3**">
  <its />
  </series>
[![](../../../minus.gif)](../../../#)<observationsTable columnCount="**54**" rowCount="**3**">
[![](../../../minus.gif)](../../../#)<cells>
  <c v="**1**" dt="**2**" row="**0**" column="**0**" att="**0**" text="**Годовая**" />
  <c v="**1**" dt="**2**" row="**0**" column="**17**" att="**0**" text="**Годовая**" />
  <c v="**1**" dt="**2**" row="**0**" column="**34**" att="**0**" text="**Годовая**" />
  <c v="**1**" dt="**2**" row="**0**" column="**51**" att="**0**" text="**Годовая**" />
  </cells>
  </observationsTable>
[![](../../../minus.gif)](../../../#)<cellsTable columnCount="**54**" rowCount="**3**">
[![](../../../minus.gif)](../../../#)<cells>
  <c v="**1.64712876**" dt="**3**" row="**0**" column="**0**" date="**2000-01-01**" />
  <c v="**1.57305128**" dt="**3**" row="**0**" column="**17**" date="**2001-01-01**" />
  <c v="**1.39197321**" dt="**3**" row="**0**" column="**34**" date="**2002-01-01**" />
  <c v="**1.12858684**" dt="**3**" row="**0**" column="**51**" date="**2003-01-01**" />
  </cells>
  </cellsTable>
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
     "id" : "S1!M!S!W8"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "useGridAutoAdjust" : "true",
       "observationsTable" :
        {
         "cells" : "true",
         "emptyCells" : "false",
         "getCellDate" : "false",
         "attributes" :
          {
           "it" :
            {
             "k" : "-1",
             "id" : "DL"
            }
          },
         "getCellText" : "true"
        },
       "cellsTable" :
        {
         "cells" : "true",
         "emptyCells" : "false",
         "getCellDate" : "true"
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
     "id" : "S1!M!S!W8"
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
         "i" : "WBK_OBS",
         "n" : "Смешанные данные",
         "k" : "5624",
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
      },
     "observationsTable" :
      {
       "@rowCount" : "3",
       "@columnCount" : "54",
       "cells" :
        {
         "c" :
          [
            {
             "@text" : "Годовая",
             "@v" : "1",
             "@dt" : "2",
             "@row" : "0",
             "@att" : "0",
             "@column" : "0"
            },
            {
             "@text" : "Годовая",
             "@v" : "1",
             "@dt" : "2",
             "@row" : "0",
             "@att" : "0",
             "@column" : "17"
            },
            {
             "@text" : "Годовая",
             "@v" : "1",
             "@dt" : "2",
             "@row" : "0",
             "@att" : "0",
             "@column" : "34"
            },
            {
             "@text" : "Годовая",
             "@v" : "1",
             "@dt" : "2",
             "@row" : "0",
             "@att" : "0",
             "@column" : "51"
            }
          ]
        }
      },
     "cellsTable" :
      {
       "@rowCount" : "3",
       "@columnCount" : "54",
       "cells" :
        {
         "c" :
          [
            {
             "@v" : "1.64712876",
             "@dt" : "3",
             "@row" : "0",
             "@column" : "0",
             "@date" : "2000-01-01"
            },
            {
             "@v" : "1.57305128",
             "@dt" : "3",
             "@row" : "0",
             "@column" : "17",
             "@date" : "2001-01-01"
            },
            {
             "@v" : "1.39197321",
             "@dt" : "3",
             "@row" : "0",
             "@column" : "34",
             "@date" : "2002-01-01"
            },
            {
             "@v" : "1.12858684",
             "@dt" : "3",
             "@row" : "0",
             "@column" : "51",
             "@date" : "2003-01-01"
            }
          ]
        }
      }
    }
  }
}


public static GetWbkMdResult GetWbkObsTbl(WbkId wbk)
{// Задаём параметры выполнения операции
    var tOp = new GetWbkMd
    {
        tWbk = wbk,
        tArg = new GetWbkMdArg
        {// Задаём шаблон извлечения данных
            pattern = new WbkMdPattern
            {
                observationsTable = new WbkObservationsTablePattern()
                {
                    getCellDate = false,
                    getCellText = true,
                    attributes = new ItKey[]
                    {
                        new ItKey()
                        {
                            id = "DL",
                            k = uint.MaxValue
                        }
                    },
                    cells = true,
                    emptyCells = false,
                },
                cellsTable = new WbkCellsTablePattern()
                {
                    getCellDate = true,
                    cells = true,
                    emptyCells = false
                }
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполнение операции
    var gRes = somClient.GetWbkMd(tOp);
    // Выводим значения таблицы данных в окно
    ulong row = 10;
    WbkCellsTable tbl = gRes.meta.cellsTable;
    WbkObservationsTable obsTbl = gRes.meta.observationsTable;
    foreach (PvtTableCell cell in tbl.cells)
    {
        if (row != cell.row)
        {
            row = cell.row; Console.WriteLine("---------РЯД " + (row+1) + "---------");
            PvtTableCell с = obsTbl.cells.Single(it => it.row == cell.row && it.column == cell.column);
            Console.WriteLine("динамика: " + с.text);
            Console.WriteLine("значения:");
        };
        Console.Write(cell.date.ToShortDateString() + ": ");
        Console.WriteLine(cell.v);
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
