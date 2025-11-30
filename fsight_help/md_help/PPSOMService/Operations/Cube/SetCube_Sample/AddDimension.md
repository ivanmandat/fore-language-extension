# Добавление измерения в структуру куба: Операция SetCube

Добавление измерения в структуру куба: Операция SetCube
-


**


# Добавление измерения в структуру куба


Ниже приведён пример использования операции [SetCube](../SetCube.htm)
 для добавления измерения в структуру куба. В запросе передаются моникёр
 куба, шаблон, указывающий необходимость добавить измерение и обновленные
 метаданные, содержащие добавляемое измерение. В ответе приходит обновленная
 информация об измерениях куба.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetCube xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCube xmlns="****">
  <id>S1!M!S!C1</id>  </tCube>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <dims>Add</dims>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<dims>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>208</k>  <id />
  <n />
[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**false**" isLink="**false**" hf="**false**">
  <i>COUNTRIES</i>  <n>Страны</n>  <k>208</k>  <c>3076</c>  <p>159</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </obDesc>
  </it>
  </its>
  </dims>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <dims>Get</dims>  </metaGet>
  </tArg>
  </SetCube>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetCubeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!C1</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**32**" hf="**0**">
  <i>STD_CUBE</i>  <n>Куб</n>  <k>5857</k>  <c>1281</c>  <p>5845</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<dims>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>5858</k>  <id>FACTS</id>  <n>Факты</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**32**" hf="**0**">
  <i>FACTS</i>  <n>Факты</n>  <k>5858</k>  <c>1028</c>  <p>5857</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </obDesc>
  <aggsPresent>0</aggsPresent>  <hierAggsPresent>0</hierAggsPresent>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>112</k>  <id>CALENDAR</id>  <n>Календарь</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**6**" hf="**0**">
  <i>CALENDAR</i>  <n>Календарь</n>  <k>112</k>  <c>1026</c>  <p>103</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </obDesc>
  <aggsPresent>0</aggsPresent>  <hierAggsPresent>0</hierAggsPresent>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>116</k>  <id>DIM_1</id>  <n>Dim_1</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**3**" hf="**0**">
  <i>DIM_1</i>  <n>Dim_1</n>  <k>116</k>  <c>1025</c>  <p>103</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </obDesc>
  <aggsPresent>0</aggsPresent>  <hierAggsPresent>0</hierAggsPresent>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>991</k>  <id>DIM_2</id>  <n>Dim_2</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>DIM_2</i>  <n>Dim_2</n>  <k>991</k>  <c>1025</c>  <p>10529</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </obDesc>
  <aggsPresent>0</aggsPresent>  <hierAggsPresent>0</hierAggsPresent>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>208</k>  <id>COUNTRIES</id>  <n>Страны</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**5**" hf="**0**">
  <i>COUNTRIES</i>  <n>Страны</n>  <k>208</k>  <c>3076</c>  <p>159</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </obDesc>
  <aggsPresent>0</aggsPresent>  <hierAggsPresent>0</hierAggsPresent>  </it>
  </its>
  </dims>
  <supportsRub>0</supportsRub>  </meta>
  </SetCubeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetCube" :
  {
   "tCube" :
    {
     "id" : "S1!M!S!C1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "dims" : "Add"
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
               "k" : "208",
               "id" : "",
               "n" : "",
               "obDesc" :
                {
                 "@isShortcut" : "false",
                 "@isLink" : "false",
                 "@hf" : "false",
                 "i" : "COUNTRIES",
                 "n" : "Страны",
                 "k" : "208",
                 "c" : "3076",
                 "p" : "159",
                 "h" : "false",
                 "hasPrv" : "false",
                 "ic" : "false"
                }
              }
            ]
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "dims" : "Get"
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
         "@ver" : "32",
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
     "dims" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "5858",
             "id" : "FACTS",
             "n" : "Факты",
             "vis" : "1",
             "obDesc" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "32",
               "@hf" : "0",
               "i" : "FACTS",
               "n" : "Факты",
               "k" : "5858",
               "c" : "1028",
               "p" : "5857",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0"
              },
             "aggsPresent" : "0",
             "hierAggsPresent" : "0"
            },
            {
             "k" : "112",
             "id" : "CALENDAR",
             "n" : "Календарь",
             "vis" : "1",
             "obDesc" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "6",
               "@hf" : "0",
               "i" : "CALENDAR",
               "n" : "Календарь",
               "k" : "112",
               "c" : "1026",
               "p" : "103",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0"
              },
             "aggsPresent" : "0",
             "hierAggsPresent" : "0"
            },
            {
             "k" : "116",
             "id" : "DIM_1",
             "n" : "Dim_1",
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
               "ic" : "0"
              },
             "aggsPresent" : "0",
             "hierAggsPresent" : "0"
            },
            {
             "k" : "991",
             "id" : "DIM_2",
             "n" : "Dim_2",
             "vis" : "1",
             "obDesc" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "0",
               "@hf" : "0",
               "i" : "DIM_2",
               "n" : "Dim_2",
               "k" : "991",
               "c" : "1025",
               "p" : "10529",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0"
              },
             "aggsPresent" : "0",
             "hierAggsPresent" : "0"
            },
            {
             "k" : "208",
             "id" : "COUNTRIES",
             "n" : "Страны",
             "vis" : "1",
             "obDesc" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "5",
               "@hf" : "0",
               "i" : "COUNTRIES",
               "n" : "Страны",
               "k" : "208",
               "c" : "3076",
               "p" : "159",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0"
              },
             "aggsPresent" : "0",
             "hierAggsPresent" : "0"
            }
          ]
        }
      },
     "supportsRub" : "0"
    }
  }
}


public static SetCubeResult ChangeCubeStructure(CubeId moniker, Od newDim)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetCube()
    {
        tArg = new SetCubeArg()
        {
            //Шаблон, указывающий необходимость добавить измерение в куб
            pattern = new CubeMdPattern()
            {
                dims = ListOperation.Add
            },
            //Обновленные метаданные, содержащие новое измерение
            meta = new CubeMd
            {
                dims = new CubeDims
                {
                    its = new CubeDim[]
                    {
                        new CubeDim
                        {
                            k = newDim.k,
                            id = string.Empty,
                            n = string.Empty,
                            obDesc = newDim
                        }
                    }
                }
            },
            metaGet = new CubeMdPattern()
            {
                dims = ListOperation.Get,
            }
        },
        tCube = moniker
    };
    //Изменение структуры куба
    var result = somClient.SetCube(tSet);
    return result;
}


См. также:


[SetCube:
 Операция](../SetCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
