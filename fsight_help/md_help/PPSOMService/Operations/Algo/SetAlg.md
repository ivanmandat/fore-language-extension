# SetAlg: Операция

SetAlg: Операция
-


**


# SetAlg


## Синтаксис


SetAlgResult SetAlg(AlgId tAlg, SetAlgArg tArg)


## Параметры


tAlg. Моникёр
 экземпляра алгоритма расчёта показателей или его блока.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetAlg изменяет метаданные
 алгоритма расчёта показателей или его блоков.


## Комментарии


Данная операция позволяет изменить настройки блока расчёта, алгоритма
 расчёта и блока функций. Для выполнения операции укажите в поле tAlg моникёр экземпляра объекта,
 а в поле tArg укажите параметры,
 в соответствии с которыми будут изменяться объекты. Моникёр может быть
 получен при выполнении операции [OpenAlg](OpenAlg.htm). В поле
 tArg.pattern указывается шаблон,
 в соответствии с которым будет производиться изменение, а в поле tArg.meta обновлённые метаданные.


После внесения изменений для сохранения объекта используйте операцию
 [SaveAlg](SaveAlg.htm).


Результатом операции будут обновлённые метаданные, если при выполнении
 операции также было определено поле tArg.metaGet.


## Пример


Ниже приведён пример создания нового параметра в алгоритме расчёта.
 В запросе передаётся моникёр экземпляра алгоритма расчёта, шаблон, определяющий
 необходимость создания нового параметра, и метаданные с базовыми свойствами
 параметра. В ответе приходит обновлённая информация о параметрах алгоритма
 расчёта.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetAlg xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tAlg xmlns="****">
  <id>S1!M!S!C1</id>  </tAlg>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <params>Add</params>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<calcObject>
  <k>0</k>[![](../../minus.gif)](../../#)<params>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id>START_PARAM</id>  <n>Новый параметр</n>  </it>
  </its>
  </params>
  </calcObject>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <params>Get</params>  </metaGet>
  </tArg>
  </SetAlg>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetAlgResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
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
  <k>1</k>  <id>PARAM0</id>  <n>Период</n>  <vis>1</vis>  <dataType>2</dataType>  <defaultValueSelection>S1!M!S!S6</defaultValueSelection>  <linkedObjectKey>104891</linkedObjectKey>  <linkedStubKey>-1</linkedStubKey>  <hidden>0</hidden>  <tag />
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
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>START_PARAM</id>  <n>Новый параметр</n>  <vis>1</vis>  <dataType>2</dataType>  <defaultValue />
  <linkedStubKey>-1</linkedStubKey>  <hidden>0</hidden>  <tag />
  <index>1</index>  </it>
  </its>
  </params>
  <paramsValidationMessage>В параметре Новый параметр (START_PARAM) не задана ссылка на справочник</paramsValidationMessage>[![](../../minus.gif)](../../#)<algorithm>
  <workspace>S1!M!S!C1!W</workspace>  </algorithm>
  </calcObject>
  </meta>
  </SetAlgResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetAlg" :
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
       "params" : "Add"
      },
     "meta" :
      {
       "calcObject" :
        {
         "k" : "0",
         "params" :
          {
           "its" :
            {
             "it" :
              [
                {
                 "k" : "-1",
                 "id" : "START_PARAM",
                 "n" : "Новый параметр"
                }
              ]
            }
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "params" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "SetAlgResult" :
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
               "defaultValueSelection" : "S1!M!S!S6",
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
              },
              {
               "k" : "2",
               "id" : "START_PARAM",
               "n" : "Новый параметр",
               "vis" : "1",
               "dataType" : "2",
               "defaultValue" : "",
               "linkedStubKey" : "-1",
               "hidden" : "0",
               "tag" : "",
               "index" : "1"
              }
            ]
          }
        },
       "paramsValidationMessage" : "В параметре Новый параметр (START_PARAM) не задана ссылка на справочник",
       "algorithm" :
        {
         "workspace" : "S1!M!S!C1!W"
        }
      }
    }
  }
}


public static SetAlgResult AlgoAddParam(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetAlg()
    {
        tArg = new SetAlgArg()
        {
            pattern = new AlgMdPattern()
            {
                @params = ListOperation.Add
            },
            meta = new AlgMd()
            {
                calcObject = new AlgCalcObject()
                {
                    @params = new MsModelParams()
                    {
                        its = new MsModelParam[1]
                        {
                            new MsModelParam()
                            {
                                k = uint.MaxValue,
                                n = "Новый параметр",
                                id = "START_PARAM"
                            }
                        }
                    }
                }
            },
            metaGet = new AlgMdPattern()
            {
                @params = ListOperation.Get
            }
        },
        tAlg = new AlgId() { id = moniker }
    };
    //Изменение метаданных
    var result = somClient.SetAlg(tSet);
    return result;
}


См. также:


[Работа с
 алгоритмами расчёта показателей](Algo_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
