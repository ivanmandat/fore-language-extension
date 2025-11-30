# SetDmUser: Операция

SetDmUser: Операция
-


**


# SetDmUser


## Синтаксис


SetDmUserResult SetDmUser(DmId tDim, SetDmUserArg
 tArg)


## Параметры


tDim. Моникёр
 экземпляра вычисляемого справочника.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDmUser изменяет
 метаданные вычисляемого справочника.


## Комментарии


Данная операция позволяет изменить структуру вычисляемого справочника:
 атрибуты, блоки, индексы, уровни справочника, макрос для построения дерева
 элементов, а также другие настройки, влияющие на работу справочника. Вычисляемый
 справочник должен быть открыт на редактирование. Для выполнения операции
 укажите в поле tDim моникёр экземпляра
 вычисляемого справочника, а в поле tArg
 параметры изменения. Моникёр может быть получен при выполнении операции
 [OpenDim](OpenDim.htm).
 В поле tArg.pattern укажите шаблон,
 в соответствии с которым будут производиться изменения, а в поле tArg.meta изменяемые метаданные.
 После внесения изменений для сохранения справочника используйте операцию
 [SaveObject](../Repository/SaveObject.htm)
 или [SaveObjectAs](../Repository/SaveObjectAs.htm).
 Результатом работы операции будут обновлённые метаданные, если был указан
 шаблон tArg.metaGet.


## Пример


Ниже приведён пример использования операции для изменения структуры
 вычисляемого справочника - в справочник добавляется новый атрибут. В запросе
 передаётся моникёр справочника, шаблон, определяющий необходимость добавить
 новый атрибут и метаданные, в которых указаны параметры нового атрибута.
 В ответе приходит обновлённая информация о всех атрибутах справочника.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDmUser xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tDim xmlns="****">
  <id>S1!M!S!DM1</id>  </tDim>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <attrs>Add</attrs>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id>ADDITIONAL</id>  <n>Дополнительное значение</n>  <dt>3</dt>  </it>
  </its>
  </attrs>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <attrs>Get</attrs>  </metaGet>
  </tArg>
  </SetDmUser>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDmUserResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!DM1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**8**" hf="**0**">
  <i>DIM_USER</i>  <n>Справочник</n>  <k>175067</k>  <c>1027</c>  <p>175063</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>NAME</id>  <n>Наименование</n>  <vis>1</vis>  <dt>1</dt>  <predefined>Name</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>ID</id>  <n>Идентификатор</n>  <vis>1</vis>  <dt>2</dt>  <predefined>Ident</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>3</k>  <id>ORDER</id>  <n>Порядок</n>  <vis>1</vis>  <dt>2</dt>  <predefined>Order</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>4</k>  <id>ADDITIONAL</id>  <n>Дополнительное значение</n>  <vis>1</vis>  <dt>3</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
  </its>
  <ident>1</ident>  <name>0</name>  <order>2</order>[![](../../minus.gif)](../../#)<orders>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<attr>
  <k>3</k>  <id>ORDER</id>  </attr>
  <reverseOrder>0</reverseOrder>  </it>
  </its>
  </orders>
  </attrs>
  <hideInaccessibleElements>1</hideInaccessibleElements>  <reverseOrder>0</reverseOrder>  </meta>
  </SetDmUserResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDmUser" :
  {
   "tDim" :
    {
     "id" : "S1!M!S!DM1"
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
               "k" : "-1",
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
 "SetDmUserResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!DM1"
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
         "@ver" : "8",
         "@hf" : "0",
         "i" : "DIM_USER",
         "n" : "Справочник",
         "k" : "175067",
         "c" : "1027",
         "p" : "175063",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
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
             "k" : "1",
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
             "k" : "2",
             "id" : "ID",
             "n" : "Идентификатор",
             "vis" : "1",
             "dt" : "2",
             "predefined" : "Ident",
             "dataDomain" : "0",
             "nullable" : "1",
             "hasHierarchy" : "0"
            },
            {
             "k" : "3",
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
             "k" : "4",
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
                 "k" : "3",
                 "id" : "ORDER"
                },
               "reverseOrder" : "0"
              }
            ]
          }
        }
      },
     "hideInaccessibleElements" : "1",
     "reverseOrder" : "0"
    }
  }
}


public static SetDmUserResult ChangeUserDimension(DmId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetDmUser()
    {
        tArg = new SetDmUserArg()
        {
            pattern = new DmUserMdPattern()
            {
                attrs = ListOperation.Add
            },
            meta = new DmUserMd()
            {
                attrs = new DmUserAttrs()
                {
                    its = new DmUserAttr[]
                    {
                        new DmUserAttr()
                        {
                            id = "ADDITIONAL",
                            n = "Дополнительное значение",
                            dt = 3, //DbDataType.Float
                            k = uint.MaxValue
                        }
                    }
                }
            },
            metaGet = new DmUserMdPattern()
            {
                attrs = ListOperation.Get
            }
        },
        tDim = moniker
    };
    //Изменение вычисляемого справочника
    var result = somClient.SetDmUser(tSet);
    return result;
}


См. также:


[Работа
 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
