# Получение матрицы с данными куба: Операция GetCube

Получение матрицы с данными куба: Операция GetCube
-


**


# Получение матрицы с данными куба


Ниже приведен пример использования операции [GetCube](../GetCube.htm)
 для получения матрицы с данными куба. В запросе передается моникёр открытого
 экземпляра куба и отметка по измерениям, в соответствии с которой будут
 извлекаться данные. В ответе приходит матрица ячеек с данными. Для каждой
 ячейкой будет присутствовать информация о координате куба и значение.
 При выполнении операции извлекаются только те ячейки, по которым имеются
 значения. Ячейки с пустыми значениями пропускаются.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetCube xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCube xmlns="****">
  <id>S1!M!S!C1</id>  </tCube>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<matrix>
  <cells>true</cells>[![](../../../minus.gif)](../../../#)<selection>
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
  <useCache>true</useCache>  </matrix>
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
[![](../../../minus.gif)](../../../#)<matrix xmlns="****">
[![](../../../minus.gif)](../../../#)<cells>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**44**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:1.2000**" dt="**1**" />
  <e e="**1**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**4**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:1.2000**" dt="**1**" />
  <e e="**2**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**23**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:1.2000**" dt="**1**" />
  <e e="**3**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**45**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:1.2000**" dt="**1**" />
  <e e="**4**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**5**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:1.2000**" dt="**1**" />
  <e e="**5**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**88**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:2.2000**" dt="**1**" />
  <e e="**1**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**8**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:2.2000**" dt="**1**" />
  <e e="**2**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**56**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:2.2000**" dt="**1**" />
  <e e="**3**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**45**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:2.2000**" dt="**1**" />
  <e e="**4**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**3**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:2.2000**" dt="**1**" />
  <e e="**5**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**132**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:3.2000**" dt="**1**" />
  <e e="**1**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**9**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:3.2000**" dt="**1**" />
  <e e="**2**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**54**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:3.2000**" dt="**1**" />
  <e e="**3**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**65**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:3.2000**" dt="**1**" />
  <e e="**4**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**195**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:4.2000**" dt="**1**" />
  <e e="**1**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**10**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:4.2000**" dt="**1**" />
  <e e="**2**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**54**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:4.2000**" dt="**1**" />
  <e e="**3**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
[![](../../../minus.gif)](../../../#)<d>
  <v v="**43**" dt="**3**" />
[![](../../../minus.gif)](../../../#)<c>
  <e e="**1**" dt="**2**" />
  <e e="**QUARTERS:4.2000**" dt="**1**" />
  <e e="**4**" dt="**2**" />
  <e e="**2**" dt="**2**" />
  </c>
  </d>
  </cells>
  </matrix>
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
     "matrix" :
      {
       "cells" : "true",
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
       "useCache" : "true"
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
   "matrix" :
    {
     "cells" :
      {
       "d" :
        [
          {
           "v" :
            {
             "@v" : "44",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:1.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "4",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:1.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "23",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:1.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "3",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "45",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:1.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "4",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "5",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:1.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "5",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "88",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:2.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "8",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:2.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "56",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:2.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "3",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "45",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:2.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "4",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "3",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:2.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "5",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "132",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:3.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "9",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:3.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "54",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:3.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "3",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "65",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:3.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "4",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "195",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:4.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "10",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:4.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "54",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:4.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "3",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          },
          {
           "v" :
            {
             "@v" : "43",
             "@dt" : "3"
            },
           "c" :
            {
             "e" :
              [
                {
                 "@e" : "1",
                 "@dt" : "2"
                },
                {
                 "@e" : "QUARTERS:4.2000",
                 "@dt" : "1"
                },
                {
                 "@e" : "4",
                 "@dt" : "2"
                },
                {
                 "@e" : "2",
                 "@dt" : "2"
                }
              ]
            }
          }
        ]
      }
    }
  }
}


public static GetCubeResult GetCubeMatrix(CubeId moniker, List sels)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tMeta = new GetCube()
    {
        tArg = new GetCubeArg()
        {
            matrix = new GetCubeMatrixArg()
            {
                selection = sels.ToArray(),
                cells = true
            }
        },
        tCube = moniker
    };
    //Получение матрицы с данными
    var result = somClient.GetCube(tMeta);
    return result;
}


См. также:


[GetCube](../GetCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
