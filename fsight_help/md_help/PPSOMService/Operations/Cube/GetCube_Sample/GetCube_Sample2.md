# Получение данных куба в виде таблицы: Операция GetCube

Получение данных куба в виде таблицы: Операция GetCube
-


**


# Получение данных куба в виде таблицы


Ниже приведен пример использования операции [GetCube](../GetCube.htm)
 для получения таблицы с данными куба. В запросе передается моникёр открытого
 экземпляра куба, отметка по измерениям и параметры расположения измерений.
 В ответе приходит таблица с данными. Для таблицы имеется информация о
 количестве строк и столбцов, а также значения ячеек. Ячейки представлены
 в виде одномерного массива, расположенные слева направо, сверху вниз.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetCube xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCube xmlns="****">
  <id>S1!M!S!C1</id>  </tCube>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<data>
  <cells>true</cells>  <emptyCells>false</emptyCells>[![](../../../minus.gif)](../../../#)<selection>
[![](../../../minus.gif)](../../../#)<it>
  <k>5858</k>  <id>FACTS</id>[![](../../../minus.gif)](../../../#)<sel>
  <elSelectOp>Select</elSelectOp>  <elRelative>All</elRelative>  </sel>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>112</k>  <id>CALENDAR</id>[![](../../../minus.gif)](../../../#)<sel>
  <elSelectOp>Unknown</elSelectOp>  <elRelative>Unknown</elRelative>[![](../../../minus.gif)](../../../#)<setCalendarPeriod>
  <active>true</active>  <start>2000-01-01</start>  <end>2000-12-01</end>[![](../../../minus.gif)](../../../#)<levels>
  <it>Quarter</it>  </levels>
  <append>false</append>  <findOutActive>false</findOutActive>  </setCalendarPeriod>
  </sel>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>116</k>  <id>DIM_1</id>[![](../../../minus.gif)](../../../#)<sel>
  <elSelectOp>Select</elSelectOp>  <elRelative>All</elRelative>  </sel>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>991</k>  <id>DIM_2</id>[![](../../../minus.gif)](../../../#)<sel>
  <elSelectOp>Select</elSelectOp>  <elRelative>All</elRelative>  </sel>
  </it>
  </selection>
[![](../../../minus.gif)](../../../#)<dims>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>5858</k>  <id>FACTS</id>  <position>Fixed</position>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>112</k>  <id>CALENDAR</id>  <position>Left</position>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>116</k>  <id>DIM_1</id>  <position>Top</position>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>991</k>  <id>DIM_2</id>  <position>Top</position>  </it>
  </its>
  </dims>
  </data>
  </tArg>
  </GetCube>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetCubeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!C1</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**31**" hf="**0**">
  <i>STD_CUBE</i>  <n>Куб</n>  <k>5857</k>  <c>1281</c>  <p>5845</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>  <supportsRub>0</supportsRub>  </meta>
[![](../../../minus.gif)](../../../#)<data xmlns="****" columnCount="**15**" rowCount="**4**">
[![](../../../minus.gif)](../../../#)<cells>
  <c v="**44**" dt="**3**" row="**0**" column="**1**" />
  <c v="**4**" dt="**3**" row="**0**" column="**4**" />
  <c v="**23**" dt="**3**" row="**0**" column="**7**" />
  <c v="**45**" dt="**3**" row="**0**" column="**10**" />
  <c v="**5**" dt="**3**" row="**0**" column="**13**" />
  <c v="**88**" dt="**3**" row="**1**" column="**1**" />
  <c v="**8**" dt="**3**" row="**1**" column="**4**" />
  <c v="**56**" dt="**3**" row="**1**" column="**7**" />
  <c v="**45**" dt="**3**" row="**1**" column="**10**" />
  <c v="**3**" dt="**3**" row="**1**" column="**13**" />
  <c v="**132**" dt="**3**" row="**2**" column="**1**" />
  <c v="**9**" dt="**3**" row="**2**" column="**4**" />
  <c v="**54**" dt="**3**" row="**2**" column="**7**" />
  <c v="**65**" dt="**3**" row="**2**" column="**10**" />
  <c v="**195**" dt="**3**" row="**3**" column="**1**" />
  <c v="**10**" dt="**3**" row="**3**" column="**4**" />
  <c v="**54**" dt="**3**" row="**3**" column="**7**" />
  <c v="**43**" dt="**3**" row="**3**" column="**10**" />
  </cells>
  </data>
  </GetCubeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetCube" :
  {
   "tCube" :
    {
     "id" : "S1!M!S!C1"
    },
   "tArg" :
    {
     "data" :
      {
       "cells" : "true",
       "emptyCells" : "false",
       "selection" :
        {
         "it" :
          [
            {
             "k" : "5858",
             "id" : "FACTS",
             "sel" :
              {
               "elSelectOp" : "Select",
               "elRelative" : "All"
              }
            },
            {
             "k" : "112",
             "id" : "CALENDAR",
             "sel" :
              {
               "elSelectOp" : "Unknown",
               "elRelative" : "Unknown",
               "setCalendarPeriod" :
                {
                 "active" : "true",
                 "start" : "2000-01-01",
                 "end" : "2000-12-01",
                 "levels" :
                  {
                   "it" : "Quarter"
                  },
                 "append" : "false",
                 "findOutActive" : "false"
                }
              }
            },
            {
             "k" : "116",
             "id" : "DIM_1",
             "sel" :
              {
               "elSelectOp" : "Select",
               "elRelative" : "All"
              }
            },
            {
             "k" : "991",
             "id" : "DIM_2",
             "sel" :
              {
               "elSelectOp" : "Select",
               "elRelative" : "All"
              }
            }
          ]
        },
       "dims" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "5858",
               "id" : "FACTS",
               "position" : "Fixed"
              },
              {
               "k" : "112",
               "id" : "CALENDAR",
               "position" : "Left"
              },
              {
               "k" : "116",
               "id" : "DIM_1",
               "position" : "Top"
              },
              {
               "k" : "991",
               "id" : "DIM_2",
               "position" : "Top"
              }
            ]
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetCubeResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!C1"
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
         "@ver" : "31",
         "@hf" : "0",
         "i" : "STD_CUBE",
         "n" : "Куб",
         "k" : "5857",
         "c" : "1281",
         "p" : "5845",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "supportsRub" : "0"
    },
   "data" :
    {
     "@rowCount" : "4",
     "@columnCount" : "15",
     "cells" :
      {
       "c" :
        [
          {
           "@v" : "44",
           "@dt" : "3",
           "@row" : "0",
           "@column" : "1"
          },
          {
           "@v" : "4",
           "@dt" : "3",
           "@row" : "0",
           "@column" : "4"
          },
          {
           "@v" : "23",
           "@dt" : "3",
           "@row" : "0",
           "@column" : "7"
          },
          {
           "@v" : "45",
           "@dt" : "3",
           "@row" : "0",
           "@column" : "10"
          },
          {
           "@v" : "5",
           "@dt" : "3",
           "@row" : "0",
           "@column" : "13"
          },
          {
           "@v" : "88",
           "@dt" : "3",
           "@row" : "1",
           "@column" : "1"
          },
          {
           "@v" : "8",
           "@dt" : "3",
           "@row" : "1",
           "@column" : "4"
          },
          {
           "@v" : "56",
           "@dt" : "3",
           "@row" : "1",
           "@column" : "7"
          },
          {
           "@v" : "45",
           "@dt" : "3",
           "@row" : "1",
           "@column" : "10"
          },
          {
           "@v" : "3",
           "@dt" : "3",
           "@row" : "1",
           "@column" : "13"
          },
          {
           "@v" : "132",
           "@dt" : "3",
           "@row" : "2",
           "@column" : "1"
          },
          {
           "@v" : "9",
           "@dt" : "3",
           "@row" : "2",
           "@column" : "4"
          },
          {
           "@v" : "54",
           "@dt" : "3",
           "@row" : "2",
           "@column" : "7"
          },
          {
           "@v" : "65",
           "@dt" : "3",
           "@row" : "2",
           "@column" : "10"
          },
          {
           "@v" : "195",
           "@dt" : "3",
           "@row" : "3",
           "@column" : "1"
          },
          {
           "@v" : "10",
           "@dt" : "3",
           "@row" : "3",
           "@column" : "4"
          },
          {
           "@v" : "54",
           "@dt" : "3",
           "@row" : "3",
           "@column" : "7"
          },
          {
           "@v" : "43",
           "@dt" : "3",
           "@row" : "3",
           "@column" : "10"
          }
        ]
      }
    }
  }
}


public static GetCubeResult GetCubeDataTable(CubeId moniker, List sels, PvtDims dimsPosition)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetCube()
    {
        tArg = new GetCubeArg()
        {
            data = new GetCubeDataArg()
            {
                selection = sels.ToArray(),
                dims = dimsPosition,
                cells = true,
                emptyCells = false
            }
        },
        tCube = moniker
    };
    //Получение таблицы с данными
    var result = somClient.GetCube(tGet);
    return result;
}


См. также:


[GetCube](../GetCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
