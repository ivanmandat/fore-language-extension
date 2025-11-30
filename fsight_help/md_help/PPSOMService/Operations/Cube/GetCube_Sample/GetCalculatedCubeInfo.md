# Получение информации о структуре вычисляемого куба

Получение информации о структуре вычисляемого куба
-


**


# Получение информации о структуре вычисляемого куба


Ниже приведён пример использования операции [GetCube](../GetCube.htm)
 для получения информации о структуре вычисляемого куба. В запросе передается
 моникёр открытого экземпляра куба и шаблон, указывающий необходимость
 получить информацию о структуре куба. В ответе приходит запрошенная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetCube xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCube xmlns="****">
  <id>S1!M!S!C2</id>  </tCube>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <dims>Get</dims>  <sources>Get</sources>  <calcCube>true</calcCube>  <altSource>Get</altSource>  </pattern>
  </tArg>
  </GetCube>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetCubeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!C2</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**5**" hf="**0**">
  <i>CALC_CUBE</i>  <n>Вычисляемый куб</n>  <k>6962</k>  <c>1282</c>  <p>5845</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<dims>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>6964</k>  <id>FACTS</id>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**3**" hf="**0**">
  <i>FACTS</i>  <n>Факты</n>  <k>6964</k>  <c>1028</c>  <p>6962</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </obDesc>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>112</k>  <id>CALENDAR</id>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**8**" hf="**0**">
  <i>CALENDAR</i>  <n>Календарь</n>  <k>112</k>  <c>1026</c>  <p>103</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </obDesc>
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
[![](../../../minus.gif)](../../../#)<sources>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>[![](../../../minus.gif)](../../../#)<cube ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>STD_CUBE_SOURCE</i>  <n>Куб</n>  <k>6948</k>  <c>1281</c>  <p>6947</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </cube>
[![](../../../minus.gif)](../../../#)<destination>
  <k>1</k>  <id>STD_CUBE_SOURCE</id>  <n>Куб</n>  <vis>1</vis>  <isDefault>1</isDefault>  </destination>
  </it>
  </sources>
[![](../../../minus.gif)](../../../#)<calcCube>
  <factsDimId>S1!M!S!C2!FactDim</factsDimId>  <externalFactDimension>0</externalFactDimension>  <formulasDestinationVisible>1</formulasDestinationVisible>  <cacheFormulas>1</cacheFormulas>  <includeNulls>0</includeNulls>  <evaluateOnly>All</evaluateOnly>[![](../../../minus.gif)](../../../#)<altSource>
  <k>0</k>  <useExecute>0</useExecute>  <useStorage>0</useStorage>  <autoSaveToStorage>0</autoSaveToStorage>  </altSource>
  </calcCube>
  </meta>
  </GetCubeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetCube" :
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
       "dims" : "Get",
       "sources" : "Get",
       "calcCube" : "true",
       "altSource" : "Get"
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
     "dirty" : "0",
     "dims" :
      {
       "its" :
        {
         "it" :
          [
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
     "sources" :
      {
       "it" :
        {
         "k" : "1",
         "cube" :
          {
           "@ds" : "",
           "@isShortcut" : "0",
           "@isLink" : "0",
           "@ver" : "1",
           "@hf" : "0",
           "i" : "STD_CUBE_SOURCE",
           "n" : "Куб",
           "k" : "6948",
           "c" : "1281",
           "p" : "6947",
           "h" : "0",
           "hasPrv" : "0",
           "ic" : "0",
           "trackElementDependents" : "0"
          },
         "destination" :
          {
           "k" : "1",
           "id" : "STD_CUBE_SOURCE",
           "n" : "Куб",
           "vis" : "1",
           "isDefault" : "1"
          }
        }
      },
     "calcCube" :
      {
       "factsDimId" : "S1!M!S!C2!FactDim",
       "externalFactDimension" : "0",
       "formulasDestinationVisible" : "1",
       "cacheFormulas" : "1",
       "includeNulls" : "0",
       "evaluateOnly" : "All",
       "altSource" :
        {
         "k" : "0",
         "useExecute" : "0",
         "useStorage" : "0",
         "autoSaveToStorage" : "0"
        }
      }
    }
  }
}


public static GetCubeResult GetCalculatedCubeInfo(CubeId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tMeta = new GetCube()
    {
        tArg = new GetCubeArg()
        {
            pattern = new CubeMdPattern()
            {
                calcCube = true,
                dims = ListOperation.Get,
                altSource = ListOperation.Get,
                sources = ListOperation.Get
            }
        },
        tCube = moniker
    };
    //Получение информации о структуре вычисляемого куба
    var result = somClient.GetCube(tMeta);
    return result;
}


См. также:


[GetCube](../GetCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
