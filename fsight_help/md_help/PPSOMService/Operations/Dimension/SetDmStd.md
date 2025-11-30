# SetDmStd: Операция

SetDmStd: Операция
-


**


# SetDmStd


## Синтаксис


	SetDmStdResult SetDmStd(DmId tDim, SetDmStdArg
	 tArg)


## Параметры


	tDim. Моникёр
	 открытого экземпляра табличного справочника.


	tArg. Параметры выполнения
	 операции.


## Описание


	Операция SetDmStd изменяет
	 метаданные табличного справочника.


## Комментарии


	Данная операция позволяет изменить структуру табличного справочника:
	 атрибуты, блоки, индексы, уровни справочника, а также другие настройки,
	 влияющие на работу справочника. Табличный справочник должен быть открыт
	 на редактирование. Для выполнения операции укажите в поле tDim
	 моникёр экземпляра табличного справочника, а в поле tArg
	 параметры изменения. Моникёр может быть получен при выполнении операции
	 [OpenDim](OpenDim.htm). В поле
	 tArg.pattern укажите шаблон,
	 в соответствии с которым будут производиться изменения, а в поле tArg.meta изменяемые метаданные.
	 После внесения изменений для сохранения справочника используйте операцию
	 [SaveObject](../Repository/SaveObject.htm)
	 или [SaveObjectAs](../Repository/SaveObjectAs.htm).
	 Результатом работы операции будут обновлённые метаданные, если был
	 указан шаблон tArg.metaGet.


## Пример


	Ниже приведён пример использования операции SetDmStd
	 для изменения структуры табличного справочника - в справочник
	 добавляется новый атрибут. В запросе передаётся моникёр справочника,
	 шаблон, определяющий необходимость добавить новый атрибут и метаданные,
	 в которых указаны параметры нового атрибута. В ответе приходит обновлённая
	 информация о всех атрибутах справочника.


		 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDmStd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tDim xmlns="****">
  <id>S1!M!S!DM9</id>  </tDim>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <attrs>Add</attrs>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>18446744073709551615</k>  <id>ADDITIONAL</id>  <n>Дополнительное значение</n>  <dt>3</dt>  </it>
  </its>
  </attrs>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <attrs>Get</attrs>  </metaGet>
  </tArg>
  </SetDmStd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDmStdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!DM9</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>DIM_1</i>  <n>Dim_1</n>  <k>116</k>  <c>1025</c>  <p>103</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>[![](../../minus.gif)](../../#)<attrs>
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
[![](../../minus.gif)](../../#)<it>
  <k>178</k>  <id>ADDITIONAL</id>  <n>Дополнительное значение</n>  <vis>1</vis>  <dt>3</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
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
  <deduplicateCondition>None</deduplicateCondition>  <deduplicateExpression />
  <hideInaccessibleElements>1</hideInaccessibleElements>  <reverseOrder>0</reverseOrder>  </meta>
  </SetDmStdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDmStd" :
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
       "attrs" : "Add"
      },
     "meta" :
      {
       "attrs" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "18446744073709551615",
               "id" : "ADDITIONAL",
               "n" : "Дополнительное значение",
               "dt" : "3"
              }
            ]
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "attrs" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "SetDmStdResult" :
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
     "dirty" : "1",
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
            },
            {
             "k" : "178",
             "id" : "ADDITIONAL",
             "n" : "Дополнительное значение",
             "vis" : "1",
             "dt" : "3",
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
     "deduplicateCondition" : "None",
     "deduplicateExpression" : "",
     "hideInaccessibleElements" : "1",
     "reverseOrder" : "0"
    }
  }
}


public static SetDmStdResult ChangeStandartDimension(DmId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetDmStd()
    {
        tArg = new SetDmStdArg()
        {
            pattern = new DmStdMdPattern()
            {
                attrs = ListOperation.Add
            },
            meta = new DmStdMd()
            {
                attrs = new DmStdAttrs()
                {
                    its = new DmStdAttr[]
                    {
                        new DmStdAttr()
                        {
                            id = "ADDITIONAL",
                            n = "Дополнительное значение",
                            dt = 3, //DbDataType.Float
                            k = uint.MaxValue
                        }
                    }
                }
            },
            metaGet = new DmStdMdPattern()
            {
                attrs = ListOperation.Get
            }
        },
        tDim = moniker
    };
    //Изменение табличного справочника
    var result = somClient.SetDmStd(tSet);
    return result;
}


	См. также:


	[Работа
	 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
