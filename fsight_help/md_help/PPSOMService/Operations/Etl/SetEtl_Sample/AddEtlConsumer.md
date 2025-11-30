# Добавление приёмника репозитория: Операция SetEtl

Добавление приёмника репозитория: Операция SetEtl
-


**


# Добавление приёмника репозитория


Ниже приведён пример использования операции [SetEtl](../SetEtl.htm)
 для добавления в задачу ETL приёмника репозитория. В запросе передается
 моникёр открытого экземпляра задачи ETL и параметры создания нового объекта:
 тип создаваемого объекта и его специфические настройки. В ответе приходит
 информация о созданном объекте и список его полей, который заполняется
 на основании структуры таблицы, выступающей в качестве приёмника данных.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetEtl xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tEtl xmlns="****">
  <id>S1!M!S!L1</id>  </tEtl>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <objects>Add</objects>[![](../../../minus.gif)](../../../#)<object>
  <settings>true</settings>[![](../../../minus.gif)](../../../#)<consumer>
  <props>true</props>  </consumer>
  </object>
  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<objects>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <id>REPO_CONSUMER</id>  <vis>true</vis>  <type>PlainDataMetabaseConsumer</type>[![](../../../minus.gif)](../../../#)<settings>
[![](../../../minus.gif)](../../../#)<plainConsumer>
[![](../../../minus.gif)](../../../#)<consumer>
[![](../../../minus.gif)](../../../#)<props>
  <type>Mb</type>[![](../../../minus.gif)](../../../#)<mb>
[![](../../../minus.gif)](../../../#)<dataset>
  <i>BACKUP_DATA</i>  <n>Таблица</n>  <k>37886</k>  <c>769</c>  </dataset>
  </mb>
  </props>
  </consumer>
  <fillFields>FromSource</fillFields>  </plainConsumer>
  </settings>
  </it>
  </its>
  </objects>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <objects>Get</objects>[![](../../../minus.gif)](../../../#)<objectsFilter>
[![](../../../minus.gif)](../../../#)<range>
  <start>3</start>  <count>1</count>  </range>
  </objectsFilter>
[![](../../../minus.gif)](../../../#)<object>
  <settings>true</settings>[![](../../../minus.gif)](../../../#)<consumer>
  <fields>true</fields>  </consumer>
  <fields>Get</fields>  </object>
  </metaGet>
  </tArg>
  </SetEtl>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetEtlResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!L1</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**3**" hf="**0**">
  <i>ETL_INDICATOR</i>  <n>Задача ETL для загрузки показателей</n>  <k>7012</k>  <c>4097</c>  <p>7011</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>[![](../../../minus.gif)](../../../#)<objects>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>3</k>  <id>REPO_CONSUMER</id>  <n>Приёмник репозитория1</n>  <vis>1</vis>  <type>PlainDataMetabaseConsumer</type>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>BACKUP_DATA</i>  <n>Таблица</n>  <k>37886</k>  <c>769</c>  <p>7011</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </obDesc>
  <read>1</read>  <write>1</write>[![](../../../minus.gif)](../../../#)<settings>
[![](../../../minus.gif)](../../../#)<plainConsumer>
[![](../../../minus.gif)](../../../#)<consumer>
[![](../../../minus.gif)](../../../#)<fields>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>FIELD</id>  <n>Поле</n>  <vis>1</vis>  <dt>2</dt>  <dd>-1</dd>  <size>10</size>  <precision>0</precision>  <expression />
  <calculated>0</calculated>  <dateFormat>ДМГ</dateFormat>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>FIELD1</id>  <n>Поле1</n>  <vis>1</vis>  <dt>1</dt>  <dd>0</dd>  <size>255</size>  <precision>0</precision>  <expression />
  <calculated>0</calculated>  <dateFormat>ДМГ</dateFormat>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>3</k>  <id>IND_DATA</id>  <n>ind_data</n>  <vis>1</vis>  <dt>4</dt>  <dd>-1</dd>  <size>0</size>  <precision>0</precision>  <expression />
  <calculated>0</calculated>  <dateFormat>ДМГ</dateFormat>  </it>
  </its>
  </fields>
  </consumer>
  <keyFieldNames />
  <clearConsumer>1</clearConsumer>[![](../../../minus.gif)](../../../#)<bulk>
  <commitCount>1024</commitCount>  <actionOnProblem>DiscardRecordsInTransaction</actionOnProblem>  <saveInvalidRecs>0</saveInvalidRecs>  <invalidRecsFileName />
  <useStopLimit>0</useStopLimit>  <stopLimit>1024</stopLimit>  <eventId />
  </bulk>
  </plainConsumer>
  </settings>
  </it>
  </its>
  </objects>
  <shapes />
  </meta>
  </SetEtlResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetEtl" :
  {
   "tEtl" :
    {
     "id" : "S1!M!S!L1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "objects" : "Add",
       "object" :
        {
         "settings" : "true",
         "consumer" :
          {
           "props" : "true"
          }
        }
      },
     "meta" :
      {
       "objects" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "0",
               "id" : "REPO_CONSUMER",
               "vis" : "true",
               "type" : "PlainDataMetabaseConsumer",
               "settings" :
                {
                 "plainConsumer" :
                  {
                   "consumer" :
                    {
                     "props" :
                      {
                       "type" : "Mb",
                       "mb" :
                        {
                         "dataset" :
                          {
                           "i" : "BACKUP_DATA",
                           "n" : "Таблица",
                           "k" : "37886",
                           "c" : "769"
                          }
                        }
                      }
                    },
                   "fillFields" : "FromSource"
                  }
                }
              }
            ]
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "objects" : "Get",
       "objectsFilter" :
        {
         "range" :
          {
           "start" : "3",
           "count" : "1"
          }
        },
       "object" :
        {
         "settings" : "true",
         "consumer" :
          {
           "fields" : "true"
          },
         "fields" : "Get"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetEtlResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!L1"
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
         "@ver" : "3",
         "@hf" : "0",
         "i" : "ETL_INDICATOR",
         "n" : "Задача ETL для загрузки показателей",
         "k" : "7012",
         "c" : "4097",
         "p" : "7011",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "1",
     "objects" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "3",
             "id" : "REPO_CONSUMER",
             "n" : "Приёмник репозитория1",
             "vis" : "1",
             "type" : "PlainDataMetabaseConsumer",
             "obDesc" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "0",
               "@hf" : "0",
               "i" : "BACKUP_DATA",
               "n" : "Таблица",
               "k" : "37886",
               "c" : "769",
               "p" : "7011",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0"
              },
             "read" : "1",
             "write" : "1",
             "settings" :
              {
               "plainConsumer" :
                {
                 "consumer" :
                  {
                   "fields" :
                    {
                     "its" :
                      {
                       "it" :
                        [
                          {
                           "k" : "1",
                           "id" : "FIELD",
                           "n" : "Поле",
                           "vis" : "1",
                           "dt" : "2",
                           "dd" : "-1",
                           "size" : "10",
                           "precision" : "0",
                           "expression" : "",
                           "calculated" : "0",
                           "dateFormat" : "ДМГ"
                          },
                          {
                           "k" : "2",
                           "id" : "FIELD1",
                           "n" : "Поле1",
                           "vis" : "1",
                           "dt" : "1",
                           "dd" : "0",
                           "size" : "255",
                           "precision" : "0",
                           "expression" : "",
                           "calculated" : "0",
                           "dateFormat" : "ДМГ"
                          },
                          {
                           "k" : "3",
                           "id" : "IND_DATA",
                           "n" : "ind_data",
                           "vis" : "1",
                           "dt" : "4",
                           "dd" : "-1",
                           "size" : "0",
                           "precision" : "0",
                           "expression" : "",
                           "calculated" : "0",
                           "dateFormat" : "ДМГ"
                          }
                        ]
                      }
                    }
                  },
                 "keyFieldNames" : "",
                 "clearConsumer" : "1",
                 "bulk" :
                  {
                   "commitCount" : "1024",
                   "actionOnProblem" : "DiscardRecordsInTransaction",
                   "saveInvalidRecs" : "0",
                   "invalidRecsFileName" : "",
                   "useStopLimit" : "0",
                   "stopLimit" : "1024",
                   "eventId" : ""
                  }
                }
              }
            }
          ]
        }
      },
     "shapes" : ""
    }
  }
}


public static SetEtlResult AddConsumer(MbId mb, EtlId moniker, string consumerId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    var consumerDesc = FindObjectById(mb, consumerId); // Описание приёмника
    //Параметры выполнения операции
    var tSet = new SetEtl()
    {
        tArg = new SetEtlArg()
        {
            pattern = new EtlMdPattern()
            {
                objects = ListOperation.Add,
                @object = new EtlObjectPattern()
                {
                    settings = true,
                    consumer = new EtlConsumerPattern()
                    {
                        props = true
                    }
                }
            },
            meta = new EtlMd()
            {
                objects = new EtlObjects()
                {
                    its = new EtlObject[]
                    {
                new EtlObject()
                {
                    //Базовые свойства
                    id = "REPO_CONSUMER",
                    k = 0,
                    type = EtlObjectType.PlainDataMetabaseConsumer,
                    vis = true,
                    //Настройка приёмника
                    settings = new EtlObjectSettings()
                    {
                        plainConsumer = new EtlPlainDataConsumer()
                        {
                            fillFields = EtlFillFieldsType.FromSource,
                            consumer = new DtConsumerMd()
                            {
                                props = new DtConsumerProps()
                                {
                                    type = DtConsumerType.Mb,
                                    mb = new DtConsumerMb()
                                    {
                                        dataset = new Ob()
                                        {
                                            k = consumerDesc.k,
                                            i = consumerDesc.i,
                                            c = consumerDesc.c,
                                            n = consumerDesc.n
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                    }
                }
            },
            metaGet = new EtlMdPattern()
            {
                objects = ListOperation.Get,
                objectsFilter = new ListFilter() { range = new ListRange() { start = 3, count = 1 } },
                @object = new EtlObjectPattern()
                {
                    fields = ListOperation.Get,
                    settings = true,
                    consumer = new EtlConsumerPattern() { fields = true }
                }
            }
        },
        tEtl = moniker
    };
    //Добавление объекта в задачу ETL
    var result = somClient.SetEtl(tSet);
    return result;
}


См. также:


[SetEtl:
 Операция](../SetEtl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
