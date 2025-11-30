# SetTable: Операция

SetTable: Операция
-


**


# SetTable


## Синтаксис


TableResult SetTable(OdId tOb, SetTableArg tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося таблицей, присоединённой таблицой или
 представлением.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetTable изменяет таблицу/присоединённую
 таблицу/представление.


## Комментарии


Операция позволяет изменить структуру таблицы/присоединённой таблицы/представления.
 Таблица/присоединённая таблица/представление должны быть открыты на редактирование.
 Для выполнения операции укажите в поле tOb
 моникёр открытого экземпляра объекта, а в поле tArg.meta
 обновлённые метаданных, которые необходимо применить. Моникёр может быть
 получен при выполнении операции [OpenTable](OpenTable.htm).
 В поле tArg.pattern укажите шаблон,
 в соответствии с которым будут изменяться метаданные. Если определено
 поле tArg.metaGet, то результатом
 операции будут обновлённые метаданные, которые будут повторно получены
 после их изменения в объекте. Сохранение изменений осуществляется автоматически
 при выполнении операции.


## Пример


Пример добавления нового индекса в структуру таблицы. В запросе передаётя
 моникёр открытого экземпляра таблицы и обновлённые метаданные, содержащие
 параметры добавляемого индекса. В ответе приходит список полей и индексов
 таблицы.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetTable xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!S!TABLE5</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>[![](../../minus.gif)](../../#)<indexes>
  <indexes>Add</indexes>  <indexesFields>Add</indexesFields>  </indexes>
  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<indexes>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>0</k>  <id>NEW_INDEX</id>  <n>Новый индекс</n>  <unique>true</unique>[![](../../minus.gif)](../../#)<indexFields>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>ISO_CODE</id>  <n>ISO код страны</n>  <vis>true</vis>  <dt>1</dt>  <mandatory>true</mandatory>  <defaultValue />
  <size>255</size>  <precision>0</precision>  <isCalculated>false</isCalculated>  </it>
  </its>
  </indexFields>
  </it>
  </its>
  </indexes>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <fields>Get</fields>[![](../../minus.gif)](../../#)<indexes>
  <indexes>Get</indexes>  </indexes>
  </metaGet>
  </tArg>
  </SetTable>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetTableResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!TABLE5</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**21**" hf="**0**">
  <i>T_COUNTRY_INFO</i>  <n>Данные по странам</n>  <k>9053</k>  <c>769</c>  <p>9050</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  <openArgs />
  </obInst>
[![](../../minus.gif)](../../#)<fields>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>ISO_CODE</id>  <n>ISO код страны</n>  <vis>1</vis>  <dt>1</dt>  <mandatory>1</mandatory>  <defaultValue />
  <size>255</size>  <precision>0</precision>  <isCalculated>0</isCalculated>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>NAME</id>  <n>Наименование</n>  <vis>1</vis>  <dt>1</dt>  <mandatory>1</mandatory>  <defaultValue />
  <size>255</size>  <precision>0</precision>  <isCalculated>0</isCalculated>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>3</k>  <id>POPULATION</id>  <n>Население</n>  <vis>1</vis>  <dt>3</dt>  <mandatory>0</mandatory>  <defaultValue />
  <size>20</size>  <precision>2</precision>  <isCalculated>0</isCalculated>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>4</k>  <id>AREA</id>  <n>Площадь</n>  <vis>1</vis>  <dt>3</dt>  <mandatory>0</mandatory>  <defaultValue />
  <size>20</size>  <precision>2</precision>  <isCalculated>0</isCalculated>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>5</k>  <id>CURRENCY</id>  <n>Валюта</n>  <vis>1</vis>  <dt>1</dt>  <mandatory>0</mandatory>  <defaultValue />
  <size>255</size>  <precision>0</precision>  <isCalculated>0</isCalculated>  </it>
  </its>
  </fields>
[![](../../minus.gif)](../../#)<indexes>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>T_COUNTRY_INDEX</id>  <n>Индекс</n>  <vis>1</vis>  <primary>1</primary>  <unique>1</unique>  <allowNulls>0</allowNulls>  <clustered>2</clustered>[![](../../minus.gif)](../../#)<indexFields>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>ISO_CODE</id>  <n>ISO код страны</n>  <vis>1</vis>  <dt>1</dt>  <mandatory>1</mandatory>  <defaultValue />
  <size>255</size>  <precision>0</precision>  <isCalculated>0</isCalculated>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>NAME</id>  <n>Наименование</n>  <vis>1</vis>  <dt>1</dt>  <mandatory>1</mandatory>  <defaultValue />
  <size>255</size>  <precision>0</precision>  <isCalculated>0</isCalculated>  </it>
  </its>
  </indexFields>
  <expression />
  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>NEW_INDEX</id>  <n>Новый индекс</n>  <vis>1</vis>  <primary>0</primary>  <unique>1</unique>  <allowNulls>0</allowNulls>  <clustered>2</clustered>[![](../../minus.gif)](../../#)<indexFields>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>ISO_CODE</id>  <n>ISO код страны</n>  <vis>1</vis>  <dt>1</dt>  <mandatory>1</mandatory>  <defaultValue />
  <size>255</size>  <precision>0</precision>  <isCalculated>0</isCalculated>  </it>
  </its>
  </indexFields>
  <expression />
  </it>
  </its>
  </indexes>
  </meta>
  </SetTableResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetTable" :
  {
   "tOb" :
    {
     "id" : "S1!M!S!TABLE5"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "indexes" :
        {
         "indexes" : "Add",
         "indexesFields" : "Add"
        }
      },
     "meta" :
      {
       "indexes" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "0",
               "id" : "NEW_INDEX",
               "n" : "Новый индекс",
               "unique" : "true",
               "indexFields" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "k" : "1",
                       "id" : "ISO_CODE",
                       "n" : "ISO код страны",
                       "vis" : "true",
                       "dt" : "1",
                       "mandatory" : "true",
                       "defaultValue" : "",
                       "size" : "255",
                       "precision" : "0",
                       "isCalculated" : "false"
                      }
                    ]
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
       "fields" : "Get",
       "indexes" :
        {
         "indexes" : "Get"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetTableResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!TABLE5"
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
         "@ver" : "21",
         "@hf" : "0",
         "i" : "T_COUNTRY_INFO",
         "n" : "Данные по странам",
         "k" : "9053",
         "c" : "769",
         "p" : "9050",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        },
       "openArgs" : ""
      },
     "fields" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "ISO_CODE",
             "n" : "ISO код страны",
             "vis" : "1",
             "dt" : "1",
             "mandatory" : "1",
             "defaultValue" : "",
             "size" : "255",
             "precision" : "0",
             "isCalculated" : "0"
            },
            {
             "k" : "2",
             "id" : "NAME",
             "n" : "Наименование",
             "vis" : "1",
             "dt" : "1",
             "mandatory" : "1",
             "defaultValue" : "",
             "size" : "255",
             "precision" : "0",
             "isCalculated" : "0"
            },
            {
             "k" : "3",
             "id" : "POPULATION",
             "n" : "Население",
             "vis" : "1",
             "dt" : "3",
             "mandatory" : "0",
             "defaultValue" : "",
             "size" : "20",
             "precision" : "2",
             "isCalculated" : "0"
            },
            {
             "k" : "4",
             "id" : "AREA",
             "n" : "Площадь",
             "vis" : "1",
             "dt" : "3",
             "mandatory" : "0",
             "defaultValue" : "",
             "size" : "20",
             "precision" : "2",
             "isCalculated" : "0"
            },
            {
             "k" : "5",
             "id" : "CURRENCY",
             "n" : "Валюта",
             "vis" : "1",
             "dt" : "1",
             "mandatory" : "0",
             "defaultValue" : "",
             "size" : "255",
             "precision" : "0",
             "isCalculated" : "0"
            }
          ]
        }
      },
     "indexes" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "T_COUNTRY_INDEX",
             "n" : "Индекс",
             "vis" : "1",
             "primary" : "1",
             "unique" : "1",
             "allowNulls" : "0",
             "clustered" : "2",
             "indexFields" :
              {
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "1",
                     "id" : "ISO_CODE",
                     "n" : "ISO код страны",
                     "vis" : "1",
                     "dt" : "1",
                     "mandatory" : "1",
                     "defaultValue" : "",
                     "size" : "255",
                     "precision" : "0",
                     "isCalculated" : "0"
                    },
                    {
                     "k" : "2",
                     "id" : "NAME",
                     "n" : "Наименование",
                     "vis" : "1",
                     "dt" : "1",
                     "mandatory" : "1",
                     "defaultValue" : "",
                     "size" : "255",
                     "precision" : "0",
                     "isCalculated" : "0"
                    }
                  ]
                }
              },
             "expression" : ""
            },
            {
             "k" : "2",
             "id" : "NEW_INDEX",
             "n" : "Новый индекс",
             "vis" : "1",
             "primary" : "0",
             "unique" : "1",
             "allowNulls" : "0",
             "clustered" : "2",
             "indexFields" :
              {
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "1",
                     "id" : "ISO_CODE",
                     "n" : "ISO код страны",
                     "vis" : "1",
                     "dt" : "1",
                     "mandatory" : "1",
                     "defaultValue" : "",
                     "size" : "255",
                     "precision" : "0",
                     "isCalculated" : "0"
                    }
                  ]
                }
              },
             "expression" : ""
            }
          ]
        }
      }
    }
  }
}


public static TableResult ChangeTable(string moniker, TableField field, ListOperation operation)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetTable()
    {
        tArg = new SetTableArg()
        {
            meta = new TableMd()
            {
                indexes = new TableIndexes()
                {
                    its = new TableIndex[]
                    {
                        new TableIndex()
                        {
                            id = "NEW_INDEX",
                            n = "Новый индекс",
                            indexFields = new TableFields()
                            {
                                its = new TableField[]
                                {
                                    field
                                }
                            },
                            unique = true
                        }
                    }
                }
            },
            pattern = new TableMdPattern()
            {
                indexes = new TableIndexesPattern()
                {
                    indexes = operation,
                    indexesFields = operation
                }
            },
            metaGet = new TableMdPattern()
            {
                indexes = new TableIndexesPattern()
                {
                    indexes = ListOperation.Get
                },
                fields = ListOperation.Get
            }
        },
        tOb = new OdId() { id = moniker }
    };
    //Изменение метаданных
    var tResult = somClient.SetTable(tSet);
    return tResult;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
