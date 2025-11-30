# SetHieMd: Операция

SetHieMd: Операция
-


**


# SetHieMd


## Синтаксис


SetHieMdResult SetHieMd(HieId tHie, SetHieMdArg
 tArg)


## Параметры


tHie. Моникёр открытого экземпляра
 иерархии показателей.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetHieMd изменяет метаданные
 иерархии показателей базы данных временных рядов.


## Комментарии


Для выполнения операции необходимо в поле tHie
 указать моникёр экземпляра иерархии показателей, а в поле tArg
 указать параметры изменения. Моникёр может быть получен при выполнении
 операции [OpenHie](OpenHie.htm).
 Результатом работы операции будут обновленные метаданные, если при выполнении
 операции также было определено поле tArg.metaGet.


## Пример


Ниже приведён пример задания списка уровней, которые будут использоваться
 при формировании наименований показателей. В запросе передаётся список
 уровней. В ответе приходит обновлённая информация об уровнях и свойствах
 иерархии показателей.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetHieMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tHie xmlns="****">
  <id>S1!M!S!H2</id>  </tHie>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <levs>true</levs>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<levs>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>LEVEL1</id>  <n>Страна</n>  <vis>true</vis>[![](../../minus.gif)](../../#)<atts>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>9</k>  <id>COUNTRY</id>  <n>Страна</n>  <vis>true</vis>[![](../../minus.gif)](../../#)<dim>
  <k>208</k>  <id>COUNTRIES</id>  <n>Страны</n>  <vis>true</vis>  </dim>
  <includeSelectedOnly>false</includeSelectedOnly>  <namingFormat />
  <isLeaf>true</isLeaf>  <levKey>2</levKey>[![](../../minus.gif)](../../#)<orderBy>
  <isActive>false</isActive>  </orderBy>
  <orderInDefaultHie>-1</orderInDefaultHie>  </it>
  </its>
  </atts>
  <isLeaf>true</isLeaf>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>LEVEL</id>  <n>Период</n>  <vis>true</vis>[![](../../minus.gif)](../../#)<atts>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>4</k>  <id>DL</id>  <n>Период</n>  <vis>true</vis>[![](../../minus.gif)](../../#)<dim>
  <k>5482</k>  <id>CALENDAR_LEVELS</id>  <n>Динамики</n>  <vis>true</vis>  </dim>
  <includeSelectedOnly>false</includeSelectedOnly>  <namingFormat />
  <isLeaf>false</isLeaf>  <levKey>1</levKey>[![](../../minus.gif)](../../#)<orderBy>
  <isActive>false</isActive>  </orderBy>
  <orderInDefaultHie>-1</orderInDefaultHie>  </it>
  </its>
  </atts>
  <isLeaf>false</isLeaf>  </it>
  </its>
  </levs>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <levs>true</levs>  <props>true</props>  </metaGet>
  </tArg>
  </SetHieMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetHieMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!H2</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>TS_DB</i>  <n>БД временных рядов</n>  <k>2147483646</k>  <c>2829</c>  <p>5472</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>0</isPermanent>  <isTemp>1</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<levs>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>LEVEL</id>  <n>Период</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<atts>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>4</k>  <id>DL</id>  <n>Период</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<dim>
  <k>5482</k>  <id>CALENDAR_LEVELS</id>  <n>Динамики</n>  <vis>1</vis>  </dim>
  <includeSelectedOnly>0</includeSelectedOnly>  <namingFormat />
  <isLeaf>0</isLeaf>  <levKey>1</levKey>[![](../../minus.gif)](../../#)<orderBy>
  <isActive>0</isActive>  </orderBy>
  <orderInDefaultHie>-1</orderInDefaultHie>  </it>
  </its>
  </atts>
  <isLeaf>0</isLeaf>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>LEVEL1</id>  <n>Страна</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<atts>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>9</k>  <id>COUNTRY</id>  <n>Страна</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<dim>
  <k>208</k>  <id>COUNTRIES</id>  <n>Страны</n>  <vis>1</vis>  </dim>
  <includeSelectedOnly>0</includeSelectedOnly>  <namingFormat />
  <isLeaf>1</isLeaf>  <levKey>2</levKey>[![](../../minus.gif)](../../#)<orderBy>
  <isActive>0</isActive>  </orderBy>
  <orderInDefaultHie>-1</orderInDefaultHie>  </it>
  </its>
  </atts>
  <isLeaf>1</isLeaf>  </it>
  </its>
  </levs>
[![](../../minus.gif)](../../#)<props>
  <whereIsEmpty>0</whereIsEmpty>  <leafLoadExtent>0</leafLoadExtent>  <filterMode>All</filterMode>  </props>
  </meta>
  </SetHieMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetHieMd" :
  {
   "tHie" :
    {
     "id" : "S1!M!S!H2"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "levs" : "true"
      },
     "meta" :
      {
       "levs" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "2",
               "id" : "LEVEL1",
               "n" : "Страна",
               "vis" : "true",
               "atts" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "k" : "9",
                       "id" : "COUNTRY",
                       "n" : "Страна",
                       "vis" : "true",
                       "dim" :
                        {
                         "k" : "208",
                         "id" : "COUNTRIES",
                         "n" : "Страны",
                         "vis" : "true"
                        },
                       "includeSelectedOnly" : "false",
                       "namingFormat" : "",
                       "isLeaf" : "true",
                       "levKey" : "2",
                       "orderBy" :
                        {
                         "isActive" : "false"
                        },
                       "orderInDefaultHie" : "-1"
                      }
                    ]
                  }
                },
               "isLeaf" : "true"
              },
              {
               "k" : "1",
               "id" : "LEVEL",
               "n" : "Период",
               "vis" : "true",
               "atts" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "k" : "4",
                       "id" : "DL",
                       "n" : "Период",
                       "vis" : "true",
                       "dim" :
                        {
                         "k" : "5482",
                         "id" : "CALENDAR_LEVELS",
                         "n" : "Динамики",
                         "vis" : "true"
                        },
                       "includeSelectedOnly" : "false",
                       "namingFormat" : "",
                       "isLeaf" : "false",
                       "levKey" : "1",
                       "orderBy" :
                        {
                         "isActive" : "false"
                        },
                       "orderInDefaultHie" : "-1"
                      }
                    ]
                  }
                },
               "isLeaf" : "false"
              }
            ]
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "levs" : "true",
       "props" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetHieMdResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!H2"
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
         "i" : "TS_DB",
         "n" : "БД временных рядов",
         "k" : "2147483646",
         "c" : "2829",
         "p" : "5472",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "0",
         "isTemp" : "1"
        }
      },
     "dirty" : "0",
     "levs" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "LEVEL",
             "n" : "Период",
             "vis" : "1",
             "atts" :
              {
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "4",
                     "id" : "DL",
                     "n" : "Период",
                     "vis" : "1",
                     "dim" :
                      {
                       "k" : "5482",
                       "id" : "CALENDAR_LEVELS",
                       "n" : "Динамики",
                       "vis" : "1"
                      },
                     "includeSelectedOnly" : "0",
                     "namingFormat" : "",
                     "isLeaf" : "0",
                     "levKey" : "1",
                     "orderBy" :
                      {
                       "isActive" : "0"
                      },
                     "orderInDefaultHie" : "-1"
                    }
                  ]
                }
              },
             "isLeaf" : "0"
            },
            {
             "k" : "2",
             "id" : "LEVEL1",
             "n" : "Страна",
             "vis" : "1",
             "atts" :
              {
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "9",
                     "id" : "COUNTRY",
                     "n" : "Страна",
                     "vis" : "1",
                     "dim" :
                      {
                       "k" : "208",
                       "id" : "COUNTRIES",
                       "n" : "Страны",
                       "vis" : "1"
                      },
                     "includeSelectedOnly" : "0",
                     "namingFormat" : "",
                     "isLeaf" : "1",
                     "levKey" : "2",
                     "orderBy" :
                      {
                       "isActive" : "0"
                      },
                     "orderInDefaultHie" : "-1"
                    }
                  ]
                }
              },
             "isLeaf" : "1"
            }
          ]
        }
      },
     "props" :
      {
       "whereIsEmpty" : "0",
       "leafLoadExtent" : "0",
       "filterMode" : "All"
      }
    }
  }
}


public static SetHieMdResult SetHieMetadata(HieId moniker, HieLevs levels)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new SetHieMd()
    {
        tArg = new SetHieMdArg()
        {
            //Шаблон, в соответствии с которым будут изменены метаданные
            pattern = new HieMdPattern()
            {
                levs = true
            },
            //Обновленные метаданные
            meta = new HieMd()
            {
                levs = levels
            },
            metaGet = new HieMdPattern()
            {
                levs = true,
                props = true
            }
        },
        tHie = moniker
    };
    //Внесение изменений
    var result = somClient.SetHieMd(tGet);
    return result;
}


См. также:


[Работа
 с базой данных временных рядов](TimeSeriesDatabase_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
