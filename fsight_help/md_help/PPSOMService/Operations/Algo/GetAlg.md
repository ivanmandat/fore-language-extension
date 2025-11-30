# GetAlg: Операция

GetAlg: Операция
-


**


# GetAlg


## Синтаксис


GetAlgResult GetAlg(AlgId tAlg, GetAlgArg tArg)


## Параметры


tAlg. Моникёр
 экземпляра алгоритма расчёта показателей или его блока.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetAlg извлекает метаданные
 алгоритма расчёта показателей или его блоков.


## Комментарии


Для выполнения операции укажите в поле tAlg
 моникёр экземпляра алгоритма расчёта показателей или блока, используемого
 в алгоритме расчёта и созданного в репозитории, а в поле tArg.pattern
 шаблон, в соответствии с которым будут извлекаться метаданные. Моникёр
 может быть получен при выполнении операции [OpenAlg](OpenAlg.htm).


Результатом работы операции будут запрошенные метаданные.


## Пример


Ниже приведён пример получения метаданных алгоритма расчёта показателей.
 В запросе передаётся моникёр открытого экземпляра алгоритма расчёта и
 шаблон, который определяет, какие именно метаданные необходимо извлечь.
 В ответе приходит полученная информация.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetAlg xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tAlg xmlns="****">
  <id>S1!M!S!C1</id>  </tAlg>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <params>Get</params>[![](../../minus.gif)](../../#)<calcBlock>
[![](../../minus.gif)](../../#)<dest>
  <stub>true</stub>  </dest>
  </calcBlock>
[![](../../minus.gif)](../../#)<algorithm>
  <tree>Get</tree>  <branchCondition>Get</branchCondition>  </algorithm>
  </pattern>
  </tArg>
  </GetAlg>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetAlgResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!C1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**40**" hf="**0**">
  <i>AREA_ALG</i>  <n>Алгоритм для выч.показателей области данных</n>  <k>231264</k>  <c>268033</c>  <p>231226</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<calcObject>
  <k>231264</k>  <id>AREA_ALG</id>  <n>Алгоритм для выч.показателей области данных</n>  <vis>1</vis>  <type>Algorithm</type>[![](../../minus.gif)](../../#)<params>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>PARAM0</id>  <n>Период</n>  <vis>1</vis>  <dataType>2</dataType>  <defaultValueSelection>S1!M!S!S5</defaultValueSelection>  <linkedObjectKey>104891</linkedObjectKey>  <linkedStubKey>-1</linkedStubKey>  <hidden>0</hidden>  <tag />
[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>BLOCK_TYPE</id>  <n>Тип блока календаря</n>  <vis>1</vis>  <dt>2</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>START_DATE</id>  <n>Дата начала периода</n>  <vis>1</vis>  <dt>4</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>3</k>  <id>NAME</id>  <n>Имя элемента календаря</n>  <vis>1</vis>  <dt>1</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>4</k>  <id>ID</id>  <n>Идентификатор</n>  <vis>1</vis>  <dt>1</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>5</k>  <id>ORDER</id>  <n>Порядок</n>  <vis>1</vis>  <dt>2</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>6</k>  <id>PERIOD</id>  <n>Период</n>  <vis>1</vis>  <dt>4</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>7</k>  <id>YEAR</id>  <n>Номер года</n>  <vis>1</vis>  <dt>2</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>8</k>  <id>HALF_OF_YEAR</id>  <n>Номер полугодия</n>  <vis>1</vis>  <dt>2</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>9</k>  <id>QUARTER</id>  <n>Номер квартала</n>  <vis>1</vis>  <dt>2</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>10</k>  <id>MONTH</id>  <n>Номер месяца</n>  <vis>1</vis>  <dt>2</dt>  </it>
  </its>
  </attrs>
  <index>0</index>  </it>
  </its>
  </params>
[![](../../minus.gif)](../../#)<algorithm>
[![](../../minus.gif)](../../#)<calcTree>
[![](../../minus.gif)](../../#)<nodes>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>231264</k>  <n>Алгоритм для выч.показателей области данных</n>  <type>CalcObject</type>  <objType>Algorithm</objType>  <included>1</included>  <readOnly>0</readOnly>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>231264:231265</k>  <n>Показатель</n>  <type>CalcObject</type>  <objType>CalcBlock</objType>  <objKey>231265</objKey>  <parentKey>231264</parentKey>  <included>1</included>  <index>0</index>  <readOnly>0</readOnly>  <canMoveDown>0</canMoveDown>  <canMoveUp>0</canMoveUp>  </it>
  </its>
  </nodes>
  </calcTree>
  <workspace>S1!M!S!C1!W</workspace>  </algorithm>
  </calcObject>
  </meta>
  </GetAlgResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetAlg" :
  {
   "tAlg" :
    {
     "id" : "S1!M!S!C1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "params" : "Get",
       "calcBlock" :
        {
         "dest" :
          {
           "stub" : "true"
          }
        },
       "algorithm" :
        {
         "tree" : "Get",
         "branchCondition" : "Get"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetAlgResult" :
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
         "@ver" : "40",
         "@hf" : "0",
         "i" : "AREA_ALG",
         "n" : "Алгоритм для выч.показателей области данных",
         "k" : "231264",
         "c" : "268033",
         "p" : "231226",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "calcObject" :
      {
       "k" : "231264",
       "id" : "AREA_ALG",
       "n" : "Алгоритм для выч.показателей области данных",
       "vis" : "1",
       "type" : "Algorithm",
       "params" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "1",
               "id" : "PARAM0",
               "n" : "Период",
               "vis" : "1",
               "dataType" : "2",
               "defaultValueSelection" : "S1!M!S!S5",
               "linkedObjectKey" : "104891",
               "linkedStubKey" : "-1",
               "hidden" : "0",
               "tag" : "",
               "attrs" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "k" : "1",
                       "id" : "BLOCK_TYPE",
                       "n" : "Тип блока календаря",
                       "vis" : "1",
                       "dt" : "2"
                      },
                      {
                       "k" : "2",
                       "id" : "START_DATE",
                       "n" : "Дата начала периода",
                       "vis" : "1",
                       "dt" : "4"
                      },
                      {
                       "k" : "3",
                       "id" : "NAME",
                       "n" : "Имя элемента календаря",
                       "vis" : "1",
                       "dt" : "1"
                      },
                      {
                       "k" : "4",
                       "id" : "ID",
                       "n" : "Идентификатор",
                       "vis" : "1",
                       "dt" : "1"
                      },
                      {
                       "k" : "5",
                       "id" : "ORDER",
                       "n" : "Порядок",
                       "vis" : "1",
                       "dt" : "2"
                      },
                      {
                       "k" : "6",
                       "id" : "PERIOD",
                       "n" : "Период",
                       "vis" : "1",
                       "dt" : "4"
                      },
                      {
                       "k" : "7",
                       "id" : "YEAR",
                       "n" : "Номер года",
                       "vis" : "1",
                       "dt" : "2"
                      },
                      {
                       "k" : "8",
                       "id" : "HALF_OF_YEAR",
                       "n" : "Номер полугодия",
                       "vis" : "1",
                       "dt" : "2"
                      },
                      {
                       "k" : "9",
                       "id" : "QUARTER",
                       "n" : "Номер квартала",
                       "vis" : "1",
                       "dt" : "2"
                      },
                      {
                       "k" : "10",
                       "id" : "MONTH",
                       "n" : "Номер месяца",
                       "vis" : "1",
                       "dt" : "2"
                      }
                    ]
                  }
                },
               "index" : "0"
              }
            ]
          }
        },
       "algorithm" :
        {
         "calcTree" :
          {
           "nodes" :
            {
             "its" :
              {
               "it" :
                [
                  {
                   "k" : "231264",
                   "n" : "Алгоритм для выч.показателей области данных",
                   "type" : "CalcObject",
                   "objType" : "Algorithm",
                   "included" : "1",
                   "readOnly" : "0"
                  },
                  {
                   "k" : "231264:231265",
                   "n" : "Показатель",
                   "type" : "CalcObject",
                   "objType" : "CalcBlock",
                   "objKey" : "231265",
                   "parentKey" : "231264",
                   "included" : "1",
                   "index" : "0",
                   "readOnly" : "0",
                   "canMoveDown" : "0",
                   "canMoveUp" : "0"
                  }
                ]
              }
            }
          },
         "workspace" : "S1!M!S!C1!W"
        }
      }
    }
  }
}


public static GetAlgResult GetAlgoMetadata(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetAlg()
    {
        tArg = new GetAlgArg()
        {
            pattern = new AlgMdPattern()
            {
                calcBlock = new AlgCalcBlockPattern()
                {
                    dest = new AlgCalcBlockDestPattern()
                    {
                        stub = true
                    }
                },
                algorithm = new AlgCalcAlgPattern()
                {
                    branchCondition = ListOperation.Get,
                    tree = ListOperation.Get
                },
                @params = ListOperation.Get
            }
        },
        tAlg = new AlgId() { id = moniker }
    };
    //Получение метаданных
    var result = somClient.GetAlg(tGet);
    return result;
}


См. также:


[Работа с
 алгоритмами расчёта показателей](Algo_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
