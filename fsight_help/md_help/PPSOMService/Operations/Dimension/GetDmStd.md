# GetDmStd: Операция

GetDmStd: Операция
-


**


# GetDmStd


## Синтаксис


GetDmStdResult GetDmStd(DmId tDim, GetDmStdArg tArg)


## Параметры


tDim. Моникёр
 открытого экземпляра табличного справочника.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDmStd извлекает
 метаданные табличного справочника.


## Комментарии


Данная операция позволяет получить информацию о структуре табличного
 справочника: атрибуты, блоки, индексы, уровни справочника, а также другие
 настройки, влияющие на работу справочника. Для выполнения операции необходимо
 в поле tDim указать моникёр экземпляра
 табличного справочника, а в поле tArg
 указать параметры, в соответствии с которыми будет извлекаться информация.
 Моникёр может быть получен при выполнении операции [OpenDim](OpenDim.htm).
 В поле tArg.pattern указывается
 шаблон, в соответствии с которым будет извлекаться информация. Результатом
 работы операции будут запрошенные метаданные.


## Пример


Ниже приведён пример использования операции GetDmStd
 для получения информации о структуре табличного справочника. В запросе
 передаётся моникёр справочника и шаблон, который определяет, какие именно
 метаданные необходимо извлечь. В ответе приходит полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDmStd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tDim xmlns="****">
  <id>S1!M!S!DM9</id>  </tDim>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <attrs>Get</attrs>  <blocks>Get</blocks>[![](../../minus.gif)](../../#)<block>
  <all>true</all>  </block>
  </pattern>
  </tArg>
  </GetDmStd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDmStdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!DM9</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>DIM_1</i>  <n>Dim_1</n>  <k>116</k>  <c>1025</c>  <p>103</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>117</k>  <id>NAME</id>  <n>Наименование</n>  <vis>1</vis>  <dt>1</dt>  <predefined>Name</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>118</k>  <id>ID</id>  <n>Идентификатор</n>  <vis>1</vis>  <dt>2</dt>  <uniqueIndex>INDEX1</uniqueIndex>  <predefined>Ident</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>119</k>  <id>ORDER</id>  <n>Порядок</n>  <vis>1</vis>  <dt>2</dt>  <predefined>Order</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>122</k>  <id>PARENT</id>  <n>Родитель</n>  <vis>1</vis>  <dt>2</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>177</k>  <id>CODE</id>  <n>Код</n>  <vis>1</vis>  <dt>1</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
  </its>
  <ident>1</ident>  <name>0</name>  <order>2</order>[![](../../minus.gif)](../../#)<orders>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<attr>
  <k>119</k>  <id>ORDER</id>  </attr>
  <reverseOrder>0</reverseOrder>  </it>
  </its>
  </orders>
  </attrs>
[![](../../minus.gif)](../../#)<blocks>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>120</k>  <id>BLOCK1</id>  <n>Блок1</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<indexes>
[![](../../minus.gif)](../../#)<it>
  <k>121</k>  <id>PRIMARY_INDEX</id>  <n>Первичный индекс блока Блок1</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<block>
  <k>120</k>  <id>BLOCK1</id>  <n>Блок1</n>  <vis>1</vis>  </block>
[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<it>
  <k>118</k>  <id>ID</id>  <n>Идентификатор</n>  <vis>1</vis>  </it>
  </attrs>
  <primary>1</primary>  <unique>1</unique>  <useInSelection>0</useInSelection>  <caseSensitive>1</caseSensitive>  </it>
  </indexes>
[![](../../minus.gif)](../../#)<dataset ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>OBJ113</i>  <n>справочник</n>  <k>114</k>  <c>769</c>  <p>103</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </dataset>
  <type>Recursive</type>[![](../../minus.gif)](../../#)<bindings>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<attr>
  <k>117</k>  <id>NAME</id>  </attr>
  <expression>OBJ113.NAME</expression>  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<attr>
  <k>118</k>  <id>ID</id>  </attr>
  <expression>OBJ113.ID</expression>  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<attr>
  <k>119</k>  <id>ORDER</id>  </attr>
  <expression>OBJ113.ID</expression>  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<attr>
  <k>122</k>  <id>PARENT</id>  </attr>
  <expression>OBJ113.PARENTID</expression>  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<attr>
  <k>177</k>  <id>CODE</id>  </attr>
  <expression>OBJ113.CODE</expression>  </it>
  </bindings>
  <whereExpr />
[![](../../minus.gif)](../../#)<recursive>
  <startWith>OBJ113.PARENTID = 0</startWith>[![](../../minus.gif)](../../#)<connectByIndex>
  <k>121</k>  <id>PRIMARY_INDEX</id>  </connectByIndex>
[![](../../minus.gif)](../../#)<connectsBy>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<attr>
  <k>118</k>  <id>ID</id>  </attr>
  <expression>OBJ113.PARENTID</expression>  </it>
  </connectsBy>
  <startWithWhere />
  <connectByWhere />
  </recursive>
  </it>
  </its>
  </blocks>
  <deduplicateCondition>None</deduplicateCondition>  <deduplicateExpression />
  <hideInaccessibleElements>1</hideInaccessibleElements>  <reverseOrder>0</reverseOrder>  </meta>
  </GetDmStdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDmStd" :
  {
   "tDim" :
    {
     "id" : "S1!M!S!DM9"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "attrs" : "Get",
       "blocks" : "Get",
       "block" :
        {
         "all" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetDmStdResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!DM9"
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
         "@ver" : "4",
         "@hf" : "0",
         "i" : "DIM_1",
         "n" : "Dim_1",
         "k" : "116",
         "c" : "1025",
         "p" : "103",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "attrs" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "117",
             "id" : "NAME",
             "n" : "Наименование",
             "vis" : "1",
             "dt" : "1",
             "predefined" : "Name",
             "dataDomain" : "0",
             "nullable" : "1",
             "hasHierarchy" : "0"
            },
            {
             "k" : "118",
             "id" : "ID",
             "n" : "Идентификатор",
             "vis" : "1",
             "dt" : "2",
             "uniqueIndex" : "INDEX1",
             "predefined" : "Ident",
             "dataDomain" : "0",
             "nullable" : "1",
             "hasHierarchy" : "0"
            },
            {
             "k" : "119",
             "id" : "ORDER",
             "n" : "Порядок",
             "vis" : "1",
             "dt" : "2",
             "predefined" : "Order",
             "dataDomain" : "0",
             "nullable" : "1",
             "hasHierarchy" : "0"
            },
            {
             "k" : "122",
             "id" : "PARENT",
             "n" : "Родитель",
             "vis" : "1",
             "dt" : "2",
             "dataDomain" : "0",
             "nullable" : "1",
             "hasHierarchy" : "0"
            },
            {
             "k" : "177",
             "id" : "CODE",
             "n" : "Код",
             "vis" : "1",
             "dt" : "1",
             "dataDomain" : "0",
             "nullable" : "1",
             "hasHierarchy" : "0"
            }
          ]
        },
       "ident" : "1",
       "name" : "0",
       "order" : "2",
       "orders" :
        {
         "its" :
          {
           "it" :
            [
              {
               "attr" :
                {
                 "k" : "119",
                 "id" : "ORDER"
                },
               "reverseOrder" : "0"
              }
            ]
          }
        }
      },
     "blocks" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "120",
             "id" : "BLOCK1",
             "n" : "Блок1",
             "vis" : "1",
             "indexes" :
              {
               "it" :
                {
                 "k" : "121",
                 "id" : "PRIMARY_INDEX",
                 "n" : "Первичный индекс блока Блок1",
                 "vis" : "1",
                 "block" :
                  {
                   "k" : "120",
                   "id" : "BLOCK1",
                   "n" : "Блок1",
                   "vis" : "1"
                  },
                 "attrs" :
                  {
                   "it" :
                    {
                     "k" : "118",
                     "id" : "ID",
                     "n" : "Идентификатор",
                     "vis" : "1"
                    }
                  },
                 "primary" : "1",
                 "unique" : "1",
                 "useInSelection" : "0",
                 "caseSensitive" : "1"
                }
              },
             "dataset" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "0",
               "@hf" : "0",
               "i" : "OBJ113",
               "n" : "справочник",
               "k" : "114",
               "c" : "769",
               "p" : "103",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0"
              },
             "type" : "Recursive",
             "bindings" :
              {
               "it" :
                [
                  {
                   "attr" :
                    {
                     "k" : "117",
                     "id" : "NAME"
                    },
                   "expression" : "OBJ113.NAME"
                  },
                  {
                   "attr" :
                    {
                     "k" : "118",
                     "id" : "ID"
                    },
                   "expression" : "OBJ113.ID"
                  },
                  {
                   "attr" :
                    {
                     "k" : "119",
                     "id" : "ORDER"
                    },
                   "expression" : "OBJ113.ID"
                  },
                  {
                   "attr" :
                    {
                     "k" : "122",
                     "id" : "PARENT"
                    },
                   "expression" : "OBJ113.PARENTID"
                  },
                  {
                   "attr" :
                    {
                     "k" : "177",
                     "id" : "CODE"
                    },
                   "expression" : "OBJ113.CODE"
                  }
                ]
              },
             "whereExpr" : "",
             "recursive" :
              {
               "startWith" : "OBJ113.PARENTID = 0",
               "connectByIndex" :
                {
                 "k" : "121",
                 "id" : "PRIMARY_INDEX"
                },
               "connectsBy" :
                {
                 "it" :
                  {
                   "attr" :
                    {
                     "k" : "118",
                     "id" : "ID"
                    },
                   "expression" : "OBJ113.PARENTID"
                  }
                },
               "startWithWhere" : "",
               "connectByWhere" : ""
              }
            }
          ]
        }
      },
     "deduplicateCondition" : "None",
     "deduplicateExpression" : "",
     "hideInaccessibleElements" : "1",
     "reverseOrder" : "0"
    }
  }
}


public static GetDmStdResult GetStandartDimension(DmId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetDmStd()
    {
        tArg = new GetDmStdArg()
        {
            pattern = new DmStdMdPattern()
            {
                attrs = ListOperation.Get,
                blocks = ListOperation.Get,
                block = new DmStdBlockPattern() { all = true }
            }
        },
        tDim = moniker
    };
    //Получение информации о табличном справочнике
    var result = somClient.GetDmStd(tGet);
    return result;
}


См. также:


[Работа
 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
