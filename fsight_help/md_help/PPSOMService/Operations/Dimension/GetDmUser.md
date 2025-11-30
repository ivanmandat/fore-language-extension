# GetDmUser: Операция

GetDmUser: Операция
-


**


# GetDmUser


## Синтаксис


GetDmUserResult GetDmUser(DmId tDim, GetDmUserArg
 tArg)


## Параметры


tDim. Моникёр
 открытого экземпляра вычисляемого справочника.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDmUser извлекает
 метаданные вычисляемого справочника.


## Комментарии


Данная операция позволяет получить информацию о структуре вычисляемого
 справочника: атрибуты, блоки, индексы, уровни справочника, макрос для
 построения дерева элементов, а также другие настройки, влияющие на работу
 справочника. Для выполнения операции укажите в поле tDim
 моникёр экземпляра вычисляемого справочника, а в поле tArg
 параметры для извлечения информации. Моникёр может быть получен при выполнении
 операции [OpenDim](OpenDim.htm).
 В поле tArg.pattern указывается
 шаблон, в соответствии с которым будет извлекаться информация. Результатом
 работы операции будут запрошенные метаданные.


## Пример


Ниже приведён пример использования операции для получения информации
 о структуре вычисляемого справочника. В запросе передаётся моникёр справочника
 и шаблон, который определяет, какие именно метаданные необходимо извлечь.
 В ответе приходит полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDmUser xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tDim xmlns="****">
  <id>S1!M!S!DM1</id>  </tDim>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <attrs>Get</attrs>  <blocks>Get</blocks>  </pattern>
  </tArg>
  </GetDmUser>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDmUserResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!DM1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**8**" hf="**0**">
  <i>DIM_USER</i>  <n>Справочник</n>  <k>175067</k>  <c>1027</c>  <p>175063</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>NAME</id>  <n>Наименование</n>  <vis>1</vis>  <dt>1</dt>  <predefined>Name</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>ID</id>  <n>Идентификатор</n>  <vis>1</vis>  <dt>2</dt>  <predefined>Ident</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>3</k>  <id>ORDER</id>  <n>Порядок</n>  <vis>1</vis>  <dt>2</dt>  <predefined>Order</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
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
[![](../../minus.gif)](../../#)<blocks>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>BLOCK1</id>  <n>Блок1</n>  <vis>1</vis>  </it>
  </its>
  </blocks>
  <hideInaccessibleElements>1</hideInaccessibleElements>  <reverseOrder>0</reverseOrder>  </meta>
  </GetDmUserResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDmUser" :
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
       "attrs" : "Get",
       "blocks" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "GetDmUserResult" :
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
     "dirty" : "0",
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
     "blocks" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "BLOCK1",
             "n" : "Блок1",
             "vis" : "1"
            }
          ]
        }
      },
     "hideInaccessibleElements" : "1",
     "reverseOrder" : "0"
    }
  }
}


public static GetDmUserResult GetUsertDimension(DmId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetDmUser()
    {
        tArg = new GetDmUserArg()
        {
            pattern = new DmUserMdPattern()
            {
                attrs = ListOperation.Get,
                blocks = ListOperation.Get
            }
        },
        tDim = moniker
    };
    //Получение информации о вычисляемом справочнике
    var result = somClient.GetDmUser(tGet);
    return result;
}


См. также:


[Работа
 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
