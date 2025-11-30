# Изменение структуры вычисляемого куба

Изменение структуры вычисляемого куба
-


**


# Изменение структуры вычисляемого куба


Ниже приведён пример использования операции [SetCube](../SetCube.htm)
 для изменения структуры вычисляемого куба. В вычисляемом кубе будут осуществлено
 перемещение первого измерения, а также задан тип координат, по которым
 будет производиться расчёт, указана возможность сохранять пустые значения
 в куб. В запросе передаются необходимые настройки для внесения изменений.
 В ответе приходит обновлённая информация о вычисляемом кубе и его измерениях.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetCube xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCube xmlns="****">
  <id>S1!M!S!C2</id>  </tCube>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <dims>Change</dims>  <calcCube>true</calcCube>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<dims>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>6964</k>  <id>FACTS</id>  <vis>true</vis>[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**false**" isLink="**false**" ds="****" ver="**3**" hf="**false**">
  <i>FACTS</i>  <n>Факты</n>  <k>6964</k>  <c>1028</c>  <p>6962</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  <trackElementDependents>false</trackElementDependents>  </obDesc>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>112</k>  <id>CALENDAR</id>  <vis>true</vis>[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**false**" isLink="**false**" ds="****" ver="**8**" hf="**false**">
  <i>CALENDAR</i>  <n>Календарь</n>  <k>112</k>  <c>1026</c>  <p>103</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  <trackElementDependents>false</trackElementDependents>  </obDesc>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>116</k>  <id>DIM_1</id>  <vis>true</vis>[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**false**" isLink="**false**" ds="****" ver="**3**" hf="**false**">
  <i>DIM_1</i>  <n>Dim_1</n>  <k>116</k>  <c>1025</c>  <p>103</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  <trackElementDependents>false</trackElementDependents>  </obDesc>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>991</k>  <id>DIM_2</id>  <vis>true</vis>[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**false**" isLink="**false**" ds="****" ver="**1**" hf="**false**">
  <i>DIM_2</i>  <n>Dim_2</n>  <k>991</k>  <c>1025</c>  <p>10529</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  <trackElementDependents>false</trackElementDependents>  </obDesc>
  </it>
  </its>
[![](../../../minus.gif)](../../../#)<move>
  <indexFrom>0</indexFrom>  <indexTo>1</indexTo>  </move>
  </dims>
[![](../../../minus.gif)](../../../#)<calcCube>
  <includeNulls>true</includeNulls>  <evaluateOnly>Selected</evaluateOnly>  </calcCube>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <dims>Get</dims>  <calcCube>true</calcCube>  </metaGet>
  </tArg>
  </SetCube>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetCubeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!C2</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**5**" hf="**0**">
  <i>CALC_CUBE</i>  <n>Вычисляемый куб</n>  <k>6962</k>  <c>1282</c>  <p>5845</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>[![](../../../minus.gif)](../../../#)<dims>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>112</k>  <id>CALENDAR</id>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**8**" hf="**0**">
  <i>CALENDAR</i>  <n>Календарь</n>  <k>112</k>  <c>1026</c>  <p>103</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </obDesc>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>6964</k>  <id>FACTS</id>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**3**" hf="**0**">
  <i>FACTS</i>  <n>Факты</n>  <k>6964</k>  <c>1028</c>  <p>6962</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </obDesc>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>116</k>  <id>DIM_1</id>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**3**" hf="**0**">
  <i>DIM_1</i>  <n>Dim_1</n>  <k>116</k>  <c>1025</c>  <p>103</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </obDesc>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>991</k>  <id>DIM_2</id>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>DIM_2</i>  <n>Dim_2</n>  <k>991</k>  <c>1025</c>  <p>10529</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </obDesc>
  </it>
  </its>
  </dims>
[![](../../../minus.gif)](../../../#)<calcCube>
  <factsDimId>S1!M!S!C2!FactDim</factsDimId>  <externalFactDimension>0</externalFactDimension>  <formulasDestinationVisible>1</formulasDestinationVisible>  <cacheFormulas>1</cacheFormulas>  <includeNulls>1</includeNulls>  <evaluateOnly>Selected</evaluateOnly>  </calcCube>
  </meta>
  </SetCubeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetCube" :
  {
   "tCube" :
    {
     "id" : "S1!M!S!C2"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "dims" : "Change",
       "calcCube" : "true"
      },
     "meta" :
      {
       "dims" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "6964",
               "id" : "FACTS",
               "vis" : "true",
               "obDesc" :
                {
                 "@ds" : "",
                 "@isShortcut" : "false",
                 "@isLink" : "false",
                 "@ver" : "3",
                 "@hf" : "false",
                 "i" : "FACTS",
                 "n" : "Факты",
                 "k" : "6964",
                 "c" : "1028",
                 "p" : "6962",
                 "h" : "false",
                 "hasPrv" : "false",
                 "ic" : "false",
                 "trackElementDependents" : "false"
                }
              },
              {
               "k" : "112",
               "id" : "CALENDAR",
               "vis" : "true",
               "obDesc" :
                {
                 "@ds" : "",
                 "@isShortcut" : "false",
                 "@isLink" : "false",
                 "@ver" : "8",
                 "@hf" : "false",
                 "i" : "CALENDAR",
                 "n" : "Календарь",
                 "k" : "112",
                 "c" : "1026",
                 "p" : "103",
                 "h" : "false",
                 "hasPrv" : "false",
                 "ic" : "false",
                 "trackElementDependents" : "false"
                }
              },
              {
               "k" : "116",
               "id" : "DIM_1",
               "vis" : "true",
               "obDesc" :
                {
                 "@ds" : "",
                 "@isShortcut" : "false",
                 "@isLink" : "false",
                 "@ver" : "3",
                 "@hf" : "false",
                 "i" : "DIM_1",
                 "n" : "Dim_1",
                 "k" : "116",
                 "c" : "1025",
                 "p" : "103",
                 "h" : "false",
                 "hasPrv" : "false",
                 "ic" : "false",
                 "trackElementDependents" : "false"
                }
              },
              {
               "k" : "991",
               "id" : "DIM_2",
               "vis" : "true",
               "obDesc" :
                {
                 "@ds" : "",
                 "@isShortcut" : "false",
                 "@isLink" : "false",
                 "@ver" : "1",
                 "@hf" : "false",
                 "i" : "DIM_2",
                 "n" : "Dim_2",
                 "k" : "991",
                 "c" : "1025",
                 "p" : "10529",
                 "h" : "false",
                 "hasPrv" : "false",
                 "ic" : "false",
                 "trackElementDependents" : "false"
                }
              }
            ]
          },
         "move" :
          {
           "indexFrom" : "0",
           "indexTo" : "1"
          }
        },
       "calcCube" :
        {
         "includeNulls" : "true",
         "evaluateOnly" : "Selected"
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "dims" : "Get",
       "calcCube" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetCubeResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!C2"
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
         "@ver" : "5",
         "@hf" : "0",
         "i" : "CALC_CUBE",
         "n" : "Вычисляемый куб",
         "k" : "6962",
         "c" : "1282",
         "p" : "5845",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "1",
     "dims" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "112",
             "id" : "CALENDAR",
             "vis" : "1",
             "obDesc" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "8",
               "@hf" : "0",
               "i" : "CALENDAR",
               "n" : "Календарь",
               "k" : "112",
               "c" : "1026",
               "p" : "103",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0",
               "trackElementDependents" : "0"
              }
            },
            {
             "k" : "6964",
             "id" : "FACTS",
             "vis" : "1",
             "obDesc" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "3",
               "@hf" : "0",
               "i" : "FACTS",
               "n" : "Факты",
               "k" : "6964",
               "c" : "1028",
               "p" : "6962",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0",
               "trackElementDependents" : "0"
              }
            },
            {
             "k" : "116",
             "id" : "DIM_1",
             "vis" : "1",
             "obDesc" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "3",
               "@hf" : "0",
               "i" : "DIM_1",
               "n" : "Dim_1",
               "k" : "116",
               "c" : "1025",
               "p" : "103",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0",
               "trackElementDependents" : "0"
              }
            },
            {
             "k" : "991",
             "id" : "DIM_2",
             "vis" : "1",
             "obDesc" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "1",
               "@hf" : "0",
               "i" : "DIM_2",
               "n" : "Dim_2",
               "k" : "991",
               "c" : "1025",
               "p" : "10529",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0",
               "trackElementDependents" : "0"
              }
            }
          ]
        }
      },
     "calcCube" :
      {
       "factsDimId" : "S1!M!S!C2!FactDim",
       "externalFactDimension" : "0",
       "formulasDestinationVisible" : "1",
       "cacheFormulas" : "1",
       "includeNulls" : "1",
       "evaluateOnly" : "Selected"
      }
    }
  }
}


public static SetCubeResult ChangeCalculatedCubeStructure(CubeId moniker, CubeDim[] dims)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetCube()
    {
        tArg = new SetCubeArg()
        {
            //Шаблон
            pattern = new CubeMdPattern()
            {
                calcCube = true,
                dims = ListOperation.Change
            },
            //Обновленные метаданные
            meta = new CubeMd
            {
                calcCube = new CalcCubeMd()
                {
                    evaluateOnly = CalcCubeEvaluateOnlyType.Selected,
                    includeNulls = true
                },
                dims = new CubeDims()
                {
                    its = dims,
                    move = new ItemMoveInfo()
                    {
                        indexFrom = 0,
                        indexTo = 1
                    }
                }
            },
            metaGet = new CubeMdPattern()
            {
                calcCube = true,
                dims = ListOperation.Get
            }
        },
        tCube = moniker
    };
    //Изменение структуры куба
    var result = somClient.SetCube(tSet);
    return result;
}


См. также:


[SetCube](../SetCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
