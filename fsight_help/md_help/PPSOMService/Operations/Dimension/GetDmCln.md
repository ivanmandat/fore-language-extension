# GetDmCln: Операция

GetDmCln: Операция
-


**


# GetDmCln


## Синтаксис


GetDmClnResult GetDmCln(DmId tDim, GetDmClnArg tArg)


## Параметры


tDim. Моникёр
 открытого экземпляра календарного справочника.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDmCln извлекает
 метаданные календарного справочника.


## Комментарии


Данная операция позволяет получить информацию о структуре календарного
 справочника: используемую иерархию, уровни, пользовательские атрибуты,
 пределы календаря, а также другие настройки, влияющие на работу справочника.
 Для выполнения операции укажите в поле tDim
 моникёр экземпляра календарного справочника, а в поле tArg
 параметры для извлечения информации. Моникёр может быть получен при выполнении
 операции [OpenDim](OpenDim.htm).
 В поле tArg.pattern указывается
 шаблон, в соответствии с которым будет извлекаться информация. Результатом
 работы операции будут запрошенные метаданные.


## Пример


Ниже приведён пример использования операции GetDmCln
 для получения информации о структуре календарного справочника. В запросе
 передаётся моникёр справочника и шаблон, который определяет, какие именно
 метаданные необходимо извлечь. В ответе приходит полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDmCln xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tDim xmlns="****">
  <id>S1!M!S!DM2</id>  </tDim>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <attrs>Get</attrs>  </pattern>
  </tArg>
  </GetDmCln>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDmClnResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!DM2</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**9**" hf="**0**">
  <i>CALENDAR</i>  <n>Календарь</n>  <k>112</k>  <c>1026</c>  <p>103</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>  <startYear>2000</startYear>  <endYear>2003</endYear>  <startYearAsParam>0</startYearAsParam>  <endYearAsParam>0</endYearAsParam>  <hierarchy>0</hierarchy>  <attrCount>9</attrCount>  <levelCount>6</levelCount>  <reverseOrder>0</reverseOrder>  <shiftForward>0</shiftForward>  <hierarchyCorrection>0</hierarchyCorrection>  <lastLevelNameAsDay>0</lastLevelNameAsDay>  <defaultOpenType>Hierarchical</defaultOpenType>  <isDynamicAttrs>1</isDynamicAttrs>[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>BLOCK_TYPE</id>  <n>Тип блока календаря</n>  <vis>0</vis>  <dt>2</dt>  <dataDomain>0</dataDomain>  <nullable>0</nullable>  <hasHierarchy>0</hasHierarchy>  <isSystem>1</isSystem>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>START_DATE</id>  <n>Дата начала периода</n>  <vis>1</vis>  <dt>4</dt>  <dataDomain>0</dataDomain>  <nullable>0</nullable>  <hasHierarchy>0</hasHierarchy>  <isSystem>1</isSystem>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>3</k>  <id>NAME</id>  <n>Имя элемента календаря</n>  <vis>1</vis>  <dt>1</dt>  <predefined>Name</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  <isSystem>1</isSystem>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>4</k>  <id>ID</id>  <n>Идентификатор</n>  <vis>0</vis>  <dt>1</dt>  <predefined>Ident</predefined>  <dataDomain>0</dataDomain>  <nullable>0</nullable>  <hasHierarchy>0</hasHierarchy>  <isSystem>1</isSystem>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>5</k>  <id>ORDER</id>  <n>Порядок</n>  <vis>0</vis>  <dt>2</dt>  <uniqueIndex>INDEX_ORDER</uniqueIndex>  <predefined>Order</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  <isSystem>1</isSystem>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>6</k>  <id>PERIOD</id>  <n>Период</n>  <vis>0</vis>  <dt>4</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  <isSystem>1</isSystem>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>7</k>  <id>YEAR</id>  <n>Номер года</n>  <vis>0</vis>  <dt>2</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  <isSystem>1</isSystem>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>8</k>  <id>HALF_OF_YEAR</id>  <n>Номер полугодия</n>  <vis>0</vis>  <dt>2</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  <isSystem>1</isSystem>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>9</k>  <id>QUARTER</id>  <n>Номер квартала</n>  <vis>0</vis>  <dt>2</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  <isSystem>1</isSystem>  </it>
  </its>
  </attrs>
  </meta>
  </GetDmClnResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDmCln" :
  {
   "tDim" :
    {
     "id" : "S1!M!S!DM2"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "attrs" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "GetDmClnResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!DM2"
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
         "@ver" : "9",
         "@hf" : "0",
         "i" : "CALENDAR",
         "n" : "Календарь",
         "k" : "112",
         "c" : "1026",
         "p" : "103",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "startYear" : "2000",
     "endYear" : "2003",
     "startYearAsParam" : "0",
     "endYearAsParam" : "0",
     "hierarchy" : "0",
     "attrCount" : "9",
     "levelCount" : "6",
     "reverseOrder" : "0",
     "shiftForward" : "0",
     "hierarchyCorrection" : "0",
     "lastLevelNameAsDay" : "0",
     "defaultOpenType" : "Hierarchical",
     "isDynamicAttrs" : "1",
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
             "vis" : "0",
             "dt" : "2",
             "dataDomain" : "0",
             "nullable" : "0",
             "hasHierarchy" : "0",
             "isSystem" : "1"
            },
            {
             "k" : "2",
             "id" : "START_DATE",
             "n" : "Дата начала периода",
             "vis" : "1",
             "dt" : "4",
             "dataDomain" : "0",
             "nullable" : "0",
             "hasHierarchy" : "0",
             "isSystem" : "1"
            },
            {
             "k" : "3",
             "id" : "NAME",
             "n" : "Имя элемента календаря",
             "vis" : "1",
             "dt" : "1",
             "predefined" : "Name",
             "dataDomain" : "0",
             "nullable" : "1",
             "hasHierarchy" : "0",
             "isSystem" : "1"
            },
            {
             "k" : "4",
             "id" : "ID",
             "n" : "Идентификатор",
             "vis" : "0",
             "dt" : "1",
             "predefined" : "Ident",
             "dataDomain" : "0",
             "nullable" : "0",
             "hasHierarchy" : "0",
             "isSystem" : "1"
            },
            {
             "k" : "5",
             "id" : "ORDER",
             "n" : "Порядок",
             "vis" : "0",
             "dt" : "2",
             "uniqueIndex" : "INDEX_ORDER",
             "predefined" : "Order",
             "dataDomain" : "0",
             "nullable" : "1",
             "hasHierarchy" : "0",
             "isSystem" : "1"
            },
            {
             "k" : "6",
             "id" : "PERIOD",
             "n" : "Период",
             "vis" : "0",
             "dt" : "4",
             "dataDomain" : "0",
             "nullable" : "1",
             "hasHierarchy" : "0",
             "isSystem" : "1"
            },
            {
             "k" : "7",
             "id" : "YEAR",
             "n" : "Номер года",
             "vis" : "0",
             "dt" : "2",
             "dataDomain" : "0",
             "nullable" : "1",
             "hasHierarchy" : "0",
             "isSystem" : "1"
            },
            {
             "k" : "8",
             "id" : "HALF_OF_YEAR",
             "n" : "Номер полугодия",
             "vis" : "0",
             "dt" : "2",
             "dataDomain" : "0",
             "nullable" : "1",
             "hasHierarchy" : "0",
             "isSystem" : "1"
            },
            {
             "k" : "9",
             "id" : "QUARTER",
             "n" : "Номер квартала",
             "vis" : "0",
             "dt" : "2",
             "dataDomain" : "0",
             "nullable" : "1",
             "hasHierarchy" : "0",
             "isSystem" : "1"
            }
          ]
        }
      }
    }
  }
}


public static GetDmClnResult GetCalendar(DmId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetDmCln()
    {
        tArg = new GetDmClnArg()
        {
            pattern = new DmClnMdPattern()
            {
                attrs = ListOperation.Get
            }
        },
        tDim = moniker
    };
    //Получение информации о календарном справочнике
    var result = somClient.GetDmCln(tGet);
    return result;
}


См. также:


[Работа
 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
